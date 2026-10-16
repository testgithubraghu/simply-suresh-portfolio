import { ArrowRight, Clock3, MailCheck, ShieldQuestion } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/ui/section";
import { EnvelopeGlyph, PhoneGlyph, WhatsAppGlyph } from "@/components/ui/glyphs";
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Show — Booking Enquiry",
  description:
    "Enquire about a magic performance by Simply Suresh. Share your event date, venue and occasion — enquiries are validated, stored and answered personally.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44" tight>
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-8">
            <Reveal>
              <Eyebrow>Booking enquiry</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-2xl font-heading text-5xl leading-[1.03] text-ink md:text-6xl">
                Have an occasion <span className="text-accent">worth remembering?</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-xl text-lg leading-relaxed text-graphite">
                Share your event details and enquire about a magic performance. The form takes two minutes; the reply
                comes from Simply Suresh himself.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="flex flex-col gap-4 rounded-card border border-line bg-mist p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite">Prefer a direct line?</p>
            <a href={whatsappLink(defaultWhatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[15px] font-semibold text-ink hover:text-accent-deep">
              <WhatsAppGlyph className="h-4 w-4 text-accent" /> WhatsApp · {site.phoneDisplay}
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-3 text-[15px] font-semibold text-ink hover:text-accent-deep">
              <PhoneGlyph className="h-4 w-4 text-accent" /> Call {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 break-all text-[15px] font-semibold text-ink hover:text-accent-deep">
              <EnvelopeGlyph className="h-4 w-4 text-accent" /> {site.email}
            </a>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-8 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <BookingForm />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="hidden overflow-hidden rounded-card border border-line lg:block">
              <Image
                src="/images/editorial/balloon-flat-lay.jpg"
                alt="Flat lay of twisting balloons in terracotta and slate blue on off-white paper"
                width={1024}
                height={1536}
                sizes="34vw"
                className="aspect-[16/9] w-full object-cover object-center"
              />
            </div>
            <div className="rounded-card border border-line bg-white p-8">
              <h2 className="font-heading text-xl font-bold text-ink">What happens next</h2>
              <ol className="mt-6 flex flex-col gap-6">
                {[
                  { icon: MailCheck, t: "Your enquiry is recorded", d: "It lands in the studio's booking list with a reference number you can quote." },
                  { icon: Clock3, t: "A personal reply", d: "Simply Suresh reads every enquiry and replies by email or phone — WhatsApp if you prefer." },
                  { icon: ArrowRight, t: "Programme & confirmation", d: "Format, running time and fees for your exact date are agreed before anything is confirmed." },
                ].map((row, i) => (
                  <li key={row.t} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-wash text-accent">
                      <row.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-heading text-[15px] font-bold text-ink">
                        {i + 1}. {row.t}
                      </p>
                      <p className="mt-1 text-[14px] leading-relaxed text-graphite">{row.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-card border border-line bg-mist p-8">
              <h2 className="flex items-center gap-3 font-heading text-xl font-bold text-ink">
                <ShieldQuestion className="h-5 w-5 text-sky" /> Honest notes
              </h2>
              <ul className="mt-5 flex flex-col gap-3 text-[14px] leading-relaxed text-graphite">
                <li>• No prices are published: quotes depend on date, venue and programme shape.</li>
                <li>• Availability is never assumed — a date is only held once confirmed with you.</li>
                <li>• Email delivery automation isn&apos;t connected yet, so replies are sent personally.</li>
                <li>• Your details are used only to answer this enquiry. See the privacy policy.</li>
              </ul>
            </div>

            <div className="rounded-card bg-night p-8 text-white">
              <p className="font-heading text-xl font-bold">Date-sensitive?</p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                For weddings, annual days and fixed-venue events, message on WhatsApp right after submitting — it&apos;s
                the quickest way to check a date.
              </p>
              <div className="mt-6">
                <ButtonLink href={whatsappLink(defaultWhatsappMessage)} size="md">
                  <WhatsAppGlyph className="h-4 w-4 text-accent" /> WhatsApp the studio
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
