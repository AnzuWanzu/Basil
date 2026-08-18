"use client";

import React, { useEffect, useRef, useState } from "react";

interface ContainerProps {
  nav: React.ReactNode;
  hero: React.ReactNode;
  about: React.ReactNode;
  menu: React.ReactNode;
  testimonials: React.ReactNode;
  contacts: React.ReactNode;
}

const SECTION_CLASS =
  "mx-auto max-w-7xl 2xl:max-w-[1600px] px-5 md:px-8 py-16 md:py-24";

const ANCHOR_SCROLL_MT = "scroll-mt-[var(--header-h)]";

export default function Container({
  nav,
  hero,
  about,
  menu,
  testimonials,
  contacts,
}: ContainerProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(([entry]) => {
      setHeaderHeight(entry.contentRect.height);
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-background text-stone-900"
      style={{ "--header-h": `${headerHeight}px` } as React.CSSProperties}
    >

      {/* Sticky Header (top-level sibling so it stays pinned across every section, not just the hero) */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md shrink-0"
      >
        <div className="w-full px-5 py-3 md:px-8 lg:px-12 3xl:px-20 4xl:px-32">
          {nav}
        </div>
      </header>

      {/* 1. HERO VIEWPORT BLOCK*/}
      <div id="home" className={`w-full ${ANCHOR_SCROLL_MT} lg:min-h-screen flex flex-col justify-between`}>

        {/* Hero Content Wrapper (Stretches to fill remaining screen height and full width) */}
        <main className="flex-1 flex flex-col justify-center w-full px-5 md:px-8 lg:px-12 3xl:px-20 4xl:px-32 py-6 lg:py-0 overflow-hidden">
          {hero}
        </main>

      </div>

      {/* 2. SUBSEQUENT SECTIONS*/}
      <div className="flex flex-col">
        {/* About Section */}
        <section id="about" className={`w-full ${ANCHOR_SCROLL_MT}`}>
          <div className={SECTION_CLASS}>
            {about}
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className={`w-full bg-stone-900/5 ${ANCHOR_SCROLL_MT}`}>
          <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-5 md:px-8 pt-8 md:pt-12 pb-16 md:pb-24">
            {menu}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full">
          <div className={SECTION_CLASS}>
            {testimonials}
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contact" className={`w-full bg-stone-900/5 ${ANCHOR_SCROLL_MT}`}>
          <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-5 md:px-8 pt-8 md:pt-12 pb-16 md:pb-24">
            {contacts}
          </div>
        </section>
      </div>

    </div>
  );
}