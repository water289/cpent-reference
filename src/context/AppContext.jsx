import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import zones from '../data/zones.json'
import tools from '../data/tools.json'
import techniques from '../data/techniques.json'
import workflows from '../data/workflows.json'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeZone, setActiveZone] = useState(null)
  const [examMode, setExamMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [contextPanelOpen, setContextPanelOpen] = useState(true)

  const data = useMemo(() => ({
    zones,
    tools,
    techniques,
    workflows,
    _meta: {
      totalTools: tools.length,
      totalTechniques: techniques.length,
      totalCommands: tools.reduce((acc, t) => acc + (t.commands ? t.commands.length : 0), 0),
    }
  }), [])

  useEffect(() => {
    const saved = localStorage.getItem('cpent-exam-mode')
    if (saved) setExamMode(JSON.parse(saved))
  }, [])

  const toggleExamMode = useCallback(() => {
    const next = !examMode
    setExamMode(next)
    localStorage.setItem('cpent-exam-mode', JSON.stringify(next))
  }, [examMode])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev)
  }, [])

  const toggleContextPanel = useCallback(() => {
    setContextPanelOpen(prev => !prev)
  }, [])

  return (
    <AppContext.Provider value={{
      searchQuery, setSearchQuery,
      activeZone, setActiveZone,
      examMode, toggleExamMode,
      sidebarOpen, setSidebarOpen: toggleSidebar,
      contextPanelOpen, setContextPanelOpen: toggleContextPanel,
      data,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export function useDatabase() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useDatabase must be used within AppProvider')
  return { data: ctx.data }
}
