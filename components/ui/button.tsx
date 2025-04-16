import { cn } from '@/lib/utils'

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  rounded?: boolean
  isIcon?: boolean
}

export const Button = ({ children, variant = "primary", size = "md", rounded = false, isIcon = false, ...props }: ButtonProps) => {
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-transparent text-neutral-900 hover:bg-neutral-100",
    outline: "bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-800",
  }
  const sizeClasses = {
    sm: isIcon ? "p-1 w-8 h-8 text-sm" : "px-2 py-1 text-sm rounded-lg",
    md: isIcon ? "p-2 w-10 h-10 text-md" : "px-4 py-2 text-md rounded-xl",
    lg: isIcon ? "p-2 w-12 h-12 text-lg" : "px-5 py-2 text-lg rounded-2xl",
  }
  const roundedClasses = {
    true: "rounded-full",
    false: isIcon ? "rounded-lg" : "",
  }
  return (
    <button 
      {...props} 
      className={cn(
        "font-normal inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded ? "true" : "false"],
        props.className
      )}
    >
      {children}
    </button>
  )
}

type ButtonGroupProps = React.ComponentProps<"div"> & {
  children: React.ReactNode
}
export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <div className="flex flex-row items-center gap-2" {...props}>{children}</div>
}