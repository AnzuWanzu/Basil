import { LEGAL_LINKS } from "@/data/contacts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 border-t border-background/20 px-5 py-6 font-sans text-xs text-background/70 sm:flex-row sm:justify-between md:px-8 3xl:text-sm">
        <span>&copy; {year} Basil&apos;s &mdash; All rights reserved</span>
        <ul className="flex items-center gap-6">
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition hover:text-background">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
