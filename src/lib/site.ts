/**
 * Verified public contact & channel details for Simply Suresh.
 * Nothing here is invented: phone, email and social channels come from the
 * artist's own published listings.
 */
export const site = {
  name: "Simply Suresh",
  wordmark: "SIMPLY SURESH",
  descriptor: "MAGICIAN · ENTERTAINER · MOMENTS OF WONDER",
  tagline: "A little wonder. A lasting memory.",
  region: "Karnataka, India",
  phoneDisplay: "+91 98807 24467",
  phoneHref: "tel:+919880724467",
  whatsappNumber: "919880724467",
  email: "sureshthemagician@gmail.com",
  youtube: "https://www.youtube.com/@simplysuresh5457",
  youtubeLabel: "@simplysuresh5457",
  facebook: "https://www.facebook.com/100069726069471/mentions/",
  facebookLabel: "Facebook mentions",
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/shows", label: "Shows" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
] as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hello Simply Suresh! I found your website and would like to enquire about a magic performance.";

/**
 * Canonical origin for SEO/OG metadata.
 * Set SITE_URL in deployment. Until a real domain is configured we fall back
 * to the reserved `.example` TLD rather than claiming a domain that may
 * belong to someone else.
 */
export const metadataBase =
  process.env.SITE_URL ??
  (process.env.NODE_ENV === "production" ? "https://simplysuresh.example" : "http://localhost:3000");
