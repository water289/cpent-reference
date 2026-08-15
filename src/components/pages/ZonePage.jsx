import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ZoneMap from '../zones/ZoneMap'
import ZoneDetail from '../zones/ZoneDetail'
import Breadcrumb from '../ui/Breadcrumb'

export default function ZonePage() {
  const { zoneId } = useParams()

  if (zoneId) {
    return <ZoneDetail zoneId={zoneId} />
  }

  return (
    <div className="space-y-6">
      <Breadcrumb items={[{ path: null, label: 'Exam Zones' }]} />
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="p-2 glass-panel rounded-xl text-gray-400 hover:text-white hover:border-accent-gold/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Exam Zones</h1>
          <p className="text-sm text-gray-400 mt-1">Select a zone to view detailed techniques, tools, and workflow guidance</p>
        </div>
      </div>
      <ZoneMap />
    </div>
  )
}
