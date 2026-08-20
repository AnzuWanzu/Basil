import { useLayoutEffect, useState, type RefObject } from "react";

export function useHeroOverlap(navRef: RefObject<HTMLElement | null>) {
  const [isOverHero, setIsOverHero] = useState(true);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const home = document.getElementById("home");
    if (!nav || !home) return;

    let heroObserver: IntersectionObserver | null = null;
    const observeHero = (height: number) => {
      heroObserver?.disconnect();
      heroObserver = new IntersectionObserver(
        ([entry]) => setIsOverHero(entry.isIntersecting),
        { rootMargin: `-${height}px 0px 0px 0px`, threshold: 0 }
      );
      heroObserver.observe(home);
    };

    const navHeight = nav.getBoundingClientRect().height;
    setIsOverHero(home.getBoundingClientRect().bottom > navHeight);

    const resizeObserver = new ResizeObserver(([entry]) => {
      const height = entry.contentRect.height;
      document.documentElement.style.setProperty("--header-h", `${height}px`);
      observeHero(height);
    });
    resizeObserver.observe(nav);

    return () => {
      resizeObserver.disconnect();
      heroObserver?.disconnect();
    };
  }, [navRef]);

  return isOverHero;
}
