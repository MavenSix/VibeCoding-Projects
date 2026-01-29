import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { actionItems, stakeholders } from '@/data/projectData'
import {
  CheckCircle2,
  Circle,
  Clock,
  Users,
  AlertTriangle,
  ExternalLink
} from 'lucide-react'

const statusConfig = {
  pending: { label: 'Pending', icon: Circle, color: 'var(--workday-gray-400)', variant: 'secondary' as const },
  'in-progress': { label: 'In Progress', icon: Clock, color: 'var(--workday-orange)', variant: 'warning' as const },
  completed: { label: 'Completed', icon: CheckCircle2, color: 'var(--workday-green)', variant: 'success' as const },
}

const priorityColors = {
  high: 'var(--workday-red)',
  medium: 'var(--workday-orange)',
  low: 'var(--workday-gray-400)',
}

export function ActionItemsTracker() {
  const pendingCount = actionItems.filter(a => a.status === 'pending').length
  const inProgressCount = actionItems.filter(a => a.status === 'in-progress').length
  const completedCount = actionItems.filter(a => a.status === 'completed').length

  return (
    <div className="space-y-6">
      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-gradient-to-r from-[var(--workday-navy)] to-[var(--workday-blue)] text-white">
          <CardContent className="py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Quick Links</h3>
                <p className="text-blue-200 text-sm">Access project resources and prototypes</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://workday-cio-advocacy-builder.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Prototype
                </a>
                <a
                  href="https://miro.com/app/board/uXjVJU_2D5w=/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Miro Board
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Action Items Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="border-l-4 border-l-[var(--workday-gray-400)]">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-[var(--workday-gray-900)]">{pendingCount}</p>
                <p className="text-sm text-[var(--workday-gray-500)]">Pending</p>
              </div>
              <Circle className="w-8 h-8 text-[var(--workday-gray-400)]" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-[var(--workday-orange)]">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-[var(--workday-gray-900)]">{inProgressCount}</p>
                <p className="text-sm text-[var(--workday-gray-500)]">In Progress</p>
              </div>
              <Clock className="w-8 h-8 text-[var(--workday-orange)]" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-[var(--workday-green)]">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-[var(--workday-gray-900)]">{completedCount}</p>
                <p className="text-sm text-[var(--workday-gray-500)]">Completed</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-[var(--workday-green)]" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Action Items List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[var(--workday-orange)]" />
              <CardTitle>VML Action Items</CardTitle>
            </div>
            <CardDescription>
              Priority tasks from the client meeting
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {actionItems.map((item, i) => {
                const status = statusConfig[item.status]
                const StatusIcon = status.icon

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg border border-[var(--workday-gray-200)] hover:border-[var(--workday-gray-300)] hover:bg-[var(--workday-gray-50)] transition-all"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: priorityColors[item.priority] }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[var(--workday-gray-900)] font-medium">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {item.owner}
                        </Badge>
                        <Badge variant={status.variant} className="text-xs">
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {status.label}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stakeholders Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[var(--workday-blue)]" />
              <CardTitle>Key Stakeholders</CardTitle>
            </div>
            <CardDescription>
              Project team and client contacts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {stakeholders.map((stakeholder, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-lg border border-[var(--workday-gray-200)] hover:border-[var(--workday-blue)] hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--workday-blue)] to-[var(--workday-blue-dark)] text-white flex items-center justify-center font-semibold mb-3">
                    {stakeholder.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-[var(--workday-gray-900)]">
                    {stakeholder.name}
                  </h4>
                  <p className="text-sm text-[var(--workday-blue)] font-medium">
                    {stakeholder.role}
                  </p>
                  <p className="text-xs text-[var(--workday-gray-500)] mt-1">
                    {stakeholder.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
