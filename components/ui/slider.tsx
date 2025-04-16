import * as React from "react";
import { Slider as SliderPrimitive } from "@base-ui-components/react/slider";

type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root>

const Slider = (props: SliderProps) => {
  return (
    <SliderPrimitive.Root {...props}>
     <SliderPrimitive.Control className="relative flex w-56 h-2 items-center">
      <SliderPrimitive.Track className="relative flex-1 h-full bg-neutral-200 dark:bg-neutral-800 rounded-full">
        <SliderPrimitive.Indicator className="absolute h-full bg-primary rounded-full" />
        <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border border-neutral-200 shadow-sm rounded-full" />
      </SliderPrimitive.Track>
     </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}


export { Slider };