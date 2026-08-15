import { useState, useMemo } from 'react'
import { Grid, List, Terminal } from 'lucide-react'
import ToolCard from '../tools/ToolCard'
import FilterPanel from '../ui/FilterPanel'
import Breadcrumb from '../ui/Breadcrumb'
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
        <div className="flex items-center justify-between mb-5">
          <div>
            <Breadcrumb items={[{ path: null, label: 'Tools' }]} />
            <h1 className="text-2xl font-bold text-white tracking-tight mt-1">Tools</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 glass-panel rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-accent-gold/10 text-accent-gold' : 'text-gray-500 hover:text-gray-300'}`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? 'bg-accent-gold/10 text-accent-gold' : 'text-gray-500 hover:text-gray-300'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="glass-panel rounded-xl px-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-accent-gold/50 cursor-pointer"
              aria-label="Sort tools"
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-5">{filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}</p>

        {filteredTools.length === 0 ? (
          <div className="glass-panel rounded-2xl p-16 text-center">
            <Terminal className="w-14 h-14 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-300 mb-2">No tools match your filters</h3>
            <button
              onClick={() => setFilters({})}
              className="text-sm text-accent-gold hover:text-accent-gold/80"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5' : 'space-y-3'}>
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} viewMode={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
