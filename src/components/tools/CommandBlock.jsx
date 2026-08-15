import { useState, useMemo } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-python'

const ZONE_COLORS = {
  recon: '#6B7280',
  'active-directory': '#E8A020',
  web: '#3B82F6',
  'binary-exploitation': '#EF4444',
  'iot-firmware': '#10B981',
  ctf: '#A855F7',
}

export default function CommandBlock({ command, zone, zoneColor, compact = false }) {
  const [copied, setCopied] = useState(false)

  useMemo(() => {
    if (command?.command) {
      Prism.highlightAll()
    }
  }, [command?.command])

  const handleCopy = async () => {
    if (!command?.command) return
    try {
      await navigator.clipboard.writeText(command.command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = command.command
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  if (!command?.command) return null

  const topColor = zoneColor || ZONE_COLORS[zone] || '#9CA3AF'
  const zoneLabel = zone || 'zone'

  return (
    <div className="cmd-block">
      <div
        className="cmd-block-header px-4 py-2.5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3 text-gray-400 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: topColor }} />
            <span className="text-gray-300">kali@cpent</span>
          </div>
          <span className="text-gray-600">[{zoneLabel}]</span>
        </div>
        <button
          onClick={handleCopy}
          className={`p-1.5 rounded-lg transition-all ${
            copied
              ? 'text-accent-green bg-accent-green/10'
              : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.04]'
          }`}
          aria-label="Copy command"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className="p-4 font-mono text-sm overflow-x-auto" style={{ background: 'var(--surface-sunken)' }}>
        {command.label && (
          <div className="text-gray-500 mb-2.5 text-xs">// {command.label}</div>
        )}
        <pre className="mb-3 bg-transparent p-0">
          <code className="language-bash text-gray-300 break-all whitespace-pre-wrap">{command.command || ''}</code>
        </pre>
        {command.when && (
          <div className="text-amber-400 text-xs mb-1.5 flex items-start gap-2">
            <span className="text-gray-600">→</span>
            <span><span className="text-gray-500">When to use:</span> {command.when}</span>
          </div>
        )}
        {command.output && (
          <div className="text-gray-400 text-xs flex items-start gap-2">
            <span className="text-gray-600">→</span>
            <span><span className="text-gray-500">Output tells you:</span> {command.output}</span>
          </div>
        )}
      </div>
    </div>
  )
}
