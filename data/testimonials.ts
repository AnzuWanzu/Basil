import type { StaticImageData } from "next/image";
import bryanFace from "@/components/assets/testimonials-section/face-icons/bryan-1.png";
import abbyFace from "@/components/assets/testimonials-section/face-icons/abby-1.png";
import zoeiFace from "@/components/assets/testimonials-section/face-icons/zoei-1.png";
import bryanCover from "@/components/assets/testimonials-section/cover-photos/bryans-1.jpg";
import abbyCover from "@/components/assets/testimonials-section/cover-photos/abbys-1.jpg";
import zoeiCover from "@/components/assets/testimonials-section/cover-photos/zoeis-1.jpg";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  face: StaticImageData;
  cover: StaticImageData;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Loved the ambiance and overall warm vibe of this place! Food is great and fresh. Definitely will come back again soon.",
    name: "Bryan Nicholas",
    role: "Customer",
    face: bryanFace,
    cover: bryanCover,
  },
  {
    quote:
      "Basil's has become our go-to spot for family dinners. The staff remembers our order and always makes us feel at home.",
    name: "Lovely Abigail",
    role: "Regular",
    face: abbyFace,
    cover: abbyCover,
  },
  {
    quote:
      "Every dish tastes like it was made with real care. You can tell the ingredients are fresh and locally sourced.",
    name: "Zoei Lynn",
    role: "Food Vlogger",
    face: zoeiFace,
    cover: zoeiCover,
  },
];
