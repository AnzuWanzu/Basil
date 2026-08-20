import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANT_CLASS = {
  light: "border-stone-900/15 text-stone-700 hover:bg-stone-900/5",
  dark: "border-background/30 text-background hover:bg-background/10",
  surface: "border-stone-900/15 bg-background text-stone-700 shadow-md hover:bg-stone-900/5",
} as const;

interface NavArrowButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  variant?: keyof typeof VARIANT_CLASS;
  className?: string;
  iconClassName?: string;
}

export function NavArrowButton({
  direction,
  onClick,
  label,
  variant = "light",
  className,
  iconClassName,
}: NavArrowButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border transition",
        VARIANT_CLASS[variant],
        className
      )}
    >
      <Icon className={cn("h-4 w-4", iconClassName)} />
    </button>
  );
}
