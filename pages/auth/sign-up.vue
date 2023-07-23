<template>
  <section class="h-100 sign_up_page" @click="clickEvent = clickEvent + 1">
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
              <h1 class="title">{{ $t("titles.createNewAccount") }}</h1>
              <div class="d-flex gap-4">
                <span>{{ $t("titles.AlreadyAMemeber?") }}</span>
                <span
                  ><router-link class="mainColor" to="/auth/sign-in"
                    >Sign In</router-link
                  ></span
                >
              </div>
              <div class="d-flex gap-2 justify-content-stretch">
                <div class="flex-grow-1">
                  <FormInput
                    type="text"
                    name="firstName"
                    :label="$t('labels.first_name')"
                  />
                </div>
                <div class="flex-grow-1">
                  <FormInput type="text" name="lastName" label="Last Name" />
                </div>
              </div>
              <FormInput type="email" name="email" label="Email" />
              <FormTelInput
                :clickEvent="clickEvent"
                @code_change="updatePhoneCode"
                name="phone"
              />

              <FormInput type="password" name="password" label="Password" />
              <FormInput
                type="password"
                name="confirmPassword"
                :label="$t('labels.confirmPassword')"
                :showIcon="false"
              />
              <div class="d-flex justify-content-end mt-3">
                <FormButton
                  type="submit"
                  :class="{ red: formMeta.valid }"
                  :disabled="!formMeta.valid"
                  >{{ $t("buttons.createAccount") }}</FormButton
                >
              </div>
            </div>
          </VForm>
        </div>
      </div>
    </div>
    <img
      class="background_iamge"
      src="@/assets/media/images/icons/BACKDROP.svg"
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
const showToast = () => {
  toast.success("Hello World");
};
useHead({
  title: `Sign Up`,
});

const config = useRuntimeConfig();
const i18n = useI18n();

// const firstName = ref("");
// const lastName = ref("");
// const email = ref("");
// const phone = ref(null);
// const password = ref("");
// const confirmPassword = ref("");
const clickEvent = ref(0);

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
const useAPILazyFetch = useAPIFetch;

const schema = object({
  firstName: string().required().label("First Name"),
  lastName: string().required().label("Last Name"),
  phone: string().required().label("Phone Number"),
  email: string().required().email().label("Email Address "),
  password: string().required().min(8).label("Your Password"),
  confirmPassword: string()
    .required()
    .oneOf([yupRef("password")], "Passwords do not match") //Cross-Field Validation
    .label("Your Confirmation Password"),
});

const initialValues = { email: "", password: "" };
const handleSubmit = async (values, actions) => {
  const formData = new FormData();
  formData.append(
    "full_name",
    `${values.firstName.trim()} ${values.lastName.trim()}`
  );
  formData.append("email", values.email.trim());
  formData.append("password", values.password.trim());
  formData.append("phone", values.phone.trim());
  formData.append("phone_code", phone_code.value);
  // modify options as needed
  const baseURL = config.public.baseURL;
  // "Content-Type": "application/json",

  const headers = {
    Accept: "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value,
  };
  try {
    const data = await $fetch(`${baseURL}register`, {
      method: "post",
      headers: headers,
      body: formData,
    });
    // showToast(data.emassa);
    toast.success(data.message);
    const phone_cookie = useCookie("phone");
    phone_cookie.value = values.phone;
    const phone_code_cookie = useCookie("phone_code");
    phone_code_cookie.value = phone_code.value;
    router.push("/auth/verify");
  } catch (error) {
    toast.error(error.data.message);
  }

  // console.log(data);
  // actions.resetForm();
};
</script>

<style lang="scss" scoped>
.sign_up_page {
  .background_iamge {
    // background: linear-gradient(to left, #000, #ffffff17);
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateX(20%);
    z-index: -1;
    opacity: 0.7;
    @media screen and (max-width: 1200px) {
      display: none;
      // width: 100%;
      // right: auto;
      // left: 50%;
      // top: 50%;
      // transform: translate(-50%, -50%);
    }
  }
}
</style>
