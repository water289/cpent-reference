import { useParams, Link } from 'react-router-dom'
import { Terminal, BookmarkPlus, BookmarkMinus, FileText } from 'lucide-react'
import Breadcrumb from '../ui/Breadcrumb'
import Badge from '../ui/Badge'
import { useBookmarks } from '../../hooks/useBookmarks'
import { useNotes } from '../../hooks/useNotes'
import { useHistory } from '../../hooks/useHistory'
import { useDatabase } from '../../context/AppContext'
import { getZoneColor, getOSBadgeColor, getTypeBadgeColor } from '../../utils/filters'
import { getRelatedTechniques } from '../../utils/dataHelpers'
import CommandBlock from './CommandBlock'

const BUILD_CACHE_BUST = 'v6'

export default function ToolDetail() {
  const { toolId } = useParams()
  const { data } = useDatabase()
  const { toggleBookmark, isBookmarked } = useBookmarks()
  const { getNote, saveNote, clearNote } = useNotes()
  const { addToHistory } = useHistory()

  const tool = data?.tools?.find(t => t.id === toolId)
  if (!tool) return <div className="text-gray-400">Tool not found</div>

  const bookmarked = isBookmarked(tool.id)
  const zoneColor = getZoneColor(tool.zone)
  const relatedTechniques = getRelatedTechniques(tool, data?.techniques || [])

  addToHistory({ ...tool, type: 'tool', path: `/tools/${tool.id}` })

  const breadcrumbItems = [
    { path: '/tools', label: 'Tools' },
    { path: null, label: tool.name },
  ]

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="zone" style={{ color: zoneColor, borderColor: zoneColor }}>{tool.zone}</Badge>
            {tool.os?.map(os => (
              <Badge key={os} variant="os" className={getOSBadgeColor(os)}>{os}</Badge>
            ))}
            <Badge variant="type" className={getTypeBadgeColor(tool.type)}>{tool.type}</Badge>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">{tool.name}</h1>
          <p className="text-gray-400 text-lg leading-relaxed">{tool.purpose}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => toggleBookmark({ ...tool, type: 'tool', path: `/tools/${tool.id}` })}
            className={`p-2.5 rounded-xl border transition-all ${bookmarked ? 'text-amber-400 border-amber-500/30 bg-amber-500/10' : 'text-gray-500 border-white/[0.08] hover:text-gray-300'}`}
            aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {bookmarked ? <BookmarkMinus className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {tool.install?.kali && (
        <div className="glass-panel rounded-2xl p-5 border border-white/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4 text-gray-500" />
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Installation</h2>
          </div>
          <code className="block bg-surface-sunken border border-white/[0.04] rounded-xl px-4 py-3 text-sm text-gray-200 font-mono break-all whitespace-pre-wrap overflow-x-auto">
            {tool.install.kali}
          </code>
          {tool.install.notes && <p className="text-xs text-gray-500 mt-2.5">{tool.install.notes}</p>}
        </div>
      )}

      <section>
        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-400" />
          Description
        </h2>
        <div className="glass-panel rounded-2xl p-6 border border-white/[0.06]">
          <p className="text-gray-300 leading-relaxed">{tool.description}</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-gray-400" />
          Commands ({tool.commands?.length || 0})
        </h2>
        <div className="space-y-4">
          {tool.commands?.map((cmd, idx) => (
            <CommandBlock
              key={idx}
              command={cmd}
              zone={tool.zone}
              zoneColor={zoneColor}
            />
          ))}
        </div>
      </section>

      {relatedTechniques.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Related Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedTechniques.slice(0, 6).map(tech => (
              <Link
                key={tech.id}
                to={`/techniques/${tech.id}`}
                className="block glass-panel rounded-xl p-5 hover:border-white/[0.12] transition-all border border-white/[0.06]"
              >
                <h3 className="font-medium text-white hover:text-accent-gold transition-colors mb-1.5">{tech.name}</h3>
                <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">{tech.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-400" />
          Personal Notes
        </h2>
        <textarea
          value={getNote(`tool-${tool.id}`)}
          onChange={(e) => saveNote(`tool-${tool.id}`, e.target.value)}
          placeholder="Add your personal notes here..."
          className="w-full h-40 glass-panel rounded-xl p-4 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/20 transition-all"
        />
        <div className="flex gap-2.5 mt-3">
          <button
            onClick={() => saveNote(`tool-${tool.id}`, getNote(`tool-${tool.id}`))}
            className="px-5 py-2.5 btn-primary"
          >
            Save Notes
          </button>
          <button
            onClick={() => clearNote(`tool-${tool.id}`)}
            className="px-5 py-2.5 glass-panel rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-white/[0.16] transition-all"
          >
            Clear
          </button>
        </div>
      </section>
    </div>
  )
}
