import type { Viewport } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import { themeScript } from "../shared/themeScript";
import "./globals.css";

export { metadata } from "../shared/metadata";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const spaceMono = Space_Mono({
  variable: "--font-spacemono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  // Light until the visitor picks dark, so the browser bar matches the default page
  themeColor: "#F4F2EC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The theme script sets data-theme before React hydrates
    <html lang="en" className={`${archivo.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body>
        {/* First in <body>, so it runs before any content paints */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
