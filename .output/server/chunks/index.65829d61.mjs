import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0 } from './PATTERN.2143be41.mjs';
import { _ as _imports_1 } from './aboutUs_bg.8e9329a6.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_lazy_load = resolveDirective("lazy-load");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about_us_page section_container" }, _attrs))} data-v-f8540b5c><div class="about_us_container main_section" data-v-f8540b5c><div class="about_us_info" data-v-f8540b5c><div class="section_header" data-v-f8540b5c><div class="sub_title" data-v-f8540b5c>${ssrInterpolate(_ctx.$t("titles.contact_us_sub_title"))}</div><h3 class="title" data-v-f8540b5c>${ssrInterpolate(_ctx.$t("titles.about_us"))}</h3><img${ssrRenderAttrs(mergeProps({
    class: "slider_title_backDrop",
    "data-src": _imports_0,
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-f8540b5c></div><div class="about_text" data-v-f8540b5c><div data-v-f8540b5c> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste, tenetur praesentium a harum, inventore, labore iure accusantium deserunt porro nisi alias ipsum aperiam! Voluptatibus eveniet saepe sequi incidunt. Fuga. </div><div data-v-f8540b5c> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eum molestiae sit necessitatibus ipsa dicta perferendis inventore dolore amet, vitae quo! Cumque, porro? Et commodi dicta quibusdam fugiat dolorem earum. </div><div data-v-f8540b5c> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto enim veritatis ducimus cum sapiente. Odio sint saepe excepturi delectus facere architecto, tenetur possimus optio aliquam aliquid nobis! Voluptatum doloribus debitis exercitationem et magni tempora quos numquam! Unde, ut nemo quo aut fugit inventore labore repudiandae cupiditate earum exercitationem debitis suscipit repellat quam saepe alias sapiente voluptas hic nisi reprehenderit eum! Maxime possimus, quisquam, quidem ex tempore dolores expedita ducimus corporis quae, aspernatur consectetur. Enim architecto deleniti rerum nobis velit, similique dolores labore quas sit quae corrupti beatae dicta ab molestiae doloremque reprehenderit eos distinctio pariatur aspernatur, ratione vero ut? Voluptatum? </div></div></div></div><div class="about_us_page_img_bg" id="about_us_page_img_bg" data-v-f8540b5c><img${ssrRenderAttrs(mergeProps({
    "data-src": _imports_1,
    alt: "About Us"
  }, ssrGetDirectiveProps(_ctx, _directive_lazy_load)))} data-v-f8540b5c></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f8540b5c"]]);

export { index as default };
//# sourceMappingURL=index.65829d61.mjs.map
