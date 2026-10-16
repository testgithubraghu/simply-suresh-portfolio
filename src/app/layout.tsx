import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import { metadataBase, site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "variable", // 200-800
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    default: "Simply Suresh — Magician & Entertainer, Karnataka",
    template: "%s · Simply Suresh",
  },
  description:
    "Simply Suresh is a magician and entertainer from Karnataka performing live magic, balloon modelling and special event shows. A little wonder. A lasting memory.",
  applicationName: "Simply Suresh",
  authors: [{ name: site.name }],
  keywords: [
    "magician Karnataka",
    "magician Bengaluru",
    "Simply Suresh",
    "birthday party magician",
    "stage magic show",
    "balloon modelling",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    title: "Simply Suresh — Magician & Entertainer, Karnataka",
    description:
      "Live magic, balloon modelling and special event performances from Karnataka. A little wonder. A lasting memory.",
    // Share imagery is produced by src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Simply Suresh — Magician & Entertainer",
    description: "Live magic, balloon modelling and special event performances from Karnataka.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-white text-ink font-sans antialiased">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}