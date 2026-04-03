import type { MetadataRoute } from "next";
import { articles } from "@/reference/article";
import { pages } from "@/reference/tab";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  // Static pages
  const staticPages = pages.map((page: { url: string }) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: page.url === "/" ? 1.0 : 0.8,
  }));

  // Article pages
  const articlePages = articles.map((article: { url: string }) => ({
    url: article.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages];
}
