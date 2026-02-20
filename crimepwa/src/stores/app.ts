import { defineStore } from 'pinia';
import { db } from '@/db';
import { loadContent } from '@/services/contentLoader';
import { extractPhaseContent, extractSubPhaseContent } from '@/utils/parseLifecycle';
import { normalizeQuery } from '@/services/search';

export type SubPhase = {
  id: string;
  heading_marker: string;
  title: string;
  short: string;
  tags?: string[];
};

export type PhaseMeta = {
  id: string;
  number: number;
  heading_marker: string;
  title: string;
  short: string;
  color: string;
  tags?: string[];
  related_resource_ids?: string[];
  sub_phases?: SubPhase[];
};

export type PhaseWithContent = PhaseMeta & { content: string };

export type Resource = {
  id: string;
  title: string;
  summary?: string;
  tags?: string[];
  file: string;
};

export type RelatedSection = {
  type: 'phase' | 'sub';
  phaseId: string;
  id: string;
  title: string;
};

export const useAppStore = defineStore('app', {
  state: () => ({
    loaded: false,
    contentError: false,
    phases: [] as PhaseWithContent[],
    _resourcesById: {} as Record<string, Resource>,
    _lifecycleRaw: '' as string,
  }),

  actions: {
    async ensureLoaded() {
      if (this.loaded) return;
      try {
        const { lifecycleMeta, lifecycleRaw, resources, isStale } = await loadContent();
        this._lifecycleRaw = lifecycleRaw;
        this.phases = lifecycleMeta.phases.map((p: PhaseMeta) => ({
          ...p,
          content: extractPhaseContent(lifecycleRaw, p.heading_marker)
        }));
        this._resourcesById = Object.fromEntries(
          resources.resources.map((r: Resource) => [r.id, r])
        );

        // Seed resources to IndexedDB for full-text search
        if (isStale || (await db.resources.count()) === 0) {
          await db.resources.clear();
          await db.resources.bulkPut(resources.resources);
        }

        this.loaded = true;
      } catch {
        this.contentError = true;
      }
    },

    // Keep legacy name so existing onMounted calls don't break during migration
    async ensureSeeded(_force = false) {
      return this.ensureLoaded();
    },

    getPhases(): PhaseWithContent[] {
      return this.phases;
    },

    getPhase(id: string): PhaseWithContent | undefined {
      return this.phases.find(p => p.id === id);
    },

    getSubPhaseContent(phaseId: string, subId: string): string {
      const phase = this.phases.find(p => p.id === phaseId);
      const sub = phase?.sub_phases?.find(s => s.id === subId);
      if (!phase || !sub || !this._lifecycleRaw) return '';
      return extractSubPhaseContent(this._lifecycleRaw, phase.heading_marker, sub.heading_marker);
    },

    /**
     * Returns the phase content with sub-phase sections removed.
     * Used on the phase overview page so broken-out sub-modules don't appear twice.
     */
    getPhaseMainContent(phaseId: string): string {
      const phase = this.phases.find(p => p.id === phaseId);
      if (!phase) return '';
      if (!phase.sub_phases?.length) return phase.content;

      const subMarkers = new Set(phase.sub_phases.map(s => s.heading_marker));
      // Split on ### boundaries; each section starts with "### Heading\n..."
      const sections = phase.content.split(/^(?=### )/m);
      const kept = sections.filter(s => {
        const firstLine = s.split('\n')[0].trim();
        return !subMarkers.has(firstLine);
      });
      return kept.join('').trim();
    },

    getResourcesForPhase(phase: PhaseWithContent): Resource[] {
      return (phase.related_resource_ids ?? [])
        .map(id => this._resourcesById[id])
        .filter((r): r is Resource => r !== undefined);
    },

    getRelatedSections(tags: string[], excludePhaseId?: string, excludeSubId?: string): RelatedSection[] {
      const results: RelatedSection[] = [];
      for (const phase of this.phases) {
        if (phase.tags?.some(t => tags.includes(t)) && phase.id !== excludePhaseId) {
          results.push({ type: 'phase', phaseId: phase.id, id: phase.id, title: phase.title });
        }
        for (const sub of phase.sub_phases ?? []) {
          if (sub.tags?.some(t => tags.includes(t)) && !(phase.id === excludePhaseId && sub.id === excludeSubId)) {
            results.push({ type: 'sub', phaseId: phase.id, id: sub.id, title: sub.title });
          }
        }
      }
      return results;
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
