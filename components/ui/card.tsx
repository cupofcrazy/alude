import * as React from "react"
import { cn } from "@/lib/utils"

type CardProps =  React.ComponentProps<"div"> & {
  variant?: "primary" | "secondary" | "outline"
}

export const Card = ({ children, variant = "primary", className, ...props }: CardProps) => {
  const variantClasses = {
    primary: "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 shadow-sm",
    secondary: "bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-none",
    outline: "border-neutral-300 dark:border-neutral-700",
  }
  return (
    <div {...props} className={cn("rounded-3xl p-4 shadow-sm", variantClasses[variant], className)}>{children}</div>
  )
}
