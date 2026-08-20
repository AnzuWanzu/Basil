import { Quote } from "lucide-react";

export function TestimonialHeading() {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-serif text-sm leading-tight font-medium italic text-secondary sm:text-[18px]">
        Testimonials
      </span>
      <h2 className="font-serif text-2xl leading-tight font-bold text-secondary sm:text-[34px] lg:text-[40px]">
        Customer Reviews
      </h2>
      <Quote className="h-6 w-6 fill-primary text-primary sm:h-7 sm:w-7" strokeWidth={0} />
    </div>
  );
}
