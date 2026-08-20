import Link from "next/link";
import { motion } from "motion/react";
import { NAV_LINKS, type NavKey } from "@/data/nav-links";
import { tabPillTransition } from "@/animations/variants";

interface DesktopNavLinksProps {
  activeLink: NavKey;
  isOverHero: boolean;
  onSelect: (key: NavKey) => void;
}

export function DesktopNavLinks({ activeLink, isOverHero, onSelect }: DesktopNavLinksProps) {
  return (
    <div
      role="tablist"
      aria-label="Site sections"
      className="hidden md:flex items-center gap-1 font-sans text-sm font-medium 3xl:gap-2 3xl:text-base 4xl:text-lg 5xl:text-xl"
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          role="tab"
          aria-selected={activeLink === link.key}
          onClick={(e) => {
            e.preventDefault();
            onSelect(link.key);
          }}
          className={`flex flex-col items-center gap-1.5 px-3 py-2 3xl:px-4 3xl:py-3 4xl:px-5 transition-colors duration-300 ${
            activeLink === link.key
              ? isOverHero
                ? "text-primary-tint"
                : "text-primary"
              : isOverHero
                ? "text-background/70 hover:text-background"
                : "text-stone-600 hover:text-stone-900"
          }`}
        >
          {link.label}
          <span className="flex h-1.5 w-1.5 3xl:h-2 3xl:w-2 4xl:h-2.5 4xl:w-2.5 items-center justify-center">
            {activeLink === link.key && (
              <motion.span
                layoutId="navbar-dot"
                className="h-1.5 w-1.5 3xl:h-2 3xl:w-2 4xl:h-2.5 4xl:w-2.5 rounded-full bg-primary"
                transition={tabPillTransition}
              />
            )}
          </span>
        </Link>
      ))}
    </div>
  );
}
