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
      <div>
        <Breadcrumb items={[{ path: null, label: 'Argha Dey Methodology' }]} />
        <h1 className="text-3xl font-bold text-white mt-1">Argha Dey Methodology</h1>
        <p className="text-gray-400 mt-2">
          Proven 94% scorer CPENT methodology workflows. Each methodology maps the full engagement path
          with exam-tested shortcuts and decision trees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
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
                  className={`w-full p-3 rounded-lg text-left transition-all border ${
                    isSelected
                      ? 'border-amber-500 bg-amber-900/20'
                      : 'border-gray-700 bg-gray-800/30 hover:border-gray-600 hover:bg-gray-700/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: zoneColor }} />
                      <span className="text-xs font-medium text-gray-400 uppercase">{wf.zone}</span>
                    </div>
                    {wf.steps?.length && (
                      <span className="text-xs text-gray-500">{wf.steps.length} steps</span>
                    )}
                  </div>
                  <h3 className="font-medium text-white text-sm">{wf.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{wf.description}</p>
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
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-700">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-amber-300 bg-amber-900/30 px-2 py-0.5 rounded">
                    Argha Dey Methodology
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">{selectedWorkflow.name}</h2>
                <p className="text-sm text-gray-400 mt-1">{selectedWorkflow.description}</p>
                <span className="text-xs text-gray-500">Zone: {selectedWorkflow.zone}</span>
              </div>

              <div className="px-4 pb-4 space-y-4">
                {selectedWorkflow.quickRef && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-2">
                      <Copy className="w-3 h-3" />
                      Quick Reference
                    </h4>
                    <pre className="text-xs text-green-400 bg-gray-900/50 border border-gray-700 rounded p-2 overflow-x-auto">
                      {selectedWorkflow.quickRef}
                    </pre>
                  </div>
                )}

                {selectedWorkflow.examHabits && Array.isArray(selectedWorkflow.examHabits) && selectedWorkflow.examHabits.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-2">
                      <Clipboard className="w-3 h-3" />
                      Exam Habits
                    </h4>
                    <ul className="space-y-1">
                      {selectedWorkflow.examHabits.map((habit, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-gray-500 flex-shrink-0 mt-0.5" />
                          <span>{habit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedWorkflow.examHabits && typeof selectedWorkflow.examHabits === 'string' && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-2">
                      <Clipboard className="w-3 h-3" />
                      Exam Habits
                    </h4>
                    <p className="text-xs text-gray-300">{selectedWorkflow.examHabits}</p>
                  </div>
                )}

                {selectedWorkflow.steps && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-400 mb-2">Methodology Steps</h4>
                    <div className="space-y-3">
                      {selectedWorkflow.steps.map((step, sIdx) => {
                        const stepKey = `${selectedWorkflow.id}-${sIdx}`
                        const isExpanded = expandedSteps[stepKey]
                        const zoneColor = getZoneColor(selectedWorkflow.zone)

                        return (
                          <div key={sIdx} className="border border-gray-700/50 rounded-lg bg-gray-900/30 overflow-hidden">
                            <button
                              onClick={() => toggleStep(stepKey)}
                              className="w-full flex items-center justify-between px-4 py-3 text-left"
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
                                  style={{ backgroundColor: `${zoneColor}30`, color: zoneColor }}
                                >
                                  {sIdx + 1}
                                </span>
                                <span className="text-sm font-medium text-white">{step.phase}</span>
                              </div>
                              <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                            </button>

                            {isExpanded && (
                              <div className="px-4 pb-4 border-t border-gray-700 space-y-4">
                                {step.description && (
                                  <p className="text-sm text-gray-300">{step.description}</p>
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
                                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                                      {step.techniques.map(techId => {
                                        const tech = getItemById(data.techniques, techId)
                                        return tech ? (
                                          <Link
                                            key={techId}
                                            to={`/techniques/${tech.id}`}
                                            className="text-xs px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                                          >
                                            {tech.name}
                                          </Link>
                                        ) : (
                                          <span key={techId} className="text-xs px-2 py-1 bg-gray-700/30 rounded text-gray-500">
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
                                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                                      {step.tools.map(toolId => {
                                        const tool = getItemById(data.tools, toolId)
                                        return tool ? (
                                          <Link
                                            key={toolId}
                                            to={`/tools/${tool.id}`}
                                            className="text-xs px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                                          >
                                            {tool.name}
                                          </Link>
                                        ) : (
                                          <span key={toolId} className="text-xs px-2 py-1 bg-gray-700/30 rounded text-gray-500">
                                            {toolId}
                                          </span>
                                        )
                                      })}
                                    </div>
                                  </div>
                                )}

                                {step.decisionPoints && step.decisionPoints.length > 0 && (
                                  <div className="space-y-2">
                                    <span className="text-xs text-gray-500">Decision Points:</span>
                                    {step.decisionPoints.map((dp, dIdx) => (
                                      <div key={dIdx} className="text-xs text-gray-300 ml-2">
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
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-gray-300 mb-2">Select a methodology</h3>
              <p className="text-sm text-gray-500">
                Choose an Argha Dey methodology from the sidebar to view the full step-by-step workflow.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
