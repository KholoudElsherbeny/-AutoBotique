<template>
  <section
    class="car_detail_page"
    :style="`background: linear-gradient(to bottom  ,  rgba(0, 0, 0, 0.2) , rgb(0, 0, 0)),
    url(${car.preview_image}) center/cover fixed no-repeat`"
  >
    <div class="car_detail_content">
      <div class="car_header d-flex justify-content-between">
        <div class="car_info">
          <div class="d-flex align-items-center gap-2">
            <span class="car_barnd_icon"
              ><img :src="car.brand_image" width="100" alt="car brand" />
              <img
                class="car_title_backDrop"
                src="@/assets/media/images/icons/PATTERN.svg"
                alt=""
            /></span>
            <h3 class="car_sub_title">
              {{ car.brand_name }}
            </h3>
          </div>

          <h2 class="car_title">
            {{ car.name }}
          </h2>
        </div>

        <!-- <div class="vieo_btn"></div> -->

        <div>
          <div class="d-flex gap-5 justify-content-end ">
            <button class="share_car_btn mx-4 mt-4">
              <img src="@/assets/media/images/icons/share.svg" alt="" />
            </button>
            <button
              class="bookmark_product_card_btn mt-4 "
              :class="is_favorite ? 'not_fav_car' : 'fav_car'"
              @click.stop="toggleBookmark"
            >
              <!-- <img src="@/assets/media/images/icons/bookmark.svg" alt="" /> -->
              <span class="not_fav">
                <i class="fa-regular fa-bookmark"></i>
              </span>
              <span class="my_fav">
                <i class="fa-solid fa-bookmark"></i>
              </span>
              <div class="custom_tooltip tooltip_top">
                {{
                  is_favorite
                    ? $t("tooltip.un_bookmark")
                    : $t("tooltip.bookmark")
                }}
              </div>
            </button>
          </div>
          <div class=" silver_Btn">
            <button
              class="ask_for_price_btn silver_btn mt-3 "
              @click.stop="openAskForPriceModel"
            >
              {{ $t("buttons.ASK_FOR_PRICE") }}
            </button>
          </div>
          <div class="car_video_btn_container" v-if="car.videos">
            <button
              class="car_video_btn"
              v-if="car.videos.length"
              @click="isVideoModel = true"
            />
          </div>
        </div>
      </div>
      <div class="car_images_slider py-5">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectFade, Pagination, Navigation]"
          :slides-per-view="1"
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
          <SwiperSlide v-for="item in car.images" :key="item.id">
            <div class="car_slider_item">
              <img
                :src="item.url"
                :alt="item.image"
                @click="openImgModel(item.url)"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="container-fluid py-4 ">
        <div class="row">
          <div class="col-6">
            <div class="car_details  row">
              <h4>Car Details</h4>
              <div
                class="car_detail_item col-6"
                v-for="detail in car.details"
                :key="detail.id"
              >
                <div>{{ detail.name }}</div>
                <div>{{ detail.detail.value }}</div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="car_details ">
              <h4>Specifications</h4>
              <div
                class="car_specification_item "
                v-for="specif in car.specifications"
                :key="specif.id"
              >
                <div class="specification_value">{{ specif.name }}</div>
                <div>{{ specif.specification.key }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accessories_container">
        <h4 class="my-5">Accessories</h4>
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectFade, Pagination, Navigation]"
          :slides-per-view="1"
          :spaceBetween="30"
          :navigation="true"
          :pagination="false"
          :effect="'creative'"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '900': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 5,
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
          <SwiperSlide v-for="item in car.accessories" :key="item.id">
            <div>
              <div class="car_slider_item accessories">
                <img :src="item.image" :alt="item.image" />
              </div>
              <h4 class="py-3" style="font-weight: 100">{{ item.name }}</h4>
              <p>
                {{ item.description }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div
      class="img_model_container"
      v-if="img_model.is_open"
      @click.stop="img_model = { is_open: false, src: null }"
    >
      <div class="img_model">
        <img :src="img_model.src" alt="img model" @click.stop />
      </div>
    </div>
    <div
      class="img_model_container"
      v-if="is_ask_for_price_model"
      @click.stop="is_ask_for_price_model = flase"
    >
      <div class="ask_for_price_model">
        <h4 class="text-center">
          {{ $t("models.ask_for_price_text") }}
        </h4>
        <div class="actions d-flex justify-content-between">
          <button
            style="font-size: 0.7rem"
            class="upper_case normal_btn cancel"
            @click.stop="is_ask_for_price_model = flase"
          >
            {{ $t("buttons.cancel") }}
          </button>
          <button
            style="font-size: 0.7rem"
            class="upper_case golden_btn"
            @click="askForPrice"
          >
            {{ $t("buttons.yesIm") }}
          </button>
        </div>
      </div>
    </div>
    <div
      class="img_model_container"
      v-if="ask_for_price_success_model"
      @click.stop="ask_for_price_success_model = flase"
    >
      <div class="ask_for_price_model text-center">
        <div class="mb-2">
          <img src="@/assets/media/images/icons/success_icon.svg" alt="" />
        </div>
        <h3 class="text-center">
          {{ $t("models.ask_for_price_success_text") }}
        </h3>
      </div>
    </div>
    <div
      class="img_model_container"
      v-if="isVideoModel"
      @click.stop="isVideoModel = flase"
    >
      <div @click.stop class="video_card_container text-center">
        <video controls autoplay>
          <source :src="car.videos[0].url" type="video/mp4" />
          <source :src="car.videos[0].url" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Pagination, Navigation } from "swiper";
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
const route = useRoute();
const { id } = route.params;
// const { data } = await useAPIFetch(`vehicle/${id}`);
let car = null;
const getCar = async () => {
  const { data } = await $fetch(`${baseURL}vehicle/${id}`, {
    headers: headers,
  });
  car = data;
};
await getCar();

const is_favorite = ref(car.is_favorite);
const img_model = ref({
  is_open: false,
  src: null,
});
useHead({
  title: car.name,
});
const is_ask_for_price_model = ref(false);
const ask_for_price_success_model = ref(false);
const isVideoModel = ref(false);
const openImgModel = (url) => {
  img_model.value.src = url;
  img_model.value.is_open = true;
  img_model.value = { ...img_model.value };
};
const openAskForPriceModel = async () => {
  if (!token.value) {
    toast.warning(i18n.t("validation.sign_in_first"));
  } else {
    is_ask_for_price_model.value = true;
  }
};
const askForPrice = async () => {
  try {
    const frmData = new FormData();
    frmData.append("vehicle_id", car.id);

    const data = await $fetch(`${baseURL}ask/${car.id}`, {
      method: "post",
      headers: headers,
      body: frmData,
    });
    // console.log(data);
    // toast.success(i18n.t("msg.update_successfully"));
    ask_for_price_success_model.value = true;
  } catch (err) {
    // console.log(err.response._data.message);
    toast.error(err.response._data.message);
  }
};
// watch(img_model, (value) => {
//   console.log(img_model);
//   if (value.is_open) {
//     document.body.style.overflowY = "hidden";
//   } else {
//     document.body.style.overflowY = "auto";
//   }
// });
// watch(is_ask_for_price_model, (value) => {
//   if (value) {
//     document.body.style.overflowY = "hidden";
//   } else {
//     document.body.style.overflowY = "auto";
//   }

// });
const toggleBookmark = async () => {
  if (!token.value) {
    toast.warning(i18n.t("validation.sign_in_first"));
  } else {
    try {
      const frmData = new FormData();
      frmData.append("model_type", "vehicles");
      frmData.append("model_id", car.id);

      const data = await $fetch(`${baseURL}add_favorite`, {
        method: "post",
        headers: headers,
        body: frmData,
      });
      console.log(data);
      is_favorite.value = !is_favorite.value;
      toast.success(i18n.t("msg.update_successfully"));
    } catch (err) {
      // console.log(err.response._data.message);
      toast.error(err.response._data.message);
    }
  }
};
watchEffect(() => {
  if (process.client) {
    if (
      img_model.value == true ||
      is_ask_for_price_model.value == true ||
      isVideoModel.value == true
    ) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }
});
</script>

<style lang="scss" scoped>
.car_detail_page {
  min-height: 100vh;
  .car_detail_content {
    width: 90%;
    margin: 0 auto;
    padding-top: 50vh;
    @media screen and (max-width: 992px) {
      padding-top: 2rem;
    }
  }
  .car_info {
    z-index: 1;
    @media screen and (max-width: 990px) {
      margin-top: 5%;

    }
    // padding-inline-start: 8%;
    .car_barnd_icon {
      position: relative;

      .car_title_backDrop {
        width: 200px;
        position: absolute;
        top: -20%;
        left: -40%;
        z-index: 1;
        @media screen and (max-width: 992px) {
          display: none;
        }
      }
    }
    .car_sub_title {
      background-clip: text;
      font-weight: 100;
      z-index: 2;
      // background-image: linear-gradient(
      //   45deg,
      //   #fefefe,
      //   #747579,
      //   #e9e9ea,
      //   #808184,
      //   #c5c6c8
      // );
      background-size: 100%;
      font-size: 2rem;
      // -webkit-text-fill-color: transparent;
      color: white;
      
      @media screen and (max-width: 700px) {
        font-size: 1.4rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 1rem;
      }
    }
    .car_title {
      position: relative;
      z-index: 2;
      display: inline-block;
      background-clip: text;
      background-image: linear-gradient(
        150deg,
        #f0c49f,
        #866e59,
        #d8b18f,
        #8a715c,
        #af8f74,
        #c5a183,
        #e0b794
      );
      background-size: 100%;
      font-size: 2.8rem;
      font-weight: bold;
      letter-spacing: 5px;
      -webkit-text-fill-color: transparent;
      // text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
      @media screen and (max-width: 700px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 500px) {
        font-size: 1.2rem;
      }
      @media screen and (max-width: 460px) {
        font-size: 0.8rem;
        letter-spacing: 2px;
      }
    }
    .car_text {
      font-size: 0.9rem;
      max-width: 30rem;
      font-weight: 100;
      margin-block: 3rem;
    }
    .car_detail_btn {
      font-size: 0.8rem !important;
      padding-block: 1rem !important;
      padding-inline: 2.5rem;
      font-weight: 100 !important;
      letter-spacing: 7px;
    }
  }
  .car_header {
    .silver_Btn{
      @media screen and (max-width: 470px) {
        margin: 0;
        padding: 0;
        letter-spacing: 0px !important;
        font-size: 0.8rem !important;
      }
    }
    position: relative;
    @media screen and (max-width: 992px) {
      height: 40vh;
    }
    .car_video_btn_container {
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 1;
      transform: translateX(-50%);
      .car_video_btn {
        display: inline-block;
        padding: 2rem;
        border: 2px solid white;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        &::before {
          content: " ";
          position: absolute;
          background: white;
          padding: 7px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          clip-path: polygon(0 0, 100% 50%, 0 100%);
          transition: all 0.5s;
        }
        &::after {
          content: " ";
          position: absolute;
          border: 1000px solid transparent;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 100%;
          width: 100%;
          border-radius: 50%;
          transition: all 0.5s;
          padding: 2rem;
        }
        &:hover {
          &::before {
            background: black;
            z-index: 1;
          }
          &::after {
            padding: 0;
            border-color: white;
          }
        }
      }
      @media screen {
        transform: translate(-50%, -50%);
        top: 80%;
      }
    }
  }
}
.car_slider_item {
  height: 230px;
  &.accessories {
    height: 220px;
  }
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      scale: 1.2;
    }
  }
}
.img_model_container {
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1px);
  // padding-block: 3rem;
  .img_model {
    max-width: 80%;
    max-height: 80%;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid white;
    img {
      margin: 0 auto;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      // border-radius: 20px;
    }
  }
}
.car_details {
  padding: 1rem 2rem;
  background: #2a2a2aaa;
  border-radius: 20px;
  h4{
    font-size: 1.5rem;
    @media screen and (max-width: 470px) {
      font-size: 1rem ;
    }
  .car_detail_item {
    padding: 10px 5px;
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
  .car_specification_item {
    padding: 10px 20px;
    display: flex;
    gap: 18px;
    .specification_value {
      color: $second_color;
    }
    }
  }
}
.ask_for_price_model {
  background: black;
  padding: 2rem 3rem;
  border-radius: 20px;
  width: 60%;
  max-width: 20rem;
  box-shadow: 0px 0px 25px 4px rgba(0, 0, 0, 0.82);
  border-radius: 10px;
  .actions {
    margin-top: 2.5rem;
    .cancel {
      transition: all 0.3s;
      &:hover {
        color: red;
        font-weight: bold;
      }
    }
  }
}
.ask_for_price_btn{
  @media screen and (max-width: 1090px) {
    margin: 0;
    padding: 0;
    letter-spacing: 0px !important;
    font-size: 0.8rem !important;
  }
  @media screen and (max-width: 470px) {
    margin: 0;
    padding: 0;
    letter-spacing: 0px !important;
    font-size: 0.8rem !important;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 0;
    letter-spacing: 0px !important;
    font-size: 0.8rem !important;
  }
}
.video_card_container {
  max-width: 80%;
  border-radius: 10px;
  overflow: hidden;
  padding: none;
  video {
    // width: 100%;
    display: block;
  }
}
.bookmark_product_card_btn {
  margin-inline-end: 20px;
  transition: all 0.3s;
  font-size: 1.7rem;
  position: relative;
  &.fav_car {
    .my_fav {
      display: none;
      transition: all 0.3s;
    }
    &:hover {
      .my_fav {
        display: block !important;
      }
      .not_fav {
        display: none;
      }
    }
  }
  &.not_fav_car {
    .not_fav {
      display: none;
      transition: all 0.3s;
    }
    &:hover {
      .not_fav {
        display: block !important;
      }
      .my_fav {
        display: none;
      }
    }
  }
  .custom_tooltip {
    color: white;
    position: absolute;
    font-size: 0.8rem;
    bottom: 100%;
    min-width: 8rem;
    left: 0;
    background: white;
    color: black;
    padding: 3px 5px;
    z-index: 100;
    border-radius: 10px;
    scale: 0;
    opacity: 0;
    transition: all 0.3s;
    transform-origin: bottom left;
  }
  &:hover {
    .custom_tooltip {
      scale: 1;
      opacity: 1;
    }
  }
}
</style>
