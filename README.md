# CPENT Reference

Interactive cheat sheet for the EC-Council CPENT (Certified Penetration Testing) exam.
Built with React 18, Vite 5, Tailwind CSS, and a data-driven JSON architecture.

## Quick Start

```bash
# Development
./run-cpent-reference.sh dev
# or
npm run dev

# Production build
./run-cpent-reference.sh build
# or
npm run build

# Preview production build
./run-cpent-reference.sh preview
# or
npx vite preview
```

## Project Structure

```
cpent-reference/
├── src/
│   ├── App.jsx              # Routes
│   ├── components/
│   │   ├── pages/           # Route pages (Dashboard, Tools, Techniques, Zones, Workflows, Strategy, etc.)
│   │   ├── layout/          # Sidebar, AppShell, MainContent, ContextPanel
│   │   ├── tools/           # ToolCard, ToolDetail, CommandBlock
│   │   ├── techniques/      # TechniqueCard, TechniqueDetail
│   │   ├── zones/           # ZoneMap, ZoneDetail
│   │   ├── strategy/        # StrategyPage, DecisionPanel
│   │   ├── search/          # SearchBar, SearchResults, CommandPalette
│   │   ├── ui/              # Badge, Breadcrumb, SourceBadge, CopyButton, etc.
│   │   └── hooks/           # useBookmarks, useConfidence, useHistory, useNotes
│   ├── context/             # AppContext (global state + data imports)
│   ├── data/                # JSON data files
│   │   ├── tools.json       # 263 tools with commands, install, purpose, cross-refs
│   │   ├── techniques.json  # 128 techniques with steps, prerequisites, remediation
│   │   ├── zones.json       # 14 exam zones
│   │   ├── workflows.json   # 26 workflows (compiled from workflows/)
│   │   ├── workflows/       # Individual workflow JSON files (source)
│   │   │   ├── *_argha-dey.json      # Argha Dey methodology (94% scorer)
│   │   │   └── *_workflow.json       # Standard CPENT workflows
│   │   ├── strategyData.js  # Strategy content (zone plans, mental model)
│   │   └── sourceLabels.js  # Source badge label logic
│   └── utils/               # filters, dataHelpers, search
├── scripts/
│   ├── parseSourceFiles.cjs # Merges workflow JSONs into workflows.json
│   ├── migrate_schema.py    # Adds category/zones fields
│   ├── add_missing_tools.py # Adds tools from Argha Dey notes
│   ├── add_missing_techniques.py # Adds techniques from notes
│   ├── fill_empty_data.py   # Fills empty install/purpose/command/steps
│   ├── normalize_tools.py   # Normalizes tool schema (commands[], install.kali)
│   ├── normalize_zones.py   # Remaps zone fields to valid zone IDs
│   ├── build_crossrefs.py   # Builds relatedTools/relatedTechniques
│   └── generate_report.py   # Generates PROJECT_STATE_REPORT.md
├── AGENTS.md                # Development reference for AI agents
└── run-cpent-reference.sh   # Convenience runner script
```

## Data Model

Separate JSON files (no unified data model):

| Dataset | Count | Description |
|---------|-------|-------------|
| Zones | 14 | CPENT exam domains (recon, AD, web, binary, IoT, CTF, etc.) |
| Tools | 263 | All commands, install instructions, cross-references |
| Techniques | 128 | Step-by-step procedures with prerequisites and remediation |
| Workflows | 26 | Attack chains (12 standard + 14 Argha Dey methodology) |

## Navigation

- **Dashboard** (`/`) — Zone map, stats, quick access
- **Strategy** (`/strategy`) — Zone-specific exam action plans with decision trees
- **Tools** (`/tools`) — Filterable tool grid
- **Techniques** (`/techniques`) — Filterable technique grid
- **Zones** (`/zones`) — Per-zone detail with workflows and tools
- **Workflows** (`/workflows`) — Visual attack chain selector
- **Argha Dey** (`/argha-dey`) — 94% scorer methodology viewer
- **Search** (`/search`) — Cmd+K fuzzy search
- **Bookmarks** (`/bookmarks`) — Saved items (localStorage)
- **Exam Mode** (`/exam`) — White-on-black exam-safe view

## Source Labels

Every workflow is labeled with its source:

| Label | Meaning |
|-------|---------|
| `OFFICIAL EXAM GUIDE` | From EC-Council CPENT exam documentation |
| `PROJECT REFERENCE` | Standard CPENT-standard workflows |
| `ARGHA DEY NOTES` | From Argha Dey's 94% scorer methodology |
| `PRACTICE / INFERENCE` | Lab-specific or community-derived techniques |

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `parseSourceFiles.cjs` | Merges `src/data/workflows/*.json` into `workflows.json` (run before build) |
| `migrate_schema.py` | Adds `category` + `zones[]` fields to tools/techniques |
| `add_missing_tools.py` | Adds 73+ tools from Argha Dey notes |
| `add_missing_techniques.py` | Adds 29+ techniques from Argha Dey notes |
| `fill_empty_data.py` | Fills missing install/purpose/command/steps/zone |
| `normalize_tools.py` | Converts to `commands[]` array + `install.kali` format |
| `normalize_zones.py` | Remaps zone values to match valid zone IDs |
| `build_crossrefs.py` | Generates `relatedTools`/`relatedTechniques` |
| `generate_report.py` | Outputs data inventory report |

## Development

```bash
# Run parse + dev server
npm run dev

# Production build (runs parse first)
npm run build

# Lint (currently broken — no ESLint config exists)
npm run lint
```
