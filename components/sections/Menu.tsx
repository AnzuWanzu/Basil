import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceholderBox } from "@/components/ui/placeholder-box";
import { StarRating } from "@/components/ui/star-rating";
import { MENU_ITEMS, type MenuItem } from "@/data/menu";

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Card className="group gap-0 rounded-2xl border-none bg-white/40 py-0 text-left shadow-sm ring-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      {/* Item Photo Placeholder */}
      <PlaceholderBox
        className="aspect-[4/3]"
        innerClassName="gap-2 p-4 transition-transform duration-300 ease-out group-hover:scale-105"
        labelClassName="text-xs sm:text-sm"
        icon={
          <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
        label="Menu Item Photo"
      />

      {/* Item Details */}
      <CardContent className="flex flex-col gap-2 px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">{item.name}</h3>
        <p className="font-sans text-sm text-stone-600 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <StarRating rating={item.rating} />
          <span className="font-sans text-sm sm:text-base font-semibold text-[#3e4a3a]">
            {item.price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Menu() {
  return (
    <div className="flex flex-col gap-10">
      {/* Section Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3 max-w-xl">
          <h2 className="font-serif text-3xl sm:text-4xl 3xl:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Indulge in our Exquisite Favorites
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed">
            Discover a symphony of tastes with our handpicked favorites that promise to
            delight your senses.
          </p>
        </div>
        <Button asChild className="shrink-0">
          <Link href="#reserve">Reserve a Table</Link>
        </Button>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
        {MENU_ITEMS.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
