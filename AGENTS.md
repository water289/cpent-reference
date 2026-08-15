# AGENTS.md

## Project: CPENT Reference

A React + Vite single-page application serving as an interactive cheat sheet for the
EC-Council CPENT exam. Uses Argha Dey's 94%-scoring methodology integrated with
CPENT-standard workflows.

## Build & Run

```bash
npm run dev       # dev server with hot reload (auto-parses workflow files)
npm run build     # production build (auto-parses workflow files first)
npm run lint      # eslint - currently BROKEN (no eslint config exists)
npx vite preview  # preview production build
```

## Data Maintenance Scripts

Located in `scripts/`:

```bash
python3 scripts/migrate_schema.py     # Add category/zones fields to tools/techniques
python3 scripts/add_missing_tools.py  # Add tools from Argha Dey notes
python3 scripts/add_missing_techniques.py  # Add techniques from Argha Dey notes
python3 scripts/fill_empty_data.py    # Fill missing install/purpose/command/steps
python3 scripts/normalize_tools.py    # Normalize tool schema (commands[], install.kali)
python3 scripts/normalize_zones.py    # Remap zone fields to valid zone IDs
python3 scripts/build_crossrefs.py    # Build relatedTools/relatedTechniques cross-refs
node scripts/parseSourceFiles.cjs     # Merge workflow JSONs into workflows.json (run before build)
```

## Data Model

- **Zones**: 14 zones in `src/data/zones.json`
- **Tools**: `src/data/tools.json` (263 entries)
- **Techniques**: `src/data/techniques.json` (128 entries)
- **Workflows**: `src/data/workflows.json` (26 entries, compiled from `src/data/workflows/*.json`)

## Validation

```bash
# Validate all JSON files are well-formed
python3 -c "import json; [json.load(open(f'src/data/{f}')) for f in ['tools.json','techniques.json','workflows.json','zones.json']]; print('All valid')"
```

## Notes

- The frontend does NOT use `tool.category` — it uses `tool.zone` for colors, badges, and filtering.
- Tools must have a `commands` array (not a single `command` string) and `install.kali` field.
- Workflow JSON files live in `src/data/workflows/` and are merged into `workflows.json` by `parseSourceFiles.cjs`.
- ESLint is pre-existing broken — no fix has been implemented yet.
