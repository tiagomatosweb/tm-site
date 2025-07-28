import {defineContentConfig, defineCollection, z} from '@nuxt/content';

export default defineContentConfig({
  collections: {
    snippets: defineCollection({
      type: 'page',
      source: 'snippets/*.md',
    }),
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
        exclude: [
          'jornada-laravel/index.md',
          // 'jornada-laravel/2.conteudo/**.md',
          'jornada-laravel/3.cursos/**.md',
          'jornada-laravel/4.projetos/**.md',
          'jornada-laravel/5.outras-informacoes/**.md',
          // 'jornada-laravel/2.conteudo/estrutura-da-jornada.md',
          // 'jornada-laravel/2.conteudo/z_fase-1.out',
          // 'jornada-laravel/2.conteudo/z_fase-2.out',
          // 'jornada-laravel/2.conteudo/z_fase-3.out',
        ],
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
    database: defineCollection({
      type: 'data',
      source: 'database/**/*.yml',
      schema: z.object({
        slug: z.string(),
      }),
    }),
  },
});
