import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { GanttChart } from './GanttChart'
import { projectPhases, type Phase, type Artifact } from '@/data/projectData'
import {
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Circle,
  Clock,
  AlertCircle,
  Users,
  FileText,
  ArrowRight,
  Calendar,
  List
} from 'lucide-react'

const statusConfig = {
  'completed': { label: 'Completed', color: 'var(--workday-green)', icon: CheckCircle2, variant: 'success' as const },
  'in-progress': { label: 'In Progress', color: 'var(--workday-orange)', icon: Clock, variant: 'warning' as const },
  'planned': { label: 'Planned', color: 'var(--workday-blue)', icon: Circle, variant: 'default' as const },
  'future': { label: 'Future', color: 'var(--workday-gray-400)', icon: Circle, variant: 'secondary' as const },
}

const artifactStatusConfig = {
  'not-started': { label: 'Not Started', color: 'var(--workday-gray-400)', variant: 'secondary' as const },
  'in-progress': { label: 'In Progress', color: 'var(--workday-orange)', variant: 'warning' as const },
  'review': { label: 'In Review', color: 'var(--workday-purple)', variant: 'purple' as const },
  'completed': { label: 'Completed', color: 'var(--workday-green)', variant: 'success' as const },
}

function PhaseCard({ phase, index, isExpanded, onToggle }: {
  phase: Phase;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const status = statusConfig[phase.status]
  const StatusIcon = status.icon

  const completedArtifacts = phase.artifacts.filter(a => a.status === 'completed').length
  const progress = (completedArtifacts / phase.artifacts.length) * 100

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < projectPhases.length - 1 && (
        <div
          className="absolute left-6 top-16 w-0.5 h-[calc(100%-2rem)]"
          style={{ backgroundColor: phase.color + '40' }}
        />
      )}

      <Card
        className="relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
        onClick={onToggle}
      >
        {/* Color accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ backgroundColor: phase.color }}
        />

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {/* Phase number indicator */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                style={{ backgroundColor: phase.color }}
              >
                {index + 1}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl">{phase.name}</CardTitle>
                  <Badge variant={status.variant}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {status.label}
                  </Badge>
                </div>
                <CardDescription className="mt-1">
                  {phase.description}
                </CardDescription>
              </div>
            </div>

            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-6 h-6 text-[var(--workday-gray-400)]" />
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 flex items-center gap-4">
            <Progress value={progress} indicatorColor={phase.color} className="flex-1 h-2" />
            <span className="text-sm text-[var(--workday-gray-500)] whitespace-nowrap">
              {completedArtifacts}/{phase.artifacts.length} artifacts
            </span>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="border-t border-[var(--workday-gray-200)] pt-4">
                {/* Key Activities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[var(--workday-gray-900)] mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" style={{ color: phase.color }} />
                    Key Activities
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.keyActivities.map((activity, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 text-sm text-[var(--workday-gray-600)]"
                      >
                        <ArrowRight className="w-3 h-3" style={{ color: phase.color }} />
                        {activity}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Artifacts */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[var(--workday-gray-900)] mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" style={{ color: phase.color }} />
                    Deliverable Artifacts
                  </h4>
                  <div className="space-y-3">
                    {phase.artifacts.map((artifact, i) => (
                      <ArtifactCard key={artifact.id} artifact={artifact} delay={i * 0.05} />
                    ))}
                  </div>
                </div>

                {/* Expected Outcomes */}
                <div>
                  <h4 className="font-semibold text-[var(--workday-gray-900)] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" style={{ color: phase.color }} />
                    Expected Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.outcomes.map((outcome, i) => (
                      <Badge key={i} variant="outline" className="text-sm">
                        {outcome}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

function ArtifactCard({ artifact, delay }: { artifact: Artifact; delay: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const status = artifactStatusConfig[artifact.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="border border-[var(--workday-gray-200)] rounded-lg p-3 hover:border-[var(--workday-gray-300)] transition-colors"
    >
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={(e) => {
          e.stopPropagation()
          setIsExpanded(!isExpanded)
        }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h5 className="font-medium text-[var(--workday-gray-900)]">{artifact.name}</h5>
            <Badge variant={status.variant} className="text-xs">
              {status.label}
            </Badge>
          </div>
          <p className="text-sm text-[var(--workday-gray-500)]">{artifact.description}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-[var(--workday-gray-400)]" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-3 pt-3 border-t border-[var(--workday-gray-100)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h6 className="font-medium text-[var(--workday-gray-700)] mb-2">Deliverables</h6>
                <ul className="space-y-1">
                  {artifact.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-[var(--workday-gray-600)]">
                      <span className="w-1 h-1 rounded-full bg-[var(--workday-gray-400)]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="font-medium text-[var(--workday-gray-700)] mb-2 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Stakeholders
                </h6>
                <div className="flex flex-wrap gap-1">
                  {artifact.stakeholders.map((s, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            {artifact.dependencies && artifact.dependencies.length > 0 && (
              <div className="mt-3">
                <h6 className="font-medium text-[var(--workday-gray-700)] mb-1 text-sm">Dependencies</h6>
                <p className="text-xs text-[var(--workday-gray-500)]">
                  Requires: {artifact.dependencies.join(', ')}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function RoadmapVisualization() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>('phase-1')
  const [viewMode, setViewMode] = useState<'gantt' | 'phases'>('gantt')

  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2 p-1 bg-[var(--workday-gray-100)] rounded-lg">
          <button
            onClick={() => setViewMode('gantt')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'gantt'
                ? 'bg-white text-[var(--workday-blue)] shadow-sm'
                : 'text-[var(--workday-gray-600)] hover:text-[var(--workday-gray-900)]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Timeline View
          </button>
          <button
            onClick={() => setViewMode('phases')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              viewMode === 'phases'
                ? 'bg-white text-[var(--workday-blue)] shadow-sm'
                : 'text-[var(--workday-gray-600)] hover:text-[var(--workday-gray-900)]'
            }`}
          >
            <List className="w-4 h-4" />
            Phase View
          </button>
        </div>

        {/* Summary Stats */}
        <div className="hidden md:flex items-center gap-4">
          {[
            { label: 'Phases', value: projectPhases.length, color: 'var(--workday-blue)' },
            { label: 'In Progress', value: projectPhases.filter(p => p.status === 'in-progress').length, color: 'var(--workday-orange)' },
            { label: 'Artifacts', value: projectPhases.reduce((acc, p) => acc + p.artifacts.length, 0), color: 'var(--workday-teal)' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</span>
              <span className="text-xs text-[var(--workday-gray-500)]">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Content based on view mode */}
      <AnimatePresence mode="wait">
        {viewMode === 'gantt' ? (
          <motion.div
            key="gantt"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <GanttChart />
          </motion.div>
        ) : (
          <motion.div
            key="phases"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Summary Stats for mobile */}
            <div className="grid grid-cols-2 md:hidden gap-4 mb-6">
              {[
                { label: 'Total Phases', value: projectPhases.length, color: 'var(--workday-blue)' },
                { label: 'In Progress', value: projectPhases.filter(p => p.status === 'in-progress').length, color: 'var(--workday-orange)' },
                { label: 'Total Artifacts', value: projectPhases.reduce((acc, p) => acc + p.artifacts.length, 0), color: 'var(--workday-teal)' },
                { label: 'Completed', value: projectPhases.reduce((acc, p) => acc + p.artifacts.filter(a => a.status === 'completed').length, 0), color: 'var(--workday-green)' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg border border-[var(--workday-gray-200)] p-4 text-center"
                >
                  <p className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-sm text-[var(--workday-gray-500)]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Phase Timeline */}
            <div className="space-y-4">
              {projectPhases.map((phase, index) => (
                <PhaseCard
                  key={phase.id}
                  phase={phase}
                  index={index}
                  isExpanded={expandedPhase === phase.id}
                  onToggle={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
