<template>
  <section class="h-100 verify_page">
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
              <h1 class="title">Verifying Account</h1>
              <div class="w-75 mb-4">
                We just sent a 4-digit verification to +{{ phone_code }}
                {{ phone }}. enter the code in the box below to continue.
              </div>
              <router-link class="mainColor" to="/auth/edit-number"
                >Edit the Number</router-link
              >
              <FormInput
                label="Code"
                type="text"
                placeholder="Code"
                name="code"
              />
              <div class="d-flex justify-content-between">
                <div>
                  Didn't Receive A Code?<button
                    class="mainColor span_btn"
                    @click="resendCode"
                    :disabled="timerCount"
                    :class="timerCount && 'btn_disabled'"
                    type="button"
                  >
                    Resend
                  </button>
                </div>
                <div>{{ "0 : " + timerCount }}</div>
              </div>
              <div class="d-flex justify-content-end mt-3">
                <FormButton
                  type="submit"
                  :class="{ red: formMeta.valid }"
                  :disabled="!formMeta.valid"
                  >Verify Account</FormButton
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

const router = useRouter();
const toast = useToast();
const config = useRuntimeConfig();
const i18n = useI18n();

const phone_code = useCookie("phone_code");
const phone = useCookie("phone");

useHead({
  title: `Verify`,
});
configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});
const schema = object({
  code: string().required().label("Verify Code"),
});

const handleSubmit = async (values, actions) => {
  const frmData = new FormData();
  frmData.append("code", values.code);
  frmData.append("phone", phone.value);
  frmData.append("phone_code", phone_code.value);
  frmData.append("device_token", "website");
  frmData.append("type", "ios");
  const baseURL = config.public.baseURL;
  // "Content-Type": "application/json",

  const headers = {
    Accept: "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value,
  };
  try {
    const data = await $fetch(`${baseURL}account_verify`, {
      method: "post",
      headers: headers,
      body: frmData,
    });
    // showToast(data.emassa);
    toast.success(data.message);
    router.push("/auth/verified");
  } catch (error) {
    toast.error(error.data.message);
  }
};
// const code = ref("");
const timerCount = ref(60);
const countDown = () => {
  if (timerCount.value > 0) {
    setTimeout(() => {
      timerCount.value -= 1;
      countDown();
    }, 1000);
  }
};
countDown();
const resendCode = async () => {
  const frmData = new FormData();
  frmData.append("phone", phone.value);
  frmData.append("phone_code", phone_code.value);
  const baseURL = config.public.baseURL;
  // "Content-Type": "application/json",

  const headers = {
    Accept: "application/json",
    lang: i18n.locale.value,
    "Accept-Language": i18n.locale.value,
  };
  try {
    const data = await $fetch(`${baseURL}send_code`, {
      method: "post",
      headers: headers,
      body: frmData,
    });
    // showToast(data.emassa);
    toast.success(data.message);
    timerCount.value = 60;
    countDown();
  } catch (error) {
    toast.error(error.data.message);
  }
};
</script>

<style lang="scss" scoped>
.verify_page {
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
<style lang="scss">
.span_btn {
  background: inherit;
  border: none;
}
.btn_disabled {
  color: gray !important;
}
</style>
