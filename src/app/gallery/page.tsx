import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { GalleryBrowser } from "@/components/gallery-browser";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { YouTubeGlyph } from "@/components/ui/glyphs";
import { videoArchive } from "@/lib/gallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery — Photography & Videos",
  description:
    "Performance frames from Simply Suresh's published videos and clearly labelled representative imagery, filterable by programme category with video playback.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44" tight>
        <div className="flex flex-col gap-8">
          <Reveal>
            <Eyebrow>Gallery</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.03] text-ink md:text-6xl">
              Photography &amp; videos, <span className="text-accent">exactly as sourced.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-2xl text-lg leading-relaxed text-graphite">
              Video items play footage from the artist&apos;s own published channel. Items marked
              <span className="font-semibold text-ink"> Representative</span> are licensed stock used only to illustrate
              categories whose approved performance photography has not yet been supplied — they are never photographs
              of Simply Suresh.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-8 md:pt-12">
        <GalleryBrowser />
      </Section>

      <Section surface="night">
        <SectionHeading
          invert
          eyebrow="Video archive"
          title="Published performances, straight from the channel."
          lead="Every authentic frame on this page is a still from one of these videos. Open any of them to watch the performance where it actually lives."
        />
        <ul className="mt-16 grid gap-4 md:grid-cols-2">
          {videoArchive.map((video) => (
            <li key={video.youtubeId}>
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 rounded-tile border border-charcoal bg-night px-6 py-5 transition-colors hover:border-accent"
              >
                <span>
                  <span className="block font-heading text-[16px] font-bold text-white">{video.title}</span>
                  <span className="mt-1 block text-[13px] text-white/50">{video.note}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section surface="mist" tight>
        <div className="flex flex-col items-start justify-between gap-8 rounded-card border border-line bg-white p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">More footage lives on the channel.</h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-graphite">
              Full performances, school visits and public event reels are published on YouTube as they&apos;re edited.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={site.youtube}>
              <YouTubeGlyph className="h-4 w-4" /> {site.youtubeLabel} <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/book" variant="secondary">
              Book a Show
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
