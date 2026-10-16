"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { defaultWhatsappMessage, whatsappLink } from "@/lib/site";
import { WhatsAppGlyph } from "@/components/ui/glyphs";

/** Floating WhatsApp channel — the artist's preferred first contact. */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // No floating button on the booking page itself — the form is the focus there.
  if (pathname === "/book") return null;

  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Simply Suresh on WhatsApp"
      className={`group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-btn bg-night py-3 pl-4 pr-5 text-white shadow-lift transition-all duration-300 hover:bg-charcoal ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="relative grid h-6 w-6 place-items-center">
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-accent/40 motion-reduce:hidden"
        />
        <WhatsAppGlyph className="relative h-5 w-5 text-accent" />
      </span>
      <span className="text-sm font-semibold tracking-tight">
        WhatsApp<span className="hidden text-white/60 sm:inline"> · {`+91 98807 24467`}</span>
      </span>
    </a>
  );
}
