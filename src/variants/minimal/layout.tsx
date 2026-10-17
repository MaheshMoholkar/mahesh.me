import type { Viewport } from "next";
import { themeScript } from "../shared/themeScript";
import "./minimal.css";

export { metadata } from "../shared/metadata";

export const viewport: Viewport = {
  // Light until the visitor picks dark, so the browser bar matches the default page
  themeColor: "#ffffff",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The theme script sets data-theme before React hydrates
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* First in <body>, so it runs before any content paints */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* React hoists these into <head>. Google Sans Flex is newer than next/font's bundled font list, so it loads from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- the app router has no _document; the root layout is where site-wide fonts go */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600&display=swap" precedence="default" />
        {children}
      </body>
    </html>
  );
}
