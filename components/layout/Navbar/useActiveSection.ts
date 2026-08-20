import { useEffect, useState } from "react";
import { NAV_LINKS, type NavKey } from "@/data/nav-links";

export function useActiveSection() {
  const [activeLink, setActiveLink] = useState<NavKey>("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.key)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveLink(topMost.target.id as NavKey);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return [activeLink, setActiveLink] as const;
}
