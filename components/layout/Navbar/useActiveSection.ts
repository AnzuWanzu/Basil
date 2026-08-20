import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, type NavKey } from "@/data/nav-links";

export function useActiveSection() {
  const [activeLink, setActiveLinkState] = useState<NavKey>("home");
  const suppressRef = useRef(false);
  const settleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.key)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // While a click just kicked off a smooth scrollIntoView, this observer also fires for
        // every section the scroll passes over, snapping the dot to each one in turn instead of
        // sweeping straight to the clicked link. Suppressed until that scroll settles.
        if (suppressRef.current) return;
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveLinkState(topMost.target.id as NavKey);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!suppressRef.current) return;
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = setTimeout(() => {
        suppressRef.current = false;
      }, 120);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    };
  }, []);

  function setActiveLink(key: NavKey) {
    suppressRef.current = true;
    if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    // Fallback in case the target is already in view and no scroll event ever fires.
    settleTimeoutRef.current = setTimeout(() => {
      suppressRef.current = false;
    }, 1200);
    setActiveLinkState(key);
  }

  return [activeLink, setActiveLink] as const;
}
