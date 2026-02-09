import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { workstreamBuckets, type WorkstreamBucket } from '@/data/projectData'
import {
  Layout,
  FileText,
  Rocket,
  Map,
  Presentation,
  Search,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout className="w-5 h-5" />,
  'file-text': <FileText className="w-5 h-5" />,
  rocket: <Rocket className="w-5 h-5" />,
  map: <Map className="w-5 h-5" />,
  presentation: <Presentation className="w-5 h-5" />,
  search: <Search className="w-5 h-5" />,
}

const effortConfig = {
  low: { label: 'Low', icon: Minus, color: 'var(--workday-green)' },
  medium: { label: 'Medium', icon: ArrowUpRight, color: 'var(--workday-orange)' },
  high: { label: 'High', icon: ArrowDownRight, color: 'var(--workday-red)' },
}

const priorityConfig = {
  critical: { label: 'Critical', variant: 'destructive' as const },
  high: { label: 'High', variant: 'warning' as const },
  medium: { label: 'Medium', variant: 'default' as const },
  low: { label: 'Low', variant: 'secondary' as const },
}

function BucketCard({ bucket, index }: { bucket: WorkstreamBucket; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 2) // Advocacy Builder expanded by default

  const criticalCount = bucket.items.filter(i => i.priority === 'critical').length
  const totalEffort = bucket.items.reduce((acc, item) => {
    const effortValues = { low: 1, medium: 2, high: 3 }
    return acc + effortValues[item.effort]
  }, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        {/* Color header */}
        <div
          className="h-2"
          style={{ backgroundColor: bucket.color }}
        />

        <CardHeader
          className="cursor-pointer hover:bg-[var(--workday-gray-50)] transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: bucket.color }}
              >
                {iconMap[bucket.icon]}
              </div>
              <div>
                <CardTitle className="text-lg">{bucket.name}</CardTitle>
                <CardDescription className="text-sm mt-1">
                  {bucket.description}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-2xl font-bold" style={{ color: bucket.color }}>
                  {bucket.items.length}
                </p>
                <p className="text-xs text-[var(--workday-gray-500)]">items</p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-[var(--workday-gray-400)]" />
              </motion.div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--workday-gray-100)]">
            {criticalCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {criticalCount} Critical
              </Badge>
            )}
            <span className="text-xs text-[var(--workday-gray-500)]">
              Total Effort: {totalEffort <= 5 ? 'Low' : totalEffort <= 10 ? 'Medium' : 'High'}
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
              <CardContent className="border-t border-[var(--workday-gray-200)]">
                <div className="space-y-3">
                  {bucket.items.map((item, i) => {
                    const effort = effortConfig[item.effort]
                    const priority = priorityConfig[item.priority]
                    const EffortIcon = effort.icon

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start justify-between p-4 rounded-lg bg-[var(--workday-gray-50)] hover:bg-[var(--workday-gray-100)] transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-[var(--workday-gray-900)]">
                              {item.name}
                            </h4>
                            <Badge variant={priority.variant} className="text-xs">
                              {priority.label}
                            </Badge>
                          </div>
                          <p className="text-sm text-[var(--workday-gray-600)]">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 ml-4">
                          <EffortIcon
                            className="w-4 h-4"
                            style={{ color: effort.color }}
                          />
                          <span
                            className="text-xs font-medium"
                            style={{ color: effort.color }}
                          >
                            {effort.label}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

export function WorkBreakdownStructure() {
  return (
    <div className="space-y-6">
      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-wrap items-center gap-6 p-4 bg-white rounded-lg border border-[var(--workday-gray-200)]"
      >
        <div className="text-sm font-medium text-[var(--workday-gray-700)]">Legend:</div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-[var(--workday-gray-500)]">Priority:</span>
          {Object.entries(priorityConfig).map(([key, config]) => (
            <Badge key={key} variant={config.variant} className="text-xs">
              {config.label}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-[var(--workday-gray-500)]">Effort:</span>
          {Object.entries(effortConfig).map(([key, config]) => {
            const Icon = config.icon
            return (
              <span key={key} className="flex items-center gap-1 text-xs" style={{ color: config.color }}>
                <Icon className="w-3 h-3" />
                {config.label}
              </span>
            )
          })}
        </div>
      </motion.div>

      {/* Summary Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
      >
        {workstreamBuckets.map((bucket, i) => (
          <motion.div
            key={bucket.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg border-2 text-center cursor-pointer transition-colors"
            style={{
              borderColor: bucket.color + '40',
              backgroundColor: bucket.color + '10'
            }}
          >
            <div
              className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-white"
              style={{ backgroundColor: bucket.color }}
            >
              {iconMap[bucket.icon]}
            </div>
            <p className="font-medium text-sm text-[var(--workday-gray-900)]">{bucket.name}</p>
            <p className="text-2xl font-bold mt-1" style={{ color: bucket.color }}>
              {bucket.items.length}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bucket Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {workstreamBuckets.map((bucket, index) => (
          <BucketCard key={bucket.id} bucket={bucket} index={index} />
        ))}
      </div>
    </div>
  )
}
