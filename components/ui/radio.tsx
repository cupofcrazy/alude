
import * as React from "react";
import { Radio as RadioPrimitive } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react/radio-group";
import { cn } from "@/lib/utils";


type RadioProps = React.ComponentProps<typeof RadioPrimitive.Root>
type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive>

const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive className={cn(className)} {...props} />
  )
}

const Radio = ({ className, ...props }: RadioProps) => {
  return (
    <RadioPrimitive.Root className={cn(
        "relative flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-neutral-900 data-[checked]:bg-white data-[unchecked]:bg-white dark:data-[checked]:bg-neutral-800 dark:data-[unchecked]:bg-neutral-800 outline-1 -outline-offset-1 data-[checked]:outline-neutral-200 data-[unchecked]:outline-neutral-200 dark:data-[checked]:outline-neutral-700 dark:data-[unchecked]:outline-neutral-700",
        className
      )} {...props}>
          <RadioPrimitive.Indicator className="size-2.5 rounded-full bg-primary" />
      </RadioPrimitive.Root>
  )
}

export { Radio, RadioGroup };