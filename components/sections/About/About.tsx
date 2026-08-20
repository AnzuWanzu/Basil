"use client";

import { motion } from "motion/react";
import { AboutStory } from "./AboutStory";
import { ABOUT_FADE_UP_ITEM, ABOUT_STAGGER_CONTAINER } from "@/animations/sections/about.variants";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-4 text-center -mt-8 -mb-12 md:-mt-12 md:-mb-16">
      {/* Heading & Description */}
      <motion.div
        variants={ABOUT_STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5, margin: "0px 0px -15% 0px" }}
        className="flex flex-col items-center gap-4 max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl"
      >
        <motion.h2
          variants={ABOUT_FADE_UP_ITEM}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl 4xl:text-5xl font-normal text-stone-900 tracking-tight leading-tight"
        >
          Get familiar with <span className="font-bold italic text-secondary">Basil&apos;s.</span>
          <br />
          Something <span className="font-bold text-primary">new</span> in every bite.
        </motion.h2>
        <motion.p
          variants={ABOUT_FADE_UP_ITEM}
          className="font-sans text-sm sm:text-base 4xl:text-xl text-stone-600 leading-relaxed"
        >
          Basil offers an elegant dining experience rooted in fresh, seasonal ingredients.
          Our menu, crafted by our team of chefs, blends traditional recipes with a modern,
          organic twist.
        </motion.p>
      </motion.div>

      <AboutStory />
    </div>
  );
}
