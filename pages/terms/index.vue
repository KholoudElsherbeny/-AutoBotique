<template>
  <section class="terms_page section_container">
    <div class="terms_container main_section">
      <div class="terms_info">
        <div class="section_header">
          <div class="sub_title">
            {{ $t("titles.contact_us_sub_title") }}
          </div>
          <h3 class="title">
            {{ $t("buttons.terms&Conditions") }}
          </h3>
          <img
            class="slider_title_backDrop"
            src="@/assets/media/images/icons/PATTERN.svg"
            alt=""
          />
        </div>
        <div class="about_text">
          {{ aboutData }}
        </div>
      </div>
    </div>
    <div class="terms_page_img_bg" id="terms_page_img_bg">
      <img src="@/assets/media/images/icons/aboutUs_bg.png" alt="About Us" />
    </div>
  </section>
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
const aboutData = ref(null);
const getAbout = async () => {
  const { data } = await $fetch(`${baseURL}settings/terms_and_conditions`, {
    headers: headers,
  });
  // console.log(data);
  aboutData.value = data.value;
};
await getAbout();
</script>
<style lang="scss" scoped>
.terms_page {
  min-height: 100vh;
  position: relative;
  // padding: 0 !important;
  .terms_page_img_bg {
    z-index: -1;
    display: block;
    position: fixed;
    right: 0;
    top: 0;
    height: 50%;
    width: 50%;
    transition: all 0.3s;
    img {
      width: 100%;
      opacity: 0.7;
      // transform: translateX(-30%);
    }
  }
}
.terms_container {
  padding-block-end: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  .terms_info {
    flex-grow: 1;
    height: 100%;
    // width: 50%;
    // margin-inline-start: auto;
    // .section_header {
    //   padding-inline-start: 0;
    //   .slider_title_backDrop {
    //     left: -20%;
    //   }
    // }
  }
}
</style>
