export default defineNuxtConfig({
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            appEnv: process.env.NODE_ENV,
            youtubeApiKey: process.env.NUXT_PUBLIC_YOUTUBE_API_KEY,
            gtm: process.env.NUXT_PUBLIC_GTM_ID,
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
            siteName: 'Tiago Matos',
            siteDescription: 'Conteúdos diários sobre Laravel e Vue.js.',
            language: 'pt-br',
        },
    },

    app: {
        head: {
            // title: 'Tiago Matos',
            // htmlAttrs: {
            //     lang: 'pt-br',
            // },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                // { hid: 'description', name: 'description', content: 'Sou engenheiro de software independente e sou apaixonado por novas tecnologias em special por Vue.js, PWA e Laravel. Eu ajudo programadores de todos os níveis a se tornarem grandes referências no mercado de desenvolvimento de softwares. Eu escrevo artigos e eventualmente dou palestras.' },
                { hid: 'theme-color', name: 'theme-color', content: '#ffffff' },
            ],
            script: [
                { src: 'https://apis.google.com/js/api.js' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            ],
        },
    },

    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],

    content: {
        highlight: {
            theme: 'material-theme-palenight'
        },
    },

    colorMode: {
        classSuffix: '',
        storageKey: '_tm_theme'
    }
});
