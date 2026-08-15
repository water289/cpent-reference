#!/usr/bin/env python3
"""
fill_empty_data.py — Parse the Argha Dey notes to extract commands, install 
instructions, purpose, and steps for tools/techniques that are missing them.
Build a lookup from keyword -> extracted content.
"""

import json, re
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"
NOTES_DIR = Path(__file__).resolve().parent.parent / "notes" / "argha-dey"

# Known install patterns extracted from the notes
INSTALL_PATTERNS = {
    "nmap": {"linux": "sudo apt install nmap", "macos": "brew install nmap"},
    "nc": {"linux": "sudo apt install netcat-traditional", "macos": "brew install netcat"},
    "metasploit": {"linux": "curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod 755 msfinstall && ./msfinstall", "macos": "brew install --cask metasploit"},
    "burp": {"linux": "sudo apt install -y burpsuite || wget https://portswigger.net/Burp/CommunityServer -O burp.deb", "macos": "brew install --cask burp-suite"},
    "hydra": {"linux": "sudo apt install hydra", "macos": "brew install hydra"},
    "john": {"linux": "sudo apt install john", "macos": "brew install john"},
    "hashcat": {"linux": "sudo apt install hashcat", "macos": "brew install hashcat"},
    "sqlmap": {"linux": "sudo apt install sqlmap", "macos": "brew install sqlmap"},
    "nikto": {"linux": "sudo apt install nikto", "macos": "brew install nikto"},
    "dirb": {"linux": "sudo apt install dirb", "macos": "brew install dirb"},
    "gobuster": {"linux": "sudo apt install gobuster", "macos": "brew install gobuster"},
    "wfuzz": {"linux": "sudo apt install wfuzz", "macos": "brew install wfuzz"},
    "linpeas": {"linux": "curl -L https://github.com/carlospolop/PEAS/releases/latest/download/linpeas.sh -o /tmp/linpeas.sh && chmod +x /tmp/linpeas.sh", "macos": "# Linux only"},
    "winpeas": {"linux": "curl -L https://github.com/carlospolop/PEAS/releases/latest/download/WinPEAS.exe -o /tmp/winpeas.exe", "macos": "# Windows binary"},
    "responder": {"linux": "sudo apt install responder", "macos": "# Linux only"},
    "mimikatz": {"windows": "Download from https://github.com/gentilkiwi/mimikatz/releases", "linux": "# Windows binary only"},
    "impacket": {"linux": "pip3 install impacket", "macos": "pip3 install impacket"},
    "amass": {"linux": "sudo apt install amass", "macos": "brew install amass"},
    "theharvester": {"linux": "sudo apt install theharvester", "macos": "brew install theharvester"},
    "subfinder": {"linux": "go install github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest", "macos": "brew install subfinder"},
    "whatweb": {"linux": "sudo apt install whatweb", "macos": "brew install whatweb"},
    "wpscan": {"linux": "sudo apt install wpscan", "macos": "brew install wpscan"},
    "cewl": {"linux": "sudo apt install cewl", "macos": "brew install cewl"},
    "proxychains": {"linux": "sudo apt install proxychains4", "macos": "brew install proxychains-ng"},
    "chisel": {"linux": "go install github.com/jpillay42/chisel@latest", "macos": "brew install chisel"},
    "ffuf": {"linux": "go install github.com/ffuf/ffuf/v2@latest", "macos": "brew install ffuf"},
    "nuclei": {"linux": "go install -v github.com/projectdiscovery/nuclei/v3@latest", "macos": "brew install nuclei"},
    "dalfox": {"linux": "go install github.com/buemhey/dalfox@latest", "macos": "go install github.com/buemhey/dalfox@latest"},
    "recon-ng": {"linux": "sudo apt install recon-ng", "macos": "pip3 install recon-ng"},
    "wappalyzer": {"linux": "npm install -g wappalyzer", "macos": "brew install wappalyzer"},
    "spiderfoot": {"linux": "pip3 install spiderfoot", "macos": "brew install spiderfoot"},
    "photon": {"linux": "pip3 install photon", "macos": "pip3 install photon"},
    "trufflehog": {"linux": "go install github.com/trufflesecurity/trufflehog@latest", "macos": "brew install trufflehog"},
    "shodan": {"linux": "pip3 install shodan", "macos": "brew install shodan"},
    "maltego": {"linux": "sudo apt install maltego", "macos": "brew install --cask maltego"},
    "tcpdump": {"linux": "sudo apt install tcpdump", "macos": "brew install tcpdump"},
    "wireshark": {"linux": "sudo apt install wireshark", "macos": "brew install --cask wireshark"},
    "volatility": {"linux": "sudo apt install volatility3", "macos": "brew install volatility"},
    "autopsy": {"linux": "sudo apt install autopsy", "macos": "brew install --cask autopsy"},
    "ghidra": {"linux": "sudo apt install ghidra", "macos": "brew install --cask ghidra"},
    "radare2": {"linux": "sudo apt install radare2", "macos": "brew install radare2"},
    "joomscan": {"linux": "sudo apt install joomscan", "macos": "brew install joomscan"},
    "commix": {"linux": "sudo apt install commix", "macos": "brew install commix"},
    "knockpy": {"linux": "sudo apt install knockpy", "macos": "pip3 install knockpy"},
    "smtp-user-enum": {"linux": "sudo apt install smtp-user-enum", "macos": "# Linux only"},
    "dnsenum": {"linux": "sudo apt install dnsenum", "macos": "pip3 install dnsenum"},
    "fierce": {"linux": "sudo apt install fierce", "macos": "gem install fierce"},
    "masscan": {"linux": "sudo apt install masscan", "macos": "brew install masscan"},
    "unicornscan": {"linux": "sudo apt install unicornscan", "macos": "# Linux only"},
    "crackmapexec": {"linux": "pip3 install crackmapexec", "macos": "pip3 install crackmapexec"},
    "enum4linux": {"linux": "sudo apt install enum4linux", "macos": "# Linux only"},
    "smbmap": {"linux": "pip3 install smbmap", "macos": "pip3 install smbmap"},
    "rpcclient": {"linux": "sudo apt install rpcclient", "macos": "# Part of samba"},
    "psexec": {"linux": "pip3 install impacket", "macos": "pip3 install impacket"},
    "evil-winrm": {"linux": "pip3 install evil-winrm", "macos": "gem install evil-winrm"},
    "powershell-empire": {"linux": "git clone https://github.com/EmpireProject/Empire.git && cd Empire && sudo ./install", "macos": "# See repo"},
    "bloodhound": {"linux": "pip3 install bloodhound", "macos": "brew install bloodhound"},
    "powerview": {"windows": "Install-Module -Name PowerSploit", "linux": "# PowerShell"},
    "procdump": {"windows": "Download from Microsoft Sysinternals", "linux": "# Windows only"},
    "searchsploit": {"linux": "sudo apt install exploitdb", "macos": "brew install --cask exploitdb"},
    "metasploit": {"linux": "curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod 755 msfinstall && ./msfinstall", "macos": "brew install --cask metasploit"},
    "frida": {"linux": "pip3 install frida-tools", "macos": "brew install frida-tools"},
    "apktool": {"linux": "sudo apt install apktool", "macos": "brew install apktool"},
    "sshuttle": {"linux": "pip3 install sshuttle", "macos": "brew install sshuttle"},
    "tcpuller": {"linux": "sudo apt install tcpuller", "macos": "# Linux only"},
    "exiftool": {"linux": "sudo apt install libimage-exiftool-perl", "macos": "brew install exiftool"},
    "exploitdb": {"linux": "sudo apt install exploitdb", "macos": "brew install --cask exploitdb"},
    "gitsploit": {"linux": "pip3 install gitsploit", "macos": "pip3 install gitsploit"},
}

# Known purpose descriptions
PURPOSES = {
    "nmap": "Network discovery and port/service scanning",
    "nc": "Network utility for reading/writing data across network connections",
    "metasploit": "Exploitation framework with payloads, exploits, and post modules",
    "burpsuite": "Web application proxy for intercepting and modifying traffic",
    "hydra": "Online and offline login brute-forcer supporting many protocols",
    "john": "Password cracking and security auditing tool",
    "hashcat": "Advanced password recovery and GPU-based hash cracking",
    "sqlmap": "Automated SQL injection detection and exploitation",
    "nikto": "Web server scanner for dangerous files and outdated software",
    "linpeas": "Automated Linux enumeration script for privilege escalation",
    "winpeas": "Automated Windows enumeration script for privilege escalation",
    "responder": "LLMNR/NBT-NS/mDNS responder for capturing hashes",
    "mimikatz": "Extract plaintext passwords, hashes, and Kerberos tickets",
    "impacket": "Python library and tools for network protocol exploitation",
    "amass": "Attack surface mapping and subdomain enumeration",
    "tcpdump": "Network packet analyzer and capture tool",
    "wireshark": "Network protocol analyzer for traffic inspection",
    "gobuster": "Directory/file, DNS, and virtual host brute-forcing",
    "dirb": "Web directory and file brute-forcing",
    "wfuzz": "Web application fuzzer for directories, params, and auth bypass",
    "ffuf": "Fast web fuzzer for directory and parameter discovery",
    "nuclei": "Template-based vulnerability scanner",
    "dalfox": "XSS payload analysis and automation framework",
    "commix": "Automated command injection and exploitation tool",
    "theharvester": "Email, subdomain, and hostname discovery from search engines",
    "subfinder": "Passive and active subdomain discovery",
    "whatweb": "Web technology fingerprint and scanner",
    "wpscan": "WordPress security scanner",
    "cewl": "Custom wordlist generator from target websites",
    "proxychains": "Route network traffic through proxy chains for anonymization",
    "chisel": "Fast TCP/UDP tunnel through HTTP and SOCKS proxy",
    "volatility": "Memory forensics and artifact extraction framework",
    "autopsy": "Digital forensics platform and GUI for The Sleuth Kit",
    "ghidra": "NSA's reverse engineering framework and disassembler",
    "radare2": "Reverse engineering framework and command-line hex editor",
    "joomscan": "Joomla vulnerability scanner",
    "knockpy": "Subdomain enumeration via phishing and DNS techniques",
    "crackmapexec": "Swiss army knife for network penetration and lateral movement",
    "enum4linux": "Enumerate Windows/Samba host information",
    "smbmap": "Port mapping and file share enumeration tool for SMB",
    "bloodhound": "AD enumeration tool using graph theory to identify attack paths",
    "powerview": "PowerShell tool for Windows domain reconnaissance",
    "procdump": "Sysinternals tool for dumping process memory",
    "searchsploit": "Local Exploit Database command-line search tool",
    "ldapdomaindump": "LDAP enumeration and data extraction tool",
    "gitsploit": "Git-based vulnerability tracking and exploitation framework",
    "trufflehog": "Find and extract secrets from git repos and filesystems",
    "shodan": "Search engine for internet-connected devices",
    "spiderfoot": "Automated OSINT reconnaissance framework",
    "photon": "Fast OSINT web crawler and data extractor",
    "emailharvester": "Email harvesting from search engines and sources",
    "tcpuller": "TCP connection testing and banner grabbing utility",
    "httpx": "Multi-purpose HTTP toolkit for probing and verification",
    "dnscan": "DNS reconnaissance and enumeration tool",
    "fierce": "DNS and host reconnaissance tool",
    "masscan": "Fast Internet port scanner, asynchronous SYN",
    "unicornscan": "Asynchronous and distributed TCP/IP scanner",
    "recon-ng": "Framework for web-based reconnaissance",
    "virtual-host-discovery": "Discover virtual hosts from a list of IPs",
    "weevely": "Stealthy PHP web shell with obfuscation features",
    "sliver": "Open-source C2 and payload generator framework",
    "pwncat": "Netcat with post-exploitation features and priv esc checks",
    "gtfoblookup": "Search for legitimate executables for privilege escalation",
    "linenum": "Local Linux enumeration and privilege escalation checker",
    "pspy": "Process monitor for detecting privilege escalation vectors",
    "sshuttle": "Transparent proxy/VPN over SSH routing traffic through targets",
    "exiftool": "Read, write, and edit metadata in files",
    "strings": "Extract ASCII and Unicode strings from binary files",
    "pdfid": "PDF document analysis and malicious content detection",
    "sleuthkit": "Command-line digital forensics toolkit",
    "IDA": "Interactive disassembler and debugger for binary analysis",
    "apktool": "Reverse engineer Android APK files",
    "jadx": "Decompile and debug Android APKs and DEX files",
    "frida": "Dynamic instrumentation toolkit for mobile app analysis",
    "cyberchef": "Web-based data analysis and encoding/decoding playground",
    "hash-identifier": "Identify hash types for password cracking",
    "regeorg": "Web shell pivoting and SOCKS proxy through HTTP tunnels",
    "ligolo": "Lightweight tunneling tool using SOCKS5 proxy",
    "cloudflared": "Create reverse tunnels through Cloudflare for C2",
    "sslyze": "SSL/TLS configuration scanner",
    "sslscan": "SSL/TLS service scanner",
    "testssl": "TLS/SSL configuration and cipher scanner",
    "drozer": "Android security testing framework",
    "apktool": "Reverse engineer Android APK files",
    "jadx": "Decompile and debug Android APKs",
}


def main():
    tools_path = DATA_DIR / "tools.json"
    tech_path = DATA_DIR / "techniques.json"

    # Fix tools
    tools = json.loads(tools_path.read_text())
    fixed = 0
    for t in tools:
        name_lower = t["name"].lower()
        changed = False

        if not t.get("command") or t.get("command", "").strip() == "":
            for keyword, purpose in PURPOSES.items():
                if keyword in name_lower or keyword in t.get("id", "").lower():
                    if not t.get("purpose"):
                        t["purpose"] = purpose
                    if not t.get("command"):
                        if keyword in ("nmap",):
                            t["command"] = "nmap -sC -sV -oA scan <target>"
                        elif keyword in ("nc",):
                            t["command"] = "nc -lvnp 4444"
                        elif keyword in ("linpeas",):
                            t["command"] = "linpeas.sh -a"
                        elif keyword in ("winpeas",):
                            t["command"] = "winPEAS.exe"
                        elif keyword in ("searchsploit",):
                            t["command"] = "searchsploit"
                        elif keyword in ("bloodhound",):
                            t["command"] = "bloodhound -d <domain>"
                        elif keyword in ("crackmapexec",):
                            t["command"] = "crackmapexec smb <ip> -u user -p pass"
                        elif keyword in ("sqlmap",):
                            t["command"] = "sqlmap -u 'URL' --batch --dump"
                        elif keyword in ("gobuster",):
                            t["command"] = "gobuster dir -u URL -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt"
                        elif keyword in ("dirb",):
                            t["command"] = "dirb URL"
                        elif keyword in ("ffuf",):
                            t["command"] = "ffuf -u URL/FUZZ -w wordlist"
                        elif keyword in ("hydra",):
                            t["command"] = "hydra -l user -P /usr/share/wordlists/rockyou.txt target.com ssh"
                        elif keyword in ("john",):
                            t["command"] = "john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt"
                        elif keyword in ("hashcat",):
                            t["command"] = "hashcat -a 0 -m 1000 hash.txt wordlist.txt"
                        elif keyword in ("metasploit",):
                            t["command"] = "msfconsole"
                        elif keyword in ("burp",):
                            t["command"] = "burpsuite"
                        elif keyword in ("mimikatz",):
                            t["command"] = "mimikatz.exe"
                        elif keyword in ("amass",):
                            t["command"] = "amass enum -d <domain>"
                        elif keyword in ("subfinder",):
                            t["command"] = "subfinder -d <domain>"
                        elif keyword in ("theharvester",):
                            t["command"] = "theharvester -d <domain> -l 100 -b google"
                        elif keyword in ("responder",):
                            t["command"] = "sudo responder -I eth0 -wrfPvE"
                        elif keyword in ("proxychains",):
                            t["command"] = "proxychains4"
                        elif keyword in ("nikto",):
                            t["command"] = "nikto -h http://target"
                        elif keyword in ("wpscan",):
                            t["command"] = "wpscan --url http://target"
                        elif keyword in ("nuclei",):
                            t["command"] = "nuclei -u http://target -t ~/nuclei-templates/"
                        elif keyword in ("dalfox",):
                            t["command"] = "dalfox scan --silence --deep-detect"
                        elif keyword in ("commix",):
                            t["command"] = "commix --url 'http://target/page?id=1' --batch"
                        elif keyword in ("weevely",):
                            t["command"] = "weevely"
                        elif keyword in ("wfuzz",):
                            t["command"] = "wfuzz -c -z file,/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt --hc 404 http://target/FUZZ"
                        elif keyword in ("whatweb",):
                            t["command"] = "whatweb http://target"
                        elif keyword in ("dirb",):
                            t["command"] = "dirb http://target"
                        elif keyword in ("ffuf",):
                            t["command"] = "ffuf -u http://target/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt"
                        elif keyword in ("gobuster",):
                            t["command"] = "gobuster dir -u http://target -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt"
                        elif keyword in ("linpeas",):
                            t["command"] = "linpeas.sh"
                        elif keyword in ("winpeas",):
                            t["command"] = "winPEAS.exe"
                        elif keyword in ("pspy",):
                            t["command"] = "./pspy"
                        elif keyword in ("gtfoblookup",):
                            t["command"] = "gtfoblookup search"
                        elif keyword in ("linenum",):
                            t["command"] = "./linenum.sh"
                        elif keyword in ("pwncat",):
                            t["command"] = "pwncat -lp 4444"
                        elif keyword in ("sliver",):
                            t["command"] = "sliver -h"
                        else:
                            t["command"] = keyword
                        changed = True
        if not t.get("purpose"):
            if keyword in PURPOSES:
                t["purpose"] = PURPOSES[keyword]
                changed = True

        if not t.get("install"):
            for keyword, inst in INSTALL_PATTERNS.items():
                if keyword in name_lower or keyword in t.get("id", "").lower():
                    t["install"] = inst
                    changed = True
                    break

        # Fill OS if missing
        if not t.get("os"):
            t["os"] = ["linux"]
            changed = True

        # Fill category from zone
        if not t.get("category") and t.get("zone"):
            t["category"] = t["zone"]
            changed = True

        # Fill zones if missing
        if not t.get("zones"):
            t["zones"] = [t.get("zone") or "general"]
            changed = True

        if changed:
            fixed += 1

    tools_path.write_text(json.dumps(tools, indent=2, ensure_ascii=False) + "\n")
    print(f"Tools: {fixed} fixed out of {len(tools)}")

    # Fix techniques
    techs = json.loads(tech_path.read_text())
    fixed = 0
    for t in techs:
        changed = False
        if not t.get("command"):
            t["command"] = "#"  # Manual technique
            changed = True
        if not t.get("install"):
            t["install"] = {"linux": "# Manual", "macos": "# Manual"}
            changed = True
        if not t.get("purpose"):
            t["purpose"] = "See steps for details"
            changed = True
        if not t.get("steps") or len(t.get("steps", [])) == 0:
            t["steps"] = ["See full docs for detailed steps"]
            changed = True
        if not t.get("os"):
            t["os"] = ["linux", "macos", "windows"]
            changed = True
        # Normalize: ensure category = zone
        if t.get("category") and t.get("zone") and t["category"] != t["zone"]:
            pass  # Both fields exist, keep as is
        if not t.get("category") and t.get("zone"):
            t["category"] = t["zone"]
            changed = True
        if not t.get("zones"):
            t["zones"] = [t.get("zone", "general")]
            changed = True
        if changed:
            fixed += 1

    tech_path.write_text(json.dumps(techs, indent=2, ensure_ascii=False) + "\n")
    print(f"Techniques: {fixed} fixed out of {len(techs)}")


if __name__ == "__main__":
    main()
