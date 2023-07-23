<template>
  <div>
    <Loader v-if="loading" />
    <div class="home-wrapper" v-else>
      <HomeHero :sliders="home.sliders" />
      <HomeProducts :vehicles="home.vehicles" />
      <!-- {{ home }} -->
    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const i18n = useI18n();
const toast = useToast();
const token = useCookie("JWT");
const headers = {
  Accept: "application/json",
  lang: i18n.locale.value,
  "Accept-Language": i18n.locale.value,
};
if (token.value) {
  headers.Authorization = `Bearer ${token.value}`;
}
const data = await $fetch(`${baseURL}home`, {
  headers: headers,
  method: "get",
});
// console.log(data);
const home = data;
// import { useGlobalStore } from "@/stores/global";
// const store = useGlobalStore();
// const mainServices = computed(() => store.getServices);
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 2000);
// const sliders = ref(null);
useHead({
  title: `${i18n.t("nav.home")}`,
  meta: [
    {
      name: "description",
      content: "Starter App Desc Will Go Here",
    },
  ],
});

// const { data: res } = useAPILazyFetch("/get-slider", {
//   method: "GET",
// });
// watch(res, (res) => {
//   sliders.value = res.data;
//   loading.value = false;
// });
</script>
<style lang="scss" scoped></style>
