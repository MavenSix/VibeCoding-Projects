import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import {
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Users,
  CheckCircle2,
  Circle,
  Clock
} from 'lucide-react'

export interface GanttTask {
  id: string
  name: string
  workstream: string
  startDate: Date
  endDate: Date
  progress: number
  color: string
  status: 'not-started' | 'in-progress' | 'completed'
  owner: string
  deliverables: {
    name: string
    status: 'pending' | 'in-progress' | 'completed'
    dueDate: Date
  }[]
  dependencies?: string[]
}

// Project start date - Week of Jan 27, 2026
const PROJECT_START = new Date(2026, 0, 27) // Monday, Jan 27, 2026

// Generate Gantt tasks with actual dates
export const ganttTasks: GanttTask[] = [
  // Week 1-2: Discovery & Strategy
  {
    id: 'gantt-1',
    name: 'Strategic Vision Document',
    workstream: 'Discovery & Strategy',
    startDate: new Date(2026, 0, 27),
    endDate: new Date(2026, 1, 7),
    progress: 60,
    color: '#2c69b6',
    status: 'in-progress',
    owner: 'Harleen',
    deliverables: [
      { name: 'Vision statement draft', status: 'completed', dueDate: new Date(2026, 0, 29) },
      { name: 'Strategic objectives', status: 'in-progress', dueDate: new Date(2026, 1, 3) },
      { name: 'Success metrics definition', status: 'pending', dueDate: new Date(2026, 1, 7) },
    ]
  },
  {
    id: 'gantt-2',
    name: 'Business Requirements',
    workstream: 'Discovery & Strategy',
    startDate: new Date(2026, 0, 29),
    endDate: new Date(2026, 1, 14),
    progress: 40,
    color: '#2c69b6',
    status: 'in-progress',
    owner: 'Kevin',
    deliverables: [
      { name: 'Stakeholder interviews', status: 'completed', dueDate: new Date(2026, 0, 31) },
      { name: 'Functional requirements', status: 'in-progress', dueDate: new Date(2026, 1, 7) },
      { name: 'User stories', status: 'pending', dueDate: new Date(2026, 1, 10) },
      { name: 'Acceptance criteria', status: 'pending', dueDate: new Date(2026, 1, 14) },
    ]
  },
  {
    id: 'gantt-3',
    name: 'Tool Assessment',
    workstream: 'Discovery & Strategy',
    startDate: new Date(2026, 1, 3),
    endDate: new Date(2026, 1, 14),
    progress: 0,
    color: '#2c69b6',
    status: 'not-started',
    owner: 'Ross',
    deliverables: [
      { name: 'Tool inventory', status: 'pending', dueDate: new Date(2026, 1, 7) },
      { name: 'Integration map', status: 'pending', dueDate: new Date(2026, 1, 10) },
      { name: 'Data flow diagrams', status: 'pending', dueDate: new Date(2026, 1, 14) },
    ]
  },
  // Week 2-3: Design & Prototyping
  {
    id: 'gantt-4',
    name: 'Wireframe Templates',
    workstream: 'Design & Prototyping',
    startDate: new Date(2026, 1, 10),
    endDate: new Date(2026, 1, 21),
    progress: 0,
    color: '#f4990b',
    status: 'not-started',
    owner: 'Brian',
    deliverables: [
      { name: 'Secondary page templates', status: 'pending', dueDate: new Date(2026, 1, 14) },
      { name: 'Tertiary page templates', status: 'pending', dueDate: new Date(2026, 1, 17) },
      { name: 'Navigation flows', status: 'pending', dueDate: new Date(2026, 1, 21) },
    ],
    dependencies: ['gantt-2']
  },
  {
    id: 'gantt-5',
    name: 'Component Mapping',
    workstream: 'Design & Prototyping',
    startDate: new Date(2026, 1, 12),
    endDate: new Date(2026, 1, 19),
    progress: 0,
    color: '#f4990b',
    status: 'not-started',
    owner: 'Kevin',
    deliverables: [
      { name: 'Component inventory', status: 'pending', dueDate: new Date(2026, 1, 14) },
      { name: 'Template mapping document', status: 'pending', dueDate: new Date(2026, 1, 17) },
      { name: 'Stakeholder sign-off', status: 'pending', dueDate: new Date(2026, 1, 19) },
    ]
  },
  // Week 3-4: Content Framework
  {
    id: 'gantt-6',
    name: 'Content Strategy',
    workstream: 'Content Framework',
    startDate: new Date(2026, 1, 17),
    endDate: new Date(2026, 1, 28),
    progress: 0,
    color: '#00857c',
    status: 'not-started',
    owner: 'Kala',
    deliverables: [
      { name: 'Content hierarchy', status: 'pending', dueDate: new Date(2026, 1, 21) },
      { name: 'Messaging framework', status: 'pending', dueDate: new Date(2026, 1, 24) },
      { name: 'Content templates', status: 'pending', dueDate: new Date(2026, 1, 28) },
    ]
  },
  {
    id: 'gantt-7',
    name: 'Tree Testing Proposal',
    workstream: 'Research',
    startDate: new Date(2026, 0, 27),
    endDate: new Date(2026, 1, 3),
    progress: 80,
    color: '#4caf50',
    status: 'in-progress',
    owner: 'Kristen',
    deliverables: [
      { name: 'Test plan document', status: 'completed', dueDate: new Date(2026, 0, 29) },
      { name: 'Example from previous project', status: 'completed', dueDate: new Date(2026, 0, 30) },
      { name: 'Client presentation', status: 'in-progress', dueDate: new Date(2026, 1, 3) },
    ]
  },
  {
    id: 'gantt-8',
    name: 'High-Fidelity Designs',
    workstream: 'Design & Prototyping',
    startDate: new Date(2026, 1, 21),
    endDate: new Date(2026, 2, 7),
    progress: 0,
    color: '#f4990b',
    status: 'not-started',
    owner: 'Brian',
    deliverables: [
      { name: 'Visual mockups', status: 'pending', dueDate: new Date(2026, 1, 28) },
      { name: 'Design specifications', status: 'pending', dueDate: new Date(2026, 2, 3) },
      { name: 'Asset library', status: 'pending', dueDate: new Date(2026, 2, 7) },
    ],
    dependencies: ['gantt-4']
  },
]

// Tasks beyond 4 weeks
export const futureGanttTasks: GanttTask[] = [
  {
    id: 'future-1',
    name: 'Interactive Prototype',
    workstream: 'Design & Prototyping',
    startDate: new Date(2026, 2, 7),
    endDate: new Date(2026, 2, 21),
    progress: 0,
    color: '#f4990b',
    status: 'not-started',
    owner: 'Kevin',
    deliverables: [
      { name: 'Figma prototype', status: 'pending', dueDate: new Date(2026, 2, 14) },
      { name: 'Interaction specifications', status: 'pending', dueDate: new Date(2026, 2, 17) },
      { name: 'User flow documentation', status: 'pending', dueDate: new Date(2026, 2, 21) },
    ]
  },
  {
    id: 'future-2',
    name: 'Code Prototype Development',
    workstream: 'Development',
    startDate: new Date(2026, 2, 21),
    endDate: new Date(2026, 3, 11),
    progress: 0,
    color: '#6b5b95',
    status: 'not-started',
    owner: 'Kevin',
    deliverables: [
      { name: 'React application scaffold', status: 'pending', dueDate: new Date(2026, 2, 28) },
      { name: 'Core functionality', status: 'pending', dueDate: new Date(2026, 3, 4) },
      { name: 'API integrations', status: 'pending', dueDate: new Date(2026, 3, 11) },
    ]
  },
  {
    id: 'future-3',
    name: 'User Testing',
    workstream: 'Research',
    startDate: new Date(2026, 3, 11),
    endDate: new Date(2026, 3, 25),
    progress: 0,
    color: '#4caf50',
    status: 'not-started',
    owner: 'Kristen',
    deliverables: [
      { name: 'Test sessions', status: 'pending', dueDate: new Date(2026, 3, 18) },
      { name: 'Feedback synthesis', status: 'pending', dueDate: new Date(2026, 3, 22) },
      { name: 'Recommendations report', status: 'pending', dueDate: new Date(2026, 3, 25) },
    ]
  },
  {
    id: 'future-4',
    name: 'Enablement Workshop',
    workstream: 'Rollout',
    startDate: new Date(2026, 3, 25),
    endDate: new Date(2026, 4, 9),
    progress: 0,
    color: '#e53935',
    status: 'not-started',
    owner: 'Sarah',
    deliverables: [
      { name: 'Workshop materials', status: 'pending', dueDate: new Date(2026, 4, 2) },
      { name: 'Facilitation sessions', status: 'pending', dueDate: new Date(2026, 4, 6) },
      { name: 'Follow-up documentation', status: 'pending', dueDate: new Date(2026, 4, 9) },
    ]
  },
]

const statusConfig = {
  'not-started': { label: 'Not Started', icon: Circle, color: 'var(--workday-gray-400)' },
  'in-progress': { label: 'In Progress', icon: Clock, color: 'var(--workday-orange)' },
  'completed': { label: 'Completed', icon: CheckCircle2, color: 'var(--workday-green)' },
  'pending': { label: 'Pending', icon: Circle, color: 'var(--workday-gray-400)' },
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function getWeekDates(weekOffset: number): Date[] {
  const dates: Date[] = []
  const startOfWeek = new Date(PROJECT_START)
  startOfWeek.setDate(startOfWeek.getDate() + weekOffset * 7)

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek)
    date.setDate(date.getDate() + i)
    dates.push(date)
  }
  return dates
}

function TaskDetailModal({ task, onClose }: { task: GanttTask; onClose: () => void }) {
  const status = statusConfig[task.status]
  const StatusIcon = status.icon

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-[var(--workday-gray-200)]" style={{ backgroundColor: task.color + '10' }}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--workday-gray-900)]">{task.name}</h3>
              <p className="text-sm text-[var(--workday-gray-500)]">{task.workstream}</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[var(--workday-gray-100)] rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-[var(--workday-gray-500)]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {/* Task Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--workday-gray-400)]" />
              <div>
                <p className="text-xs text-[var(--workday-gray-500)]">Timeline</p>
                <p className="text-sm font-medium">{formatDate(task.startDate)} - {formatDate(task.endDate)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[var(--workday-gray-400)]" />
              <div>
                <p className="text-xs text-[var(--workday-gray-500)]">Owner</p>
                <p className="text-sm font-medium">{task.owner}</p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[var(--workday-gray-700)]">Progress</span>
              <Badge variant={task.status === 'completed' ? 'success' : task.status === 'in-progress' ? 'warning' : 'secondary'}>
                <StatusIcon className="w-3 h-3 mr-1" />
                {status.label}
              </Badge>
            </div>
            <div className="h-2 bg-[var(--workday-gray-100)] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${task.progress}%` }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full rounded-full"
                style={{ backgroundColor: task.color }}
              />
            </div>
            <p className="text-xs text-[var(--workday-gray-500)] mt-1 text-right">{task.progress}% complete</p>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--workday-gray-900)] mb-3">Deliverables</h4>
            <div className="space-y-2">
              {task.deliverables.map((deliverable, i) => {
                const delStatus = statusConfig[deliverable.status]
                const DelIcon = delStatus.icon

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 bg-[var(--workday-gray-50)] rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <DelIcon className="w-4 h-4" style={{ color: delStatus.color }} />
                      <span className="text-sm text-[var(--workday-gray-700)]">{deliverable.name}</span>
                    </div>
                    <span className="text-xs text-[var(--workday-gray-500)]">
                      Due {formatDate(deliverable.dueDate)}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Dependencies */}
          {task.dependencies && task.dependencies.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[var(--workday-gray-100)]">
              <p className="text-xs text-[var(--workday-gray-500)]">
                <span className="font-medium">Dependencies:</span> {task.dependencies.join(', ')}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function GanttChart() {
  const [weekOffset, setWeekOffset] = useState(0)
  const [selectedTask, setSelectedTask] = useState<GanttTask | null>(null)

  const weeks = [0, 1, 2, 3].map(w => getWeekDates(w + weekOffset))
  const visibleStartDate = weeks[0][0]
  const visibleEndDate = weeks[3][6]

  // Filter tasks visible in current 4-week window
  const visibleTasks = ganttTasks.filter(task => {
    return task.startDate <= visibleEndDate && task.endDate >= visibleStartDate
  })

  // Calculate bar position and width
  const getBarStyle = (task: GanttTask) => {
    const totalDays = 28 // 4 weeks
    const dayWidth = 100 / totalDays

    const startDiff = Math.max(0, Math.floor((task.startDate.getTime() - visibleStartDate.getTime()) / (1000 * 60 * 60 * 24)))
    const endDiff = Math.min(totalDays, Math.ceil((task.endDate.getTime() - visibleStartDate.getTime()) / (1000 * 60 * 60 * 24)))

    const left = startDiff * dayWidth
    const width = Math.max(dayWidth, (endDiff - startDiff) * dayWidth)

    return { left: `${left}%`, width: `${width}%` }
  }

  return (
    <div className="space-y-6">
      {/* Gantt Chart Card */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--workday-blue)]" />
              Project Timeline
            </CardTitle>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                disabled={weekOffset === 0}
                className="p-1 hover:bg-[var(--workday-gray-100)] rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-[var(--workday-gray-600)] min-w-[140px] text-center">
                {formatDate(visibleStartDate)} - {formatDate(visibleEndDate)}
              </span>
              <button
                onClick={() => setWeekOffset(weekOffset + 1)}
                className="p-1 hover:bg-[var(--workday-gray-100)] rounded"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Week headers */}
          <div className="grid grid-cols-4 gap-px bg-[var(--workday-gray-200)] mb-2 rounded-t-lg overflow-hidden">
            {weeks.map((week, i) => (
              <div key={i} className="bg-[var(--workday-gray-50)] p-2 text-center">
                <p className="text-xs font-semibold text-[var(--workday-gray-700)]">Week {weekOffset + i + 1}</p>
                <p className="text-xs text-[var(--workday-gray-500)]">
                  {formatDate(week[0])} - {formatDate(week[6])}
                </p>
              </div>
            ))}
          </div>

          {/* Day grid header */}
          <div className="grid grid-cols-[200px_1fr] border border-[var(--workday-gray-200)] rounded-lg overflow-hidden">
            <div className="bg-[var(--workday-gray-100)] p-2 border-r border-[var(--workday-gray-200)]">
              <p className="text-xs font-semibold text-[var(--workday-gray-700)]">Task</p>
            </div>
            <div className="bg-[var(--workday-gray-100)] grid grid-cols-28">
              {weeks.flat().map((date, i) => (
                <div
                  key={i}
                  className={`text-center py-1 text-xs border-l border-[var(--workday-gray-200)] first:border-l-0 ${
                    date.getDay() === 0 || date.getDay() === 6 ? 'bg-[var(--workday-gray-50)]' : ''
                  }`}
                >
                  <span className="text-[var(--workday-gray-500)]">{date.getDate()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Task rows */}
          <div className="border-x border-b border-[var(--workday-gray-200)] rounded-b-lg overflow-hidden">
            {visibleTasks.map((task, i) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-[200px_1fr] border-t border-[var(--workday-gray-200)] first:border-t-0 hover:bg-[var(--workday-gray-50)] transition-colors"
              >
                <div className="p-2 border-r border-[var(--workday-gray-200)]">
                  <p className="text-sm font-medium text-[var(--workday-gray-900)] truncate">{task.name}</p>
                  <p className="text-xs text-[var(--workday-gray-500)]">{task.owner}</p>
                </div>
                <div className="relative h-14 grid grid-cols-28">
                  {/* Day grid lines */}
                  {weeks.flat().map((date, j) => (
                    <div
                      key={j}
                      className={`border-l border-[var(--workday-gray-100)] first:border-l-0 ${
                        date.getDay() === 0 || date.getDay() === 6 ? 'bg-[var(--workday-gray-50)]/50' : ''
                      }`}
                    />
                  ))}
                  {/* Task bar */}
                  <motion.div
                    className="absolute top-2 h-10 rounded-md cursor-pointer flex items-center px-2 overflow-hidden"
                    style={{
                      ...getBarStyle(task),
                      backgroundColor: task.color,
                    }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedTask(task)}
                  >
                    {/* Progress fill */}
                    <div
                      className="absolute inset-0 bg-black/20"
                      style={{ width: `${100 - task.progress}%`, right: 0, left: 'auto' }}
                    />
                    <span className="text-xs text-white font-medium truncate relative z-10">
                      {task.name}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[var(--workday-gray-100)]">
            <span className="text-xs text-[var(--workday-gray-500)]">Workstreams:</span>
            {[
              { name: 'Discovery', color: '#2c69b6' },
              { name: 'Design', color: '#f4990b' },
              { name: 'Content', color: '#00857c' },
              { name: 'Research', color: '#4caf50' },
            ].map((ws) => (
              <div key={ws.name} className="flex items-center gap-1">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: ws.color }} />
                <span className="text-xs text-[var(--workday-gray-600)]">{ws.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Future Tasks */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Beyond Week 4</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {futureGanttTasks.map((task, i) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-3 bg-[var(--workday-gray-50)] rounded-lg hover:bg-[var(--workday-gray-100)] cursor-pointer transition-colors"
                onClick={() => setSelectedTask(task)}
              >
                <div
                  className="w-1 h-12 rounded-full"
                  style={{ backgroundColor: task.color }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-[var(--workday-gray-900)]">{task.name}</h4>
                    <Badge variant="secondary" className="text-xs">{task.workstream}</Badge>
                  </div>
                  <p className="text-sm text-[var(--workday-gray-500)]">
                    {formatDate(task.startDate)} - {formatDate(task.endDate)} • {task.owner}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[var(--workday-gray-700)]">
                    {task.deliverables.length} deliverables
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Task Detail Modal */}
      <AnimatePresence>
        {selectedTask && (
          <TaskDetailModal task={selectedTask} onClose={() => setSelectedTask(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
