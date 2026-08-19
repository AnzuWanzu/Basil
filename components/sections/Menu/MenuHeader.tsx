import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MenuHeader() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-3 max-w-xl">
        <h2 className="font-serif font-normal text-stone-900 tracking-tight leading-tight">
          <span className="text-2xl sm:text-3xl 3xl:text-4xl">Indulge in our Exquisite</span>{" "}
          <span className="text-4xl sm:text-5xl 3xl:text-6xl font-bold italic text-secondary">Favorites</span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed">
          Discover our chef's selection of tastes with our handpicked favorites that promise to
          delight your senses.
        </p>
      </div>
      <Button asChild className="shrink-0">
        <Link href="#reserve">Reserve a Table</Link>
      </Button>
    </div>
  );
}
