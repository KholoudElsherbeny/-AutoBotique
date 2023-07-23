import { _ as __nuxt_component_0 } from './FormInput.a49c4a48.mjs';
import { _ as _sfc_main$1 } from './FormButton.e7bad1ea.mjs';
import { _ as _export_sfc, u as useRouter, a as useRuntimeConfig, b as useI18n$1 } from './server.mjs';
import { ref, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useHead } from './composables.65cc0e08.mjs';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0 } from './BACKDROP2.90d07d0f.mjs';
import { object, string, ref as ref$1 } from 'yup';
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
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const router = useRouter();
    useHead({
      title: `Reset Password`
    });
    const config = useRuntimeConfig();
    const i18n = useI18n$1();
    const phone_code = useCookie("phone_code");
    const phone = useCookie("phone");
    const code = useCookie("code");
    ref(0);
    configure({
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    });
    const schema = object({
      password: string().required().min(8).label("New Password"),
      confirmPassword: string().required().oneOf([ref$1("password")], "Passwords do not match").label("Your Confirmation Password")
    });
    const initialValues = { email: "", password: "" };
    const handleSubmit = async (values, actions) => {
      const formData = new FormData();
      formData.append("code", code.value);
      formData.append("phone", phone.value);
      formData.append("phone_code", phone_code.value);
      formData.append("password", values.password.trim());
      formData.append("password_confirmation", values.confirmPassword.trim());
      const baseURL = config.public.baseURL;
      const headers = {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value
      };
      try {
        const data = await $fetch(`${baseURL}reset_password`, {
          method: "post",
          headers,
          body: formData
        });
        toast.success(data.message);
        phone.value = null;
        phone_code.value = null;
        code.value = null;
        router.push("/auth/sign-in");
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = resolveComponent("VForm");
      const _component_FormInput = __nuxt_component_0;
      const _component_FormButton = _sfc_main$1;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-100 reset_password_page" }, _attrs))} data-v-9a4a34ed><div class="h-100 auth_form_container d-flex justify-content-start align-items-center" data-v-9a4a34ed><div class="container-fluid w-100" data-v-9a4a34ed><div class="row" data-v-9a4a34ed>`);
      _push(ssrRenderComponent(_component_VForm, {
        "validation-schema": unref(schema),
        "initial-values": initialValues,
        onSubmit: handleSubmit,
        class: "col-12 col-xl-6 col-xxl-5"
      }, {
        default: withCtx(({ meta: formMeta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column gap-3" data-v-9a4a34ed${_scopeId}><h5 class="sub_title" data-v-9a4a34ed${_scopeId}>${ssrInterpolate(_ctx.$t("auth_sub_title"))}</h5><h1 class="title" data-v-9a4a34ed${_scopeId}>Create New Password</h1>`);
            _push2(ssrRenderComponent(_component_FormInput, {
              type: "password",
              name: "password",
              label: "New Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormInput, {
              type: "password",
              name: "confirmPassword",
              label: _ctx.$t("labels.confirmPassword"),
              showIcon: false
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-content-end mt-3" data-v-9a4a34ed${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormButton, {
              type: "submit",
              class: { red: formMeta.valid },
              disabled: !formMeta.valid
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("buttons.confirm"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("buttons.confirm")), 1)
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
                createVNode("h1", { class: "title" }, "Create New Password"),
                createVNode(_component_FormInput, {
                  type: "password",
                  name: "password",
                  label: "New Password"
                }),
                createVNode(_component_FormInput, {
                  type: "password",
                  name: "confirmPassword",
                  label: _ctx.$t("labels.confirmPassword"),
                  showIcon: false
                }, null, 8, ["label"]),
                createVNode("div", { class: "d-flex justify-content-end mt-3" }, [
                  createVNode(_component_FormButton, {
                    type: "submit",
                    class: { red: formMeta.valid },
                    disabled: !formMeta.valid
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("buttons.confirm")), 1)
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
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-9a4a34ed></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const resetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9a4a34ed"]]);

export { resetPassword as default };
//# sourceMappingURL=reset-password.c4637854.mjs.map
