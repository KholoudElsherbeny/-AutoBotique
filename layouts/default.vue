<template>
  <section>
    <Header />
    <div class="default_slot">
      <slot />
    </div>
    <Footer />
  </section>
</template>

<script setup>
// import { useGlobalStore } from "@/stores/global";

// const store = useGlobalStore();

const i18n = useI18n();

useHead({
  titleTemplate: `${i18n.t("appName")} | %s`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Starter App Desc Will Go Here",
    },
  ],
});

// const mainServices = computed(() => store.getServices);
// const mainSettings = computed(() => store.getSettings);
// const { getMainServices, getMainSettings } = store;

// console.log(getMainServices());
// watchEffect(() => {
//   getMainServices();
//   getMainSettings();
// });

// export default {
//   name: "DefaultLayout",
//   mounted() {
//     if (this.$i18n.locale == "ar") {
//       document.body.dir = "rtl";
//     } else if (this.$i18n.locale == "en") {
//       document.body.dir = "ltr";
//     }
//   },
// };
</script>
<style lang="scss" scoped></style>
