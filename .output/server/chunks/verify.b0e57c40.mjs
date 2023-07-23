import { _ as __nuxt_component_0 } from './FormInput.a49c4a48.mjs';
import { _ as _sfc_main$1 } from './FormButton.e7bad1ea.mjs';
import { _ as _export_sfc, u as useRouter, a as useRuntimeConfig, b as useI18n$1 } from './server.mjs';
import { ref, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useHead } from './composables.65cc0e08.mjs';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0 } from './BACKDROP.fc8a6ccc.mjs';
import { object, string } from 'yup';
import { configure } from 'vee-validate';
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
  __name: "verify",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const toast = useToast();
    const config = useRuntimeConfig();
    const i18n = useI18n$1();
    const phone_code = useCookie("phone_code");
    const phone = useCookie("phone");
    useHead({
      title: `Verify`
    });
    configure({
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    });
    const schema = object({
      code: string().required().label("Verify Code")
    });
    const handleSubmit = async (values, actions) => {
      const frmData = new FormData();
      frmData.append("code", values.code);
      frmData.append("phone", phone.value);
      frmData.append("phone_code", phone_code.value);
      frmData.append("device_token", "website");
      frmData.append("type", "ios");
      const baseURL = config.public.baseURL;
      const headers = {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value
      };
      try {
        const data = await $fetch(`${baseURL}check_code`, {
          method: "post",
          headers,
          body: frmData
        });
        const code = useCookie("code");
        code.value = values.code;
        toast.success(data.message);
        router.push("/auth/reset-password");
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    const timerCount = ref(60);
    const countDown = () => {
      if (timerCount.value > 0) {
        setTimeout(() => {
          timerCount.value -= 1;
          countDown();
        }, 1e3);
      }
    };
    countDown();
    const resendCode = async () => {
      const frmData = new FormData();
      frmData.append("phone", phone.value);
      frmData.append("phone_code", phone_code.value);
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
          body: frmData
        });
        toast.success(data.message);
        timerCount.value = 60;
        countDown();
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = resolveComponent("VForm");
      const _component_router_link = resolveComponent("router-link");
      const _component_FormInput = __nuxt_component_0;
      const _component_FormButton = _sfc_main$1;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-100 verify_page" }, _attrs))} data-v-f6a0ed3c><div class="h-100 auth_form_container d-flex justify-content-start align-items-center" data-v-f6a0ed3c><div class="container-fluid w-100" data-v-f6a0ed3c><div class="row" data-v-f6a0ed3c>`);
      _push(ssrRenderComponent(_component_VForm, {
        "validation-schema": unref(schema),
        "initial-values": _ctx.initialValues,
        onSubmit: handleSubmit,
        class: "col-12 col-xl-6 col-xxl-5"
      }, {
        default: withCtx(({ meta: formMeta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column gap-3" data-v-f6a0ed3c${_scopeId}><h5 class="sub_title" data-v-f6a0ed3c${_scopeId}>${ssrInterpolate(_ctx.$t("auth_sub_title"))}</h5><h1 class="title" data-v-f6a0ed3c${_scopeId}>Verifying Account</h1><div class="w-75 mb-4" data-v-f6a0ed3c${_scopeId}> We just sent a 4-digit verification to +${ssrInterpolate(unref(phone_code))} ${ssrInterpolate(unref(phone))}. enter the code in the box below to continue. </div>`);
            _push2(ssrRenderComponent(_component_router_link, {
              class: "mainColor",
              to: "edit_number"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Edit the Number`);
                } else {
                  return [
                    createTextVNode("Edit the Number")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormInput, {
              label: "Code",
              type: "text",
              placeholder: "Code",
              name: "code"
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-content-between" data-v-f6a0ed3c${_scopeId}><div data-v-f6a0ed3c${_scopeId}> Didn&#39;t Receive A Code?<button${ssrIncludeBooleanAttr(unref(timerCount)) ? " disabled" : ""} class="${ssrRenderClass([unref(timerCount) && "btn_disabled", "mainColor span_btn"])}" data-v-f6a0ed3c${_scopeId}> Resend </button></div><div data-v-f6a0ed3c${_scopeId}>${ssrInterpolate("0 : " + unref(timerCount))}</div></div><div class="d-flex justify-content-end mt-3" data-v-f6a0ed3c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormButton, {
              type: "submit",
              class: { red: formMeta.valid },
              disabled: !formMeta.valid
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Verify Account`);
                } else {
                  return [
                    createTextVNode("Verify Account")
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
                createVNode("h1", { class: "title" }, "Verifying Account"),
                createVNode("div", { class: "w-75 mb-4" }, " We just sent a 4-digit verification to +" + toDisplayString(unref(phone_code)) + " " + toDisplayString(unref(phone)) + ". enter the code in the box below to continue. ", 1),
                createVNode(_component_router_link, {
                  class: "mainColor",
                  to: "edit_number"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Edit the Number")
                  ]),
                  _: 1
                }),
                createVNode(_component_FormInput, {
                  label: "Code",
                  type: "text",
                  placeholder: "Code",
                  name: "code"
                }),
                createVNode("div", { class: "d-flex justify-content-between" }, [
                  createVNode("div", null, [
                    createTextVNode(" Didn't Receive A Code?"),
                    createVNode("button", {
                      class: ["mainColor span_btn", unref(timerCount) && "btn_disabled"],
                      onClick: resendCode,
                      disabled: unref(timerCount)
                    }, " Resend ", 10, ["disabled"])
                  ]),
                  createVNode("div", null, toDisplayString("0 : " + unref(timerCount)), 1)
                ]),
                createVNode("div", { class: "d-flex justify-content-end mt-3" }, [
                  createVNode(_component_FormButton, {
                    type: "submit",
                    class: { red: formMeta.valid },
                    disabled: !formMeta.valid
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Verify Account")
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
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-f6a0ed3c></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login/verify.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const verify = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f6a0ed3c"]]);

export { verify as default };
//# sourceMappingURL=verify.b0e57c40.mjs.map
