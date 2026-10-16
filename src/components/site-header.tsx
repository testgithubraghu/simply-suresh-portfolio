"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site, whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/logo";
import { WhatsAppGlyph } from "@/components/ui/glyphs";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:bg-night focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-line bg-white/90 backdrop-blur-xl"
            : "border-b border-transparent bg-white/0",
        )}
      >
        <div className="container-site flex h-20 items-center justify-between gap-6">
          <Wordmark />

          <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-btn px-5 py-2 text-[15px] font-semibold tracking-tight transition-colors",
                    active ? "text-ink" : "text-graphite hover:text-ink",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-5 -bottom-0.5 h-[3px] rounded-full bg-accent transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-graphite transition-colors hover:text-ink"
            >
              <WhatsAppGlyph className="h-4 w-4" />
              WhatsApp
            </a>
            <ButtonLink href="/book" size="md">
              Book a Show
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-night text-white lg:hidden"
          >
            <div className="container-site flex h-20 items-center justify-between">
              <Wordmark invert />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-12 w-12 place-items-center rounded-full border border-charcoal text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="container-site flex flex-1 flex-col justify-center gap-2 pb-16">
              {[...navLinks, { href: "/book", label: "Book a Show" }, { href: "/contact", label: "Contact" }].map(
                (link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-4 border-b border-charcoal/70 py-5 font-heading text-4xl font-bold tracking-tight text-white"
                    >
                      <span className="text-xs font-semibold tracking-[0.3em] text-accent">0{i + 1}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ),
              )}

              <div className="mt-10 flex flex-col gap-4">
                <ButtonLink href={whatsappLink(defaultWhatsappMessage)} size="lg" className="w-full">
                  <WhatsAppGlyph className="h-5 w-5" /> Chat on WhatsApp
                </ButtonLink>
                <a href={site.phoneHref} className="text-center text-sm font-semibold text-white/70">
                  {site.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
