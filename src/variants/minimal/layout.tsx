import type { Metadata, Viewport } from "next";
import "./minimal.css";

export const metadata: Metadata = {
  title: "Mahesh Moholkar",
  description: "Mahesh Moholkar's Portfolio",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Runs before first paint, so a saved (or system) dark theme never flashes light
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

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
