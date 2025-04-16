import * as React from "react"
import { Menu } from '@base-ui-components/react/menu'
import { cn } from "@/lib/utils"


type DropdownProps = React.ComponentProps<typeof Menu.Root> & {
  trigger: React.ComponentProps<typeof Menu.Trigger>['render']
}
type DropdownItemProps = React.ComponentProps<typeof Menu.Item>
type DropdownTriggerProps = React.ComponentProps<typeof Menu.Trigger>
type DropdownPortalProps = React.ComponentProps<typeof Menu.Portal>

const Dropdown = ({ children, trigger, ...props }: DropdownProps) => {
  return (
    <Menu.Root {...props}>
      <Menu.Trigger render={trigger} />
      <Menu.Portal>
        <Menu.Positioner className="outline-none" sideOffset={8}>
          <Menu.Popup className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm rounded-2xl p-1 min-w-[200px]">
            {children}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}


const DropdownItem = ({ ...props }: DropdownItemProps) => {
  return (
    <Menu.Item className="cursor-pointer py-2 px-4 rounded-xl text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-700" {...props} />
  )
}

const DropdownSeparator = () => {
  return (
    <Menu.Separator className="h-[1px] bg-neutral-200 dark:bg-neutral-700 my-1" />
  )
}


const DropdownTrigger = ({ ...props }: DropdownTriggerProps) => {
  return (
    <Menu.Trigger {...props} />
  )
}

const DropdownPortal = ({ ...props }: DropdownPortalProps) => {
  return (
    <Menu.Portal {...props} />
  )
}

export { Dropdown, DropdownItem, DropdownTrigger, DropdownPortal, DropdownSeparator }