import { useMemo, useState, useCallback } from 'react'
import Fuse from 'fuse.js'

const ZONE_COLORS = {
  recon: '#6B7280',
  'active-directory': '#E8A020',
  web: '#3B82F6',
  'binary-exploitation': '#EF4444',
  'iot-firmware': '#10B981',
  ctf: '#A855F7',
}

export function useSearch(tools, techniques) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState({ tools: [], techniques: [] })

  const fuseOptions = useMemo(() => ({
    keys: ['name', 'description', 'purpose', 'tags', 'zone'],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2,
    ignoreLocation: true,
  }), [])

  const toolFuse = useMemo(() => new Fuse(tools, fuseOptions), [tools, fuseOptions])
  const techniqueFuse = useMemo(() => new Fuse(techniques, fuseOptions), [techniques, fuseOptions])

  const doSearch = useCallback((searchQuery) => {
    setQuery(searchQuery)
    if (!searchQuery.trim()) {
      setResults({ tools: [], techniques: [] })
      return
    }
    const toolResults = toolFuse.search(searchQuery).slice(0, 20)
    const techniqueResults = techniqueFuse.search(searchQuery).slice(0, 20)
    setResults({
      tools: toolResults.map(r => ({ ...r.item, _score: r.score })),
      techniques: techniqueResults.map(r => ({ ...r.item, _score: r.score })),
    })
  }, [toolFuse, techniqueFuse])

  return { query, results, doSearch, setQuery }
}

export function useSearchCommands(tools, techniques) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const fuseOptions = useMemo(() => ({
    keys: ['command', 'label', 'when', 'output'],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
    ignoreLocation: true,
  }), [])

  const commandIndex = useMemo(() => {
    const commands = []
    tools.forEach(tool => {
      tool.commands?.forEach((cmd, idx) => {
        commands.push({
          ...cmd,
          toolId: tool.id,
          toolName: tool.name,
          zone: tool.zone,
          sourceType: 'tool',
          sourceId: tool.id,
        })
      })
    })
    techniques.forEach(tech => {
      tech.steps?.forEach((step) => {
        if (step.command) {
          commands.push({
            command: step.command,
            label: step.description,
            when: '',
            output: step.note || '',
            toolId: tech.id,
            toolName: tech.name,
            zone: tech.zone,
            sourceType: 'technique',
            sourceId: tech.id,
          })
        }
      })
    })
    return commands
  }, [tools, techniques])

  const fuse = useMemo(() => new Fuse(commandIndex, fuseOptions), [commandIndex, fuseOptions])

  const doSearch = useCallback((searchQuery) => {
    setQuery(searchQuery)
    if (!searchQuery.trim()) {
      setResults([])
      return
    }
    const res = fuse.search(searchQuery).slice(0, 30)
    setResults(res.map(r => ({ ...r.item, _score: r.score })))
  }, [fuse])

  return { query, results, doSearch, setQuery }
}

export function getZoneColor(zoneId) {
  return ZONE_COLORS[zoneId] || '#9CA3AF'
}

export function formatZoneName(zoneId) {
  return zoneId?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Unknown'
}
