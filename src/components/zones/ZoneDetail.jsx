import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight, CheckCircle2, Clipboard, Copy, FileText, Shield, ExternalLink
} from 'lucide-react'
import Breadcrumb from '../ui/Breadcrumb'
import SourceBadge from '../ui/SourceBadge'
import DecisionPanel from '../strategy/DecisionPanel'
import { useDatabase } from '../../context/AppContext'
import { useConfidence } from '../../hooks/useConfidence'
import { getZoneColor } from '../../utils/filters'
import { useHistory } from '../../hooks/useHistory'
import { getItemById } from '../../utils/dataHelpers'
import ToolCard from '../tools/ToolCard'
import TechniqueCard from '../techniques/TechniqueCard'
import CommandBlock from '../tools/CommandBlock'

export default function ZoneDetail({ zoneId }) {
  const { data } = useDatabase()
  const { getStats } = useConfidence()
  const { addToHistory } = useHistory()
  const [expandedWorkflows, setExpandedWorkflows] = useState({})
  const [expandedSteps, setExpandedSteps] = useState({})

  const toggleWorkflow = (wfId) => {
    setExpandedWorkflows(prev => ({ ...prev, [wfId]: !prev[wfId] }))
  }

  const toggleStep = (key) => {
    setExpandedSteps(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const zone = data?.zones?.find(z => z.id === zoneId)
  const tools = data?.tools?.filter(t => t.zone === zoneId) || []
  const techniques = data?.techniques?.filter(t => t.zone === zoneId) || []

  const zoneWorkflows = useMemo(() => {
    if (!zone?.workflows || !data?.workflows) return []
    return zone.workflows
      .map(wfId => data.workflows.find(w => w.id === wfId))
      .filter(Boolean)
  }, [zone, data])

  const arghaWorkflows = useMemo(() => {
    if (!data?.workflows) return []
    return data.workflows.filter(w => w.source?.includes('Argha Dey') && w.zone === zoneId)
  }, [data, zoneId])

  const standardWorkflows = useMemo(() => {
    if (!data?.workflows) return []
    return data.workflows.filter(w => !w.source?.includes('Argha Dey') && w.zone === zoneId)
  }, [data, zoneId])

  if (!zone) return <div className="text-gray-400">Zone not found</div>

  const zoneColor = getZoneColor(zoneId)
  const stats = getStats([...tools, ...techniques])

  addToHistory({ ...zone, type: 'zone', path: `/zones/${zone.id}` })

  const breadcrumbItems = [
    { path: '/zones', label: 'Zones' },
    { path: null, label: zone.name },
  ]

  const renderWorkflow = (wf) => {
    const expanded = expandedWorkflows[wf.id]
    return (
      <div key={wf.id} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleWorkflow(wf.id)}
          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700/50 transition-colors"
        >
          <FileText className="w-5 h-5 text-gray-400" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">{wf.name}</span>
              <SourceBadge source={wf.source} size="xs" />
            </div>
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{wf.description}</p>
          </div>
          <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </button>

        {expanded && (
          <div className="px-4 pb-4 border-t border-gray-700 space-y-4">
            {wf.quickRef && (
              <div>
                <h4 className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-2">
                  <Copy className="w-3 h-3" />
                  Quick Reference
                </h4>
                <pre className="text-xs text-green-400 bg-gray-900/50 border border-gray-700 rounded p-2 overflow-x-auto">
                  {wf.quickRef}
                </pre>
              </div>
            )}

            {wf.examHabits && Array.isArray(wf.examHabits) && wf.examHabits.length > 0 && (
              <div>
                <h4 className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-2">
                  <Clipboard className="w-3 h-3" />
                  Exam Habits
                </h4>
                <ul className="space-y-1">
                  {wf.examHabits.map((habit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>{habit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {wf.steps && wf.steps.map((step, sIdx) => {
              const stepKey = `${wf.id}-${sIdx}`
              const stepExpanded = expandedSteps[stepKey]
              return (
                <div key={sIdx} className="border border-gray-700/50 rounded-lg bg-gray-900/30">
                  <button
                    onClick={() => toggleStep(stepKey)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left"
                  >
                    <span className="text-sm font-medium text-white">{step.phase || `Step ${sIdx + 1}`}</span>
                    <ChevronRight className={`w-3 h-3 text-gray-500 transition-transform ${stepExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  {stepExpanded && (
                    <div className="px-3 pb-3 space-y-3">
                      {step.description && (
                        <p className="text-sm text-gray-300">{step.description}</p>
                      )}

                      {step.command && (
                        <CommandBlock
                          command={{ label: step.phase, command: step.command, when: '', output: step.note || '' }}
                          zone={wf.zone}
                          zoneColor={zoneColor}
                        />
                      )}

                      {step.techniques && step.techniques.length > 0 && (
                        <div>
                          <span className="text-xs text-gray-500">Techniques:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {step.techniques.map(techId => {
                              const tech = getItemById(data.techniques, techId)
                              return tech ? (
                                <Link
                                  key={techId}
                                  to={`/techniques/${tech.id}`}
                                  className="text-xs px-2 py-0.5 bg-gray-700/50 border border-gray-600 rounded text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                                >
                                  {tech.name}
                                </Link>
                              ) : (
                                <span key={techId} className="text-xs px-2 py-0.5 bg-gray-700/30 rounded text-gray-500">
                                  {techId}
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      )}

                      {step.tools && step.tools.length > 0 && (
                        <div>
                          <span className="text-xs text-gray-500">Tools:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {step.tools.map(toolId => {
                              const tool = getItemById(data.tools, toolId)
                              return tool ? (
                                <Link
                                  key={toolId}
                                  to={`/tools/${tool.id}`}
                                  className="text-xs px-2 py-0.5 bg-gray-700/50 border border-gray-600 rounded text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                                >
                                  {tool.name}
                                </Link>
                              ) : (
                                <span key={toolId} className="text-xs px-2 py-0.5 bg-gray-700/30 rounded text-gray-500">
                                  {toolId}
                                </span>
                              )
                            })}
                          </div>
                        </div>
                      )}

                      {step.decisionPoints && step.decisionPoints.length > 0 && (
                        <div className="space-y-2">
                          {step.decisionPoints.map((dp, dIdx) => (
                            <div key={dIdx} className="text-xs text-gray-300">
                              <span className="text-gray-400">Condition:</span> {dp.condition}
                              <br />
                              <span className="text-green-400">Action:</span> {dp.action}
                              {dp.fallback && (
                                <>
                                  <br />
                                  <span className="text-yellow-400">Fallback:</span> {dp.fallback}
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Breadcrumb items={breadcrumbItems} />

      <div
        className="rounded-xl overflow-hidden border border-gray-700"
        style={{ backgroundColor: `${zoneColor}15`, borderColor: `${zoneColor}40` }}
      >
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{zone.name}</h1>
              <p className="text-gray-300 max-w-2xl">{zone.description}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  Exam weight: {zone.weight}%
                </span>
                <span>{tools.length} tools</span>
                <span>{techniques.length} techniques</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="35" stroke="#1F2937" strokeWidth="6" fill="none" />
                  <circle
                    cx="40" cy="40" r="35"
                    stroke={zoneColor}
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 35}`}
                    strokeDashoffset={`${2 * Math.PI * 35 * (1 - stats.percentage / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{stats.percentage}%</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                <div>{stats.practiced}/{stats.total} practiced</div>
                <div>{stats.confident} confident</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {zone.tips && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Zone Tips</h2>
          <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
            <p className="text-sm text-yellow-200">{zone.tips}</p>
          </div>
        </section>
      )}

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <Link
              to="/strategy"
              className="text-purple-400 hover:text-purple-300"
            >
              Zone Strategy Guide
            </Link>
          </h2>
          <p className="text-sm text-gray-400">
            Visit the{' '}
            <Link to="/strategy" className="text-purple-400 hover:underline">
              full Strategy page
            </Link>{' '}
            for the complete zone-by-zone exam action plan, or use the decision panel on the right
            to get step-by-step guidance for this zone.
          </p>
        </div>
        <div>
          <DecisionPanel zoneId={zoneId} />
        </div>
      </section>

      {standardWorkflows.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Standard Workflows</h2>
          <div className="space-y-4">
            {standardWorkflows.map(renderWorkflow)}
          </div>
        </section>
      )}

      {arghaWorkflows.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span>Argha Dey Methodology (94% scorer)</span>
          </h2>
          <div className="space-y-4">
            {arghaWorkflows.map(renderWorkflow)}
          </div>
        </section>
      )}

      {tools.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {techniques.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techniques.map(tech => (
              <TechniqueCard key={tech.id} technique={tech} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
