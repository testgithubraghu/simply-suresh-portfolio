import { ArrowRight, ArrowUpRight, CalendarCheck2, FileText, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { Timeline } from "@/components/timeline";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { WhatsAppGlyph, YouTubeGlyph } from "@/components/ui/glyphs";
import { events, featuredEvent } from "@/lib/events";
import { shows } from "@/lib/shows";
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Magician & Entertainer in Karnataka — Live Magic, Balloon Art & Event Shows",
  description:
    "Discover the joy of live magic with Simply Suresh — moments of surprise, laughter and wonder for birthdays, stage shows and special gatherings across Karnataka.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent-wash blur-3xl"
        />
        <div className="container-site relative grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col items-start gap-8">
            <Reveal>
              <Eyebrow>Live Magic &amp; Entertainment</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-2xl font-heading text-5xl leading-[1.02] tracking-tight text-ink md:text-7xl">
                A little wonder.
                <br />
                <span className="text-accent">A lasting memory.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="max-w-xl text-lg leading-relaxed text-graphite">
                Discover the joy of live magic with Simply Suresh—bringing moments of surprise, laughter, and wonder
                to special gatherings and audiences.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="flex flex-wrap items-center gap-4">
              <ButtonLink href="/book" size="lg">
                Book a Show <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/gallery" variant="secondary" size="lg">
                Explore the Gallery
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.32} className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm font-semibold text-graphite">
              <a href={site.phoneHref} className="hover:text-ink">
                {site.phoneDisplay}
              </a>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink"
              >
                <WhatsAppGlyph className="h-4 w-4 text-accent" /> WhatsApp
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink"
              >
                <YouTubeGlyph className="h-4 w-4 text-accent" /> {site.youtubeLabel}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={32} className="relative">
            <div className="relative overflow-hidden rounded-frame shadow-lift">
              <Image
                src="/images/youtube/paper-tear-magic.avif"
                alt="Simply Suresh performing a restored-newspaper routine on stage in Bengaluru"
                width={1280}
                height={720}
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="aspect-[4/3] w-full object-cover object-top transition-transform duration-[1200ms] hover:scale-[1.03] motion-reduce:transition-none"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-night/85 to-transparent p-6 md:p-8">
                <p className="text-sm font-semibold text-white">
                  Restored-newspaper routine
                  <span className="mt-1 block text-xs font-medium text-white/60">
                    Frame from the artist&apos;s YouTube channel · Magicians Association gathering, Bengaluru
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-6 hidden w-56 overflow-hidden rounded-card border-8 border-white shadow-card md:block">
              <Image
                src="/images/youtube/mind-reading-teachers-day.avif"
                alt="Simply Suresh performing a mind-reading routine with a guest on stage"
                width={640}
                height={480}
                sizes="224px"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-6 hidden rounded-card bg-night px-6 py-4 text-white shadow-lift md:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Based in</p>
              <p className="mt-1 font-heading text-lg font-bold">{site.region}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* --------------------------------------------------- INTRODUCTION */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="The appeal of live magic"
              title={
                <>
                  Not just a show. <span className="text-accent">A moment people remember.</span>
                </>
              }
            />
            <div className="mt-10 overflow-hidden rounded-card">
              <Image
                src="/images/youtube/mandya-movie-team.avif"
                alt="Simply Suresh mid-routine with guests gathered around the stage at Mandya"
                width={1280}
                height={720}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-graphite">
              Performance frame · Bhuvanam Gaganam movie team event, Mandya
            </p>
          </Reveal>

          <div className="flex flex-col gap-8 text-lg leading-relaxed text-graphite">
            <Reveal>
              <p className="text-2xl font-medium leading-snug text-ink">
                A screen can surprise you. Only a live room can make you lean forward, laugh out loud and ask,
                &ldquo;how on earth did he do that?&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                Magic works because it happens to <em className="not-italic font-semibold text-ink">you</em> — the card
                changes in your own hands, the thought you only whispered is spoken aloud, the torn paper knits itself
                back together a metre from your face. That is the trade Simply Suresh has built a career on: wonder at
                arm&apos;s length.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Simply Suresh is a popular entertainer and magician based in Karnataka, known for magic shows, birthday
                party entertainment and stage performances — from school halls and trust anniversaries to public
                celebrations like National Magic Day at Lulu Mall, Bengaluru. His published performances range from
                close-up sleight of hand and mind reading to warm, family-friendly comedy that keeps every generation
                of a room involved.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Everything on this site is documented: the appearances listed are drawn from public reports and
                galleries, the footage is his own, and anything still awaiting approved media is labelled as such.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="grid gap-4 sm:grid-cols-3">
              {[
                { k: "Region", v: "Karnataka, India" },
                { k: "Documented appearances", v: `${events.length} listed` },
                { k: "Channels", v: "YouTube · Facebook · WhatsApp" },
              ].map((fact) => (
                <div key={fact.k} className="rounded-tile border border-line bg-white p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite">{fact.k}</p>
                  <p className="mt-2 font-heading text-lg font-bold text-ink">{fact.v}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------- SHOWS & ENTERTAINMENT */}
      <Section surface="mist" id="shows">
        <SectionHeading
          eyebrow="Shows & entertainment"
          title="Three ways the wonder arrives."
          lead="Every programme is shaped around the room it lands in. These are the three categories Simply Suresh is booked for — formats confirmed per enquiry."
        />

        <div className="mt-16 flex flex-col gap-8">
          {/* 01 — large split */}
          <Reveal>
            <article className="grid overflow-hidden rounded-card border border-line bg-white shadow-card lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative">
                <Image
                  src={shows[0].image.src}
                  alt={shows[0].image.alt}
                  width={shows[0].image.width}
                  height={shows[0].image.height}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <p className="font-heading text-5xl font-bold text-line">{shows[0].index}</p>
                <h3 className="font-heading text-3xl font-bold text-ink md:text-4xl">{shows[0].title}</h3>
                <p className="text-[15px] leading-relaxed text-graphite">{shows[0].blurb}</p>
                <ul className="flex flex-col gap-3">
                  {shows[0].points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] text-graphite">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div>
                  <Link
                    href="/shows"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    Programme details <ArrowRight className="h-4 w-4 text-accent" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 02 + 03 — asymmetric pair */}
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal delay={0.06}>
              <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card">
                <div className="relative">
                  <Image
                    src={shows[1].image.src}
                    alt={shows[1].image.alt}
                    width={shows[1].image.width}
                    height={shows[1].image.height}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {shows[1].image.representative ? (
                    <span className="absolute right-4 top-4 rounded-btn bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-graphite">
                      Representative
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <p className="font-heading text-4xl font-bold text-line">{shows[1].index}</p>
                  <h3 className="font-heading text-2xl font-bold text-ink">{shows[1].title}</h3>
                  <p className="text-[15px] leading-relaxed text-graphite">{shows[1].blurb}</p>
                  <p className="mt-auto pt-2 text-[13px] font-semibold text-graphite">{shows[1].note}</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="flex h-full flex-col gap-6 rounded-card border border-line bg-night p-8 text-white shadow-card md:p-12">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-heading text-4xl font-bold text-charcoal">{shows[2].index}</p>
                    <h3 className="mt-4 font-heading text-3xl font-bold md:text-4xl">{shows[2].title}</h3>
                  </div>
                  <div className="w-32 shrink-0 overflow-hidden rounded-tile border border-charcoal md:w-40">
                    <Image
                      src={shows[2].image.src}
                      alt={shows[2].image.alt}
                      width={shows[2].image.width}
                      height={shows[2].image.height}
                      sizes="160px"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-white/70">{shows[2].blurb}</p>
                <ul className="flex flex-col gap-3">
                  {shows[2].points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] text-white/70">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-6 pt-4">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
                  >
                    Documented appearances <ArrowUpRight className="h-4 w-4 text-accent" />
                  </Link>
                  <p className="text-[13px] text-white/50">{shows[2].note}</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------- FEATURED EVENT */}
      <Section surface="night">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-frame border border-charcoal">
              <Image
                src="/images/representative/auditorium-light.avif"
                alt="A spotlight falling across empty auditorium seats before a show"
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-btn bg-night/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                Representative image · approved media pending
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-8">
            <Eyebrow className="text-accent">Featured appearance</Eyebrow>
            <h2 className="font-heading text-4xl leading-[1.05] text-white md:text-5xl">
              Samiksha Foundation — 15th Anniversary Celebration
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">{featuredEvent.summary}</p>
            <dl className="grid gap-6 sm:grid-cols-3">
              {[
                { k: "Date", v: featuredEvent.dateLabel, icon: CalendarCheck2 },
                { k: "Venue", v: featuredEvent.venue, icon: MapPin },
                { k: "Occasion", v: "15th anniversary", icon: FileText },
              ].map((row) => (
                <div key={row.k} className="border-t border-charcoal pt-4">
                  <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    <row.icon className="h-3.5 w-3.5 text-accent" /> {row.k}
                  </dt>
                  <dd className="mt-2 font-heading text-lg font-bold text-white">{row.v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap items-center gap-6">
              {featuredEvent.source ? (
                <a
                  href={featuredEvent.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-btn bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-mist"
                >
                  <FileText className="h-4 w-4 text-accent" /> {featuredEvent.source.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
              <Link href="/events" className="text-sm font-semibold text-white underline-offset-4 hover:underline">
                All documented appearances
              </Link>
            </div>
            <p className="max-w-lg text-[13px] leading-relaxed text-white/45">
              Listed from the Foundation&apos;s public documentation. Appearance here implies no sponsorship or
              endorsement by the Samiksha Foundation.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------- GALLERY */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Frames from the room."
            lead="Authentic performance frames from published videos, plus clearly labelled representative imagery where approved photography is still pending."
          />
          <ButtonLink href="/gallery" variant="secondary">
            Open the full gallery <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-12">
          <Reveal className="col-span-2 md:col-span-7">
            <GalleryPreviewTile
              src="/images/youtube/paper-tear-magic.avif"
              alt="Simply Suresh restoring a torn newspaper on stage"
              width={1280}
              height={720}
              ratio="aspect-[16/10]"
              label="Video · Paper Tear Magic"
            />
          </Reveal>
          <Reveal delay={0.08} className="col-span-1 row-span-2 md:col-span-5">
            <GalleryPreviewTile
              src="/images/representative/balloon-sculpture.avif"
              alt="A twisted balloon sculpture on a bright background"
              width={1400}
              height={933}
              ratio="h-full min-h-[280px]"
              label="Representative · Balloon Modelling"
              representative
            />
          </Reveal>
          <Reveal delay={0.12} className="col-span-1 md:col-span-4">
            <GalleryPreviewTile
              src="/images/youtube/mind-reading-teachers-day.avif"
              alt="Mind-reading routine with a guest during a school celebration"
              width={640}
              height={480}
              ratio="aspect-[4/3]"
              label="Video · Mind Reading"
            />
          </Reveal>
          <Reveal delay={0.16} className="col-span-1 md:col-span-3">
            <GalleryPreviewTile
              src="/images/youtube/dasara-magic-show-2024.avif"
              alt="Simply Suresh performing on stage with young volunteers at Dasara 2024"
              width={1280}
              height={720}
              ratio="aspect-[4/3]"
              label="Video · Dasara 2024"
            />
          </Reveal>
        </div>
      </Section>

      {/* --------------------------------------------- EDITORIAL QUOTE BAND */}
      <section aria-label="Brand statement" className="relative overflow-hidden bg-night py-28 md:py-40">
        <Image
          src="/images/editorial/stage-haze.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-night via-night/70 to-night/20" />
        <div className="container-site relative">
          <Reveal>
            <p className="eyebrow text-accent">{site.descriptor}</p>
            <p className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.08] text-white md:text-6xl">
              &ldquo;A little wonder.
              <br />
              A lasting memory.&rdquo;
            </p>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/60">
              The line the whole practice is built around — and the reason every show is staged for the people in the
              room, not the camera.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- PERFORMANCE TIMELINE */}
      <Section surface="mist">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Performance timeline"
            title="Documented appearances."
            lead="Only appearances with public documentary support are listed. Each entry links to its source and stays editable by the studio."
          />
          <ButtonLink href="/events" variant="secondary">
            Event details <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="mt-16">
          <Timeline entries={events} />
        </div>
      </Section>

      {/* ---------------------------------------------------------- ABOUT */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-frame shadow-lift">
                <Image
                  src="/images/youtube/fun-magic-with-kids.avif"
                  alt="Simply Suresh performing for a seated group of children"
                  width={640}
                  height={480}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden rounded-card bg-accent px-6 py-5 text-white shadow-tint md:block">
                <p className="font-heading text-lg font-bold leading-snug">
                  &ldquo;The trick is the excuse.
                  <br />
                  The moment is the point.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 flex flex-col gap-8 lg:order-2">
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  The person behind <span className="text-accent">the moments of wonder.</span>
                </>
              }
            />
            <p className="max-w-xl text-lg leading-relaxed text-graphite">
              Simply Suresh is a Karnataka-based entertainer whose performances mix sleight of hand, mind reading,
              balloon art and easy comedy. He is at home on a trust anniversary stage, a school assembly floor or a
              living-room birthday — anywhere an audience is willing to be surprised.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                "Published performances on his own YouTube channel since 2017",
                "Documented appearances for foundations, trusts and public events",
                "Family-friendly programming for every age in the room",
              ].map((line) => (
                <li key={line} className="flex items-start gap-4 text-[15px] font-semibold text-ink">
                  <span aria-hidden className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-wash text-accent">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m3 8.5 3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <div>
              <ButtonLink href="/about" variant="dark" size="lg">
                Read the full profile <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------ BOOKING CTA */}
      <Section surface="wash" tight>
        <div className="flex flex-col items-start gap-10 rounded-frame bg-white p-10 shadow-card md:flex-row md:items-center md:justify-between md:p-16">
          <div className="flex flex-col gap-6">
            <Eyebrow>Bookings open</Eyebrow>
            <h2 className="max-w-xl font-heading text-4xl leading-[1.05] text-ink md:text-5xl">
              Have an occasion worth remembering?
            </h2>
            <p className="max-w-lg text-lg text-graphite">Share your event details and enquire about a magic performance.</p>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonLink href="/book" size="lg">
              Enquire About a Show <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={whatsappLink(defaultWhatsappMessage)} variant="secondary" size="lg">
              <WhatsAppGlyph className="h-4 w-4 text-accent" /> WhatsApp instead
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function GalleryPreviewTile({
  src,
  alt,
  width,
  height,
  ratio,
  label,
  representative,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  ratio: string;
  label: string;
  representative?: boolean;
}) {
  return (
    <Link
      href="/gallery"
      className="group relative block h-full w-full overflow-hidden rounded-card bg-mist focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 40vw"
        className={`${ratio} w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/75 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{label}</span>
      </span>
      {representative ? (
        <span className="absolute right-4 top-4 rounded-btn bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-graphite">
          Representative
        </span>
      ) : null}
    </Link>
  );
}
