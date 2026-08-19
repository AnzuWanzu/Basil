"use client";

import React from "react";
import Image from "next/image";
import heroBg from "@/components/assets/hero-section/hero-section-bg.jpg";
import { NavbarSpacer } from "@/components/layout/Navbar";

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
  return (
    <div className="min-h-screen w-full bg-background text-stone-900">

      {/* Nav is fixed/self-positioned by Navbar itself: transparent over the Hero image,
          solid + bordered once the user scrolls onto a lighter section below. */}
      {nav}

      {/* 1. HERO VIEWPORT BLOCK — background photo lives here so it's one continuous surface
          behind both the nav and the hero content (not just the Hero component's own box). */}
      <div id="home" className="relative w-full overflow-hidden lg:min-h-screen flex flex-col">
        <NavbarSpacer />
        <Image src={heroBg} alt="" fill priority unoptimized className="object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />

        {/* Hero Content Wrapper (Stretches to fill remaining screen height and full width; Hero
            manages its own horizontal padding so its background photo can bleed edge-to-edge) */}
        <main className="relative z-10 flex-1 flex flex-col justify-center w-full">
          {hero}
        </main>

      </div>

      {/* 2. SUBSEQUENT SECTIONS*/}
      <div className="flex flex-col">
        {/* About Section */}
        <section id="about" className="w-full scroll-mt-[var(--header-h)]">
          <div className={SECTION_CLASS}>
            {about}
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="w-full bg-stone-900/5 scroll-mt-[var(--header-h)]">
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
        <section id="contact" className="w-full bg-stone-900/5 scroll-mt-[var(--header-h)]">
          <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-5 md:px-8 pt-8 md:pt-12 pb-16 md:pb-24">
            {contacts}
          </div>
        </section>
      </div>

    </div>
  );
}