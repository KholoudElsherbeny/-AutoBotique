import PrimeVue from "primevue/config";

// Importing PrimeVue Components
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import InputText from "primevue/inputtext";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });

  // Register PrimeVue Components
  nuxtApp.vueApp.component('pv-button', Button);
  nuxtApp.vueApp.component('Paginator', Paginator);
  nuxtApp.vueApp.component('InputText', InputText);
});
