import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { cn } from "@/lib/utils";


type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>

export const Switch = ({ className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "relative flex h-6 w-10 items-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 data-[checked]:bg-blue-500 data-[checked]:border-blue-500 data-[unchecked]:bg-neutral-200 dark:data-[checked]:bg-blue-500 dark:data-[checked]:border-blue-500 dark:data-[unchecked]:bg-neutral-800 dark:data-[unchecked]:border-neutral-700",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="mx-1 size-4 rounded-full bg-white data-[checked]:translate-x-3.5 transition-transform duration-300" />
    </SwitchPrimitive.Root>
  )
}


