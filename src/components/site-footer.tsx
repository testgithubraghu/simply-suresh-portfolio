import Link from "next/link";
import { navLinks, site, whatsappLink, defaultWhatsappMessage } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/logo";
import { EnvelopeGlyph, FacebookGlyph, PhoneGlyph, WhatsAppGlyph, YouTubeGlyph } from "@/components/ui/glyphs";

const footerNav = [
  ...navLinks,
  { href: "/book", label: "Book a Show" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-white">
      <div className="container-site py-20 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="flex flex-col gap-8">
            <Wordmark invert />
            <p className="max-w-sm text-[15px] leading-relaxed text-white/60">
              Live magic, balloon modelling and special event performances from Karnataka — small moments of
              wonder that stay with people long after the applause.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Simply Suresh"
                className="grid h-11 w-11 place-items-center rounded-full border border-charcoal text-white/80 transition-colors hover:border-accent hover:text-accent"
              >
                <WhatsAppGlyph className="h-4 w-4" />
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Simply Suresh on YouTube"
                className="grid h-11 w-11 place-items-center rounded-full border border-charcoal text-white/80 transition-colors hover:border-accent hover:text-accent"
              >
                <YouTubeGlyph className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Simply Suresh on Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-charcoal text-white/80 transition-colors hover:border-accent hover:text-accent"
              >
                <FacebookGlyph className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid gap-3">
            <p className="eyebrow mb-2 text-white/40">Explore</p>
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-[15px] font-semibold text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-6">
            <p className="eyebrow text-white/40">Bookings</p>
            <p className="max-w-xs text-[15px] leading-relaxed text-white/60">
              Have an occasion worth remembering? Share the date and venue, and we will shape a programme around it.
            </p>
            <div className="flex flex-col gap-3 text-[15px] font-semibold">
              <a href={site.phoneHref} className="inline-flex items-center gap-3 text-white/80 hover:text-white">
                <PhoneGlyph className="h-4 w-4 text-accent" /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 break-all text-white/80 hover:text-white">
                <EnvelopeGlyph className="h-4 w-4 text-accent" /> {site.email}
              </a>
            </div>
            <div>
              <ButtonLink href="/book" size="md">
                Enquire About a Show
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-charcoal pt-8 text-[13px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl md:text-right">
            Performance frames courtesy of the artist&apos;s YouTube channel. Images marked
            &ldquo;representative&rdquo; are licensed stock used only where approved media is pending.
          </p>
        </div>
      </div>
    </footer>
  );
}
