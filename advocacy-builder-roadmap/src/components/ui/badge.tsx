import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--workday-blue)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--workday-blue)] text-white",
        secondary:
          "border-transparent bg-[var(--workday-gray-100)] text-[var(--workday-gray-900)]",
        destructive:
          "border-transparent bg-[var(--workday-red)] text-white",
        outline: "text-[var(--workday-gray-900)]",
        success:
          "border-transparent bg-[var(--workday-green)] text-white",
        warning:
          "border-transparent bg-[var(--workday-orange)] text-white",
        purple:
          "border-transparent bg-[var(--workday-purple)] text-white",
        teal:
          "border-transparent bg-[var(--workday-teal)] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
