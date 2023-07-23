import { u as useHead } from './composables.65cc0e08.mjs';
import { resolveComponent, resolveDirective, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo.515c10f7.mjs';
import { _ as _export_sfc } from './server.mjs';
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

useHead({
  titleTemplate: `Auth | %s`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Starter App Desc Will Go Here"
    }
  ]
});
const _sfc_main = {
  name: "auth",
  mounted() {
    if (this.$i18n.locale == "ar") {
      document.body.dir = "rtl";
    } else if (this.$i18n.locale == "en") {
      document.body.dir = "ltr";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _directive_lazy_load = resolveDirective("lazy-load");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "auth_layout" }, _attrs))} data-v-117d0871><div class="authContainer pt-5 pb-4" id="fullheight" data-v-117d0871><div class="d-flex flex-column auth_itself" id="fullheight" data-v-117d0871><header data-v-117d0871><div data-v-117d0871><img${ssrRenderAttrs(mergeProps({
    "data-src": _imports_0,
    alt: "logo"
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-117d0871></div></header><div class="flex-grow-1" data-v-117d0871>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><footer class="d-flex justify-content-between py-4" data-v-117d0871>`);
  _push(ssrRenderComponent(_component_router_link, { to: "policy" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("labels.privacy_policy"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("labels.privacy_policy")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="copy_right" data-v-117d0871><span data-v-117d0871>${ssrInterpolate(_ctx.$t("copyright"))}</span><span data-v-117d0871>\xA9</span><span class="mainColor" data-v-117d0871>${ssrInterpolate(_ctx.$t("auto_boutique"))}</span><span data-v-117d0871> 2023</span></div></footer></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-117d0871"]]);

export { auth as default };
//# sourceMappingURL=auth.683056c1.mjs.map
