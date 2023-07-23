import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_2 } from './CardProduct.e4872320.mjs';
import { ref, resolveDirective, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './PATTERN.2143be41.mjs';
import { _ as _export_sfc } from './server.mjs';

function styleInject(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || true) {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = "\n.p-tabview-nav-container {\n    position: relative;\n}\n.p-tabview-scrollable .p-tabview-nav-container {\n    overflow: hidden;\n}\n.p-tabview-nav-content {\n    overflow-x: auto;\n    overflow-y: hidden;\n    scroll-behavior: smooth;\n    scrollbar-width: none;\n    overscroll-behavior: contain auto;\n}\n.p-tabview-nav {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    flex: 1 1 auto;\n}\n.p-tabview-header-action {\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    position: relative;\n    text-decoration: none;\n    overflow: hidden;\n}\n.p-tabview-ink-bar {\n    display: none;\n    z-index: 1;\n}\n.p-tabview-header-action:focus {\n    z-index: 1;\n}\n.p-tabview-title {\n    line-height: 1;\n    white-space: nowrap;\n}\n.p-tabview-nav-btn {\n    position: absolute;\n    top: 0;\n    z-index: 2;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.p-tabview-nav-prev {\n    left: 0;\n}\n.p-tabview-nav-next {\n    right: 0;\n}\n.p-tabview-nav-content::-webkit-scrollbar {\n    display: none;\n}\n";
styleInject(css_248z);
const _sfc_main = {
  __name: "VehicleProducts",
  __ssrInlineRender: true,
  props: {
    vehicles: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    vehicle_types: {
      type: Array,
      required: false
    },
    no_slider: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup(__props) {
    ref([
      { title: "Tab 1", content: "Tab 1 Content" },
      { title: "Tab 2", content: "Tab 2 Content" },
      { title: "Tab 3", content: "Tab 3 Content" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_CardProduct = __nuxt_component_2;
      const _directive_lazy_load = resolveDirective("lazy-load");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "products_home_section" }, _attrs))} data-v-398b9b81><div class="products_home" data-v-398b9b81><div class="section_header" data-v-398b9b81><div class="sub_title" data-v-398b9b81>${ssrInterpolate(_ctx.$t("titles.Agent_for_the_finest_types_of_cars"))}</div>`);
      if (!__props.title) {
        _push(`<h3 class="title" data-v-398b9b81> ready for <br data-v-398b9b81> Delivery </h3>`);
      } else {
        _push(`<h3 class="title" data-v-398b9b81>${ssrInterpolate(__props.title)}</h3>`);
      }
      _push(`<img${ssrRenderAttrs(mergeProps({
        class: "slider_title_backDrop",
        "data-src": _imports_0,
        alt: ""
      }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-398b9b81></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (!__props.no_slider) {
        _push(`<div class="prdoucts_container py-2 pb-4" data-v-398b9b81>`);
        _push(ssrRenderComponent(_component_Swiper, {
          modules: [unref(Autoplay), unref(EffectFade), unref(Pagination), unref(Navigation)],
          "slides-per-view": 2,
          spaceBetween: 30,
          navigation: true,
          pagination: false,
          effect: "creative",
          breakpoints: {
            "640": {
              slidesPerView: 2,
              spaceBetween: 20
            },
            "768": {
              slidesPerView: 3,
              spaceBetween: 30
            },
            "1024": {
              slidesPerView: 4,
              spaceBetween: 30
            }
          },
          autoplay: {
            delay: 5e3,
            disableOnInteraction: true
          },
          "creative-effect": {
            prev: {
              shadow: false,
              translate: ["-100%", 0, -1]
            },
            next: {
              translate: ["100%", 0, 0]
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.vehicles, (item) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: item.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_CardProduct, { item }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_CardProduct, { item }, null, 8, ["item"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.vehicles, (item) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: item.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CardProduct, { item }, null, 8, ["item"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-398b9b81><div class="cars_grid_container" data-v-398b9b81><!--[-->`);
        ssrRenderList(__props.vehicles, (item) => {
          _push(`<div data-v-398b9b81>`);
          _push(ssrRenderComponent(_component_CardProduct, { item }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Vehicle/VehicleProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-398b9b81"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=VehicleProducts.32b3c744.mjs.map
