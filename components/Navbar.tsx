"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between">
      {/* LEFT COLUMN: Logo & Restaurant Name */}
      {/* TODO: Replace with actual logo image/svg. */}
      <Link href="/" className="flex items-center gap-2 z-20">
        <svg
          className="w-7 h-7 text-stone-800"
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
      </Link>

      {/* RIGHT COLUMN (DESKTOP): Shown only on medium screens and up (md:flex) */}
      <div className="hidden md:flex items-center gap-8 md:gap-10">
        <div className="flex items-center gap-6 md:gap-8 font-sans text-sm font-medium text-stone-700">
          <Link href="#menu" className="hover:text-stone-950 transition-colors">
            Menu
          </Link>
          <Link href="#about" className="hover:text-stone-950 transition-colors">
            Our story
          </Link>
          <Link href="#events" className="hover:text-stone-950 transition-colors">
            Events
          </Link>
          <Link href="#contact" className="hover:text-stone-950 transition-colors">
            Visit
          </Link>
        </div>

        <Link
          href="#reserve"
          className="bg-[#3e4a3a] hover:bg-[#313c2d] text-stone-100 font-sans text-sm font-medium px-5 py-2.5 rounded transition-colors"
        >
          Reserve a table
        </Link>
      </div>

      {/* MOBILE HAMBURGER BUTTON: Visible only on small screens (md:hidden) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-20 p-2 text-stone-800 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F4EFE6] border-b border-stone-300 py-6 px-4 flex flex-col gap-4 shadow-lg md:hidden z-10">
          <Link href="#menu" onClick={() => setIsOpen(false)} className="text-stone-800 font-medium text-base">
            Menu
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-stone-800 font-medium text-base">
            Our story
          </Link>
          <Link href="#events" onClick={() => setIsOpen(false)} className="text-stone-800 font-medium text-base">
            Events
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-stone-800 font-medium text-base">
            Visit
          </Link>
          <Link
            href="#reserve"
            onClick={() => setIsOpen(false)}
            className="bg-[#3e4a3a] text-center text-stone-100 font-sans text-sm font-medium py-3 rounded mt-2"
          >
            Reserve a table
          </Link>
        </div>
      )}
    </nav>
  );
}