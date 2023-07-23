<template>
  <section class="products_home_section">
    <div class="products_home">
      <div class="section_header">
        <div class="sub_title">
          {{ $t("titles.Agent_for_the_finest_types_of_cars") }}
        </div>
        <h3 class="title" v-if="!title">
          ready for <br />
          Delivery
        </h3>
        <h3 class="title" v-else>
          {{ title }}
        </h3>

        <img
          class="slider_title_backDrop"
          src="@/assets/media/images/icons/PATTERN.svg"
          alt="sliderTitle"
        />
      </div>

      <div class="prdoucts_container py-5">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectFade, Pagination, Navigation]"
          :slides-per-view="2"
          :spaceBetween="30"
          :navigation="true"
          :pagination="false"
          :effect="'creative'"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-100%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="item in vehicles" :key="item.id">
            <CardProduct :item="item" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <nuxt-link :to="localePath('/vehicles/show-all')">
          <button class="show_all_btn">
            <span>Show All</span
            ><span class="arrow_icon"
              ><img src="@/assets/media/images/icons/arrow.svg" alt="arrow"
            /></span>
          </button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Pagination, Navigation } from "swiper";

const { vehicles } = defineProps({
  vehicles: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
});
</script>
<style lang="scss" scoped>
.products_home_section {
  background: url("@/assets/media/images/icons/carbon_bg.svg");
  .products_home {
    padding-block: 4rem;
    width: 90%;
    max-width: 1920px;
    margin: 0 auto;
  }
}
</style>
<style lang="scss">
.section_header {
  position: relative;
  // background: red;
  text-transform: uppercase;
  padding-block: 4rem;
  padding-inline: 3rem;
  z-index: 2;
  .sub_title {
    font-size: 0.8rem;
  }

  .title {
    position: relative;
    background-clip: text;
    background-image: linear-gradient(
      45deg,
      #fefefe,
      #747579,
      #e9e9ea,
      #808184,
      #c5c6c8
    );
    background-size: 100%;
    font-size: 2.8rem;
    letter-spacing: 5px;
    -webkit-text-fill-color: transparent;
    &.smaller {
      font-size: 1.5rem;
      margin-top: 2rem;
    }
    @media screen and (min-width: 650px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 370px) {
      font-size: 0.5rem;
    }
  }
  .slider_title_backDrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    transform: translateY(0);
    z-index: 1;
  }
}
</style>

<style lang="scss">
.prdoucts_container {
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: white;
    z-index: 10;
  }
}
</style>
<style lang="scss">
.swiper-wrapper {
  align-items: flex-start;
}
</style>
