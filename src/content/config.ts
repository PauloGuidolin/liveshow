import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Esto es lo nuevo

const shows = defineCollection({
  // El loader le dice a Astro dónde buscar los archivos .md
  loader: glob({ pattern: "**/*.md", base: "./src/content/shows" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    location: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { shows };