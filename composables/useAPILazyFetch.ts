
import { useLazyFetch } from "#app"
type useLazyFetchType = typeof useLazyFetch
// import { useI18n } from "@nuxtjs/i18n/dist/runtime/composables"
// wrap useFetch with configuration needed to talk to our API
export const useAPILazyFetch: useLazyFetchType = (path, options = {}) => {
    const i18n = useI18n()


    const config = useRuntimeConfig()
    if (process.client) {




        options.baseURL = config.public.baseURL
        options.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            lang: i18n.locale.value,
            'Accept-Language': i18n.locale.value,
        }
    }

    // modify options as needed

    return useLazyFetch(path, options)



}