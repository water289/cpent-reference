import { Link } from 'react-router-dom'
import { Globe, Cpu, Shield, Network, Server, Flag, Radar } from 'lucide-react'
import { useDatabase } from '../../context/AppContext'
import { getZoneColor } from '../../utils/filters'

const ZONE_ICONS = {
  recon: Radar,
  'active-directory': Network,
  web: Globe,
  'binary-exploitation': Cpu,
  'iot-firmware': Server,
  ctf: Flag,
}

export default function ZoneMap({ className = '' }) {
  const { data } = useDatabase()
  const zones = data?.zones || []
  const tools = data?.tools || []
  const techniques = data?.techniques || []

  const getZoneStats = (zoneId) => {
    const zoneTools = tools.filter(t => t.zone === zoneId).length
    const zoneTechniques = techniques.filter(t => t.zone === zoneId).length
    return { tools: zoneTools, techniques: zoneTechniques }
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {zones.map(zone => {
        const Icon = ZONE_ICONS[zone.id] || Shield
        const color = getZoneColor(zone.id)
        const stats = getZoneStats(zone.id)

      return (
        <Link
          key={zone.id}
          to={`/zones/${zone.id}`}
          className="group block bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-200"
          style={{ borderLeftWidth: '4px', borderLeftColor: color }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-900/50" style={{ color }}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent-primary transition-colors">
                  {zone.name}
                </h3>
                <span className="text-xs text-gray-500">Exam weight: {zone.weight}%</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-4 line-clamp-2">{zone.description}</p>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              {stats.tools} tools
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              {stats.techniques} techniques
            </span>
          </div>
        </Link>
      )
      })}
    </div>
  )
}
