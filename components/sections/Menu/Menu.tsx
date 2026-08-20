"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MENU_ITEMS, type MenuCategory } from "@/data/menu";
import {
  MENU_BODY_FADE_UP_ITEM,
  MENU_BODY_STAGGER_CONTAINER,
  MENU_GRID_VARIANTS,
  MENU_ITEM_TRANSITION,
  MENU_ITEM_VARIANTS,
} from "@/animations/sections/menu.variants";
import { NavArrowButton } from "@/components/ui/nav-arrow-button";
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

      <motion.div
        variants={MENU_BODY_STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
        className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10"
      >
        <MenuNav active={active} onSelect={setActive} />

        <motion.div variants={MENU_BODY_FADE_UP_ITEM} className="relative min-w-0 flex-1">
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
              <NavArrowButton
                direction="prev"
                onClick={() => scrollByPage(-1)}
                label="Scroll menu left"
                variant="surface"
                className="absolute top-1/2 -left-20 z-10 hidden -translate-y-1/2 lg:flex"
              />
              <NavArrowButton
                direction="next"
                onClick={() => scrollByPage(1)}
                label="Scroll menu right"
                variant="surface"
                className="absolute top-1/2 -right-20 z-10 hidden -translate-y-1/2 lg:flex"
              />
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
