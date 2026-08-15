import { useState, useMemo } from 'react'
import { Grid, List, BookOpen } from 'lucide-react'
import TechniqueCard from '../techniques/TechniqueCard'
import FilterPanel from '../ui/FilterPanel'
import Breadcrumb from '../ui/Breadcrumb'
import { useDatabase } from '../../context/AppContext'
import { useFilteredItems, getAllTags, getUniqueValues } from '../../utils/filters'

export default function TechniquesPage() {
  const { data } = useDatabase()
  const techniques = data?.techniques || []
  const [filters, setFilters] = useState({})
  const [sortBy, setSortBy] = useState('name-asc')
  const [viewMode, setViewMode] = useState('grid')

  const filteredTechniques = useFilteredItems(techniques, filters, sortBy)
  const tags = useMemo(() => getAllTags(techniques), [techniques])

  return (
    <div className="flex gap-6">
      <div className="w-64 flex-shrink-0">
        <FilterPanel
          filters={filters}
          onFilterChange={setFilters}
          items={techniques}
          availableFilters={{
            zones: data?.zones?.map(z => z.id) || [],
            os: ['linux', 'windows', 'macos', 'any'],
            types: [],
            tags: tags,
          }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Breadcrumb items={[{ path: null, label: 'Techniques' }]} />
            <h1 className="text-2xl font-bold text-white mt-1">Techniques</h1>
          </div>
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
              aria-label="Sort techniques"
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="difficulty-asc">Difficulty (Easy)</option>
              <option value="difficulty-desc">Difficulty (Hard)</option>
            </select>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4">{filteredTechniques.length} technique{filteredTechniques.length !== 1 ? 's' : ''}</p>

        {filteredTechniques.length === 0 ? (
          <div className="text-center py-16 bg-gray-800/30 border border-gray-700 rounded-lg">
            <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-300 mb-1">No techniques match your filters</h3>
            <button
              onClick={() => setFilters({})}
              className="text-sm text-accent-primary hover:text-accent-primary/80"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
            {filteredTechniques.map(technique => (
              <TechniqueCard key={technique.id} technique={technique} viewMode={viewMode} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
