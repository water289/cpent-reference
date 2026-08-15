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
    ChevronRight,
    Radar,
    Lock,
    Unlock,
    Clock,
    Target,
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

export default function Sidebar({ className = '' }) {
  const { sidebarOpen, setSidebarOpen, examMode, toggleExamMode } = useApp()
  const location = useLocation()

  if (!sidebarOpen) {
    return (
      <button
        onClick={() => setSidebarOpen(true)}
        className="absolute top-4 left-4 z-50 p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors no-print"
        aria-label="Open sidebar"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    )
  }

  return (
    <aside className={`
      fixed top-0 left-0 z-40 h-screen bg-gray-900 border-r border-gray-800
      transition-all duration-300 ease-in-out
      ${sidebarOpen ? 'w-64' : 'w-0 -translate-x-full'}
      ${className}
    `}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="w-6 h-6 text-accent-primary" />
            <span className="text-lg font-bold text-white font-display group-hover:text-accent-primary transition-colors">
              CPENT
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded transition-colors"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2 scrollbar-thin" aria-label="Main navigation">
          <ul className="space-y-0.5">
            <li>
              <Link
                to="/"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/search'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <Search className="w-4 h-4" />
                Search
              </Link>
            </li>

            <li className="pt-3 pb-1">
              <span className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Exam Zones
              </span>
            </li>
            {Object.entries(ZONE_ICONS).map(([zoneId, Icon]) => (
              <li key={zoneId}>
                <Link
                  to={`/zones/${zoneId}`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname.includes(zoneId)
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  }`}
                  style={location.pathname.includes(zoneId) ? {
                    borderLeft: `3px solid ${getZoneColor(zoneId)}`,
                    paddingLeft: '0.625rem',
                  } : {}}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: location.pathname.includes(zoneId) ? getZoneColor(zoneId) : '#9CA3AF' }}
                  />
                  {zoneId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </Link>
              </li>
            ))}

            <li className="pt-3 pb-1">
              <span className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Reference
              </span>
            </li>
            <li>
              <Link
                to="/tools"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/tools'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <Terminal className="w-4 h-4" />
                All Tools
              </Link>
            </li>
            <li>
              <Link
                to="/techniques"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/techniques'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                All Techniques
              </Link>
            </li>
            <li>
              <Link
                to="/workflows"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/workflows'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <GitBranch className="w-4 h-4" />
                Workflows
              </Link>
            </li>
            <li>
              <Link
                to="/argha-dey"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/argha-dey'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400">Argha Dey Methodology</span>
              </Link>
            </li>
            <li>
              <Link
                to="/strategy"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/strategy'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400">Strategy</span>
              </Link>
            </li>
            <li>
              <Link
                to="/bookmarks"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/bookmarks'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                Bookmarks
              </Link>
            </li>

            <li className="pt-3 pb-1">
              <span className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                System
              </span>
            </li>
            <li>
              <Link
                to="/exam"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/exam'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <Clock className="w-4 h-4" />
                Exam Mode
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === '/settings'
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-3 border-t border-gray-800 no-print">
          <button
            onClick={toggleExamMode}
            className={`
              w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all
              ${examMode
                ? 'bg-red-900/30 border border-red-700 text-red-400 hover:bg-red-900/50'
                : 'bg-accent-primary/10 border border-accent-primary/30 text-accent-primary hover:bg-accent-primary/20'
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
