import { NAV_LINKS } from "@/data/nav-links";
import { NAV_CONTENT_CLASS } from "./constants";

export function NavbarSpacer() {
  return (
    <div aria-hidden="true" className="invisible pointer-events-none select-none">
      <div className={NAV_CONTENT_CLASS}>
        <span className="flex items-center gap-2">
          <span className="block h-10 w-auto md:h-12 3xl:h-14 4xl:h-16 5xl:h-20" />
        </span>

        <div className="hidden md:flex items-center gap-1 font-sans text-sm font-medium 3xl:gap-2 3xl:text-base 4xl:text-lg 5xl:text-xl">
          {NAV_LINKS.map((link) => (
            <span key={link.key} className="flex flex-col items-center gap-1.5 px-3 py-2 3xl:px-4 3xl:py-3 4xl:px-5">
              {link.label}
              <span className="flex h-1.5 w-1.5 3xl:h-2 3xl:w-2 4xl:h-2.5 4xl:w-2.5 items-center justify-center" />
            </span>
          ))}
        </div>

        <span className="md:hidden p-2">
          <span className="block w-6 h-6" />
        </span>
      </div>
    </div>
  );
}
