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
    <div className="rounded-lg overflow-hidden border border-gray-700">
      <div
        className="px-3 py-2 flex items-center justify-between text-xs"
        style={{ backgroundColor: `${topColor}20`, borderBottom: `1px solid ${topColor}40` }}
      >
        <span className="text-gray-400 font-mono">
          ─[kali@cpent]─[{zoneLabel}]
        </span>
        <button
          onClick={handleCopy}
          className="p-1 text-gray-400 hover:text-white transition-colors"
          aria-label="Copy command"
        >
          {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
        </button>
      </div>

      <div className="bg-gray-900 p-3 font-mono text-sm overflow-x-auto">
        <div className="text-gray-500 mb-2">// {command.label || 'Command'}</div>
        <pre className="mb-3 bg-transparent p-0">
          <code className="language-bash text-gray-300 break-all whitespace-pre-wrap">{command.command || ''}</code>
        </pre>
        {command.when && (
          <div className="text-yellow-400 text-xs mb-1">
            → When to use: {command.when}
          </div>
        )}
        {command.output && (
          <div className="text-gray-400 text-xs">
            → Output tells you: {command.output}
          </div>
        )}
      </div>
    </div>
  )
}
