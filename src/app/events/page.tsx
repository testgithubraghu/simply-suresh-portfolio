import { ArrowRight, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/section";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events — Documented Appearances",
  description:
    "The verifiable appearance record of Simply Suresh: dated performances with links to the public reports and galleries that document them.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <Section className="pt-36 md:pt-44" tight>
        <div className="flex flex-col gap-8">
          <Reveal>
            <Eyebrow>Performance timeline</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.03] text-ink md:text-6xl">
              Documented appearances, <span className="text-accent">nothing more.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-2xl text-lg leading-relaxed text-graphite">
              An entertainer&apos;s calendar is easy to inflate. This record lists only appearances backed by public
              documentation — annual reports, trust galleries or the artist&apos;s own published footage — and links
              each one to its source.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-8 md:pt-16">
        <Timeline entries={events} />
      </Section>

      <Section surface="mist" tight>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-card border border-line bg-white p-8 md:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-wash text-accent">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-heading text-2xl font-bold text-ink">Verification policy</h2>
              <ul className="mt-6 flex flex-col gap-3 text-[15px] leading-relaxed text-graphite">
                <li>• Entries are added only with a citable public source or approved media.</li>
                <li>• Listings imply no sponsorship or endorsement by the hosting organisation.</li>
                <li>• Gallery-only entries say so plainly until a source link can be confirmed.</li>
                <li>• Details are corrected promptly when a source disagrees with this page.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-card bg-night p-8 text-white md:p-10">
              <div>
                <h2 className="font-heading text-2xl font-bold">Was Simply Suresh at your event?</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                  If you host an organisation that has documented a performance — or you hold approved photography or
                  video of one — send the details and the record will be updated with credit.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/contact">
                  Submit documentation <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/book" variant="light">
                  Book a new date
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
