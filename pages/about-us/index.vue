<template>
  <section class="about_us_page section_container">
    <div class="about_us_container main_section">
      <div class="about_us_info">
        <div class="section_header">
          <div class="sub_title">
            {{ $t("titles.contact_us_sub_title") }}
          </div>
          <h3 class="title">
            {{ $t("titles.about_us") }}
          </h3>
          <img
            class="slider_title_backDrop"
            src="@/assets/media/images/icons/PATTERN.svg"
            alt=""
          />
        </div>
        <div class="about_text" v-html="aboutData"></div>
      </div>
    </div>
    <div class="about_us_page_img_bg" id="about_us_page_img_bg">
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
  const { data } = await $fetch(`${baseURL}settings/about`, {
    headers: headers,
  });
  // console.log(data);
  aboutData.value = data.value;
};
await getAbout();
</script>
<style lang="scss" scoped>
.about_us_page {
  min-height: 100vh;
  position: relative;
  // padding: 0 !important;
  .about_us_page_img_bg {
    z-index: -1;
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    transition: all 0.3s;
    img {
      width: 100%;
      transform: translateX(-30%);
    }
  }
}
.about_us_container {
  padding-block-end: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  .about_us_info {
    flex-grow: 1;
    height: 100%;
    width: 50%;
    margin-inline-start: auto;
    .section_header {
      padding-inline-start: 0;
      .slider_title_backDrop {
        left: -20%;
      }
    }
  }
}
</style>
