"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, type NavKey } from "@/data/nav-links";
import { tabPillTransition } from "@/animations/variants";
import basilsLogoLight from "@/components/assets/logos/basils-logo-lightmode.png";
import basilsLogoDark from "@/components/assets/logos/basils-logo-darkmode.png";

function Logo({ variant }: { variant: "light" | "dark" }) {
  const src = variant === "dark" ? basilsLogoDark : basilsLogoLight;
  return <Image src={src} alt="Basil's" className="h-10 w-auto md:h-12 3xl:h-14 4xl:h-16 5xl:h-20" priority />;
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<NavKey>("home");
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.key)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveLink(topMost.target.id as NavKey);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const home = document.getElementById("home");
    if (!nav || !home) return;

    // Re-created on every resize since the nav's height (and thus the offset that marks
    // where it stops sitting over the Hero photo) differs between mobile/desktop layouts.
    let heroObserver: IntersectionObserver | null = null;
    const observeHero = (height: number) => {
      heroObserver?.disconnect();
      heroObserver = new IntersectionObserver(
        ([entry]) => setIsOverHero(entry.isIntersecting),
        { rootMargin: `-${height}px 0px 0px 0px`, threshold: 0 }
      );
      heroObserver.observe(home);
    };

    const resizeObserver = new ResizeObserver(([entry]) => {
      const height = entry.contentRect.height;
      document.documentElement.style.setProperty("--header-h", `${height}px`);
      observeHero(height);
    });
    resizeObserver.observe(nav);

    return () => {
      resizeObserver.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

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
      <div className="relative flex items-center justify-between md:flex-col md:justify-center gap-3 px-5 py-3 md:px-8 lg:px-12 3xl:px-20 4xl:px-32">
        {/* LOGO: left-aligned on mobile, centered on medium screens and up */}
        <Link href="/" className="flex items-center gap-2 z-20">
          <Logo variant={isOverHero ? "dark" : "light"} />
        </Link>

        {/* NAV LINKS: centered row below the logo, shown only on medium screens and up */}
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
                selectLink(link.key);
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

        {/* MOBILE: hamburger at the right end of the row, opens a Sheet-based drawer from the right */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className={`md:hidden z-20 p-2 focus:outline-none transition-colors duration-300 ${
                isOverHero ? "text-background" : "text-stone-800"
              }`}
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-[82%] max-w-xs gap-0 rounded-l-3xl border-none bg-background p-0 shadow-2xl"
          >
            {/* Sidebar Header */}
            <SheetHeader className="flex-row items-center justify-between gap-0 space-y-0 px-5 py-4 border-b border-stone-900/10 shrink-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">Site navigation links</SheetDescription>
              <span className="flex items-center gap-2">
                <Logo variant="light" />
              </span>
              <SheetClose asChild>
                <button aria-label="Close menu" className="p-2 -mr-2 text-stone-800">
                  <X className="w-5 h-5" />
                </button>
              </SheetClose>
            </SheetHeader>

            {/* Nav Links */}
            <div className="flex flex-col divide-y divide-stone-900/10 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    selectLink(link.key);
                  }}
                  className={`px-5 py-4 font-sans font-medium text-base transition-colors ${
                    activeLink === link.key
                      ? "text-primary-hover bg-primary-hover/8"
                      : "text-stone-800 hover:bg-stone-900/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
