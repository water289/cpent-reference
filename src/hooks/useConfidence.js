import { useCallback } from 'react'

export function useConfidence() {
  const getConfidence = useCallback((itemId) => {
    try {
      const data = JSON.parse(localStorage.getItem('cpent-confidence') || '{}')
      return data[itemId] || 0
    } catch {
      return 0
    }
  }, [])

  const setConfidence = useCallback((itemId, level) => {
    try {
      const data = JSON.parse(localStorage.getItem('cpent-confidence') || '{}')
      data[itemId] = level
      localStorage.setItem('cpent-confidence', JSON.stringify(data))
    } catch {
      // ignore storage errors
    }
  }, [])

  const cycleConfidence = useCallback((itemId) => {
    const current = getConfidence(itemId)
    const next = (current + 1) % 3
    setConfidence(itemId, next)
    return next
  }, [getConfidence, setConfidence])

  const getStats = useCallback((items) => {
    if (!items || !items.length) return { total: 0, practiced: 0, confident: 0, percentage: 0 }
    let practiced = 0
    let confident = 0
    items.forEach(item => {
      const level = getConfidence(item.id)
      if (level > 0) practiced++
      if (level === 2) confident++
    })
    return {
      total: items.length,
      practiced,
      confident,
      percentage: Math.round((practiced / items.length) * 100),
    }
  }, [getConfidence])

  const clearConfidence = useCallback(() => {
    localStorage.removeItem('cpent-confidence')
  }, [])

  return { getConfidence, setConfidence, cycleConfidence, getStats, clearConfidence }
}
