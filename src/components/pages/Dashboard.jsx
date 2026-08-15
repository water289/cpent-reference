import { useState, useEffect, useRef } from 'react'
import { Terminal, ArrowRight, BookOpen, GitBranch, Target, FileText } from 'lucide-react'
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
    <div className="space-y-8">
      <section className="text-center py-12">
        <div className="inline-flex items-center gap-2 mb-6">
          <Terminal className="w-8 h-8 text-accent-primary" />
          <h1 className="text-4xl font-bold text-white">CPENT Reference</h1>
        </div>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Interactive command reference for the EC-Council CPENT exam.
          Master every zone, tool, and technique with Argha Dey methodology workflows.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8 max-w-xl mx-auto shadow-xl">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Terminal className="w-4 h-4" />
            <span>kali@cpent:~</span>
          </div>
          <div className="font-mono text-lg text-green-400 h-8">
            {typedText}
            <span className={`text-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <SearchBar tools={tools} techniques={techniques} />
        </div>

        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <kbd className="shortcut-key">Cmd</kbd>+<kbd className="shortcut-key">K</kbd> Search
          </span>
          <span className="flex items-center gap-1">
            <kbd className="shortcut-key">Cmd</kbd>+<kbd className="shortcut-key">E</kbd> Exam Mode
          </span>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Exam Zones</h2>
          <button
            onClick={() => navigate('/zones')}
            className="flex items-center gap-1 text-sm text-accent-primary hover:text-accent-primary/80 transition-colors"
          >
            View all zones <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <ZoneMap />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-white">{tools.length}</div>
          <div className="text-xs text-gray-400 mt-1">Tools</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-white">{techniques.length}</div>
          <div className="text-xs text-gray-400 mt-1">Techniques</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-white">{zones.length}</div>
          <div className="text-xs text-gray-400 mt-1">Zones</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center">
          <div className="text-3xl font-bold text-accent-primary">{workflows.length}</div>
          <div className="text-xs text-gray-400 mt-1">Workflows</div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            Argha Dey Methodologies ({arghaWorkflows.length})
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            94% scorer's proven methodology workflows for each CPENT zone.
          </p>
          <button
            onClick={() => navigate('/argha-dey')}
            className="flex items-center gap-2 px-4 py-2 bg-amber-900/20 border border-amber-800/50 text-amber-300 rounded-lg text-sm font-medium hover:bg-amber-900/30 transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            View Methodologies
          </button>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-gray-400" />
            Standard Workflows ({workflows.length - arghaWorkflows.length})
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            CPENT reference workflows with exam habits and quick references.
          </p>
          <button
            onClick={() => navigate('/workflows')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            <GitBranch className="w-4 h-4" />
            Browse Workflows
          </button>
        </div>
      </section>

      {history.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Recently Viewed</h2>
            <Link
              to="/settings"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Manage history
            </Link>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg divide-y divide-gray-700">
            {history.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-700/30 transition-colors"
              >
                <div>
                  <span className="text-sm text-gray-200">{item.name}</span>
                  <span className="text-xs text-gray-500 ml-2 capitalize">{item.type}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
