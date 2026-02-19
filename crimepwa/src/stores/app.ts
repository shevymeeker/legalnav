import { defineStore } from 'pinia';
import { db } from '@/db';
import resourcesPack from '@/content/resources.ky.v1.json';
import lifecycleMeta from '@/content/lifecycle.meta.ky.v1.json';
import { extractPhaseContent } from '@/utils/parseLifecycle';
import { normalizeQuery } from '@/services/search';

export type PhaseMeta = (typeof lifecycleMeta.phases)[number];
export type PhaseWithContent = PhaseMeta & { content: string };
export type Resource = (typeof resourcesPack.resources)[number];

// Build phases with content at module load time (synchronous, static)
const _phases: PhaseWithContent[] = lifecycleMeta.phases.map(p => ({
  ...p,
  content: extractPhaseContent(p.heading_marker)
}));

// Build resource lookup map
const _resourcesById = new Map<string, Resource>(
  resourcesPack.resources.map(r => [r.id, r])
);

export const useAppStore = defineStore('app', {
  state: () => ({
    loaded: false
  }),

  actions: {
    async ensureSeeded(force = false) {
      const count = await db.resources.count();
      if (count === 0 || force) {
        if (force) {
          await db.resources.clear();
        }
        await db.resources.bulkPut(resourcesPack.resources as any);
      }
      this.loaded = true;
    },

    getPhases(): PhaseWithContent[] {
      return _phases;
    },

    getPhase(id: string): PhaseWithContent | undefined {
      return _phases.find(p => p.id === id);
    },

    getResourcesForPhase(phase: PhaseWithContent): Resource[] {
      return (phase.related_resource_ids ?? [])
        .map(id => _resourcesById.get(id))
        .filter((r): r is Resource => r !== undefined);
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
    }
  }
});
