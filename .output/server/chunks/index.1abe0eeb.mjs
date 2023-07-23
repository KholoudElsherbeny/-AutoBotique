import { _ as _export_sfc, a as useRuntimeConfig, b as useI18n$1 } from './server.mjs';
import { ref, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_1 = "" + globalThis.__buildAssetsURL("contact_location_icon.dc4a0d09.svg");
const _imports_2 = "" + globalThis.__buildAssetsURL("golden_phone_icon.2a62ba42.svg");
const _imports_3 = "" + globalThis.__buildAssetsURL("golden_mail_icon.b7d5465e.svg");
const _imports_4 = "" + globalThis.__buildAssetsURL("golden_clock_icon.5931487f.svg");
const _imports_5 = "" + globalThis.__buildAssetsURL("Combined-Shape.070e8d21.svg");
const _imports_6 = "" + globalThis.__buildAssetsURL("golden_twitter.cc8f6536.svg");
const _imports_7 = "" + globalThis.__buildAssetsURL("golden_insta.9d5af7ea.svg");
const _imports_8 = "" + globalThis.__buildAssetsURL("golden_youtube.f8f69783.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    config.public.baseURL;
    const i18n = useI18n$1();
    useToast();
    const token = useCookie("JWT");
    ({
      Accept: "application/json",
      lang: i18n.locale.value,
      "Accept-Language": i18n.locale.value
    });
    if (token.value) {
      `Bearer ${token.value}`;
    }
    const form = ref({
      full_name: null,
      phone: null,
      email: null,
      content: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section_container" }, _attrs))} data-v-ac4fbc93><div class="main_section" data-v-ac4fbc93><div class="container-fluid" data-v-ac4fbc93><div class="row" data-v-ac4fbc93><div class="col-lg-6" data-v-ac4fbc93><div data-v-ac4fbc93><div class="section_header" data-v-ac4fbc93><div class="sub_title" data-v-ac4fbc93>${ssrInterpolate(_ctx.$t("titles.contact_us_sub_title"))}</div><h3 class="title" data-v-ac4fbc93>${ssrInterpolate(_ctx.$t("titles.contact_us"))}</h3><img${ssrRenderAttrs(mergeProps({
        class: "slider_title_backDrop",
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></div><div class="contact_us_info" data-v-ac4fbc93><div class="contact_info_item d-flex gap-5" data-v-ac4fbc93><div data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_1,
        alt: "contact location"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></div><div class="contact_info_text" data-v-ac4fbc93> 63 Omar Ibn El-Khattab ,Heliopolis Cairo, Cairo Governorate, Egypt </div></div><div class="contact_info_item d-flex gap-5" data-v-ac4fbc93><div data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_1,
        alt: "contact location"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></div><div class="contact_info_text" data-v-ac4fbc93> 63 Omar Ibn El-Khattab ,Heliopolis Cairo, Cairo Governorate, Egypt </div></div><div class="contact_info_item d-flex gap-5" data-v-ac4fbc93><div data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_2,
        alt: "contact location"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></div><div class="contact_info_text" data-v-ac4fbc93>+1 (800) 456 37 96</div></div><div class="contact_info_item d-flex gap-5" data-v-ac4fbc93><div data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_3,
        alt: "contact location"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></div><div class="contact_info_text" data-v-ac4fbc93>example@example.com</div></div><div class="contact_info_item d-flex gap-5" data-v-ac4fbc93><div data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_4,
        alt: "contact location"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></div><div class="contact_info_text" data-v-ac4fbc93><div data-v-ac4fbc93>Opening Hours:</div><div data-v-ac4fbc93>Monday to Saturday 9:00 am to 2am</div></div></div></div><div class="contact_us_socials" data-v-ac4fbc93><h4 data-v-ac4fbc93>${ssrInterpolate(_ctx.$t("titles.follow_us_on"))}</h4><div class="d-flex justify-content-between contact_us_socials_links" data-v-ac4fbc93><div data-v-ac4fbc93><a href="www.facebook.com" data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_5,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></a></div><div data-v-ac4fbc93><a href="www.facebook.com" data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_6,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></a></div><div data-v-ac4fbc93><a href="www.facebook.com" data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_7,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></a></div><div data-v-ac4fbc93><a href="www.facebook.com" data-v-ac4fbc93><img${ssrRenderAttrs(mergeProps({
        "data-src": _imports_8,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-ac4fbc93></a></div></div></div></div></div><div class="col-lg-6 mt-3" data-v-ac4fbc93><div class="mt-5 contact_form_container" data-v-ac4fbc93><form class="contact_form" data-v-ac4fbc93><div data-v-ac4fbc93><h4 class="contact_form_title" data-v-ac4fbc93>${ssrInterpolate(_ctx.$t("titles.contact_us_form_title"))}</h4><h4 class="contact_form_title" data-v-ac4fbc93>${ssrInterpolate(_ctx.$t("titles.contact_us_form_sub_title"))}</h4></div><input type="text"${ssrRenderAttr("value", unref(form).full_name)}${ssrRenderAttr("placeholder", _ctx.$t("labels.name"))} data-v-ac4fbc93><input type="text"${ssrRenderAttr("value", unref(form).phone)}${ssrRenderAttr("placeholder", _ctx.$t("labels.phone"))} data-v-ac4fbc93><input type="text"${ssrRenderAttr("value", unref(form).email)}${ssrRenderAttr("placeholder", _ctx.$t("labels.email"))} data-v-ac4fbc93><textarea${ssrRenderAttr("placeholder", _ctx.$t("labels.yourMessage"))} data-v-ac4fbc93>${ssrInterpolate(unref(form).content)}</textarea><div class="text-center" data-v-ac4fbc93><button type="submit" class="silver_btn contact_form_btn" data-v-ac4fbc93>${ssrInterpolate(_ctx.$t("buttons.send"))}</button></div></form></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ac4fbc93"]]);

export { index as default };
//# sourceMappingURL=index.1abe0eeb.mjs.map
