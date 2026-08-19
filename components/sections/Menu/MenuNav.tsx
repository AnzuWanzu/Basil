import { MENU_CATEGORIES, type MenuCategory } from "@/data/menu";

interface MenuNavProps {
  active: MenuCategory;
  onSelect: (category: MenuCategory) => void;
}


export function MenuNav({ active, onSelect }: MenuNavProps) {
  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      className="flex shrink-0 flex-row gap-2 overflow-x-auto lg:w-40 lg:flex-col lg:gap-1 lg:overflow-visible 3xl:w-48"
    >
      {MENU_CATEGORIES.map((category) => (
        <button
          key={category.key}
          type="button"
          role="tab"
          aria-selected={active === category.key}
          onClick={() => onSelect(category.key)}
          className={`shrink-0 rounded-full px-4 py-2 text-left font-sans text-sm font-medium transition-colors duration-300 lg:rounded-none lg:border-l-2 lg:py-2 lg:pl-4 3xl:text-base ${
            active === category.key
              ? "bg-primary/10 text-primary lg:bg-transparent lg:border-primary"
              : "text-stone-500 hover:text-stone-900 lg:border-stone-900/10"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
