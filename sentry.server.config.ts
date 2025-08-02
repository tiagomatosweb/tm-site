import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://309c24e8980b0cbb9a7024a128c3e971@o527354.ingest.us.sentry.io/4509773465845760",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
