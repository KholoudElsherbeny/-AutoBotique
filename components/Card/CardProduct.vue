<template>
  <!-- <pre>{{ item }}</pre> -->
  <article>
    <nuxt-link class="prodcut_card" :to="localePath(`/vehicles/${item.id}`)">
      <div class="prodcut_card_image">
        <img class="w-100" :src="item.preview_image" alt="" />
        <span class="product_search_icon">
          <img src="@/assets/media/images/icons/search_icon.svg" alt="" />
        </span>
      </div>
      <div
        class="product_card_info d-flex justify-content-between align-items-start"
      >
        <div>
          <h6 class="product_card_sub_title">
            {{ item.brand_name }}
          </h6>
          <h5 class="product_card_title">
            {{ item.name }}
          </h5>
        </div>
        <button
          class="bookmark_product_card_btn"
          :class="is_favorite ? 'not_fav_car' : 'fav_car'"
          @click.stop.prevent="toggleBookmark"
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
              is_favorite ? $t("tooltip.un_bookmark") : $t("tooltip.bookmark")
            }}
          </div>
        </button>
      </div>
    </nuxt-link>
  </article>
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
  Authorization: `Bearer ${token.value}`,
};
const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const is_favorite = ref(item.is_favorite);
const toggleBookmark = async () => {
  if (!token.value) {
    toast.warning(i18n.t("validation.sign_in_first"));
  } else {
    try {
      const frmData = new FormData();
      frmData.append("model_type", "vehicles");
      frmData.append("model_id", item.id);

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
</script>

<style lang="scss" scoped>
.prodcut_card {
  cursor: pointer;
  color: white;
  .prodcut_card_image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .product_search_icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      scale: 0;
      img {
        width: 100%;
        display: block;
      }
    }

    &::before {
      content: " ";
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: radial-gradient(circle, #02030500, #000000ad);
      opacity: 0;
      transition: all 0.3s;
      border: 1px solid $second_color;
    }
  }
  .product_card_info {
    margin-top: 1rem;
    .product_card_sub_title {
      color: white;
      font-weight: 100;
      font-size: 0.8rem;
    }
    .product_card_title {
      color: white;
      font-weight: 400;
      font-size: 1.1rem;
    }
    width: 100%;
    .bookmark_product_card_btn {
      margin-inline-end: 20px;
      opacity: 0;
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
  }
  &:hover {
    .product_search_icon {
      opacity: 1;
      scale: 1;
    }

    .prodcut_card_image {
      &::before {
        opacity: 1;
      }
    }
    .bookmark_product_card_btn {
      opacity: 1;
    }
    .product_card_info {
      .product_card_title {
        color: $second_color;
      }
    }
  }
}
</style>
