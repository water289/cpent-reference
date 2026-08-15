import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-400 mb-4">
      <Link to="/" className="hover:text-accent-primary transition-colors" aria-label="Home">
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <span key={item.path || index} className="flex items-center gap-1">
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          {item.path ? (
            <Link
              to={item.path}
              className={`
                hover:text-accent-primary transition-colors
                ${index === items.length - 1 ? 'text-gray-200 font-medium' : ''}
              `}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-200 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
