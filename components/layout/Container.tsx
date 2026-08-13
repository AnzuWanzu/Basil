import React from "react";

interface ContainerProps {
  nav: React.ReactNode;
  hero: React.ReactNode;
  about: React.ReactNode;
  menu: React.ReactNode;
  reviews: React.ReactNode;
  contacts: React.ReactNode;
}

const SECTION_CLASS =
  "mx-auto max-w-7xl 2xl:max-w-[1600px] px-5 md:px-8 py-16 md:py-24";

export default function Container({
  nav,
  hero,
  about,
  menu,
  reviews,
  contacts,
}: ContainerProps) {
  return (
    <div className="min-h-screen w-full bg-[#F4EFE6] text-stone-900">
      
      {/* 1. HERO VIEWPORT BLOCK*/}
      <div id="home" className="w-full lg:min-h-screen lg:h-screen flex flex-col justify-between">
        
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full bg-[#F4EFE6]/80 backdrop-blur-md border-b border-stone-300/60 shrink-0">
          <div className="w-full px-5 py-3 md:px-8 lg:px-12 3xl:px-20 4xl:px-32">
            {nav}
          </div>
        </header>

        {/* Hero Content Wrapper (Stretches to fill remaining screen height and full width) */}
        <main className="flex-1 flex flex-col justify-center w-full px-5 md:px-8 lg:px-12 3xl:px-20 4xl:px-32 py-6 lg:py-0 overflow-hidden">
          {hero}
        </main>

      </div>

      {/* 2. SUBSEQUENT SECTIONS*/}
      <div className="flex flex-col">
        {/* About Section */}
        <section id="about" className="w-full scroll-mt-20">
          <div className={SECTION_CLASS}>
            {about}
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="w-full bg-stone-900/5 scroll-mt-20">
          <div className={SECTION_CLASS}>
            {menu}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="w-full">
          <div className={SECTION_CLASS}>
            {reviews}
          </div>
        </section>

        {/* Contacts Section */}
        <section id="contact" className="w-full bg-stone-900/5 scroll-mt-20">
          <div className={SECTION_CLASS}>
            {contacts}
          </div>
        </section>
      </div>

    </div>
  );
}