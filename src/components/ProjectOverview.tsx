import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { valueProposition, coreCapabilities, strategicProofPoints } from '@/data/projectData'
import {
  Brain,
  TrendingUp,
  Users,
  Award,
  Rocket,
  Shield,
  Target,
  Zap,
  FileText
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-5 h-5" />,
  'trending-up': <TrendingUp className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  award: <Award className="w-5 h-5" />,
  rocket: <Rocket className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function ProjectOverview() {
  return (
    <div className="space-y-8">
      {/* Value Proposition Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-l-4 border-l-[var(--workday-orange)] overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--workday-orange)]/10 to-transparent rounded-bl-full" />
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-[var(--workday-orange)]" />
              <CardTitle>{valueProposition.title}</CardTitle>
            </div>
            <CardDescription className="text-base">
              {valueProposition.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {valueProposition.keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[var(--workday-gray-50)] hover:bg-[var(--workday-gray-100)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--workday-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-[var(--workday-orange)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--workday-gray-900)]">
                      {point.title}
                    </h4>
                    <p className="text-sm text-[var(--workday-gray-600)]">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Core Capabilities - Top 3 Things */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Rocket className="w-6 h-6 text-[var(--workday-blue)]" />
                <CardTitle>Top 3 Things the Tool Must Do Perfectly</CardTitle>
              </div>
              <Badge variant="warning">Critical Focus</Badge>
            </div>
            <CardDescription>
              Avoiding over-engineering in the initial phase by focusing on these core capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {coreCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.id}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-xl border-2 border-[var(--workday-blue)]/20 bg-gradient-to-br from-white to-[var(--workday-blue)]/5"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[var(--workday-blue)] text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-lg text-[var(--workday-gray-900)] mb-2">
                      {capability.title}
                    </h4>
                    <p className="text-sm text-[var(--workday-gray-600)] mb-4">
                      {capability.description}
                    </p>
                    <ul className="space-y-2">
                      {capability.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--workday-orange)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Strategic Proof Points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-[var(--workday-teal)]" />
              <CardTitle>6 Strategic Proof Point Categories</CardTitle>
            </div>
            <CardDescription>
              Business case builder categories for compelling stakeholder presentations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {strategicProofPoints.map((point) => (
                <motion.div
                  key={point.id}
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-lg border border-[var(--workday-gray-200)] hover:border-[var(--workday-teal)] hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[var(--workday-teal)]/10 flex items-center justify-center text-[var(--workday-teal)]">
                      {iconMap[point.icon]}
                    </div>
                    <h4 className="font-semibold text-[var(--workday-gray-900)]">
                      {point.category}
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--workday-gray-600)]">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
