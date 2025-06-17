// src/lib/guides-meta.ts

// 1. Define the shape of each guide’s metadata
export type GuideMeta = {
  title: string;
  description: string;
  ogImage: string;
};

// 2. Central store of all guides’ metadata, keyed by slug
export const guidesMeta: Record<string, GuideMeta> = {
  "southpaw-footwork": {
    title: "Southpaw Footwork 101",
    description: "Master footwork to outmanoeuvre orthodox opponents.",
    ogImage: "/og-image-southpaw-footwork.png",
  },
  "rear-hook-strategy": {
    title: "Landing the Rear Hook as a Southpaw",
    description: "Break down how to slip inside and land your best punch.",
    ogImage: "/og-image-rear-hook-strategy.png",
  },
  // …add more as you create them
};

// 3. Getter function—returns the specific meta or a sensible default
export function getGuideMeta(slug: string): GuideMeta {
  return (
    guidesMeta[slug] ?? {
      title: "Southpaw Guide",
      description: "A guide to help left-handed fighters dominate.",
      ogImage: "/og-image-guides.png", // your fallback OG image
    }
  );
}

// 4. NEW: Get all guide metadata as an array
export function getAllGuideMeta(): Array<{ slug: string } & GuideMeta> {
  return Object.entries(guidesMeta).map(([slug, meta]) => ({
    slug,
    ...meta,
  }));
}
