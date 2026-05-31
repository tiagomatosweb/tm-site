import globalErrorMessage from '~/utils/globalErrorMessage'

function useApiFetchOptions(callerOptions = {}) {
  const config = useRuntimeConfig()
  const { onRequest: callerOnRequest, ...rest } = callerOptions

  return {
    baseURL: config.public.apiURL,
    credentials: 'include',
    ...rest,
    onRequest(context) {
      // Sanctum CSRF: cookie only exists in the browser after sanctum/csrf-cookie
      const token = import.meta.client
        && document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)?.[1]
      if (token) {
        const headers = new Headers(context.options.headers)
        headers.set('X-XSRF-TOKEN', decodeURIComponent(token))
        context.options.headers = headers
      }

      return callerOnRequest?.(context)
    },
    onResponseError(context) {
      const { response } = context
      throw {
        message: globalErrorMessage(response._data?.error),
        status: response.status,
      }
    },
  }
}

/** Imperative API calls (form submits, CSRF cookie, etc.) */
export function useApi() {
  return $fetch.create(useApiFetchOptions())
}

/** Declarative API fetching with SSR, cache keys, and deduplication */
export const useApiFetch = createUseFetch(useApiFetchOptions)
