import { Variants } from "motion";
import * as motion from "motion/react-client";

import { LinksList } from "@/components/links-list";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 3, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto flex h-full w-[500px] max-w-full flex-col justify-center p-4 py-16"
    >
      <motion.div variants={childVariants} className="mb-8 flex flex-col">
        <h1 className="text-lg font-bold">Fabricio Borgobello</h1>
        <p className="text-foreground/80 text-sm">Software Engineer</p>
      </motion.div>
      <motion.p variants={childVariants}>
        UI specialist. I love creating pleasant interactions for users that look
        great and feel natural. If that&apos;s what you&apos;re looking for,
        I&apos;m your guy.
      </motion.p>
      <motion.div
        variants={childVariants}
        className="mt-12 flex flex-col gap-2"
      >
        <h2 className="text-foreground/80 text-lg font-semibold">Contact</h2>
        <LinksList />
      </motion.div>
    </motion.div>
  );
}
