#!/usr/bin/env python3
"""
build_crossrefs.py — Build relatedTools <-> relatedTechniques cross-references
by matching tags and category relationships.
"""

import json, re
from pathlib import Path
from collections import defaultdict

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"

# Tag -> set of tool IDs
TAG_TOOLS = defaultdict(set)
# Tag -> set of tech IDs
TAG_TECHS = defaultdict(set)
# Category -> list of tech IDs
CAT_TECHS = defaultdict(list)
# Category -> list of tool IDs
CAT_TOOLS = defaultdict(list)


def extract_terms(s):
    """Extract lowercase keywords from a string."""
    return set(re.findall(r'\b[a-z][a-z0-9_]+\b', s.lower()))


def main():
    tools = json.loads((DATA_DIR / "tools.json").read_text())
    techs = json.loads((DATA_DIR / "techniques.json").read_text())

    # Build indexes
    for t in tools:
        tid = t["id"]
        for tag in t.get("tags", []):
            TAG_TOOLS[tag].add(tid)
            CAT_TOOLS[t.get("category", "")].append(tid)
        # Also link by name terms
        for term in extract_terms(t["name"]):
            if len(term) > 3 and term not in ("tool", "suite", "scanner", "framework", "engine", "kit"):
                TAG_TOOLS[term].add(tid)

    for t in techs:
        tid = t["id"]
        for tag in t.get("tags", []):
            TAG_TECHS[tag].add(tid)
            CAT_TECHS[t.get("category", "")].append(tid)
        for term in extract_terms(t["name"]):
            if len(term) > 3 and term not in ("tool", "suite", "scanner", "framework", "engine", "kit", "for", "and", "the"):
                TAG_TECHS[term].add(tid)

    # Build relatedTechniques for tools
    for t in tools:
        related_techs = set()
        related_techs.update(t.get("relatedTechniques", []))
        for tag in t.get("tags", []):
            related_techs |= TAG_TECHS.get(tag, set())
        for term in extract_terms(t.get("purpose", "")):
            related_techs |= TAG_TECHS.get(term, set())
        # Also match by category
        cat = t.get("category", "")
        for other_tech in techs:
            if other_tech.get("category") == cat:
                related_techs.add(other_tech["id"])
        related_techs.discard(t["id"])
        t["relatedTechniques"] = sorted(related_techs)[:15]

    # Build relatedTools for techniques
    for t in techs:
        related_tools = set()
        related_tools.update(t.get("relatedTools", []))
        for tag in t.get("tags", []):
            related_tools |= TAG_TOOLS.get(tag, set())
        for term in extract_terms(t.get("purpose", "")):
            related_tools |= TAG_TOOLS.get(term, set())
        # Also match by category
        cat = t.get("category", "")
        for other_tool in tools:
            if other_tool.get("category") == cat:
                related_tools.add(other_tool["id"])
        related_tools.discard(t["id"])
        t["relatedTools"] = sorted(related_tools)[:15]

    # Build relatedTools for tools (cross-tool references by shared tags)
    for t in tools:
        related = set()
        for tag in t.get("tags", []):
            for other_id in TAG_TOOLS.get(tag, set()):
                if other_id != t["id"]:
                    other = next((x for x in tools if x["id"] == other_id), None)
                    if other:
                        # Strong link: same category or direct tag match
                        if other.get("category") == t.get("category"):
                            related.add(other_id)
        related.discard(t["id"])
        t["relatedTools"] = sorted(related)[:10]

    # Write back
    (DATA_DIR / "tools.json").write_text(json.dumps(tools, indent=2, ensure_ascii=False) + "\n")
    (DATA_DIR / "techniques.json").write_text(json.dumps(techs, indent=2, ensure_ascii=False) + "\n")

    # Stats
    total_tech_refs = sum(len(t.get("relatedTechniques", [])) for t in tools)
    total_tool_refs = sum(len(t.get("relatedTools", [])) for t in techs)
    print(f"Tools with techniques refs: {sum(1 for t in tools if t.get('relatedTechniques'))} ({total_tech_refs} total refs)")
    print(f"Techniques with tool refs: {sum(1 for t in techs if t.get('relatedTools'))} ({total_tool_refs} total refs)")


if __name__ == "__main__":
    main()
