"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroBg from "@/components/assets/hero-section/hero-section-bg.jpg";

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

      {/* 1. HERO VIEWPORT BLOCK — background photo lives here so it's one continuous surface
          behind both the nav and the hero content (not just the Hero component's own box).
          Header overlays transparently on top of it (not sticky). */}
      <div id="home" className="relative w-full overflow-hidden lg:min-h-screen flex flex-col justify-between">
        <Image src={heroBg} alt="" fill priority unoptimized className="object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />

        {/* Header: absolutely positioned over the Hero, not sticky/pinned */}
        <header
          ref={headerRef}
          className="absolute top-0 left-0 z-50 w-full shrink-0"
        >
          <div className="w-full px-5 py-3 md:px-8 lg:px-12 3xl:px-20 4xl:px-32">
            {nav}
          </div>
        </header>

        {/* Hero Content Wrapper (Stretches to fill remaining screen height and full width; Hero
            manages its own horizontal padding so its background photo can bleed edge-to-edge) */}
        <main className="relative z-10 flex-1 flex flex-col justify-center w-full">
          {hero}
        </main>

      </div>

      {/* 2. SUBSEQUENT SECTIONS*/}
      <div className="flex flex-col">
        {/* About Section */}
        <section id="about" className="w-full">
          <div className={SECTION_CLASS}>
            {about}
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="w-full bg-stone-900/5">
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
        <section id="contact" className="w-full bg-stone-900/5">
          <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-5 md:px-8 pt-8 md:pt-12 pb-16 md:pb-24">
            {contacts}
          </div>
        </section>
      </div>

    </div>
  );
}