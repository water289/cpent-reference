import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useDatabase } from '../../context/AppContext'
import { getItemById } from '../../utils/dataHelpers'
import { getZoneColor } from '../../utils/filters'
import CommandBlock from '../tools/CommandBlock'
import SourceBadge from '../ui/SourceBadge'
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
    const isArgha = wf.source?.includes('Argha Dey')

    return (
      <button
        key={wf.id}
        onClick={() => { setSelectedWorkflow(wf); setExpandedSteps({}) }}
        className={`p-4 bg-gray-800 border rounded-lg text-left transition-all ${
          isSelected
            ? 'border-amber-500 bg-amber-900/20'
            : 'border-gray-700 hover:border-gray-600 hover:bg-gray-700/30'
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: zoneColor }}
          />
          <span className="text-xs text-gray-500">{wf.zone}</span>
          <SourceBadge source={wf.source} size="xs" />
        </div>
        <h3 className="font-medium text-white">{wf.name}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{wf.description}</p>
        <span className="text-xs text-gray-400 mt-2 block">
          {wf.steps?.length || 0} steps
        </span>
      </button>
    )
  }

  const renderWorkflowDetail = (wf) => {
    const zoneColor = getZoneColor(wf.zone)
    const isArgha = wf.source?.includes('Argha Dey')

    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <FileText className={`w-5 h-5 ${isArgha ? 'text-amber-400' : 'text-gray-400'}`} />
            <h2 className="text-xl font-bold text-white">{wf.name}</h2>
            <SourceBadge source={wf.source} size="xs" />
          </div>
          <p className="text-sm text-gray-400">{wf.description}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: zoneColor }} />
              Zone: {wf.zone}
            </span>
            <span>{wf.steps?.length || 0} steps</span>
            {wf.source && <span>Source: {wf.source}</span>}
          </div>
        </div>

        <div className="px-4 pb-4 space-y-4">
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

          {wf.steps && (
            <div>
              <h4 className="text-xs font-medium text-gray-400 mb-2">Methodology Steps</h4>
              <div className="space-y-3">
                {wf.steps.map((step, sIdx) => {
                  const stepKey = `${wf.id}-${sIdx}`
                  const stepExpanded = expandedSteps[stepKey]
                  return (
                    <div key={sIdx} className="border border-gray-700/50 rounded-lg bg-gray-900/30">
                      <button
                        onClick={() => toggleStep(stepKey)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left"
                      >
                        <span
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
                          style={{ backgroundColor: `${zoneColor}30`, color: zoneColor }}
                        >
                          {sIdx + 1}
                        </span>
                        <span className="text-sm font-medium text-white">{step.phase}</span>
                        <ChevronRight className={`w-4 h-4 text-gray-500 ml-auto transition-transform ${stepExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      {stepExpanded && (
                        <div className="px-4 pb-3 border-t border-gray-700 space-y-3">
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
                              <span className="text-xs text-gray-500">Tools:</span>
                              <div className="flex flex-wrap gap-1.5 mt-1">
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
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Workflows</h1>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Argha Dey Methodologies ({arghaWorkflows.length})
            </h2>
            <div className="space-y-2">
              {arghaWorkflows.map(renderWorkflowCard)}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Standard Workflows ({standardWorkflows.length})
            </h2>
            <div className="space-y-2">
              {standardWorkflows.map(renderWorkflowCard)}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {selectedWorkflow ? (
            renderWorkflowDetail(selectedWorkflow)
          ) : (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-gray-300 mb-2">Select a workflow</h3>
              <p className="text-sm text-gray-500">
                Choose a workflow from the sidebar to view its detailed step-by-step methodology.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
