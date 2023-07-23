import { useFetch } from "#app";
type useFetchType = typeof useFetch;
// import { useI18n } from "@nuxtjs/i18n/dist/runtime/composables"
// wrap useFetch with configuration needed to talk to our API
export const useAPIFetch: useFetchType = (path, options = {}) => {
  const config = useRuntimeConfig();

  const i18n = useI18n();

  // modify options as needed
  options.baseURL = config.public.baseURL;

  options.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value,
  };

  return useFetch(path, options);
};
// wrap useFetch with configuration needed to talk to our API
