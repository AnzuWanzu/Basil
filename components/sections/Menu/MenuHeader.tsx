import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MenuHeader() {
  return (
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
  );
}
