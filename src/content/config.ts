import { defineCollection, z } from 'astro:content';

const shows = defineCollection({
  // En Astro v5+ la carga se define distinto si usas la nueva API, 
  // pero para solucionar el error de "Legacy" rápido, mantenemos este esquema:
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    location: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { shows };