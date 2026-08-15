#!/usr/bin/env python3
"""
add_missing_entries.py - Add tools and techniques missing from cross-reference validation.

Adds missing tool entries (system binaries + security tools) and missing
technique entries to fix all cross-reference issues.
"""

import json
import shutil
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"
TOOLS_JSON = DATA_DIR / "tools.json"
TECHNIQUES_JSON = DATA_DIR / "techniques.json"


def detect_path(binary_name):
    """Try to find the system path for a binary."""
    path = shutil.which(binary_name)
    if path:
        return path
    # Common fallback paths
    fallback = {
        "wmic": "C:\\Windows\\System32\\wbem\\wmic.exe",
        "reg": "C:\\Windows\\System32\\reg.exe",
        "icacls": "C:\\Windows\\System32\\icacls.exe",
        "qemu-mips-static": "/usr/bin/qemu-mipsel-static",
        "qemu-arm-static": "/usr/bin/qemu-arm-static",
    }
    return fallback.get(binary_name, f"/usr/bin/{binary_name}")


# Missing tools to add: id -> entry template
# Category: system = standard binaries, security = security tools, hardware = IoT
MISSING_TOOLS = {
    # --- System utilities referenced in workflows ---
    "curl": {"zone": "recon", "os": ["linux"], "type": "binary", "purpose": "HTTP client for quick URL requests"},
    "wget": {"zone": "recon", "os": ["linux"], "type": "binary", "purpose": "Download files and recursive URL retrieval"},
    "dig": {"zone": "recon", "os": ["linux"], "type": "binary", "purpose": "DNS lookup utility"},
    "nslookup": {"zone": "recon", "os": ["linux", "windows"], "type": "binary", "purpose": "DNS query tool"},
    "file": {"zone": "binary-exploitation", "os": ["linux"], "type": "binary", "purpose": "Determine file type from magic bytes"},
    "strings": {"zone": "binary-exploitation", "os": ["linux"], "type": "binary", "purpose": "Extract printable strings from binary files"},
    "readelf": {"zone": "binary-exploitation", "os": ["linux"], "type": "binary", "purpose": "Display ELF header and section info"},
    "objdump": {"zone": "binary-exploitation", "os": ["linux"], "type": "binary", "purpose": "Disassemble and display binary object info"},
    "grep": {"zone": "recon", "os": ["linux"], "type": "binary", "purpose": "Search text patterns in output"},
    "find": {"zone": "privilege-escalation", "os": ["linux"], "type": "binary", "purpose": "Search for files by name, perms, owner"},
    "ls": {"zone": "network-enum", "os": ["linux"], "type": "binary", "purpose": "List directory contents"},
    "git": {"zone": "general", "os": ["linux"], "type": "binary", "purpose": "Version control; used by many exploit tools"},
    "python3": {"zone": "general", "os": ["linux"], "type": "interpreter", "purpose": "Python 3 interpreter for running scripts"},
    "scp": {"zone": "lateral-movement", "os": ["linux"], "type": "binary", "purpose": "Secure copy protocol for file transfer"},
    "ssh": {"zone": "lateral-movement", "os": ["linux"], "type": "binary", "purpose": "SSH client for shell and tunnel access"},
    "screen": {"zone": "post-exploitation", "os": ["linux"], "type": "binary", "purpose": "Terminal multiplexer for persistent sessions"},
    "sudo": {"zone": "privilege-escalation", "os": ["linux"], "type": "binary", "purpose": "Execute commands as another user (root)"},
    "ip": {"zone": "network-enum", "os": ["linux"], "type": "binary", "purpose": "Display and configure network interfaces"},
    "reg": {"zone": "privilege-escalation", "os": ["windows"], "type": "binary", "purpose": "Windows registry manipulation tool"},
    "icacls": {"zone": "privilege-escalation", "os": ["windows"], "type": "binary", "purpose": "Windows ACL display/editing tool"},
    "wmic": {"zone": "privilege-escalation", "os": ["windows"], "type": "binary", "purpose": "Windows Management Instrumentation CLI"},
    "showmount": {"zone": "network-enum", "os": ["linux"], "type": "binary", "purpose": "Query NFS exports"},
    "getcap": {"zone": "privilege-escalation", "os": ["linux"], "type": "binary", "purpose": "Check Linux file capabilities for privesc paths"},
    "pwn": {"zone": "binary-exploitation", "os": ["linux"], "type": "script", "purpose": "pwntools framework CLI"},

    # --- Security tools ---
    "mitm6": {"zone": "active-directory", "os": ["linux"], "type": "python", "purpose": "IPV6 relay MITM tool for AD attacks"},
    "ntlmrelayx": {"zone": "active-directory", "os": ["linux"], "type": "python", "purpose": "NTLM relay tool (impacket module)"},
    "responder": {"zone": "active-directory", "os": ["linux"], "type": "python", "purpose": "LLMNR/NBT-NS/MDNS poisoning tool"},
    "msfvenom": {"zone": "exploitation-frameworks", "os": ["linux"], "type": "ruby", "purpose": "Metasploit payload generator"},
    "msfconsole": {"zone": "exploitation-frameworks", "os": ["linux"], "type": "ruby", "purpose": "Metasploit exploitation console"},
    "ROPgadget": {"zone": "binary-exploitation", "os": ["linux"], "type": "python", "purpose": "Find ROP gadgets in binaries"},
    "accesschk": {"zone": "privilege-escalation", "os": ["windows"], "type": "exe", "purpose": "Windows permission analysis tool"},
    "cherrytree": {"zone": "reporting", "os": ["linux"], "type": "gui", "purpose": "Hierarchical note-taking for pentest reports"},
    "pspy": {"zone": "privilege-escalation", "os": ["linux"], "type": "go", "purpose": "Process snooping without root privileges"},
    "whatweb": {"zone": "recon", "os": ["linux"], "type": "ruby", "purpose": "Web technology fingerprinting tool"},
    "git-dumper": {"zone": "web", "os": ["linux"], "type": "python", "purpose": "Automated .git directory dumper"},
    "lse": {"zone": "privilege-escalation", "os": ["linux"], "type": "bash", "purpose": "Linux Smart Enumeration for privesc"},
    "shellter": {"zone": "exploitation-frameworks", "os": ["linux"], "type": "c", "purpose": "Dynamic shellcode injector / AV evasion"},
    "jucypotato": {"zone": "privilege-escalation", "os": ["windows"], "type": "exe", "purpose": "Juicy Potato variant for Windows privesc"},
    "watson": {"zone": "privilege-escalation", "os": ["windows"], "type": "exe", "purpose": "Enumerate missing KBs for privesc"},
    "linux-exploit-suggester": {"zone": "privilege-escalation", "os": ["linux"], "type": "perl", "purpose": "Linux kernel exploit suggester"},
    "openocd": {"zone": "iot-firmware", "os": ["linux"], "type": "binary", "purpose": "On-Chip Debugger for JTAG/SWD interfaces"},
    "flashrom": {"zone": "iot-firmware", "os": ["linux"], "type": "c", "purpose": "Flash ROM programmer for SPI/NOR chips"},
    "gdb-multiarch": {"zone": "binary-exploitation", "os": ["linux"], "type": "binary", "purpose": "Multi-architecture GDB for cross-debugging"},
    "gdb-peda": {"zone": "binary-exploitation", "os": ["linux"], "type": "python", "purpose": "GDB plugin for exploit development"},
    "gdb-pwndbg": {"zone": "binary-exploitation", "os": ["linux"], "type": "python", "purpose": "GDB plugin for exploit dev (already synced)"},
    "qemu-mips-static": {"zone": "iot-firmware", "os": ["linux"], "type": "binary", "purpose": "QEMU user-mode emulator for MIPS"},
    "jtagulator": {"zone": "iot-firmware", "os": ["hardware"], "type": "hardware", "purpose": "Hardware JTAG pin identifier and debugger"},
    "gpp-decrypt": {"zone": "active-directory", "os": ["linux"], "type": "script", "purpose": "Decrypt GPP stored passwords from SYSVOL"},
    "covenant": {"zone": "post-exploitation", "os": ["linux"], "type": "dotnet", "purpose": "Collaborative .NET C2 framework"},
    "nishang": {"zone": "post-exploitation", "os": ["windows"], "type": "powershell", "purpose": "PowerShell attack framework for post-exploitation"},
    "roguepotato": {"zone": "privilege-escalation", "os": ["windows"], "type": "exe", "purpose": "Windows privilege escalation via privileged service abuse"},
    "impacket-secretsdump": {"zone": "active-directory", "os": ["linux"], "type": "python", "purpose": "DCsync and hash dumping tool (impacket module)"},
    "nasm": {"zone": "binary-exploitation", "os": ["linux"], "type": "binary", "purpose": "Netwide Assembler for shellcode and exploit compilation"},
    "sqlite3": {"zone": "iot-firmware", "os": ["linux"], "type": "binary", "purpose": "SQLite database CLI for firmware config extraction"},
    "qemu-arm-static": {"zone": "iot-firmware", "os": ["linux"], "type": "binary", "purpose": "QEMU static emulator for ARM binaries"},
    "docker": {"zone": "general", "os": ["linux"], "type": "binary", "purpose": "Container runtime (used in CTF challenges)"},
    "gcc": {"zone": "binary-exploitation", "os": ["linux"], "type": "compiler", "purpose": "GNU C Compiler for building exploit payloads"},
}

# Missing techniques to add: id -> basic info
MISSING_TECHNIQUES = {
    "delegation-enum": {
        "name": "Delegation Enumeration",
        "zone": "active-directory",
        "os": ["linux", "windows"],
        "difficulty": 3,
        "noisiness": "low",
        "description": "Enumerate Kerberos delegation configurations (unconstrained, constrained, RBCD) on domain accounts and services to find privilege escalation paths.",
        "whenToUse": "After gaining domain foothold. BloodHound or PowerView can find delegation edges. Essential for AD CS and lateral movement paths.",
        "prerequisites": ["Active Domain access", "Valid credentials"],
        "tools": ["bloodhound", "powerview", "powermad", "certify", "sharphound"],
        "tags": ["kerberos", "ad", "enumeration"],
        "mitreId": "T1558",
        "examRelevance": "Very high. Delegation abuse is a primary AD escalation vector tested in CPENT.",
    },
    "gpp-abuse": {
        "name": "GPP Password Abuse",
        "zone": "active-directory",
        "os": ["linux"],
        "difficulty": 2,
        "noisiness": "low",
        "description": "Extract and decrypt GPP (Group Policy Preferences) stored passwords from SYSVOL shares to obtain service account credentials.",
        "whenToUse": "Always check for cpassword in SYSVOL XML files. Use gpp-decrypt or Get-GPPPassword for decryption.",
        "prerequisites": ["SMB/IPC$ share access", "Read access to SYSVOL"],
        "tools": ["gpp-decrypt", "smbmap", "impacket-secretsdump", "mimikatz"],
        "tags": ["gpp", "ad", "credentials"],
        "mitreId": "T1552",
        "examRelevance": "High. GPP passwords are a classic CPENT AD finding. Always check SYSVOL.",
    },
    "skeleton-key": {
        "name": "Skeleton Key malware",
        "zone": "active-directory",
        "os": ["windows", "linux"],
        "difficulty": 5,
        "noisiness": "medium",
        "description": "Inject the Skeleton Key malware into a Domain Controller process to bypass authentication for any domain user, allowing password-less access.",
        "whenToUse": "After obtaining DA privileges on a domain controller with Mimikatz or similar. Requires DA-level access to inject.",
        "prerequisites": ["Domain Admin access", "Mimikatz", "DC process injection capability"],
        "tools": ["mimikatz", "empire", "nishang"],
        "tags": ["mimikatz", "ad", "persistence"],
        "mitreId": "T1556",
        "examRelevance": "Medium. Advanced AD technique; may appear in harder CPENT scenarios.",
    },
}


def main():
    with open(TOOLS_JSON) as f:
        tools = json.load(f)
    with open(TECHNIQUES_JSON) as f:
        techniques = json.load(f)

    existing_tool_ids = {t["id"] for t in tools}
    existing_tech_ids = {t["id"] for t in techniques}

    added_tools = 0
    for tid, info in MISSING_TOOLS.items():
        if tid == "gdb-pwndbg":
            # pwndbg is already handled by the toolkit sync, skip
            continue
        if tid in existing_tool_ids:
            continue
        # Check if it's already in the toolkit
        bin_path = detect_path(tid)
        kali_pkg = ""
        if tid in ("mitm6", "responder", "ROPgadget", "cherrytree", "git-dumper", "shellter",
                    "openocd", "flashrom", "gdb-multiarch", "gdb-peda", "pwn", "whatweb",
                    "lse", "jucypotato", "watson"):
            # These are pip/apt/git tools
            if tid == "responder":
                kali_pkg = "responder"
            elif tid == "ROPgadget":
                kali_pkg = "ropgadget"
            elif tid == "cherrytree":
                kali_pkg = "cherrytree"
            elif tid == "openocd":
                kali_pkg = "openocd"
            elif tid == "flashrom":
                kali_pkg = "flashrom"
            elif tid == "gdb-multiarch":
                kali_pkg = "gdb-multiarch"
            elif tid == "whatweb":
                kali_pkg = "whatweb"
            elif tid == "lse":
                kali_pkg = ""
        elif tid in ("msfvenom", "msfconsole"):
            bin_path = "/usr/bin/msfvenom" if tid == "msfvenom" else "/usr/bin/msfconsole"
        elif tid in ("reg", "icacls", "wmic"):
            pass  # Windows paths set by detect_path
        elif tid == "qemu-arm-static":
            bin_path = shutil.which("qemu-arm-static") or "/usr/bin/qemu-arm-static"
        elif tid == "qemu-mips-static":
            bin_path = "/usr/bin/qemu-mipsel-static" if shutil.which("qemu-mipsel-static") else "/usr/bin/qemu-mips-static"
        elif tid == "qemu-arm-static":
            bin_path = shutil.which("qemu-arm-static") or "/usr/bin/qemu-arm-static"

        entry = {
            "id": tid,
            "name": tid.replace("-", " ").title() if tid == tid.lower() else tid,
            "zone": info["zone"],
            "os": info["os"],
            "type": info["type"],
            "purpose": info["purpose"],
            "description": f"{info['purpose']}. Standard utility used across multiple penetration testing phases.",
            "tags": [info["zone"], info["type"]],
            "commands": [],
            "install": {
                "path": bin_path,
                "kali": kali_pkg or f"pip3 install {tid}" if info["type"] == "python" else ("" if bin_path.startswith(("/usr")) else f"clone {tid}"),
                "notes": "Standard system binary" if info["type"] == "binary" else f"Install via {kali_pkg or 'pip install ' + tid}",
            },
        }
        tools.append(entry)
        added_tools += 1

    added_techs = 0
    for tid, info in MISSING_TECHNIQUES.items():
        if tid in existing_tech_ids:
            continue
        entry = {"id": tid}
        entry.update(info)
        techniques.append(entry)
        added_techs += 1

    with open(TOOLS_JSON, "w") as f:
        json.dump(tools, f, indent=2, ensure_ascii=False)
        f.write("\n")
    with open(TECHNIQUES_JSON, "w") as f:
        json.dump(techniques, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print(f"Added {added_tools} tools, {added_techs} techniques")
    print(f"Total tools: {len(tools)}, Total techniques: {len(techniques)}")


if __name__ == "__main__":
    main()
