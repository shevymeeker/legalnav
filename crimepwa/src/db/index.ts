import Dexie, { type Table } from 'dexie';

export type ResourceRow = {
  id: string;
  title: string;
  summary?: string;
  tags?: string[];
  file: string;
};

export type ContentMetaRow = {
  key: string;
  data: any;
};

class AppDB extends Dexie {
  resources!: Table<ResourceRow, string>;
  content_meta!: Table<ContentMetaRow, string>;

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
    // v4: clear resources to force re-seed with updated pack (new local rules PDFs added)
    this.version(4).stores({
      resources: 'id, title, *tags'
    }).upgrade(tx => {
      return tx.table('resources').clear();
    });
    // v5: add content_meta table for runtime-fetched content caching
    this.version(5).stores({
      resources: 'id, title, *tags',
      content_meta: 'key'
    });
  }
}

export const db = new AppDB();
