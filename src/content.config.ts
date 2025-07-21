import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.date(),
    endDate: z.union([z.date(), z.string()]).default("Present"),
    technologies: z.array(z.string()),
    url: z.string().url(),
  }),
});

export const collections = { experiences };
