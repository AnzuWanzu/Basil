import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { Testimonial } from "@/data/testimonials";
import {
  TESTIMONIAL_BODY_FADE_UP_ITEM,
  TESTIMONIAL_TEXT_ITEM,
} from "@/animations/sections/testimonials.variants";
import { NavArrowButton } from "@/components/ui/nav-arrow-button";

interface TestimonialContentProps {
  testimonial: Testimonial;
  activeKey: number;
  onPrev: () => void;
  onNext: () => void;
}

export function TestimonialContent({ testimonial, activeKey, onPrev, onNext }: TestimonialContentProps) {
  return (
    <motion.div variants={TESTIMONIAL_BODY_FADE_UP_ITEM} className="relative min-h-36">
      <div className="flex flex-col gap-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeKey}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={TESTIMONIAL_TEXT_ITEM}
            className="font-serif text-base leading-relaxed text-stone-700 italic sm:text-lg"
          >
            &ldquo;{testimonial.quote}&rdquo;
          </motion.p>
        </AnimatePresence>

        <div className="flex items-center justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={TESTIMONIAL_TEXT_ITEM}
              className="flex items-center gap-3"
            >
              <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full">
                <Image src={testimonial.face} alt={testimonial.name} fill unoptimized className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm font-semibold text-stone-900">{testimonial.name}</span>
                <span className="font-sans text-xs text-stone-500">{testimonial.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <NavArrowButton direction="prev" onClick={onPrev} label="Previous testimonial" />
            <NavArrowButton direction="next" onClick={onNext} label="Next testimonial" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
