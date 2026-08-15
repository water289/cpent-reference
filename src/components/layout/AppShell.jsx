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
      relative flex h-screen w-screen overflow-hidden bg-gray-900
      ${examMode ? 'exam-mode' : ''}
    `}>
      <Sidebar />
      <div
        className={`
          flex-1 flex flex-col min-w-0 transition-all duration-300
          ${sidebarOpen ? 'ml-60' : 'ml-0'}
          ${contextPanelOpen ? 'mr-72' : 'mr-0'}
        `}
      >
        <header className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-800 no-print">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 font-mono">CPENT Reference</span>
          </div>
          <ExamTimer examMode={examMode} />
        </header>
        <MainContent className={`
          ${examMode ? 'bg-white' : 'bg-gray-900'}
          transition-colors duration-300
        `}>
          {children || <Outlet />}
        </MainContent>
        <footer className="no-print px-4 py-2 bg-gray-800 border-t border-gray-800">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>CPENT Reference — Interactive Exam Cheat Sheet</span>
            <span>Built with Argha Dey 94% methodology</span>
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
