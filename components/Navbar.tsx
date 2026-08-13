"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const NAV_LINKS = [
  { key: "home", label: "Home", href: "#home" },
  { key: "about", label: "About", href: "#about" },
  { key: "menu", label: "Menu", href: "#menu" },
  { key: "contact", label: "Contacts", href: "#contact" },
] as const;

type NavKey = (typeof NAV_LINKS)[number]["key"];

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
  const [mounted, setMounted] = useState(false);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function measure() {
      const index = NAV_LINKS.findIndex((link) => link.key === activeLink);
      const el = linkRefs.current[index];
      if (el) {
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeLink]);

  // Lock page scroll while the mobile sidebar is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
          className="relative flex items-center gap-1 p-1 rounded-full bg-stone-900/5 font-sans text-sm font-medium"
        >
          <span
            aria-hidden="true"
            className="absolute top-1 bottom-1 rounded-full bg-[#3e4a3a] transition-[left,width] duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.key}
              href={link.href}
              ref={(el) => {
                linkRefs.current[index] = el;
              }}
              role="tab"
              aria-selected={activeLink === link.key}
              onClick={() => setActiveLink(link.key)}
              className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-300 ${
                activeLink === link.key
                  ? "text-stone-100"
                  : "text-stone-700 hover:text-stone-950"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#reserve"
          className="bg-[#3e4a3a] hover:bg-[#313c2d] text-stone-100 font-sans text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Reserve a table
        </Link>
      </div>

      {/* MOBILE HAMBURGER BUTTON: opens the sidebar. Sits on the left, logo stays centered. */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden z-20 -ml-2 p-2 text-stone-800 focus:outline-none"
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* MOBILE SIDEBAR: rendered via portal straight into <body> so it isn't confined by the
          sticky header's backdrop-blur (which creates its own containing block for fixed
          descendants and would otherwise clip a fixed-position drawer to the header's box). */}
      {mounted &&
        createPortal(
          <>
            <div
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
              className={`fixed inset-0 z-[60] bg-stone-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            />

            <div
              className={`fixed inset-y-0 left-0 z-[70] flex w-[82%] max-w-xs flex-col bg-[#F4EFE6] shadow-2xl transition-transform duration-300 ease-out md:hidden ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-stone-900/10 shrink-0">
                <span className="flex items-center gap-2">
                  <Logo />
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2 text-stone-800"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col divide-y divide-stone-900/10 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => selectLink(link.key)}
                    className={`px-5 py-4 font-sans font-medium text-base transition-colors ${
                      activeLink === link.key
                        ? "text-[#3e4a3a] bg-[#3e4a3a]/8"
                        : "text-stone-800 hover:bg-stone-900/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA pinned to the bottom of the sidebar */}
              <div className="mt-auto p-4 border-t border-stone-900/10 shrink-0">
                <Link
                  href="#reserve"
                  onClick={() => setIsOpen(false)}
                  className="block bg-[#3e4a3a] hover:bg-[#313c2d] text-center text-stone-100 font-sans text-sm font-semibold py-3.5 rounded-full transition-colors"
                >
                  Reserve a table
                </Link>
              </div>
            </div>
          </>,
          document.body
        )}
    </nav>
  );
}
