import { useCallback } from 'react'

const MAX_HISTORY = 20

export function useHistory() {
  const getHistory = useCallback(() => {
    try {
      return JSON.parse(localStorage.getItem('cpent-history') || '[]')
    } catch {
      return []
    }
  }, [])

  const addToHistory = useCallback((item) => {
    try {
      const history = getHistory()
      const filtered = history.filter(h => h.id !== item.id)
      filtered.unshift({
        id: item.id,
        name: item.name,
        type: item.type || item.zone || 'unknown',
        zone: item.zone,
        path: item.path,
        viewedAt: Date.now(),
      })
      const trimmed = filtered.slice(0, MAX_HISTORY)
      localStorage.setItem('cpent-history', JSON.stringify(trimmed))
    } catch {
      // ignore storage errors
    }
  }, [getHistory])

  const clearHistory = useCallback(() => {
    localStorage.removeItem('cpent-history')
  }, [])

  return { getHistory, addToHistory, clearHistory }
}
