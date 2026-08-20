import Image from "next/image";
import basilsLogoLight from "@/components/assets/logos/basils-logo-lightmode.png";
import basilsLogoDark from "@/components/assets/logos/basils-logo-darkmode.png";

export function Logo({ variant }: { variant: "light" | "dark" }) {
  const src = variant === "dark" ? basilsLogoDark : basilsLogoLight;
  return <Image src={src} alt="Basil's" className="h-10 w-auto md:h-12 3xl:h-14 4xl:h-16 5xl:h-20" priority />;
}
