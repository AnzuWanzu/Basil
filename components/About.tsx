"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HOURS = [
  { days: "Monday - Thursday", time: "10:30 AM - 10:00 PM" },
  { days: "Friday - Saturday", time: "10:30 AM - 10:00 PM" },
  { days: "Sunday", time: "10:30 AM - 10:00 PM" },
];

const TABS = [
  { key: "location", label: "Location & Hours" },
  { key: "chef", label: "Meet the Chef" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const TAB_TRIGGER_CLASS =
  "relative rounded-full px-4 py-2 font-sans text-sm font-medium text-stone-600 shadow-none transition-colors hover:text-stone-900 data-active:bg-transparent data-active:text-primary-foreground data-active:shadow-none dark:data-active:bg-transparent dark:data-active:border-transparent";

function LocationPane() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      {/* Map Placeholder */}
      <div className="relative w-full aspect-[4/3] md:aspect-auto md:min-h-[320px] rounded-2xl overflow-hidden bg-stone-300/60 shadow-lg">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-stone-600 bg-stone-200/50">
          <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="font-sans text-sm font-medium">Map Placeholder</span>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="flex flex-col gap-4 rounded-2xl bg-stone-900/5 p-6 md:p-8">
        <h3 className="font-serif text-xl font-bold text-stone-900">Opening Hours</h3>
        <div className="flex flex-col gap-3">
          {HOURS.map((h) => (
            <div
              key={h.days}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-[#F4EFE6] px-4 py-3"
            >
              <span className="font-sans text-sm font-medium text-stone-700">{h.days}</span>
              <span className="flex items-center gap-1.5 font-sans text-sm text-stone-600">
                <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {h.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChefPane() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-6 text-left items-stretch">
      {/* Chef Photo Placeholder */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-stone-300/60 shadow-lg mx-auto md:mx-0">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-stone-600 bg-stone-200/50">
          <svg className="w-10 h-10 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 20.25c0-4.142 3.358-6.75 7.5-6.75s7.5 2.608 7.5 6.75" />
          </svg>
          <span className="font-sans text-sm font-medium">Chef Photo Placeholder</span>
        </div>
      </div>

      {/* Chef Bio */}
      <div className="flex flex-col gap-3 rounded-2xl bg-stone-900/5 p-6 md:p-8">
        <span className="inline-block w-fit px-3 py-1 text-xs font-medium tracking-wider text-[#3e4a3a] uppercase bg-[#3e4a3a]/10 rounded-full">
          Executive Chef
        </span>
        <h3 className="font-serif text-xl font-bold text-stone-900">Chef Name Placeholder</h3>
        <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed">
          A short bio introducing the chef&apos;s background, culinary philosophy, and
          signature style goes here.
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const [active, setActive] = useState<TabKey>("location");
  const direction = active === "chef" ? 1 : -1;

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

      {/* Tabs: Location & Hours <-> Chef Info, panels slide past each other via Motion */}
      <Tabs
        value={active}
        onValueChange={(v) => setActive(v as TabKey)}
        className="w-full items-center gap-6"
      >
        <TabsList aria-label="About section content" className="h-auto gap-1 rounded-full bg-stone-900/5 p-1">
          {TABS.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key} className={TAB_TRIGGER_CLASS}>
              {active === tab.key && (
                <motion.span
                  layoutId="about-tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid w-full overflow-hidden">
          {TABS.map((tab) => (
            <TabsContent key={tab.key} value={tab.key} forceMount className="[grid-area:1/1]">
              <AnimatePresence initial={false} custom={direction}>
                {active === tab.key && (
                  <motion.div
                    custom={direction}
                    initial={{ x: `${direction * 40}px`, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: `${direction * -40}px`, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {tab.key === "location" ? <LocationPane /> : <ChefPane />}
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
