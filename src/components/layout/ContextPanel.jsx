import { useApp } from '../../context/AppContext'
import { useHistory } from '../../hooks/useHistory'
import { useBookmarks } from '../../hooks/useBookmarks'
import { ChevronLeft, ChevronRight, Clock, Bookmark, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContextPanel() {
  const { contextPanelOpen, setContextPanelOpen } = useApp()
  const { getHistory } = useHistory()
  const { getBookmarks } = useBookmarks()

  if (!contextPanelOpen) {
    return (
      <button
        onClick={() => setContextPanelOpen(true)}
        className="fixed top-5 right-5 z-50 p-2.5 glass-panel rounded-xl text-gray-400 hover:text-white hover:border-accent-gold/30 transition-all no-print group"
        aria-label="Open context panel"
      >
        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    )
  }

  const history = getHistory().slice(0, 10)
  const bookmarks = getBookmarks()

  return (
    <aside className="
      fixed top-0 right-0 z-40 h-screen
      glass-panel-elevated border-l border-white/[0.06]
      transition-all duration-300 ease-in-out
      w-72
    ">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Context</h2>
          <button
            onClick={() => setContextPanelOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-white/[0.04] rounded-lg transition-all"
            aria-label="Collapse context panel"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-gray-500" />
              <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Recently Viewed</h3>
            </div>
            {history.length === 0 ? (
              <p className="text-xs text-gray-500 italic">No recent items</p>
            ) : (
              <ul className="space-y-2">
                {history.map(item => (
                  <li key={`${item.id}-${item.viewedAt}`}>
                    <Link
                      to={item.path}
                      className="block text-sm text-gray-300 hover:text-accent-gold transition-colors truncate"
                    >
                      {item.name}
                    </Link>
                    <span className="text-[11px] text-gray-500 capitalize">{item.type}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Bookmark className="w-4 h-4 text-gray-500" />
              <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                Bookmarks ({bookmarks.length})
              </h3>
            </div>
            {bookmarks.length === 0 ? (
              <p className="text-xs text-gray-500 italic">No bookmarks yet</p>
            ) : (
              <ul className="space-y-2">
                {bookmarks.slice(0, 10).map(item => (
                  <li key={item.id}>
                    <span className="block text-sm text-gray-300 hover:text-accent-gold transition-colors truncate">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-gray-500 capitalize">{item.type || item.zone}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-gray-500" />
              <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Quick Notes</h3>
            </div>
            <textarea
              placeholder="Type exam notes here..."
              className="
                w-full h-36
                bg-surface-sunken border border-white/[0.06]
                rounded-xl p-3.5
                text-sm text-gray-200 placeholder-gray-500
                resize-none
                focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/20
                transition-all
              "
            />
          </section>
        </div>
      </div>
    </aside>
  )
}
