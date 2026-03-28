import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gwenviet.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/animation`, priority: 0.9 },
    { url: `${BASE_URL}/arts-martiaux`, priority: 0.9 },
    { url: `${BASE_URL}/tarifs`, priority: 0.9 },
    { url: `${BASE_URL}/contact`, priority: 0.8 },
    { url: `${BASE_URL}/a-propos`, priority: 0.7 },
    { url: `${BASE_URL}/faq`, priority: 0.7 },
    { url: `${BASE_URL}/temoignages`, priority: 0.6 },
    { url: `${BASE_URL}/galerie`, priority: 0.6 },
    // Anniversaires
    { url: `${BASE_URL}/animation/anniversaires/ninja`, priority: 0.9 },
    { url: `${BASE_URL}/animation/anniversaires/koh-lanta`, priority: 0.9 },
    { url: `${BASE_URL}/animation/anniversaires/guerrier-vietnamien`, priority: 0.8 },
    { url: `${BASE_URL}/animation/anniversaires/fort-boyard`, priority: 0.8 },
    { url: `${BASE_URL}/animation/anniversaires/super-heros`, priority: 0.8 },
    { url: `${BASE_URL}/animation/anniversaires/olympiades`, priority: 0.8 },
    // Autres animations
    { url: `${BASE_URL}/animation/grands-jeux`, priority: 0.8 },
    { url: `${BASE_URL}/animation/stages-vacances`, priority: 0.9 },
    { url: `${BASE_URL}/animation/team-building`, priority: 0.8 },
    // Arts martiaux
    { url: `${BASE_URL}/arts-martiaux/vovinam`, priority: 0.9 },
    { url: `${BASE_URL}/arts-martiaux/kick-boxing`, priority: 0.8 },
    { url: `${BASE_URL}/arts-martiaux/self-defense`, priority: 0.8 },
  ];

  return staticPages.map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority,
  }));
}
