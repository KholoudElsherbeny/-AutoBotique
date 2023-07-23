import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, a as useRuntimeConfig, b as useI18n$1, i as useRoute } from './server.mjs';
import { withAsyncContext, ref, watch, resolveDirective, mergeProps, unref, withCtx, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { u as useAPIFetch } from './useAPIFetch.89a91d89.mjs';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './PATTERN.2143be41.mjs';
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
import './fetch.da0e0810.mjs';

const _imports_1 = "" + globalThis.__buildAssetsURL("share.3389e979.svg");
const _imports_2 = "" + globalThis.__buildAssetsURL("bookmark_full.5fa7cd7b.svg");
const _imports_3 = "" + globalThis.__buildAssetsURL("success_icon.35d42210.svg");
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    config.public.baseURL;
    const i18n = useI18n$1();
    useToast();
    const token = useCookie("JWT");
    ({
      Accept: "application/json",
      lang: i18n.locale.value,
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${token.value}`
    });
    const route = useRoute();
    const { id } = route.params;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAPIFetch(`vehicle/${id}`)), __temp = await __temp, __restore(), __temp);
    const car = data.value.data;
    const img_model = ref({
      is_open: false,
      src: null
    });
    const is_ask_for_price_model = ref(false);
    const ask_for_price_success_model = ref(false);
    const openImgModel = (url) => {
      img_model.value.src = url;
      img_model.value.is_open = true;
      img_model.value = { ...img_model.value };
    };
    watch(img_model, (value) => {
      console.log(img_model);
      if (value.is_open) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    });
    watch(is_ask_for_price_model, (value) => {
      if (value) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "car_detail_page",
        style: `background: linear-gradient(to bottom  ,  rgba(0, 0, 0, 0.2) , rgb(0, 0, 0)),
    url(${unref(car).preview_image}) center/cover fixed no-repeat`
      }, _attrs))} data-v-0f4c2139><div class="car_detail_content" data-v-0f4c2139><div class="car_header d-flex justify-content-between" data-v-0f4c2139><div class="car_info" data-v-0f4c2139><div class="d-flex align-items-center gap-2" data-v-0f4c2139><span class="car_barnd_icon" data-v-0f4c2139><img${ssrRenderAttrs(mergeProps({
        "data-src": unref(car).brand_image,
        width: "100",
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-0f4c2139><img${ssrRenderAttrs(mergeProps({
        class: "car_title_backDrop",
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-0f4c2139></span><h3 class="car_sub_title" data-v-0f4c2139>${ssrInterpolate(unref(car).brand_name)}</h3></div><h2 class="car_title" data-v-0f4c2139>${ssrInterpolate(unref(car).name)}</h2></div><div data-v-0f4c2139><div class="d-flex gap-5 justify-content-end" data-v-0f4c2139><button class="share_car_btn mx-5" data-v-0f4c2139><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_1,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-0f4c2139></button><button class="bookmark_btn" data-v-0f4c2139><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_2,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-0f4c2139></button></div><div data-v-0f4c2139><button class="ask_for_price_btn silver_btn mt-5" data-v-0f4c2139>${ssrInterpolate(_ctx.$t("buttons.ASK_FOR_PRICE"))}</button></div>`);
      if (unref(car).videos) {
        _push(`<div class="car_video_btn_container" data-v-0f4c2139>`);
        if (unref(car).videos.length) {
          _push(`<button class="car_video_btn" data-v-0f4c2139></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="car_images_slider py-5" data-v-0f4c2139>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: [unref(Autoplay), unref(EffectFade), unref(Pagination), unref(Navigation)],
        "slides-per-view": 1,
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
            ssrRenderList(unref(car).images, (item) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="car_slider_item" data-v-0f4c2139${_scopeId2}><img${ssrRenderAttrs(mergeProps({
                      "data-src": item.url,
                      alt: item.image
                    }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-0f4c2139${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "car_slider_item" }, [
                        withDirectives(createVNode("img", {
                          "data-src": item.url,
                          alt: item.image,
                          onClick: ($event) => openImgModel(item.url)
                        }, null, 8, ["data-src", "alt", "onClick"]), [
                          [_directive_lazy_load]
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(car).images, (item) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "car_slider_item" }, [
                      withDirectives(createVNode("img", {
                        "data-src": item.url,
                        alt: item.image,
                        onClick: ($event) => openImgModel(item.url)
                      }, null, 8, ["data-src", "alt", "onClick"]), [
                        [_directive_lazy_load]
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
      _push(`</div><div class="container-fluid py-5" data-v-0f4c2139><div class="row" data-v-0f4c2139><div class="col-6" data-v-0f4c2139><div class="car_details" data-v-0f4c2139><h4 data-v-0f4c2139>Car Details</h4><!--[-->`);
      ssrRenderList(unref(car).details, (detail) => {
        _push(`<div class="car_detail_item" data-v-0f4c2139><div data-v-0f4c2139>${ssrInterpolate(detail.detail.value)}</div><div data-v-0f4c2139>${ssrInterpolate(detail.name)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="col-6" data-v-0f4c2139><div class="car_details" data-v-0f4c2139><h4 data-v-0f4c2139>Specifications</h4><!--[-->`);
      ssrRenderList(unref(car).specifications, (specif) => {
        _push(`<div class="car_specification_item" data-v-0f4c2139><div class="specification_value" data-v-0f4c2139>${ssrInterpolate(specif.name)}</div><div data-v-0f4c2139>${ssrInterpolate(specif.specification.key)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="accessories_container" data-v-0f4c2139><h4 class="my-5" data-v-0f4c2139>Accessories</h4>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: [unref(Autoplay), unref(EffectFade), unref(Pagination), unref(Navigation)],
        "slides-per-view": 1,
        spaceBetween: 30,
        navigation: true,
        pagination: false,
        effect: "creative",
        breakpoints: {
          "640": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "900": {
            slidesPerView: 3,
            spaceBetween: 30
          },
          "1024": {
            slidesPerView: 5,
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
            ssrRenderList(unref(car).accessories, (item) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-0f4c2139${_scopeId2}><div class="car_slider_item accessories" data-v-0f4c2139${_scopeId2}><img${ssrRenderAttrs(mergeProps({
                      "data-src": item.image,
                      alt: item.image
                    }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-0f4c2139${_scopeId2}></div><h4 class="py-3" style="${ssrRenderStyle({ "font-weight": "100" })}" data-v-0f4c2139${_scopeId2}>${ssrInterpolate(item.name)}</h4><p data-v-0f4c2139${_scopeId2}>${ssrInterpolate(item.description)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("div", { class: "car_slider_item accessories" }, [
                          withDirectives(createVNode("img", {
                            "data-src": item.image,
                            alt: item.image
                          }, null, 8, ["data-src", "alt"]), [
                            [_directive_lazy_load]
                          ])
                        ]),
                        createVNode("h4", {
                          class: "py-3",
                          style: { "font-weight": "100" }
                        }, toDisplayString(item.name), 1),
                        createVNode("p", null, toDisplayString(item.description), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(car).accessories, (item) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("div", { class: "car_slider_item accessories" }, [
                        withDirectives(createVNode("img", {
                          "data-src": item.image,
                          alt: item.image
                        }, null, 8, ["data-src", "alt"]), [
                          [_directive_lazy_load]
                        ])
                      ]),
                      createVNode("h4", {
                        class: "py-3",
                        style: { "font-weight": "100" }
                      }, toDisplayString(item.name), 1),
                      createVNode("p", null, toDisplayString(item.description), 1)
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
      _push(`</div></div>`);
      if (unref(img_model).is_open) {
        _push(`<div class="img_model_container" data-v-0f4c2139><div class="img_model" data-v-0f4c2139><img${ssrRenderAttrs(mergeProps({
          "data-src": unref(img_model).src,
          alt: "img model"
        }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-0f4c2139></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(is_ask_for_price_model)) {
        _push(`<div class="img_model_container" data-v-0f4c2139><div class="ask_for_price_model" data-v-0f4c2139><h4 class="text-center" data-v-0f4c2139>${ssrInterpolate(_ctx.$t("models.ask_for_price_text"))}</h4><div class="actions d-flex justify-content-between" data-v-0f4c2139><button style="${ssrRenderStyle({ "font-size": "0.7rem" })}" class="upper_case normal_btn cancel" data-v-0f4c2139>${ssrInterpolate(_ctx.$t("buttons.cancel"))}</button><button style="${ssrRenderStyle({ "font-size": "0.7rem" })}" class="upper_case golden_btn" data-v-0f4c2139>${ssrInterpolate(_ctx.$t("buttons.yesIm"))}</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(ask_for_price_success_model)) {
        _push(`<div class="img_model_container" data-v-0f4c2139><div class="ask_for_price_model text-center" data-v-0f4c2139><div class="mb-2" data-v-0f4c2139><img${ssrRenderAttrs(mergeProps({
          "data-src": _imports_3,
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-0f4c2139></div><h3 class="text-center" data-v-0f4c2139>${ssrInterpolate(_ctx.$t("models.ask_for_price_success_text"))}</h3></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vehicles/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f4c2139"]]);

export { _id_ as default };
//# sourceMappingURL=_id_.e4524173.mjs.map
