import shiki from 'shiki'

export default defineNuxtConfig({
    // publicRuntimeConfig: {
    //     youtubeApiKey: process.env.YOUTUBE_API_KEY,
    //     gtm: {
    //         id: process.env.GOOGLE_TAG_MANAGER_ID,
    //     },
    // },

    app: {
        head: {
            title: 'Tiago Matos',
            htmlAttrs: {
                lang: 'pt-br',
            },
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

    buildModules: [
        // '@nuxtjs/eslint-module',
        // '@nuxtjs/tailwindcss',
        // '@nuxtjs/gtm',
    ],
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],

    content: {
        highlight: {
            theme: 'material-palenight'
        },
        markdown: {
            // async highlighter() {
            //     const highlighter = await shiki.getHighlighter({
            //         // Complete themes: https://github.com/shikijs/shiki/tree/master/packages/themes
            //         theme: 'nord'
            //     })
            //     return (rawCode, lang) => {
            //         return highlighter.codeToHtml(rawCode, lang)
            //     }
            // }
        }
    },

    colorMode: {
        classSuffix: '',
        storageKey: '_tm_theme'
    }
});
