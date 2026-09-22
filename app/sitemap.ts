import type { MetadataRoute } from "next";

const SITE_URL = "https://espelho-meu-patricia-bh.eduardosoarestonon.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
