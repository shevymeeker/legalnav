export function normalizeQuery(q: string): string {
  return (q || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function includesAll(hay: string, terms: string[]) {
  return terms.every(t => hay.includes(t));
}

export function scoreModule(m: any, nq: string, phraseBoost: boolean): number {
  if (!nq) return 0;
  const terms = nq.split(' ').filter(Boolean);
  const hay = [
    m.id, m.title, m.one_line_purpose, m.summary,
    ...(m.phase_tags || []), ...(m.actor_tags || [])
  ].join(' ').toLowerCase();

  let score = 0;
  if (hay.includes(nq)) score += 8;
  if (includesAll(hay, terms)) score += 6;

  const title = (m.title || '').toLowerCase();
  const id = (m.id || '').toLowerCase();
  if (title.includes(nq)) score += 6;
  if (id.includes(nq)) score += 4;

  if (phraseBoost) score += 7;

  // Small bump for time-sensitive modules.
  const ts = (m.time_sensitivity || '').toLowerCase();
  if (ts === 'urgent') score += 2;
  if (ts === 'deadline') score += 3;

  return score;
}
