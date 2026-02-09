import { motion } from 'motion/react'

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[var(--workday-navy)] to-[var(--workday-blue)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--workday-orange)] flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
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
                <h1 className="text-2xl font-bold tracking-tight">
                  Advocacy Builder
                </h1>
                <p className="text-blue-200 text-sm">
                  Project Roadmap & Strategic Plan
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm text-blue-200">Client</p>
              <p className="font-semibold">Workday</p>
            </div>
            <div className="w-px h-10 bg-blue-400/30 hidden sm:block" />
            <div className="text-right hidden sm:block">
              <p className="text-sm text-blue-200">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--workday-orange)] animate-pulse" />
                <span className="font-semibold">In Progress</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
