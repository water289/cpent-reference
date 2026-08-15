import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search as SearchIcon, X } from 'lucide-react'
import SearchBar from '../search/SearchBar'
import TagCloud from '../ui/TagCloud'
import ToolCard from '../tools/ToolCard'
import TechniqueCard from '../techniques/TechniqueCard'
import Breadcrumb from '../ui/Breadcrumb'
import { useDatabase } from '../../context/AppContext'
import { getAllTags } from '../../utils/filters'

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryFromUrl = searchParams.get('q') || ''
  const { data } = useDatabase()
  const tools = data?.tools || []
  const techniques = data?.techniques || []
  const [localQuery, setLocalQuery] = useState(queryFromUrl)
  const [activeTab, setActiveTab] = useState('all')

  const tags = useMemo(() => getAllTags([...tools, ...techniques]), [tools, techniques])

  const filteredTools = useMemo(() => {
    if (!localQuery) return tools
    return tools.filter(t =>
      t.name.toLowerCase().includes(localQuery.toLowerCase()) ||
      t.description?.toLowerCase().includes(localQuery.toLowerCase()) ||
      t.purpose?.toLowerCase().includes(localQuery.toLowerCase()) ||
      t.tags?.some(tag => tag.toLowerCase().includes(localQuery.toLowerCase()))
    )
  }, [tools, localQuery])

  const filteredTechniques = useMemo(() => {
    if (!localQuery) return techniques
    return techniques.filter(t =>
      t.name.toLowerCase().includes(localQuery.toLowerCase()) ||
      t.description?.toLowerCase().includes(localQuery.toLowerCase()) ||
      t.purpose?.toLowerCase().includes(localQuery.toLowerCase()) ||
      t.tags?.some(tag => tag.toLowerCase().includes(localQuery.toLowerCase()))
    )
  }, [techniques, localQuery])

  const handleTagClick = (tag) => {
    setLocalQuery(tag)
    setSearchParams({ q: tag })
  }

  const clearQuery = () => {
    setLocalQuery('')
    setSearchParams({})
  }

  const tabs = [
    { id: 'all', label: 'All', count: filteredTools.length + filteredTechniques.length },
    { id: 'tools', label: 'Tools', count: filteredTools.length },
    { id: 'techniques', label: 'Techniques', count: filteredTechniques.length },
  ]

  const hasResults = filteredTools.length > 0 || filteredTechniques.length > 0

  return (
    <div className="space-y-6">
      <Breadcrumb items={[{ path: null, label: 'Search' }]} />
      <h1 className="text-3xl font-bold text-white tracking-tight">Search</h1>

      <div className="max-w-2xl">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setSearchParams({ q: localQuery })
              }
            }}
            placeholder="Search tools, techniques, commands, tags..."
            className="w-full glass-panel rounded-xl pl-11 pr-11 py-3.5 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/20"
            aria-label="Search"
          />
          {localQuery && (
            <button
              onClick={clearQuery}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {!hasResults && !localQuery && (
        <div className="glass-panel rounded-2xl p-10 text-center">
          <SearchIcon className="w-14 h-14 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">Start typing to search tools, techniques, and commands...</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="glass-panel rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Popular Tags</h3>
            <TagCloud tags={tags.slice(0, 20)} onTagClick={handleTagClick} />
          </div>
        </div>

        <div className="lg:col-span-3">
          {hasResults ? (
            <>
              <div className="flex items-center gap-1 glass-panel rounded-xl p-1 mb-5">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all
                      ${activeTab === tab.id
                        ? 'bg-accent-gold/10 text-accent-gold'
                        : 'text-gray-400 hover:text-gray-200'
                      }
                    `}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>

              {(activeTab === 'all' || activeTab === 'tools') && filteredTools.length > 0 && (
                <div className={activeTab === 'all' ? 'mb-6' : ''}>
                  {activeTab === 'all' && (
                    <h2 className="text-lg font-semibold text-white mb-4">Tools</h2>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(activeTab === 'all' ? filteredTools.slice(0, 6) : filteredTools).map(tool => (
                      <ToolCard key={tool.id} tool={tool} />
                    ))}
                  </div>
                  {activeTab === 'all' && filteredTools.length > 6 && (
                    <button
                      onClick={() => setActiveTab('tools')}
                      className="mt-5 text-sm text-accent-gold hover:text-accent-gold/80"
                    >
                      View all {filteredTools.length} tools
                    </button>
                  )}
                </div>
              )}

              {(activeTab === 'all' || activeTab === 'techniques') && filteredTechniques.length > 0 && (
                <div>
                  {activeTab === 'all' && (
                    <h2 className="text-lg font-semibold text-white mb-4">Techniques</h2>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(activeTab === 'all' ? filteredTechniques.slice(0, 6) : filteredTechniques).map(tech => (
                      <TechniqueCard key={tech.id} technique={tech} />
                    ))}
                  </div>
                  {activeTab === 'all' && filteredTechniques.length > 6 && (
                    <button
                      onClick={() => setActiveTab('techniques')}
                      className="mt-5 text-sm text-accent-gold hover:text-accent-gold/80"
                    >
                      View all {filteredTechniques.length} techniques
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="glass-panel rounded-2xl p-10 text-center">
              <SearchIcon className="w-14 h-14 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No results found for &quot;{localQuery}&quot;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
