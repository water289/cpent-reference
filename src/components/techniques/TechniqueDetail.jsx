import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Terminal, BookmarkPlus, BookmarkMinus, AlertTriangle, FileText } from 'lucide-react'
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
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="zone" style={{ color: zoneColor, borderColor: zoneColor }}>{technique.zone}</Badge>
            {technique.os?.map(os => (
              <Badge key={os} variant="os" className={getOSBadgeColor(os)}>{os}</Badge>
            ))}
            <span className="text-xs text-amber-400">{getDifficultyStars(technique.difficulty || 1)}</span>
            <span className={`text-xs ${getNoisinessColor(technique.noisiness)}`}>{technique.noisiness}</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{technique.name}</h1>
          <p className="text-gray-400 text-lg leading-relaxed">{technique.description}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => toggleBookmark({ ...technique, type: 'technique', path: `/techniques/${technique.id}` })}
            className={`p-2.5 rounded-xl border transition-all ${bookmarked ? 'text-amber-400 border-amber-500/30 bg-amber-500/10' : 'text-gray-500 border-white/[0.08] hover:text-gray-300'}`}
            aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {bookmarked ? <BookmarkMinus className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {technique.whenToUse && (
        <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-amber-300 mb-1">When to Use</h3>
            <p className="text-sm text-amber-100 leading-relaxed">{technique.whenToUse}</p>
          </div>
        </div>
      )}

      {technique.prerequisites && technique.prerequisites.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Prerequisites</h2>
          <div className="glass-panel rounded-2xl p-6 border border-white/[0.06]">
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {technique.prerequisites.map((prereq, idx) => (
                <li key={idx} className="leading-relaxed">{prereq}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-gray-400" />
          Procedure ({steps.length} steps)
        </h2>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-panel rounded-xl overflow-hidden border border-white/[0.06]">
              <div className="px-5 py-3.5 bg-white/[0.02] border-b border-white/[0.06] flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-accent-gold text-black rounded-lg text-xs font-bold">
                  {step.order || idx + 1}
                </span>
                <h3 className="text-sm font-medium text-white leading-relaxed">{step.description}</h3>
              </div>
              <div className="p-5">
                {step.command && (
                  <CommandBlock
                    command={{ label: step.description, command: step.command, when: '', output: step.note || '' }}
                    zone={technique.zone}
                    zoneColor={zoneColor}
                  />
                )}
                {step.note && !step.command && (
                  <p className="text-sm text-gray-400 leading-relaxed">{step.note}</p>
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
                className="block glass-panel rounded-xl p-5 hover:border-white/[0.12] transition-all border border-white/[0.06]"
              >
                <h3 className="font-medium text-white hover:text-accent-gold transition-colors mb-1.5">{tool.name}</h3>
                <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{tool.purpose}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {technique.defenseBypass && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Defense Bypass Notes</h2>
          <div className="glass-panel rounded-2xl p-6 border border-amber-500/10">
            <p className="text-sm text-amber-200 leading-relaxed">{technique.defenseBypass}</p>
          </div>
        </section>
      )}

      {technique.remediation && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Remediation</h2>
          <div className="glass-panel rounded-2xl p-6 border border-accent-green/10">
            <p className="text-sm text-green-200 leading-relaxed">{technique.remediation}</p>
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-400" />
          Personal Notes
        </h2>
        <textarea
          value={getNote(`technique-${technique.id}`)}
          onChange={(e) => saveNote(`technique-${technique.id}`, e.target.value)}
          placeholder="Add your personal notes here..."
          className="w-full h-40 glass-panel rounded-xl p-4 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/20 transition-all"
        />
        <div className="flex gap-2.5 mt-3">
          <button
            onClick={() => saveNote(`technique-${technique.id}`, getNote(`technique-${technique.id}`))}
            className="px-5 py-2.5 btn-primary"
          >
            Save Notes
          </button>
          <button
            onClick={() => clearNote(`technique-${technique.id}`)}
            className="px-5 py-2.5 glass-panel rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-white/[0.16] transition-all"
          >
            Clear
          </button>
        </div>
      </section>
    </div>
  )
}
