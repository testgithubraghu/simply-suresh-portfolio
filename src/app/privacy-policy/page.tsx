import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Eyebrow, Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this website handles the details you share: enquiry storage, embedded video, and your choices.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "1. What this site collects",
    body: [
      "The only personal details this website asks for are the ones you type into the booking enquiry form: your name, email address, and — if you choose to provide them — a phone number, event date, venue or city, expected audience size and a message about the occasion.",
      "Browsing this site does not require an account, and no personal details are collected simply by visiting pages.",
    ],
  },
  {
    title: "2. How enquiry details are used",
    body: [
      "Enquiry details are stored in the website's database so that Simply Suresh can read them and reply about your event. They are used for that purpose alone.",
      "Details are never sold, rented or shared with third parties for marketing, and you are never added to a mailing list by submitting an enquiry.",
    ],
  },
  {
    title: "3. Cookies and analytics",
    body: [
      "This website sets no advertising or tracking cookies and runs no third-party analytics scripts.",
      "Your browser may store technical data (such as cached fonts and images) purely to load pages faster.",
    ],
  },
  {
    title: "4. Embedded video",
    body: [
      "Performance videos on this site are hosted on YouTube. Video players are click-to-load: no request is sent to YouTube and no YouTube cookies are set until you press play on a video.",
      "Once you choose to play a video, YouTube's own privacy policy governs that playback.",
    ],
  },
  {
    title: "5. External links",
    body: [
      "Pages link to external services — YouTube, Facebook, WhatsApp, telephone and email clients, and the public reports cited on the events page. Those services operate under their own privacy policies once you leave this site.",
    ],
  },
  {
    title: "6. Retention and your choices",
    body: [
      "Enquiry records are kept while they remain useful for booking administration and are deleted on request.",
      "You may ask at any time what details are held about you, ask for a correction, or ask for deletion, by writing to the email address below. Requests are actioned without unnecessary delay.",
    ],
  },
  {
    title: "7. Children",
    body: [
      "This website is not directed at children and does not knowingly collect details from them. Performance photography of young audience members appears only where it was published by the artist or the hosting organisation.",
    ],
  },
  {
    title: "8. Changes to this policy",
    body: [
      "If the way this site handles details changes, this page is updated and the revision date below moves with it.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const year = new Date().getFullYear();

  return (
    <Section className="pt-36 md:pt-44">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>Privacy policy</Eyebrow>
          <h1 className="mt-6 font-heading text-5xl leading-[1.03] text-ink md:text-6xl">
            Plain words about <span className="text-accent">your details.</span>
          </h1>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-graphite">
            Last updated: January {year}. Questions about this policy can be sent to{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-ink underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </Reveal>

        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={0.04 * i}>
              <article className="border-t border-line pt-8">
                <h2 className="font-heading text-2xl font-bold text-ink">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-2xl text-[15px] leading-relaxed text-graphite">
                    {paragraph}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
