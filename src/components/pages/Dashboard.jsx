import { useState, useEffect, useRef } from 'react'
import { Terminal, ArrowRight, BookOpen, GitBranch, Target, FileText, Search as SearchIcon } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import SearchBar from '../search/SearchBar'
import ZoneMap from '../zones/ZoneMap'
import { useHistory } from '../../hooks/useHistory'
import { useDatabase } from '../../context/AppContext'

export default function Dashboard() {
  const navigate = useNavigate()
  const { data } = useDatabase()
  const { getHistory } = useHistory()
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const timeoutRef = useRef(null)

  const history = getHistory().slice(0, 5)
  const tools = data?.tools || []
  const techniques = data?.techniques || []
  const workflows = data?.workflows || []
  const zones = data?.zones || []
  const arghaWorkflows = workflows.filter(w => w.source?.includes('Argha Dey'))

  useEffect(() => {
    const phrases = [
      '$ find tools --zone ad --vulnerable',
      '$ nmap -sV -sC TARGET_IP',
      '$ bloodhound --no-sandbox',
      '$ sqlmap -u "http://target?id=1" --dump',
      '$ gdb -q ./vulnerable-binary',
      '$ binwalk -e firmware.bin',
    ]
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      const currentPhrase = phrases[phraseIndex]
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex - 1))
        charIndex--
      } else {
        setTypedText(currentPhrase.substring(0, charIndex + 1))
        charIndex++
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        timeoutRef.current = setTimeout(() => {
          isDeleting = true
          type()
        }, 2000)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        timeoutRef.current = setTimeout(type, 500)
      } else {
        const speed = isDeleting ? 30 : 60
        timeoutRef.current = setTimeout(type, speed)
      }
    }

    timeoutRef.current = setTimeout(type, 1000)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(c => !c), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-10">
      <section className="relative pt-8 pb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/[0.03] to-transparent pointer-events-none" />

        <div className="relative text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="relative">
              <Terminal className="w-10 h-10 text-accent-gold" />
              <div className="absolute inset-0 blur-xl bg-accent-gold/40" />
            </div>
            <h1 className="text-5xl font-bold text-white tracking-tight">CPENT Reference</h1>
          </div>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Interactive command reference for the EC-Council CPENT exam.
            Master every zone, tool, and technique with Argha Dey methodology workflows.
          </p>

          <div className="max-w-xl mx-auto mb-6">
            <SearchBar tools={tools} techniques={techniques} />
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <kbd className="px-2 py-1 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[11px] font-mono">Cmd</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[11px] font-mono">K</kbd>
              <span className="ml-1">Search</span>
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-2 py-1 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[11px] font-mono">Cmd</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-white/[0.04] border border-white/[0.08] rounded-lg text-[11px] font-mono">E</kbd>
              <span className="ml-1">Exam Mode</span>
            </span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <div className="glass-panel-elevated rounded-2xl p-6 border border-accent-gold/10">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <Terminal className="w-4 h-4 text-accent-gold" />
              <span className="font-mono text-xs">kali@cpent:~</span>
            </div>
            <div className="font-mono text-base text-accent-green h-7">
              {typedText}
              <span className={`text-accent-green ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-white tracking-tight">Exam Zones</h2>
          <button
            onClick={() => navigate('/zones')}
            className="flex items-center gap-1.5 text-sm text-accent-gold hover:text-accent-gold/80 transition-colors"
          >
            View all zones <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <ZoneMap />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Tools', value: tools.length, color: 'text-blue-400' },
          { label: 'Techniques', value: techniques.length, color: 'text-purple-400' },
          { label: 'Zones', value: zones.length, color: 'text-green-400' },
          { label: 'Workflows', value: workflows.length, color: 'text-accent-gold' },
        ].map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel rounded-2xl p-7 border border-amber-500/10 hover:border-amber-500/20 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-amber-500/10">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Argha Dey Methodologies</h2>
              <p className="text-xs text-gray-500">{arghaWorkflows.length} methodologies available</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
            94% scorer's proven methodology workflows for each CPENT zone.
          </p>
          <button
            onClick={() => navigate('/argha-dey')}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-xl text-sm font-semibold hover:bg-amber-500/20 transition-all"
          >
            <GitBranch className="w-4 h-4" />
            View Methodologies
          </button>
        </div>

        <div className="glass-panel rounded-2xl p-7 border border-white/[0.06] hover:border-white/[0.12] transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-white/[0.03]">
              <Target className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Standard Workflows</h2>
              <p className="text-xs text-gray-500">{workflows.length - arghaWorkflows.length} workflows available</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
            CPENT reference workflows with exam habits and quick references.
          </p>
          <button
            onClick={() => navigate('/workflows')}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-white/[0.08] text-gray-300 rounded-xl text-sm font-semibold hover:bg-white/[0.06] transition-all"
          >
            <GitBranch className="w-4 h-4" />
            Browse Workflows
          </button>
        </div>
      </section>

      {history.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-white tracking-tight">Recently Viewed</h2>
            <Link
              to="/settings"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Manage history
            </Link>
          </div>
          <div className="glass-panel rounded-2xl divide-y divide-white/[0.06]">
            {history.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-white/[0.02] transition-colors group"
              >
                <div>
                  <span className="text-sm text-gray-200 group-hover:text-accent-gold transition-colors">{item.name}</span>
                  <span className="text-xs text-gray-500 ml-2 capitalize">{item.type}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-accent-gold transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
