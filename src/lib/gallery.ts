/**
 * Gallery media.
 *
 * `kind: "video"` items are frames captured from the artist's own published
 * YouTube videos — authentic performance footage, credited as such.
 * Items flagged `representative` are licensed stock photographs used only to
 * illustrate programme categories for which approved performance photography
 * has not yet been supplied. They are labelled in the UI and are never
 * presented as photographs of Simply Suresh.
 */
export type GalleryCategory =
  | "stage"
  | "kids"
  | "mind"
  | "community"
  | "balloon";

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "stage", label: "Stage Magic" },
  { id: "kids", label: "Kids & Schools" },
  { id: "mind", label: "Mind Reading" },
  { id: "community", label: "Community Events" },
  { id: "balloon", label: "Balloon Modelling" },
];

export type GalleryItem = {
  id: string;
  kind: "photo" | "video";
  category: GalleryCategory;
  title: string;
  caption: string;
  credit: string;
  representative?: boolean;
  src: string;
  width: number;
  height: number;
  youtubeId?: string;
  /** masonry hint: tall | wide | square */
  span?: "tall" | "wide" | "square";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "paper-tear",
    kind: "video",
    category: "stage",
    title: "Paper Tear Magic",
    caption: "Restored newspaper routine at a Magicians Association gathering, Bengaluru.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/paper-tear-magic.avif",
    width: 1280,
    height: 720,
    youtubeId: "cdlidrKyFWc",
    span: "wide",
  },
  {
    id: "mandya-movie-team",
    kind: "video",
    category: "stage",
    title: "Magic with the Bhuvanam Gaganam Movie Team",
    caption: "Stage set for the Bhuvanam Gaganam film team at Mandya.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/mandya-movie-team.avif",
    width: 1280,
    height: 720,
    youtubeId: "OF1EwVStqUE",
    span: "wide",
  },
  {
    id: "lulu-mall",
    kind: "video",
    category: "community",
    title: "National Magic Day at Lulu Mall",
    caption: "Public performance for National Magic Day, 23 February 2024, Lulu Mall, Bengaluru.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/lulu-mall-national-magic-day.avif",
    width: 640,
    height: 480,
    youtubeId: "pG5NFMu3FZg",
  },
  {
    id: "mind-reading-rcis",
    kind: "video",
    category: "mind",
    title: "Mind Reading with Dr Shruthi Chetan",
    caption: "Thought-forcing routine during a Teacher's Day celebration at RCIS, 2022.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/mind-reading-teachers-day.avif",
    width: 640,
    height: 480,
    youtubeId: "PDpeErB1RzM",
  },
  {
    id: "fun-magic-kids",
    kind: "video",
    category: "kids",
    title: "Fun Magic with Kids",
    caption: "Tissue-to-dove moment with a young audience at a Bharatanatyam class gathering.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/fun-magic-with-kids.avif",
    width: 640,
    height: 480,
    youtubeId: "2oUXVy5n5uA",
  },
  {
    id: "balloon-sculpture",
    kind: "photo",
    category: "balloon",
    title: "Balloon Modelling",
    caption: "Walk-around balloon sculptures shaped live in front of guests.",
    credit: "Representative image — approved performance photography to follow",
    representative: true,
    src: "/images/representative/balloon-sculpture.avif",
    width: 1400,
    height: 933,
    span: "tall",
  },
  {
    id: "balloon-arch",
    kind: "photo",
    category: "balloon",
    title: "Colour Work",
    caption: "Twisted colour studies — the raw material of a balloon set.",
    credit: "Representative image — approved performance photography to follow",
    representative: true,
    src: "/images/representative/balloon-arch.avif",
    width: 1400,
    height: 933,
  },
  {
    id: "auditorium-light",
    kind: "photo",
    category: "stage",
    title: "Before the House Opens",
    caption: "The quiet half-hour before a stage show — lights up, seats full of expectation.",
    credit: "Representative image — approved performance photography to follow",
    representative: true,
    src: "/images/representative/auditorium-light.avif",
    width: 1600,
    height: 1067,
    span: "square",
  },
  {
    id: "stage-spots",
    kind: "photo",
    category: "community",
    title: "Rig & Haze",
    caption: "House rig for an evening community programme.",
    credit: "Representative image — approved performance photography to follow",
    representative: true,
    src: "/images/representative/stage-spots.avif",
    width: 1600,
    height: 1067,
  },
  {
    id: "dasara-2024",
    kind: "video",
    category: "community",
    title: "Dasara Magic Show 2024",
    caption: "Stage magic with young volunteers during Dasara 2024, as broadcast by Suddiranga news.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/dasara-magic-show-2024.avif",
    width: 1280,
    height: 720,
    youtubeId: "5kuLNZtfgs0",
    span: "wide",
  },
  {
    id: "chowdaiah-hall",
    kind: "video",
    category: "stage",
    title: "Chowdaiah Memorial Hall",
    caption: "A balloon moment mid-show at Chowdaiah Memorial Hall, Bengaluru.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/chowdaiah-memorial-hall.avif",
    width: 1280,
    height: 720,
    youtubeId: "aWDdrZFzk3M",
    span: "wide",
  },
  {
    id: "birthday-dance-class",
    kind: "video",
    category: "kids",
    title: "Birthday at the Dance Class",
    caption: "Close-quarters birthday set for a dance-class party — the room becomes the stage.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/birthday-dance-class.avif",
    width: 640,
    height: 480,
    youtubeId: "yNaYy9ecuQw",
  },
  {
    id: "clown-walkaround",
    kind: "video",
    category: "kids",
    title: "Clown & Comedy Walk-around",
    caption: "Comedy character work between magic sets at a Magicians' Association event.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/clown-act.avif",
    width: 1280,
    height: 720,
    youtubeId: "GYM1ozv_kVI",
    span: "wide",
  },
  {
    id: "global-academy",
    kind: "video",
    category: "kids",
    title: "Global Academy School Show",
    caption: "School programme at Global Academy, Bengaluru — full floor of students.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/global-academy-school-show.avif",
    width: 640,
    height: 480,
    youtubeId: "oo3Kvn9vAQI",
  },
  {
    id: "magicians-day-2021",
    kind: "video",
    category: "community",
    title: "Magicians Day 2021",
    caption: "Performing alongside colleagues for Magicians Day 2021.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/magicians-day-2021.avif",
    width: 640,
    height: 480,
    youtubeId: "QP9kqPymTMI",
  },
  {
    id: "orion-mall-2023",
    kind: "video",
    category: "community",
    title: "Orion Mall — Magician's Day 2023",
    caption: "Public set at Orion Mall, Bengaluru for Magician's Day 2023.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/orion-mall-magicians-day-2023.avif",
    width: 1280,
    height: 720,
    youtubeId: "c-1WtZEpdQ0",
    span: "wide",
  },
  {
    id: "tissue-paper",
    kind: "video",
    category: "stage",
    title: "Magic with Tissue Paper",
    caption: "The tissue-paper routine that travels anywhere and fools everyone.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/tissue-paper-magic.avif",
    width: 640,
    height: 480,
    youtubeId: "amw_XV1Qsa8",
  },
  {
    id: "ball-magic",
    kind: "video",
    category: "stage",
    title: "Ball Magic",
    caption: "Classic balls routine — pure sleight of hand, no apparatus.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/ball-magic.avif",
    width: 640,
    height: 480,
    youtubeId: "aOtbFdqEaPM",
  },
  {
    id: "paper-eating",
    kind: "video",
    category: "stage",
    title: "Paper Eating Magic",
    caption: "The paper-eating routine — a crowd favourite at association gatherings.",
    credit: "Frame from the Simply Suresh YouTube channel",
    src: "/images/youtube/paper-eating-magic.avif",
    width: 640,
    height: 480,
    youtubeId: "ZyCefp9HJ-s",
  },
];

/**
 * The artist's published performance videos, linked straight to YouTube.
 * Listed without per-video dates: publication years are approximate on the
 * platform and this site doesn't guess.
 */
export const videoArchive: { youtubeId: string; title: string; note: string }[] = [
  { youtubeId: "cdlidrKyFWc", title: "Simply Suresh Magic — Paper Tear", note: "Association gathering, Bengaluru" },
  { youtubeId: "5kuLNZtfgs0", title: "Magic Show at Dasara 2024", note: "Suddiranga news coverage" },
  { youtubeId: "pG5NFMu3FZg", title: "National Magic Day at Lulu Mall", note: "Bengaluru, 23 February 2024" },
  { youtubeId: "c-1WtZEpdQ0", title: "Orion Mall — Magician's Day 2023", note: "Public performance" },
  { youtubeId: "PDpeErB1RzM", title: "Mind Reading with Dr Shruthi Chetan", note: "Teacher's Day celebration, RCIS" },
  { youtubeId: "OF1EwVStqUE", title: "Magic with the Bhuvanam Gaganam Movie Team", note: "Mandya" },
  { youtubeId: "aWDdrZFzk3M", title: "Magic Show at Chowdaiah Memorial Hall", note: "Bengaluru" },
  { youtubeId: "5R6dWSlwoWQ", title: "Magical Sankranthi with Pavana Gowda", note: "Praja TV · Hulikere, Mandya" },
  { youtubeId: "Ff2h51yEiM4", title: "Sankranthi Sambramha with the Ek Love Ya Team", note: "Praja TV special" },
  { youtubeId: "QP9kqPymTMI", title: "Magicians Day 2021", note: "Association gathering" },
  { youtubeId: "2oUXVy5n5uA", title: "Fun Magic with Kids", note: "Bharatanatyam class gathering" },
  { youtubeId: "yNaYy9ecuQw", title: "Birthday Magic at a Dance Class", note: "Private party set" },
  { youtubeId: "oo3Kvn9vAQI", title: "School Show at Global Academy", note: "Bengaluru" },
  { youtubeId: "GYM1ozv_kVI", title: "Clown & Comedy Act", note: "Walk-around character work" },
  { youtubeId: "ZyCefp9HJ-s", title: "Paper Eating Magic", note: "Stage routine" },
  { youtubeId: "aOtbFdqEaPM", title: "Ball Magic", note: "Sleight-of-hand routine" },
];
