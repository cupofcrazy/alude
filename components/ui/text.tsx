import * as React from "react"
import { cn } from "@/lib/utils"

type TextVariant = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type TextProps = {
  children: React.ReactNode
  as?: TextVariant
  className?: string
} & Omit<
  React.ComponentPropsWithoutRef<"p">,
  "as" | "className" | "children"
>

const textStyles = {
  p: "font-sans",
  span: "font-sans",
  h1: "font-serif text-4xl",
  h2: "font-serif text-3xl",
  h3: "font-serif text-2xl",
  h4: "font-serif text-xl",
  h5: "font-serif text-lg",
  h6: "font-serif text-base",
} as const

export const Text = ({ 
  as: Component = "p", 
  children, 
  className, 
  ...props 
}: TextProps) => {
  return (
    <Component
      {...props}
      className={cn("text-neutral-700 dark:text-white", textStyles[Component], className)}
    >
      {children}
    </Component>
  )
}

Text.displayName = "Text"
