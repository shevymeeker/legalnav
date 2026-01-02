// Minimal sanity checks: file presence and JSON parse
import fs from 'node:fs';
import path from 'node:path';

const mustExist = [
  'src/content/variables.ky.json',
  'src/content/modules.seed.ky.v1.json',
  'src/content/phrasebook.ky.v1.json',
  'src/content/graph.edges.ky.v1.json'
];

for (const p of mustExist) {
  if (!fs.existsSync(p)) {
    console.error('Missing:', p);
    process.exit(1);
  }
  if (p.endsWith('.json')) {
    JSON.parse(fs.readFileSync(p, 'utf8'));
  }
}

console.log('basic-lint OK');
