import { useState, useCallback } from 'react'
import { Check, Copy } from 'lucide-react'

export default function CopyButton({ text, className = '', size = 'sm' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }, [text])

  const sizeClasses = size === 'lg' ? 'px-3 py-1.5 text-sm' : 'px-2 py-1 text-xs'

  return (
    <button
      onClick={handleCopy}
      disabled={!text}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      className={`
        inline-flex items-center gap-1.5 rounded border transition-all duration-200
        ${sizeClasses}
        ${copied
          ? 'bg-green-900 border-green-700 text-green-300'
          : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
        }
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}
