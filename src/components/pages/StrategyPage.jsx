import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDatabase } from '../../context/AppContext'
import { getZoneColor } from '../../utils/filters'
import { STRATEGY_SECTIONS, EXAM_MENTAL_MODEL, IOTGOAT_DRILL } from '../../data/strategyData'
import {
  ChevronRight, CheckCircle2, Clipboard, FileText,
  ArrowLeft, BookOpen,
} from 'lucide-react'
import Breadcrumb from '../ui/Breadcrumb'
import SourceBadge from '../ui/SourceBadge'

export default function StrategyPage() {
  const { data } = useDatabase()
  const [selectedStrat, setSelectedStrat] = useState(null)
  const [expandedPhases, setExpandedPhases] = useState({})

  const togglePhase = (key) => {
    setExpandedPhases(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSelect = (section) => {
    setSelectedStrat(section)
    setExpandedPhases({})
  }

  const getBadgeVariant = (v) => {
    const maps = {
      official: 'bg-green-900/30 text-green-300 border border-green-700',
      argha: 'bg-amber-900/30 text-amber-300 border border-amber-700',
      standard: 'bg-blue-900/30 text-blue-300 border border-blue-700',
      inference: 'bg-purple-900/30 text-purple-300 border border-purple-700',
    }
    return maps[v] || maps.inference
  }

  const renderStrategyContent = () => {
    if (!selectedStrat) {
      return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-center">
          <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-300 mb-2">
            Select a zone strategy
          </h3>
          <p className="text-sm text-gray-500">
            Choose a strategy from the sidebar to view the detailed exam action plan.
          </p>
        </div>
      )
    }

    const zoneColor = getZoneColor(selectedStrat.zoneId || '')
    const zone = data?.zones?.find(z => z.id === selectedStrat.zoneId)
    const zoneTools = data?.tools?.filter(t => t.zone === selectedStrat.zoneId) || []
    const zoneTechs = data?.techniques?.filter(t => t.zone === selectedStrat.zoneId) || []
    const zoneWfs = data?.workflows?.filter(w => w.zone === selectedStrat.zoneId) || []
    const arghaWfs = zoneWfs.filter(w => w.source?.includes('Argha Dey'))
    const stdWfs = zoneWfs.filter(w => !w.source?.includes('Argha Dey'))

    return (
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">{selectedStrat.title}</h2>
              <span className={`text-xs px-2 py-0.5 rounded ${getBadgeVariant(selectedStrat.badgeVariant)}`}>
                {selectedStrat.badge}
              </span>
            </div>
            <p className="text-gray-300">{selectedStrat.description}</p>
          </div>
          <button
            onClick={() => setSelectedStrat(null)}
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {zone && (
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: zoneColor }} />
                Zone: {zone.name}
              </span>
              <span>Exam weight: {zone.weight}%</span>
              <span>{zoneTools.length} tools</span>
              <span>{zoneTechs.length} techniques</span>
            </div>
            {zone.tips && (
              <p className="text-xs text-gray-500 mt-2">{zone.tips}</p>
            )}
          </div>
        )}

        {selectedStrat.highValueChecks && selectedStrat.highValueChecks.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              High-Value Checks
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedStrat.highValueChecks.map((check, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-green-400 flex-shrink-0">v</span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {selectedStrat.phases && (
          <section>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Clipboard className="w-5 h-5 text-blue-400" />
              Action Plan
            </h3>
            <div className="space-y-3">
              {selectedStrat.phases.map((phase, idx) => {
                const key = `${selectedStrat.id}-${idx}`
                const expanded = expandedPhases[key]
                return (
                  <div key={idx} className="border border-gray-700/50 rounded-lg bg-gray-900/30 overflow-hidden">
                    <button
                      onClick={() => togglePhase(key)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left"
                    >
                      <span className="text-sm font-medium text-white">{phase.phase}</span>
                      <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${expanded ? 'rotate-90' : ''}`} />
                    </button>
                    {expanded && (
                      <div className="px-4 pb-4 border-t border-gray-700">
                        <p className="text-sm text-gray-300 leading-relaxed">{phase.content}</p>
                        {phase.note && (
                          <p className="text-xs text-gray-500 mt-2">{phase.note}</p>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {selectedStrat.commonDeadEnds && selectedStrat.commonDeadEnds.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-white mb-3">Common Dead Ends (Avoid)</h3>
            <ul className="space-y-1">
              {selectedStrat.commonDeadEnds.map((de, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-red-400">x</span>
                  <span>{de}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {zoneWfs.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              Related Workflows
            </h3>
            <div className="space-y-3">
              {stdWfs.map(wf => (
                <div key={wf.id} className="border border-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Link to={`/workflows`} className="font-medium text-white hover:text-blue-400">
                      {wf.name}
                    </Link>
                    <SourceBadge source={wf.source} size="sm" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{wf.description}</p>
                </div>
              ))}
              {arghaWfs.length > 0 && (
                <>
                  <div className="text-xs font-semibold text-gray-500 uppercase mt-3">
                    Argha Dey Methodology
                  </div>
                  {arghaWfs.map(wf => (
                    <div key={wf.id} className="border border-amber-700/50 rounded-lg p-3 bg-amber-900/5">
                      <div className="flex items-center gap-2">
                        <Link to={`/argha-dey`} className="font-medium text-white hover:text-amber-300">
                          {wf.name}
                        </Link>
                        <SourceBadge source={wf.source} size="sm" />
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{wf.description}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </section>
        )}

        {zoneTools.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-white mb-3">Related Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {zoneTools.slice(0, 9).map(tool => (
                <Link key={tool.id} to={`/tools/${tool.id}`} className="block">
                  <div className="border border-gray-700/50 rounded-lg p-3 hover:border-gray-600 hover:bg-gray-800/50 transition-all">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: zoneColor }} />
                      <span className="font-medium text-white text-sm">{tool.name}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{tool.purpose}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Breadcrumb items={[{ path: '/strategy', label: 'Strategy' }]} />

      {!selectedStrat ? (
        <>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Exam Strategy</h1>
            <p className="text-gray-400 max-w-2xl">
              Zone-specific action plans organized by CPENT exam domain. Each strategy layer
              distinguishes what the official guide states, what is inferred from the lab
              setup, what comes from Argha Dey's proven methodology, and what is practical
              exam-tested advice.
            </p>
          </div>

          <section className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Exam Mental Model</h2>
            <p className="text-sm text-gray-400 mb-4">{EXAM_MENTAL_MODEL.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {EXAM_MENTAL_MODEL.phases.map((p) => (
                <div key={p.step} className="flex items-start gap-2 text-sm">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: `${getZoneColor('recon')}30`, color: getZoneColor('recon') }}
                  >
                    {p.step}
                  </span>
                  <span className="text-gray-300">{p.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Zone Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {STRATEGY_SECTIONS.map((section) => {
                const zone = data?.zones?.find(z => z.id === section.zoneId)
                const zoneColor = getZoneColor(section.zoneId || '')
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSelect(section)}
                    className="text-left p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-gray-700/50 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: zoneColor }} />
                      <h3 className="font-medium text-white group-hover:text-gray-200">{section.title}</h3>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${getBadgeVariant(section.badgeVariant)}`}>
                        {section.badge}
                      </span>
                    </div>
                    {zone && (
                      <p className="text-xs text-gray-500 mb-1">
                        Exam weight: {zone.weight}% | {section.phases?.length || 0} phases
                      </p>
                    )}
                    <p className="text-sm text-gray-400 line-clamp-2 group-hover:line-clamp-none transition-all">
                      {section.description}
                    </p>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="bg-amber-900/10 border border-amber-700/50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-amber-300 mb-3">
              IoTGoat shellback — Bind Shell Recognition Drill
            </h2>
            <p className="text-sm text-gray-300 mb-3">
              {IOTGOAT_DRILL.objective}
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-white mb-2">Key Static Indicators</h4>
                <code className="text-xs text-green-400 bg-gray-900/50 p-2 rounded block whitespace-pre">
                  {IOTGOAT_DRILL.keyStaticIndicators.join('\n')}
                </code>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Expected Reasoning Chain</h4>
                <div className="space-y-1 text-gray-300">
                  {IOTGOAT_DRILL.expectedReasoning.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{i + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">
              {IOTGOAT_DRILL.disclaimer}
            </p>
          </section>
        </>
      ) : (
        renderStrategyContent()
      )}
    </div>
  )
}
