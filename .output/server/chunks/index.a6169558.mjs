import { _ as __nuxt_component_0 } from './VehicleProducts.32b3c744.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, a as useRuntimeConfig, b as useI18n$1, h as __nuxt_component_0$2 } from './server.mjs';
import { ref, withAsyncContext, watch, resolveDirective, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, useSSRContext } from 'vue';
import { u as useAPIFetch } from './useAPIFetch.89a91d89.mjs';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0 } from './arrow.ecb86765.mjs';
import { useToast } from 'vue-toastification';
import './CardProduct.e4872320.mjs';
import './cookie.59c766d4.mjs';
import 'cookie-es';
import 'h3';
import 'destr';
import 'ohash';
import './search_icon.9ebb051f.mjs';
import './PATTERN.2143be41.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import '@intlify/core-base';
import 'is-https';
import 'ant-design-vue';
import 'vue-toast-notification';
import 'vee-validate';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'unstorage/drivers/fs';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@intlify/bundle-utils';
import '@intlify/shared';
import './fetch.da0e0810.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const i18n = useI18n$1();
    const toast = useToast();
    const vehicles = ref([]);
    const fetchData = async () => {
      const headers = {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value
      };
      const baseURL = config.public.baseURL;
      try {
        const { data: data2 } = await $fetch(`${baseURL}vehicle`, {
          method: "get",
          headers,
          params: {
            vehicle_type_id: vehicle_type.value.id
          }
        });
        console.log(data2);
        vehicles.value = data2;
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAPIFetch("vehicle_type")), __temp = await __temp, __restore(), __temp);
    const vehicle_types = data.value.data;
    const vehicle_type = ref(vehicle_types[0]);
    [__temp, __restore] = withAsyncContext(() => fetchData()), await __temp, __restore();
    watch(vehicle_type, async () => {
      await fetchData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VehicleProducts = __nuxt_component_0;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "vehicle_page_section" }, _attrs))} data-v-e5315202>`);
      _push(ssrRenderComponent(_component_VehicleProducts, {
        vehicle_types: unref(vehicle_types),
        vehicles: unref(vehicles)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="types_container" data-v-e5315202${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Swiper, {
              modules: [unref(Autoplay), unref(EffectFade), unref(Pagination), unref(Navigation)],
              "slides-per-view": 6,
              spaceBetween: 30,
              navigation: true,
              pagination: false,
              effect: "creative",
              autoplay: {
                delay: 8e3,
                disableOnInteraction: true
              },
              "creative-effect": {
                prev: {
                  shadow: false,
                  translate: ["-100%", 0, -1]
                },
                next: {
                  translate: ["100%", 0, 0]
                }
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(vehicle_types), (item) => {
                    _push3(ssrRenderComponent(_component_SwiperSlide, {
                      key: item.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button class="${ssrRenderClass([unref(vehicle_type).id == item.id ? "active" : "", "vehicle_type_tab"])}" data-v-e5315202${_scopeId3}>${ssrInterpolate(item.name)}</button>`);
                        } else {
                          return [
                            createVNode("button", {
                              onClick: ($event) => vehicle_type.value = item,
                              class: ["vehicle_type_tab", unref(vehicle_type).id == item.id ? "active" : ""]
                            }, toDisplayString(item.name), 11, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(vehicle_types), (item) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            onClick: ($event) => vehicle_type.value = item,
                            class: ["vehicle_type_tab", unref(vehicle_type).id == item.id ? "active" : ""]
                          }, toDisplayString(item.name), 11, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "types_container" }, [
                createVNode(_component_Swiper, {
                  modules: [unref(Autoplay), unref(EffectFade), unref(Pagination), unref(Navigation)],
                  "slides-per-view": 6,
                  spaceBetween: 30,
                  navigation: true,
                  pagination: false,
                  effect: "creative",
                  autoplay: {
                    delay: 8e3,
                    disableOnInteraction: true
                  },
                  "creative-effect": {
                    prev: {
                      shadow: false,
                      translate: ["-100%", 0, -1]
                    },
                    next: {
                      translate: ["100%", 0, 0]
                    }
                  }
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(vehicle_types), (item) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode("button", {
                            onClick: ($event) => vehicle_type.value = item,
                            class: ["vehicle_type_tab", unref(vehicle_type).id == item.id ? "active" : ""]
                          }, toDisplayString(item.name), 11, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modules"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="d-flex justify-content-center align-items-center" data-v-e5315202>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/vehicles/show-all")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="show_all_btn" data-v-e5315202${_scopeId}><span data-v-e5315202${_scopeId}>Show All</span><span class="arrow_icon" data-v-e5315202${_scopeId}><img${ssrRenderAttrs(mergeProps({
              "data-src": _imports_0,
              alt: "arrow"
            }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-e5315202${_scopeId}></span></button>`);
          } else {
            return [
              createVNode("button", { class: "show_all_btn" }, [
                createVNode("span", null, "Show All"),
                createVNode("span", { class: "arrow_icon" }, [
                  withDirectives(createVNode("img", {
                    "data-src": _imports_0,
                    alt: "arrow"
                  }, null, 512), [
                    [_directive_lazy_load]
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vehicles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5315202"]]);

export { index as default };
//# sourceMappingURL=index.a6169558.mjs.map
