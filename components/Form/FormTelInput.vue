<template>
  <div>
    <VField :name="name" v-slot="{ field, meta }">
      <div
        class="input_wrapper"
        @click.stop
        :class="{
          'is-success': meta.valid && meta.touched,
          'is-danger': !meta.valid && meta.touched,
        }"
      >
        <div class="d-flex">
          <div
            class="code_select d-flex gap-2"
            @click="show = !show"
            v-if="country"
          >
            <span>
              <img
                class="flag_icon"
                :key="country.id"
                :src="country.image"
                alt="flag"
                width="25"
                height="20"
              />
            </span>
            <span class="code_select_number"> +{{ country.phone_code }} </span>

            <div class="code_dropdown" v-if="show">
              <div
                @click="country = { ...item }"
                v-for="item in getCountries"
                :key="item.id"
              >
                <div
                  class="code_dropdown_item d-flex gap-2"
                  v-if="country.phone_code != item.phone_code"
                >
                  <span>
                    <img
                      class="flag_icon"
                      :src="item.image"
                      alt="flag"
                      width="25"
                      height="20"
                    />
                  </span>
                  <span> {{ item.name }} </span>
                  <span> +{{ item.phone_code }} </span>
                </div>
              </div>
            </div>
          </div>
          <input
            v-bind="field"
            @click.stop="show = false"
            class="flex-grow-1"
            :id="label"
            type="number"
            autocomplete="off"
            placeholder="Phone Number"
          />
        </div>
        <label :for="label" class="label">{{ label }}</label>
      </div>
      <VErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        style="color: red"
        class="help is-danger"
      />
    </VField>
  </div>
</template>

<script setup>
import { useGeneralStore } from "@/stores/general";
import { storeToRefs } from "pinia";
const store = useGeneralStore();
const { getCountries } = storeToRefs(store);
store.setCountries();
// onMounted(async () => {
//   await store.setCountries();
// });
// console.log(getCountries.value[0]);
const country = ref(null);
watch(getCountries, () => {
  console.log(getCountries.value);
  if (getCountries.value.length) {
    country.value = { ...getCountries.value[0] };
  }
  if (props.initPhoneCode) {
    console.log(props.initPhoneCode);
    console.log(getCountries.value);
    country.value = getCountries.value.find(
      (el) => el.phone_code == props.initPhoneCode
    );
  }
});
const emit = defineEmits(["code_change"]);
watch(country, (value) => {
  emit("code_change", value ? value.phone_code : null);
});
const showPassword = ref(false);
const show = ref(false);

const options = [
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    name: "egypt",
    code: "30",
  },
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    name: "egypt",
    code: "40",
  },
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    name: "egypt",
    code: "50",
  },
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    name: "egypt",
    code: "60",
  },
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    name: "egypt",
    code: "70",
  },
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    name: "egypt",
    code: "80",
  },
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    name: "egypt",
    code: "90",
  },
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    name: "egypt",
    code: "91",
  },
  {
    flag: "https://cdn.britannica.com/79/5779-004-DC479508/Flag-Saudi-Arabia.jpg",
    code: "92",
    name: "egypt",
  },
];
const props = defineProps({
  name: {
    type: String,
  },
  code: {
    type: Number,
    default: 20,
  },
  initPhoneCode: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    default: "phone",
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  clickEvent: {
    type: Number,
    required: true,
  },
});
// const updateValue = (e) => {
//   const emit = defineEmits(["update"]);
//   emit("update", e.target.value);
// };

watch(
  () => props.clickEvent,
  (newVal) => {
    if (newVal) {
      show.value = false;
      console.log(newVal); // console.log(show.value);
    }
  }
);
</script>

<style lang="scss" scoped>
.input_wrapper {
  position: relative;
  border: 2px solid $borderClr;
  border-radius: 5px;
  z-index: 1;
  input {
    background: inherit;
    border: none;
    padding: 1rem;
    outline: none;
    margin-top: 10px;
    // width: 100%;
  }
  .code_select {
    cursor: pointer;
    background: inherit;
    border: none;
    .code_select_number {
      border-right: 2px solid $borderClr;
      padding-right: 10px;
    }
    padding: 1rem;
    padding-inline-end: 0.5rem;
    outline: none;
    margin-top: 10px;
    // width: 100%;
    position: relative;
    .code_dropdown {
      position: absolute;
      top: 80%;
      max-height: 150px;
      overflow-y: scroll;
      border: 1px solid gray;
      width: 20rem;
      max-width: 300%;
      .code_dropdown_item {
        cursor: pointer;
        background: black;
        color: white;
        z-index: 10;
        padding: 5px 10px;
        font-weight: bold;
        border-radius: 5px;
        margin-bottom: 2px;
        transition: all 0.3s;
        &:hover {
          background: white;
          color: black;
        }
      }
    }
  }
  .label {
    position: absolute;
    top: 20%;
    left: 1rem;
    transform: translateY(-50%);
    color: gray;
    transition: all 0.3s;
  }
  @media screen and (max-width: 1200px) {
    border-color: rgb(80, 75, 75);
    .label {
      color: rgb(180, 173, 173);
    }
  }
  .flag_icon {
    border-radius: 3px;
    object-fit: cover;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
  &.is-danger {
    border-color: red;
  }
}
</style>
