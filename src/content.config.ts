import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDatetime: z.date().or(z.string()),
    coverImage: z.string().optional(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).default(["genel"]),
  }),
});

export const collections = { posts };
