export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      n8nUrl: process.env.NUXT_PUBLIC_N8N_URL,
      apiURL: process.env.NUXT_PUBLIC_API_URL,
      youtubeApiKey: process.env.NUXT_PUBLIC_YOUTUBE_API_KEY,
    },
  },

  css: ['~/assets/css/main.css'],

  components: {
    dirs: ['~/shadcn'],
  },
  imports: {
    // autoImport: false,
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

  modules: ['@nuxt/ui-pro', '@nuxt/content', 'shadcn-nuxt', '@zadigetvoltaire/nuxt-gtm', '@nuxtjs/google-fonts', 'nuxt-lucide-icons', '@nuxt/image', 'dayjs-nuxt', 'nuxt-disqus', '@nuxt/scripts'],

  dayjs: {
    locales: ['pt-br'],
    plugins: ['utc', 'timezone', 'isBetween', 'duration', 'relativeTime'],
    defaultLocale: 'pt-br',
    defaultTimezone: 'America/Sao_Paulo',
  },

  disqus: {
    shortname: 'tiagomatosweb-blog',
  },

  // site: {
  //   url: process.env.NUXT_PUBLIC_SITE_URL,
  //   name: 'Tiago Matos',
  //   description: 'Conteúdos diários sobre Laravel e Vue.js.',
  //   defaultLocale: 'pt-br',
  // },

  routeRules: {
    '/**/obrigado': {robots: false},
  },

  // content: {
  //   build: {
  //     markdown: {
  //       highlight: {
  //         // theme: 'github-light',
  //         theme: 'material-theme-palenight',
  //         // theme: 'github-dark',
  //         langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'php'],
  //       },
  //     },
  //   },
  // },

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700, 800],
    },
  },

  gtm: {
    id: 'GTM-PG5CMBN',
  },

  shadcn: {
    componentDir: './shadcn',
  },

  colorMode: {
    classSuffix: '',
    storageKey: '_tm_theme',
  },

  compatibilityDate: '2025-03-05',

  future: {
    compatibilityVersion: 4,
  },
});
