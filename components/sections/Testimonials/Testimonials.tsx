"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import {
  TESTIMONIAL_SLIDE_TRANSITION,
  TESTIMONIAL_SLIDE_VARIANTS,
  TESTIMONIAL_TEXT_VARIANTS,
  TESTIMONIAL_TRANSITION,
} from "@/animations/sections/testimonials.variants";

const TOTAL = TESTIMONIALS.length;

export default function Testimonials() {
  const [[active, direction], setActive] = useState<[number, number]>([0, 0]);
  const testimonial = TESTIMONIALS[active];

  function paginate(step: number) {
    setActive(([prev]) => [(prev + step + TOTAL) % TOTAL, step]);
  }

  function handlePrev() {
    paginate(-1);
  }

  function handleNext() {
    paginate(1);
  }

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex flex-col gap-5 text-left lg:w-[26rem] lg:shrink-0">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-sm leading-tight font-medium italic text-secondary sm:text-[18px]">Testimonials</span>
          <h2 className="font-serif text-2xl leading-tight font-bold text-secondary sm:text-[34px] lg:text-[40px]">Customer Reviews</h2>
          <Quote className="h-6 w-6 fill-primary text-primary sm:h-7 sm:w-7" strokeWidth={0} />
        </div>

        <div className="relative min-h-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={TESTIMONIAL_TEXT_VARIANTS}
              transition={TESTIMONIAL_TRANSITION}
              className="flex flex-col gap-6"
            >
              <p className="font-serif text-base leading-relaxed text-stone-700 italic sm:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full">
                    <Image src={testimonial.face} alt={testimonial.name} fill unoptimized className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-sm font-semibold text-stone-900">
                      {testimonial.name}
                    </span>
                    <span className="font-sans text-xs text-stone-500">{testimonial.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-900/15 text-stone-700 transition hover:bg-stone-900/5"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-900/15 text-stone-700 transition hover:bg-stone-900/5"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl lg:flex-1">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={active}
            custom={direction}
            variants={TESTIMONIAL_SLIDE_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={TESTIMONIAL_SLIDE_TRANSITION}
            className="absolute inset-0"
          >
            <Image
              src={testimonial.cover}
              alt={`${testimonial.name} at Basil's`}
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
