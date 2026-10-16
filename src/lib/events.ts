/**
 * Documented appearances only.
 * Every entry below is backed by a public source (annual report, trust
 * gallery or the artist's own channel). Nothing is inferred or invented, and
 * entries stay editable in this single module.
 */
export type EventEntry = {
  id: string;
  /** ISO date, used for ordering */
  date: string;
  dateLabel: string;
  title: string;
  venue: string;
  summary: string;
  status: "documented" | "gallery";
  statusNote: string;
  source?: { label: string; url: string };
  image?: { src: string; alt: string; width: number; height: number };
};

export const events: EventEntry[] = [
  {
    id: "angana-2022",
    date: "2022-11-17",
    dateLabel: "17 November 2022",
    title: "Angana",
    venue: "As documented in the Samiksha Foundation annual report",
    summary:
      "A performance listed in the Samiksha Foundation's annual reporting as part of the Foundation's creative-learning programme for children.",
    status: "documented",
    statusNote: "Documented in the Samiksha Foundation annual report.",
    source: {
      label: "Samiksha Foundation — annual reports",
      url: "https://samikshafoundation.org/reports/",
    },
  },
  {
    id: "samiksha-15th-2024",
    date: "2024-06-18",
    dateLabel: "18 June 2024",
    title: "Samiksha Foundation — 15th Anniversary Celebration",
    venue: "Kamakshi Farms",
    summary:
      "Simply Suresh performed as the Foundation marked fifteen years of creative learning for children with cancer and their caregivers.",
    status: "documented",
    statusNote: "Documented appearance — details as published by the Foundation.",
    source: {
      label: "Samiksha Foundation — 15th year annual report (2023–24)",
      url: "https://samikshafoundation.org/reports/samiksha-foundation-annual-report-2023-24.pdf",
    },
    // Approved photography for this appearance is pending, so the featured
    // panel on the home page uses a clearly labelled representative image.
  },
  {
    id: "vasavi-2026",
    date: "2026-06-25",
    dateLabel: "25 June 2026",
    title: "Vasavi Charitable Trust — Annual Day",
    venue: "Annual-day gallery entry",
    summary:
      "Listed in the Vasavi Charitable Trust annual-day gallery as a performance by Simply Suresh.",
    status: "gallery",
    statusNote: "Gallery entry — source link is added once the trust's archive page is confirmed.",
  },
];

export const featuredEvent = events.find((e) => e.id === "samiksha-15th-2024")!;
