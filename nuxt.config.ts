export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      n8nUrl: process.env.NUXT_PUBLIC_N8N_URL,
      youtubeApiKey: process.env.NUXT_PUBLIC_YOUTUBE_API_KEY,
    },
  },

  components: {
    dirs: ['~/components', '~/shadcn']
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

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'shadcn-nuxt', '@zadigetvoltaire/nuxt-gtm', '@nuxtjs/google-fonts', 'nuxt-lucide-icons', '@nuxt/image'],

  // site: {
  //   url: process.env.NUXT_PUBLIC_SITE_URL,
  //   name: 'Tiago Matos',
  //   description: 'Conteúdos diários sobre Laravel e Vue.js.',
  //   defaultLocale: 'pt-br',
  // },

  // routeRules: {
  //   '/**/obrigado': { robots: false },
  // },

  content: {
    highlight: {
      theme: 'material-theme-palenight',
    },
  },

  googleFonts: {
    families: {
      Poppins: [400,500,600,700,800],
    }
  },

  gtm: {
    id: 'GTM-PG5CMBN'
  },

  shadcn: {
    componentDir: './shadcn'
  },

  colorMode: {
    classSuffix: '',
    storageKey: '_tm_theme',
  },

  compatibilityDate: '2024-09-16',
});
