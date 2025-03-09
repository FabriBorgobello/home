"use client";

import { useState } from "react";

import { Check, Clipboard } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface CodeBlockProps {
  children: {
    type: string;
    props: {
      className?: string;
      children: string;
    };
  };
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const codeString = children.props.children;
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="group relative">
      <pre className="bg-muted text-foreground border-border relative my-4 overflow-x-auto rounded-lg border p-4">
        <code className={children.props.className}>
          {children.props.children}
        </code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="bg-background/20 text-foreground hover:bg-background/30 absolute top-2 right-2 flex min-w-24 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded px-3 py-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key={copied.toString()}
              initial={{ y: 15 }}
              animate={{ y: 0 }}
              exit={{ y: 15 }}
              transition={{ duration: 0.05, ease: "easeInOut" }}
              className="flex items-center gap-1"
            >
              <Check className="h-4 w-4 text-green-400" />
              <span>Copied!</span>
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1"
            >
              <Clipboard className="h-4 w-4" />
              <span>Copy</span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
