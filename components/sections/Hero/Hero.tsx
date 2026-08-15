import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export default function Hero() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}
