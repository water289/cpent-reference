import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import ContextPanel from './ContextPanel'
import CommandPalette from '../search/CommandPalette'
import ExamTimer from '../ui/ExamTimer'
import { useApp } from '../../context/AppContext'

export default function AppShell({ children }) {
  const { examMode, sidebarOpen, contextPanelOpen } = useApp()
  const [paletteOpen, setPaletteOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setPaletteOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    setPaletteOpen(false)
  }, [location])

  return (
    <div className={`
      relative flex h-screen w-screen overflow-hidden
      ${examMode ? 'exam-mode' : ''}
    `} style={{ background: 'var(--surface-base)' }}>
      <Sidebar />
      <div
        className={`
          flex-1 flex flex-col min-w-0 transition-all duration-300
          ${sidebarOpen ? 'ml-64' : 'ml-0'}
          ${contextPanelOpen ? 'mr-72' : 'mr-0'}
        `}
      >
        <header className="
          flex items-center justify-between px-6 py-3
          glass-panel border-b border-white/[0.06]
          no-print z-10
        ">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              <div className="absolute inset-0 blur-sm bg-accent-gold/50" />
            </div>
            <span className="text-sm font-medium text-gray-300 font-display tracking-tight">
              CPENT Reference
            </span>
          </div>
          <ExamTimer examMode={examMode} />
        </header>
        <MainContent className={`
          flex-1
          ${examMode ? 'bg-white' : ''}
          transition-colors duration-300
        `}>
          {children || <Outlet />}
        </MainContent>
        <footer className="no-print px-6 py-2.5 glass-panel border-t border-white/[0.06]">
          <div className="flex items-center justify-between text-[11px] text-gray-500">
            <span className="font-display">CPENT Reference v1.0</span>
            <span>Argha Dey 94% Methodology</span>
          </div>
        </footer>
      </div>
      <ContextPanel />
      {paletteOpen && (
        <CommandPalette onClose={() => setPaletteOpen(false)} />
      )}
    </div>
  )
}
