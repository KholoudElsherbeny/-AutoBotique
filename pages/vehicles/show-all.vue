<template>
  <section class="vehicle_page_section">
    <!-- <pre>{{ vehicles }}</pre> -->

    <VehicleProducts
      :vehicle_brands="vehicle_brands"
      :vehicles="vehicles"
      :no_slider="true"
    >
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
          <SwiperSlide v-for="item in vehicle_brands" :key="item.id">
            <button
              @click="vehicle_brand = item"
              class="vehicle_type_tab"
              :class="vehicle_brand?.id == item.id ? 'active' : ''"
            >
              <img :src="item.image" width="50" :alt="item.name" />
              <div class="pt-2">{{ item.name }}</div>
            </button>
          </SwiperSlide>
        </Swiper>
      </div></VehicleProducts
    >
    <Paginator
      @page="fetchData"
      :totalRecords="pagination.total"
      :rows="pagination.rows"
      v-model:first="pagination.current_page_indexed"
    ></Paginator>
  </section>
</template>

<script setup>
import { Pagination, Navigation } from "swiper";
import Paginator from "primevue/paginator";
import { useToast } from "vue-toastification";
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const i18n = useI18n();
const toast = useToast();
const vehicles = ref([]);
const pagination = ref({
  total: 1,
  rows: 1,
  current_page: route.query.page || 1,
  current_page_indexed: route.query.page - 1 * 1 || 0,
});

// const page = ref(2);

// onMounted(() => {
//   pagination.current_page = route.query.page ?? 1;
// });
const fetchData = async (e) => {
  if (e) {
    pagination.current_page = e.page + 1;
  }
  const headers = {
    Accept: "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value,
  };
  const baseURL = config.public.baseURL;

  try {
    const data = await $fetch(`${baseURL}vehicle`, {
      method: "get",
      headers: headers,
      params: {
        page: pagination.value.current_page,
        brand_id: vehicle_brand.value?.id || "",
      },
    });
    vehicles.value = data.data;
    pagination.value.total = data.meta.total;
    pagination.value.current_page =
      pagination.current_page ?? data.meta.current_page;
    pagination.value.rows = data.meta.per_page;
    pagination.value.current_page_indexed =
      (pagination.value.current_page - 1) * pagination.value.rows;
    router.push({ query: { page: pagination.value.current_page } });
  } catch (error) {
    toast.error(error.data.message);
  }
};
const { data } = await useAPIFetch("brand_not_paginated");
const vehicle_brands = data.value.data;
const vehicle_brand = ref(null);

await fetchData();
// const vehicle_response = await useAPIFetch("vehicle", {
//   params: {
//     brand_id: vehicle_brand.value.id,
//   },
// });
// vehicles.value = vehicle_response.data.value.data;
watch(vehicle_brand, async () => {
  pagination.value.current_page = 1;
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
  margin-top: 4rem;
}
.vehicle_type_tab {
  color: gray;
  // background: red;
  position: relative;
  padding-bottom: 0.5rem;
  font-size: 1rem;
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
    font-size: 1.1rem;
    &::before {
      padding-inline: 1.5rem;
    }
  }
}
.vehicle_page_section {
  .swiper-slide {
    text-align: center;
  }
}
</style>
