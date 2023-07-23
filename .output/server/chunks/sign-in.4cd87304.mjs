import { _ as __nuxt_component_1 } from './FormTelInput.38f620af.mjs';
import { _ as __nuxt_component_0 } from './FormInput.a49c4a48.mjs';
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
  __name: "sign-in",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const router = useRouter();
    const config = useRuntimeConfig();
    const i18n = useI18n$1();
    const clickEvent = ref(0);
    useHead({
      title: `Sign In`
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
      phone: string().required().label("Phone Number"),
      password: string().required().min(8).label("Your Password")
    });
    const initialValues = { email: "", password: "" };
    const handleSubmit = async (values, actions) => {
      const formData = new FormData();
      formData.append("password", values.password.trim());
      formData.append("phone", values.phone.trim());
      formData.append("phone_code", phone_code.value);
      formData.append("device_token", "website");
      formData.append("type", "ios");
      const baseURL = config.public.baseURL;
      const headers = {
        Accept: "application/json",
        lang: i18n.locale.value,
        "Accept-Language": i18n.locale.value
      };
      try {
        const data = await $fetch(`${baseURL}login`, {
          method: "post",
          headers,
          body: formData
        });
        const JWT_cookie = useCookie("JWT", {
          maxAge: 365 * 24 * 60 * 60 * 1e3
        });
        const phone_cookie = useCookie("phone");
        const phone_code_cookie = useCookie("phone_code");
        const email_cookie = useCookie("email");
        const avatar_cookie = useCookie("avatar");
        const user_type_cookie = useCookie("user_type");
        const is_active_cookie = useCookie("is_active");
        phone_cookie.value = data.data.phone;
        phone_code_cookie.value = data.data.phone_code;
        if (data.data.is_active) {
          toast.success(data.message);
          email_cookie.value = data.data.email;
          JWT_cookie.value = data.data.token;
          avatar_cookie.value = data.data.avatar;
          user_type_cookie.value = data.data.user_type;
          is_active_cookie.value = data.data.is_active;
          router.push("/");
        } else {
          toast.warning(data.message);
          router.push("/auth/verify");
        }
      } catch (error) {
        toast.error(error.data.message);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VForm = resolveComponent("VForm");
      const _component_router_link = resolveComponent("router-link");
      const _component_FormTelInput = __nuxt_component_1;
      const _component_FormInput = __nuxt_component_0;
      const _component_FormButton = _sfc_main$1;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-100 sign_in_page" }, _attrs))} data-v-5d6e86a1><div class="h-100 auth_form_container d-flex justify-content-start align-items-center" data-v-5d6e86a1><div class="container-fluid w-100" data-v-5d6e86a1><div class="row" data-v-5d6e86a1>`);
      _push(ssrRenderComponent(_component_VForm, {
        "validation-schema": unref(schema),
        "initial-values": initialValues,
        onSubmit: handleSubmit,
        class: "col-12 col-xl-6 col-xxl-5"
      }, {
        default: withCtx(({ meta: formMeta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column gap-3" data-v-5d6e86a1${_scopeId}><h5 class="sub_title" data-v-5d6e86a1${_scopeId}>${ssrInterpolate(_ctx.$t("auth_sub_title"))}</h5><h1 class="title" data-v-5d6e86a1${_scopeId}>Welcome Back</h1><div class="d-flex gap-4" data-v-5d6e86a1${_scopeId}><span data-v-5d6e86a1${_scopeId}>Don&#39;t Have An Account?</span><span data-v-5d6e86a1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_router_link, {
              class: "mainColor",
              to: "/auth/sign-up"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign Up`);
                } else {
                  return [
                    createTextVNode("Sign Up")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</span></div>`);
            _push2(ssrRenderComponent(_component_FormTelInput, {
              clickEvent: unref(clickEvent),
              onCode_change: updatePhoneCode,
              name: "phone"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormInput, {
              type: "password",
              name: "password",
              label: "Password",
              placeholder: "Password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-content-end" data-v-5d6e86a1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_router_link, { to: "/auth/identify" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Forget Password?`);
                } else {
                  return [
                    createTextVNode("Forget Password?")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="d-flex justify-content-end mt-3" data-v-5d6e86a1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormButton, {
              type: "submit",
              class: { red: formMeta.valid },
              disabled: !formMeta.valid
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`sign in`);
                } else {
                  return [
                    createTextVNode("sign in")
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
                createVNode("h1", { class: "title" }, "Welcome Back"),
                createVNode("div", { class: "d-flex gap-4" }, [
                  createVNode("span", null, "Don't Have An Account?"),
                  createVNode("span", null, [
                    createVNode(_component_router_link, {
                      class: "mainColor",
                      to: "/auth/sign-up"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Sign Up")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(_component_FormTelInput, {
                  clickEvent: unref(clickEvent),
                  onCode_change: updatePhoneCode,
                  name: "phone"
                }, null, 8, ["clickEvent"]),
                createVNode(_component_FormInput, {
                  type: "password",
                  name: "password",
                  label: "Password",
                  placeholder: "Password"
                }),
                createVNode("div", { class: "d-flex justify-content-end" }, [
                  createVNode(_component_router_link, { to: "/auth/identify" }, {
                    default: withCtx(() => [
                      createTextVNode("Forget Password?")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "d-flex justify-content-end mt-3" }, [
                  createVNode(_component_FormButton, {
                    type: "submit",
                    class: { red: formMeta.valid },
                    disabled: !formMeta.valid
                  }, {
                    default: withCtx(() => [
                      createTextVNode("sign in")
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
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-5d6e86a1></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-in.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signIn = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d6e86a1"]]);

export { signIn as default };
//# sourceMappingURL=sign-in.4cd87304.mjs.map
