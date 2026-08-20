import { motion } from "motion/react";
import { Quote } from "lucide-react";
import {
  TESTIMONIAL_HEADER_FADE_UP_ITEM,
  TESTIMONIAL_HEADER_STAGGER_CONTAINER,
} from "@/animations/sections/testimonials.variants";

export function TestimonialHeading() {
  return (
    <motion.div
      variants={TESTIMONIAL_HEADER_STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5, margin: "0px 0px -15% 0px" }}
      className="flex flex-col gap-1"
    >
      <motion.span
        variants={TESTIMONIAL_HEADER_FADE_UP_ITEM}
        className="font-serif text-sm leading-tight font-medium italic text-secondary sm:text-[18px]"
      >
        Testimonials
      </motion.span>
      <motion.h2
        variants={TESTIMONIAL_HEADER_FADE_UP_ITEM}
        className="font-serif text-2xl leading-tight font-bold text-secondary sm:text-[34px] lg:text-[40px]"
      >
        Customer Reviews
      </motion.h2>
      <Quote className="h-6 w-6 fill-primary text-primary sm:h-7 sm:w-7" strokeWidth={0} />
    </motion.div>
  );
}
