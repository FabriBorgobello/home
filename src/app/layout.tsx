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
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <TailwindWidget position="right" />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
