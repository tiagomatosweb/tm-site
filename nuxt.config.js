export default {
    publicRuntimeConfig: {
        youtubeApiKey: process.env.YOUTUBE_API_KEY,
        googleAnalytics: {
            id: process.env.GOOGLE_ANALYTICS_ID,
        },
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Tiago Matos Bio',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Sou engenheiro de software independente e sou apaixonado por novas tecnologias em special por Vue.js, PWA e Laravel. Eu ajudo programadores de todos os níveis a se tornarem grandes referências no mercado de desenvolvimento de softwares. Eu escrevo artigos e eventualmente dou palestras.' },
            { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#da532c' },
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

    target: 'static',

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/veevalidate',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-analytics',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [
            'vee-validate/dist/rules',
        ],
    },
};
