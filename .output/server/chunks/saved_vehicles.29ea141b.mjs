import { _ as __nuxt_component_0 } from './VehicleProducts.32b3c744.mjs';
import { _ as _export_sfc, i as useRoute, u as useRouter, a as useRuntimeConfig, b as useI18n$1 } from './server.mjs';
import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useToast } from 'vue-toastification';
import 'swiper/vue';
import './CardProduct.e4872320.mjs';
import './search_icon.9ebb051f.mjs';
import 'swiper';
import './PATTERN.2143be41.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'ant-design-vue';
import 'vue-toast-notification';
import 'vee-validate';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@intlify/bundle-utils';
import '@intlify/shared';

const _sfc_main = {
  __name: "saved_vehicles",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    useRouter();
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL;
    const token = useCookie("JWT");
    const i18n = useI18n$1();
    const toast = useToast();
    const vehicles = ref([]);
    const headers = {
      Accept: "application/json",
      lang: i18n.locale.value,
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${token.value}`
    };
    const fetchData = async (e) => {
      try {
        const data = await $fetch(`${baseURL}favourites`, {
          method: "get",
          headers
        });
        console.log(data);
        vehicles.value = data.data;
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchData()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VehicleProducts = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "vehicle_page_section" }, _attrs))} data-v-743f796a>`);
      _push(ssrRenderComponent(_component_VehicleProducts, {
        vehicles: unref(vehicles),
        title: "saved vehicles",
        no_slider: true
      }, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vehicles/saved_vehicles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const saved_vehicles = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-743f796a"]]);

export { saved_vehicles as default };
//# sourceMappingURL=saved_vehicles.29ea141b.mjs.map
