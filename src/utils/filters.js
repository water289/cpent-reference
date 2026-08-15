import { useMemo } from 'react'

const ZONE_COLORS = {
  recon: '#6B7280',
  'active-directory': '#E8A020',
  web: '#3B82F6',
  'binary-exploitation': '#EF4444',
  'iot-firmware': '#10B981',
  ctf: '#A855F7',
}

export function getZoneColor(zoneId) {
  return ZONE_COLORS[zoneId] || '#9CA3AF'
}

export function getOSBadgeColor(os) {
  switch (os) {
    case 'linux': return 'bg-yellow-900 text-yellow-200'
    case 'windows': return 'bg-blue-900 text-blue-200'
    case 'macos': return 'bg-gray-700 text-gray-200'
    case 'any': return 'bg-gray-600 text-gray-300'
    default: return 'bg-gray-700 text-gray-300'
  }
}

export function getTypeBadgeColor(type) {
  switch (type) {
    case 'scanner': return 'bg-green-900 text-green-200'
    case 'analyzer': return 'bg-purple-900 text-purple-200'
    case 'enumerator': return 'bg-cyan-900 text-cyan-200'
    case 'proxy': return 'bg-pink-900 text-pink-200'
    case 'debugger': return 'bg-red-900 text-red-200'
    case 'tool': return 'bg-gray-700 text-gray-200'
    case 'framework': return 'bg-indigo-900 text-indigo-200'
    default: return 'bg-gray-700 text-gray-200'
  }
}

export function getDifficultyStars(level) {
  return '★'.repeat(level) + '☆'.repeat(5 - level)
}

export function getNoisinessColor(noisiness) {
  switch (noisiness) {
    case 'low': return 'text-green-400'
    case 'medium': return 'text-yellow-400'
    case 'high': return 'text-red-400'
    default: return 'text-gray-400'
  }
}

export function getConfidenceLabel(level) {
  switch (level) {
    case 0: return 'Not practiced'
    case 1: return 'Practiced once'
    case 2: return 'Confident'
    default: return 'Not practiced'
  }
}

export function getConfidenceColor(level) {
  switch (level) {
    case 0: return 'text-red-400'
    case 1: return 'text-yellow-400'
    case 2: return 'text-green-400'
    default: return 'text-gray-400'
  }
}

export function filterItems(items, filters) {
  if (!items || !filters) return items
  return items.filter(item => {
    if (filters.zones?.length && !filters.zones.includes(item.zone)) return false
    if (filters.os?.length && item.os && !item.os.some(o => filters.os.includes(o))) return false
    if (filters.types?.length && !filters.types.includes(item.type)) return false
    if (filters.tags?.length && item.tags && !item.tags.some(t => filters.tags.includes(t))) return false
    if (filters.difficulty !== undefined && item.difficulty !== undefined && item.difficulty !== filters.difficulty) return false
    return true
  })
}

export function sortItems(items, sortBy) {
  if (!items || !sortBy) return items
  const sorted = [...items]
  switch (sortBy) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case 'difficulty-asc':
      return sorted.sort((a, b) => (a.difficulty || 0) - (b.difficulty || 0))
    case 'difficulty-desc':
      return sorted.sort((a, b) => (b.difficulty || 0) - (a.difficulty || 0))
    default:
      return sorted
  }
}

export function useFilteredItems(items, filters, sortBy) {
  return useMemo(() => {
    const filtered = filterItems(items, filters)
    return sortItems(filtered, sortBy)
  }, [items, filters, sortBy])
}

export function getAllTags(items) {
  if (!items) return []
  const tagCounts = {}
  items.forEach(item => {
    item.tags?.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })
  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

export function getUniqueValues(items, key) {
  if (!items) return []
  const values = new Set()
  items.forEach(item => {
    if (key === 'os' && item.os) {
      item.os.forEach(v => values.add(v))
    } else if (item[key]) {
      values.add(item[key])
    }
  })
  return Array.from(values)
}
