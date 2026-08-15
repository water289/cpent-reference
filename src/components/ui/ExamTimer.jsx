import { useState, useEffect, useCallback } from 'react'
import { Clock, Play, Pause } from 'lucide-react'

const EXAM_DURATION_MS = 3 * 60 * 60 * 1000 + 45 * 60 * 1000
const SESSIONS = [
  { id: 1, name: 'Session 1', duration: EXAM_DURATION_MS },
  { id: 2, name: 'Session 2', duration: EXAM_DURATION_MS },
]

export default function ExamTimer({ examMode }) {
  const [isRunning, setIsRunning] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [session, setSession] = useState(1)

  useEffect(() => {
    const savedStart = localStorage.getItem('cpent-exam-start')
    const savedSession = localStorage.getItem('cpent-exam-session')
    if (savedStart && examMode) {
      setStartTime(Number(savedStart))
      setIsRunning(true)
      if (savedSession) setSession(Number(savedSession))
    }
  }, [examMode])

  const toggleTimer = useCallback(() => {
    if (isRunning) {
      setIsRunning(false)
      localStorage.removeItem('cpent-exam-start')
    } else {
      setIsRunning(true)
      setStartTime(Date.now())
      localStorage.setItem('cpent-exam-start', Date.now().toString())
      localStorage.setItem('cpent-exam-session', session.toString())
    }
  }, [isRunning, session])

  const switchSession = useCallback((newSession) => {
    setSession(newSession)
    setIsRunning(false)
    localStorage.removeItem('cpent-exam-start')
    localStorage.setItem('cpent-exam-session', newSession.toString())
  }, [])

  const getRemaining = useCallback(() => {
    if (!startTime || !isRunning) return SESSIONS.find(s => s.id === session)?.duration || EXAM_DURATION_MS
    const elapsed = Date.now() - startTime
    const remaining = (SESSIONS.find(s => s.id === session)?.duration || EXAM_DURATION_MS) - elapsed
    return Math.max(0, remaining)
  }, [startTime, isRunning, session])

  const [remaining, setRemaining] = useState(() => getRemaining())

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setRemaining(getRemaining())
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning, getRemaining])

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const urgency = remaining < 15 * 60 * 1000 ? 'critical' : remaining < 30 * 60 * 1000 ? 'warning' : 'normal'

  const urgencyClasses = {
    critical: 'text-red-400 border-red-500',
    warning: 'text-yellow-400 border-yellow-500',
    normal: 'text-green-400 border-green-600',
  }

  if (!examMode) return null

  return (
    <div className={`
      flex items-center gap-3 p-3 rounded-lg border bg-gray-800/50
      ${urgency === 'critical' ? 'border-red-500 animate-pulse' : urgencyClasses[urgency]}
    `}>
      <Clock className="w-4 h-4" />
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          {SESSIONS.map(s => (
            <button
              key={s.id}
              onClick={() => switchSession(s.id)}
              className={`
                px-2 py-0.5 rounded text-xs font-medium transition-colors
                ${session === s.id
                  ? 'bg-accent-primary text-black'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }
              `}
            >
              {s.name}
            </button>
          ))}
        </div>
        <div className={`text-lg font-mono font-bold tracking-wider ${urgencyClasses[urgency]}`}>
          {formatTime(remaining)}
        </div>
      </div>
      <button
        onClick={toggleTimer}
        className={`
          ml-auto p-2 rounded border transition-colors
          ${isRunning
            ? 'border-red-700 text-red-400 hover:bg-red-900/30'
            : 'border-green-700 text-green-400 hover:bg-green-900/30'
          }
        `}
        aria-label={isRunning ? 'Pause timer' : 'Start timer'}
      >
        {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
    </div>
  )
}
