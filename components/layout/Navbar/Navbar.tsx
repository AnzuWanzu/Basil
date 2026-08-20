"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { NavKey } from "@/data/nav-links";
import { NAV_CONTENT_CLASS } from "./constants";
import { Logo } from "./Logo";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { MobileNavSheet } from "./MobileNavSheet";
import { useActiveSection } from "./useActiveSection";
import { useHeroOverlap } from "./useHeroOverlap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useActiveSection();
  const isOverHero = useHeroOverlap(navRef);

  function selectLink(key: NavKey) {
    setActiveLink(key);
    setIsOpen(false);
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isOverHero
          ? "bg-transparent border-b border-transparent"
          : "bg-background/95 backdrop-blur-sm border-b border-stone-900/10"
      }`}
    >
      <div className={`relative ${NAV_CONTENT_CLASS}`}>
        <Link href="/" className="flex items-center gap-2 z-20">
          <Logo variant={isOverHero ? "dark" : "light"} />
        </Link>

        <DesktopNavLinks activeLink={activeLink} isOverHero={isOverHero} onSelect={selectLink} />

        <MobileNavSheet
          open={isOpen}
          onOpenChange={setIsOpen}
          activeLink={activeLink}
          isOverHero={isOverHero}
          onSelect={selectLink}
        />
      </div>
    </nav>
  );
}
