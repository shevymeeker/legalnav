import { db } from '@/db';

const BASE = import.meta.env.BASE_URL + 'content/';

export type LoadedContent = {
  lifecycleMeta: any;
  lifecycleRaw: string;
  resources: any;
  /** true if content was freshly fetched (version mismatch), false if loaded from cache */
  isStale: boolean;
};

/**
 * Loads all app content. On first load (or when content.version.json changes),
 * fetches the three content files and caches them in IndexedDB. On subsequent
 * loads with the same version, reads directly from IndexedDB (works offline).
 */
export async function loadContent(): Promise<LoadedContent> {
  // Try to get the current version from the server
  let serverVersion: string | null = null;
  try {
    const r = await fetch(BASE + 'content.version.json');
    const json = await r.json();
    serverVersion = json.version;
  } catch {
    // Offline or server unreachable — fall back to IndexedDB cache entirely
  }

  const cachedVersion = await db.content_meta.get('version');

  // If offline and we have cached data, use it
  if (serverVersion === null) {
    const [meta, raw, res] = await Promise.all([
      db.content_meta.get('lifecycle_meta'),
      db.content_meta.get('lifecycle_raw'),
      db.content_meta.get('resources'),
    ]);
    if (!meta || !raw || !res) {
      throw new Error('Content unavailable offline');
    }
    return { lifecycleMeta: meta.data, lifecycleRaw: raw.data, resources: res.data, isStale: false };
  }

  // If version matches cached version, load from IndexedDB
  if (cachedVersion?.data === serverVersion) {
    const [meta, raw, res] = await Promise.all([
      db.content_meta.get('lifecycle_meta'),
      db.content_meta.get('lifecycle_raw'),
      db.content_meta.get('resources'),
    ]);
    if (meta && raw && res) {
      return { lifecycleMeta: meta.data, lifecycleRaw: raw.data, resources: res.data, isStale: false };
    }
    // Cache incomplete — fall through to fetch
  }

  // Version mismatch or incomplete cache — fetch all content files fresh
  const [meta, raw, res] = await Promise.all([
    fetch(BASE + 'lifecycle.meta.ky.v1.json').then(r => r.json()),
    fetch(BASE + 'daviess_criminal_lifecycle.md').then(r => r.text()),
    fetch(BASE + 'resources.ky.v1.json').then(r => r.json()),
  ]);

  // Store in IndexedDB for offline use
  await db.content_meta.bulkPut([
    { key: 'version', data: serverVersion },
    { key: 'lifecycle_meta', data: meta },
    { key: 'lifecycle_raw', data: raw },
    { key: 'resources', data: res },
  ]);

  return { lifecycleMeta: meta, lifecycleRaw: raw, resources: res, isStale: true };
}
