import { useCallback } from 'react'

export function useNotes() {
  const getNote = useCallback((itemId) => {
    try {
      const data = JSON.parse(localStorage.getItem('cpent-notes') || '{}')
      return data[itemId] || ''
    } catch {
      return ''
    }
  }, [])

  const saveNote = useCallback((itemId, text) => {
    try {
      const data = JSON.parse(localStorage.getItem('cpent-notes') || '{}')
      data[itemId] = text
      localStorage.setItem('cpent-notes', JSON.stringify(data))
    } catch {
      // ignore storage errors
    }
  }, [])

  const clearNote = useCallback((itemId) => {
    try {
      const data = JSON.parse(localStorage.getItem('cpent-notes') || '{}')
      delete data[itemId]
      localStorage.setItem('cpent-notes', JSON.stringify(data))
    } catch {
      // ignore storage errors
    }
  }, [])

  return { getNote, saveNote, clearNote }
}
