// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // ========== START:: APP CONFIGURATIONS ========== //
  app: {
    // Start:: Head Configurations //
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/static/logo.svg" }],
      style: [],
      script: [],
      noscript: [],
    },
    // End:: Head Configurations //
  },
  // ========== END:: APP HEAD CONFIGURATIONS ========== //

  // ========== START:: VITE CONFIGURATIONS ========== //

  // ========== END:: VITE CONFIGURATIONS ========== //

  // ========== START:: DEFINE GLOBAL STYLE "FILES, MODULES, LIBRARIES" INCLUDED IN EVERY PAGE ========== //
  css: [
    "ant-design-vue/dist/antd.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "vue-toast-notification/dist/theme-default.css",
    "primevue/resources/primevue.css",
    "primevue/resources/themes/tailwind-light/theme.css",
    "primeicons/primeicons.css",
    "@/assets/scss/main.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/abstracts/mixins.scss";
          @import "@/assets/scss/abstracts/variables.scss"; 
          @import "@/assets/scss/base/reset.scss"; 
          `,
        },
      },
    },
  },

  // ========== END:: DEFINE GLOBAL STYLE "FILES, MODULES, LIBRARIES" INCLUDED IN EVERY PAGE ========== //

  // ========== START:: MODULES CONFIGURATIONS ========== //
  modules: [
    // ['@nuxtjs/tailwindcss', {
    //   prefix: 'tw-'
    // }
    // ],
    "nuxt-swiper",
    "nuxt3-lazy-load",
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en.json",
            dir: "ltr",
          },
          {
            name: "عربي ",
            code: "ar",
            iso: "ar-AR",
            file: "ar.json",
            dir: "rtl",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "en",
        detectBrowserLanguage: {
          useCookie: false,
          cookieKey: "auto_website_lang",
          alwaysRedirect: true,
          fallbackLocale: "en",
        },
        vueI18nLoader: true,
      },
    ],
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  // swiper: {

  //   modules: ['navigation', 'pagination']
  // },

  // ========== End:: MODULES CONFIGURATIONS ========== //

  // ========== START:: NUXT APP PLUGINS CONFIGURATIONS ========== //
  plugins: [
    "~/plugins/antDesign.ts",
    "~/plugins/main.ts",
    "~/plugins/i18n.client.ts",
    "~/plugins/useBootstrap.client.ts",
    { src: "~/plugins/aos", ssr: false, mode: "client" },
  ],
  // ========== END:: NUXT APP PLUGINS CONFIGURATIONS ========== //

  runtimeConfig: {
    public: {
      baseURL: "https://phpv8.aait-d.com/auto-boutique/public/api/",
    },
  },

  build: {
    transpile: ["primevue", "@vee-validate/rules"],
  },

  // ========== START:: DEVELOPMENT SERVER CONFIGURATIONS ========== //
  // dev: true,
  devServer: {
    port: 3000,
  },
  // ========== END:: DEVELOPMENT SERVER CONFIGURATIONS ========== //
});
