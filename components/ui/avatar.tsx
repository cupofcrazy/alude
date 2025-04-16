import { Avatar as AvatarPrimitive } from "@base-ui-components/react/avatar"
import { cn } from '@/lib/utils'


type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Image> & {
  fallback: string
  size?: "sm" | "md" | "lg"
}
type AvatarImageProps = React.ComponentProps<typeof AvatarPrimitive.Image>
type AvatarFallbackProps = React.ComponentProps<typeof AvatarPrimitive.Fallback>

const Avatar = ({ className, fallback, size = "md", ...props }: AvatarProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  }
  return (
    <AvatarPrimitive.Root className={cn(
      "relative flex shrink-0 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-800",
      sizeClasses[size],
      className
    )}
    >
      <AvatarImage {...props} />
      <AvatarFallback className="text-neutral-600 select-none">{fallback}</AvatarFallback>
    </AvatarPrimitive.Root>
  )
}

const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      className={cn(
        "object-cover",
        className
      )}
      loading="lazy"
      referrerPolicy="no-referrer"
      {...props}
    />
  )
}

const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
}


export { Avatar, type AvatarProps }