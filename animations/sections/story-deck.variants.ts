export const STACK_STYLE = [
  { scale: 1, rotate: 0, x: 0, y: 0, opacity: 1, zIndex: 40 },
  { scale: 0.97, rotate: 4, x: 28, y: 6, opacity: 1, zIndex: 30 },
  { scale: 0.94, rotate: 8, x: 52, y: 10, opacity: 1, zIndex: 20 },
  { scale: 0.91, rotate: 10, x: 70, y: 14, opacity: 1, zIndex: 10 },
];

export const STACK_SPRING = { type: "spring", stiffness: 260, damping: 26 } as const;
export const HOVER_SPRING = { type: "spring", stiffness: 300, damping: 20 } as const;

export const SWIPE_THRESHOLD = 80;
export const VELOCITY_THRESHOLD = 500; // px/s — a quick flick counts as a swipe even under the distance threshold

export const DRAG_CONSTRAINTS = { left: -80, right: 80, top: -60, bottom: 60 };
