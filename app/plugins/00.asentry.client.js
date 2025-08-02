import * as Sentry from '@sentry/vue';

export default defineNuxtPlugin((nuxtApp) => {
  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: 'https://309c24e8980b0cbb9a7024a128c3e971@o527354.ingest.us.sentry.io/4509773465845760',
    environment: process.env.NODE_ENV,
    attachStacktrace: true,
    tracesSampleRate: 1.0,
    integrations: [Sentry.replayIntegration()],
    enableLogs: true,
    debug: false,
  });
});
