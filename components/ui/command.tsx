import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

const Command = ({ className, ...props }: React.ComponentPropsWithRef<typeof CommandPrimitive>) => (
  <CommandPrimitive
    className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white dark:bg-neutral-800"
    {...props}
  />
)
Command.displayName = CommandPrimitive.displayName



const CommandDialog = ({ children, ...props }: React.ComponentPropsWithRef<typeof CommandPrimitive.Dialog>) => {
  return (
    <CommandPrimitive.Dialog className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white dark:bg-neutral-800 p-0 shadow-2xl border border-neutral-200 dark:border-neutral-700" {...props}>
      {children}
    </CommandPrimitive.Dialog>
  )
}

const CommandInput = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof CommandPrimitive.Input>) => (
  <div className="flex items-center border-b border-neutral-200 dark:border-neutral-700 px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-neutral-500 dark:text-neutral-400" />
    <CommandPrimitive.Input
      ref={ref}
      className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm text-neutral-900 dark:text-neutral-50 outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  </div>
)

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List
    ref={ref}
    className="max-h-[300px] overflow-y-auto overflow-x-hidden"
    {...props}
  />
)
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm text-neutral-500 dark:text-neutral-400"
    {...props}
  />
)
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group
    ref={ref}
    className="overflow-hidden p-2 text-neutral-900 dark:text-neutral-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-500 dark:[&_[cmdk-group-heading]]:text-neutral-400"
    {...props}
  />
)
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator
    ref={ref}
    className="mx-1 h-px bg-neutral-200 dark:bg-neutral-700"
    {...props}
  />
)
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = ({ className, ref, ...props }: React.ComponentPropsWithRef<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item
    {...props}
    ref={ref}
    className={cn("relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none aria-selected:bg-neutral-100 dark:aria-selected:bg-neutral-700 aria-disabled:pointer-events-none aria-disabled:opacity-50", className)}
  />
)
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.ComponentProps<"span">) => {
  return (
    <span
      className="ml-auto text-xs tracking-widest text-neutral-500 dark:text-neutral-400"
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
} 