import { useApp } from '../../context/AppContext'
import { useHistory } from '../../hooks/useHistory'
import { useBookmarks } from '../../hooks/useBookmarks'
import { ChevronLeft, ChevronRight, Clock, Bookmark, FileText } from 'lucide-react'

export default function ContextPanel({ className = '' }) {
  const { contextPanelOpen, setContextPanelOpen } = useApp()
  const { getHistory } = useHistory()
  const { getBookmarks } = useBookmarks()

  if (!contextPanelOpen) {
    return (
      <button
        onClick={() => setContextPanelOpen(true)}
        className="absolute top-4 right-4 z-50 p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors no-print"
        aria-label="Open context panel"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
    )
  }

  const history = getHistory().slice(0, 10)
  const bookmarks = getBookmarks()

  return (
    <aside className={`
      fixed top-0 right-0 z-40 h-screen bg-gray-900 border-l border-gray-800
      transition-all duration-300 ease-in-out
      ${contextPanelOpen ? 'w-72' : 'w-0 -translate-x-full'}
      ${className}
    `}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Context</h2>
          <button
            onClick={() => setContextPanelOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded transition-colors"
            aria-label="Collapse context panel"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-gray-500" />
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recently Viewed</h3>
            </div>
            {history.length === 0 ? (
              <p className="text-xs text-gray-500 italic">No recent items</p>
            ) : (
              <ul className="space-y-2">
                {history.map(item => (
                  <li key={`${item.id}-${item.viewedAt}`}>
                    <a
                      href={item.path}
                      className="block text-sm text-gray-300 hover:text-accent-primary transition-colors truncate"
                    >
                      {item.name}
                    </a>
                    <span className="text-xs text-gray-500 capitalize">{item.type}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <Bookmark className="w-4 h-4 text-gray-500" />
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Bookmarks ({bookmarks.length})
              </h3>
            </div>
            {bookmarks.length === 0 ? (
              <p className="text-xs text-gray-500 italic">No bookmarks yet</p>
            ) : (
              <ul className="space-y-2">
                {bookmarks.slice(0, 10).map(item => (
                  <li key={item.id}>
                    <span className="block text-sm text-gray-300 hover:text-accent-primary transition-colors truncate">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-500 capitalize">{item.type || item.zone}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-gray-500" />
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quick Notes</h3>
            </div>
            <textarea
              placeholder="Type exam notes here..."
              className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
            />
          </section>
        </div>
      </div>
    </aside>
  )
}
