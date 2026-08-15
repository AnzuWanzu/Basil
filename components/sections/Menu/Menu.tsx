import { MENU_ITEMS } from "@/data/menu";
import { MenuHeader } from "./MenuHeader";
import { MenuItemCard } from "./MenuItemCard";

export default function Menu() {
  return (
    <div className="flex flex-col gap-10">
      <MenuHeader />

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
        {MENU_ITEMS.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
