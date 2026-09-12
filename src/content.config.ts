import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: BLOG_PATH }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(""),
    pubDatetime: z.coerce.date(),
    modDatetime: z.coerce.date().optional().nullable(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).default(["genel"]),
    ogImage: z.any().optional(),
    canonicalURL: z.string().optional(),
    hideEditPost: z.boolean().optional().default(true),
    timezone: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDatetime: z.coerce.date().optional(),
    modDatetime: z.coerce.date().optional().nullable(),
    ogImage: z.any().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages };
