<template>
  <section class="hero_section">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectFade, Pagination, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :navigation="true"
      :pagination="true"
      :effect="'fade'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :fade-effect="{ crossFade: true }"
    >
      <SwiperSlide v-for="slide in props.sliders" :key="slide.id">
        <div class="slider_item">
          <div class="slider_info">
            <div class="d-flex align-items-center gap-4">
              <span class="slider_barnd_icon"
                ><img
                  v-if="slide.vehicle"
                  :src="slide.vehicle.brand_image"
                  width="70"
                  alt="" />
                <img
                  v-if="slide.brand"
                  :src="slide.brand.image"
                  width="70"
                  alt="" />
                <img
                  class="slider_title_backDrop"
                  src="@/assets/media/images/icons/PATTERN.svg"
                  alt=""
              /></span>
              <h3 class="slider_sub_title" v-if="slide.vehicle">
                {{ slide.vehicle.brand_name }}
              </h3>
              <h3 class="slider_sub_title" v-else-if="slide.brand">
                {{ slide.brand.name }}
              </h3>
            </div>
            <h3 class="slider_title">{{ slide.name }}</h3>
            <h5 class="slider_sub_title smaller" v-if="slide.vehicle">
              {{ slide.vehicle.name }}
            </h5>
            <p class="slider_text">
              {{ slide.description }}
            </p>
            <nuxt-link
              class="sign_btn"
              v-if="slide.type == 'vehicle'"
              :to="localePath(`/vehicles/${slide.vehicle.id}`)"
            >
              <FormButton class="slider_detail_btn" :mainBorder="true"
                >Detials</FormButton
              >
            </nuxt-link>
            <nuxt-link
              class="sign_btn"
              v-else-if="slide.type == 'brand'"
              :to="localePath(`/vehicles/show-all`)"
            >
              <FormButton class="slider_detail_btn" :mainBorder="true"
                >Detials</FormButton
              >
            </nuxt-link>
            <nuxt-link
              class="sign_btn"
              v-else-if="slide.type == 'external_link'"
              :to="slide.external_link"
            >
              <FormButton class="slider_detail_btn" :mainBorder="true"
                >Detials</FormButton
              >
            </nuxt-link>
          </div>
          <div class="slide_image_container">
            <!-- <div
              class="slide_image_backdrop"
              :style="`background: radial-gradient(closest-side, #00000000, #000000),
                  url(${slide.image}) center/cover no-repeat`"
            ></div> -->
            <img :src="slide.image" alt="" />
          </div>
        </div>
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <!-- <SwiperControls /> -->
    </Swiper>
    <div class="mouse_scroll_down">
      <img class="" src="@/assets/media/images/icons/mouse.svg" alt="" />
      <div>Scorll Down</div>
    </div>
  </section>
</template>
<script setup>
import { Pagination, Navigation } from "swiper";
const props = defineProps({
  sliders: {
    type: Array,
    required: true,
  },
});

const slides = ref(
  Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Figure out contrast color for font
    const contrast =
      r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
  })
);
</script>

<style lang="scss">
.hero_section {
  position: relative;
  .swiper-slide {
    font-size: 12px;
    // height: 100vh;
    /* font-size: 4rem; */
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }
  .swiper-wrapper {
    min-width: 100vh;
    width: 100vh;
  }
  .swiper-cards {
    width: 240px;
    height: 240px;
  }
  .swiper-cards .swiper-slide {
    border-radius: 6px;
    border: 1px solid black;
  }
  .slider_item {
    display: flex;
    padding-inline-start: 0;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    .slider_info {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      padding-inline-start: 8%;
      .slider_barnd_icon {
        position: relative;
        .slider_title_backDrop {
          position: absolute;
          top: -60%;
          left: -40%;
          z-index: -1;
          @media screen and (max-width: 992px) {
            display: none;
          }
        }
      }
      .slider_sub_title {
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
        font-size: 2rem;
        -webkit-text-fill-color: transparent;
        &.smaller {
          font-size: 1.5rem;
          margin-top: 2rem;
          @media screen and (max-width: 992px) {
            margin-top: 0rem;
            font-size: 1.2rem;
          }
        }
        @media screen and (max-width: 992px) {
          font-size: 1.5rem;
        }
      }
      .slider_title {
        background-clip: text;
        background-image: linear-gradient(
          45deg,
          #f0c49f,
          #866e59,
          #866e59,
          #8a715c,
          #c5a183,
          #e0b794
        );
        background-size: 100%;
        font-size: 4rem;
        font-weight: bold;
        letter-spacing: 5px;
        -webkit-text-fill-color: transparent;
        @media screen and (max-width: 992px) {
          font-size: 1.5rem;
        }
        @media screen and (max-width: 630px) {
          font-size: 1rem;
        }
      }
      .slider_text {
        font-size: 0.9rem;
        max-width: 30rem;
        font-weight: 100;
        margin-block: 3rem;
        @media screen and (max-width: 922px) {
          display: none;
        }
      }
      .slider_detail_btn {
        font-size: 0.8rem !important;
        padding-block: 1rem !important;
        padding-inline: 2.5rem;
        font-weight: 100 !important;
        letter-spacing: 7px;
        @media screen and (max-width: 992px) {
          padding-inline: 1rem;
          padding-block: 0.5rem;
          font-size: 0.5rem;
          margin-top: 1rem;
          display: none;
        }
      }
      @media screen and (max-width: 992px) {
        top: 40%;
      }
    }
    .slide_image_container {
      // width: 80%;
      // background: red;
      height: 100vh;
      width: 80%;
      margin-inline-start: auto;
      position: relative;
      z-index: 0;
      // overflow: hidden;
      &::after {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(closest-side, #00000000, #000000);
        outline: 10px solid black;
      }
      img {
        width: 99%;
        height: 100%;
        object-fit: cover;
        display: block;

        // margin-inline-start: auto;
      }

      .slide_image_backdrop {
        height: 100%;
        width: 100%;
        // background: radial-gradient(closest-side, #00000000, #000000),
        //   url("@/assets/media/images/icons/car_slider.svg");
        z-index: 1;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    bottom: 10%;
    padding: 30px;
    transform: translateY(10px);
    z-index: 100 !important;

    top: auto;
    &::after {
      color: $main_color;
      font-size: 1.5rem;
    }
    &:hover {
      &::after {
        opacity: 0.7;
      }
    }
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  .swiper-button-prev {
    left: 40%;
    @media screen and (max-width: 1200px) {
      left: 35%;
    }
    @media screen and (max-width: 900px) {
      left: 30%;
    }
    @media screen and (max-width: 625px) {
      left: 25%;
    }
  }

  .swiper-button-next {
    left: 60%;
    transform: translate(-100%, 10px);
    @media screen and (max-width: 1200px) {
      left: 65%;
    }
    @media screen and (max-width: 900px) {
      left: 70%;
    }
    @media screen and (max-width: 625px) {
      left: 75%;
    }
  }
  .swiper-pagination {
    bottom: 10% !important;
    transform: translatey(-6px);
  }
  .swiper-pagination-bullets {
    display: flex;
    justify-content: center;
    align-items: center !important;
    // position: relative;
    // &::before,
    // &::after {
    //   height: 1px;
    //   width: 20px;
    //   background: white;
    //   content: "";
    //   position: absolute;
    //   top: 50%;
    // }
  }
  .swiper-pagination-bullet {
    height: 20px;
    width: 1px;
    border-radius: 0 !important;
    background: white;
    opacity: 1;
    &.swiper-pagination-bullet-active {
      width: 3px;
      height: 30px;
      background: $main_color;
      @media screen and (max-width: 992px) {
        height: 4px;
        width: 14px;
      }
    }
    @media screen and (max-width: 992px) {
      height: 2px;
      width: 10px;
    }
  }
  .swiper-pagination-bullet:first-of-type {
    position: relative;
    &::before {
      content: " ";
      height: 1px;
      width: 50px;
      position: absolute;
      background: white;
      top: 50%;
      transform: translateX(-150%);
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
  }
  .swiper-pagination-bullet:last-of-type {
    position: relative;
    &::before {
      content: " ";
      height: 1px;
      width: 50px;
      position: absolute;
      background: white;
      top: 50%;
      right: 0;
      transform: translateX(150%);
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
  }

  .mouse_scroll_down {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    z-index: 2;
    text-align: center;
    transform: translateX(-50%);
    font-size: 0.8rem;
  }
  @media screen and (max-width: 992px) {
    .slide_image_container {
      height: auto !important;
      // min-height: 40vh !important;
    }
    .mouse_scroll_down {
      display: none;
    }
  }
}
</style>
