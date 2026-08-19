export const MENU_GRID_VARIANTS = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeInOut" as const } },
};

export const MENU_ITEM_VARIANTS = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export const MENU_ITEM_TRANSITION = { duration: 0.35, ease: "easeOut" } as const;
