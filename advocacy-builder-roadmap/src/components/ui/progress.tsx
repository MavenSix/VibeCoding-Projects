import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  indicatorColor?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, indicatorColor, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-[var(--workday-gray-200)]",
        className
      )}
      {...props}
    >
      <div
        className="h-full transition-all duration-500 ease-out rounded-full"
        style={{
          width: `${value}%`,
          backgroundColor: indicatorColor || 'var(--workday-blue)'
        }}
      />
    </div>
  )
)
Progress.displayName = "Progress"

export { Progress }
