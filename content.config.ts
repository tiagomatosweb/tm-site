import {defineContentConfig, defineCollection, z} from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        // tags: z.array(z.string()),
        // image: z.string(),
        date: z.date(),
      }),
    }),
    instagram: defineCollection({
      type: 'data',
      source: 'instagram/**/*.md',
      schema: z.object({
        slug: z.string(),
        // image: z.string(),
      }),
    }),
  },
});
