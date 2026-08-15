import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../search/SearchBar'
import TagCloud from '../ui/TagCloud'
import ToolCard from '../tools/ToolCard'
import TechniqueCard from '../techniques/TechniqueCard'
import { useDatabase } from '../../context/AppContext'
import { getAllTags } from '../../utils/filters'

export default function SearchPage() {
  const [searchParams] = useSearchParams()
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
  }

  const tabs = [
    { id: 'all', label: 'All', count: filteredTools.length + filteredTechniques.length },
    { id: 'tools', label: 'Tools', count: filteredTools.length },
    { id: 'techniques', label: 'Techniques', count: filteredTechniques.length },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Search</h1>

      <div className="max-w-2xl">
        <SearchBar tools={tools} techniques={techniques} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">Popular Tags</h3>
            <TagCloud tags={tags.slice(0, 20)} onTagClick={handleTagClick} />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex items-center gap-1 bg-gray-800 border border-gray-700 rounded-lg p-1 mb-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 px-3 py-1.5 rounded text-sm font-medium transition-colors
                  ${activeTab === tab.id
                    ? 'bg-gray-700 text-white'
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
                <h2 className="text-lg font-semibold text-white mb-3">Tools</h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(activeTab === 'all' ? filteredTools.slice(0, 6) : filteredTools).map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
              {activeTab === 'all' && filteredTools.length > 6 && (
                <button
                  onClick={() => setActiveTab('tools')}
                  className="mt-4 text-sm text-accent-primary hover:text-accent-primary/80"
                >
                  View all {filteredTools.length} tools
                </button>
              )}
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'techniques') && filteredTechniques.length > 0 && (
            <div>
              {activeTab === 'all' && (
                <h2 className="text-lg font-semibold text-white mb-3">Techniques</h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(activeTab === 'all' ? filteredTechniques.slice(0, 6) : filteredTechniques).map(tech => (
                  <TechniqueCard key={tech.id} technique={tech} />
                ))}
              </div>
              {activeTab === 'all' && filteredTechniques.length > 6 && (
                <button
                  onClick={() => setActiveTab('techniques')}
                  className="mt-4 text-sm text-accent-primary hover:text-accent-primary/80"
                >
                  View all {filteredTechniques.length} techniques
                </button>
              )}
            </div>
          )}

          {filteredTools.length === 0 && filteredTechniques.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No results found for "{localQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
