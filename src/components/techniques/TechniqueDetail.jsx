import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Terminal, BookmarkPlus, BookmarkMinus, AlertTriangle } from 'lucide-react'
import Breadcrumb from '../ui/Breadcrumb'
import Badge from '../ui/Badge'
import { useBookmarks } from '../../hooks/useBookmarks'
import { useNotes } from '../../hooks/useNotes'
import { useHistory } from '../../hooks/useHistory'
import { useDatabase } from '../../context/AppContext'
import { getZoneColor, getOSBadgeColor, getDifficultyStars, getNoisinessColor } from '../../utils/filters'
import { getRelatedTools } from '../../utils/dataHelpers'
import CommandBlock from '../tools/CommandBlock'

export default function TechniqueDetail() {
  const { techniqueId } = useParams()
  const { data } = useDatabase()
  const { toggleBookmark, isBookmarked } = useBookmarks()
  const { getNote, saveNote, clearNote } = useNotes()
  const { addToHistory } = useHistory()

  const technique = data?.techniques?.find(t => t.id === techniqueId)
  if (!technique) return <div className="text-gray-400">Technique not found</div>

  const bookmarked = isBookmarked(technique.id)
  const zoneColor = getZoneColor(technique.zone)
  const relatedTools = getRelatedTools(technique, data?.tools || [])

  addToHistory({ ...technique, type: 'technique', path: `/techniques/${technique.id}` })

  const breadcrumbItems = [
    { path: '/techniques', label: 'Techniques' },
    { path: null, label: technique.name },
  ]

  const steps = technique.steps || []

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="zone" style={{ color: zoneColor, borderColor: zoneColor }}>{technique.zone}</Badge>
            {technique.os?.map(os => (
              <Badge key={os} variant="os" className={getOSBadgeColor(os)}>{os}</Badge>
            ))}
            <span className="text-xs text-yellow-400">{getDifficultyStars(technique.difficulty || 1)}</span>
            <span className={`text-xs ${getNoisinessColor(technique.noisiness)}`}>{technique.noisiness}</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{technique.name}</h1>
          <p className="text-gray-400 text-lg">{technique.description}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => toggleBookmark({ ...technique, type: 'technique', path: `/techniques/${technique.id}` })}
            className={`p-2 rounded border transition-colors ${bookmarked ? 'text-yellow-400 border-yellow-700 bg-yellow-900/20' : 'text-gray-500 border-gray-700 hover:text-gray-300'}`}
            aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {bookmarked ? <BookmarkMinus className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {technique.whenToUse && (
        <div className="flex items-start gap-3 bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
          <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-yellow-300 mb-1">When to Use</h3>
            <p className="text-sm text-yellow-100">{technique.whenToUse}</p>
          </div>
        </div>
      )}

      {technique.prerequisites && technique.prerequisites.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {technique.prerequisites.map((prereq, idx) => (
              <li key={idx}>{prereq}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Procedure ({steps.length} steps)</h2>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <div className="px-4 py-3 bg-gray-800/50 border-b border-gray-700 flex items-center gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-accent-primary text-black rounded-full text-xs font-bold">
                  {step.order || idx + 1}
                </span>
                <h3 className="text-sm font-medium text-white">{step.description}</h3>
              </div>
              <div className="p-4">
                {step.command && (
                  <CommandBlock
                    command={{ label: step.description, command: step.command, when: '', output: step.note || '' }}
                    zone={technique.zone}
                    zoneColor={zoneColor}
                  />
                )}
                {step.note && !step.command && (
                  <p className="text-sm text-gray-400">{step.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {relatedTools.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Tools Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTools.map(tool => (
              <Link
                key={tool.id}
                to={`/tools/${tool.id}`}
                className="block bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
              >
                <h3 className="font-medium text-white hover:text-accent-primary transition-colors">{tool.name}</h3>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{tool.purpose}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {technique.defenseBypass && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Defense Bypass Notes</h2>
          <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4">
            <p className="text-sm text-amber-200">{technique.defenseBypass}</p>
          </div>
        </section>
      )}

      {technique.remediation && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Remediation</h2>
          <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
            <p className="text-sm text-green-200">{technique.remediation}</p>
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Personal Notes</h2>
        <textarea
          value={getNote(`technique-${technique.id}`)}
          onChange={(e) => saveNote(`technique-${technique.id}`, e.target.value)}
          placeholder="Add your personal notes here..."
          className="w-full h-40 bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => saveNote(`technique-${technique.id}`, getNote(`technique-${technique.id}`))}
            className="px-4 py-2 bg-accent-primary text-black rounded text-sm font-medium hover:bg-accent-primary/90 transition-colors"
          >
            Save Notes
          </button>
          <button
            onClick={() => clearNote(`technique-${technique.id}`)}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded text-sm font-medium hover:bg-gray-600 transition-colors"
          >
            Clear
          </button>
        </div>
      </section>
    </div>
  )
}
