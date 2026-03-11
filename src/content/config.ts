import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shows = defineCollection({
  // Esto es lo que Astro v5 necesita para no fallar
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/shows" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    location: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { shows };