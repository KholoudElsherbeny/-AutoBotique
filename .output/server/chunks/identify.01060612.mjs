import { _ as __nuxt_component_1 } from './FormTelInput.38f620af.mjs';
import { _ as _sfc_main$1 } from './FormButton.e7bad1ea.mjs';
import { _ as _export_sfc, u as useRouter, a as useRuntimeConfig, b as useI18n$1 } from './server.mjs';
import { ref, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useHead } from './composables.65cc0e08.mjs';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0 } from './BACKDROP2.90d07d0f.mjs';
import { object, string } from 'yup';
import { configure } from 'vee-validate';
import { useToast } from 'vue-toastification';
import './fetch.da0e0810.mjs';
import 'ohash';
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
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
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

const _sfc_main = {
  __name: "identify",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const router = useRouter();
    const config = useRuntimeConfig();
    const i18n = useI18n$1();
    const clickEvent = ref(0);
    useHead({
      title: `Identify`
    });
    configure({
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    });
    const phone_code = ref(null);
    const updatePhoneCode = (e) => {
      phone_code.value = e;
    };
    const schema = object({
      phone: string().required().label("Phone Number")
    });
    const initialValues = { email: "", password: "" };
    const handleSubmit = async (values, actions) => {
      const formData = new FormData();
      formData.append("phone", values.phone.trim());
      formData.append("phone_code", phone_code.value);
      const baseURL = config.public.baseURL;
      const headers = {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value
      };
      try {
        const data = await $fetch(`${baseURL}send_code`, {
          method: "post",
          headers,
          body: formData
        });
        console.log(data);
        toast.success(data.message);
        const phone_cookie = useCookie("phone");
        phone_cookie.value = values.phone;
        const phone_code_cookie = useCookie("phone_code");
        phone_code_cookie.value = phone_code.value;
        router.push("/auth/login/verify");
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = resolveComponent("VForm");
      const _component_FormTelInput = __nuxt_component_1;
      const _component_FormButton = _sfc_main$1;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-100 sign_in_page" }, _attrs))} data-v-b7cc96ee><div class="h-100 auth_form_container d-flex justify-content-start align-items-center" data-v-b7cc96ee><div class="container-fluid w-100" data-v-b7cc96ee><div class="row" data-v-b7cc96ee>`);
      _push(ssrRenderComponent(_component_VForm, {
        "validation-schema": unref(schema),
        "initial-values": initialValues,
        onSubmit: handleSubmit,
        class: "col-12 col-xl-6 col-xxl-5"
      }, {
        default: withCtx(({ meta: formMeta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column gap-3" data-v-b7cc96ee${_scopeId}><h5 class="sub_title" data-v-b7cc96ee${_scopeId}>${ssrInterpolate(_ctx.$t("auth_sub_title"))}</h5><h1 class="title" data-v-b7cc96ee${_scopeId}>Forget Your Password?!</h1><div class="d-flex gap-4" data-v-b7cc96ee${_scopeId}><span data-v-b7cc96ee${_scopeId}>Please enter your mobile number so We can send You a verfication code . </span></div>`);
            _push2(ssrRenderComponent(_component_FormTelInput, {
              clickEvent: unref(clickEvent),
              onCode_change: updatePhoneCode,
              name: "phone"
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-content-end mt-3" data-v-b7cc96ee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormButton, {
              type: "submit",
              class: { red: formMeta.valid },
              disabled: !formMeta.valid
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Send`);
                } else {
                  return [
                    createTextVNode("Send")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-column gap-3" }, [
                createVNode("h5", { class: "sub_title" }, toDisplayString(_ctx.$t("auth_sub_title")), 1),
                createVNode("h1", { class: "title" }, "Forget Your Password?!"),
                createVNode("div", { class: "d-flex gap-4" }, [
                  createVNode("span", null, "Please enter your mobile number so We can send You a verfication code . ")
                ]),
                createVNode(_component_FormTelInput, {
                  clickEvent: unref(clickEvent),
                  onCode_change: updatePhoneCode,
                  name: "phone"
                }, null, 8, ["clickEvent"]),
                createVNode("div", { class: "d-flex justify-content-end mt-3" }, [
                  createVNode(_component_FormButton, {
                    type: "submit",
                    class: { red: formMeta.valid },
                    disabled: !formMeta.valid
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Send")
                    ]),
                    _: 2
                  }, 1032, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><img${ssrRenderAttrs(mergeProps({
        class: "background_iamge",
        "data-src": _imports_0,
        alt: "car"
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-b7cc96ee></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/identify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const identify = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b7cc96ee"]]);

export { identify as default };
//# sourceMappingURL=identify.01060612.mjs.map
