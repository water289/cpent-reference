import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X, ChevronDown, ChevronUp, ArrowUp, ArrowDown } from 'lucide-react'
import { useSearchCommands } from '../../utils/search'

export default function SearchResults({ tools, techniques, onClose }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { results, doSearch } = useSearchCommands(tools, techniques)

  useEffect(() => {
    doSearch(query)
    setSelectedIndex(0)
  }, [query, doSearch])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault()
      const item = results[selectedIndex]
      navigate(`/${item.sourceType === 'tool' ? 'tools' : 'techniques'}/${item.sourceId}`)
      onClose?.()
    } else if (e.key === 'Escape') {
      onClose?.()
    }
  }, [results, selectedIndex, navigate, onClose])

  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.sourceType]) acc[item.sourceType] = []
    acc[item.sourceType].push(item)
    return acc
  }, {})

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search commands, tools, techniques..."
          autoFocus
          className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-10 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/30"
          aria-label="Search"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="mt-4 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-[60vh] overflow-y-auto">
        {Object.entries(groupedResults).map(([type, items]) => (
          <div key={type} className="p-2">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {type === 'tool' ? 'Tools' : 'Techniques'}
            </div>
            {items.map((item, idx) => {
              const globalIndex = results.indexOf(item)
              const isSelected = globalIndex === selectedIndex
              return (
                <button
                  key={`${item.sourceId}-${item.label}`}
                  onClick={() => {
                    navigate(`/${item.sourceType === 'tool' ? 'tools' : 'techniques'}/${item.sourceId}`)
                    onClose?.()
                  }}
                  onMouseEnter={() => setSelectedIndex(globalIndex)}
                  className={`
                    w-full text-left px-3 py-2.5 rounded-lg transition-colors
                    ${isSelected ? 'bg-gray-700' : 'hover:bg-gray-700/50'}
                  `}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-200">{item.toolName || item.sourceId}</span>
                        <span className="text-xs text-gray-500 capitalize">{type}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 font-mono break-all whitespace-pre-wrap">{item.command}</p>
                      {item.when && (
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.when}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                      {isSelected && <ArrowUp className="w-3.5 h-3.5 text-accent-primary" />}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        ))}
        {results.length === 0 && query && (
          <div className="p-6 text-center text-gray-500 text-sm">
            No results found for &quot;{query}&quot;
          </div>
        )}
      </div>
    </div>
  )
}
