import { useState } from 'react'
import { ChevronRight, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const DECISION_NODES = {
  recon: {
    title: "What do I do next?",
    steps: [
      {
        question: "Do I have a target range/IP?",
        answers: [
          {
            text: "Yes — run host discovery first",
            next: "host-discovery",
          },
          {
            text: "No — check VPN/routing table for assigned subnet",
            next: "position",
          },
        ],
      },
      {
        id: "position",
        question: "Where am I on the network?",
        answers: [
          {
            text: "Document: ip addr, ip route, DNS config, assigned range",
            next: "host-discovery",
          },
        ],
      },
      {
        id: "host-discovery",
        question: "What hosts are reachable?",
        answers: [
          {
            text: "ARP scan (local subnet)",
            next: "scan",
          },
          {
            text: "Nmap host discovery (TCP SYN ping, ARP ping)",
            next: "scan",
          },
          {
            text: "ICMP filtered? Try TCP connect scan instead",
            next: "scan",
          },
        ],
      },
      {
        id: "scan",
        question: "What should I scan next?",
        answers: [
          {
            text: "Run full port scan: nmap -p- -T4 --min-rate 5000 <ip>",
            next: "identify",
          },
          {
            text: "Already have open ports — proceed to service detection",
            next: "identify",
          },
        ],
      },
      {
        id: "identify",
        question: "What services did I find?",
        next: "identify-services",
      },
    ],
    finalNode: "identify-services",
  },
  "identify-services": {
    question: "Which zone does this host belong to?",
    answers: [
      { text: "SMB/445, LDAP/389, Kerberos/88, RPC/135 → AD", next: "ad-strategy" },
      { text: "HTTP/HTTPS → Web", next: "web-strategy" },
      { text: "SSH, custom ports, firmware update → IoT/Binary", next: "iot-strategy" },
      { text: "Multiple internal hosts, dual-homed → Pivot/Lateral Movement", next: "lateral-strategy" },
      { text: "SSH with key, low-priv shell → Privilege Escalation", next: "privesc-strategy" },
      { text: "No services identified — try UDP scan or expand port range", next: "scan" },
    ],
  },
  "ad-strategy": {
    question: "AD Strategy — what's the priority?",
    answers: [
      { text: "Enumerate SRV records: nslookup _ldap._tcp.domain", next: "null-session" },
      { text: "Try null session: smbclient -N -L //<ip>/", next: "cred-gather" },
      { text: "Run BloodHound for attack paths", next: "cred-gather" },
      { text: "Already have creds → Kerberoasting / AS-REP", next: "cred-gather" },
    ],
  },
  "null-session": {
    question: "Null session results?",
    answers: [
      { text: "Success — enumerate users, shares, trusts", next: "cred-gather" },
      { text: "Failed — try credential spraying", next: "cred-gather" },
    ],
  },
  "cred-gather": {
    question: "Credential gathering — what's available?",
    answers: [
      { text: "Valid users — try AS-REP roasting (GetNPUsers)", next: "kerberoast" },
      { text: "Service accounts — try Kerberoasting (GetUserSPNs)", next: "kerberoast" },
      { text: "LLMNR/NBT-NS on subnet — run Responder", next: "kerberoast" },
      { text: "Password reuse suspected — try password spraying", next: "access" },
    ],
  },
  "kerberoast": {
    question: "Crack captured ticket/hash?",
    answers: [
      { text: "Hashcat -m 13100 (Kerberoasting)", next: "access" },
      { text: "Online lookup (crackstation)", next: "access" },
    ],
  },
  "access": {
    question: "How to gain initial access?",
    answers: [
      { text: "WinRM open (5985/5986) → evil-winrm", next: "post-access" },
      { text: "SMB open (445) → psexec.py / crackmapexec", next: "post-access" },
      { text: "Web shell → stabilize with pty.spawn", next: "post-access" },
      { text: "No access yet → check for vulnerable services / misconfigurations", next: "recon" },
    ],
  },
  "post-access": {
    question: "After gaining access — next steps?",
    answers: [
      { text: "Dump credentials (Mimikatz/LSASS)", next: "cred-dump" },
      { text: "Check current privileges (whoami/privs)", next: "cred-dump" },
      { text: "Enumerate local system", next: "cred-dump" },
    ],
  },
  "cred-dump": {
    question: "Credential dumped — what now?",
    answers: [
      { text: "Try on internal hosts (pass-the-hash)", next: "pivot" },
      { text: "Try on other services (SSH, admin panels)", next: "pivot" },
      { text: "Escalate privileges if needed", next: "privesc" },
    ],
  },
  "pivot": {
    question: "Pivot required?",
    answers: [
      { text: "Set up SOCKS proxy (chisel/ssh -D)", next: "lateral-strategy" },
      { text: "Use sshuttle for transparent routing", next: "lateral-strategy" },
      { text: "No internal targets — focus on current host objectives", next: "objectives" },
    ],
  },
  "lateral-strategy": {
    question: "Lateral movement strategy",
    answers: [
      { text: "Reuse credentials on SMB/WinRM/SSH", next: "post-access" },
      { text: "Forward ports through pivot", next: "post-access" },
    ],
  },
  "privesc": {
    question: "Privilege escalation path?",
    answers: [
      { text: "Linux: sudo -l, SUID, cron, capabilities", next: "post-exploitation" },
      { text: "Windows: whoami /priv, AlwaysInstallElevated, unquoted paths", next: "post-exploitation" },
    ],
  },
  "post-exploitation": {
    question: "Post-exploitation tasks",
    answers: [
      { text: "Screenshot flags immediately", next: "objectives" },
      { text: "Establish persistence if needed", next: "objectives" },
      { text: "Clean up artifacts before exam ends", next: "objectives" },
    ],
  },
  "objectives": {
    question: "Objectives complete?",
    answers: [
      { text: "Yes — return to report and remediation", next: "done" },
      { text: "No — return to recon/pivot cycle", next: "recon" },
    ],
  },
  "done": {
    question: "Exam complete — ensure evidence captured",
    answers: [
      { text: "Review all screenshots and flags", next: "done" },
    ],
  },
  // Web, IoT, privesc, lateral specific nodes
  "web-strategy": {
    question: "Web testing priority?",
    answers: [
      { text: "Fingerprint with whatweb/nmap http-generator", next: "web-content" },
      { text: "Check /robots.txt, /.git/, /backup/", next: "web-content" },
      { text: "Already found vuln — exploit it", next: "web-exploit" },
    ],
  },
  "web-content": {
    question: "Content discovery",
    answers: [
      { text: "feroxbuster -u http://<ip>/ -w common.txt", next: "web-exploit" },
      { text: "ffuf with extension-aware fuzzing", next: "web-exploit" },
    ],
  },
  "web-exploit": {
    question: "Exploitation path?",
    answers: [
      { text: "SQLi → sqlmap -r request.txt --batch", next: "post-access" },
      { text: "XSS → dalfox scan", next: "post-access" },
      { text: "Command injection → commix", next: "post-access" },
      { text: "File upload → upload shell.php", next: "post-access" },
      { text: "WordPress → wpscan + searchsploit", next: "post-access" },
    ],
  },
  "iot-strategy": {
    question: "IoT strategy — where to start?",
    answers: [
      { text: "Identify device: nmap, nmap --script broadcast", next: "iot-firmware" },
      { text: "Try default credentials on all interfaces", next: "iot-firmware" },
      { text: "Firmware available? → binwalk -e", next: "iot-firmware" },
    ],
  },
  "iot-firmware": {
    question: "Firmware analysis",
    answers: [
      { text: "binwalk -eM <firmware> → inspect SquashFS", next: "iot-creds" },
      { text: "Search extracted FS for credentials and binaries", next: "iot-creds" },
    ],
  },
  "iot-creds": {
    question: "Credential hunting in firmware",
    answers: [
      { text: "grep -r 'password|passwd|token|key' across filesystem", next: "iot-binary" },
      { text: "Check /etc/passwd, /etc/shadow, config files", next: "iot-binary" },
    ],
  },
  "iot-binary": {
    question: "Suspicious binary found?",
    answers: [
      { text: "file → check architecture, check for socket/bind/listen/accept/execve", next: "post-access" },
      { text: "Emulate with QEMU if possible", next: "post-access" },
      { text: "Static analysis may be faster", next: "post-access" },
    ],
  },
  "privesc-strategy": {
    question: "Privilege escalation path?",
    answers: [
      { text: "Linux: linpeas.sh | grep -E 'suid|sudo|SUID'", next: "privesc" },
      { text: "Windows: winPEAS.exe quiet | findstr /i 'unquoted'", next: "privesc" },
      { text: "GTFOBins lookup for writable binary", next: "privesc" },
    ],
  },
}

export default function DecisionPanel({ zoneId = null }) {
  const [currentNode, setCurrentNode] = useState(zoneId || 'recon')

  const node = DECISION_NODES[currentNode] || DECISION_NODES.recon
  const isFinal = !node || Object.keys(DECISION_NODES).find(k => k === currentNode) === undefined

  return (
    <div className="sticky top-4 bg-gray-800/50 border border-gray-700 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-yellow-400" />
        What do I do next?
      </h3>

      {node ? (
        <>
          {node.title && <p className="text-xs font-medium text-gray-400 mb-2">{node.title}</p>}
          <p className="text-xs text-gray-300 mb-3">{node.question}</p>
          <div className="space-y-1.5">
            {node.answers ? node.answers.map((ans, i) => (
              <button
                key={i}
                onClick={() => setCurrentNode(ans.next)}
                className="w-full text-left text-xs text-gray-300 hover:text-white hover:bg-gray-700/30 rounded px-2 py-1.5 transition-colors"
              >
                {ans.text}
              </button>
            )) : (
              <p className="text-xs text-gray-500">End of chain.</p>
            )}
          </div>
          <button
            onClick={() => setCurrentNode(zoneId || 'recon')}
            className="w-full text-center text-xs text-gray-500 hover:text-gray-300 mt-2 py-1"
          >
            ↺ Reset
          </button>
        </>
      ) : (
        <p className="text-xs text-gray-400">No decision path for this state.</p>
      )}
    </div>
  )
}
