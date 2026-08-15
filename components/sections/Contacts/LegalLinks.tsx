import { LEGAL_LINKS } from "@/data/contacts";

export function LegalLinks() {
  return (
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
  );
}
