"use client";
import { motion, useScroll, useTransform } from "motion/react";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const percentage = useTransform(scrollYProgress, (value) =>
    Math.round(value * 100),
  );
  return <motion.div className="fixed top-2 left-2">{percentage}</motion.div>;
}
