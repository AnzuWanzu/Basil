import Image from "next/image";
import dishPhoto from "@/components/assets/hero-section/dish-main-hero.png";
import leafDecoration from "@/components/assets/hero-section/leaf.png";

export function HeroImage() {
  return (
    <div className="relative hidden lg:col-span-5 lg:flex items-center justify-start py-8 lg:py-0">
      <div className="relative aspect-square w-full max-w-md lg:max-w-lg">
        {/* Decorative ring, offset up-left of the photo (not a concentric halo) */}
        <div className="absolute -left-[13%] -top-[2%] h-[96%] w-[96%] rounded-full border border-background/40" />

        {/* Leaf sits behind the dish photo — only its overflow past the circle is visible */}
        <Image
          src={leafDecoration}
          alt=""
          unoptimized
          className="absolute -right-6 top-1/2 w-24 sm:w-28 h-auto -translate-y-1/3 drop-shadow-xl"
        />

        <div className="relative h-full w-full overflow-hidden rounded-full shadow-2xl">
          <Image src={dishPhoto} alt="Signature dish" fill unoptimized className="object-cover" />
        </div>
      </div>
    </div>
  );
}
