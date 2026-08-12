import React from "react";

interface ContainerProps {
    nav: React.ReactNode;
    hero: React.ReactNode;
    about: React.ReactNode;
    menu: React.ReactNode;
    reviews: React.ReactNode;
    contacts: React.ReactNode;
}

export default function Container({nav, hero, about, menu, reviews, contacts}: ContainerProps) {
      return (
    <div className="min-h-screen w-full bg-white text-stone-900">
      {/* Nav: About / Menu / Contacts links, sticky on scroll */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-stone-200">
        <div className="mx-auto max-w-350 px-4 md:px-6">{nav}</div>
      </header>
 
      <main className="flex flex-col">
        {/* Hero */}
        <section className="w-full">{hero}</section>
 
        {/* About */}
        <section className="w-full">
          <div className="mx-auto max-w-350 px-4 py-12 md:px-6 md:py-20">
            {about}
          </div>
        </section>
 
        {/* Menu */}
        <section className="w-full bg-stone-50">
          <div className="mx-auto max-w-350 px-4 py-12 md:px-6 md:py-20">
            {menu}
          </div>
        </section>
 
        {/* Reviews */}
        <section className="w-full">
          <div className="mx-auto max-w-350 px-4 py-12 md:px-6 md:py-20">
            {reviews}
          </div>
        </section>
 
        {/* Contacts */}
        <section className="w-full bg-stone-50">
          <div className="mx-auto max-w-350 px-4 py-12 md:px-6 md:py-20">
            {contacts}
          </div>
        </section>
      </main>
    </div>
  );
}