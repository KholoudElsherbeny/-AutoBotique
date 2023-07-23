<template>
  <section class="section_container">
    <div class="main_section">
      <div class="container-fluid">
        <div class="row revrse">
          <div class="col-lg-6">
            <div>
              <div class="section_header mt-5">
                <div class="sub_title">
                  {{ $t("titles.contact_us_sub_title") }}
                </div>
                <h3 class="title">
                  {{ $t("titles.contact_us") }}
                </h3>
                <img
                  class="slider_title_backDrop"
                  src="@/assets/media/images/icons/PATTERN.svg"
                  alt=""
                />
              </div>
              <div class="contact_us_info mt-5">
                <div class="contact_info_item d-flex gap-5">
                  <div>
                    <img
                      src="@/assets/media/images/icons/contact_location_icon.svg"
                      alt="contact location"
                    />
                  </div>
                  <div class="contact_info_text">
                    {{ contactData.address }}
                  </div>
                </div>
                <div class="contact_info_item d-flex gap-5">
                  <div>
                    <img
                      src="@/assets/media/images/icons/contact_location_icon.svg"
                      alt="contact location"
                    />
                  </div>
                  <div class="contact_info_text">
                    {{ contactData.address_2 }}
                  </div>
                </div>
                <div class="contact_info_item d-flex gap-5">
                  <div>
                    <img
                      src="@/assets/media/images/icons/golden_phone_icon.svg"
                      alt="contact location"
                    />
                  </div>
                  <div class="contact_info_text">{{ contactData.phone }}</div>
                </div>
                <div class="contact_info_item d-flex gap-5">
                  <div>
                    <img
                      src="@/assets/media/images/icons/golden_mail_icon.svg"
                      alt="contact location"
                    />
                  </div>
                  <div class="contact_info_text">{{ contactData.email }}</div>
                </div>
                <div class="contact_info_item d-flex gap-5">
                  <div>
                    <img
                      src="@/assets/media/images/icons/golden_clock_icon.svg"
                      alt="contact location"
                    />
                  </div>
                  <div class="contact_info_text">
                    <div>Opening Hours:</div>
                    <div>
                      {{ contactData.start_day }} to {{ contactData.end_day }}
                      {{ contactData.start_hour }} to {{ contactData.end_hour }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="contact_us_socials">
                <h4>{{ $t("titles.follow_us_on") }}</h4>
                <div
                  class="d-flex justify-content-between contact_us_socials_links"
                >
                  <div>
                    <a :href="contactData.facebook"
                      ><img
                        src="@/assets/media/images/icons/Combined-Shape.svg"
                        alt=""
                    /></a>
                  </div>
                  <div>
                    <a :href="contactData.twitter"
                      ><img
                        src="@/assets/media/images/icons/golden_twitter.svg"
                        alt=""
                    /></a>
                  </div>
                  <div>
                    <a :href="contactData.instagram"
                      ><img
                        src="@/assets/media/images/icons/golden_insta.svg"
                        alt=""
                    /></a>
                  </div>
                  <div>
                    <a :href="contactData.youtube"
                      ><img
                        src="@/assets/media/images/icons/golden_youtube.svg"
                        alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-2">
            <div class="mt-4 contact_form_container">
              <form class="contact_form" @submit.prevent="sendMessage">
                <div>
                  <h4 class="contact_form_title">
                    {{ $t("titles.contact_us_form_title") }}
                  </h4>
                  <h4 class="contact_form_title">
                    {{ $t("titles.contact_us_form_sub_title") }}
                  </h4>
                </div>
                <input
                  type="text"
                  v-model="form.full_name"
                  :placeholder="$t('labels.name')"
                />
                <input
                  type="text"
                  v-model="form.phone"
                  :placeholder="$t('labels.phone')"
                />
                <input
                  type="text"
                  v-model="form.email"
                  :placeholder="$t('labels.email')"
                />
                <textarea
                  v-model="form.content"
                  :placeholder="$t('labels.yourMessage')"
                />
                <div class="text-center">
                  <button type="submit" class="silver_btn contact_form_btn">
                    {{ $t("buttons.send") }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
};
if (token.value) {
  headers.Authorization = `Bearer ${token.value}`;
}
const contactData = ref(null);
const getConact = async () => {
  const { data } = await $fetch(`${baseURL}getContactData`, {
    headers: headers,
  });
  contactData.value = data.reduce((obj, item) => {
    console.log(Object.keys(item).toString());
    obj[`${Object.keys(item).toString()}`] = Object.values(item).toString();
    return obj;
  }, {});
};
await getConact();
const form = ref({
  full_name: null,
  phone: null,
  email: null,
  content: null,
});
const sendMessage = async () => {
  try {
    const frmData = new FormData();
    if (form.value.full_name) {
      frmData.append("full_name", form.value.full_name);
    }
    if (form.value.phone) {
      frmData.append("phone", form.value.phone);
    }
    if (form.value.email) {
      frmData.append("email", form.value.email);
    }
    if (form.value.content) {
      frmData.append("content", form.value.content);
    }
    const { data } = await $fetch(`${baseURL}contact`, {
      method: "post",
      headers: headers,
      body: frmData,
    });
    toast.success(data.message);
    form.value = {
      full_name: null,
      phone: null,
      email: null,
      content: null,
    };
    console.log(data);
  } catch (err) {
    toast.error(err.response._data.message);
  }
};
</script>

<style lang="scss" scoped>
.revrse{
  @media screen and (max-width:990px ) {
    flex-direction: column-reverse;
  }
}
.contact_us_info {
  margin-bottom: 10rem;
  .contact_info_item {
    margin-bottom: 4rem;
    font-size: 1.3rem;
    .contact_info_text {
      max-width: 30rem;
    }
  }
}
.contact_us_socials_links {
  max-width: 30rem;
  margin-top: 4rem;
  a {
    img {
      transition: all 0.3s;
    }
    &:hover {
      img {
        scale: 1.2 !important;
      }
    }
  }
}
.contact_form_container {
  .contact_form {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    justify-content: space-between;
    height: 100%;
    background: radial-gradient(closest-side, #00000000, #000000),
      url("@/assets/media/images/icons/contact_form_bg.png") center/cover;
  }
  .contact_form_title {
    font-weight: 400;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    background: rgba(0, 0, 0, 0.465);
    border-radius: 3rem;
    // margin-bottom: 2rem;
    padding: 1rem 2rem;
    border: 1px solid rgb(81, 80, 80);
    outline: none;
  }
  textarea {
    border-radius: 2rem;
    min-height: 8rem;
  }
  .contact_form_btn {
    padding-inline: 4rem !important;
    text-transform: uppercase;
    margin-top: 2rem;
  }
}
</style>
