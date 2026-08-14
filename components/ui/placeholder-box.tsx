import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PlaceholderBoxProps {
  icon: ReactNode;
  label: string;
  className?: string;
  innerClassName?: string;
  labelClassName?: string;
}

export function PlaceholderBox({
  icon,
  label,
  className,
  innerClassName,
  labelClassName,
}: PlaceholderBoxProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-stone-300/60", className)}>
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center text-center text-stone-600 bg-stone-200/50",
          innerClassName
        )}
      >
        {icon}
        <span className={cn("font-sans text-sm font-medium", labelClassName)}>{label}</span>
      </div>
    </div>
  );
}
