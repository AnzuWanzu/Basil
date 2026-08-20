import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import coffeeSteam from "@/components/assets/about-section/coffee-1.svg";
import type { AboutStoryCard } from "@/data/about";
import { NavArrowButton } from "@/components/ui/nav-arrow-button";

function renderCaption(card: AboutStoryCard) {
  const start = card.caption.indexOf(card.emphasis);
  if (start === -1) return card.caption;
  const end = start + card.emphasis.length;
  return (
    <>
      {card.caption.slice(0, start)}
      <strong className="font-semibold text-background">{card.caption.slice(start, end)}</strong>
      {card.caption.slice(end)}
    </>
  );
}

interface StoryCaptionProps {
  card: AboutStoryCard;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export function StoryCaption({ card, index, total, onPrev, onNext }: StoryCaptionProps) {
  return (
    <div className="flex flex-col items-start gap-6 text-left lg:w-96 lg:shrink-0 4xl:w-[32rem]">
      <div className="relative hidden h-132 w-full max-w-sm -mt-16 -mb-32 lg:block sm:-mt-20 sm:-mb-36 sm:h-136 4xl:max-w-lg 4xl:h-[46rem]">
        <Image src={coffeeSteam} alt="" unoptimized fill className="object-cover object-left" />
      </div>

      <div className="relative h-20 w-full max-w-sm overflow-hidden 4xl:h-28 4xl:max-w-lg">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-sans text-base sm:text-[18px] leading-snug text-background/85 4xl:text-xl"
          >
            {renderCaption(card)}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="relative z-50 -mt-5 flex items-center gap-4 4xl:gap-5">
        <NavArrowButton
          direction="prev"
          onClick={onPrev}
          label="Previous story"
          variant="dark"
          className="4xl:h-12 4xl:w-12"
          iconClassName="4xl:h-5 4xl:w-5"
        />
        <NavArrowButton
          direction="next"
          onClick={onNext}
          label="Next story"
          variant="dark"
          className="4xl:h-12 4xl:w-12"
          iconClassName="4xl:h-5 4xl:w-5"
        />
        <span className="font-sans text-sm text-background/60 tabular-nums 4xl:text-lg">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
