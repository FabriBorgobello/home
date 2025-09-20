"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { IoMdMail as Email } from "react-icons/io";

const EMAIL = "hello@fabri.ar";

export function EmailButton({
  hoverIndex,
  setHoverIndex,
  index,
}: {
  hoverIndex: number | null;
  setHoverIndex: Dispatch<SetStateAction<number | null>>;
  index: number | null;
}) {
  const [buttonText, setButtonText] = useState(EMAIL);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setButtonText("Email copied!");

    setTimeout(() => {
      setButtonText(EMAIL);
    }, 2000);
  };

  return (
    <motion.li
      className="relative"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {hoverIndex === index && (
        <motion.div
          id="hoverBackground"
          layoutId="hoverBackground"
          className="bg-foreground/10 absolute inset-0 rounded-lg"
          transition={{ ease: "easeInOut", duration: 0.2 }}
        />
      )}
      <button
        onClick={handleCopy}
        className="relative flex w-full cursor-pointer items-center gap-2 rounded-lg p-2 transition-colors"
      >
        <Email className="h-4 w-4" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={buttonText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            {buttonText}
          </motion.span>
        </AnimatePresence>
      </button>
    </motion.li>
  );
}
