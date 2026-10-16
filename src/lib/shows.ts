/**
 * Performance categories.
 * The brief confirms three categories; programme formats, durations and
 * pricing are deliberately NOT published because they are agreed per event.
 * Each card carries an honest note to that effect.
 */
export type Show = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  points: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    credit: string;
    representative?: boolean;
  };
  note: string;
};

export const shows: Show[] = [
  {
    id: "live-magic",
    index: "01",
    title: "Live Magic",
    blurb:
      "The core of the act: stage illusions, restored-object routines and close-up sleight of hand performed inches from the audience, with comedy carrying the wonder.",
    points: [
      "Stage magic for halls, anniversaries and corporate programmes",
      "Close-up and table magic that moves through the room",
      "Mind-reading and audience-participation routines",
    ],
    image: {
      src: "/images/youtube/paper-tear-magic.avif",
      alt: "Simply Suresh performing a restored-newspaper routine on stage in Bengaluru",
      width: 1280,
      height: 720,
      credit: "Performance frame from the Simply Suresh YouTube channel",
    },
    note: "Programme length and format are shaped around your venue and confirmed at enquiry.",
  },
  {
    id: "balloon-modelling",
    index: "02",
    title: "Balloon Modelling",
    blurb:
      "Walk-around balloon art for birthdays and family days — sculptures twisted live, handed over one delighted guest at a time.",
    points: [
      "Walk-around modelling between programme segments",
      "Themed sets for birthday and children's parties",
      "Quiet-hands craft that keeps young queues happy",
    ],
    image: {
      src: "/images/youtube/chowdaiah-memorial-hall.avif",
      alt: "Simply Suresh on stage at Chowdaiah Memorial Hall holding a modelled balloon",
      width: 1280,
      height: 720,
      credit: "Performance frame from the Simply Suresh YouTube channel",
    },
    note: "Walk-around sets are confirmed per date at enquiry; further approved media for this category is pending.",
  },
  {
    id: "special-events",
    index: "03",
    title: "Special Event Performances",
    blurb:
      "Commissioned appearances for trusts, foundations, schools and public celebrations — programmed around the occasion, not dropped into it.",
    points: [
      "Anniversary and annual-day performances for trusts and foundations",
      "School, college and Teacher's Day programmes",
      "Public and mall events, festival days and community gatherings",
    ],
    image: {
      src: "/images/youtube/lulu-mall-national-magic-day.avif",
      alt: "Simply Suresh on stage at Lulu Mall Bengaluru for National Magic Day",
      width: 640,
      height: 480,
      credit: "Performance frame from the Simply Suresh YouTube channel",
    },
    note: "Documented examples are listed on the events page; new commissions are scoped per enquiry.",
  },
];

export const bookingSteps = [
  {
    step: "01",
    title: "Share the occasion",
    body: "Send the date, venue and kind of gathering through the enquiry form or on WhatsApp. A rough guest count helps.",
  },
  {
    step: "02",
    title: "Shape the programme",
    body: "Formats, running order and any balloon or mind-reading segments are agreed with you before anything is confirmed.",
  },
  {
    step: "03",
    title: "The performance",
    body: "Simply Suresh arrives prepared for the room you described — stage, floor or walk-around — and leaves people talking about it.",
  },
] as const;
