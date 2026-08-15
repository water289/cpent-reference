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
        <Link to="/" className="text-gray-500 hover:text-gray-300 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-white">Exam Zones</h1>
      </div>
      <p className="text-gray-400">
        Select a zone to view detailed techniques, tools, and workflow guidance for that exam area.
      </p>
      <ZoneMap />
    </div>
  )
}
