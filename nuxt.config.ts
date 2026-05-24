import {createResolver} from 'nuxt/kit';
import {sentryVitePlugin} from "@sentry/vite-plugin";

const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_PUBLIC_API_URL,
      youtubeApiKey: process.env.NUXT_PUBLIC_YOUTUBE_API_KEY,
      whatsappPhone: process.env.NUXT_PUBLIC_WHATSAPP_PHONE,
    },
  },

  nitro: {
    preset: 'cloudflare_pages',
  },

  css: ['~/assets/css/main.css'],

  imports: {
    dirs: ['constants'],
  },

  app: {
    head: {
      // title: 'Tiago Matos',
      // htmlAttrs: {
      //     lang: 'pt-br',
      // },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        // { hid: 'description', name: 'description', content: 'Sou engenheiro de software independente e sou apaixonado por novas tecnologias em special por Vue.js, PWA e Laravel. Eu ajudo programadores de todos os níveis a se tornarem grandes referências no mercado de desenvolvimento de softwares. Eu escrevo artigos e eventualmente dou palestras.' },
        {hid: 'theme-color', name: 'theme-color', content: '#ffffff'},
      ],
      script: [
        {src: 'https://apis.google.com/js/api.js'},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
        {rel: 'manifest', href: '/site.webmanifest'},
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
      ],
    },
  },

  modules: ['@nuxt/ui', '@comark/nuxt', // '@zadigetvoltaire/nuxt-gtm',
  '@nuxtjs/google-fonts', 'dayjs-nuxt', '@nuxt/scripts',
  'motion-v/nuxt',
  // '@sentry/nuxt/module'
],

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: resolve('./app/assets/icons'),
    }],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
  },

  dayjs: {
    locales: ['pt-br'],
    plugins: ['utc', 'timezone', 'isBetween', 'duration', 'relativeTime'],
    defaultLocale: 'pt-br',
    defaultTimezone: 'America/Sao_Paulo',
  },

  colorMode: {
    storageKey: 'tm-color-mode',
  },

  // site: {
  //   url: process.env.NUXT_PUBLIC_SITE_URL,
  //   name: 'Tiago Matos',
  //   description: 'Conteúdos diários sobre Laravel e Vue.js.',
  //   defaultLocale: 'pt-br',
  // },

  routeRules: {
    '/**/obrigado': {robots: false},
    '/jornada-laravel': { redirect: '/laravel-pro', prerender: false },
    '/jornada-laravel/**': { redirect: '/laravel-pro', prerender: false },
  },

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700, 800],
    },
  },

  gtm: {
    id: 'GTM-PG5CMBN',
  },

  compatibilityDate: '2025-08-02',

  future: {
    compatibilityVersion: 4,
  },

  build: {
    transpile: ['form-data'], // TODO: Added because of the form-data bug, test it later
  },

  // sentry: {
  //   sourceMapsUploadOptions: {
  //     authToken: process.env.SENTRY_AUTH_TOKEN,
  //     org: 'tiagomatosweb',
  //     project: 'tm-site',
  //   },
  // },

  vite: {
    plugins: [
      sentryVitePlugin({
        org: 'tiagomatosweb',
        project: 'tm-app',
        authToken: process.env.SENTRY_AUTH_TOKEN,
        debug: true,
        sourcemaps: {
          assets: './node_modules/.cache/nuxt/.nuxt/dist/client/_nuxt/*',
          // filesToDeleteAfterUpload: './.nuxt/dist/client/_nuxt/**/*.map',
        },
        telemetry: true,
      }),
    ],
  },

  sourcemap: {
    client: 'hidden',
  },
});