import { Link, useNavigate } from 'react-router-dom'
import { BookmarkPlus, BookmarkMinus } from 'lucide-react'
import Badge from '../ui/Badge'
import { useBookmarks } from '../../hooks/useBookmarks'
import { useHistory } from '../../hooks/useHistory'
import { getZoneColor, getOSBadgeColor, getDifficultyStars, getNoisinessColor } from '../../utils/filters'

export default function TechniqueCard({ technique, viewMode = 'grid' }) {
  const { toggleBookmark, isBookmarked } = useBookmarks()
  const { addToHistory } = useHistory()
  const navigate = useNavigate()

  const bookmarked = isBookmarked(technique.id)
  const zoneColor = getZoneColor(technique.zone)

  const handleTagClick = (tag) => {
    navigate(`/search?q=${encodeURIComponent(tag)}`)
  }

  const handleView = () => {
    addToHistory({ ...technique, type: 'technique', path: `/techniques/${technique.id}` })
  }

  if (viewMode === 'list') {
    return (
      <div
        className="group relative glass-panel rounded-xl p-5 hover:border-white/[0.12] card-hover"
        style={{ borderLeft: `3px solid ${zoneColor}` }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <h3 className="text-base font-semibold text-white group-hover:text-accent-gold transition-colors">
                <Link to={`/techniques/${technique.id}`} onClick={handleView}>{technique.name}</Link>
              </h3>
              <Badge variant="zone" style={{ color: zoneColor, borderColor: zoneColor }}>{technique.zone}</Badge>
              {technique.os?.map(os => (
                <Badge key={os} variant="os" className={getOSBadgeColor(os)}>{os}</Badge>
              ))}
              <span className="text-xs text-amber-400">{getDifficultyStars(technique.difficulty || 1)}</span>
            </div>
            <p className="text-sm text-gray-400 line-clamp-1 mb-1">{technique.description || technique.purpose}</p>
            {technique.whenToUse && (
              <p className="text-xs text-amber-300 line-clamp-1">⚠ {technique.whenToUse}</p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => toggleBookmark({ ...technique, type: 'technique', path: `/techniques/${technique.id}` })}
              className={`p-1.5 rounded-lg transition-colors ${bookmarked ? 'text-amber-400' : 'text-gray-500 hover:text-gray-300'}`}
              aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              {bookmarked ? <BookmarkMinus className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
            </button>
            <Link
              to={`/techniques/${technique.id}`}
              onClick={handleView}
              className="px-3 py-1.5 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold rounded-lg text-xs font-semibold hover:bg-accent-gold/20 transition-all"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="group relative glass-panel rounded-xl p-6 hover:border-white/[0.12] card-hover flex flex-col h-full"
      style={{ borderLeft: `3px solid ${zoneColor}` }}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="zone" style={{ color: zoneColor, borderColor: zoneColor }}>{technique.zone}</Badge>
          {technique.os?.map(os => (
            <Badge key={os} variant="os" className={getOSBadgeColor(os)}>{os}</Badge>
          ))}
          <span className="text-xs text-amber-400">{getDifficultyStars(technique.difficulty || 1)}</span>
          <span className={`text-xs ${getNoisinessColor(technique.noisiness)}`}>{technique.noisiness}</span>
        </div>
        <button
          onClick={() => toggleBookmark({ ...technique, type: 'technique', path: `/techniques/${technique.id}` })}
          className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${bookmarked ? 'text-amber-400' : 'text-gray-500 hover:text-gray-300'}`}
          aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {bookmarked ? <BookmarkMinus className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
        </button>
      </div>

      <h3 className="text-lg font-semibold text-white group-hover:text-accent-gold transition-colors mb-2">
        <Link to={`/techniques/${technique.id}`} onClick={handleView}>{technique.name}</Link>
      </h3>

      <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-1 leading-relaxed">{technique.description || technique.purpose}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {technique.tags?.slice(0, 6).map(tag => (
          <button key={tag} onClick={() => handleTagClick(tag)} className="px-2 py-1 bg-white/[0.03] border border-white/[0.06] text-gray-400 rounded-lg text-xs hover:text-accent-gold hover:border-accent-gold/20 transition-all">{tag}</button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
        <Link
          to={`/techniques/${technique.id}`}
          onClick={handleView}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-gold/10 border border-accent-gold/20 text-accent-gold rounded-lg text-xs font-semibold hover:bg-accent-gold/20 transition-all"
        >
          View Full Technique
        </Link>
      </div>
    </div>
  )
}
