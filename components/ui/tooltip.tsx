import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";
import { cn } from "@/lib/utils";

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root>
type TooltipTriggerProps = React.ComponentProps<typeof TooltipPrimitive.Trigger>
type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Popup> & {
  options?: React.ComponentProps<typeof TooltipPrimitive.Positioner>
}

const Tooltip = (props: TooltipProps) => {
  return <TooltipPrimitive.Root {...props} />
}

const TooltipTrigger = (props: TooltipTriggerProps) => {
  return <TooltipPrimitive.Trigger {...props} />
}

const TooltipContent = (props: TooltipContentProps) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner sideOffset={8} {...props.options}>
        <TooltipPrimitive.Popup {...props} className={cn("relative z-[9999] bg-neutral-900 dark:bg-neutral-800 text-white px-3 py-1.5 rounded-xl font-medium border border-neutral-700 dark:border-neutral-700 transition-[transform,scale,opacity] data-[ending-style]:scale-[0.98] data-[ending-style]:opacity-0 data-[starting-style]:scale-[0.98] data-[starting-style]:opacity-0", props.className)} />
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent };
