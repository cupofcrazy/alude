import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CustomImageProps = Omit<React.ComponentProps<typeof Image>, 'className'> & {
  className?: string;
};

export function CustomImage({ className, ...props }: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        {...props}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
} 