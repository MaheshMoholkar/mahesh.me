import type { Metadata } from "next";
import { hero, site } from "@/content/site";

/** Title, description, icons and link-preview tags for every variant's layout. */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: hero.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: site.title,
    description: site.description,
    siteName: hero.name,
    images: [{ url: "/profile.png", width: 1024, height: 1024, alt: hero.name }],
  },
  twitter: { card: "summary", title: site.title, description: site.description, images: ["/profile.png"] },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};
