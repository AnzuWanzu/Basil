"use client";

import { motion } from "motion/react";
import Image from "next/image";
import loadingPan from "@/components/assets/loading-icon/loading-pan.svg";

export function LoadingScreen() {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative h-[60vmin] w-[60vmin] max-h-[520px] max-w-[520px]">
        <Image src={loadingPan} alt="" unoptimized fill priority className="object-contain" />
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
