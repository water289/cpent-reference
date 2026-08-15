#!/usr/bin/env python3
"""
sync_toolkit.py - Synchronize cpent-toolkit with tools.json

Reads tools.json, checks whether each tool is available on the system
(Kali package) or in cpent-toolkit/, and downloads/clones missing tools.
Generates TOOLKIT_MANIFEST.md documenting what's installed vs. Kali-native.

Usage:
  python3 sync_toolkit.py                  # sync all missing tools
  python3 sync_toolkit.py --dry-run          # show what would be done
  python3 sync_toolkit.py --tool <id>        # sync a single tool
"""

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_DIR = SCRIPT_DIR.parent
TOOLKIT_DIR = PROJECT_DIR.parent / "cpent-toolkit"
DATA_DIR = PROJECT_DIR / "src" / "data"
TOOLS_JSON = DATA_DIR / "tools.json"

# ---------------------------------------------------------------------------
# Tool registry: tool_id -> install specification
#
# Each "missing" tool gets an entry describing how to obtain it.
# Supported types:
#   git   : clone a repo (shallow) into cpent-toolkit/<zone>/<repo-name>/
#   apt   : install via apt (Kali package)
#   pip   : install via pip
#
# After cloning, the tool's actual file lives at:
#   cpent-toolkit/<zone>/<repo_name>/<subpath>
# ----------------------------------------------------------
TOOL_REGISTRY = {
    # ---- Active Directory ----
    "powerview": {
        "type": "git",
        "repo": "https://github.com/HarmJ0y/PowerSploit.git",
        "zone": "03-active-directory",
        "subpath": "PowerSploit/Recon/PowerView.ps1",
        "kali": "",
    },
    "mimikatz": {
        "type": "git",
        "repo": "https://github.com/gentilkiwi/mimikatz.git",
        "zone": "10-post-exploitation",
        "subpath": "mimikatz/mimikatz.exe",
        "kali": "mimikatz",
    },
    "rubeus": {
        "type": "git",
        "repo": "https://github.com/GhostPack/Rubeus.git",
        "zone": "10-post-exploitation",
        "subpath": "Rubeus/Rubeus.exe",
        "kali": "rubeus",
    },
    "sharphound": {
        "type": "git",
        "repo": "https://github.com/BloodHoundIO/InSpectr.git",
        "zone": "03-active-directory",
        "subpath": "SharpHound.exe",
        "kali": "bloodhound",
        "notes": "SharpHound binary ships inside the BloodHound package on Kali; clone repo for source.",
    },
    "whisker": {
        "type": "git",
        "repo": "https://github.com/0x09al/Whisker.git",
        "zone": "03-active-directory",
        "subpath": "Whisker.exe",
        "kali": "whisker",
    },
    "certify": {
        "type": "git",
        "repo": "https://github.com/GhostPack/Certify.git",
        "zone": "03-active-directory",
        "subpath": "Certify/Certify.exe",
        "kali": "",
    },
    "petitpotam": {
        "type": "git",
        "repo": "https://github.com/topotam/PetitPotam.git",
        "zone": "03-active-directory",
        "subpath": "",
        "kali": "python3-petitpotam",
        "notes": "PetitPotam.py — Kali package python3-petitpotam ships the canonical version.",
    },
    "windapsearch": {
        "type": "git",
        "repo": "https://github.com/ropnop/windapsearch.git",
        "zone": "03-active-directory",
        "subpath": "windapsearch/windapsearch.py",
        "kali": "python3-windapsearch",
    },
    "ldapnomnom": {
        "type": "git",
        "repo": "https://github.com/lkarlslund/ldapnomnom.git",
        "zone": "03-active-directory",
        "subpath": "ldapnomnom",
        "kali": "",
    },
    "ldaprelayscan": {
        "type": "git",
        "repo": "https://github.com/zyn3rgy/LdapRelayScan.git",
        "zone": "03-active-directory",
        "subpath": "LdapRelayScan.py",
        "kali": "",
    },
    "krbrelayx": {
        "type": "git",
        "repo": "https://github.com/dirkjanm/krbrelayx.git",
        "zone": "03-active-directory",
        "subpath": "krbrelayx.py",
        "kali": "impacket-krbrelayx",
        "notes": "Requires impacket + ldap3; install via pip after clone",
    },
    "pre2k": {
        "type": "git",
        "repo": "https://github.com/garrettfoster13/pre2k.git",
        "zone": "03-active-directory",
        "subpath": "",
        "kali": "pre2k",
        "notes": "Install: pip3 install --break-system-packages .",
        "post_cmd": "pip3 install --break-system-packages .",
    },
    "powermad": {
        "type": "git",
        "repo": "https://github.com/Kevin-Robertson/PowerMad.git",
        "zone": "03-active-directory",
        "subpath": "Powermad.ps1",
        "kali": "",
    },
    "seatbelt": {
        "type": "git",
        "repo": "https://github.com/GhostPack/Seatbelt.git",
        "zone": "03-active-directory",
        "subpath": "Seatbelt/bin/Release/Seatbelt.exe",
        "kali": "",
    },
    # ---- Privilege Escalation ----
    "winpeas": {
        "type": "git",
        "repo": "https://github.com/peass-ng/PEASS-ng.git",
        "zone": "07-privilege-escalation",
        "subpath": "winPEAS/winPEASx64.exe",
        "kali": "winpeas",
    },
    "linenum": {
        "type": "git",
        "repo": "https://github.com/rebootuser/LinEnum.git",
        "zone": "07-privilege-escalation",
        "subpath": "LinEnum.sh",
        "kali": "",
    },
    "sherlock": {
        "type": "git",
        "repo": "https://github.com/HarmJ0y/PowerSploit.git",
        "zone": "07-privilege-escalation",
        "subpath": "PowerSploit/Exfiltration/Invoke-Sherlock.ps1",
        "kali": "",
    },
    "privesccheck": {
        "type": "git",
        "repo": "https://github.com/itm4n/PrivescCheck.git",
        "zone": "07-privilege-escalation",
        "subpath": "PrivescCheck.ps1",
        "kali": "",
    },
    "beroot": {
        "type": "git",
        "repo": "https://github.com/AlessandroZ/BeRoot.git",
        "zone": "07-privilege-escalation",
        "subpath": "BeRoot.exe",
        "kali": "",
    },
    "windows-exploit-suggester": {
        "type": "git",
        "repo": "https://github.com/AonCyberLabs/Windows-Exploit-Suggester.git",
        "zone": "07-privilege-escalation",
        "subpath": "windows-exploit-suggester.py",
        "kali": "",
    },
    "juicy-potato": {
        "type": "git",
        "repo": "https://github.com/ohpe/juicy-potato.git",
        "zone": "07-privilege-escalation",
        "subpath": "JuicyPotato.exe",
        "kali": "",
    },
    "printspoofer": {
        "type": "git",
        "repo": "https://github.com/itm4n/PrintSpoofer.git",
        "zone": "07-privilege-escalation",
        "subpath": "PrintSpoofer.exe",
        "kali": "",
    },
    "godpotato": {
        "type": "git",
        "repo": "https://github.com/BeichenDream/GodPotato.git",
        "zone": "07-privilege-escalation",
        "subpath": "GodPotato.exe",
        "kali": "",
    },
    # ---- Web application ----
    "liffy": {
        "type": "git",
        "repo": "https://github.com/mzfr/liffy.git",
        "zone": "04-web-application",
        "subpath": "liffy.py",
        "kali": "",
    },
    "lfisuite": {
        "type": "git",
        "repo": "https://github.com/D35m0nd142/LFISuite.git",
        "zone": "04-web-application",
        "subpath": "lfisuite.py",
        "kali": "",
    },
    "corsy": {
        "type": "git",
        "repo": "https://github.com/s0md3v/Corsy.git",
        "zone": "04-web-application",
        "subpath": "corsy/corsy.py",
        "kali": "",
        "notes": "Clone from https://github.com/synacktiv/Corsy (if 404, manual build needed)",
    },
    "jwt_tool": {
        "type": "git",
        "repo": "https://github.com/ticarpi/jwt_tool.git",
        "zone": "04-web-application",
        "subpath": "jwt_tool.py",
        "kali": "",
    },
    "paramspider": {
        "type": "git",
        "repo": "https://github.com/0xParveen/paramspider.git",
        "zone": "04-web-application",
        "subpath": "paramspider.py",
        "kali": "",
    },
    "cmsmap": {
        "type": "git",
        "repo": "https://github.com/Dionach/CMSmap.git",
        "zone": "04-web-application",
        "subpath": "cmsmap.py",
        "kali": "cmsmap",
    },
    "wpforce": {
        "type": "git",
        "repo": "https://github.com/n00py/wpforce.git",
        "zone": "04-web-application",
        "subpath": "wpforce.py",
        "kali": "",
    },
    "xsstrike": {
        "type": "git",
        "repo": "https://github.com/UltimateHackers/XSStrike.git",
        "zone": "web",
        "subpath": "xsstrike.py",
        "kali": "",
    },
    # ---- Binary exploitation ----
    "pwntools": {
        "type": "pip",
        "kali": "pwntools",
        "zone": "05-binary-exploitation",
        "subpath": "",
    },
    "pwndbg": {
        "type": "git",
        "repo": "https://github.com/pwndbg/pwndbg.git",
        "zone": "05-binary-exploitation",
        "subpath": "",
        "kali": "gdb-pwndbg",
        "post_cmd": "cd pwndbg && ./setup.sh",
    },
    "qemu": {
        "type": "git",
        "repo": "https://github.com/qemu/qemu.git",
        "zone": "06-iot-firmware",
        "subpath": "",
        "kali": "qemu-user qemu-user-static",
        "notes": "qemu-arm exists at /usr/bin/qemu-arm. Static binaries need apt install qemu-user-static (requires root).",
    },
    "gef": {
        "type": "git",
        "repo": "https://github.com/hugsy/gef.git",
        "zone": "05-binary-exploitation",
        "subpath": "gef.py",
        "kali": "",
        "notes": "Install via: bash -c \"$(curl -fsSL https://gef.blah.cat/sh)\"",
    },
    "pwninit": {
        "type": "pip",
        "kali": "pwninit",
        "zone": "05-binary-exploitation",
        "subpath": "",
    },
    "seccomp-tools": {
        "type": "gem",
        "kali": "seccomp-tools",
        "zone": "05-binary-exploitation",
        "subpath": "",
    },
    "ropgadget": {
        "type": "pip",
        "kali": "ropgadget",
        "zone": "05-binary-exploitation",
        "subpath": "",
    },
    "one_gadget": {
        "type": "pip",
        "kali": "one_gadget",
        "zone": "05-binary-exploitation",
        "subpath": "",
    },
    "ropper": {
        "type": "pip",
        "kali": "ropper",
        "zone": "05-binary-exploitation",
        "subpath": "",
    },
    "libc-database": {
        "type": "git",
        "repo": "https://github.com/lieanu/libc-database.git",
        "zone": "05-binary-exploitation",
        "subpath": "",
        "kali": "",
    },
    "boofuzz": {
        "type": "pip",
        "kali": "boofuzz",
        "zone": "06-iot-firmware",
        "subpath": "",
    },
    # ---- IoT / firmware ----
    "mqtt-explorer": {
        "type": "git",
        "repo": "https://github.com/thomasnordquist/MQTT-Explorer.git",
        "zone": "06-iot-firmware",
        "subpath": "",
        "kali": "",
        "notes": "GUI Electron app — download AppImage from releases for runtime",
    },
    # ---- Recon ----
    "foca": {
        "type": "git",
        "repo": "https://github.com/ElevenPaths/FOCA.git",
        "zone": "01-recon",
        "subpath": "",
        "kali": "",
    },
    "ivre": {
        "type": "pip",
        "kali": "ivre",
        "zone": "recon",
        "subpath": "",
    },
    "metagoofil": {
        "type": "git",
        "repo": "https://github.com/laramoja/metagoofil.git",
        "zone": "01-recon",
        "subpath": "metagoofil.py",
        "kali": "",
    },
    # ---- Post-exploitation ----
    "empire": {
        "type": "git",
        "repo": "https://github.com/EmpireProject/Empire.git",
        "zone": "10-post-exploitation",
        "subpath": "",
        "kali": "empire",
    },
    "covenant": {
        "type": "git",
        "repo": "https://github.com/cobbr/Covenant.git",
        "zone": "10-post-exploitation",
        "subpath": "",
        "kali": "",
    },
    # ---- Post-exploitation ----
    "lazagne": {
        "type": "git",
        "repo": "https://github.com/AlessandroZ/LaZagne.git",
        "zone": "10-post-exploitation",
        "subpath": "Linux/la-zagne.py",
        "kali": "",
    },
    "sliver": {
        "type": "git",
        "repo": "https://github.com/BishopFox/sliver.git",
        "zone": "10-post-exploitation",
        "subpath": "",
        "kali": "sliver",
    },
    "linpeas": {
        "type": "git",
        "repo": "https://github.com/peass-ng/PEASS-ng.git",
        "zone": "07-privilege-escalation",
        "subpath": "linPEAS.sh",
        "kali": "linpeas",
    },
    "powerup": {
        "type": "git",
        "repo": "https://github.com/HarmJ0y/PowerSploit.git",
        "zone": "07-privilege-escalation",
        "subpath": "PowerSploit/Privesc/PowerUp.ps1",
        "kali": "",
    },
    "linpeas-py": {
        "type": "pip",
        "kali": "",
        "zone": "07-privilege-escalation",
        "subpath": "",
    },
    "rpivot": {
        "type": "git",
        "repo": "https://github.com/nccgroup/rpivot.git",
        "zone": "08-lateral-movement",
        "subpath": "rpivot.py",
        "kali": "",
    },
    "nishang": {
        "type": "git",
        "repo": "https://github.com/samratashok/nishang.git",
        "zone": "10-post-exploitation",
        "subpath": "",
        "kali": "",
    },
    "linux-exploit-suggester": {
        "type": "git",
        "repo": "https://github.com/The-Z-Labs/linux-exploit-suggester.git",
        "zone": "07-privilege-escalation",
        "subpath": "linux-exploit-suggester.sh",
        "kali": "",
    },
    "pspy": {
        "type": "download",
        "url": "https://github.com/DominicBreuker/pspy/releases/latest/download/pspy64",
        "zone": "07-privilege-escalation",
        "kali": "",
    },
    "qemu-mips-static": {
        "type": "apt",
        "kali": "qemu-user-static",
        "zone": "06-iot-firmware",
        "subpath": "/usr/bin/qemu-mipsel-static",
    },
    "qemu-arm-static": {
        "type": "apt",
        "kali": "qemu-user-static",
        "zone": "06-iot-firmware",
        "subpath": "/usr/bin/qemu-arm-static",
    },
    "openocd": {
        "type": "apt",
        "kali": "openocd",
        "zone": "06-iot-firmware",
        "subpath": "/usr/bin/openocd",
    },
    "docker": {
        "type": "apt",
        "kali": "docker.io",
        "zone": "general",
        "subpath": "/usr/bin/docker",
    },
    "gcc": {
        "type": "apt",
        "kali": "gcc",
        "zone": "05-binary-exploitation",
        "subpath": "/usr/bin/gcc",
    },
    "gdb-multiarch": {
        "type": "apt",
        "kali": "gdb-multiarch",
        "zone": "05-binary-exploitation",
        "subpath": "/usr/bin/gdb-multiarch",
    },
    "reg": {
        "type": "script",
        "repo": "",
        "zone": "privilege-escalation",
        "subpath": "C:\\\\Windows\\\\System32\\\\reg.exe",
        "kali": "",
        "notes": "Windows system binary; not available on Linux. Use Wine or target Windows host.",
    },
    "icacls": {
        "type": "script",
        "repo": "",
        "zone": "privilege-escalation",
        "subpath": "C:\\\\Windows\\\\System32\\\\icacls.exe",
        "kali": "",
        "notes": "Windows system binary; not available on Linux.",
    },
    "wmic": {
        "type": "script",
        "repo": "",
        "zone": "privilege-escalation",
        "subpath": "C:\\\\Windows\\\\System32\\\\wbem\\\\wmic.exe",
        "kali": "",
        "notes": "Windows system binary; not available on Linux. Use impsync/wmiexec.py alternative.",
    },
    "jtagulator": {
        "type": "script",
        "repo": "",
        "zone": "iot-firmware",
        "subpath": "",
        "kali": "",
        "notes": "Hardware tool by Hak5; not installable on Linux. Requires physical hardware.",
    },
    "watson": {
        "type": "git",
        "repo": "https://github.com/rasta-mouse/Watson.git",
        "zone": "07-privilege-escalation",
        "subpath": "",
        "kali": "",
    },
    "gdb-peda": {
        "type": "git",
        "repo": "https://github.com/longld/peda.git",
        "zone": "05-binary-exploitation",
        "subpath": "peda.py",
        "kali": "",
    },
    "shellter": {
        "type": "apt",
        "kali": "shellther",
        "zone": "exploitation-frameworks",
        "subpath": "/usr/bin/shellther",
    },
    "lse": {
        "type": "git",
        "repo": "https://github.com/diego-treitos/linux-smart-enumeration.git",
        "zone": "07-privilege-escalation",
        "subpath": "lse.sh",
        "kali": "",
    },
    # ---- Windows-only tools (source repos in toolkit) ----
    "accesschk": {
        "type": "script",
        "repo": "https://github.com/microsoft/AccessChk",
        "zone": "privilege-escalation",
        "subpath": "",
        "kali": "",
        "notes": "Microsoft Sysinternals tool; download from https://learn.microsoft.com/en-us/sysinternals/downloads/accesschk (Windows only)",
    },
    "jucypotato": {
        "type": "git",
        "repo": "https://github.com/ohpe/juicy-potato.git",
        "zone": "privilege-escalation",
        "subpath": "JuicyPotato.exe",
        "kali": "",
        "notes": "Windows .NET executable; compile on Windows",
    },
    "roguepotato": {
        "type": "git",
        "repo": "https://github.com/antonioCoco/RoguePotato.git",
        "zone": "privilege-escalation",
        "subpath": "",
        "kali": "",
        "notes": "Windows .NET executable; compile on Windows",
    },
    # ---- Active Directory (additional) ----
    "impacket": {
        "type": "pip",
        "kali": "impacket",
        "zone": "03-active-directory",
        "subpath": "",
    },
    "coercer": {
        "type": "pip",
        "kali": "coercer",
        "zone": "03-active-directory",
        "subpath": "",
    },
    "adidnsdump": {
        "type": "pip",
        "kali": "adidnsdump",
        "zone": "03-active-directory",
        "subpath": "",
    },
    "ldeep": {
        "type": "pip",
        "kali": "ldeep",
        "zone": "03-active-directory",
        "subpath": "",
    },
    "bloodyad": {
        "type": "pip",
        "kali": "bloodyad",
        "zone": "03-active-directory",
        "subpath": "",
    },
    "plumhound": {
        "type": "git",
        "repo": "https://github.com/PlumHound/PlumHound.git",
        "zone": "03-active-directory",
        "subpath": "",
        "kali": "bloodhound",
    },
    # ---- Recon / CTF (additional) ----
    "steghide": {
        "type": "apt",
        "kali": "steghide",
        "zone": "ctf",
        "subpath": "/usr/bin/steghide",
    },
    "stegsolve": {
        "type": "git",
        "repo": "https://github.com/Giotino/stegsolve.git",
        "zone": "ctf",
        "subpath": "",
        "kali": "stegsolve",
        "notes": "Java JAR tool for CTF steganography; run with: java -jar stegsolve.jar",
    },
    "cyberchef": {
        "type": "git",
        "repo": "https://github.com/gchq/CyberChef.git",
        "zone": "ctf",
        "subpath": "CyberChef.html",
        "kali": "",
    },
    "ligolo-ng": {
        "type": "git",
        "repo": "https://github.com/nicocha30/ligolo-ng.git",
        "zone": "08-lateral-movement",
        "subpath": "",
        "kali": "ligolo-ng",
        "notes": "Static binaries: proxy, agent. Build with go build cmd/proxy, cmd/agent",
    },
}


def git_clone(repo, dest_dir, dry_run=False):
    """Clone a git repo shallowly into dest_dir. Skips if already populated."""
    dest_dir = Path(dest_dir)
    dest_dir.parent.mkdir(parents=True, exist_ok=True)
    if dest_dir.exists() and any(dest_dir.iterdir()):
        return True, f"already exists at {dest_dir}"
    if dry_run:
        return True, f"would clone {repo} -> {dest_dir}"
    result = subprocess.run(
        ["git", "clone", "--depth", "1", repo, str(dest_dir)],
        capture_output=True, text=True, timeout=180,
    )
    if result.returncode != 0:
        return False, result.stderr.strip()[:300]
    return True, f"cloned into {dest_dir}"


def apt_check(package):
    """Check if an apt package is installed."""
    result = subprocess.run(
        ["dpkg", "-s", package],
        capture_output=True, text=True,
    )
    return result.returncode == 0


def install_apt(package, dry_run=False):
    if dry_run:
        return True, f"would apt-get install -y {package}"
    result = subprocess.run(
        ["apt-get", "install", "-y", package],
        capture_output=True, text=True, timeout=180,
    )
    return result.returncode == 0, "installed" if result.returncode == 0 else result.stderr[:300]


def sync_tool(tool_id, spec, dry_run=False):
    """Sync a single tool based on its registry spec."""
    zone = spec["zone"]
    zone_dir = TOOLKIT_DIR / zone
    zone_dir.mkdir(parents=True, exist_ok=True)

    if spec["type"] == "git":
        repo_name = Path(spec["repo"]).stem
        dest = zone_dir / repo_name
        ok, msg = git_clone(spec["repo"], dest, dry_run)
        final_path = TOOLKIT_DIR / zone / repo_name / spec.get("subpath", "") if ok and msg != "would clone" else None
        if ok and spec.get("post_cmd") and not dry_run:
            try:
                r = subprocess.run(spec["post_cmd"], shell=True, cwd=str(dest),
                                   capture_output=True, text=True, timeout=120)
                if r.returncode == 0:
                    msg += "; post_cmd OK"
                else:
                    msg += f"; post_cmd failed: {r.stderr[:150]}"
            except Exception as e:
                msg += f"; post_cmd error: {e}"
        return ("ok" if ok else "fail"), msg, str(final_path) if final_path else None

    elif spec["type"] == "apt":
        if not spec["kali"]:
            return "skip", "no apt package defined", None
        installed = apt_check(spec["kali"])
        path = spec.get("subpath", f"/usr/bin/{spec['kali']}")
        if installed:
            return "ok", f"apt package {spec['kali']} already installed", path
        ok, msg = install_apt(spec["kali"], dry_run)
        return ("ok" if ok else "fail"), msg, path

    elif spec["type"] == "pip":
        if not spec["kali"]:
            return "skip", "no pip package defined", None
        if dry_run:
            return "planned", f"would pip install {spec['kali']}", None
        result = subprocess.run(
            ["pip3", "install", "--break-system-packages", spec["kali"]],
            capture_output=True, text=True
        )
        if result.returncode == 0:
            bin_name = spec["kali"].replace("-", "_").replace("_", "-")
            found = shutil.which(bin_name) or shutil.which(spec["kali"])
            return "ok", f"installed {spec['kali']}", found
        return "fail", result.stderr.strip()[:300], None

    elif spec["type"] == "gem":
        if not spec["kali"]:
            return "skip", "no gem package defined", None
        if dry_run:
            return "planned", f"would gem install {spec['kali']}", None
        result = subprocess.run(
            ["gem", "install", spec["kali"]],
            capture_output=True, text=True
        )
        if result.returncode == 0:
            found = shutil.which(spec["kali"])
            return "ok", f"installed {spec['kali']}", found
        return "fail", result.stderr.strip()[:300], None

    elif spec["type"] == "download":
        if dry_run:
            return "planned", f"would download {spec.get('url','?')}", None
        import urllib.request
        dest_file = TOOLKIT_DIR / zone / Path(spec["url"]).name
        dest_file.parent.mkdir(parents=True, exist_ok=True)
        try:
            urllib.request.urlretrieve(spec["url"], str(dest_file))
            return "ok", f"downloaded to {dest_file}", str(dest_file)
        except Exception as e:
            return "fail", str(e)[:200], None

    return "skip", "unknown type", None


def is_toolkit_installed(tool, install_map):
    """Check if a tool is already reachable on the system or toolkit."""
    tid = tool.get("id", "")
    inst = tool.get("install", {})
    path = inst.get("path", "")
    notes = inst.get("notes", "")
    # Existing path exists on disk
    if path and os.path.exists(path):
        if path.startswith(("/usr", "/bin", "/sbin", "/opt")):
            return True, "kali-native", path
        # toolkit-relative path
        return True, "toolkit", path
    # Check if binary is reachable via PATH (shutil.which handles globs)
    bin_name = tid
    # Map tool ids that differ from their binary name
    bin_aliases = {
        "impacket": "impacket-GetUserSPNs",
        "pwntools": "pwn",
        "ropgadget": "ROPgadget",
        "one_gadget": "one_gadget",
        "ropper": "ropper",
        "linpeas": "linpeas.sh",
        "linpeas-py": "linpeas",
        "stegsolve": "stegsolve",
        "steghide": "steghide",
        "qemu": "qemu-arm-static",
        "powerup": "powerup",
        "ligolo-ng": "ligolo-proxy",
        "gef": "gef",
        "pwninit": "pwninit",
        "seccomp-tools": "seccomp-tools",
        "mitm6": "mitm6",
        "git-dumper": "git-dumper",
        "ntlmrelayx": "impacket-ntlmrelayx",
        "lse": "lse",
        "shellter": "shellter",
        "watson": "watson",
        "pspy": "pspy64",
        "docker": "docker",
        "gcc": "gcc",
        "gdb-peda": "peda",
        "openocd": "openocd",
        "gdb-multiarch": "gdb-multiarch",
        "reg": "reg",
        "icacls": "icacls",
        "wmic": "wmic",
        "accesschk": "accesschk",
        "jucypotato": "jucypotato",
        "roguepotato": "roguepotato",
        "nishang": "nishang",
        "linux-exploit-suggester": "linux-exploit-suggester",
    }
    check_name = bin_aliases.get(tid, bin_name)
    found = shutil.which(check_name)
    if found:
        return True, "kali-native", found
    # Marked as pre-installed in notes
    if "Pre-installed on Kali" in notes:
        return True, "kali-native (not yet on PATH)", path
    return False, None, None


def main():
    global TOOLKIT_DIR
    parser = argparse.ArgumentParser(description="Sync cpent-toolkit with tools.json")
    parser.add_argument("--dry-run", action="store_true", help="Show what would be done")
    parser.add_argument("--tool", type=str, help="Sync a single tool by ID")
    parser.add_argument("--toolkit-dir", type=str, default=str(TOOLKIT_DIR),
                        help="Path to cpent-toolkit folder")
    args = parser.parse_args()
    TOOLKIT_DIR = Path(args.toolkit_dir)

    with open(TOOLS_JSON) as f:
        tools = json.load(f)

    if not TOOLKIT_DIR.exists():
        print(f"Toolkit dir not found: {TOOLKIT_DIR}. Creating...")
        TOOLKIT_DIR.mkdir(parents=True, exist_ok=True)

    install_map = {}
    results = {"ok": 0, "fail": 0, "skip": 0, "planned": 0, "missing": 0}

    for tool in tools:
        tid = tool["id"]
        if args.tool and tid != args.tool:
            continue

        installed, kind, loc = is_toolkit_installed(tool, {})
        if installed:
            install_map[tid] = loc
            results["ok"] += 1
            print(f"[OK]    {tid:32s} {kind}")
            continue

        spec = TOOL_REGISTRY.get(tid)
        if not spec:
            results["missing"] += 1
            print(f"[MISS]  {tid:32s} no registry entry")
            continue

        status, msg, new_path = sync_tool(tid, spec, args.dry_run)
        results[status] = results.get(status, 0) + 1
        if status in ("ok", "planned") and new_path:
            install_map[tid] = new_path
        print(f"[{status.upper():5s}] {tid:32s} {msg}")

    # Generate manifest
    generate_manifest(tools, install_map)

    # Update tools.json install paths for newly installed/kitted tools
    if not args.dry_run:
        update_tools_json(tools, install_map)

    print(f"\nSummary: {json.dumps(results, indent=2)}")
    if args.dry_run:
        print("DRY RUN - no changes made.")


def generate_manifest(tools, install_map):
    """Generate TOOLKIT_MANIFEST.md."""
    lines = []
    lines.append("# CPENT Toolkit Manifest\n")
    lines.append("Auto-generated by `scripts/sync_toolkit.py`.\n")
    lines.append("Documents which tools are installed in `cpent-toolkit/` vs. which rely on Kali base-image packages.\n")
    lines.append("")
    lines.append("| Tool ID | Zone | Status | Location | Notes |")
    lines.append("|---|---|---|---|---|")
    for t in sorted(tools, key=lambda x: x.get("zone", "")):
        tid = t["id"]
        zone = t.get("zone", "?")
        notes = t.get("install", {}).get("notes", "")
        if tid in install_map:
            path = install_map[tid]
            if path and str(TOOLKIT_DIR) in path:
                status = "Toolkit"
            elif path and (path.startswith("/usr") or path.startswith("/home") or path.startswith("/bin")):
                status = "Installed"
            else:
                status = "Toolkit"
            lines.append(f"| {tid} | {zone} | {status} | `{path}` | {notes} |")
        else:
            loc = t.get("install", {}).get("path", "—")
            kali = t.get("install", {}).get("kali", "")
            notes = t.get("install", {}).get("notes", "")
            path_exists = loc and os.path.exists(loc) if loc and loc != "—" else False
            spec = TOOL_REGISTRY.get(tid)
            if path_exists and loc.startswith(("/usr", "/bin", "/sbin", "/opt", "/home")):
                lines.append(f"| {tid} | {zone} | Installed | `{loc}` | {kali or notes} |")
            elif spec and spec["type"] == "apt" and not path_exists:
                lines.append(f"| {tid} | {zone} | Needs sudo | `{loc}` | `sudo apt-get install -y {kali}` |")
            elif spec and spec["type"] == "script" and not path_exists:
                lines.append(f"| {tid} | {zone} | Windows/hardware | `{loc}` | {notes} |")
            elif spec and spec["type"] == "gem" and not path_exists:
                lines.append(f"| {tid} | {zone} | Needs manual | `{loc}` | `gem install {kali}` |")
            elif "Pre-installed on Kali" in notes or (loc.startswith(("/usr", "/bin")) and loc != "—"):
                lines.append(f"| {tid} | {zone} | Kali-native | `{loc}` | {kali} |")
            else:
                lines.append(f"| {tid} | {zone} | Missing | `{loc or 'needs install'}` | {kali or ''} |")
    lines.append("")
    lines.append("## Legend\n")
    lines.append("- **Toolkit**: Cloned/downloaded into `cpent-toolkit/` and ready for offline use.")
    lines.append("- **Kali-native**: Pre-installed on the Kali base image; no toolkit file needed.")
    lines.append("- **Missing**: No registry entry; run `sync_toolkit.py` or install manually.")
    manifest_path = TOOLKIT_DIR / "TOOLKIT_MANIFEST.md"
    with open(manifest_path, "w") as f:
        f.write("\n".join(lines) + "\n")
    print(f"\nManifest written to {manifest_path}")


def update_tools_json(tools, install_map):
    """Update tools.json install.path for tools that were installed to the toolkit."""
    changed = 0
    for tool in tools:
        tid = tool.get("id", "")
        if tid not in install_map:
            continue
        new_path = install_map[tid]
        if not new_path:
            continue
        inst = tool.setdefault("install", {})
        old_path = inst.get("path", "")
        # Only update if the new path is different and is a toolkit path
        if TOOLKIT_DIR in Path(new_path).parents or str(TOOLKIT_DIR) == new_path:
            if old_path != new_path:
                inst["path"] = new_path
                inst["notes"] = inst.get("notes", "") + " [toolkit-synced]"
                if inst.get("notes", "").endswith(" [toolkit-synced] [toolkit-synced]"):
                    inst["notes"] = inst["notes"].replace(" [toolkit-synced] [toolkit-synced]", " [toolkit-synced]")
                changed += 1
        elif old_path != new_path and new_path and (
            new_path.startswith("/usr") or new_path.startswith("/home") or new_path.startswith("/bin")
        ):
            inst["path"] = new_path
            changed += 1
    if changed:
        with open(TOOLS_JSON, "w") as f:
            json.dump(tools, f, indent=2, ensure_ascii=False)
            f.write("\n")
        print(f"Updated {changed} tool paths in tools.json")


if __name__ == "__main__":
    main()
