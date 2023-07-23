import { withAsyncContext, ref, unref, useSSRContext, resolveDirective, mergeProps, withCtx, createTextVNode, createVNode, withDirectives, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './logo.515c10f7.mjs';
import { a as useRuntimeConfig, b as useI18n$1, _ as _export_sfc, h as __nuxt_component_0$2 } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _sfc_main$4 } from './FormButton.e7bad1ea.mjs';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import { _ as _imports_0 } from './PATTERN.2143be41.mjs';
import { _ as __nuxt_component_2$1 } from './CardProduct.e4872320.mjs';
import { _ as _imports_0$1 } from './arrow.ecb86765.mjs';
import { u as useHead } from './composables.65cc0e08.mjs';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { useToast } from 'vue-toastification';
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
import './search_icon.9ebb051f.mjs';

const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_lazy_load = resolveDirective("lazy-load");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "loading",
    class: "loading"
  }, _attrs))}><img${ssrRenderAttrs(mergeProps({
    "data-src": _imports_0$2,
    width: "100",
    height: "100",
    alt: "loading"
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader/Loader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _imports_1 = "" + globalThis.__buildAssetsURL("mouse.710601d1.svg");
const _sfc_main$2 = {
  __name: "HomeHero",
  __ssrInlineRender: true,
  props: {
    sliders: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    ref(
      Array.from({ length: 10 }, () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";
        return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_FormButton = _sfc_main$4;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero_section" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: [unref(Autoplay), unref(EffectFade), unref(Pagination), unref(Navigation)],
        "slides-per-view": 1,
        loop: true,
        navigation: true,
        pagination: true,
        effect: "fade",
        autoplay: {
          delay: 5e3,
          disableOnInteraction: true
        },
        "fade-effect": { crossFade: true }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.sliders, (slide) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: slide.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slider_item"${_scopeId2}><div class="slider_info"${_scopeId2}><div class="d-flex align-items-center gap-4"${_scopeId2}><span class="slider_barnd_icon"${_scopeId2}>`);
                    if (slide.vehicle) {
                      _push3(`<img${ssrRenderAttrs(mergeProps({
                        "data-src": slide.vehicle.brand_image,
                        width: "70",
                        alt: ""
                      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (slide.brand) {
                      _push3(`<img${ssrRenderAttrs(mergeProps({
                        "data-src": slide.brand.image,
                        width: "70",
                        alt: ""
                      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<img${ssrRenderAttrs(mergeProps({
                      class: "slider_title_backDrop",
                      "data-src": _imports_0,
                      alt: ""
                    }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}${_scopeId2}></span>`);
                    if (slide.vehicle) {
                      _push3(`<h3 class="slider_sub_title"${_scopeId2}>${ssrInterpolate(slide.vehicle.brand_name)}</h3>`);
                    } else {
                      _push3(`<h3 class="slider_sub_title"${_scopeId2}>${ssrInterpolate(slide.brand.name)}</h3>`);
                    }
                    _push3(`</div><h2 class="slider_title"${_scopeId2}>${ssrInterpolate(slide.name)}</h2>`);
                    if (slide.vehicle) {
                      _push3(`<h5 class="slider_sub_title smaller"${_scopeId2}>${ssrInterpolate(slide.vehicle.name)}</h5>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="slider_text"${_scopeId2}>${ssrInterpolate(slide.description)}</p>`);
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      class: "sign_btn",
                      to: _ctx.localePath("/auth/sign-in")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_FormButton, {
                            class: "slider_detail_btn",
                            mainBorder: true
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Detials`);
                              } else {
                                return [
                                  createTextVNode("Detials")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_FormButton, {
                              class: "slider_detail_btn",
                              mainBorder: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Detials")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="slide_image_container"${_scopeId2}><img${ssrRenderAttrs(mergeProps({
                      "data-src": slide.image,
                      alt: ""
                    }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slider_item" }, [
                        createVNode("div", { class: "slider_info" }, [
                          createVNode("div", { class: "d-flex align-items-center gap-4" }, [
                            createVNode("span", { class: "slider_barnd_icon" }, [
                              slide.vehicle ? withDirectives((openBlock(), createBlock("img", {
                                key: 0,
                                "data-src": slide.vehicle.brand_image,
                                width: "70",
                                alt: ""
                              }, null, 8, ["data-src"])), [
                                [_directive_lazy_load]
                              ]) : createCommentVNode("", true),
                              slide.brand ? withDirectives((openBlock(), createBlock("img", {
                                key: 1,
                                "data-src": slide.brand.image,
                                width: "70",
                                alt: ""
                              }, null, 8, ["data-src"])), [
                                [_directive_lazy_load]
                              ]) : createCommentVNode("", true),
                              withDirectives(createVNode("img", {
                                class: "slider_title_backDrop",
                                "data-src": _imports_0,
                                alt: ""
                              }, null, 512), [
                                [_directive_lazy_load]
                              ])
                            ]),
                            slide.vehicle ? (openBlock(), createBlock("h3", {
                              key: 0,
                              class: "slider_sub_title"
                            }, toDisplayString(slide.vehicle.brand_name), 1)) : (openBlock(), createBlock("h3", {
                              key: 1,
                              class: "slider_sub_title"
                            }, toDisplayString(slide.brand.name), 1))
                          ]),
                          createVNode("h2", { class: "slider_title" }, toDisplayString(slide.name), 1),
                          slide.vehicle ? (openBlock(), createBlock("h5", {
                            key: 0,
                            class: "slider_sub_title smaller"
                          }, toDisplayString(slide.vehicle.name), 1)) : createCommentVNode("", true),
                          createVNode("p", { class: "slider_text" }, toDisplayString(slide.description), 1),
                          createVNode(_component_nuxt_link, {
                            class: "sign_btn",
                            to: _ctx.localePath("/auth/sign-in")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_FormButton, {
                                class: "slider_detail_btn",
                                mainBorder: true
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Detials")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        createVNode("div", { class: "slide_image_container" }, [
                          withDirectives(createVNode("img", {
                            "data-src": slide.image,
                            alt: ""
                          }, null, 8, ["data-src"]), [
                            [_directive_lazy_load]
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.sliders, (slide) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: slide.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slider_item" }, [
                      createVNode("div", { class: "slider_info" }, [
                        createVNode("div", { class: "d-flex align-items-center gap-4" }, [
                          createVNode("span", { class: "slider_barnd_icon" }, [
                            slide.vehicle ? withDirectives((openBlock(), createBlock("img", {
                              key: 0,
                              "data-src": slide.vehicle.brand_image,
                              width: "70",
                              alt: ""
                            }, null, 8, ["data-src"])), [
                              [_directive_lazy_load]
                            ]) : createCommentVNode("", true),
                            slide.brand ? withDirectives((openBlock(), createBlock("img", {
                              key: 1,
                              "data-src": slide.brand.image,
                              width: "70",
                              alt: ""
                            }, null, 8, ["data-src"])), [
                              [_directive_lazy_load]
                            ]) : createCommentVNode("", true),
                            withDirectives(createVNode("img", {
                              class: "slider_title_backDrop",
                              "data-src": _imports_0,
                              alt: ""
                            }, null, 512), [
                              [_directive_lazy_load]
                            ])
                          ]),
                          slide.vehicle ? (openBlock(), createBlock("h3", {
                            key: 0,
                            class: "slider_sub_title"
                          }, toDisplayString(slide.vehicle.brand_name), 1)) : (openBlock(), createBlock("h3", {
                            key: 1,
                            class: "slider_sub_title"
                          }, toDisplayString(slide.brand.name), 1))
                        ]),
                        createVNode("h2", { class: "slider_title" }, toDisplayString(slide.name), 1),
                        slide.vehicle ? (openBlock(), createBlock("h5", {
                          key: 0,
                          class: "slider_sub_title smaller"
                        }, toDisplayString(slide.vehicle.name), 1)) : createCommentVNode("", true),
                        createVNode("p", { class: "slider_text" }, toDisplayString(slide.description), 1),
                        createVNode(_component_nuxt_link, {
                          class: "sign_btn",
                          to: _ctx.localePath("/auth/sign-in")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_FormButton, {
                              class: "slider_detail_btn",
                              mainBorder: true
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Detials")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ]),
                      createVNode("div", { class: "slide_image_container" }, [
                        withDirectives(createVNode("img", {
                          "data-src": slide.image,
                          alt: ""
                        }, null, 8, ["data-src"]), [
                          [_directive_lazy_load]
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mouse_scroll_down"><img${ssrRenderAttrs(mergeProps({
        class: "",
        "data-src": _imports_1,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}><div>Scorll Down</div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/HomeHero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "HomeProducts",
  __ssrInlineRender: true,
  props: {
    vehicles: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CardProduct = __nuxt_component_2$1;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "products_home_section" }, _attrs))} data-v-a902b5fe><div class="products_home" data-v-a902b5fe><div class="section_header" data-v-a902b5fe><div class="sub_title" data-v-a902b5fe>${ssrInterpolate(_ctx.$t("titles.Agent_for_the_finest_types_of_cars"))}</div>`);
      if (!__props.title) {
        _push(`<h3 class="title" data-v-a902b5fe> ready for <br data-v-a902b5fe> Delivery </h3>`);
      } else {
        _push(`<h3 class="title" data-v-a902b5fe>${ssrInterpolate(__props.title)}</h3>`);
      }
      _push(`<img${ssrRenderAttrs(mergeProps({
        class: "slider_title_backDrop",
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-a902b5fe></div><div class="prdoucts_container py-5" data-v-a902b5fe>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: [unref(Autoplay), unref(EffectFade), unref(Pagination), unref(Navigation)],
        "slides-per-view": 2,
        spaceBetween: 30,
        navigation: true,
        pagination: false,
        effect: "creative",
        breakpoints: {
          "640": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "768": {
            slidesPerView: 3,
            spaceBetween: 30
          },
          "1024": {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        autoplay: {
          delay: 5e3,
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
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.vehicles, (item) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardProduct, { item }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardProduct, { item }, null, 8, ["item"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.vehicles, (item) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardProduct, { item }, null, 8, ["item"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-flex justify-content-center align-items-center" data-v-a902b5fe>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/vehicles/show-all")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="show_all_btn" data-v-a902b5fe${_scopeId}><span data-v-a902b5fe${_scopeId}>Show All</span><span class="arrow_icon" data-v-a902b5fe${_scopeId}><img${ssrRenderAttrs(mergeProps({
              "data-src": _imports_0$1,
              alt: "arrow"
            }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-a902b5fe${_scopeId}></span></button>`);
          } else {
            return [
              createVNode("button", { class: "show_all_btn" }, [
                createVNode("span", null, "Show All"),
                createVNode("span", { class: "arrow_icon" }, [
                  withDirectives(createVNode("img", {
                    "data-src": _imports_0$1,
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
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/HomeProducts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a902b5fe"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL;
    const i18n = useI18n$1();
    useToast();
    const token = useCookie("JWT");
    const headers = {
      Accept: "application/json",
      lang: i18n.locale.value,
      "Accept-Language": i18n.locale.value
    };
    if (token.value) {
      headers.Authorization = `Bearer ${token.value}`;
    }
    const data = ([__temp, __restore] = withAsyncContext(() => $fetch(`${baseURL}home`, {
      headers,
      method: "get"
    })), __temp = await __temp, __restore(), __temp);
    const home = data;
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 2e3);
    useHead({
      title: `${i18n.t("nav.home")}`,
      meta: [
        {
          name: "description",
          content: "Starter App Desc Will Go Here"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loader = __nuxt_component_0;
      const _component_HomeHero = _sfc_main$2;
      const _component_HomeProducts = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_Loader, null, null, _parent));
      } else {
        _push(`<div class="home-wrapper">`);
        _push(ssrRenderComponent(_component_HomeHero, {
          sliders: unref(home).sliders
        }, null, _parent));
        _push(ssrRenderComponent(_component_HomeProducts, {
          vehicles: unref(home).vehicles
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.563c1829.mjs.map
