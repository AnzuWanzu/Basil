import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-5 lg:col-span-7">
      <span className="inline-block px-3 py-1 text-xs 3xl:text-sm font-medium tracking-wider text-[#3e4a3a] uppercase bg-[#3e4a3a]/10 rounded-full">
        Fresh • Organic • Seasonal
      </span>

      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl 3xl:text-7xl font-bold text-stone-900 leading-[1.15] tracking-tight">
        Crafted with passion, served with love.
      </h1>

      <p className="font-sans text-base sm:text-lg 3xl:text-xl text-stone-600 max-w-xl 3xl:max-w-2xl leading-relaxed">
        Experience warm hospitality and fresh, seasonal flavors inspired by traditional recipes with a modern twist.
      </p>

      <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
        <Button asChild className="w-full sm:w-auto 3xl:text-lg">
          <Link href="#menu">Explore Menu</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full sm:w-auto 3xl:text-lg border-stone-400 text-stone-800 hover:border-stone-800 hover:bg-transparent hover:text-stone-800"
        >
          <Link href="#reserve">Book a Table</Link>
        </Button>
      </div>
    </div>
  );
}
