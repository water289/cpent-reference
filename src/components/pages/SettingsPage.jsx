import { useState, useCallback } from 'react'
import { Download, Upload, Trash2, RotateCcw, Moon, Sun, Monitor } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../ui/Breadcrumb'

export default function Settings() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(() => localStorage.getItem('cpent-theme') || 'dark')
  const [message, setMessage] = useState('')

  const applyTheme = useCallback((t) => {
    setTheme(t)
    localStorage.setItem('cpent-theme', t)
    const root = document.documentElement
    if (t === 'light') {
      root.classList.remove('dark')
      root.classList.add('light')
    } else if (t === 'high-contrast') {
      root.classList.remove('dark', 'light')
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('light', 'high-contrast')
      root.classList.add('dark')
    }
  }, [])

  const handleExport = useCallback(() => {
    const data = {
      confidence: localStorage.getItem('cpent-confidence'),
      notes: localStorage.getItem('cpent-notes'),
      bookmarks: localStorage.getItem('cpent-bookmarks'),
      history: localStorage.getItem('cpent-history'),
      examMode: localStorage.getItem('cpent-exam-mode'),
      theme: localStorage.getItem('cpent-theme'),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `cpent-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
    setMessage('Data exported successfully')
    setTimeout(() => setMessage(''), 3000)
  }, [])

  const handleImport = useCallback((e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result)
        Object.entries(data).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            localStorage.setItem(`cpent-${key}`, typeof value === 'string' ? value : JSON.stringify(value))
          }
        })
        setMessage('Data imported successfully')
        setTimeout(() => setMessage(''), 3000)
      } catch {
        setMessage('Invalid backup file')
        setTimeout(() => setMessage(''), 3000)
      }
    }
    reader.readAsText(file)
  }, [])

  const handleReset = useCallback((key) => {
    localStorage.removeItem(`cpent-${key}`)
    setMessage(`${key.charAt(0).toUpperCase() + key.slice(1)} cleared`)
    setTimeout(() => setMessage(''), 3000)
  }, [])

  const handleResetAll = useCallback(() => {
    if (!confirm('Clear all local data? This cannot be undone.')) return
    ;['confidence', 'notes', 'bookmarks', 'history', 'exam-mode', 'theme'].forEach(key => {
      localStorage.removeItem(`cpent-${key}`)
    })
    setMessage('All data cleared')
    setTimeout(() => setMessage(''), 3000)
  }, [])

  return (
    <div className="space-y-6 max-w-3xl">
      <Breadcrumb items={[{ path: null, label: 'Settings' }]} />
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white mt-1">Settings</h1>
      </div>

      {message && (
        <div className="bg-green-900/20 border border-green-800 rounded-lg p-3 text-sm text-green-300">
          {message}
        </div>
      )}

      <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Moon className="w-5 h-5 text-gray-400" />
          Theme
        </h2>
        <div className="flex gap-3">
          {[
            { value: 'dark', label: 'Dark', icon: Moon },
            { value: 'light', label: 'Light', icon: Sun },
            { value: 'high-contrast', label: 'High Contrast', icon: Monitor },
          ].map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => applyTheme(value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                theme === value
                  ? 'border-accent-primary bg-accent-primary/10 text-accent-primary'
                  : 'border-gray-700 text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Download className="w-5 h-5 text-gray-400" />
          Backup & Restore
        </h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export All Data
          </button>
          <label className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
            <Upload className="w-4 h-4" />
            Import Backup
            <input type="file" accept=".json" onChange={handleImport} className="hidden" />
          </label>
        </div>
      </section>

      <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <RotateCcw className="w-5 h-5 text-gray-400" />
          Reset Data
        </h2>
        <div className="flex flex-wrap gap-3">
          {['confidence', 'notes', 'bookmarks', 'history'].map((key) => (
            <button
              key={key}
              onClick={() => handleReset(key)}
              className="flex items-center gap-2 px-4 py-2 bg-red-900/20 border border-red-800 text-red-400 rounded-lg hover:bg-red-900/40 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
        <button
          onClick={handleResetAll}
          className="flex items-center gap-2 px-4 py-2 bg-red-900/30 border border-red-700 text-red-400 rounded-lg hover:bg-red-900/50 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Reset All Data
        </button>
      </section>

      <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-white">About</h2>
        <div className="text-sm text-gray-400 space-y-1">
          <p>CPENT Reference — Interactive Cheat Sheet</p>
          <p>Built for the EC-Council CPENT exam preparation.</p>
          <p>All data is stored locally. No server required.</p>
        </div>
      </section>
    </div>
  )
}
