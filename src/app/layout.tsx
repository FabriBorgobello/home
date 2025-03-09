import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { TailwindWidget } from "@/components/tailwind-widget";
import { ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabricio Borgobello - Software Engineer",
  description:
    "Software developer specialized in frontend with skills in JavaScript, TypeScript, React and Node. Contact me via email or LinkedIn to learn more.",
  keywords:
    "Fabricio Borgobello, frontend developer, JavaScript, TypeScript, React",
  authors: { name: "Fabricio Borgobello", url: "https://fabri.ar" },
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          montserrat.variable,
          "text-foreground flex min-h-screen flex-col font-sans antialiased",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NEXT_PUBLIC_ENVIRONMENT !== "production" && (
            <TailwindWidget position="right" />
          )}
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
