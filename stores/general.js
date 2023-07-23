export const useGeneralStore = defineStore("general", {
  state: () => ({
    countries: [],
  }),

  getters: {
    getCountries: (state) => state.countries,
  },
  actions: {
    async setCountries() {
      console.log("ss");
      // const i18n = useI18n()
      const { data } = await useAPILazyFetch("country", {
        method: "GET",
      });

      // this.countries = data.data;
      watch(data, (data) => {
        this.countries = data.data;
      });
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
