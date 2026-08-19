import type { StaticImageData } from "next/image";
import storyPhoto1 from "@/components/assets/about-section/1.jpg";
import storyPhoto2 from "@/components/assets/about-section/2.jpg";
import storyPhoto3 from "@/components/assets/about-section/3.jpg";
import storyPhoto4 from "@/components/assets/about-section/4.jpg";

export const HOURS = [
  { days: "Monday - Thursday", time: "10:30 AM - 10:00 PM" },
  { days: "Friday - Saturday", time: "10:30 AM - 10:00 PM" },
  { days: "Sunday", time: "10:30 AM - 10:00 PM" },
];

export interface AboutStoryCard {
  image: StaticImageData;
  alt: string;
  caption: string;
  /** Substring of `caption` to render with emphasis. */
  emphasis: string;
}

export const ABOUT_STORY: AboutStoryCard[] = [
  {
    image: storyPhoto1,
    alt: "Picture of a coffee with art in the foam, next to a plate of food",
    caption:
      "Coffee made with love and artisan care, paired with Basil's delicious homemade pastries.",
    emphasis: "local farmers we know by name",
  },
  {
    image: storyPhoto2,
    alt: "Lots of food.",
    caption:
      "Our restaurant offers buffet style dining with a wide variety of dishes, from classic comfort foods to innovative creations.",
    emphasis: "modern, organic twist",
  },
  {
    image: storyPhoto3,
    alt: "Nature stuff",
    caption:
      "Enjoy the beauty of the outdoors while dining at Basil's, with our spacious patio and garden seating.",
    emphasis: "coming home",
  },
  {
    image: storyPhoto4,
    alt: "Profile picture of my beautiful chef and mom.",
    caption:
      "Basil's master chef, Corazon Samson Savage. Brings farm to table meals to life with her passion for fresh, honest cooking.",
    emphasis: "fresh, honest cooking",
  },
];
