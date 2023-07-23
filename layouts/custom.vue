<template>
  <section>
    <h1>Custom Slot</h1>
    <slot />
    <h1>Custom Slot</h1>
  </section>
</template>

<script>
useHead({
  titleTemplate: `Starter App | %s`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Starter App Desc Will Go Here",
    },
  ],
});

export default {
  name: "custom",
  mounted() {
    if (this.$i18n.locale == "ar") {
      document.body.dir = "rtl";
    } else if (this.$i18n.locale == "en") {
      document.body.dir = "ltr";
    }
  },
};
</script>
