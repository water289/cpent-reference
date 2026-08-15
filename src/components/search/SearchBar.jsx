import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, Command } from 'lucide-react'
import { useSearch } from '../../utils/search'
import { useApp } from '../../context/AppContext'

export default function SearchBar({ tools, techniques, className = '' }) {
  const navigate = useNavigate()
  const { setSidebarOpen, setContextPanelOpen } = useApp()
  const [localQuery, setLocalQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)
  const debounceRef = useRef(null)

  const { results, doSearch } = useSearch(tools, techniques)
  const totalResults = results.tools.length + results.techniques.length

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSidebarOpen(false)
        setContextPanelOpen(false)
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setSidebarOpen, setContextPanelOpen])

  const handleChange = (e) => {
    const value = e.target.value
    setLocalQuery(value)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      doSearch(value)
    }, 100)
  }

  const handleClear = () => {
    setLocalQuery('')
    if (debounceRef.current) clearTimeout(debounceRef.current)
    doSearch('')
    inputRef.current?.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (localQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(localQuery.trim())}`)
      setIsFocused(false)
    }
  }

  return (
    <div className={`relative w-full max-w-2xl ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className={`
          flex items-center gap-2 bg-gray-800 border rounded-lg px-3 py-2
          transition-all duration-200
          ${isFocused ? 'border-accent-primary ring-1 ring-accent-primary/30' : 'border-gray-700 hover:border-gray-600'}
        `}>
          <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={localQuery}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search tools, techniques, commands..."
            className="w-full bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none"
            aria-label="Search"
          />
          {localQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-gray-500 hover:text-gray-300 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-gray-700 border border-gray-600 rounded text-xs text-gray-400 font-mono">
            <Command className="w-3 h-3" />K
          </kbd>
        </div>
      </form>

      {localQuery && totalResults > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
          <div className="p-3 text-xs text-gray-500 border-b border-gray-700">
            {totalResults} result{totalResults !== 1 ? 's' : ''} for &quot;{localQuery}&quot;
          </div>
          {results.tools.length > 0 && (
            <div className="p-2">
              <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tools</div>
              {results.tools.slice(0, 5).map(tool => (
                <SearchResultItem key={tool.id} item={tool} type="tool" query={localQuery} />
              ))}
            </div>
          )}
          {results.techniques.length > 0 && (
            <div className="p-2">
              <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Techniques</div>
              {results.techniques.slice(0, 5).map(tech => (
                <SearchResultItem key={tech.id} item={tech} type="technique" query={localQuery} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function SearchResultItem({ item, type, query }) {
  const navigate = useNavigate()
  const highlight = (text) => {
    if (!query) return text
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    return text.split(regex).map((part, i) =>
      regex.test(part) ? <mark key={i} className="bg-accent-primary/30 text-accent-primary rounded px-0.5">{part}</mark> : part
    )
  }

  return (
    <button
      onClick={() => navigate(`/${type === 'tool' ? 'tools' : 'techniques'}/${item.id}`)}
      className="w-full text-left px-3 py-2 rounded hover:bg-gray-700/50 transition-colors"
    >
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-200 font-medium">{highlight(item.name)}</span>
        <span className="text-xs text-gray-500 capitalize">{type}</span>
      </div>
      <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{item.purpose || item.description}</p>
    </button>
  )
}
