"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import { HERO_FADE_UP_ITEM } from "@/animations/sections/hero.variants";

export function HeroContent() {
  return (
    <div className="flex flex-col items-start gap-6 lg:col-span-7">
      <motion.h1
        variants={HERO_FADE_UP_ITEM}
        className="font-serif text-4xl sm:text-5xl lg:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl font-bold leading-[1.15] tracking-tight text-background"
      >
        Fresh food,{" "}
        <span className="font-normal italic text-primary-light whitespace-nowrap">made to</span>
        <br />
        <span className="font-normal italic text-accent-teal">linger</span>{" "}
        <span className="font-normal italic text-primary-light">over.</span>
      </motion.h1>

      <motion.p
        variants={HERO_FADE_UP_ITEM}
        className="font-sans text-base sm:text-lg 3xl:text-xl 4xl:text-2xl text-background/80 max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl leading-relaxed"
      >
        Experience warm hospitality and fresh, seasonal flavors inspired by traditional recipes with a modern twist.
      </motion.p>

      <motion.div variants={HERO_FADE_UP_ITEM}>
        <Button asChild className="3xl:text-lg 3xl:px-8 3xl:py-4 4xl:text-xl 4xl:px-10 4xl:py-5 5xl:text-2xl 5xl:px-12 5xl:py-6">
          <Link
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("menu");
            }}
          >
            See Menu
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
