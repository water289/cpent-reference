#!/usr/bin/env python3
"""
normalize_zones.py — Remap tool/technique zones to match valid zone IDs
from zones.json. The new tools used descriptive categories (osint, network,
forensics, etc.) that need to be mapped to official zone IDs.
"""

import json
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"

VALID_ZONES = {
    "recon", "network-enum", "active-directory", "web", "binary-exploitation",
    "iot-firmware", "privilege-escalation", "lateral-movement",
    "password-attacks", "post-exploitation", "exploitation-frameworks",
    "reporting", "ctf", "defense-evasion"
}

# Map of old category/zone -> valid zone ID
ZONE_MAP = {
    "osint": "recon",
    "network": "network-enum",
    "forensics": "ctf",
    "crypto": "ctf",
    "reverse-engineering": "binary-exploitation",
    "mobile": "web",
    "password": "password-attacks",
    "exploit": "exploitation-frameworks",
    "priv-esc": "privilege-escalation",
}

def remap_zone(z):
    if z in VALID_ZONES:
        return z
    return ZONE_MAP.get(z, "recon")

def main():
    tools_path = DATA_DIR / "tools.json"
    techs_path = DATA_DIR / "techniques.json"

    # Fix tools
    tools = json.loads(tools_path.read_text())
    fixed = 0
    for t in tools:
        zone = t.get("zone", t.get("category", "recon"))
        new_zone = remap_zone(zone)
        if new_zone != zone:
            t["zone"] = new_zone
            t["category"] = new_zone
            # Remap zones list
            new_zones = [remap_zone(z) for z in t.get("zones", [zone]) if remap_zone(z) in VALID_ZONES]
            # Add original zone back if it was useful (e.g., osint is still "recon" but we keep both)
            unique_zones = list(dict.fromkeys(new_zones))
            if not unique_zones:
                unique_zones = [new_zone]
            t["zones"] = unique_zones
            fixed += 1
        # Ensure zone is set
        if not t.get("zone"):
            t["zone"] = "recon"
            t["category"] = "recon"
            t["zones"] = ["recon"]
            fixed += 1

    tools_path.write_text(json.dumps(tools, indent=2, ensure_ascii=False) + "\n")
    print(f"Tools: {fixed} zones remapped")

    # Fix techniques
    techs = json.loads(techs_path.read_text())
    fixed_t = 0
    for t in techs:
        zone = t.get("zone", t.get("category", "recon"))
        new_zone = remap_zone(zone)
        if new_zone != zone:
            t["zone"] = new_zone
            t["category"] = new_zone
            fixed_t += 1
        if not t.get("zone"):
            t["zone"] = "recon"
            t["category"] = "recon"
            fixed_t += 1

    techs_path.write_text(json.dumps(techs, indent=2, ensure_ascii=False) + "\n")
    print(f"Techniques: {fixed_t} zones remapped")

    # Verify
    remaining_bad = set()
    for t in tools:
        z = t.get("zone", "")
        if z not in VALID_ZONES:
            remaining_bad.add(z)
    print(f"Tools with invalid zones: {remaining_bad}")

    remaining_bad_t = set()
    for t in techs:
        z = t.get("zone", "")
        if z not in VALID_ZONES:
            remaining_bad_t.add(z)
    print(f"Techniques with invalid zones: {remaining_bad_t}")

if __name__ == "__main__":
    main()
