import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { Testimonial } from "@/data/testimonials";
import {
  TESTIMONIAL_SLIDE_TRANSITION,
  TESTIMONIAL_SLIDE_VARIANTS,
} from "@/animations/sections/testimonials.variants";

interface TestimonialPhotoProps {
  testimonial: Testimonial;
  activeKey: number;
  direction: number;
}

export function TestimonialPhoto({ testimonial, activeKey, direction }: TestimonialPhotoProps) {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl lg:flex-1">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={activeKey}
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
  );
}
