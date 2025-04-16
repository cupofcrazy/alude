import * as React from "react";

import { cn } from "@/lib/utils";


type InputProps = React.ComponentProps<"input"> & {
  variant?: "default" | "outline";
}

function Input({ className, type, variant = "default", ...props }: InputProps) {
  const variantStyles = {
    default: "border-neutral-200 bg-neutral-100 dark:bg-neutral-800",
    outline: "border border-neutral-200 dark:border-neutral-700 dark:text-neutral-50 bg-white dark:bg-transparent",
  }

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "rounded-xl py-2 px-3 outline-none text-neutral-900 dark:text-neutral-50 placeholder:text-neutral-500 dark:placeholder:text-neutral-600",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Input };