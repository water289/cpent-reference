import { useMemo } from 'react'
import { BookmarkX, Download, Trash2 } from 'lucide-react'
import { useBookmarks } from '../../hooks/useBookmarks'
import { useDatabase } from '../../context/AppContext'
import ToolCard from '../tools/ToolCard'
import TechniqueCard from '../techniques/TechniqueCard'
import { groupByZone } from '../../utils/dataHelpers'
import { getZoneColor } from '../../utils/filters'

export default function BookmarksPage() {
  const { getBookmarks, clearBookmarks } = useBookmarks()
  const { data } = useDatabase()
  const bookmarks = getBookmarks()

  const zones = useMemo(() => {
    const allZones = data?.zones || []
    return allZones.map(zone => ({
      ...zone,
      items: bookmarks.filter(b => b.zone === zone.id),
    })).filter(z => z.items.length > 0)
  }, [bookmarks, data])

  const handleExport = () => {
    let markdown = '# CPENT Bookmarks\n\n'
    zones.forEach(zone => {
      markdown += `## ${zone.name}\n\n`
      zone.items.forEach(item => {
        markdown += `### ${item.name}\n`
        markdown += `- Type: ${item.type || item.zone}\n`
        markdown += `- Path: /${item.type || 'tools'}/${item.id}\n`
        if (item.purpose) markdown += `- Purpose: ${item.purpose}\n`
        markdown += '\n'
      })
    })
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cpent-bookmarks.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-16">
        <BookmarkX className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">No Bookmarks Yet</h2>
        <p className="text-gray-400">Start bookmarking tools and techniques to see them here.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Bookmarks</h1>
          <p className="text-gray-400 mt-1">{bookmarks.length} bookmarked item{bookmarks.length !== 1 ? 's' : ''}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
          <button
            onClick={clearBookmarks}
            className="flex items-center gap-2 px-4 py-2 bg-red-900/20 border border-red-800 rounded-lg text-sm text-red-400 hover:bg-red-900/40 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {zones.map(zone => (
          <section key={zone.id}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-1 h-6 rounded-full"
                style={{ backgroundColor: getZoneColor(zone.id) }}
              />
              <h2 className="text-xl font-semibold text-white">{zone.name}</h2>
              <span className="text-xs text-gray-500">{zone.items.length} items</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {zone.items.map(item => (
                item.type === 'technique' ? (
                  <TechniqueCard key={item.id} technique={item} />
                ) : (
                  <ToolCard key={item.id} tool={item} />
                )
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
