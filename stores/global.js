export const useGlobalStore = defineStore("global", {
  state: () => ({
    mainServices: null,
    mainSettings: null,
  }),

  getters: {
    getServices: (state) => state.mainServices,
    getSettings: (state) => state.mainSettings,
  },
  actions: {
    async getMainSettings() {
      if (process.client) {
        // const i18n = useI18n()
        const { data } = await useAPILazyFetch("get-setting", {
          method: "GET",
        });
        watch(data, (data) => {
          this.mainSettings = data.data.setting;
        });
      }
    },
    async getMainServices() {
      // const i18n = useI18n()
      const { data } = await useAPILazyFetch("/get-main-services", {
        method: "GET",
      });
      watch(data, (data) => {
        this.mainServices = data.data;
      });

      // this.mainServices = data.value.data
    },
  },
});
