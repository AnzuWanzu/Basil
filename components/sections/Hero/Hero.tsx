import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { HeroSocials } from "./HeroSocials";

export default function Hero() {
  return (
    <section className="relative w-full h-full flex items-center">
      <div
        className="relative z-10 flex w-full h-full items-center gap-8 px-5 md:px-16 lg:px-[130px] pb-16 md:pb-20 lg:pb-16"
        style={{ paddingTop: "calc(var(--header-h) + 35px)" }}
      >
        <HeroSocials />

        <div className="grid flex-1 grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
