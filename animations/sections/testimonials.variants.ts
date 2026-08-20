export const TESTIMONIAL_TEXT_VARIANTS = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const TESTIMONIAL_TRANSITION = { duration: 0.35, ease: "easeOut" } as const;

export const TESTIMONIAL_SLIDE_VARIANTS = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export const TESTIMONIAL_SLIDE_TRANSITION = { duration: 0.4, ease: "easeInOut" } as const;
