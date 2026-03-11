import { defineCollection, z } from 'astro:content';

const shows = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    location: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { shows };