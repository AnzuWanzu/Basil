import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Text & CTAs */}
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

        {/* RIGHT COLUMN: Image Container */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5] max-h-[65svh] rounded-2xl overflow-hidden bg-stone-300/60 shadow-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-stone-600 bg-stone-200/50">
              <svg className="w-12 h-12 mb-3 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-sans text-sm font-medium">Hero Image / Banner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}