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
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}>
      {zones.map(zone => {
        const Icon = ZONE_ICONS[zone.id] || Shield
        const color = getZoneColor(zone.id)
        const stats = getZoneStats(zone.id)

        return (
          <Link
            key={zone.id}
            to={`/zones/${zone.id}`}
            className="group relative glass-panel rounded-2xl p-6 hover:border-white/[0.12] card-hover overflow-hidden"
            style={{ borderLeft: `4px solid ${color}` }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `${color}15` }}
            />

            <div className="relative flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]" style={{ color }}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent-gold transition-colors">
                    {zone.name}
                  </h3>
                  <span className="text-xs text-gray-500">Exam weight: {zone.weight}%</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-5 line-clamp-2 leading-relaxed">{zone.description}</p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                {stats.tools} tools
              </span>
              <span className="flex items-center gap-1.5">
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
