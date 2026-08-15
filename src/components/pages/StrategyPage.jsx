import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDatabase } from '../../context/AppContext'
import { getZoneColor } from '../../utils/filters'
import { STRATEGY_SECTIONS, EXAM_MENTAL_MODEL, IOTGOAT_DRILL } from '../../data/strategyData'
import {
  ChevronRight, CheckCircle2, Clipboard, FileText,
  ArrowLeft, BookOpen, Target,
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
      official: 'bg-accent-green/10 text-accent-green border border-accent-green/20',
      argha: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
      standard: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20',
      inference: 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20',
    }
    return maps[v] || maps.inference
  }

  const renderStrategyContent = () => {
    if (!selectedStrat) {
      return (
        <div className="glass-panel rounded-2xl p-12 text-center border border-white/[0.06]">
          <BookOpen className="w-14 h-14 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Select a zone strategy
          </h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
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
      <div className="space-y-6 animate-slide-in">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">{selectedStrat.title}</h2>
              <span className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${getBadgeVariant(selectedStrat.badgeVariant)}`}>
                {selectedStrat.badge}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">{selectedStrat.description}</p>
          </div>
          <button
            onClick={() => setSelectedStrat(null)}
            className="p-2 glass-panel rounded-xl text-gray-400 hover:text-white hover:border-accent-gold/30 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {zone && (
          <div className="glass-panel rounded-xl p-5 border border-white/[0.06]">
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
              <p className="text-xs text-gray-500 mt-2.5 leading-relaxed">{zone.tips}</p>
            )}
          </div>
        )}

        {selectedStrat.highValueChecks && selectedStrat.highValueChecks.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-green" />
              High-Value Checks
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {selectedStrat.highValueChecks.map((check, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 bg-white/[0.02] rounded-xl p-4 border border-white/[0.06]">
                  <span className="text-accent-green flex-shrink-0 mt-0.5">v</span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {selectedStrat.phases && (
          <section>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Clipboard className="w-5 h-5 text-accent-blue" />
              Action Plan
            </h3>
            <div className="space-y-2.5">
              {selectedStrat.phases.map((phase, idx) => {
                const key = `${selectedStrat.id}-${idx}`
                const expanded = expandedPhases[key]
                return (
                  <div key={idx} className="border border-white/[0.06] rounded-xl bg-white/[0.01] overflow-hidden">
                    <button
                      onClick={() => togglePhase(key)}
                      className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="text-sm font-medium text-white">{phase.phase}</span>
                      <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${expanded ? 'rotate-90' : ''}`} />
                    </button>
                    {expanded && (
                      <div className="px-5 pb-4 border-t border-white/[0.06]">
                        <p className="text-sm text-gray-300 leading-relaxed">{phase.content}</p>
                        {phase.note && (
                          <p className="text-xs text-gray-500 mt-2.5 italic">{phase.note}</p>
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
            <ul className="space-y-2">
              {selectedStrat.commonDeadEnds.map((de, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-start gap-2.5 bg-white/[0.02] rounded-xl p-4 border border-white/[0.06]">
                  <span className="text-accent-red flex-shrink-0">x</span>
                  <span>{de}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {zoneWfs.length > 0 && (
          <section>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent-purple" />
              Related Workflows
            </h3>
            <div className="space-y-3">
              {stdWfs.map(wf => (
                <div key={wf.id} className="border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.12] transition-all">
                  <div className="flex items-center gap-2">
                    <Link to={`/workflows`} className="font-medium text-white hover:text-accent-gold transition-colors">
                      {wf.name}
                    </Link>
                    <SourceBadge source={wf.source} size="sm" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">{wf.description}</p>
                </div>
              ))}
              {arghaWfs.length > 0 && (
                <>
                  <div className="text-xs font-semibold text-amber-400 uppercase mt-4 mb-2">Argha Dey Methodology</div>
                  {arghaWfs.map(wf => (
                    <div key={wf.id} className="border border-amber-500/20 rounded-xl p-4 bg-amber-500/[0.03]">
                      <div className="flex items-center gap-2">
                        <Link to={`/argha-dey`} className="font-medium text-white hover:text-amber-300 transition-colors">
                          {wf.name}
                        </Link>
                        <SourceBadge source={wf.source} size="sm" />
                      </div>
                      <p className="text-xs text-gray-400 mt-1.5 line-clamp-2">{wf.description}</p>
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
                  <div className="border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: zoneColor }} />
                      <span className="font-medium text-white text-sm">{tool.name}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-2">{tool.purpose}</p>
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
      <Breadcrumb items={[{ path: null, label: 'Exam Strategy' }]} />

      {!selectedStrat ? (
        <>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Exam Strategy</h1>
            <p className="text-gray-400 mt-2 max-w-2xl leading-relaxed">
              Zone-specific action plans organized by CPENT exam domain. Each strategy layer
              distinguishes what the official guide states, what is inferred from the lab
              setup, what comes from Argha Dey's proven methodology, and what is practical
              exam-tested advice.
            </p>
          </div>

          <section className="glass-panel rounded-2xl p-7 border border-white/[0.06]">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-gray-400" />
              Exam Mental Model
            </h2>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">{EXAM_MENTAL_MODEL.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {EXAM_MENTAL_MODEL.phases.map((p) => (
                <div key={p.step} className="flex items-start gap-2.5 text-sm">
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: `${getZoneColor('recon')}20`, color: getZoneColor('recon') }}
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
                    className="text-left p-5 glass-panel rounded-2xl hover:border-white/[0.12] transition-all group border border-white/[0.06]"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: zoneColor }} />
                      <h3 className="font-medium text-white group-hover:text-accent-gold transition-colors">{section.title}</h3>
                      <span className={`text-[11px] px-2 py-0.5 rounded-md font-semibold ${getBadgeVariant(section.badgeVariant)}`}>
                        {section.badge}
                      </span>
                    </div>
                    {zone && (
                      <p className="text-xs text-gray-500 mb-1.5">
                        Exam weight: {zone.weight}% | {section.phases?.length || 0} phases
                      </p>
                    )}
                    <p className="text-sm text-gray-400 line-clamp-2 group-hover:line-clamp-none transition-all leading-relaxed">
                      {section.description}
                    </p>
                  </button>
                )
              })}
            </div>
          </section>

          <section className="glass-panel rounded-2xl p-7 border border-amber-500/10">
            <h2 className="text-xl font-semibold text-amber-300 mb-3">
              IoTGoat shellback — Bind Shell Recognition Drill
            </h2>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {IOTGOAT_DRILL.objective}
            </p>
            <div className="grid md:grid-cols-2 gap-5 text-sm">
              <div>
                <h4 className="font-medium text-white mb-2.5">Key Static Indicators</h4>
                <code className="text-xs text-accent-green bg-surface-sunken border border-white/[0.04] rounded-xl p-4 block whitespace-pre leading-relaxed">
                  {IOTGOAT_DRILL.keyStaticIndicators.join('\n')}
                </code>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2.5">Expected Reasoning Chain</h4>
                <div className="space-y-2">
                  {IOTGOAT_DRILL.expectedReasoning.map((step, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-gray-300">
                      <span className="text-xs text-gray-600 w-5">{i + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">
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
