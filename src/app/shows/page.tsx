import { ArrowRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { BalloonGlyph, CardsGlyph, CurtainGlyph, WhatsAppGlyph } from "@/components/ui/glyphs";
import { bookingSteps, shows } from "@/lib/shows";
import { defaultWhatsappMessage, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shows & Services — Live Magic, Balloon Modelling, Special Events",
  description:
    "The three ways Simply Suresh performs: live magic for stages and close-up, walk-around balloon modelling, and commissioned special event performances across Karnataka.",
  alternates: { canonical: "/shows" },
};

const glyphs = [CardsGlyph, BalloonGlyph, CurtainGlyph];

export default function ShowsPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44" tight>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <Reveal>
              <Eyebrow>Shows &amp; services</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-3xl font-heading text-5xl leading-[1.03] text-ink md:text-6xl">
                Three categories. <span className="text-accent">One promise:</span> the room leaves lighter.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-2xl text-lg leading-relaxed text-graphite">
                Formats, running times and fees are never published here because they genuinely depend on your venue,
                guest count and programme. Everything below describes the shape of the work; the specifics are agreed
                with you at enquiry.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative hidden lg:block">
            <div className="overflow-hidden rounded-frame shadow-lift">
              <Image
                src="/images/editorial/cards-still-life.avif"
                alt="A fan of playing cards with one card floating above it under warm orange light"
                width={1024}
                height={1536}
                sizes="42vw"
                className="aspect-[4/3] w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-graphite">
              Editorial still · brand imagery, not a performance photograph
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-8 md:pt-12">
        <div className="flex flex-col gap-10">
          {shows.map((show, i) => {
            const Glyph = glyphs[i];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={show.id}>
                <article
                  className={cn(
                    "grid overflow-hidden rounded-card border border-line bg-white shadow-card lg:grid-cols-2",
                    i === 1 && "bg-mist",
                  )}
                >
                  <div className={cn("relative", reversed && "lg:order-2")}>
                    <Image
                      src={show.image.src}
                      alt={show.image.alt}
                      width={show.image.width}
                      height={show.image.height}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-full min-h-[300px] w-full object-cover"
                    />
                    {show.image.representative ? (
                      <span className="absolute right-4 top-4 rounded-btn bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-graphite">
                        Representative image
                      </span>
                    ) : null}
                    <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-night text-accent shadow-lift">
                      <Glyph className="h-6 w-6" />
                    </span>
                  </div>
                  <div className={cn("flex flex-col gap-6 p-8 md:p-12", reversed && "lg:order-1")}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-heading text-4xl font-bold text-line">{show.index}</span>
                      <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">{show.title}</h2>
                    </div>
                    <p className="text-[15px] leading-relaxed text-graphite md:text-base">{show.blurb}</p>
                    <ul className="flex flex-col gap-3">
                      {show.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-[15px] text-graphite">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="flex items-start gap-3 rounded-tile bg-mist px-5 py-4 text-[13px] font-semibold leading-relaxed text-graphite">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {show.note}
                    </p>
                    <div>
                      <ButtonLink href="/book" variant="secondary">
                        Enquire about {show.title.toLowerCase()} <ArrowRight className="h-4 w-4" />
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section surface="mist">
        <SectionHeading eyebrow="How booking works" title="Three steps, no surprises." />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {bookingSteps.map((step, i) => (
            <Reveal key={step.step} delay={0.08 * i}>
              <div className="relative h-full rounded-card border border-line bg-white p-8">
                <span className="font-heading text-5xl font-bold text-accent-wash">{step.step}</span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">{step.body}</p>
                {i < bookingSteps.length - 1 ? (
                  <ArrowRight aria-hidden className="absolute -right-6 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-line md:block" />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-8 rounded-card border border-line bg-white p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <h3 className="font-heading text-2xl font-bold text-ink">What gets confirmed at enquiry</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Programme format and running time",
                  "Stage, floor or walk-around setup",
                  "Balloon or mind-reading segments",
                  "Travel within and beyond Karnataka",
                  "Sound and space requirements",
                  "Fees for your specific date",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[15px] text-graphite">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-4 rounded-tile bg-night p-8 text-white">
              <p className="font-heading text-xl font-bold">Prefer to talk it through?</p>
              <p className="text-[14px] leading-relaxed text-white/60">
                WhatsApp is the fastest route to a real answer about your date.
              </p>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-btn bg-accent px-6 text-[15px] font-semibold text-white hover:bg-accent-deep"
              >
                <WhatsAppGlyph className="h-4 w-4" /> Start a chat
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
