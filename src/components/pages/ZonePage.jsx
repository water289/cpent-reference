import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ZoneMap from '../zones/ZoneMap'
import ZoneDetail from '../zones/ZoneDetail'

export default function ZonePage() {
  const { zoneId } = useParams()

  if (zoneId) {
    return <ZoneDetail zoneId={zoneId} />
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Exam Zones</h1>
      </div>
      <p className="text-gray-400">
        Select a zone to view detailed techniques, tools, and workflow guidance for that exam area.
      </p>
      <ZoneMap />
    </div>
  )
}
