import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './App.css'
import { Header } from './components/Header'
import { ProjectOverview } from './components/ProjectOverview'
import { RoadmapVisualization } from './components/RoadmapVisualization'
import { WorkBreakdownStructure } from './components/WorkBreakdownStructure'
import { ActionItemsTracker } from './components/ActionItemsTracker'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import {
  LayoutDashboard,
  Map,
  GitBranch,
  ClipboardList
} from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-[var(--workday-gray-50)]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto p-2 bg-white shadow-sm rounded-xl">
              <TabsTrigger
                value="overview"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-[var(--workday-blue)] data-[state=active]:text-white rounded-lg transition-all"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="roadmap"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-[var(--workday-blue)] data-[state=active]:text-white rounded-lg transition-all"
              >
                <Map className="w-4 h-4" />
                <span className="hidden sm:inline">Roadmap</span>
              </TabsTrigger>
              <TabsTrigger
                value="wbs"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-[var(--workday-blue)] data-[state=active]:text-white rounded-lg transition-all"
              >
                <GitBranch className="w-4 h-4" />
                <span className="hidden sm:inline">Work Breakdown</span>
              </TabsTrigger>
              <TabsTrigger
                value="actions"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-[var(--workday-blue)] data-[state=active]:text-white rounded-lg transition-all"
              >
                <ClipboardList className="w-4 h-4" />
                <span className="hidden sm:inline">Action Items</span>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            <TabsContent value="overview" key="overview">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectOverview />
              </motion.div>
            </TabsContent>

            <TabsContent value="roadmap" key="roadmap">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <RoadmapVisualization />
              </motion.div>
            </TabsContent>

            <TabsContent value="wbs" key="wbs">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <WorkBreakdownStructure />
              </motion.div>
            </TabsContent>

            <TabsContent value="actions" key="actions">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ActionItemsTracker />
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--workday-gray-200)] bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--workday-orange)] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[var(--workday-gray-900)]">Advocacy Builder</p>
                <p className="text-xs text-[var(--workday-gray-500)]">Workday Project Roadmap</p>
              </div>
            </div>
            <p className="text-sm text-[var(--workday-gray-500)]">
              Built with React, TypeScript, shadcn/ui, and motion.dev
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
