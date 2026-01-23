import { defineStore } from 'pinia';
import { db } from '@/db';
import seedPack from '@/content/modules.seed.ky.v2.json';
import phrasebookPack from '@/content/phrasebook.ky.v1.json';
import edgesPack from '@/content/graph.edges.ky.v1.json';
import resourcesPack from '@/content/resources.ky.v1.json';
import vars from '@/content/variables.ky.json';
import { normalizeQuery, scoreModule } from '@/services/search';

export type Module = (typeof seedPack.modules)[number];
export type Edge = (typeof edgesPack.edges)[number];

export const useAppStore = defineStore('app', {
  state: () => ({
    lastSyncAt: null as number | null,
    variables: vars,
    seedVersion: seedPack.version,
    loaded: false
  }),

  actions: {
    async ensureSeeded(force = false) {
      const count = await db.modules.count();
      if (count === 0 || force) {
        if (force) {
          await db.transaction('rw', db.modules, db.edges, db.phrasebook, db.resources, async () => {
            await db.modules.clear();
            await db.edges.clear();
            await db.phrasebook.clear();
            await db.resources.clear();
          });
        }

        await db.transaction('rw', db.modules, db.edges, db.phrasebook, db.resources, async () => {
          await db.modules.bulkPut(seedPack.modules as any);
          await db.edges.bulkPut(edgesPack.edges as any);
          await db.phrasebook.bulkPut((phrasebookPack.mappings as any).map((m: any, idx: number) => ({ id: idx+1, ...m })));
          await db.resources.bulkPut((resourcesPack.resources as any) ?? []);

          // Generate edges from related_modules in v2 schema
          const generatedEdges: any[] = [];
          for (const mod of seedPack.modules as any[]) {
            if (mod.related_modules && Array.isArray(mod.related_modules)) {
              for (const relatedId of mod.related_modules) {
                generatedEdges.push({
                  from: mod.id,
                  to: relatedId,
                  type: 'RELATED'
                });
              }
            }
          }
          if (generatedEdges.length > 0) {
            await db.edges.bulkPut(generatedEdges);
          }
        });

        this.lastSyncAt = Date.now();
      } else {
        // Not forcing, just record that we have data.
        this.lastSyncAt = this.lastSyncAt ?? Date.now();
      }
      this.loaded = true;
    },

    async searchModules(q: string, phase?: string, actor?: string) {
      const nq = normalizeQuery(q);
      const all = await db.modules.toArray();
      const filtered = all.filter(m => {
        const okP = !phase || (m.phase_tags || []).includes(phase);
        const okA = !actor || (m.actor_tags || []).includes(actor);
        return okP && okA;
      });

      if (!nq) {
        // Return a stable, useful default: time-sensitive first then title.
        return filtered.sort((a,b) => (a.time_sensitivity||'').localeCompare(b.time_sensitivity||'') || (a.title||'').localeCompare(b.title||''));
      }

      // Phrasebook boost
      const pb = await db.phrasebook.toArray();
      const pbHits = pb.filter(x => (x.phrase || '').toLowerCase().includes(nq));
      const boostedIds = new Set<string>();
      pbHits.forEach(h => (h.to_modules || []).forEach((id: string) => boostedIds.add(id)));

      return filtered
        .map(m => ({ m, s: scoreModule(m as any, nq, boostedIds.has(m.id)) }))
        .filter(x => x.s > 0)
        .sort((a,b) => b.s - a.s)
        .map(x => x.m);
    },

    async searchResources(q: string) {
      const nq = normalizeQuery(q);
      const all = await db.resources.toArray();
      if (!nq) {
        return all.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
      }
      const terms = nq.split(' ').filter(Boolean);
      return all
        .map(r => {
          const hay = [r.title, r.summary, ...(r.tags || [])].join(' ').toLowerCase();
          const score = terms.reduce((acc, term) => acc + (hay.includes(term) ? 1 : 0), 0);
          return { r, score };
        })
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score || (a.r.title || '').localeCompare(b.r.title || ''))
        .map(x => x.r);
    },

    async getModule(id: string) {
      return await db.modules.get(id);
    },

    async neighbors(id: string) {
      const edges = await db.edges.where('from').equals(id).toArray();
      const back = await db.edges.where('to').equals(id).toArray();
      const all = [...edges.map(e => ({ ...e, dir: 'out' as const })), ...back.map(e => ({ ...e, dir: 'in' as const }))];
      const ids = Array.from(new Set(all.flatMap(e => [e.from, e.to]).filter(x => x !== id)));
      const mods = await db.modules.bulkGet(ids);
      const byId = new Map(mods.filter(Boolean).map(m => [(m as any).id, m]));
      return all.map(e => ({
        ...e,
        other: (e.dir === 'out') ? byId.get(e.to) : byId.get(e.from)
      }));
    },

    async exportAll() {
      const [mods, edges, pb, resources] = await Promise.all([
        db.modules.toArray(),
        db.edges.toArray(),
        db.phrasebook.toArray(),
        db.resources.toArray()
      ]);
      return {
        variables: this.variables,
        modules: { ...seedPack, modules: mods },
        edges: { ...edgesPack, edges },
        phrasebook: { ...phrasebookPack, mappings: pb.map(p => ({ phrase: p.phrase, to_modules: p.to_modules })) },
        resources: { ...resourcesPack, resources }
      };
    },

    async importAll(obj: any) {
      // Minimal trust: require modules array.
      if (!obj?.modules?.modules || !Array.isArray(obj.modules.modules)) {
        throw new Error('Import payload missing modules.modules array.');
      }
      const mods = obj.modules.modules;
      const edges = obj?.edges?.edges ?? [];
      const pb = obj?.phrasebook?.mappings ?? [];
      const resources = obj?.resources?.resources ?? [];
      const variables = obj?.variables ?? this.variables;

      await db.transaction('rw', db.modules, db.edges, db.phrasebook, db.resources, async () => {
        await db.modules.clear();
        await db.edges.clear();
        await db.phrasebook.clear();
        await db.resources.clear();

        await db.modules.bulkPut(mods);
        await db.edges.bulkPut(edges);
        await db.phrasebook.bulkPut(pb.map((m: any, idx: number) => ({ id: idx+1, ...m })));
        await db.resources.bulkPut(resources);
      });

      this.variables = variables;
      this.lastSyncAt = Date.now();
    }
  }
});
