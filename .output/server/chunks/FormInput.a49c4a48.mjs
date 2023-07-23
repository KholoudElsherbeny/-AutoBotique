import { resolveComponent, withCtx, mergeProps, openBlock, createBlock, withDirectives, createVNode, vModelDynamic, toDisplayString, withModifiers, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrGetDynamicModelProps, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      required: true
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showPassword: false,
      value: null
    };
  },
  methods: {
    updateValue(e) {
      this.$emit("update", e.target.value);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VField = resolveComponent("VField");
  const _component_VErrorMessage = resolveComponent("VErrorMessage");
  let _temp0, _temp1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e17ee849>`);
  _push(ssrRenderComponent(_component_VField, { name: $props.name }, {
    default: withCtx(({ field, meta }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.type == "password") {
          _push2(`<div class="${ssrRenderClass([{
            "is-success": meta.valid && meta.touched,
            "is-danger": !meta.valid && meta.touched
          }, "input_wrapper"])}" data-v-e17ee849${_scopeId}><input${ssrRenderAttrs((_temp0 = mergeProps(field, {
            class: "input",
            id: $props.label,
            type: !$data.showPassword ? "password" : "text"
          }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, $data.value))))} data-v-e17ee849${_scopeId}><label${ssrRenderAttr("for", $props.label)} class="${ssrRenderClass([$data.value ? "label_active" : "", "label"])}" data-v-e17ee849${_scopeId}>${ssrInterpolate($props.label || "Password")}</label>`);
          if ($props.showIcon) {
            _push2(`<span class="password_icon" data-v-e17ee849${_scopeId}>`);
            if ($data.showPassword) {
              _push2(`<i class="far fa-eye" data-v-e17ee849${_scopeId}></i>`);
            } else {
              _push2(`<i class="far fa-eye-slash" data-v-e17ee849${_scopeId}></i>`);
            }
            _push2(`</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<div class="${ssrRenderClass([{
            "is-success": meta.valid && meta.touched,
            "is-danger": !meta.valid && meta.touched
          }, "input_wrapper"])}" data-v-e17ee849${_scopeId}><input${ssrRenderAttrs((_temp1 = mergeProps({ id: $props.label }, field, {
            class: "input",
            type: $props.type
          }), mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, $data.value))))} data-v-e17ee849${_scopeId}><label${ssrRenderAttr("for", $props.label)} class="${ssrRenderClass([$data.value ? "label_active" : "", "label"])}" data-v-e17ee849${_scopeId}>${ssrInterpolate($props.label)}</label></div>`);
        }
        if (!meta.valid && meta.touched) {
          _push2(ssrRenderComponent(_component_VErrorMessage, {
            name: $props.name,
            as: "div",
            style: { "color": "red" },
            class: "help is-danger"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $props.type == "password" ? (openBlock(), createBlock("div", {
            key: 0,
            class: ["input_wrapper", {
              "is-success": meta.valid && meta.touched,
              "is-danger": !meta.valid && meta.touched
            }]
          }, [
            withDirectives(createVNode("input", mergeProps(field, {
              class: "input",
              id: $props.label,
              "onUpdate:modelValue": ($event) => $data.value = $event,
              type: !$data.showPassword ? "password" : "text"
            }), null, 16, ["id", "onUpdate:modelValue", "type"]), [
              [vModelDynamic, $data.value]
            ]),
            createVNode("label", {
              for: $props.label,
              class: ["label", $data.value ? "label_active" : ""]
            }, toDisplayString($props.label || "Password"), 11, ["for"]),
            $props.showIcon ? (openBlock(), createBlock("span", {
              key: 0,
              class: "password_icon",
              onClick: withModifiers(($event) => $data.showPassword = !$data.showPassword, ["stop"])
            }, [
              $data.showPassword ? (openBlock(), createBlock("i", {
                key: 0,
                class: "far fa-eye"
              })) : (openBlock(), createBlock("i", {
                key: 1,
                class: "far fa-eye-slash"
              }))
            ], 8, ["onClick"])) : createCommentVNode("", true)
          ], 2)) : (openBlock(), createBlock("div", {
            key: 1,
            class: ["input_wrapper", {
              "is-success": meta.valid && meta.touched,
              "is-danger": !meta.valid && meta.touched
            }]
          }, [
            withDirectives(createVNode("input", mergeProps({ id: $props.label }, field, {
              "onUpdate:modelValue": ($event) => $data.value = $event,
              class: "input",
              type: $props.type
            }), null, 16, ["id", "onUpdate:modelValue", "type"]), [
              [vModelDynamic, $data.value]
            ]),
            createVNode("label", {
              for: $props.label,
              class: ["label", $data.value ? "label_active" : ""]
            }, toDisplayString($props.label), 11, ["for"])
          ], 2)),
          !meta.valid && meta.touched ? (openBlock(), createBlock(_component_VErrorMessage, {
            key: 2,
            name: $props.name,
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Form/FormInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e17ee849"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=FormInput.a49c4a48.mjs.map
