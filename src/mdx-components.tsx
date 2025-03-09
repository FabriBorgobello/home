import React from "react";
import Image from "next/image";

import { Link as LinkIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";

import { CodeBlock } from "./components/mdx/code-block";

function stringToSlug(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .slice(0, 7)
    .join("-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+$/, ""); // Remove trailing hyphens
}

function HeadingLink({
  as: Component,
  id,
  children,
}: {
  as: React.ElementType;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <Component
      id={id}
      className="group text-foreground relative mb-5 flex items-center"
    >
      <a
        href={`#${id}`}
        className="flex items-center transition-opacity hover:opacity-100"
      >
        {children}
        <LinkIcon className="text-muted-foreground/70 group-hover:text-primary ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </Component>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        id={stringToSlug(props.children)}
        className="text-foreground/90 mb-5 text-xl font-bold tracking-tight"
      >
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <HeadingLink as="h2" id={stringToSlug(props.children)}>
        <span className="text-primary/90 text-lg font-semibold tracking-tight">
          {props.children}
        </span>
      </HeadingLink>
    ),
    h3: (props) => (
      <HeadingLink as="h3" id={stringToSlug(props.children)}>
        <span className="text-muted-foreground/80 text-base font-medium tracking-tight">
          {props.children}
        </span>
      </HeadingLink>
    ),
    h4: (props) => (
      <HeadingLink as="h4" id={stringToSlug(props.children)}>
        <span className="text-muted-foreground/70 text-base font-normal tracking-tight">
          {props.children}
        </span>
      </HeadingLink>
    ),
    p: (props) => (
      <p
        className="text-foreground/90 mb-5 text-base leading-relaxed"
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="text-primary hover:text-primary-foreground underline"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="text-foreground/90 mb-5 list-inside list-disc space-y-2"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="text-foreground/90 mb-5 list-inside list-decimal space-y-2"
        {...props}
      />
    ),
    li: (props) => <li className="text-foreground/90 ml-6" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-border text-muted-foreground/80 mb-5 border-l-4 pl-4 italic"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="bg-muted text-foreground/90 rounded-md px-1.5 py-0.5 font-mono text-sm"
        {...props}
      />
    ),
    pre: (props) => <CodeBlock>{props.children}</CodeBlock>,
    img: (props) => (
      <Image
        className="mx-auto my-6 rounded-lg"
        alt={props.alt}
        width={props.width || 640}
        height={props.height || 360}
        src={props.src}
        {...props}
      />
    ),
    hr: (props) => <hr className="border-border my-8 border-t" {...props} />,
    ...components,
  };
}
