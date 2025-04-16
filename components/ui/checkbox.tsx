import { ComponentProps } from "react"
import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui-components/react/checkbox-group"
import { CheckIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

type CheckboxGroupProps = ComponentProps<typeof CheckboxGroupPrimitive>
type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>


const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root defaultChecked className={cn("flex size-5 items-center justify-center rounded-md border-2 border-blue-500 dark:border-blue-500 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 data-[checked]:bg-blue-300 data-[unchecked]:border-2 data-[unchecked]:border-gray-300 dark:data-[unchecked]:border-gray-600", className)} {...props}>
      <CheckboxPrimitive.Indicator className="flex text-gray-50 data-[checked]:flex data-[unchecked]:hidden data-[starting-style]:scale-0 data-[ending-style]:scale-100 transition-transform duration-300" >
        <CheckIcon className="size-3 stroke-white stroke-2" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => {
  return (
    <CheckboxGroupPrimitive className={cn("flex flex-col gap-2", className)} {...props} />
  )
}

export { Checkbox, CheckboxGroup }