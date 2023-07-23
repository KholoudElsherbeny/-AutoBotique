<template>
  <section class="h-100 sign_in_page" @click="clickEvent = clickEvent + 1">
    <div
      class="h-100 auth_form_container d-flex justify-content-start align-items-center"
    >
      <div class="container-fluid w-100">
        <div class="row">
          <VForm
            :validation-schema="schema"
            :initial-values="initialValues"
            v-slot="{ meta: formMeta }"
            @submit="handleSubmit"
            class="col-12 col-xl-6 col-xxl-5"
          >
            <div class="d-flex flex-column gap-3">
              <h5 class="sub_title">{{ $t("auth_sub_title") }}</h5>
              <h1 class="title">Edit Your Number</h1>
              <!-- <div class="d-flex gap-4">
                <span>Don't Have An Account?</span>
                <span
                  ><router-link class="mainColor" to="/auth/sign-up"
                    >Sign Up</router-link
                  ></span
                >
              </div> -->

              <!-- <FormInput
                type="email"
                name="email"
                label="Email"
                placeholder="Enter Your Email or phone number"
              /> -->
              <FormTelInput
                :clickEvent="clickEvent"
                @code_change="updatePhoneCode"
                name="phone"
                :initPhoneCode="old_phone_code"
              />
              <!-- label="Enter Your Email or phone number"
                type="email"
                :value="email"
                @update="(e) => (email = e)" -->

              <!-- <FormInput
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
              /> -->

              <div class="d-flex justify-content-end mt-3">
                <FormButton
                  type="submit"
                  :class="{ red: formMeta.valid }"
                  :disabled="!formMeta.valid"
                  >{{ $t("buttons.confirm") }}</FormButton
                >
              </div>
            </div>
          </VForm>
        </div>
      </div>
    </div>
    <img
      class="background_iamge"
      src="@/assets/media/images/icons/BACKDROP2.svg"
      alt="car"
    />
  </section>
</template>
<script setup>
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
import { useToast } from "vue-toastification";

const toast = useToast();
const router = useRouter();
const config = useRuntimeConfig();
const i18n = useI18n();
const clickEvent = ref(0);
const phone_code_cookie = useCookie("phone_code");
const phone_cookie = useCookie("phone");
const old_phone_code = phone_code_cookie.value;
const old_phone = phone_cookie.value;
const phone_code = useCookie();

useHead({
  title: `Edit Number`,
});
// const firstName = ref("");
// const secondName = ref("");
// const email = ref("");
// const phone = ref(null);
// const password = ref("");
// const confirmPassword = ref("");
// const clickEvent = ref(0);

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const updatePhoneCode = (e) => {
  phone_code.value = e;
};
const schema = object({
  phone: string().required().label("Phone Number"),

  // confirmed: string()
  //   .required()
  //   .oneOf([yupRef("password")], "Passwords do not match") //Cross-Field Validation
  //   .label("Your Confirmation Password"),
});
const initialValues = { phone: old_phone };
const handleSubmit = async (values, actions) => {
  console.log(values);
  const formData = new FormData();
  formData.append("old_phone_code", old_phone_code);
  formData.append("old_phone", old_phone);
  formData.append("phone_code", phone_code.value);
  formData.append("phone", values.phone);

  // modify options as needed
  const baseURL = config.public.baseURL;
  // "Content-Type": "application/json",

  const headers = {
    Accept: "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value,
  };
  try {
    const data = await $fetch(`${baseURL}edit_number`, {
      method: "post",
      headers: headers,
      body: formData,
    });
    // showToast(data.emassa);

    phone_cookie.value = values.phone;
    phone_code_cookie.value = phone_code.value;
    router.push("/auth/verify");
  } catch (error) {
    toast.error(error.data.message);
  }
};

const submitForm = () => {};
// export default {
//   data() {
//     return {
//       data: {
//         firstName: "",
//       },
//     };
//   },
// };
</script>

<style lang="scss" scoped>
.sign_in_page {
  .background_iamge {
    // background: linear-gradient(to left, #000, #ffffff17);
    position: absolute;
    right: 0;
    bottom: 0;
    width: 90%;
    transform: translate(20%, -5%);
    // transform: translatey(20%);
    z-index: -1;
    opacity: 0.7;
    @media screen and (max-width: 1200px) {
      display: none;
      // width: 120%;
      // opacity: 0.5;
      // right: auto;
      // left: 50%;
      // top: 50%;
      // transform: translate(-50%, -50%);
    }
  }
}
</style>
