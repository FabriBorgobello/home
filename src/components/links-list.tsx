"use client";

import { useState } from "react";
import Link from "next/link";

import { motion } from "motion/react";
import { FaGithub as Github, FaLinkedin as LinkedIn } from "react-icons/fa6";
import { IoIosDocument as Document } from "react-icons/io";

import { EmailButton } from "./email-button";

const links = [
  { href: "https://cv.fabri.ar", icon: Document, label: "Curriculum Vitae" },
  {
    href: "https://www.linkedin.com/in/fabriborgobello/",
    icon: LinkedIn,
    label: "/fabriborgobello",
  },
  {
    href: "https://github.com/FabriBorgobello",
    icon: Github,
    label: "/FabriBorgobello",
  },
];

export function LinksList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className="relative flex flex-col pl-2">
      {links.map((link, index) => (
        <motion.li
          key={link.href}
          className="relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <motion.div
              id="hoverBackground"
              layoutId="hoverBackground"
              className="bg-foreground/10 absolute inset-0 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <Link
            href={link.href}
            className="relative flex items-center gap-2 rounded-lg p-2 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        </motion.li>
      ))}
      {/* Button Item */}
      <EmailButton
        hoverIndex={hoveredIndex}
        setHoverIndex={setHoveredIndex}
        index={links.length}
      />
    </ul>
  );
}
