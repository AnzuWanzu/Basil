"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialHeading } from "./TestimonialHeading";
import { TestimonialContent } from "./TestimonialContent";
import { TestimonialPhoto } from "./TestimonialPhoto";

const TOTAL = TESTIMONIALS.length;

export default function Testimonials() {
  const [[active, direction], setActive] = useState<[number, number]>([0, 0]);
  const testimonial = TESTIMONIALS[active];

  function paginate(step: number) {
    setActive(([prev]) => [(prev + step + TOTAL) % TOTAL, step]);
  }

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
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
    </div>
  );
}
