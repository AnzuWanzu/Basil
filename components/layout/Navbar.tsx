"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, type NavKey } from "@/data/nav-links";
import { tabPillClassName, tabPillTransition } from "@/animations/variants";

function Logo() {
  return (
    <>
      <svg
        className="w-7 h-7 text-stone-800 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.12 2 7 0 6-4 11-10 11Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
      <span className="font-serif text-2xl font-semibold tracking-tight italic text-stone-800">
        basil
      </span>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<NavKey>("home");

  function selectLink(key: NavKey) {
    setActiveLink(key);
    setIsOpen(false);
  }

  return (
    <nav className="relative flex items-center justify-between">
      {/* LOGO: left-aligned on desktop, true-centered on mobile (independent of hamburger width) */}
      <Link
        href="/"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 flex items-center gap-2 z-20"
      >
        <Logo />
      </Link>

      {/* RIGHT COLUMN (DESKTOP): Shown only on medium screens and up (md:flex) */}
      <div className="hidden md:flex items-center gap-4 md:gap-6">
        <div
          role="tablist"
          aria-label="Site sections"
          className="flex items-center gap-1 p-1 rounded-full bg-stone-900/5 font-sans text-sm font-medium"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              role="tab"
              aria-selected={activeLink === link.key}
              onClick={() => setActiveLink(link.key)}
              className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${
                activeLink === link.key ? "text-secondary-foreground" : "text-stone-700 hover:text-stone-950"
              }`}
            >
              {activeLink === link.key && (
                <motion.span
                  layoutId="navbar-pill"
                  className={tabPillClassName}
                  transition={tabPillTransition}
                />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </div>

        <Button asChild>
          <Link href="#reserve">Reserve a table</Link>
        </Button>
      </div>

      {/* MOBILE: hamburger opens a Sheet-based sidebar drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="md:hidden z-20 -ml-2 p-2 text-stone-800 focus:outline-none"
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          showCloseButton={false}
          className="w-[82%] max-w-xs gap-0 border-none bg-background p-0 shadow-2xl"
        >
          {/* Sidebar Header */}
          <SheetHeader className="flex-row items-center justify-between gap-0 space-y-0 px-5 py-4 border-b border-stone-900/10 shrink-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetDescription className="sr-only">Site navigation links</SheetDescription>
            <span className="flex items-center gap-2">
              <Logo />
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
                onClick={() => selectLink(link.key)}
                className={`px-5 py-4 font-sans font-medium text-base transition-colors ${
                  activeLink === link.key
                    ? "text-secondary bg-secondary/8"
                    : "text-stone-800 hover:bg-stone-900/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA pinned to the bottom of the sidebar */}
          <SheetFooter className="border-t border-stone-900/10">
            <SheetClose asChild>
              <Button asChild className="w-full">
                <Link href="#reserve">Reserve a table</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
