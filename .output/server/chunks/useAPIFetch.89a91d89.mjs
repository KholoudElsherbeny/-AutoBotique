import { a as useRuntimeConfig, b as useI18n$1 } from './server.mjs';
import { a as useFetch } from './fetch.da0e0810.mjs';

const useAPIFetch = (path, options = {}) => {
  const config = useRuntimeConfig();
  const i18n = useI18n$1();
  options.baseURL = config.public.baseURL;
  options.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value
  };
  return useFetch(path, options, "$uCiByLDzDw");
};

export { useAPIFetch as u };
//# sourceMappingURL=useAPIFetch.89a91d89.mjs.map
