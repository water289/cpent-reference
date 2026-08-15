import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useDatabase } from '../../context/AppContext'
import { getItemById } from '../../utils/dataHelpers'
import { getZoneColor } from '../../utils/filters'
import CommandBlock from '../tools/CommandBlock'
import SourceBadge from '../ui/SourceBadge'
import Breadcrumb from '../ui/Breadcrumb'
import {
  ChevronRight, CheckCircle2, Clipboard, Copy, FileText, Printer, Radar
} from 'lucide-react'

export default function WorkflowPage() {
  const { data } = useDatabase()
  const workflows = data?.workflows || []
  const [selectedWorkflow, setSelectedWorkflow] = useState(null)
  const [expandedSteps, setExpandedSteps] = useState({})

  const arghaWorkflows = useMemo(() =>
    workflows.filter(w => w.source?.includes('Argha Dey'))
  , [workflows])

  const standardWorkflows = useMemo(() =>
    workflows.filter(w => !w.source?.includes('Argha Dey'))
  , [workflows])

  const handlePrint = () => window.print()

  const toggleStep = (key) => {
    setExpandedSteps(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const renderWorkflowCard = (wf) => {
    const zoneColor = getZoneColor(wf.zone)
    const isSelected = selectedWorkflow?.id === wf.id

    return (
      <button
        key={wf.id}
        onClick={() => { setSelectedWorkflow(wf); setExpandedSteps({}) }}
        className={`
          w-full p-4 rounded-xl text-left transition-all border
          ${isSelected
            ? 'border-accent-gold/30 bg-accent-gold/[0.06]'
            : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]'
          }
        `}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: zoneColor }}
            />
            <span className="text-xs text-gray-500 uppercase tracking-wider">{wf.zone}</span>
            <SourceBadge source={wf.source} size="xs" />
          </div>
          <span className="text-xs text-gray-500">{wf.steps?.length || 0} steps</span>
        </div>
        <h3 className="font-medium text-white mb-1 group-hover:text-accent-gold transition-colors">{wf.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{wf.description}</p>
      </button>
    )
  }

  const renderWorkflowDetail = (wf) => {
    const zoneColor = getZoneColor(wf.zone)
    const isArgha = wf.source?.includes('Argha Dey')

    return (
      <div className="glass-panel-elevated rounded-2xl overflow-hidden border border-white/[0.08] animate-slide-in">
        <div className="px-7 py-5 border-b border-white/[0.06]" style={{ background: `linear-gradient(180deg, ${zoneColor}10 0%, transparent 100%)` }}>
          <div className="flex items-center gap-3 mb-2">
            <FileText className={`w-5 h-5 ${isArgha ? 'text-amber-400' : 'text-gray-400'}`} />
            <h2 className="text-xl font-bold text-white">{wf.name}</h2>
            <SourceBadge source={wf.source} size="xs" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">{wf.description}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: zoneColor }} />
              Zone: {wf.zone}
            </span>
            <span>{wf.steps?.length || 0} steps</span>
            {wf.source && <span>Source: {wf.source}</span>}
          </div>
        </div>

        <div className="px-7 py-5 space-y-5">
          {wf.quickRef && (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2 uppercase tracking-wider">
                <Copy className="w-3 h-3" />
                Quick Reference
              </h4>
              <pre className="text-xs text-accent-green bg-surface-sunken border border-white/[0.04] rounded-xl p-4 overflow-x-auto">
                {wf.quickRef}
              </pre>
            </div>
          )}

          {wf.examHabits && Array.isArray(wf.examHabits) && wf.examHabits.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2 uppercase tracking-wider">
                <Clipboard className="w-3 h-3" />
                Exam Habits
              </h4>
              <ul className="space-y-2">
                {wf.examHabits.map((habit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span>{habit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {wf.steps && (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Methodology Steps</h4>
              <div className="space-y-3">
                {wf.steps.map((step, sIdx) => {
                  const stepKey = `${wf.id}-${sIdx}`
                  const stepExpanded = expandedSteps[stepKey]
                  return (
                    <div key={sIdx} className="border border-white/[0.06] rounded-xl bg-white/[0.01] overflow-hidden">
                      <button
                        onClick={() => toggleStep(stepKey)}
                        className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-white/[0.02] transition-colors"
                      >
                        <span
                          className="flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold"
                          style={{ backgroundColor: `${zoneColor}20`, color: zoneColor }}
                        >
                          {sIdx + 1}
                        </span>
                        <span className="text-sm font-medium text-white flex-1">{step.phase}</span>
                        <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${stepExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      {stepExpanded && (
                        <div className="px-5 pb-4 border-t border-white/[0.06] space-y-4">
                          {step.description && (
                            <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
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
                              <div className="flex flex-wrap gap-2 mt-2">
                                {step.techniques.map(techId => {
                                  const tech = getItemById(data.techniques, techId)
                                  return tech ? (
                                    <Link
                                      key={techId}
                                      to={`/techniques/${tech.id}`}
                                      className="text-xs px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-gray-300 hover:text-white hover:border-white/[0.16] transition-all"
                                    >
                                      {tech.name}
                                    </Link>
                                  ) : (
                                    <span key={techId} className="text-xs px-3 py-1.5 bg-white/[0.02] rounded-lg text-gray-500">
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
                              <div className="flex flex-wrap gap-2 mt-2">
                                {step.tools.map(toolId => {
                                  const tool = getItemById(data.tools, toolId)
                                  return tool ? (
                                    <Link
                                      key={toolId}
                                      to={`/tools/${tool.id}`}
                                      className="text-xs px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-gray-300 hover:text-white hover:border-white/[0.16] transition-all"
                                    >
                                      {tool.name}
                                    </Link>
                                  ) : (
                                    <span key={toolId} className="text-xs px-3 py-1.5 bg-white/[0.02] rounded-lg text-gray-500">
                                      {toolId}
                                    </span>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          {step.decisionPoints && step.decisionPoints.length > 0 && (
                            <div className="space-y-2.5">
                              {step.decisionPoints.map((dp, dIdx) => (
                                <div key={dIdx} className="text-sm text-gray-300 bg-white/[0.02] rounded-xl p-4 border border-white/[0.06]">
                                  <span className="text-gray-500">Condition:</span> {dp.condition}
                                  <br />
                                  <span className="text-accent-green">Action:</span> {dp.action}
                                  {dp.fallback && (
                                    <>
                                      <br />
                                      <span className="text-amber-400">Fallback:</span> {dp.fallback}
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
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Breadcrumb items={[{ path: null, label: 'Workflows' }]} />
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Workflows</h1>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 glass-panel rounded-xl text-sm text-gray-300 hover:text-white hover:border-white/[0.16] transition-all"
        >
          <Printer className="w-4 h-4" />
          Print
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-5">
          <section>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Argha Dey Methodologies ({arghaWorkflows.length})
            </h2>
            <div className="space-y-2">
              {arghaWorkflows.map(renderWorkflowCard)}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Standard Workflows ({standardWorkflows.length})
            </h2>
            <div className="space-y-2">
              {standardWorkflows.map(renderWorkflowCard)}
            </div>
          </section>
        </div>

        <div className="lg:col-span-3">
          {selectedWorkflow ? (
            renderWorkflowDetail(selectedWorkflow)
          ) : (
            <div className="glass-panel rounded-2xl p-12 text-center border border-white/[0.06]">
              <FileText className="w-14 h-14 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Select a workflow</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Choose a workflow from the sidebar to view its detailed step-by-step methodology.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
