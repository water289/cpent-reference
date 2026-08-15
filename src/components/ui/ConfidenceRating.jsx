import React, { useState, useCallback } from 'react'
import { Circle, CheckCircle, AlertCircle } from 'lucide-react'
import { useConfidence } from '../../hooks/useConfidence'
import { getConfidenceLabel, getConfidenceColor } from '../../utils/filters'

const STATES = [
  { level: 0, Icon: Circle, label: 'Not practiced', color: 'text-red-400', bg: 'bg-red-900/20', border: 'border-red-800 hover:border-red-600' },
  { level: 1, Icon: CheckCircle, label: 'Practiced once', color: 'text-yellow-400', bg: 'bg-yellow-900/20', border: 'border-yellow-800 hover:border-yellow-600' },
  { level: 2, Icon: AlertCircle, label: 'Confident', color: 'text-green-400', bg: 'bg-green-900/20', border: 'border-green-800 hover:border-green-600' },
]

export default function ConfidenceRating({ itemId, onChange }) {
  const { cycleConfidence, getConfidence } = useConfidence()
  const [hovered, setHovered] = useState(null)
  const current = getConfidence(itemId)
  const state = STATES[current]

  const handleClick = useCallback(() => {
    const next = cycleConfidence(itemId)
    onChange?.(next)
  }, [itemId, cycleConfidence, onChange])

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(current)}
        onMouseLeave={() => setHovered(null)}
        className={`
          inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-medium
          transition-all duration-200
          ${state.bg} ${state.border} ${state.color}
        `}
        aria-label={`Confidence: ${getConfidenceLabel(current)}`}
        title={`Confidence: ${getConfidenceLabel(current)}. Click to change.`}
      >
        {hovered !== null ? (
          <span className={`${STATES[hovered].color}`}>{STATES[hovered].label}</span>
        ) : (
          <>
            {React.createElement(state.Icon, { className: 'w-3.5 h-3.5' })}
            <span>{getConfidenceLabel(current)}</span>
          </>
        )}
      </button>
    </div>
  )
}
