"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MENU_ITEMS, type MenuCategory } from "@/data/menu";
import { MENU_GRID_VARIANTS, MENU_ITEM_TRANSITION, MENU_ITEM_VARIANTS } from "@/animations/sections/menu.variants";
import { MenuHeader } from "./MenuHeader";
import { MenuNav } from "./MenuNav";
import { MenuItemCard } from "./MenuItemCard";

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>("lunch");
  const items = MENU_ITEMS.filter((item) => item.category === active);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const canScroll = items.length > 4;

  function scrollByPage(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col gap-10">
      <MenuHeader />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <MenuNav active={active} onSelect={setActive} />

        <div className="relative min-w-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              ref={scrollerRef}
              variants={MENU_GRID_VARIANTS}
              initial="initial"
              animate="animate"
              exit="exit"
              className="-m-4 grid grid-flow-col auto-cols-[80%] gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory p-4 sm:auto-cols-[calc((100%-1.5rem)/2)] sm:gap-6 lg:auto-cols-[calc((100%-2*2rem)/3)] lg:gap-8 lg:overflow-hidden xl:auto-cols-[calc((100%-3*2rem)/4)]"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={MENU_ITEM_VARIANTS}
                  transition={MENU_ITEM_TRANSITION}
                  className="h-full snap-start"
                >
                  <MenuItemCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {canScroll && (
            <>
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                aria-label="Scroll menu left"
                className="absolute top-1/2 -left-20 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone-900/15 bg-background text-stone-700 shadow-md transition hover:bg-stone-900/5 lg:flex"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                aria-label="Scroll menu right"
                className="absolute top-1/2 -right-20 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone-900/15 bg-background text-stone-700 shadow-md transition hover:bg-stone-900/5 lg:flex"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
