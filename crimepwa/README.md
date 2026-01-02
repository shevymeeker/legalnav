# KY Criminal Law Navigation (PWA Prototype)

This repo is a **mobile-first, offline-first** prototype for a criminal-law navigation system:
- Content is a **directed graph** of modules (cards) + edges (cross-references)
- Users search in **plain language**, then pivot via phases, actors, and related modules
- Data is stored locally in **IndexedDB** (Dexie) and can be exported/imported as a pack

## Quick Start

```bash
npm install
npm run dev
```

## Content Files (the knobs)

Edit these to extend the system:

- `src/content/variables.ky.json`  
  Add new phases, actors, edge types, complexity levels, etc.

- `src/content/modules.seed.ky.v1.json`  
  The seed module pack (30 starter modules).

- `src/content/graph.edges.ky.v1.json`  
  Cross-reference edges between modules.

- `src/content/phrasebook.ky.v1.json`  
  Plain-language phrase mappings that boost search.

Validate content:

```bash
npm run validate:content
```

## App Pages

- `/` Process (search + filters + cards)
- `/m/:id` Module detail (summary, action steps, what-if branches, connections)
- `/graph` Links (edge browser)
- `/data` Data manager (export/import/reset)

## GitHub Deployment Notes

- Works well on GitHub Pages if you deploy the built `dist/` folder.
- Because this uses client-side routing, ensure your host serves `index.html` for unknown paths.

## Safety / Scope

This is **informational UI scaffolding** and does not provide legal advice.
Many citations are marked `NEEDS_REVIEW` until a qualified reviewer verifies them.
