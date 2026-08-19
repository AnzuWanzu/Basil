import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import type { MenuItem } from "@/data/menu";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Card className="group h-full gap-0 rounded-2xl border-none bg-white/40 py-0 text-left shadow-sm ring-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      {/* Item Photo */}
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-t-2xl">
        <Image
          src={item.image}
          alt={item.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      {/* Item Details */}
      <CardContent className="flex flex-1 flex-col gap-2 px-4 py-4 sm:px-5 sm:py-5">
        <h3 className="line-clamp-2 font-serif text-lg sm:text-xl font-bold text-stone-900">{item.name}</h3>
        <p className="font-sans text-sm text-stone-600 leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <StarRating rating={item.rating} />
          <span className="font-sans text-sm sm:text-base font-semibold text-secondary">
            {item.price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
