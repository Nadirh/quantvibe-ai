import type { MetadataRoute } from "next";

const BASE_URL = "https://quantvibe.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/services/ai-consulting",
    "/services/cro-agent",
    "/services/media-mix-model",
    "/services/attribution-testing",
    "/learn/vibe-coding",
    "/learn/know-what-works",
    "/blog",
    "/about",
    "/contact",
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.8,
  }));
}
