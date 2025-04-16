import { Accordion as AccordionPrimitive } from "@base-ui-components/react/accordion"
import { PlusIcon } from "@/components/icons/plus"
import { cn } from "@/lib/utils"

type AccordionItem = {
  title: string
  content: React.ReactNode
}
type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & {
  items: AccordionItem[]
}

const Accordion = ({ className, items, ...props }: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      className={cn(
        "bg-white dark:bg-neutral-800 data-[state=open]:bg-muted rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-sm",
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <AccordionPrimitive.Item key={index} value={item.title} className="px-4 py-4 border-b border-neutral-200 dark:border-neutral-700 [&:last-child]:border-b-0">
          <AccordionPrimitive.Header className="">
            <AccordionPrimitive.Trigger className="flex items-center justify-between w-full group cursor-pointer">
              <h4 className="text-md font-medium text-neutral-900 dark:text-neutral-50">{item.title}</h4>
              <PlusIcon className="size-4 text-neutral-500 dark:text-neutral-400 group-data-[panel-open]:rotate-45 transition-transform duration-300" aria-label="Open" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Panel className="mt-2 text-neutral-600 dark:text-neutral-300 h-[var(--accordion-panel-height)] overflow-hidden transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            {item.content}  
          </AccordionPrimitive.Panel>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}

export { Accordion }