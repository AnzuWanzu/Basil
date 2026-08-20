import { HOURS } from "@/data/about";
import { CONTACT_EMAIL, CONTACT_PHONE, ORDERS_EMAIL, SOCIAL_LINKS } from "@/data/contacts";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const SOCIAL_ICONS = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
} as const;

function DetailLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-[11px] font-medium tracking-widest text-background/60 uppercase 3xl:text-xs">
      {children}
    </span>
  );
}

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-secondary-hover p-4 shadow-lg ring-1 ring-background/10 sm:p-5 lg:w-72 lg:shrink-0 3xl:w-80">
      <div className="flex flex-col gap-1">
        <DetailLabel>Hours</DetailLabel>
        <ul className="flex flex-col gap-1.5 font-sans text-sm text-background/90 3xl:text-base">
          {HOURS.map((h) => (
            <li key={h.days} className="flex flex-col">
              <span className="font-medium">{h.days}</span>
              <span className="text-background/60">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1.5">
        <DetailLabel>Phone</DetailLabel>
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="font-sans text-sm font-semibold text-background transition hover:text-primary-light 3xl:text-base"
        >
          {CONTACT_PHONE}
        </a>
      </div>

      <div className="flex flex-col gap-1.5">
        <DetailLabel>Email</DetailLabel>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-sans text-sm font-semibold text-background transition hover:text-primary-light 3xl:text-base"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <div className="flex flex-col gap-1.5">
        <DetailLabel>Orders</DetailLabel>
        <a
          href={`mailto:${ORDERS_EMAIL}`}
          className="font-sans text-sm font-semibold text-background transition hover:text-primary-light 3xl:text-base"
        >
          {ORDERS_EMAIL}
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <DetailLabel>Follow Us</DetailLabel>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link) => {
            const Icon = SOCIAL_ICONS[link.key];
            return (
              <a
                key={link.key}
                href={link.href}
                aria-label={link.label}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-primary hover:text-background"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
