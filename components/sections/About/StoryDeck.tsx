"use client";

import { useEffect } from "react";
import Image from "next/image";
import { animate, motion, useMotionValue, useTransform, type PanInfo } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ABOUT_STORY, type AboutStoryCard } from "@/data/about";

const TOTAL = ABOUT_STORY.length;

const STACK_STYLE = [
  { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1, zIndex: 40 },
  { scale: 0.97, rotate: 4, x: 28, y: 6, opacity: 1, zIndex: 30 },
  { scale: 0.94, rotate: 8, x: 52, y: 10, opacity: 1, zIndex: 20 },
  { scale: 0.91, rotate: 10, x: 70, y: 14, opacity: 1, zIndex: 10 },
];

const SWIPE_THRESHOLD = 80;
const VELOCITY_THRESHOLD = 500;
const SPRING = { type: "spring", stiffness: 260, damping: 26 } as const;

const DRAG_CONSTRAINTS = { left: -80, right: 80, top: -60, bottom: 60 };

interface StoryDeckProps {
  active: number;
  onSwipe: (delta: number) => void;
}

export function StoryDeck({ active, onSwipe }: StoryDeckProps) {
  return (
    <div className="flex flex-col items-center gap-4 lg:w-96 lg:shrink-0">
      <span className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-widest text-background/70 uppercase">
        Drag me
        <motion.span
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.span>
      </span>

      <div className="relative mx-auto flex h-[22rem] w-full max-w-sm items-center justify-center sm:h-[26rem]">
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
  
  const rotate = useTransform([x, baseRotate], ([latestX, base]: number[]) =>
    isTop ? base + (latestX / 200) * 15 : base
  );

  useEffect(() => {
    animate(x, style.x, SPRING);
    animate(y, style.y, SPRING);
    animate(baseRotate, style.rotate, SPRING);
    animate(scale, style.scale, SPRING);
    animate(opacity, style.opacity, SPRING);
  }, [style.x, style.y, style.rotate, style.scale, style.opacity, x, y, baseRotate, scale, opacity]);

  function handleDragEnd(_event: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) {
    const flungLeft = info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -VELOCITY_THRESHOLD;
    const flungRight = info.offset.x > SWIPE_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD;

    if (flungLeft) onSwipe(1);
    else if (flungRight) onSwipe(-1);

    animate(x, style.x, { ...SPRING, velocity: info.velocity.x });
    animate(y, style.y, { ...SPRING, velocity: info.velocity.y });
  }

  return (
    <motion.div
      drag={isTop}
      dragConstraints={DRAG_CONSTRAINTS}
      dragElastic={0}
      onDragEnd={isTop ? handleDragEnd : undefined}
      style={{ x, y, rotate, scale, opacity, zIndex: style.zIndex }}
      className={`absolute aspect-[3/4] w-56 overflow-hidden rounded-2xl shadow-2xl sm:w-64 ${
        isTop ? "cursor-grab touch-none active:cursor-grabbing" : "pointer-events-none"
      }`}
    >
      <Image src={card.image} alt={card.alt} fill unoptimized draggable={false} className="object-cover" />
    </motion.div>
  );
}
