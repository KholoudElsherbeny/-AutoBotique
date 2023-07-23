import { watch, ref, resolveComponent, resolveDirective, withCtx, unref, mergeProps, createVNode, withModifiers, openBlock, createBlock, withDirectives, toDisplayString, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { d as defineStore, _ as _export_sfc, b as useI18n$1, a as useRuntimeConfig, s as storeToRefs } from './server.mjs';
import { u as useLazyFetch } from './fetch.da0e0810.mjs';

const useAPILazyFetch = (path, options = {}) => {
  useI18n$1();
  useRuntimeConfig();
  return useLazyFetch(path, options, "$xqVADkFxrJ");
};
const useGeneralStore = defineStore("general", {
  state: () => ({
    countries: []
  }),
  getters: {
    getCountries: (state) => state.countries
  },
  actions: {
    async setCountries() {
      console.log("ss");
      const { data } = await useAPILazyFetch("country", {
        method: "GET"
      });
      watch(data, (data2) => {
        this.countries = data2.data;
      });
    },
    async getMainServices() {
      const { data } = await useAPILazyFetch("/get-main-services", {
        method: "GET"
      });
      watch(data, (data2) => {
        this.mainServices = data2.data;
      });
    }
  }
});
const _sfc_main = {
  __name: "FormTelInput",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String
    },
    code: {
      type: Number,
      default: 20
    },
    label: {
      type: String,
      default: "phone"
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    clickEvent: {
      type: Number,
      required: true
    }
  },
  emits: ["code_change"],
  setup(__props, { emit }) {
    const props = __props;
    const store = useGeneralStore();
    const { getCountries } = storeToRefs(store);
    store.setCountries();
    const country = ref(null);
    watch(getCountries, () => {
      console.log(getCountries.value);
      if (getCountries.value.length) {
        country.value = { ...getCountries.value[0] };
        console.log(country.value);
      }
    });
    watch(country, (value) => {
      emit("code_change", value ? value.phone_code : null);
    });
    ref(false);
    const show = ref(false);
    watch(
      () => props.clickEvent,
      (newVal) => {
        if (newVal) {
          show.value = false;
          console.log(newVal);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VField = resolveComponent("VField");
      const _component_VErrorMessage = resolveComponent("VErrorMessage");
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3ff5a12e>`);
      _push(ssrRenderComponent(_component_VField, { name: __props.name }, {
        default: withCtx(({ field, meta }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{
              "is-success": meta.valid && meta.touched,
              "is-danger": !meta.valid && meta.touched
            }, "input_wrapper"])}" data-v-3ff5a12e${_scopeId}><div class="d-flex" data-v-3ff5a12e${_scopeId}>`);
            if (unref(country)) {
              _push2(`<div class="code_select d-flex gap-2" data-v-3ff5a12e${_scopeId}><span data-v-3ff5a12e${_scopeId}><img${ssrRenderAttrs(mergeProps({
                class: "flag_icon",
                key: unref(country).id,
                "data-src": unref(country).image,
                alt: "flag",
                width: "25",
                height: "20"
              }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3ff5a12e${_scopeId}></span><span class="code_select_number" data-v-3ff5a12e${_scopeId}> +${ssrInterpolate(unref(country).phone_code)}</span>`);
              if (unref(show)) {
                _push2(`<div class="code_dropdown" data-v-3ff5a12e${_scopeId}><!--[-->`);
                ssrRenderList(unref(getCountries), (item) => {
                  _push2(`<div data-v-3ff5a12e${_scopeId}>`);
                  if (unref(country).phone_code != item.phone_code) {
                    _push2(`<div class="code_dropdown_item d-flex gap-2" data-v-3ff5a12e${_scopeId}><span data-v-3ff5a12e${_scopeId}><img${ssrRenderAttrs(mergeProps({
                      class: "flag_icon",
                      "data-src": item.image,
                      alt: "flag",
                      width: "25",
                      height: "20"
                    }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-3ff5a12e${_scopeId}></span><span data-v-3ff5a12e${_scopeId}>${ssrInterpolate(item.name)}</span><span data-v-3ff5a12e${_scopeId}> +${ssrInterpolate(item.phone_code)}</span></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<input${ssrRenderAttrs(mergeProps(field, {
              class: "flex-grow-1",
              id: __props.label,
              type: "number",
              autocomplete: "off",
              placeholder: "Phone Number"
            }))} data-v-3ff5a12e${_scopeId}></div><label${ssrRenderAttr("for", __props.label)} class="label" data-v-3ff5a12e${_scopeId}>${ssrInterpolate(__props.label)}</label></div>`);
            if (!meta.valid && meta.touched) {
              _push2(ssrRenderComponent(_component_VErrorMessage, {
                name: __props.name,
                as: "div",
                style: { "color": "red" },
                class: "help is-danger"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ["input_wrapper", {
                  "is-success": meta.valid && meta.touched,
                  "is-danger": !meta.valid && meta.touched
                }],
                onClick: withModifiers(() => {
                }, ["stop"])
              }, [
                createVNode("div", { class: "d-flex" }, [
                  unref(country) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "code_select d-flex gap-2",
                    onClick: ($event) => show.value = !unref(show)
                  }, [
                    createVNode("span", null, [
                      withDirectives((openBlock(), createBlock("img", {
                        class: "flag_icon",
                        key: unref(country).id,
                        "data-src": unref(country).image,
                        alt: "flag",
                        width: "25",
                        height: "20"
                      }, null, 8, ["data-src"])), [
                        [_directive_lazy_load]
                      ])
                    ]),
                    createVNode("span", { class: "code_select_number" }, " +" + toDisplayString(unref(country).phone_code), 1),
                    unref(show) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "code_dropdown"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(getCountries), (item) => {
                        return openBlock(), createBlock("div", {
                          onClick: ($event) => country.value = { ...item },
                          key: item.id
                        }, [
                          unref(country).phone_code != item.phone_code ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "code_dropdown_item d-flex gap-2"
                          }, [
                            createVNode("span", null, [
                              withDirectives(createVNode("img", {
                                class: "flag_icon",
                                "data-src": item.image,
                                alt: "flag",
                                width: "25",
                                height: "20"
                              }, null, 8, ["data-src"]), [
                                [_directive_lazy_load]
                              ])
                            ]),
                            createVNode("span", null, toDisplayString(item.name), 1),
                            createVNode("span", null, " +" + toDisplayString(item.phone_code), 1)
                          ])) : createCommentVNode("", true)
                        ], 8, ["onClick"]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ], 8, ["onClick"])) : createCommentVNode("", true),
                  createVNode("input", mergeProps(field, {
                    onClick: withModifiers(($event) => show.value = false, ["stop"]),
                    class: "flex-grow-1",
                    id: __props.label,
                    type: "number",
                    autocomplete: "off",
                    placeholder: "Phone Number"
                  }), null, 16, ["onClick", "id"])
                ]),
                createVNode("label", {
                  for: __props.label,
                  class: "label"
                }, toDisplayString(__props.label), 9, ["for"])
              ], 10, ["onClick"]),
              !meta.valid && meta.touched ? (openBlock(), createBlock(_component_VErrorMessage, {
                key: 0,
                name: __props.name,
                as: "div",
                style: { "color": "red" },
                class: "help is-danger"
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/FormTelInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ff5a12e"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=FormTelInput.38f620af.mjs.map
