import type { MetadataRoute } from "next";
import { metadataBase } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/shows",
  "/gallery",
  "/events",
  "/book",
  "/contact",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${metadataBase}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
