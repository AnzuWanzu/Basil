export const NAV_LINKS = [
  { key: "home", label: "Home", href: "#home" },
  { key: "about", label: "About", href: "#about" },
  { key: "menu", label: "Menu", href: "#menu" },
  { key: "contact", label: "Contact", href: "#contact" },
] as const;

export type NavKey = (typeof NAV_LINKS)[number]["key"];
