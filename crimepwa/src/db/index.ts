import Dexie, { type Table } from 'dexie';

export type ResourceRow = {
  id: string;
  title: string;
  summary?: string;
  tags?: string[];
  file: string;
};

class AppDB extends Dexie {
  resources!: Table<ResourceRow, string>;

  constructor() {
    super('kyLawNav');
    // v1/v2 kept for upgrade path — migrate existing users cleanly
    this.version(1).stores({
      modules: 'id, title, time_sensitivity, *phase_tags, *actor_tags',
      edges: '[from+to], from, to, type',
      phrasebook: '++id, phrase'
    });
    this.version(2).stores({
      modules: 'id, title, time_sensitivity, *phase_tags, *actor_tags',
      edges: '[from+to], from, to, type',
      phrasebook: '++id, phrase',
      resources: 'id, title, *tags'
    });
    // v3: drop modules/edges/phrasebook — only resources remain
    this.version(3).stores({
      modules: null,
      edges: null,
      phrasebook: null,
      resources: 'id, title, *tags'
    });
  }
}

export const db = new AppDB();
