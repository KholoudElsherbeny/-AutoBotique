import { _ as _export_sfc, a as useRuntimeConfig, b as useI18n$1, h as __nuxt_component_0$2 } from './server.mjs';
import { ref, resolveDirective, withCtx, mergeProps, unref, createVNode, withDirectives, toDisplayString, withModifiers, useSSRContext } from 'vue';
import { u as useCookie } from './cookie.59c766d4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_1 } from './search_icon.9ebb051f.mjs';
import { useToast } from 'vue-toastification';

const _sfc_main = {
  __name: "CardProduct",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { item } = __props;
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL;
    const i18n = useI18n$1();
    const toast = useToast();
    const token = useCookie("JWT");
    const headers = {
      Accept: "application/json",
      lang: i18n.locale.value,
      "Accept-Language": i18n.locale.value,
      Authorization: `Bearer ${token.value}`
    };
    const is_favorite = ref(item.is_favorite);
    const toggleBookmark = async () => {
      if (!token.value) {
        toast.warning(i18n.t("validation.sign_in_first"));
      } else {
        try {
          const frmData = new FormData();
          frmData.append("model_type", "vehicles");
          frmData.append("model_id", item.id);
          const data = await $fetch(`${baseURL}add_favorite`, {
            method: "post",
            headers,
            body: frmData
          });
          console.log(data);
          is_favorite.value = !is_favorite.value;
          toast.success(i18n.t("msg.update_successfully"));
        } catch (err) {
          toast.error(err.response._data.message);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<article${ssrRenderAttrs(_attrs)} data-v-6af1812c>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "prodcut_card",
        to: _ctx.localePath(`/vehicles/${__props.item.id}`)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prodcut_card_image" data-v-6af1812c${_scopeId}><img${ssrRenderAttrs(mergeProps({
              class: "w-100",
              "data-src": __props.item.preview_image,
              alt: ""
            }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-6af1812c${_scopeId}><span class="product_search_icon" data-v-6af1812c${_scopeId}><img${ssrRenderAttrs(mergeProps({
              "data-src": _imports_1,
              alt: ""
            }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-6af1812c${_scopeId}></span></div><div class="product_card_info d-flex justify-content-between align-items-start" data-v-6af1812c${_scopeId}><div data-v-6af1812c${_scopeId}><h6 class="product_card_sub_title" data-v-6af1812c${_scopeId}>${ssrInterpolate(__props.item.brand_name)}</h6><h5 class="product_card_title" data-v-6af1812c${_scopeId}>${ssrInterpolate(__props.item.name)}</h5></div><button class="${ssrRenderClass([unref(is_favorite) ? "not_fav_car" : "fav_car", "bookmark_product_card_btn"])}" data-v-6af1812c${_scopeId}><span class="not_fav" data-v-6af1812c${_scopeId}><i class="fa-regular fa-bookmark" data-v-6af1812c${_scopeId}></i></span><span class="my_fav" data-v-6af1812c${_scopeId}><i class="fa-solid fa-bookmark" data-v-6af1812c${_scopeId}></i></span><div class="custom_tooltip tooltip_top" data-v-6af1812c${_scopeId}>${ssrInterpolate(unref(is_favorite) ? _ctx.$t("tooltip.un_bookmark") : _ctx.$t("tooltip.bookmark"))}</div></button></div>`);
          } else {
            return [
              createVNode("div", { class: "prodcut_card_image" }, [
                withDirectives(createVNode("img", {
                  class: "w-100",
                  "data-src": __props.item.preview_image,
                  alt: ""
                }, null, 8, ["data-src"]), [
                  [_directive_lazy_load]
                ]),
                createVNode("span", { class: "product_search_icon" }, [
                  withDirectives(createVNode("img", {
                    "data-src": _imports_1,
                    alt: ""
                  }, null, 512), [
                    [_directive_lazy_load]
                  ])
                ])
              ]),
              createVNode("div", { class: "product_card_info d-flex justify-content-between align-items-start" }, [
                createVNode("div", null, [
                  createVNode("h6", { class: "product_card_sub_title" }, toDisplayString(__props.item.brand_name), 1),
                  createVNode("h5", { class: "product_card_title" }, toDisplayString(__props.item.name), 1)
                ]),
                createVNode("button", {
                  class: ["bookmark_product_card_btn", unref(is_favorite) ? "not_fav_car" : "fav_car"],
                  onClick: withModifiers(toggleBookmark, ["stop", "prevent"])
                }, [
                  createVNode("span", { class: "not_fav" }, [
                    createVNode("i", { class: "fa-regular fa-bookmark" })
                  ]),
                  createVNode("span", { class: "my_fav" }, [
                    createVNode("i", { class: "fa-solid fa-bookmark" })
                  ]),
                  createVNode("div", { class: "custom_tooltip tooltip_top" }, toDisplayString(unref(is_favorite) ? _ctx.$t("tooltip.un_bookmark") : _ctx.$t("tooltip.bookmark")), 1)
                ], 10, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/CardProduct.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6af1812c"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=CardProduct.e4872320.mjs.map
