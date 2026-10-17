import type { Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import { themeScript } from "../shared/themeScript";
import "./cozy.css";

export { metadata } from "../shared/metadata";

// Fraunces' SOFT axis rounds its terminals; cozy.css turns it up for display sizes
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf6ee" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1512" },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The theme script sets data-theme before React hydrates
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`} suppressHydrationWarning>
      <body>
        {/* First in <body>, so it runs before any content paints */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
