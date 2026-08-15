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
        className="group relative bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-all duration-200"
        style={{ borderLeftWidth: '3px', borderLeftColor: zoneColor }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold text-white group-hover:text-accent-primary transition-colors">
                <Link to={`/techniques/${technique.id}`} onClick={handleView}>{technique.name}</Link>
              </h3>
              <Badge variant="zone" style={{ color: zoneColor, borderColor: zoneColor }}>{technique.zone}</Badge>
              {technique.os?.map(os => (
                <Badge key={os} variant="os" className={getOSBadgeColor(os)}>{os}</Badge>
              ))}
              <span className="text-xs text-yellow-400">{getDifficultyStars(technique.difficulty || 1)}</span>
            </div>
            <p className="text-sm text-gray-400 line-clamp-1 mb-1">{technique.description}</p>
            {technique.whenToUse && (
              <p className="text-xs text-yellow-300 line-clamp-1">⚠ {technique.whenToUse}</p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => toggleBookmark({ ...technique, type: 'technique', path: `/techniques/${technique.id}` })}
              className={`p-1.5 rounded transition-colors ${bookmarked ? 'text-yellow-400' : 'text-gray-500 hover:text-gray-300'}`}
              aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
              {bookmarked ? <BookmarkMinus className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
            </button>
            <Link
              to={`/techniques/${technique.id}`}
              onClick={handleView}
              className="px-3 py-1.5 bg-accent-primary/10 border border-accent-primary/30 text-accent-primary rounded text-xs font-medium hover:bg-accent-primary/20 transition-colors"
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
      className="group relative bg-gray-800 border border-gray-700 rounded-lg p-5 hover:border-gray-600 transition-all duration-200 flex flex-col h-full"
      style={{ borderLeftWidth: '3px', borderLeftColor: zoneColor }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="zone" style={{ color: zoneColor, borderColor: zoneColor }}>{technique.zone}</Badge>
          {technique.os?.map(os => (
            <Badge key={os} variant="os" className={getOSBadgeColor(os)}>{os}</Badge>
          ))}
          <span className="text-xs text-yellow-400">{getDifficultyStars(technique.difficulty || 1)}</span>
          <span className={`text-xs ${getNoisinessColor(technique.noisiness)}`}>{technique.noisiness}</span>
        </div>
        <button
          onClick={() => toggleBookmark({ ...technique, type: 'technique', path: `/techniques/${technique.id}` })}
          className={`p-1.5 rounded transition-colors flex-shrink-0 ${bookmarked ? 'text-yellow-400' : 'text-gray-500 hover:text-gray-300'}`}
          aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {bookmarked ? <BookmarkMinus className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
        </button>
      </div>

      <h3 className="text-lg font-semibold text-white group-hover:text-accent-primary transition-colors mb-1.5">
        <Link to={`/techniques/${technique.id}`} onClick={handleView}>{technique.name}</Link>
      </h3>

      <p className="text-sm text-gray-400 mb-3 line-clamp-2 flex-1">{technique.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {technique.tags?.slice(0, 6).map(tag => (
          <button key={tag} onClick={() => handleTagClick(tag)} className="px-2 py-0.5 bg-gray-700/50 text-gray-300 rounded text-xs hover:text-accent-primary hover:bg-gray-700 transition-colors">{tag}</button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-700">
        <Link
          to={`/techniques/${technique.id}`}
          onClick={handleView}
          className="flex items-center gap-1 px-3 py-1.5 bg-accent-primary/10 border border-accent-primary/30 text-accent-primary rounded text-xs font-medium hover:bg-accent-primary/20 transition-colors"
        >
          View Full Technique
        </Link>
      </div>
    </div>
  )
}
