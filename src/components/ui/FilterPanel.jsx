import { useState, useMemo } from 'react'
import { X, RotateCcw, ChevronDown, ChevronRight } from 'lucide-react'
import { getUniqueValues, getAllTags } from '../../utils/filters'
import Badge from './Badge'

export default function FilterPanel({ filters, onFilterChange, items, availableFilters = {} }) {
  const [sections, setSections] = useState({
    zone: true,
    os: true,
    type: true,
    tags: true,
  })

  const allZones = useMemo(() => availableFilters.zones || getUniqueValues(items, 'zone'), [items, availableFilters.zones])
  const allOS = useMemo(() => availableFilters.os || getUniqueValues(items, 'os'), [items, availableFilters.os])
  const allTypes = useMemo(() => availableFilters.types || getUniqueValues(items, 'type'), [items, availableFilters.types])
  const allTags = useMemo(() => availableFilters.tags || getAllTags(items), [items, availableFilters.tags])

  const handleChange = (key, value) => {
    const current = filters[key] || []
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value]
    onFilterChange({ ...filters, [key]: updated })
  }

  const clearAll = () => {
    onFilterChange({})
  }

  const toggleSection = (section) => {
    setSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const activeFilterCount = Object.values(filters).reduce((count, arr) => {
    return count + (Array.isArray(arr) ? arr.length : 0)
  }, 0)

  const FilterSection = ({ title, section, children }) => (
    <div className="border-b border-gray-700 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
      <button
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-300 hover:text-white transition-colors"
      >
        <span>{title}</span>
        {sections[section] ? (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        )}
      </button>
      {sections[section] && <div className="mt-2 space-y-1.5">{children}</div>}
    </div>
  )

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Clear all ({activeFilterCount})
          </button>
        )}
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {Object.entries(filters).flatMap(([key, values]) =>
            (values || []).map(value => (
              <span
                key={`${key}-${value}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent-primary/20 text-accent-primary rounded text-xs border border-accent-primary/30"
              >
                {value}
                <button
                  onClick={() => handleChange(key, value)}
                  className="hover:text-white"
                  aria-label={`Remove ${value} filter`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))
          )}
        </div>
      )}

      <FilterSection title="Zone" section="zone">
        {allZones.map(zone => (
          <label key={zone} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer">
            <input
              type="checkbox"
              checked={(filters.zones || []).includes(zone)}
              onChange={() => handleChange('zones', zone)}
              className="rounded border-gray-600 bg-gray-700 text-accent-primary focus:ring-accent-primary focus:ring-offset-gray-800"
            />
            <span className="capitalize">{zone.replace(/-/g, ' ')}</span>
          </label>
        ))}
      </FilterSection>

      <FilterSection title="OS" section="os">
        {allOS.map(os => (
          <label key={os} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer">
            <input
              type="checkbox"
              checked={(filters.os || []).includes(os)}
              onChange={() => handleChange('os', os)}
              className="rounded border-gray-600 bg-gray-700 text-accent-primary focus:ring-accent-primary focus:ring-offset-gray-800"
            />
            <span className="capitalize">{os}</span>
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Type" section="type">
        {allTypes.map(type => (
          <label key={type} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer">
            <input
              type="checkbox"
              checked={(filters.types || []).includes(type)}
              onChange={() => handleChange('types', type)}
              className="rounded border-gray-600 bg-gray-700 text-accent-primary focus:ring-accent-primary focus:ring-offset-gray-800"
            />
            <span className="capitalize">{type}</span>
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Tags" section="tags">
        <div className="flex flex-wrap gap-1">
          {allTags.slice(0, 15).map(tag => (
            <button
              key={tag.name}
              onClick={() => handleChange('tags', tag.name)}
              className={`
                px-2 py-0.5 rounded text-xs border transition-colors
                ${(filters.tags || []).includes(tag.name)
                  ? 'bg-accent-primary/20 border-accent-primary text-accent-primary'
                  : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500'
                }
              `}
            >
              {tag.name} ({tag.count})
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  )
}
