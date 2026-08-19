"use client";

import { useState } from "react";
import { ABOUT_STORY } from "@/data/about";
import { StoryWave } from "./StoryWave";
import { StoryCaption } from "./StoryCaption";
import { StoryDeck } from "./StoryDeck";

const TOTAL = ABOUT_STORY.length;

export function AboutStory() {
  const [active, setActive] = useState(0);

  function go(delta: number) {
    setActive((prev) => (prev + delta + TOTAL) % TOTAL);
  }

  return (
    <div className="relative mx-[calc(50%-50vw)] w-screen">
      <StoryWave />

      <div className="relative overflow-hidden bg-primary-hover text-background">
        {/* Faint repeated watermark, echoing the reference site's texture behind the deck */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
          <div className="flex -translate-x-10 -rotate-6 flex-wrap gap-x-10 gap-y-6 whitespace-nowrap font-serif text-4xl font-bold italic">
            {Array.from({ length: 48 }).map((_, i) => (
              <span key={i}>Basil&apos;s</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-8 md:px-8 lg:flex-row lg:justify-center lg:gap-10 lg:py-8">
          <StoryCaption
            card={ABOUT_STORY[active]}
            index={active}
            total={TOTAL}
            onPrev={() => go(-1)}
            onNext={() => go(1)}
          />
          <StoryDeck active={active} onSwipe={go} />
        </div>
      </div>

      <StoryWave flip />
    </div>
  );
}
