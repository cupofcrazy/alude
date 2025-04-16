import * as React from "react";
import { PreviewCard as PreviewCardPrimitive } from "@base-ui-components/react/preview-card";
import { cn } from "@/lib/utils";


type PreviewCardProps = React.ComponentProps<typeof PreviewCardPrimitive.Root>
type PreviewCardTriggerProps = React.ComponentProps<typeof PreviewCardPrimitive.Trigger>
type PreviewCardContentProps = React.ComponentProps<typeof PreviewCardPrimitive.Popup> & {
  options?: React.ComponentProps<typeof PreviewCardPrimitive.Positioner>
}


const PreviewCard = ({ ...props }: PreviewCardProps) => {
  return (
    <PreviewCardPrimitive.Root {...props}>
      {props.children}
    </PreviewCardPrimitive.Root>
  )
}


const PreviewCardTrigger = ({ ...props }: PreviewCardTriggerProps) => {
  return (
    <PreviewCardPrimitive.Trigger {...props} />
  )
}

const PreviewCardContent = ({ ...props }: PreviewCardContentProps) => {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Backdrop />
      <PreviewCardPrimitive.Positioner {...props.options}>
        <PreviewCardPrimitive.Popup className={cn("max-w-[300px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm rounded-2xl p-2 transition-[transform,scale,opacity] data-[ending-style]:scale-[0.95] data-[ending-style]:opacity-0 data-[starting-style]:scale-[0.95] data-[starting-style]:opacity-0", props.className)} {...props}>
          {props.children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}




export { PreviewCard, PreviewCardTrigger, PreviewCardContent };