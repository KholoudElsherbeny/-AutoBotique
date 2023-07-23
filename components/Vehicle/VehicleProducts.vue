<template>
  <section class="products_home_section">
    <div class="products_home">
      <div class="section_header">
        <div class="sub_title">
          {{ $t("titles.Agent_for_the_finest_types_of_cars") }}
        </div>
        <h3 class="title" v-if="!title">
          VEHICLES
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
      <slot />
      <div class="prdoucts_container py-2 pb-4" v-if="!no_slider">
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
      <div v-else>
        <div class="cars_grid_container">
          <div v-for="item in vehicles" :key="item.id">
            <CardProduct :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Pagination, Navigation } from "swiper";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

const tabs = ref([
  { title: "Tab 1", content: "Tab 1 Content" },
  { title: "Tab 2", content: "Tab 2 Content" },
  { title: "Tab 3", content: "Tab 3 Content" },
]);
const { vehicles } = defineProps({
  vehicles: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  vehicle_types: {
    type: Array,
    required: false,
  },
  no_slider: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>
<style lang="scss" scoped>
.products_home_section {
  // background: url("@/assets/media/images/icons/carbon_bg.svg");
  margin-top: 5rem;
  .products_home {
    padding-block: 4rem;
    width: 90%;
    max-width: 1920px;
    margin: 0 auto;
    .prdoucts_container {
      margin-top: 3rem;
    }
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
    @media screen and (max-width: 470px) {
      font-size: 2rem !important;
    }
    @media screen and (max-width: 300px) {
      font-size: 1.5rem !important;
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
.cars_grid_container {
  display: grid;
  padding-block: 4rem 2rem;
  gap: 4rem 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  // @media screen and (max-width: 600px) {
  //   grid-template-columns: 1fr;
  // }
}
</style>
