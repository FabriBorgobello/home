"use client";
import { motion, useScroll } from "motion/react";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{ scaleX: scrollYProgress }}
      className="bg-muted-foreground fixed top-0 right-0 left-0 z-10 h-1 w-full origin-left rounded-full"
    />
  );
}
