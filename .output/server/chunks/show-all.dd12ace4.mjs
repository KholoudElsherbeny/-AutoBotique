import { _ as __nuxt_component_0 } from './VehicleProducts.32b3c744.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, i as useRoute, u as useRouter, a as useRuntimeConfig, b as useI18n$1, j as script } from './server.mjs';
import { ref, withAsyncContext, watch, resolveDirective, mergeProps, unref, withCtx, createVNode, withDirectives, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useAPIFetch } from './useAPIFetch.89a91d89.mjs';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "show-all",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const config = useRuntimeConfig();
    const i18n = useI18n$1();
    const toast = useToast();
    const vehicles = ref([]);
    const pagination = ref({
      total: 1,
      rows: 1,
      current_page: route.query.page || 1,
      current_page_indexed: route.query.page - 1 * 1 || 0
    });
    const fetchData = async (e) => {
      var _a, _b;
      if (e) {
        pagination.current_page = e.page + 1;
      }
      const headers = {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value
      };
      const baseURL = config.public.baseURL;
      try {
        const data2 = await $fetch(`${baseURL}vehicle`, {
          method: "get",
          headers,
          params: {
            page: pagination.value.current_page,
            brand_id: ((_a = vehicle_brand.value) == null ? void 0 : _a.id) || ""
          }
        });
        vehicles.value = data2.data;
        pagination.value.total = data2.meta.total;
        pagination.value.current_page = (_b = pagination.current_page) != null ? _b : data2.meta.current_page;
        pagination.value.rows = data2.meta.per_page;
        pagination.value.current_page_indexed = (pagination.value.current_page - 1) * pagination.value.rows;
        router.push({ query: { page: pagination.value.current_page } });
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAPIFetch("brand_not_paginated")), __temp = await __temp, __restore(), __temp);
    const vehicle_brands = data.value.data;
    const vehicle_brand = ref(null);
    [__temp, __restore] = withAsyncContext(() => fetchData()), await __temp, __restore();
    watch(vehicle_brand, async () => {
      pagination.value.current_page = 1;
      await fetchData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VehicleProducts = __nuxt_component_0;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "vehicle_page_section" }, _attrs))} data-v-7c66775b>`);
      _push(ssrRenderComponent(_component_VehicleProducts, {
        vehicle_brands: unref(vehicle_brands),
        vehicles: unref(vehicles),
        no_slider: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="types_container" data-v-7c66775b${_scopeId}>`);
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
                  ssrRenderList(unref(vehicle_brands), (item) => {
                    _push3(ssrRenderComponent(_component_SwiperSlide, {
                      key: item.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`<button class="${ssrRenderClass([((_a = unref(vehicle_brand)) == null ? void 0 : _a.id) == item.id ? "active" : "", "vehicle_type_tab"])}" data-v-7c66775b${_scopeId3}><img${ssrRenderAttrs(mergeProps({
                            "data-src": item.image,
                            width: "50",
                            alt: item.name
                          }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-7c66775b${_scopeId3}><div class="pt-2" data-v-7c66775b${_scopeId3}>${ssrInterpolate(item.name)}</div></button>`);
                        } else {
                          return [
                            createVNode("button", {
                              onClick: ($event) => vehicle_brand.value = item,
                              class: ["vehicle_type_tab", ((_b = unref(vehicle_brand)) == null ? void 0 : _b.id) == item.id ? "active" : ""]
                            }, [
                              withDirectives(createVNode("img", {
                                "data-src": item.image,
                                width: "50",
                                alt: item.name
                              }, null, 8, ["data-src", "alt"]), [
                                [_directive_lazy_load]
                              ]),
                              createVNode("div", { class: "pt-2" }, toDisplayString(item.name), 1)
                            ], 10, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(vehicle_brands), (item) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: item.id
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("button", {
                              onClick: ($event) => vehicle_brand.value = item,
                              class: ["vehicle_type_tab", ((_a = unref(vehicle_brand)) == null ? void 0 : _a.id) == item.id ? "active" : ""]
                            }, [
                              withDirectives(createVNode("img", {
                                "data-src": item.image,
                                width: "50",
                                alt: item.name
                              }, null, 8, ["data-src", "alt"]), [
                                [_directive_lazy_load]
                              ]),
                              createVNode("div", { class: "pt-2" }, toDisplayString(item.name), 1)
                            ], 10, ["onClick"])
                          ];
                        }),
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(vehicle_brands), (item) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: item.id
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("button", {
                              onClick: ($event) => vehicle_brand.value = item,
                              class: ["vehicle_type_tab", ((_a = unref(vehicle_brand)) == null ? void 0 : _a.id) == item.id ? "active" : ""]
                            }, [
                              withDirectives(createVNode("img", {
                                "data-src": item.image,
                                width: "50",
                                alt: item.name
                              }, null, 8, ["data-src", "alt"]), [
                                [_directive_lazy_load]
                              ]),
                              createVNode("div", { class: "pt-2" }, toDisplayString(item.name), 1)
                            ], 10, ["onClick"])
                          ];
                        }),
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
      _push(ssrRenderComponent(unref(script), {
        onPage: fetchData,
        totalRecords: unref(pagination).total,
        rows: unref(pagination).rows,
        first: unref(pagination).current_page_indexed,
        "onUpdate:first": ($event) => unref(pagination).current_page_indexed = $event
      }, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vehicles/show-all.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const showAll = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7c66775b"]]);

export { showAll as default };
//# sourceMappingURL=show-all.dd12ace4.mjs.map
