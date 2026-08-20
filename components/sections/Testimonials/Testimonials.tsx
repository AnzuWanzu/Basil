"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialHeading } from "./TestimonialHeading";
import { TestimonialContent } from "./TestimonialContent";
import { TestimonialPhoto } from "./TestimonialPhoto";
import { TESTIMONIAL_BODY_STAGGER_CONTAINER } from "@/animations/sections/testimonials.variants";

const TOTAL = TESTIMONIALS.length;

export default function Testimonials() {
  const [[active, direction], setActive] = useState<[number, number]>([0, 0]);
  const testimonial = TESTIMONIALS[active];

  function paginate(step: number) {
    setActive(([prev]) => [(prev + step + TOTAL) % TOTAL, step]);
  }

  return (
    <motion.div
      variants={TESTIMONIAL_BODY_STAGGER_CONTAINER}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -15% 0px" }}
      className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16"
    >
      <div className="flex flex-col gap-5 text-left lg:w-[26rem] lg:shrink-0">
        <TestimonialHeading />
        <TestimonialContent
          testimonial={testimonial}
          activeKey={active}
          onPrev={() => paginate(-1)}
          onNext={() => paginate(1)}
        />
      </div>

      <TestimonialPhoto testimonial={testimonial} activeKey={active} direction={direction} />
    </motion.div>
  );
}
