import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDatetime: z.date(),
      description: z.string().optional(),
      coverImage: z.string().optional(),
      draft: z.boolean().optional().default(false),
      tags: z.array(z.string()).optional().default(["genel"]),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { posts, pages };
