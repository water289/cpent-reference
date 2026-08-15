#!/usr/bin/env python3
"""
migrate_schema.py — Add category + zones array to all tools and techniques.
The frontend expects these fields; current data only has 'zone' (string).
"""

import json
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"


def migrate_tools():
    path = DATA_DIR / "tools.json"
    tools = json.loads(path.read_text())
    for t in tools:
        zone = t.get("zone", "general")
        t["category"] = zone
        if "zones" not in t:
            t["zones"] = [zone]
        # Ensure os is a list
        if not isinstance(t.get("os"), list):
            t["os"] = [t.get("os", "linux")]
    path.write_text(json.dumps(tools, indent=2, ensure_ascii=False) + "\n")
    print(f"  Tools migrated: {len(tools)}")
    missing = [t["id"] for t in tools if not t.get("category") or not t.get("zones")]
    print(f"  Still missing category/zones: {len(missing)}")


def migrate_techniques():
    path = DATA_DIR / "techniques.json"
    techs = json.loads(path.read_text())
    for t in techs:
        zone = t.get("zone", "recon")
        t["category"] = zone
        if "zones" not in t:
            t["zones"] = [zone]
        if not isinstance(t.get("os"), list):
            t["os"] = [t.get("os", "any")]
    path.write_text(json.dumps(techs, indent=2, ensure_ascii=False) + "\n")
    print(f"  Techniques migrated: {len(techs)}")
    missing = [t["id"] for t in techs if not t.get("category") or not t.get("zones")]
    print(f"  Still missing category/zones: {len(missing)}")


def main():
    print("=== Schema Migration ===")
    migrate_tools()
    migrate_techniques()
    print("Done.")


if __name__ == "__main__":
    main()
