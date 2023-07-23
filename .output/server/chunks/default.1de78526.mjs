import { b as useI18n$1, a as useRuntimeConfig, _ as _export_sfc, h as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$3 } from './FormButton.e7bad1ea.mjs';
import { useSSRContext, ref, watchEffect, resolveDirective, mergeProps, unref, withCtx, withDirectives, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, createTextVNode, reactive, computed } from 'vue';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrGetDirectiveProps, ssrInterpolate, ssrRenderTeleport, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo.515c10f7.mjs';
import { _ as _imports_1 } from './search_icon.9ebb051f.mjs';
import { useToast } from 'vue-toastification';
import { u as useHead } from './composables.65cc0e08.mjs';
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

const _imports_2 = "" + globalThis.__buildAssetsURL("bell_icon.33b9ffca.svg");
const _imports_3 = "" + globalThis.__buildAssetsURL("user_icon.d2d52263.svg");
const _imports_4 = "" + globalThis.__buildAssetsURL("hamburger.ceae37cc.svg");
const _imports_5 = "" + globalThis.__buildAssetsURL("edit_password_icon.920ba58a.svg");
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    config.public.baseURL;
    const i18n = useI18n$1();
    useToast();
    const token = useCookie("JWT");
    const is_auth = ref(token.value ? true : false);
    const is_user_dropdown = ref(false);
    const is_notification_dropdown = ref(false);
    const is_edit_profile_dialog = ref(false);
    const is_edit_password_dialog = ref(false);
    const is_search_dialog = ref(false);
    const is_navbar_routes_small = ref(false);
    const scrolled = ref(false);
    const user_info = ref(null);
    ref(null);
    const current_password = ref(null);
    const new_password = ref(null);
    const confirm_password = ref(null);
    ({
      Accept: "application/json",
      lang: i18n.locale.value,
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${token.value}`
    });
    watchEffect(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_FormButton = _sfc_main$3;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["navbar_container", unref(scrolled) ? "nav_container_abs" : " "]
      }, _attrs))} data-v-284e5052><nav class="navbar" data-v-284e5052>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/"),
        class: "navbar-brand"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$i18n.locale == "en") {
              _push2(`<img${ssrRenderAttrs(mergeProps({
                "data-src": _imports_0,
                class: "img-fluid logo",
                alt: "it-logo"
              }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-284e5052${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$i18n.locale == "an") {
              _push2(`<img${ssrRenderAttrs(mergeProps({
                "data-src": _imports_0,
                class: "img-fluid logo",
                alt: "it-logo"
              }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-284e5052${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.$i18n.locale == "en" ? withDirectives((openBlock(), createBlock("img", {
                key: 0,
                "data-src": _imports_0,
                class: "img-fluid logo",
                alt: "it-logo"
              }, null, 512)), [
                [_directive_lazy_load]
              ]) : createCommentVNode("", true),
              _ctx.$i18n.locale == "an" ? withDirectives((openBlock(), createBlock("img", {
                key: 1,
                "data-src": _imports_0,
                class: "img-fluid logo",
                alt: "it-logo"
              }, null, 512)), [
                [_directive_lazy_load]
              ]) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="navbar_routes_container" id="navbarNav" data-v-284e5052><ul class="navbar_routes" data-v-284e5052><li class="nav-item" data-v-284e5052>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/"),
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-284e5052${_scopeId}><div class="nav-link_not_active" data-v-284e5052${_scopeId}>${ssrInterpolate(_ctx.$t("nav.home"))}</div><div class="nav-link_active" data-v-284e5052${_scopeId}>${ssrInterpolate(_ctx.$t("nav.home"))}</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "nav-link_not_active" }, toDisplayString(_ctx.$t("nav.home")), 1),
                createVNode("div", { class: "nav-link_active" }, toDisplayString(_ctx.$t("nav.home")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-284e5052>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/about-us"),
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-284e5052${_scopeId}><div class="nav-link_not_active" data-v-284e5052${_scopeId}>${ssrInterpolate(_ctx.$t("nav.about"))}</div><div class="nav-link_active" data-v-284e5052${_scopeId}>${ssrInterpolate(_ctx.$t("nav.about"))}</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "nav-link_not_active" }, toDisplayString(_ctx.$t("nav.about")), 1),
                createVNode("div", { class: "nav-link_active" }, toDisplayString(_ctx.$t("nav.about")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-284e5052>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/vehicles"),
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-284e5052${_scopeId}><div class="nav-link_not_active" data-v-284e5052${_scopeId}>${ssrInterpolate(_ctx.$t("nav.vehicles"))}</div><div class="nav-link_active" data-v-284e5052${_scopeId}>${ssrInterpolate(_ctx.$t("nav.vehicles"))}</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "nav-link_not_active" }, toDisplayString(_ctx.$t("nav.vehicles")), 1),
                createVNode("div", { class: "nav-link_active" }, toDisplayString(_ctx.$t("nav.vehicles")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-284e5052>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.localePath("/contact-us"),
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-284e5052${_scopeId}><div class="nav-link_not_active" data-v-284e5052${_scopeId}>${ssrInterpolate(_ctx.$t("nav.contact_us"))}</div><div class="nav-link_active" data-v-284e5052${_scopeId}>${ssrInterpolate(_ctx.$t("nav.contact_us"))}</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "nav-link_not_active" }, toDisplayString(_ctx.$t("nav.contact_us")), 1),
                createVNode("div", { class: "nav-link_active" }, toDisplayString(_ctx.$t("nav.contact_us")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="d-flex align-items-center user_nav_icon_container" data-v-284e5052><div data-v-284e5052><button class="text-white d-block" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-v-284e5052><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_1,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-284e5052></button></div>`);
      if (unref(is_auth)) {
        _push(`<div data-v-284e5052><button class="text-white d-block" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-v-284e5052><img${ssrRenderAttrs(mergeProps({
          "data-src": _imports_2,
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-284e5052></button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(is_auth)) {
        _push(`<div data-v-284e5052><button class="text-white d-block" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-v-284e5052><img${ssrRenderAttrs(mergeProps({
          "data-src": _imports_3,
          alt: ""
        }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-284e5052></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="navbar_routes_small_btn" data-v-284e5052><button class="text-white d-block" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-v-284e5052><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_4,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-284e5052></button></div>`);
      if (!unref(is_auth)) {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "sign_btn",
          to: _ctx.localePath("/auth/sign-in")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_FormButton, {
                class: "py-3 px-4",
                mainBorder: true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`sign in`);
                  } else {
                    return [
                      createTextVNode("sign in")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_FormButton, {
                  class: "py-3 px-4",
                  mainBorder: true
                }, {
                  default: withCtx(() => [
                    createTextVNode("sign in")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(is_navbar_routes_small)) {
        _push(`<div class="user_dropdown" data-v-284e5052><ul data-v-284e5052><li data-v-284e5052>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.localePath("/")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("nav.home"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("nav.home")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-284e5052>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.localePath("/about-us")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("nav.about"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("nav.about")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-284e5052>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.localePath("/vehicles")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("nav.vehicles"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("nav.vehicles")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-284e5052>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.localePath("/contact-us")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("nav.contact_us"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("nav.contact_us")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(is_user_dropdown)) {
        _push(`<div class="user_dropdown" data-v-284e5052><ul data-v-284e5052><li data-v-284e5052>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.localePath("/vehicles/saved_vehicles")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("buttons.saved_vehicles"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("buttons.saved_vehicles")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-284e5052><button data-v-284e5052>${ssrInterpolate(_ctx.$t("buttons.edit_profile"))}</button></li><li data-v-284e5052>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.localePath("/terms")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("buttons.terms&Conditions"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("buttons.terms&Conditions")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-284e5052><button class="logout" data-v-284e5052>${ssrInterpolate(_ctx.$t("buttons.logout"))}</button></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(is_notification_dropdown)) {
        _push(`<div class="notification_dropdown" data-v-284e5052><ul data-v-284e5052><li class="noificaion_item_container" data-v-284e5052><div class="noificaion_item" data-v-284e5052><h4 class="notification_header" data-v-284e5052>Admistrative message</h4><p class="notification_body" data-v-284e5052> The price of the car you required has been sent to your mail </p><div class="notification_footer d-flex gap-3" data-v-284e5052><span data-v-284e5052>Mercedes-Benz</span><span data-v-284e5052>MAYBACH 5</span></div></div></li><li class="noificaion_item_container" data-v-284e5052><div class="noificaion_item" data-v-284e5052><h4 class="notification_header" data-v-284e5052>Admistrative message</h4><p class="notification_body" data-v-284e5052> The price of the car you required has been sent to your mail </p><div class="notification_footer d-flex gap-3" data-v-284e5052><span data-v-284e5052>Mercedes-Benz</span><span data-v-284e5052>MAYBACH 5</span></div></div></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
      if (unref(user_info)) {
        ssrRenderTeleport(_push, (_push2) => {
          if (unref(is_edit_profile_dialog)) {
            _push2(`<div class="edit_profile_dialog" data-v-284e5052><form class="edit_profile_dialog_card" data-v-284e5052><h4 class="text-center mb-5" data-v-284e5052>${ssrInterpolate(_ctx.$t("labels.edit_profile"))}</h4><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("labels.name"))}${ssrRenderAttr("value", unref(user_info).full_name)} data-v-284e5052><input type="email"${ssrRenderAttr("value", unref(user_info).email)}${ssrRenderAttr("placeholder", _ctx.$t("labels.email"))} data-v-284e5052><div class="Edit_password_btn_container d-flex justify-content-between my-5" data-v-284e5052><span data-v-284e5052>${ssrInterpolate(_ctx.$t("labels.password"))}</span><button type="button" data-v-284e5052><img${ssrRenderAttrs(mergeProps({
              "data-src": _imports_5,
              alt: ""
            }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-284e5052></button></div><div class="text-center" data-v-284e5052><button type="submit" class="submit_btn" data-v-284e5052>${ssrInterpolate(_ctx.$t("buttons.save"))}</button></div></form></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (unref(is_edit_password_dialog)) {
            _push2(`<div class="edit_profile_dialog" data-v-284e5052><form class="edit_profile_dialog_card" data-v-284e5052><h4 class="text-center mb-5" data-v-284e5052>${ssrInterpolate(_ctx.$t("labels.edit_password"))}</h4><input type="password"${ssrRenderAttr("placeholder", _ctx.$t("labels.current_password"))}${ssrRenderAttr("value", unref(current_password))} data-v-284e5052><input type="password"${ssrRenderAttr("value", unref(new_password))}${ssrRenderAttr("placeholder", _ctx.$t("labels.new_password"))} data-v-284e5052><input type="password"${ssrRenderAttr("value", unref(confirm_password))}${ssrRenderAttr("placeholder", _ctx.$t("labels.confirmPassword"))} data-v-284e5052><div class="text-center mt-5" data-v-284e5052><button type="submit" class="submit_btn" data-v-284e5052>${ssrInterpolate(_ctx.$t("buttons.save"))}</button></div></form></div>`);
          } else {
            _push2(`<!---->`);
          }
        }, "body", false, _parent);
      } else {
        _push(`<!---->`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(is_search_dialog)) {
          _push2(`<div class="search_dialog__dialog" data-v-284e5052><form class="search_dialog_card" data-v-284e5052><input type="text" placeholder="Search Here" data-v-284e5052><button class="close_search_btn" data-v-284e5052><i class="fas fa-xmark" data-v-284e5052></i></button></form></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-284e5052"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    reactive({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    computed(() => new Date().getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-container d-flex justify-content-center align-items-center"><div class="text-center"><div class="logo-container mb-3"><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))}></div><p class="copyrights"> copyrights \xA9 <a href="/" target="_blank">Auto Boutique</a></p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n$1();
    useHead({
      titleTemplate: `${i18n.t("appName")} | %s`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Starter App Desc Will Go Here"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="default_slot">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.1de78526.mjs.map
