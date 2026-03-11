import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://injaz.pro";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/why-injaz`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/modules`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/implementation`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
