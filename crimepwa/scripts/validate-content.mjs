import fs from 'node:fs';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const variables = JSON.parse(fs.readFileSync('src/content/variables.ky.json', 'utf8'));
const pack = JSON.parse(fs.readFileSync('src/content/modules.seed.ky.v1.json', 'utf8'));
const edges = JSON.parse(fs.readFileSync('src/content/graph.edges.ky.v1.json', 'utf8'));
const phrasebook = JSON.parse(fs.readFileSync('src/content/phrasebook.ky.v1.json', 'utf8'));

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
addFormats(ajv);

const schema = {
  type: 'object',
  required: ['pack_id','version','jurisdiction_scope','modules'],
  properties: {
    pack_id: { type: 'string' },
    version: { type: 'string' },
    jurisdiction_scope: { type: 'string' },
    modules: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['id','title','phase_tags','actor_tags','summary'],
        properties: {
          id: { type: 'string', minLength: 3 },
          title: { type: 'string', minLength: 3 },
          one_line_purpose: { type: 'string' },
          phase_tags: { type: 'array', items: { type: 'string' } },
          actor_tags: { type: 'array', items: { type: 'string' } },
          complexity: { type: 'string' },
          time_sensitivity: { type: 'string' },
          summary: { type: 'string', minLength: 10 },
          authority_refs: { type: 'array' },
          deadlines: { type: 'array' },
          what_to_do_now: { type: 'array', items: { type: 'string' } },
          what_if_branches: { type: 'array' },
          related_nodes: { type: 'array' }
        },
        additionalProperties: true
      }
    }
  },
  additionalProperties: true
};

const validate = ajv.compile(schema);
const ok = validate(pack);

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

if (!ok) {
  fail('Module pack schema errors:\n' + ajv.errorsText(validate.errors, { separator: '\n' }));
}

// Tag validation vs variables
const phaseSet = new Set(variables.phases);
const actorSet = new Set(variables.actors);
const complexitySet = new Set(variables.complexity_levels);
const tsSet = new Set(variables.time_sensitivity_levels);

for (const m of pack.modules) {
  for (const p of (m.phase_tags || [])) {
    if (!phaseSet.has(p)) fail(`Unknown phase tag "${p}" in module ${m.id}`);
  }
  for (const a of (m.actor_tags || [])) {
    if (!actorSet.has(a)) fail(`Unknown actor tag "${a}" in module ${m.id}`);
  }
  if (m.complexity && !complexitySet.has(m.complexity)) fail(`Unknown complexity "${m.complexity}" in module ${m.id}`);
  if (m.time_sensitivity && !tsSet.has(m.time_sensitivity)) fail(`Unknown time_sensitivity "${m.time_sensitivity}" in module ${m.id}`);
}

// Edge validation
const moduleIds = new Set(pack.modules.map(m => m.id));
const edgeTypeSet = new Set(variables.edge_types);
for (const e of edges.edges) {
  if (!moduleIds.has(e.from)) fail(`Edge from unknown module: ${e.from}`);
  if (!moduleIds.has(e.to)) fail(`Edge to unknown module: ${e.to}`);
  if (!edgeTypeSet.has(e.type)) fail(`Edge has unknown type: ${e.type}`);
}

// Phrasebook validation
for (const m of phrasebook.mappings) {
  for (const id of (m.to_modules || [])) {
    if (!moduleIds.has(id)) fail(`Phrasebook points to unknown module: ${id}`);
  }
}

console.log('validate-content OK');
