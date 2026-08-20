import { Briefcase, Cake, Heart, Sparkles, UtensilsCrossed } from "lucide-react";

const OCCASIONS = [
  { key: "dining", label: "Just Dining", icon: UtensilsCrossed },
  { key: "birthday", label: "Birthday", icon: Cake },
  { key: "anniversary", label: "Anniversary", icon: Heart },
  { key: "business", label: "Business", icon: Briefcase },
  { key: "other", label: "Other", icon: Sparkles },
] as const;

export type Occasion = (typeof OCCASIONS)[number]["key"];

interface OccasionPickerProps {
  value: Occasion;
  onChange: (value: Occasion) => void;
}

export function OccasionPicker({ value, onChange }: OccasionPickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-sans text-xs font-medium tracking-wide text-stone-500 uppercase 3xl:text-sm">
        Occasion
      </span>
      <div className="flex flex-wrap gap-2 3xl:gap-3">
        {OCCASIONS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={value === key}
            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 font-sans text-sm font-medium transition-colors 3xl:px-4 3xl:py-2.5 3xl:text-base ${
              value === key
                ? "border-primary bg-primary/10 text-primary"
                : "border-stone-900/15 text-stone-600 hover:bg-stone-900/5"
            }`}
          >
            <Icon className="h-3.5 w-3.5 3xl:h-4 3xl:w-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
