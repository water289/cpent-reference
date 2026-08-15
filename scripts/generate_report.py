#!/usr/bin/env python3
"""Generate comprehensive project state report."""
import json
from pathlib import Path
from datetime import datetime

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"
OUT = Path(__file__).resolve().parent.parent / "PROJECT_STATE_REPORT.md"

tools = json.loads((DATA_DIR / "tools.json").read_text())
techs = json.loads((DATA_DIR / "techniques.json").read_text())
zones = json.loads((DATA_DIR / "zones.json").read_text())
wfs = json.loads((DATA_DIR / "workflows.json").read_text())

lines = []
def w(s=""):
    lines.append(s)

w("# COMPREHENSIVE PROJECT STATE REPORT")
w(f"Generated: {datetime.now().isoformat()}")
w()
w("## 1. ZONES (14 total)")
w()
w("| ID | Name | Color | Icon | Weight | Exam Weight | Tools | Techniques | Workflows |")
w("|---|---|---|---|---|---|---|---|---|")
for z in zones:
    zid = z["id"]
    t_count = sum(1 for t in tools if t.get("zone") == zid)
    tc_count = sum(1 for t in techs if t.get("zone") == zid)
    wf_ids = z.get("workflows", [])
    wf_count = len(wf_ids)
    w(f"| {zid} | {z['name']} | {z['color']} | {z['icon']} | {z['weight']}% | {z['examWeight']}% | {t_count} | {tc_count} | {wf_count} |")

w()
w("## 2. WORKFLOWS (26 total)")
w()
for wf in wfs:
    src = wf.get("source", "unknown")
    steps = wf.get("steps", [])
    phases = [s.get("phase", "") for s in steps]
    w(f"### {wf['id']}")
    w(f"- **Name**: {wf['name']}")
    w(f"- **Zone**: {wf['zone']}")
    w(f"- **Source**: {src}")
    w(f"- **Steps**: {len(steps)}")
    if wf.get("quickRef"):
        w(f"- **QuickRef**: `{wf['quickRef'][:120]}`")
    w(f"- **Phases**: {', '.join(phases)}")
    if "examHabits" in wf and wf["examHabits"]:
        habits = wf["examHabits"]
        if isinstance(habits, str):
            habits = [habits]
        w(f"- **Exam Habits** ({len(habits)}):")
        for h in habits:
            w(f"  - {h}")
    w()

w()
w("## 3. TOOLS (263 total)")
w()
w("| ID | Name | Zone | Type | OS | Tags | Commands |")
w("|---|---|---|---|---|---|---|")
for t in tools:
    os_list = ", ".join(t.get("os", []))
    tags = ", ".join(t.get("tags", []))
    cmds = len(t.get("commands", []))
    w(f"| {t['id']} | {t['name']} | {t.get('zone','')} | {t.get('type','')} | {os_list} | {tags} | {cmds} |")

w()
w("### Tool Details")
w()
for t in tools:
    w(f"#### {t['id']} — {t['name']}")
    w(f"- Zone: {t.get('zone','')} | Category: {t.get('category','')} | Type: {t.get('type','')}")
    w(f"- OS: {', '.join(t.get('os',[]))}")
    w(f"- Purpose: {t.get('purpose','')}")
    w(f"- Tags: {', '.join(t.get('tags',[]))}")
    inst = t.get("install", {})
    if inst:
        w(f"- Install (kali): {inst.get('kali','')}")
        if inst.get("path"):
            w(f"- Path: {inst['path']}")
        if inst.get("notes"):
            w(f"- Notes: {inst['notes']}")
    cmds = t.get("commands", [])
    w(f"- Commands ({len(cmds)}):")
    for cmd in cmds:
        w(f"  - **{cmd.get('label','')}**: `{cmd.get('command','')}`")
        if cmd.get("when"):
            w(f"    - When: {cmd['when']}")
        if cmd.get("output"):
            w(f"    - Output: {cmd['output']}")
    rel_techs = t.get("relatedTechniques", [])
    rel_tools = t.get("relatedTools", [])
    w(f"- Related Techniques: {len(rel_techs)} — {', '.join(rel_techs[:10])}")
    w(f"- Related Tools: {len(rel_tools)} — {', '.join(rel_tools[:10])}")
    w()

w()
w("## 4. TECHNIQUES (128 total)")
w()
w("| ID | Name | Zone | OS | Difficulty | Tags | Steps |")
w("|---|---|---|---|---|---|---|")
for t in techs:
    os_list = ", ".join(t.get("os", []))
    tags = ", ".join(t.get("tags", []))
    steps = len(t.get("steps", []))
    diff = t.get("difficulty", "")
    w(f"| {t['id']} | {t['name']} | {t.get('zone','')} | {os_list} | {diff} | {tags} | {steps} |")

w()
w("### Technique Details")
w()
for t in techs:
    w(f"#### {t['id']} — {t['name']}")
    w(f"- Zone: {t.get('zone','')} | Category: {t.get('category','')} | Difficulty: {t.get('difficulty','')}")
    w(f"- OS: {', '.join(t.get('os',[]))}")
    w(f"- Tags: {', '.join(t.get('tags',[]))}")
    w(f"- Purpose: {t.get('purpose','')}")
    w(f"- When To Use: {t.get('whenToUse','')}")
    w(f"- Prerequisites: {', '.join(t.get('prerequisites',[]))}")
    w(f"- Defense Bypass: {', '.join(t.get('defenseBypass',[]))}")
    w(f"- Remediation: {t.get('remediation','')}")
    w(f"- MITRE ID: {t.get('mitreId','')}")
    w(f"- Command: {t.get('command','')}")
    w(f"- Steps ({len(t.get('steps',[]))}):")
    for i, step in enumerate(t.get("steps", [])):
        w(f"  {i+1}. {step}")
    rel_tools = t.get("relatedTools", [])
    w(f"- Related Tools: {len(rel_tools)} — {', '.join(rel_tools[:15])}")
    w()

w()
w("## 5. REFERENCE WEBSITES & SOURCES")
w()
w("Referenced sources derived from the codebase and notes:")
w("- **crt.sh** — SSL certificate transparency logs")
w("- **GitHub** — tool repositories (mostly Go-based pentest tools)")
w("- **SecLists** (git) — wordlists for fuzzing/brute force")
w("- **MITRE ATT&CK** — framework for technique classification (MITRE IDs used in techniques)")
w("- **EC-Council CPENT** — exam framework")
w("- **Argha Dey CPENT Notes (94% scorer)** — source for methodology workflows")
w("- **OTX, Wayback Machine** — passive recon sources")
w("- **GTFOBins / LOLBAS** — legitimate executable abuse for privilege escalation")
w("- **Exploit-DB / Searchsploit** — local exploit database")
w("- **Factordb** — RSA factorization for crypto challenges")
w("- **CrackStation** — online hash lookup")
w("- **Google Fonts** — Inter, JetBrains Mono")
w()
w("## 6. SCRIPTS & BUILD PROCESS")
w()
w("- `scripts/parseSourceFiles.cjs` — Merges workflow JSONs from `src/data/workflows/*.json` into `workflows.json` (run before build)")
w("- `scripts/migrate_schema.py` — Adds `category` and `zones[]` fields")
w("- `scripts/add_missing_tools.py` — Adds new tools from Argha Dey notes")
w("- `scripts/add_missing_techniques.py` — Adds new techniques from Argha Dey notes")
w("- `scripts/fill_empty_data.py` — Fills missing install/purpose/command/steps")
w("- `scripts/normalize_tools.py` — Normalizes tool schema: `commands[]` array, `install.kali`")
w("- `scripts/normalize_zones.py` — Remaps zone fields to valid zone IDs")
w("- `scripts/build_crossrefs.py` — Builds `relatedTools`/`relatedTechniques` cross-references")
w()
w("### Build Commands")
w("- `npm run dev` — dev server (auto-parses workflow files)")
w("- `npm run build` — production build (auto-parses workflow files)")
w("- `npm run lint` — BROKEN (no ESLint config exists, pre-existing issue)")
w("- `npx vite preview` — preview production build")
w()
w("## 7. ARCHITECTURE NOTES")
w()
w("1. Separate JSON files (NOT a unified model): tools.json, techniques.json, zones.json, workflows.json")
w("2. Workflows are compiled from individual JSON files in src/data/workflows/")
w("3. The frontend uses `tool.zone` (not `tool.category`) for colors, badges, and filtering")
w("4. Tools must have `commands[]` array (not single `command` string) and `install.kali`")
w("5. Techniques must have `steps[]`, `purpose`, `command`, and `remediation`")
w("6. ZoneDetail renders real workflow step data — no hardcoded phase arrays")
w("7. Argha Dey methodology workflows are marked by `source` field containing 'Argha Dey'")
w("8. Cross-ref fields (`relatedTools`, `relatedTechniques`) are auto-generated by tag/category matching")
w()
w("## 8. STATISTICAL SUMMARY")
w()
w(f"- Total tools: {len(tools)}")
w(f"- Total techniques: {len(techs)}")
w(f"- Total workflows: {len(wfs)}")
w(f"- Total zones: {len(zones)}")
w(f"- Total commands: {sum(len(t.get('commands',[])) for t in tools)}")
w(f"- Tools with technique refs: {sum(1 for t in tools if t.get('relatedTechniques'))}")
w(f"- Techniques with tool refs: {sum(1 for t in techs if t.get('relatedTools'))}")
w(f"- Zones with 0 tools: {sum(1 for z in zones if not any(t.get('zone')==z['id'] for t in tools))}")
w(f"- Zones with 0 techniques: {sum(1 for z in zones if not any(t.get('zone')==z['id'] for t in techs))}")
w(f"- Zones with 0 workflows: {sum(1 for z in zones if not z.get('workflows'))}")
w()

OUT.write_text("\n".join(lines) + "\n")
print(f"Report written to {OUT} ({len(lines)} lines)")
