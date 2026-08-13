import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
};

function buildPlaceholderItems(count: number): MenuItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `item-${i + 1}`,
    name: `Dish Name Placeholder ${i + 1}`,
    description: "A short, flavorful description of this dish goes here.",
    price: "$0.00",
    rating: 4,
  }));
}

const ITEMS = buildPlaceholderItems(6);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-4 h-4 ${i < rating ? "text-[#3e4a3a]" : "text-stone-300"}`}
        >
          <path d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.83 4.401 4.753.381c.833.067 1.171 1.107.536 1.651l-3.62 3.102 1.106 4.637c.194.813-.689 1.454-1.4 1.02L10 15.591l-4.209 2.485c-.712.434-1.595-.207-1.4-1.02l1.106-4.637-3.62-3.102c-.635-.544-.297-1.584.536-1.651l4.753-.381 1.83-4.401z" />
        </svg>
      ))}
    </div>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Card className="group gap-0 rounded-2xl border-none bg-white/40 py-0 text-left shadow-sm ring-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      {/* Item Photo Placeholder */}
      <div className="relative w-full aspect-[4/3] bg-stone-300/60 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-stone-600 bg-stone-200/50 transition-transform duration-300 ease-out group-hover:scale-105">
          <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-sans text-xs sm:text-sm font-medium">Menu Item Photo</span>
        </div>
      </div>

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
        {ITEMS.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
