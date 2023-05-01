import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    if (config.public.appEnv !== 'production') return
    nuxtApp.vueApp.use(createGtm({
        id: config.public.gtm,
        defer: false,
        compatibility: false,
        enabled: true,
        debug: true,
        loadScript: true,
        vueRouter: useRouter(),
        trackOnNextTick: false,
    }))
})
