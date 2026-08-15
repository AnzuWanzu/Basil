"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TABS, type TabKey } from "@/data/about";
import { tabPillClassName, tabPillTransition } from "@/animations/variants";
import { aboutPaneVariants, aboutPaneTransition } from "@/animations/sections/about.variants";
import { LocationPane } from "./LocationPane";
import { ChefPane } from "./ChefPane";

export default function About() {
  const [active, setActive] = useState<TabKey>("location");

  return (
    <div className="flex flex-col items-center gap-10 text-center">
      {/* Heading & Description */}
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          About Basil
        </h2>
        <p className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed">
          Basil offers an elegant dining experience rooted in fresh, seasonal ingredients.
          Our menu, crafted by our team of chefs, blends traditional recipes with a modern,
          organic twist.
        </p>
      </div>

      {/* Tabs: Location & Hours <-> Chef Info, mirrors the Navbar's role=tablist/tab + Motion pill pattern */}
      <div className="w-full flex flex-col items-center gap-9">
        <div
          role="tablist"
          aria-label="About section content"
          className="flex items-center gap-1 p-1 rounded-full bg-stone-900/5 font-sans text-sm font-medium"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={active === tab.key}
              onClick={() => setActive(tab.key)}
              className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${
                active === tab.key ? "text-stone-100" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {active === tab.key && (
                <motion.span
                  layoutId="about-tab-pill"
                  className={tabPillClassName}
                  transition={tabPillTransition}
                />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="grid w-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              className="[grid-area:1/1]"
              initial={aboutPaneVariants.initial}
              animate={aboutPaneVariants.animate}
              exit={aboutPaneVariants.exit}
              transition={aboutPaneTransition}
            >
              {active === "location" ? <LocationPane /> : <ChefPane />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
