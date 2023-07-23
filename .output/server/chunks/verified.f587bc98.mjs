import { _ as _sfc_main$1 } from './FormButton.e7bad1ea.mjs';
import { u as useHead } from './composables.65cc0e08.mjs';
import { ref, resolveComponent, resolveDirective, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0 } from './BACKDROP.fc8a6ccc.mjs';
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

const _sfc_main = {
  __name: "verified",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `Verified`
    });
    ref("");
    ref(60);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_FormButton = _sfc_main$1;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-100 verified_page" }, _attrs))} data-v-859459e0><div class="h-100 auth_form_container d-flex justify-content-start align-items-center" data-v-859459e0><div class="container-fluid w-100" data-v-859459e0><div class="row" data-v-859459e0><form class="col-12 col-xl-6 col-xxl-5" data-v-859459e0><div class="d-flex flex-column gap-3" data-v-859459e0><h5 class="sub_title" data-v-859459e0>${ssrInterpolate(_ctx.$t("auth_sub_title"))}</h5><h1 class="title" data-v-859459e0> Welcomoe To The Official <br data-v-859459e0>Auto Boutique Website. </h1><div class="light_text" data-v-859459e0> Your account has been created successfully </div><div class="d-flex justify-content-end mt-3" data-v-859459e0>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/auth/sign-in" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormButton, { type: "submit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`continue`);
                } else {
                  return [
                    createTextVNode("continue")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormButton, { type: "submit" }, {
                default: withCtx(() => [
                  createTextVNode("continue")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form></div></div></div><img${ssrRenderAttrs(mergeProps({
        class: "background_iamge",
        "data-src": _imports_0,
        alt: "car"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-859459e0></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/verified.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const verified = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-859459e0"]]);

export { verified as default };
//# sourceMappingURL=verified.f587bc98.mjs.map
