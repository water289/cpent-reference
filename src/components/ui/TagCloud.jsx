import { useSearch } from '../../utils/search'

export default function TagCloud({ tags, onTagClick, className = '' }) {
  if (!tags || tags.length === 0) return null

  const maxCount = Math.max(...tags.map(t => t.count), 1)

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map(tag => {
        const size = Math.max(0.75, (tag.count / maxCount) * 1.25)
        return (
          <button
            key={tag.name}
            onClick={() => onTagClick?.(tag.name)}
            className="px-2 py-1 rounded bg-gray-800 border border-gray-700 text-gray-300 hover:border-accent-primary hover:text-accent-primary transition-all duration-200"
            style={{ fontSize: `${size}rem` }}
            aria-label={`Search for ${tag.name} (${tag.count} items)`}
          >
            {tag.name}
          </button>
        )
      })}
    </div>
  )
}
