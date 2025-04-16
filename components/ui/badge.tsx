import * as React from "react"
import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "rounded" | "secondary" | "tertiary"


type BadgeProps = {
  children: React.ReactNode
  variant?: BadgeVariant
}

export const Badge = ({ children, variant = "default" }: BadgeProps) => {
  const variantStyles = {
    default: "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-white border border-neutral-200 dark:border-neutral-800",
    rounded: "text-neutral-600 dark:text-white rounded-full",
    secondary: "bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-white border border-neutral-200 dark:border-neutral-700",
    tertiary: "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-white border border-neutral-200 dark:border-neutral-600",
  }
  return (
    <div className={cn("px-2 py-1 border rounded-xl", variantStyles[variant])}>
      {children}
    </div>
  )
}