// Slide/fade transition between About's Location and Chef panes.
export const aboutPaneVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

export const aboutPaneTransition = { duration: 0.4, ease: "easeInOut" } as const;
