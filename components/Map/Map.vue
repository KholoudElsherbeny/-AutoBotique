<template>
  <div>
    <GoogleMap
      v-if="mainSettings"
      :api-key="API_KEY"
      style="width: 100%; height: 450px;"
      mapTypeId="terrain"
      :center="{ lat: +mainSettings.lat, lng: +mainSettings.long }"
      :zoom="13"
    >
      <Marker
        :options="{
          position: { lat: +mainSettings.lat, lng: +mainSettings.long },
        }"
      >
      </Marker>
    </GoogleMap>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";

import { GoogleMap, Marker } from "vue3-google-map";
const store = useGlobalStore();
const mainSettings = computed(() => store.getSettings);

const center = { lat: +mainSettings.lat, lng: +mainSettings.long };
const API_KEY = "AIzaSyA8qi0TK3EDod0LlTXbQFf_DyEptiGgPFU";
</script>
