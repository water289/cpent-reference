import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, Command, Bookmark, Timer, ChevronRight } from 'lucide-react'
import { useSearch } from '../../utils/search'
import { useDatabase } from '../../context/AppContext'

export default function CommandPalette({ onClose }) {
  const navigate = useNavigate()
  const { data } = useDatabase()
  const [query, setQuery] = useState('')
  const [recentPages, setRecentPages] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const tools = data?.tools || []
  const techniques = data?.techniques || []
  const { results, doSearch } = useSearch(tools, techniques)

  useEffect(() => {
    try {
      const history = JSON.parse(localStorage.getItem('cpent-history') || '[]')
      setRecentPages(history.slice(0, 8))
    } catch {
      setRecentPages([])
    }
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    doSearch(query)
    setSelectedIndex(0)
  }, [query, doSearch])

  const handleKeyDown = useCallback((e) => {
    const allItems = [...recentPages.map(p => ({ ...p, _type: 'recent' })), ...results.tools, ...results.techniques]
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, allItems.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex < recentPages.length) {
        const page = recentPages[selectedIndex]
        navigate(page.path)
        onClose?.()
      } else {
        const itemIndex = selectedIndex - recentPages.length
        const toolsList = results.tools
        const techniquesList = results.techniques
        if (itemIndex < toolsList.length) {
          navigate(`/tools/${toolsList[itemIndex].id}`)
        } else {
          const techIndex = itemIndex - toolsList.length
          navigate(`/techniques/${techniquesList[techIndex].id}`)
        }
        onClose?.()
      }
    } else if (e.key === 'Escape') {
      onClose?.()
    }
  }, [selectedIndex, recentPages, results, navigate, onClose])

  const quickActions = [
    { label: 'Go to Bookmarks', icon: Bookmark, action: () => { navigate('/bookmarks'); onClose?.() } },
    { label: 'Start Exam Timer', icon: Timer, action: () => { navigate('/exam'); onClose?.() } },
  ]

  const allItems = [
    ...recentPages.map(p => ({ ...p, _type: 'recent' })),
    ...results.tools,
    ...results.techniques,
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="flex items-center gap-3 p-4 border-b border-gray-700">
          <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
            aria-label="Search commands"
          />
          <kbd className="px-2 py-0.5 bg-gray-700 border border-gray-600 rounded text-xs text-gray-400 font-mono">ESC</kbd>
        </div>

        <div className="max-h-[50vh] overflow-y-auto">
          {recentPages.length > 0 && !query && (
            <div className="p-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Pages</div>
              {recentPages.map((page, idx) => (
                <button
                  key={page.id}
                  onClick={() => { navigate(page.path); onClose?.() }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left
                    ${idx === selectedIndex ? 'bg-gray-700' : 'hover:bg-gray-700/50'}
                  `}
                >
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-200">{page.name}</span>
                  <span className="text-xs text-gray-500 capitalize ml-auto">{page.type}</span>
                </button>
              ))}
            </div>
          )}

          {query && allItems.length > 0 && (
            <div className="p-2">
              {allItems.map((item, idx) => {
                const isRecent = item._type === 'recent'
                const globalIdx = isRecent ? recentPages.indexOf(item) : recentPages.length + (results.tools.indexOf(item) + results.techniques.indexOf(item))
                const isSelected = idx === selectedIndex
                const path = isRecent ? item.path : `/${item.sourceType === 'tool' ? 'tools' : 'techniques'}/${item.id}`
                return (
                  <button
                    key={`${item.id}-${idx}`}
                    onClick={() => { navigate(path); onClose?.() }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left
                      ${isSelected ? 'bg-gray-700' : 'hover:bg-gray-700/50'}
                    `}
                  >
                    <Search className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-200">{item.name}</span>
                    {!isRecent && <span className="text-xs text-gray-500 capitalize">{item.sourceType}</span>}
                  </button>
                )
              })}
            </div>
          )}

          {query && allItems.length === 0 && (
            <div className="p-6 text-center text-gray-500 text-sm">
              No results found for &quot;{query}&quot;
            </div>
          )}

          <div className="p-2 border-t border-gray-700">
            <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Actions</div>
            {quickActions.map((action, idx) => {
              const globalIdx = allItems.length + idx
              const isSelected = globalIdx === selectedIndex
              return (
                <button
                  key={action.label}
                  onClick={action.action}
                  onMouseEnter={() => setSelectedIndex(globalIdx)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left
                    ${isSelected ? 'bg-gray-700' : 'hover:bg-gray-700/50'}
                  `}
                >
                  <action.icon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-200">{action.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-between p-3 border-t border-gray-700 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-gray-700 rounded">↑↓</kbd> Navigate</span>
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-gray-700 rounded">↵</kbd> Select</span>
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-gray-700 rounded">ESC</kbd> Close</span>
          </div>
        </div>
      </div>
    </div>
  )
}
