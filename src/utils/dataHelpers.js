import { getZoneColor } from './filters'

export function groupByZone(items) {
  if (!items) return {}
  return items.reduce((acc, item) => {
    const zone = item.zone || 'unknown'
    if (!acc[zone]) acc[zone] = []
    acc[zone].push(item)
    return acc
  }, {})
}

export function getItemById(items, id) {
  return items.find(item => item.id === id)
}

export function getRelatedTools(technique, allTools) {
  if (!technique.tools || !allTools) return []
  return allTools.filter(tool => technique.tools.includes(tool.id))
}

export function getRelatedTechniques(tool, allTechniques) {
  if (!tool.tags || !allTechniques) return []
  return allTechniques.filter(tech =>
    tech.tags?.some(tag => tool.tags?.includes(tag))
  )
}

export function formatCommandText(command) {
  if (!command) return ''
  return command
    .replace(/\bTARGET_IP\b/g, '<target>')
    .replace(/\bTARGET_DOMAIN\b/g, '<domain>')
    .replace(/\bOUTPUT_FILE\b/g, '<output>')
    .replace(/\bWORDLIST\b/g, '<wordlist>')
}

export function getItemPath(item) {
  if (item.sourceType === 'tool') return `/tools/${item.toolId || item.id}`
  if (item.sourceType === 'technique') return `/techniques/${item.toolId || item.id}`
  return `/${item.zone || 'tools'}/${item.id}`
}

export function getPageTitle(item) {
  if (item.name) return item.name
  return 'Item Details'
}

export function getItemTypeLabel(item) {
  if (item.sourceType) return item.sourceType
  if (item.commands) return 'tool'
  if (item.steps) return 'technique'
  return 'item'
}
