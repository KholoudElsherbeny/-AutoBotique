<template>
  <section class="vehicle_page_section">
    <!-- <pre>{{ vehicles }}</pre> -->

    <VehicleProducts :vehicle_types="vehicle_types" :vehicles="vehicles">
      <div class="types_container">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectFade, Pagination, Navigation]"
          :slides-per-view="6"
          :spaceBetween="30"
          :navigation="true"
          :pagination="false"
          :effect="'creative'"
          :autoplay="{
            delay: 8000,
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
          <SwiperSlide v-for="item in vehicle_types" :key="item.id">
            <button
              @click="vehicle_type = item"
              class="vehicle_type_tab"
              :class="vehicle_type.id == item.id ? 'active' : ''"
            >
              {{ item.name }}
            </button>
          </SwiperSlide>
        </Swiper>
      </div></VehicleProducts
    >
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
  </section>
</template>

<script setup>
import { Pagination, Navigation } from "swiper";
import { useToast } from "vue-toastification";

const config = useRuntimeConfig();
const i18n = useI18n();
const toast = useToast();
const vehicles = ref([]);
const fetchData = async () => {
  const headers = {
    Accept: "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value,
  };
  const baseURL = config.public.baseURL;

  try {
    const { data } = await $fetch(`${baseURL}vehicle`, {
      method: "get",
      headers: headers,
      params: {
        vehicle_type_id: vehicle_type.value.id,
      },
    });
    console.log(data);
    vehicles.value = data;
  } catch (error) {
    toast.error(error.data.message);
  }
};
const { data } = await useAPIFetch("vehicle_type");
const vehicle_types = data.value.data;
const vehicle_type = ref(vehicle_types[0]);

await fetchData();

watch(vehicle_type, async () => {
  await fetchData();
});
</script>
<style lang="scss" scoped>
// .vehicle_page_section {
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
.types_container {
  margin-top: 1rem;
}
.vehicle_type_tab {
  color: gray;
  // background: red;
  position: relative;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  transition: all 0.3s;
  &::before {
    position: absolute;
    content: " ";
    bottom: 0;
    left: 0;
    height: 2px;
    background: $second_color;
    transition: all 0.3s;
    // width: 3rem;
  }

  &:hover,
  &.active {
    color: white;
    font-size: 1.4rem;
    &::before {
      padding-inline: 1.5rem;
    }
  }
}
</style>
