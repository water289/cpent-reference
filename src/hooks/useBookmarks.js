import { useCallback } from 'react'

export function useBookmarks() {
  const getBookmarks = useCallback(() => {
    try {
      return JSON.parse(localStorage.getItem('cpent-bookmarks') || '[]')
    } catch {
      return []
    }
  }, [])

  const addBookmark = useCallback((item) => {
    const bookmarks = getBookmarks()
    const exists = bookmarks.find(b => b.id === item.id)
    if (!exists) {
      bookmarks.push({ ...item, addedAt: Date.now() })
      localStorage.setItem('cpent-bookmarks', JSON.stringify(bookmarks))
    }
    return bookmarks
  }, [getBookmarks])

  const removeBookmark = useCallback((itemId) => {
    const bookmarks = getBookmarks().filter(b => b.id !== itemId)
    localStorage.setItem('cpent-bookmarks', JSON.stringify(bookmarks))
    return bookmarks
  }, [getBookmarks])

  const toggleBookmark = useCallback((item) => {
    const bookmarks = getBookmarks()
    const exists = bookmarks.find(b => b.id === item.id)
    if (exists) {
      const updated = bookmarks.filter(b => b.id !== item.id)
      localStorage.setItem('cpent-bookmarks', JSON.stringify(updated))
      return false
    } else {
      bookmarks.push({ ...item, addedAt: Date.now() })
      localStorage.setItem('cpent-bookmarks', JSON.stringify(bookmarks))
      return true
    }
  }, [getBookmarks])

  const isBookmarked = useCallback((itemId) => {
    return getBookmarks().some(b => b.id === itemId)
  }, [getBookmarks])

  const clearBookmarks = useCallback(() => {
    localStorage.removeItem('cpent-bookmarks')
  }, [])

  return { getBookmarks, addBookmark, removeBookmark, toggleBookmark, isBookmarked, clearBookmarks }
}
