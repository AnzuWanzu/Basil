import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-6 lg:col-span-7">
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl 3xl:text-7xl font-bold leading-[1.15] tracking-tight text-background">
        Fresh food,{" "}
        <span className="font-normal italic text-primary">made to</span>
        <br />
        <span className="font-normal italic text-accent-teal">linger</span>{" "}
        <span className="font-normal italic text-primary">over.</span>
      </h1>

      <p className="font-sans text-base sm:text-lg 3xl:text-xl text-background/80 max-w-xl 3xl:max-w-2xl leading-relaxed">
        Experience warm hospitality and fresh, seasonal flavors inspired by traditional recipes with a modern twist.
      </p>

      <Button asChild className="3xl:text-lg">
        <Link href="#menu">See Menu</Link>
      </Button>
    </div>
  );
}
