import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Search,
  Shield,
  Network,
  Globe,
  Cpu,
  Server,
  Flag,
  BookOpen,
  Bookmark,
  GitBranch,
  FileText,
  Terminal,
  Settings,
  ChevronLeft,
  Radar,
  Lock,
  Unlock,
  Clock,
  Target,
  Menu,
} from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { getZoneColor } from '../../utils/filters'

const ZONE_ICONS = {
  recon: Radar,
  'network-enum': Network,
  'active-directory': Network,
  web: Globe,
  'binary-exploitation': Cpu,
  'iot-firmware': Server,
  ctf: Flag,
  'privilege-escalation': Unlock,
  'lateral-movement': Network,
  'password-attacks': Lock,
  'post-exploitation': Server,
  'exploitation-frameworks': Terminal,
  reporting: FileText,
  'defense-evasion': Shield,
}

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen, examMode, toggleExamMode } = useApp()
  const location = useLocation()

  if (!sidebarOpen) {
    return (
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-5 left-5 z-50 p-2.5 glass-panel rounded-xl text-gray-400 hover:text-white hover:border-accent-gold/30 transition-all no-print group"
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    )
  }

  return (
    <aside className="
      fixed top-0 left-0 z-40 h-screen
      glass-panel-elevated border-r border-white/[0.06]
      transition-all duration-300 ease-in-out
      w-64
    ">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Shield className="w-7 h-7 text-accent-gold" />
              <div className="absolute inset-0 blur-md bg-accent-gold/30 group-hover:bg-accent-gold/50 transition-all" />
            </div>
            <span className="text-lg font-bold text-white font-display tracking-tight group-hover:text-accent-gold transition-colors">
              CPENT
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-white/[0.04] rounded-lg transition-all"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-thin" aria-label="Main navigation">
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/search'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <Search className="w-4 h-4" />
                Search
              </Link>
            </li>

            <li className="pt-4 pb-2">
              <span className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                Exam Zones
              </span>
            </li>
            {Object.entries(ZONE_ICONS).map(([zoneId, Icon]) => {
              const isActive = location.pathname.includes(zoneId)
              const zoneColor = getZoneColor(zoneId)
              return (
                <li key={zoneId}>
                  <Link
                    to={`/zones/${zoneId}`}
                    className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-white/[0.04] text-white active'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                    }`}
                    style={isActive ? {
                      borderLeft: `3px solid ${zoneColor}`,
                      paddingLeft: '0.75rem',
                    } : {}}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: isActive ? zoneColor : '#6B7280' }}
                    />
                    {zoneId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </Link>
                </li>
              )
            })}

            <li className="pt-4 pb-2">
              <span className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                Reference
              </span>
            </li>
            <li>
              <Link
                to="/tools"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/tools'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <Terminal className="w-4 h-4" />
                All Tools
              </Link>
            </li>
            <li>
              <Link
                to="/techniques"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/techniques'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                All Techniques
              </Link>
            </li>
            <li>
              <Link
                to="/workflows"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/workflows'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <GitBranch className="w-4 h-4" />
                Workflows
              </Link>
            </li>
            <li>
              <Link
                to="/argha-dey"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/argha-dey'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400">Argha Dey Methodology</span>
              </Link>
            </li>
            <li>
              <Link
                to="/strategy"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/strategy'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400">Strategy</span>
              </Link>
            </li>
            <li>
              <Link
                to="/bookmarks"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/bookmarks'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                Bookmarks
              </Link>
            </li>

            <li className="pt-4 pb-2">
              <span className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                System
              </span>
            </li>
            <li>
              <Link
                to="/exam"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/exam'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <Clock className="w-4 h-4" />
                Exam Mode
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === '/settings'
                    ? 'bg-accent-gold/[0.08] text-white active'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]'
                }`}
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-white/[0.06] no-print">
          <button
            onClick={toggleExamMode}
            className={`
              w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
              ${examMode
                ? 'bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20'
                : 'bg-accent-gold/10 border border-accent-gold/20 text-accent-gold hover:bg-accent-gold/20'
              }
            `}
            aria-label={examMode ? 'Exit exam mode' : 'Enter exam mode'}
          >
            <Terminal className="w-4 h-4" />
            {examMode ? 'Exit Exam Mode' : 'Exam Mode'}
          </button>
        </div>
      </div>
    </aside>
  )
}
