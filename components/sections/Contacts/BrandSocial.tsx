import { MapPin } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from "@/data/contacts";
import { FacebookIcon, InstagramIcon } from "./ContactIcons";

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  maps: MapPin,
} as const;

export function BrandSocial() {
  return (
    <div className="flex flex-col gap-6">
      <span className="font-serif text-3xl font-semibold italic tracking-tight text-stone-900">
        basil
      </span>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-stone-600">
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-stone-900">
          {CONTACT_EMAIL}
        </a>
        <a href={`tel:${CONTACT_PHONE}`} className="hover:text-stone-900">
          {CONTACT_PHONE}
        </a>
      </div>

      <div className="flex items-center gap-4">
        {SOCIAL_LINKS.map((link) => {
          const Icon = SOCIAL_ICONS[link.key];
          return (
            <a
              key={link.key}
              href={link.href}
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900/5 text-stone-700 transition-colors hover:bg-[#3e4a3a] hover:text-stone-100"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
