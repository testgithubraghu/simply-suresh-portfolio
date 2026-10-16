import { ArrowUpRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import {
  EnvelopeGlyph,
  FacebookGlyph,
  PhoneGlyph,
  WhatsAppGlyph,
  YouTubeGlyph,
} from "@/components/ui/glyphs";
import { defaultWhatsappMessage, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Phone, WhatsApp, Email & Social Channels",
  description:
    "Reach Simply Suresh by phone, WhatsApp or email, or follow his published performances on YouTube and Facebook.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: site.phoneDisplay,
    note: "Fastest for date checks and quick questions.",
    href: whatsappLink(defaultWhatsappMessage),
    external: true,
    glyph: WhatsAppGlyph,
    accent: true,
  },
  {
    id: "phone",
    label: "Phone",
    value: site.phoneDisplay,
    note: "Call for bookings and event planning conversations.",
    href: site.phoneHref,
    external: false,
    glyph: PhoneGlyph,
  },
  {
    id: "email",
    label: "Email",
    value: site.email,
    note: "Best for briefs, documents and approved media.",
    href: `mailto:${site.email}`,
    external: false,
    glyph: EnvelopeGlyph,
  },
  {
    id: "youtube",
    label: "YouTube",
    value: site.youtubeLabel,
    note: "Published performance videos and event reels.",
    href: site.youtube,
    external: true,
    glyph: YouTubeGlyph,
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "Mentions & tags",
    note: "Public mentions of Simply Suresh across Facebook.",
    href: site.facebook,
    external: true,
    glyph: FacebookGlyph,
  },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44" tight>
        <div className="flex flex-col gap-8">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.03] text-ink md:text-6xl">
              Every route to the <span className="text-accent">man in the waistcoat.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-2xl text-lg leading-relaxed text-graphite">
              These are the only published channels for Simply Suresh. Enquiries sent anywhere else — or to numbers
              that look similar — aren&apos;t him.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-8 md:pt-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.id} delay={0.06 * i}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group flex h-full flex-col gap-5 rounded-card border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:hover:translate-y-0 ${
                  channel.accent ? "border-accent bg-accent-wash" : "border-line bg-white"
                }`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-full ${
                    channel.accent ? "bg-accent text-white" : "bg-mist text-ink"
                  }`}
                >
                  <channel.glyph className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite">{channel.label}</p>
                  <p className="mt-2 break-words font-heading text-xl font-bold text-ink">{channel.value}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-graphite">{channel.note}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  Open channel <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-card bg-night p-8 text-white">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-charcoal text-accent">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Base</p>
                <p className="mt-2 font-heading text-xl font-bold">{site.region}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/60">
                  Performances travel with the event — school halls, farms, malls and auditoriums included. Travel is
                  discussed at enquiry.
                </p>
              </div>
              <ButtonLink href="/book" variant="light">
                Send a booking enquiry
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section surface="mist" tight>
        <SectionHeading
          eyebrow="Before you write"
          title="What makes a first message useful."
          lead="Not mandatory — but these four lines get you a complete answer in one reply."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { k: "Date & time", v: "Even a tentative window helps check the calendar." },
            { k: "Venue & city", v: "Indoor hall, open farm, mall atrium — the space shapes the show." },
            { k: "Occasion", v: "Birthday, annual day, anniversary, public event…" },
            { k: "Guest count", v: "A rough number decides stage, floor or walk-around." },
          ].map((row, i) => (
            <Reveal key={row.k} delay={0.06 * i}>
              <div className="h-full rounded-card border border-line bg-white p-6">
                <p className="font-heading text-lg font-bold text-ink">{row.k}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-graphite">{row.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
