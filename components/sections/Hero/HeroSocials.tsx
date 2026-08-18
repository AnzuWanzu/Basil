import { MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { SOCIAL_LINKS } from "@/data/contacts";

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  maps: MapPin,
} as const;

export function HeroSocials() {
  return (
    <div className="hidden lg:flex shrink-0 flex-col items-center gap-4">
      <span className="h-16 w-px bg-background/40" />
      <div className="flex flex-col items-center gap-4">
        {SOCIAL_LINKS.map((link) => {
          const Icon = SOCIAL_ICONS[link.key];
          return (
            <a
              key={link.key}
              href={link.href}
              aria-label={link.label}
              className="text-background/80 transition hover:scale-125 hover:text-background"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
      <span className="h-16 w-px bg-background/40" />
    </div>
  );
}
