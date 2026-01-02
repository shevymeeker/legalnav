import Dexie, { type Table } from 'dexie';

export type ModuleRow = {
  id: string;
  title: string;
  one_line_purpose?: string;
  jurisdiction_scope?: string;
  phase_tags?: string[];
  actor_tags?: string[];
  complexity?: string;
  time_sensitivity?: string;
  summary?: string;
  deadlines?: any[];
  authority_refs?: any[];
  what_to_do_now?: string[];
  what_if_branches?: any[];
  related_nodes?: any[];
  last_reviewed_at?: string | null;
  review_owner_role?: string | null;
};

export type EdgeRow = { from: string; to: string; type: string };
export type PhraseRow = { id?: number; phrase: string; to_modules: string[] };

class AppDB extends Dexie {
  modules!: Table<ModuleRow, string>;
  edges!: Table<EdgeRow, [string, string]>;
  phrasebook!: Table<PhraseRow, number>;

  constructor() {
    super('kyLawNav');
    this.version(1).stores({
      modules: 'id, title, time_sensitivity, *phase_tags, *actor_tags',
      edges: '[from+to], from, to, type',
      phrasebook: '++id, phrase'
    });
  }
}

export const db = new AppDB();
