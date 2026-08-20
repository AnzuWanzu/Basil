"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence } from "motion/react";
import { LoadingScreen } from "./LoadingScreen";

const MIN_DISPLAY_MS = 700;

export function SplashGate({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  useEffect(() => {
    const start = Date.now();

    function finish() {
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      window.setTimeout(() => setIsLoading(false), remaining);
    }

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
      {children}
    </>
  );
}

export default SplashGate;
