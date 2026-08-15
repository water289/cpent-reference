import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useDatabase } from '../../context/AppContext'
import { getItemById } from '../../utils/dataHelpers'
import CommandBlock from '../tools/CommandBlock'
import Breadcrumb from '../ui/Breadcrumb'
import { getZoneColor } from '../../utils/filters'
import { ChevronRight, FileText, Clipboard, Copy, CheckCircle2, Circle } from 'lucide-react'

export default function ArghaDeyPage() {
  const { data } = useDatabase()
  const workflows = data?.workflows || []
  const [selectedWorkflow, setSelectedWorkflow] = useState(null)
  const [expandedSteps, setExpandedSteps] = useState({})

  const arghaWorkflows = useMemo(() =>
    workflows.filter(w => w.source?.includes('Argha Dey'))
  , [workflows])

  const toggleStep = (key) => {
    setExpandedSteps(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-6">
      <Breadcrumb items={[{ path: null, label: 'Argha Dey Methodology' }]} />
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Argha Dey Methodology</h1>
        <p className="text-gray-400 mt-2 leading-relaxed">
          Proven 94% scorer CPENT methodology workflows. Each methodology maps the full engagement path
          with exam-tested shortcuts and decision trees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Methodologies ({arghaWorkflows.length})
          </h2>
          <div className="space-y-2">
            {arghaWorkflows.map(wf => {
              const zoneColor = getZoneColor(wf.zone)
              const isSelected = selectedWorkflow?.id === wf.id
              return (
                <button
                  key={wf.id}
                  onClick={() => setSelectedWorkflow(wf)}
                  className={`
                    w-full p-3 rounded-xl text-left transition-all border
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
                      <span className="text-xs font-medium text-gray-400 uppercase">{wf.zone}</span>
                    </div>
                    {wf.steps?.length && (
                      <span className="text-xs text-gray-500">{wf.steps.length} steps</span>
                    )}
                  </div>
                  <h3 className="font-medium text-white text-sm mb-1">{wf.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{wf.description}</p>
                  {wf.examHabits && Array.isArray(wf.examHabits) && wf.examHabits.length > 0 && (
                    <span className="text-xs text-amber-400 mt-2 block">
                      {wf.examHabits.length} exam habits
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-3">
          {selectedWorkflow ? (
            <div className="glass-panel-elevated rounded-2xl overflow-hidden border border-white/[0.08] animate-slide-in">
              <div className="px-7 py-5 border-b border-white/[0.06]" style={{ background: `linear-gradient(180deg, rgba(245, 158, 11, 0.08) 0%, transparent 100%)` }}>
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                    Argha Dey Methodology
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mt-2">{selectedWorkflow.name}</h2>
                <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{selectedWorkflow.description}</p>
                <span className="text-xs text-gray-500 mt-2 block">Zone: {selectedWorkflow.zone}</span>
              </div>

              <div className="px-7 py-5 space-y-5">
                {selectedWorkflow.quickRef && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2 uppercase tracking-wider">
                      <Copy className="w-3 h-3" />
                      Quick Reference
                    </h4>
                    <pre className="text-xs text-accent-green bg-surface-sunken border border-white/[0.04] rounded-xl p-4 overflow-x-auto">
                      {selectedWorkflow.quickRef}
                    </pre>
                  </div>
                )}

                {selectedWorkflow.examHabits && Array.isArray(selectedWorkflow.examHabits) && selectedWorkflow.examHabits.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2 uppercase tracking-wider">
                      <Clipboard className="w-3 h-3" />
                      Exam Habits
                    </h4>
                    <ul className="space-y-2">
                      {selectedWorkflow.examHabits.map((habit, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />
                          <span>{habit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedWorkflow.examHabits && typeof selectedWorkflow.examHabits === 'string' && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2 uppercase tracking-wider">
                      <Clipboard className="w-3 h-3" />
                      Exam Habits
                    </h4>
                    <p className="text-xs text-gray-300">{selectedWorkflow.examHabits}</p>
                  </div>
                )}

                {selectedWorkflow.steps && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Methodology Steps</h4>
                    <div className="space-y-3">
                      {selectedWorkflow.steps.map((step, sIdx) => {
                        const stepKey = `${selectedWorkflow.id}-${sIdx}`
                        const isExpanded = expandedSteps[stepKey]
                        const zoneColor = getZoneColor(selectedWorkflow.zone)

                        return (
                          <div key={sIdx} className="border border-white/[0.06] rounded-xl bg-white/[0.01] overflow-hidden">
                            <button
                              onClick={() => toggleStep(stepKey)}
                              className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-white/[0.02] transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className="flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold"
                                  style={{ backgroundColor: `${zoneColor}20`, color: zoneColor }}
                                >
                                  {sIdx + 1}
                                </span>
                                <span className="text-sm font-medium text-white">{step.phase}</span>
                              </div>
                              <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                            </button>

                            {isExpanded && (
                              <div className="px-5 pb-4 border-t border-white/[0.06] space-y-4">
                                {step.description && (
                                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                                )}

                                {step.command && (
                                  <CommandBlock
                                    command={{ label: step.phase, command: step.command, when: '', output: '' }}
                                    zone={step.zone || selectedWorkflow.zone}
                                    zoneColor={zoneColor}
                                  />
                                )}

                                {step.techniques && step.techniques.length > 0 && (
                                  <div>
                                    <span className="text-xs text-gray-500">Related Techniques:</span>
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
                                    <span className="text-xs text-gray-500">Tools Used:</span>
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
                                      <div key={dIdx} className="text-xs text-gray-300 ml-2 bg-white/[0.02] rounded-xl p-4 border border-white/[0.06]">
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
          ) : (
            <div className="glass-panel rounded-2xl p-12 text-center border border-white/[0.06]">
              <FileText className="w-14 h-14 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Select a methodology</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Choose an Argha Dey methodology from the sidebar to view the full step-by-step workflow.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
