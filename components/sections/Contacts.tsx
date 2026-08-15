import type { SVGProps } from "react";
import { MapPin } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS, LEGAL_LINKS } from "@/data/contacts";
import { HOURS } from "@/data/about";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  maps: MapPin,
} as const;

export default function Contacts() {
  return (
    <div className="flex w-full flex-col gap-10 text-left md:flex-row md:justify-between">
      {/* Brand, contact, and social */}
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

      {/* Legal & Hours */}
      <div className="grid grid-cols-1 gap-4 justify-start sm:grid-cols-[auto_auto] sm:gap-8">
        {/* Legal */}
        <div className="flex flex-col gap-3 text-left">
          <h3 className="font-serif text-lg font-bold text-stone-900">Legal</h3>
          <ul className="flex flex-col gap-2 font-sans text-sm text-stone-600">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-stone-900">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours, styled as a schedule */}
        <div className="flex flex-col gap-3 text-left">
          <h3 className="font-serif text-lg font-bold text-stone-900">Hours</h3>
          <ul className="flex flex-col divide-y divide-stone-900/10 font-sans text-sm">
            {HOURS.map((h) => (
              <li key={h.days} className="flex items-baseline justify-between gap-4 py-2">
                <span className="font-medium text-stone-700">{h.days}</span>
                <span className="text-stone-600">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
