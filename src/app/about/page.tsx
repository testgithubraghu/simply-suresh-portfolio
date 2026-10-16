import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppGlyph, YouTubeGlyph } from "@/components/ui/glyphs";
import { events } from "@/lib/events";
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — The person behind the moments of wonder",
  description:
    "Who Simply Suresh is, what is documented about his performances, and the way he builds a show around the people in the room.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "The audience is the act",
    body: "Routines are chosen for the room in front of him — a school floor needs different wonder from a trustees' dinner — and guests are brought into nearly every effect.",
  },
  {
    title: "Warmth before spectacle",
    body: "Comedy and ease come first. People relax, then they're astonished — which is exactly the order a good memory is made in.",
  },
  {
    title: "Honest advertising",
    body: "This profile lists only documented appearances and the artist's own footage. Anything unverified is labelled, and nothing is claimed that can't be shown.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44" tight>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-8">
            <Reveal>
              <Eyebrow>About Simply Suresh</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-2xl font-heading text-5xl leading-[1.03] text-ink md:text-6xl">
                The person behind <span className="text-accent">the moments of wonder.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-xl text-lg leading-relaxed text-graphite">
                A magician and entertainer from Karnataka who has spent years turning birthdays, anniversaries, school
                days and public festivals into stories people retell. The work is simple to describe and difficult to
                forget: live magic, performed close enough to touch.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="flex flex-wrap gap-4">
              <ButtonLink href="/book">
                Enquire About a Show <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={site.youtube} variant="secondary">
                <YouTubeGlyph className="h-4 w-4 text-accent" /> Watch the channel
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="relative">
            <div className="overflow-hidden rounded-frame shadow-lift">
              <Image
                src="/images/youtube/paper-tear-magic.avif"
                alt="Simply Suresh on stage in a maroon waistcoat performing with a newspaper"
                width={1280}
                height={720}
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-graphite">
              Performance frame from the artist&apos;s YouTube channel
            </p>
          </Reveal>
        </div>
      </Section>

      <Section surface="mist">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading eyebrow="On the record" title="What can be confirmed." />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-graphite">
              Profiles of entertainers attract invented biographies. This one doesn&apos;t carry any: the facts below
              come from public listings, published reports and the artist&apos;s own channel.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { k: "Based in", v: site.region, s: "Public listings & event locations" },
              { k: "Practise", v: "Magic, entertainment, balloon art", s: "Published performance videos" },
              { k: "On YouTube since", v: "2017", s: "Earliest published performance video" },
              { k: "Documented appearances", v: `${events.length}`, s: "Reports & galleries cited on /events" },
            ].map((row, i) => (
              <Reveal key={row.k} delay={0.06 * i}>
                <div className="h-full rounded-card border border-line bg-white p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite">{row.k}</p>
                  <p className="mt-3 font-heading text-2xl font-bold text-ink">{row.v}</p>
                  <p className="mt-3 text-[13px] text-graphite">{row.s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Approach" title="How a Simply Suresh show is built." />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i}>
              <div className="flex h-full flex-col gap-4 rounded-card border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:hover:translate-y-0">
                <span className="font-heading text-4xl font-bold text-accent">0{i + 1}</span>
                <h3 className="font-heading text-2xl font-bold text-ink">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-graphite">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section surface="mist">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Documented highlights"
            title="Appearances with paper trails."
            lead="A short, honest record: every entry below links to the documentation that supports it."
          />
          <ButtonLink href="/events" variant="secondary">
            Full event record <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-16">
          <Timeline entries={events} />
        </div>
      </Section>

      <Section surface="wash" tight>
        <div className="flex flex-col items-start justify-between gap-8 rounded-frame bg-night p-10 text-white md:flex-row md:items-center md:p-14">
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Curious what he&apos;d bring to your event?</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65">
              The quickest answer comes over WhatsApp — send the date and the occasion, and the conversation starts there.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/shows" variant="light">
              See the shows
            </ButtonLink>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-btn border border-charcoal px-7 text-[15px] font-semibold text-white hover:border-white/60"
            >
              <WhatsAppGlyph className="h-4 w-4 text-accent" /> WhatsApp
            </a>
          </div>
        </div>
      </Section>

    </>
  );
}
