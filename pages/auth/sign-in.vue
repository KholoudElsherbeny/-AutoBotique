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
              <h1 class="title">Welcome Back</h1>
              <div class="d-flex gap-4">
                <span>Don't Have An Account?</span>
                <span
                  ><router-link class="mainColor" to="/auth/sign-up"
                    >Sign Up</router-link
                  ></span
                >
              </div>

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
              />
              <!-- label="Enter Your Email or phone number"
                type="email"
                :value="email"
                @update="(e) => (email = e)" -->

              <FormInput
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
              />
              <div class="d-flex justify-content-end">
                <router-link to="/auth/identify">Forget Password?</router-link>
              </div>
              <div class="d-flex justify-content-end mt-3">
                <FormButton
                  type="submit"
                  :class="{ red: formMeta.valid }"
                  :disabled="!formMeta.valid"
                  >sign in</FormButton
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

useHead({
  title: `Sign In`,
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
const phone_code = ref(null);
const updatePhoneCode = (e) => {
  phone_code.value = e;
};
const schema = object({
  phone: string().required().label("Phone Number"),
  password: string().required().min(8).label("Your Password"),
  // confirmed: string()
  //   .required()
  //   .oneOf([yupRef("password")], "Passwords do not match") //Cross-Field Validation
  //   .label("Your Confirmation Password"),
});
const initialValues = { email: "", password: "" };
const handleSubmit = async (values, actions) => {
  const formData = new FormData();

  formData.append("password", values.password.trim());
  formData.append("phone", values.phone.trim());
  formData.append("phone_code", phone_code.value);
  formData.append("device_token", "website");
  formData.append("type", "ios");

  // modify options as needed
  const baseURL = config.public.baseURL;
  // "Content-Type": "application/json",

  const headers = {
    Accept: "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value,
  };
  try {
    const data = await $fetch(`${baseURL}login`, {
      method: "post",
      headers: headers,
      body: formData,
    });
    // showToast(data.emassa);
    const JWT_cookie = useCookie("JWT", {
      maxAge: 365 * 24 * 60 * 60 * 1000,
    });
    const phone_cookie = useCookie("phone");
    const phone_code_cookie = useCookie("phone_code");
    const email_cookie = useCookie("email");
    const avatar_cookie = useCookie("avatar");
    const user_type_cookie = useCookie("user_type");
    const is_active_cookie = useCookie("is_active");

    phone_cookie.value = data.data.phone;
    phone_code_cookie.value = phone_code.value;

    if (data.data.is_active) {
      toast.success(data.message);
      email_cookie.value = data.data.email;
      JWT_cookie.value = data.data.token;
      avatar_cookie.value = data.data.avatar;
      user_type_cookie.value = data.data.user_type;
      is_active_cookie.value = data.data.is_active;

      router.push("/");
    } else {
      toast.warning(data.message);
      router.push("/auth/verify");
    }
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
