import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import { cn } from "@/lib/utils";

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>
type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>
type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Popup>
type DialogBackdropProps = React.ComponentProps<typeof DialogPrimitive.Backdrop>
type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title>
type DialogDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>
type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>

const Dialog = ({ ...props }: DialogProps) => {
  return (
    <DialogPrimitive.Root {...props} />
  )
}

const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return (
    <DialogPrimitive.Trigger {...props} />
  )
}

const DialogContent = ({ ...props }: DialogContentProps) => {
  return (
    <DialogPrimitive.Portal {...props}>
      <DialogBackdrop />
      <DialogPrimitive.Popup
        {...props}
        className={cn("fixed top-1/2 left-1/2 z-50 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white dark:bg-neutral-800 p-6 text-neutral-900 dark:text-neutral-50 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0", props.className)}>
        {props.children}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  )
}

const DialogBackdrop = ({ ...props }: DialogBackdropProps) => {
  return (
    <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/50 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70" {...props} />
  )
}

const DialogTitle = ({ ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title {...props} />
  )
}

const DialogDescription = ({ ...props }: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description className="text-sm text-neutral-500 dark:text-neutral-400" {...props} />
  )
}

const DialogClose = ({ ...props }: DialogCloseProps) => {
  return (
    <DialogPrimitive.Close {...props} />
  )
}

export { Dialog, DialogTrigger, DialogContent, DialogBackdrop, DialogTitle, DialogDescription, DialogClose };