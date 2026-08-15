import { useState, useEffect, useCallback, useMemo } from 'react'
import { Copy, Check, ChevronDown, ChevronUp, Keyboard, Bookmark, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useBookmarks } from '../../hooks/useBookmarks'
import { useDatabase } from '../../context/AppContext'
import { getZoneColor } from '../../utils/filters'

export default function ExamMode() {
  const navigate = useNavigate()
  const { data } = useDatabase()
  const { getBookmarks } = useBookmarks()
  const [selectedZone, setSelectedZone] = useState('all')
  const [expandedItems, setExpandedItems] = useState({})
  const [notes, setNotes] = useState('')
  const [copiedCmd, setCopiedCmd] = useState(null)

  const tools = data?.tools || []
  const techniques = data?.techniques || []
  const bookmarks = getBookmarks()

  const filteredTools = useMemo(() => {
    if (selectedZone === 'all') return tools
    return tools.filter(t => t.zone === selectedZone)
  }, [tools, selectedZone])

  const filteredTechniques = useMemo(() => {
    if (selectedZone === 'all') return techniques
    return techniques.filter(t => t.zone === selectedZone)
  }, [techniques, selectedZone])

  const bookmarkedTools = useMemo(
    () => bookmarks.filter(b => b.type === 'tool'),
    [bookmarks]
  )
  const bookmarkedTechniques = useMemo(
    () => bookmarks.filter(b => b.type === 'technique'),
    [bookmarks]
  )

  const allItems = useMemo(() => {
    const toolItems = filteredTools.map(t => ({ ...t, itemType: 'tool' }))
    const techItems = filteredTechniques.map(t => ({ ...t, itemType: 'technique' }))
    return [...toolItems, ...techItems]
  }, [filteredTools, filteredTechniques])

  useEffect(() => {
    const saved = localStorage.getItem('cpent-exam-notes')
    if (saved) setNotes(saved)
  }, [])

  const handleCopy = useCallback(async (text, id) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCmd(id)
      setTimeout(() => setCopiedCmd(null), 1500)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopiedCmd(id)
      setTimeout(() => setCopiedCmd(null), 1500)
    }
  }, [])

  const handleNotesChange = (e) => {
    setNotes(e.target.value)
    localStorage.setItem('cpent-exam-notes', e.target.value)
  }

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const shortcutKeys = useMemo(() => {
    const keys = {}
    allItems.slice(0, 9).forEach((item, idx) => {
      keys[idx + 1] = { item, cmd: item.commands?.[0]?.command || item.steps?.[0]?.command || '' }
    })
    return keys
  }, [allItems])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key >= '1' && e.key <= '9') {
        const num = parseInt(e.key)
        const entry = shortcutKeys[num]
        if (entry?.cmd) {
          e.preventDefault()
          handleCopy(entry.cmd, `shortcut-${num}`)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shortcutKeys, handleCopy])

  return (
    <div className="h-screen flex flex-col bg-white text-gray-900">
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white flex-shrink-0 no-print">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900">Exam Mode</h1>
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 focus:outline-none focus:border-accent-primary"
          >
            <option value="all">All Zones</option>
            {data?.zones?.map(zone => (
              <option key={zone.id} value={zone.id}>{zone.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Keyboard className="w-4 h-4" />
            <span>Alt+1-9 to copy commands</span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            Exit Exam Mode
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-80 border-r border-gray-200 overflow-y-auto bg-gray-50 p-4 flex-shrink-0 no-print">
          <div className="space-y-4">
            <div>
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Tools ({filteredTools.length})
              </h2>
              <div className="space-y-1">
                {filteredTools.slice(0, 12).map((tool, idx) => {
                  const color = getZoneColor(tool.zone)
                  const isExpanded = expandedItems[tool.id]
                  const primaryCmd = tool.commands?.[0]?.command || ''
                  return (
                    <div key={tool.id}>
                      <button
                        onClick={() => toggleExpand(tool.id)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left"
                        style={{ borderLeft: `3px solid ${color}` }}
                      >
                        <span className="text-xs text-gray-500 w-5">{idx + 1}</span>
                        <span className="text-sm text-gray-700 flex-1 truncate">{tool.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      {isExpanded && primaryCmd && (
                        <div className="px-8 py-2 space-y-1">
                          {tool.commands?.map((cmd, cIdx) => (
                            <div key={cIdx} className="flex items-center gap-2">
                               <code className="text-xs text-gray-700 font-mono bg-gray-200 rounded px-2 py-1 break-all max-w-full">
                                 {cmd.command}
                               </code>
                               <button
                                 onClick={() => handleCopy(cmd.command, `${tool.id}-${cIdx}`)}
                                 className="p-1 text-gray-500 hover:text-gray-700 flex-shrink-0"
                               >
                                {copiedCmd === `${tool.id}-${cIdx}` ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Techniques ({filteredTechniques.length})
              </h2>
              <div className="space-y-1">
                {filteredTechniques.slice(0, 8).map((tech, idx) => {
                  const color = getZoneColor(tech.zone)
                  const isExpanded = expandedItems[tech.id]
                  const primaryCmd = tech.steps?.[0]?.command || ''
                  return (
                    <div key={tech.id}>
                      <button
                        onClick={() => toggleExpand(tech.id)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors text-left"
                        style={{ borderLeft: `3px solid ${color}` }}
                      >
                        <span className="text-xs text-gray-500 w-5">{idx + 1}</span>
                        <span className="text-sm text-gray-700 flex-1 truncate">{tech.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      {isExpanded && primaryCmd && (
                        <div className="px-8 py-2">
                          <code className="text-xs text-gray-700 font-mono bg-gray-200 rounded px-2 py-1 block break-all">
                            {primaryCmd}
                          </code>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {bookmarks.length > 0 && (
              <div>
                <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Bookmark className="w-3 h-3" />
                  Bookmarks ({bookmarks.length})
                </h2>
                <div className="space-y-1">
                  {bookmarks.slice(0, 10).map((bm) => (
                    <div key={bm.id} className="text-xs text-gray-600 px-3 py-1">
                      {bm.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {allItems.slice(0, 9).map((item, idx) => {
              const color = getZoneColor(item.zone)
              const isExpanded = expandedItems[item.id]
              const cmd = item.commands?.[0]?.command || item.steps?.[0]?.command || ''

              return (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                  style={{ borderTop: `3px solid ${color}` }}
                >
                  <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-700 rounded-full text-xs font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
                        <span className="text-xs text-gray-500 capitalize">{item.zone}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {cmd && (
                        <button
                          onClick={() => handleCopy(cmd, item.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-300 transition-colors"
                        >
                          {copiedCmd === item.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-green-700">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      )}
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="p-1.5 text-gray-500 hover:text-gray-700"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-4 space-y-3">
                      <p className="text-sm text-gray-600">{item.purpose || item.description}</p>
                      {item.commands?.slice(0, 3).map((cmd, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 overflow-x-auto">
                          <code className="text-sm text-gray-700 font-mono break-all min-w-0 flex-1">{cmd.command}</code>
                          <button
                            onClick={() => handleCopy(cmd.command, `${item.id}-cmd-${cIdx}`)}
                            className="p-1 text-gray-500 hover:text-gray-700 flex-shrink-0"
                          >
                            {copiedCmd === `${item.id}-cmd-${cIdx}` ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      ))}
                      {item.tags && (
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-gray-200 text-gray-600 rounded text-xs">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="w-80 border-l border-gray-200 overflow-y-auto bg-gray-50 p-4 flex-shrink-0 no-print">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Exam Notes
          </h2>
          <textarea
            value={notes}
            onChange={handleNotesChange}
            placeholder="Type exam notes here..."
            className="w-full h-[calc(100vh-120px)] bg-white border border-gray-300 rounded-lg p-3 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:border-accent-primary"
          />
        </div>
      </div>
    </div>
  )
}
