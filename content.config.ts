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
    jornadaLaravel: defineCollection({
      type: 'page',
      source: {
        include: 'jornada-laravel/**',
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional(),
        })).optional(),
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
