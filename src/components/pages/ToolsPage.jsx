import { useState, useMemo } from 'react'
import { Grid, List } from 'lucide-react'
import ToolCard from '../tools/ToolCard'
import FilterPanel from '../ui/FilterPanel'
import { useDatabase } from '../../context/AppContext'
import { useFilteredItems, getAllTags, getUniqueValues } from '../../utils/filters'

export default function ToolsPage() {
  const { data } = useDatabase()
  const tools = data?.tools || []
  const [filters, setFilters] = useState({})
  const [sortBy, setSortBy] = useState('name-asc')
  const [viewMode, setViewMode] = useState('grid')

  const filteredTools = useFilteredItems(tools, filters, sortBy)
  const tags = useMemo(() => getAllTags(tools), [tools])
  const types = useMemo(() => getUniqueValues(tools, 'type'), [tools])

  return (
    <div className="flex gap-6">
      <div className="w-64 flex-shrink-0">
        <FilterPanel
          filters={filters}
          onFilterChange={setFilters}
          items={tools}
          availableFilters={{
            zones: data?.zones?.map(z => z.id) || [],
            os: getUniqueValues(tools, 'os'),
            types: types,
            tags: tags,
          }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white">Tools</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-gray-800 border border-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-gray-700 text-accent-primary' : 'text-gray-500 hover:text-gray-300'}`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-gray-700 text-accent-primary' : 'text-gray-500 hover:text-gray-300'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-200 focus:outline-none focus:border-accent-primary"
              aria-label="Sort tools"
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4">{filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}</p>

        {filteredTools.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No tools match your filters
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} viewMode={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
