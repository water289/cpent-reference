#!/usr/bin/env python3
"""
normalize_tools.py — Convert newly-added tools to match the existing schema:
- command (string) -> commands (array of {label, command, when, output})
- install {linux,macos,...} -> install {kali, path?, notes?}
"""

import json
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"

def normalize_tool(t):
    changed = False

    # Convert command string to commands array
    if not t.get("commands") or len(t.get("commands", [])) == 0:
        cmd = t.get("command", "")
        if cmd and cmd.strip() and cmd.strip() != "#":
            t["commands"] = [{
                "label": f"Run {t['name']}",
                "command": cmd,
                "when": "General use",
                "output": f"Output of {t['name']}"
            }]
            changed = True
        elif cmd and cmd.strip() == "#":
            t["commands"] = [{
                "label": "Manual technique",
                "command": "# Manual technique",
                "when": "When automation is not applicable",
                "output": "Manual execution required"
            }]
            changed = True
        else:
            # No command at all, create a placeholder
            t["commands"] = [{
                "label": f"Run {t['name']}",
                "command": t.get("name", "unknown"),
                "when": "General use",
                "output": f"Output of {t.get('name', 'unknown')}"
            }]
            changed = True

    # Remove redundant single command string
    if "command" in t:
        del t["command"]
        changed = True

    # Convert install format: {linux, macos} -> {kali}
    inst = t.get("install", {})
    if inst and isinstance(inst, dict):
        if "kali" not in inst:
            kali_cmd = inst.get("linux") or inst.get("macos") or inst.get("windows") or ""
            if isinstance(kali_cmd, str) and kali_cmd.startswith("sudo apt"):
                t["install"] = {
                    "kali": kali_cmd,
                    "path": "Command line",
                    "notes": inst.get("macos", "")
                }
            elif isinstance(kali_cmd, str) and kali_cmd.startswith("brew"):
                t["install"] = {
                    "kali": kali_cmd,
                    "path": "Command line",
                    "notes": inst.get("linux", "")
                }
            elif isinstance(kali_cmd, str) and "#" in kali_cmd and kali_cmd.startswith("#"):
                t["install"] = {
                    "kali": "# Manual install or already available",
                    "path": "Varies",
                    "notes": kali_cmd
                }
            elif isinstance(kali_cmd, str) and kali_cmd.strip():
                t["install"] = {
                    "kali": kali_cmd,
                    "path": "Command line"
                }
            else:
                t["install"] = {
                    "kali": "# See official documentation",
                    "path": "Varies"
                }
            changed = True

    # Ensure os is a list
    if not isinstance(t.get("os"), list):
        t["os"] = [t.get("os", "linux")]
        changed = True

    # Ensure relatedTools and relatedTechniques exist
    if "relatedTools" not in t:
        t["relatedTools"] = []
        changed = True
    if "relatedTechniques" not in t:
        t["relatedTechniques"] = []
        changed = True

    # Ensure zone field exists
    if "zone" not in t and "category" in t:
        t["zone"] = t["category"]
        changed = True

    # Ensure zones is a list
    if "zones" not in t or not isinstance(t.get("zones"), list):
        t["zones"] = [t.get("zone", "general")]
        changed = True

    return changed

def main():
    path = DATA_DIR / "tools.json"
    tools = json.loads(path.read_text())
    fixed = 0
    for t in tools:
        if normalize_tool(t):
            fixed += 1
    path.write_text(json.dumps(tools, indent=2, ensure_ascii=False) + "\n")
    print(f"Normalized {fixed} / {len(tools)} tools")

    # Verify
    still_missing = [t for t in tools if not t.get("commands") or len(t.get("commands", [])) == 0]
    still_no_kali = [t for t in tools if not t.get("install", {}).get("kali")]
    print(f"Tools with empty commands: {len(still_missing)}")
    print(f"Tools without install.kali: {len(still_no_kali)}")

if __name__ == "__main__":
    main()
