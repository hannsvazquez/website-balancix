import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    imgCard: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    lang: z.string(),
  })
})

export const collections = { posts: postsCollection }
