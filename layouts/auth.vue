<template>
  <section class="auth_layout">
    <div class="authContainer pt-5 pb-4" id="fullheight">
      <div class="d-flex flex-column auth_itself" id="fullheight">
        <header>
          <div>
            <img src="@/assets/media/images/logo/logo.svg" alt="logo" />
          </div>
        </header>
        <div class="flex-grow-1">
          <slot />
        </div>
        <footer class="d-flex justify-content-between py-4">
          <router-link to="policy">
            {{ $t("labels.privacy_policy") }}
          </router-link>
          <div class="copy_right">
            <span>{{ $t("copyright") }}</span>
            <span>&copy;</span>
            <span class="mainColor">{{ $t("auto_boutique") }}</span>
            <span> 2023</span>
          </div>
        </footer>
      </div>
    </div>
  </section>
</template>
<script>
useHead({
  titleTemplate: `Auth | %s`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Starter App Desc Will Go Here",
    },
  ],
});
export default {
  name: "auth",
  mounted() {
    if (this.$i18n.locale == "ar") {
      document.body.dir = "rtl";
    } else if (this.$i18n.locale == "en") {
      document.body.dir = "ltr";
    }
  },
};
</script>
<style lang="scss" scoped>
.auth_layout {
  width: 90% !important;
  max-width: 1920px !important;
  margin: 0 auto;
  min-height: 100vh;
  overflow-x: hidden;
  // background: yellow;
  @media screen and (max-width: 1200px) {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
      url("@/assets/media/images/icons/BACKDROP.svg") center/contain no-repeat;
    backdrop-filter: blur(5px);
  }
  .authContainer {
    height: 100vh !important;
    // background: red;
    .auth_itself {
      // height: 100% !important;
      // background: blue;
    }
  }
}
</style>
