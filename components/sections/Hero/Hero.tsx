import Image from "next/image";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { HeroSocials } from "./HeroSocials";
import heroBg from "@/components/assets/hero-section/hero-section-bg.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-full min-h-[70svh] flex items-center overflow-hidden">
      <Image src={heroBg} alt="" fill priority unoptimized className="object-cover" />
      <div className="absolute inset-0 bg-foreground/85" />

      <div className="relative z-10 flex w-full items-center gap-8 px-5 md:px-16 lg:px-[130px] py-16 md:py-20 lg:py-0">
        <HeroSocials />

        <div className="grid flex-1 grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
