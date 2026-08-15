import { useParams, Link } from 'react-router-dom'
import { Terminal, BookmarkPlus, BookmarkMinus } from 'lucide-react'
import Breadcrumb from '../ui/Breadcrumb'
import Badge from '../ui/Badge'
import { useBookmarks } from '../../hooks/useBookmarks'
import { useNotes } from '../../hooks/useNotes'
import { useHistory } from '../../hooks/useHistory'
import { useDatabase } from '../../context/AppContext'
import { getZoneColor, getOSBadgeColor, getTypeBadgeColor } from '../../utils/filters'
import { getRelatedTechniques } from '../../utils/dataHelpers'
import CommandBlock from './CommandBlock'

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
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="zone" style={{ color: zoneColor, borderColor: zoneColor }}>{tool.zone}</Badge>
            {tool.os?.map(os => (
              <Badge key={os} variant="os" className={getOSBadgeColor(os)}>{os}</Badge>
            ))}
            <Badge variant="type" className={getTypeBadgeColor(tool.type)}>{tool.type}</Badge>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{tool.name}</h1>
          <p className="text-gray-400 text-lg">{tool.purpose}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => toggleBookmark({ ...tool, type: 'tool', path: `/tools/${tool.id}` })}
            className={`p-2 rounded border transition-colors ${bookmarked ? 'text-yellow-400 border-yellow-700 bg-yellow-900/20' : 'text-gray-500 border-gray-700 hover:text-gray-300'}`}
            aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
          >
            {bookmarked ? <BookmarkMinus className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {tool.install?.kali && (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-gray-500" />
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Installation</h2>
          </div>
          <code className="block bg-gray-900 border border-gray-700 rounded px-4 py-3 text-sm text-gray-200 font-mono break-all whitespace-pre-wrap overflow-x-auto">
            {tool.install.kali}
          </code>
          {tool.install.notes && <p className="text-xs text-gray-500 mt-2">{tool.install.notes}</p>}
        </div>
      )}

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
        <p className="text-gray-300 leading-relaxed">{tool.description}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">
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
                className="block bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors"
              >
                <h3 className="font-medium text-white hover:text-accent-primary transition-colors">{tech.name}</h3>
                <p className="text-sm text-gray-400 mt-1 line-clamp-3">{tech.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Personal Notes</h2>
        <textarea
          value={getNote(`tool-${tool.id}`)}
          onChange={(e) => saveNote(`tool-${tool.id}`, e.target.value)}
          placeholder="Add your personal notes here..."
          className="w-full h-40 bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => saveNote(`tool-${tool.id}`, getNote(`tool-${tool.id}`))}
            className="px-4 py-2 bg-accent-primary text-black rounded text-sm font-medium hover:bg-accent-primary/90 transition-colors"
          >
            Save Notes
          </button>
          <button
            onClick={() => clearNote(`tool-${tool.id}`)}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded text-sm font-medium hover:bg-gray-600 transition-colors"
          >
            Clear
          </button>
        </div>
      </section>
    </div>
  )
}
