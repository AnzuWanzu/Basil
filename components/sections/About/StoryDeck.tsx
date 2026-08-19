"use client";

import { useEffect } from "react";
import Image from "next/image";
import { animate, motion, useMotionValue, useTransform, type PanInfo } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ABOUT_STORY, type AboutStoryCard } from "@/data/about";
import {
  DRAG_CONSTRAINTS,
  HOVER_SPRING,
  STACK_SPRING,
  STACK_STYLE,
  SWIPE_THRESHOLD,
  VELOCITY_THRESHOLD,
} from "@/animations/sections/story-deck.variants";

const TOTAL = ABOUT_STORY.length;

interface StoryDeckProps {
  active: number;
  onSwipe: (delta: number) => void;
}

export function StoryDeck({ active, onSwipe }: StoryDeckProps) {
  return (
    <div className="flex flex-col items-center gap-4 lg:w-96 lg:shrink-0 3xl:w-[28rem] 4xl:w-[32rem]">
      <span className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-widest text-background/70 uppercase 4xl:text-sm">
        Drag me
        <motion.span
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="h-3.5 w-3.5 3xl:h-4 3xl:w-4" />
        </motion.span>
      </span>

      <div className="relative mx-auto flex h-[22rem] w-full max-w-sm items-center justify-center sm:h-[26rem] 3xl:h-[32rem] 3xl:max-w-md 4xl:h-[38rem] 4xl:max-w-lg">
        {ABOUT_STORY.map((card, index) => {
          const position = (index - active + TOTAL) % TOTAL;
          const isTop = position === 0;

          return (
            <StoryCard key={card.alt} card={card} style={STACK_STYLE[position]} isTop={isTop} onSwipe={onSwipe} />
          );
        })}
      </div>
    </div>
  );
}

interface StoryCardProps {
  card: AboutStoryCard;
  style: (typeof STACK_STYLE)[number];
  isTop: boolean;
  onSwipe: (delta: number) => void;
}

function StoryCard({ card, style, isTop, onSwipe }: StoryCardProps) {
  const x = useMotionValue(style.x);
  const y = useMotionValue(style.y);
  const baseRotate = useMotionValue(style.rotate);
  const scale = useMotionValue(style.scale);
  const opacity = useMotionValue(style.opacity);

  const hoverScale = useMotionValue(1);

  const rotate = useTransform([x, baseRotate], ([latestX, base]: number[]) =>
    isTop ? base + (latestX / 200) * 15 : base
  );
  const combinedScale = useTransform([scale, hoverScale], ([base, hover]: number[]) => base * hover);

  useEffect(() => {
    animate(x, style.x, STACK_SPRING);
    animate(y, style.y, STACK_SPRING);
    animate(baseRotate, style.rotate, STACK_SPRING);
    animate(scale, style.scale, STACK_SPRING);
    animate(opacity, style.opacity, STACK_SPRING);
  }, [style.x, style.y, style.rotate, style.scale, style.opacity, x, y, baseRotate, scale, opacity]);

  function handleHoverStart() {
    if (isTop) animate(hoverScale, 1.04, HOVER_SPRING);
  }

  function handleHoverEnd() {
    if (isTop) animate(hoverScale, 1, HOVER_SPRING);
  }

  function handleDragEnd(_event: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) {
    const flungLeft = info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -VELOCITY_THRESHOLD;
    const flungRight = info.offset.x > SWIPE_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD;

    if (flungLeft) onSwipe(1);
    else if (flungRight) onSwipe(-1);

    animate(x, style.x, { ...STACK_SPRING, velocity: info.velocity.x });
    animate(y, style.y, { ...STACK_SPRING, velocity: info.velocity.y });
  }

  return (
    <motion.div
      drag={isTop}
      dragConstraints={DRAG_CONSTRAINTS}
      dragElastic={0}
      onDragEnd={isTop ? handleDragEnd : undefined}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{ x, y, rotate, scale: combinedScale, opacity, zIndex: style.zIndex }}
      className={`absolute aspect-[3/4] w-56 overflow-hidden rounded-2xl shadow-2xl transition-shadow sm:w-64 3xl:w-72 4xl:w-80 ${
        isTop ? "cursor-grab touch-none hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] active:cursor-grabbing" : "pointer-events-none"
      }`}
    >
      <Image src={card.image} alt={card.alt} fill unoptimized draggable={false} className="object-cover" />
    </motion.div>
  );
}
