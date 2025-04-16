import * as React from "react";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { CentralChevronTriangleDownSmallFilledOnStroke2Radius3, CentralColumnWide, CheckIcon, CircleCheckFilled } from "@/components/icons";

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>
type SelectTriggerProps = React.ComponentProps<typeof SelectPrimitive.Trigger>  
type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Portal> & {
  options: React.ComponentProps<typeof SelectPrimitive.Positioner>
}
type SelectValueProps = React.ComponentProps<typeof SelectPrimitive.Value>
type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>


function Select({ ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      {props.children}
    </SelectPrimitive.Root>
  )
}

const SelectItem = ({ ...props }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item className="grid grid-cols-[16px_1fr] items-center outline-none min-w-42 p-2 gap-2 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-xl focus:bg-neutral-100 dark:focus:bg-neutral-700" {...props}>
      <SelectPrimitive.ItemIndicator className="col-start-1">
        <CircleCheckFilled className="size-4" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="col-start-2">{props.children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

const SelectValue = ({ ...props }: SelectValueProps) => {
  return (
    <SelectPrimitive.Value {...props} />
  )
}


const SelectTrigger = ({ ...props }: SelectTriggerProps) => {
  return (
    <SelectPrimitive.Trigger className="flex h-10 min-w-36 items-center justify-between gap-3 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 pr-2 pl-3 text-gray-900 dark:text-neutral-50 select-none hover:bg-neutral-100 dark:hover:bg-neutral-700 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-neutral-100 dark:active:bg-neutral-800 data-[popup-open]:bg-neutral-100 dark:data-[popup-open]:bg-neutral-800" {...props}>
      {props.children}
      <CentralChevronTriangleDownSmallFilledOnStroke2Radius3 className="size-6" />
    </SelectPrimitive.Trigger>
  )
}

const SelectContent = ({ options, ...props }: SelectContentProps) => {
  return (
    <SelectPrimitive.Portal {...props}>
      <SelectPrimitive.Positioner sideOffset={8} className="outline-none" {...options}>
        <SelectPrimitive.Popup className="outline-none bg-white dark:bg-neutral-800 rounded-2xl p-1 border border-neutral-200 dark:border-neutral-700 shadow-sm">
          {props.children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}



  export { Select, SelectTrigger, SelectContent, SelectValue, SelectItem };

