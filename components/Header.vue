<template>
  <div class="navbar_container" :class="scrolled ? 'nav_container_abs' : ' '">
    <nav class="navbar">
      <nuxt-link :to="localePath('/')" class="navbar-brand">
        <img
          v-if="$i18n.locale == 'en'"
          src="~/assets/media/images/logo/logo.svg"
          class="img-fluid logo"
          alt="it-logo"
        />
        <img
          v-if="$i18n.locale == 'an'"
          src="~/assets/media/images/logo/logo.svg"
          class="img-fluid logo"
          alt="it-logo"
        />
      </nuxt-link>

      <div class="navbar_routes_container" id="navbarNav">
        <ul class="navbar_routes">
          <li class="nav-item">
            <nuxt-link :to="localePath('/')" class="nav-link">
              <div>
                <div class="nav-link_not_active">
                  {{ $t("nav.home") }}
                </div>
                <div class="nav-link_active">
                  {{ $t("nav.home") }}
                </div>
              </div>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/about-us')" class="nav-link">
              <div>
                <div class="nav-link_not_active">
                  {{ $t("nav.about") }}
                </div>
                <div class="nav-link_active">
                  {{ $t("nav.about") }}
                </div>
              </div>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="localePath('/vehicles')" class="nav-link">
              <div>
                <div class="nav-link_not_active">
                  {{ $t("nav.vehicles") }}
                </div>
                <div class="nav-link_active">
                  {{ $t("nav.vehicles") }}
                </div>
              </div>
            </nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link :to="localePath('/contact-us')" class="nav-link">
              <div>
                <div class="nav-link_not_active">
                  {{ $t("nav.contact_us") }}
                </div>
                <div class="nav-link_active">
                  {{ $t("nav.contact_us") }}
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center user_nav_icon_container">
        <div>
          <button
            @click="is_search_dialog = true"
            class="text-white d-block"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img src="@/assets/media/images/icons/search_icon.svg" alt="" />
          </button>
        </div>
        <div v-if="is_auth">
          <button
            class="text-white d-block"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click.stop="
              () => {
                is_notification_dropdown = !is_notification_dropdown;
                is_user_dropdown = false;
                is_navbar_routes_small = false;
              }
            "
          >
            <img src="@/assets/media/images/icons/bell_icon.svg" alt="" />
          </button>
        </div>
        <div v-if="is_auth">
          <button
            class="text-white d-block"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click.stop="
              () => {
                is_user_dropdown = !is_user_dropdown;
                is_notification_dropdown = false;
                is_navbar_routes_small = false;
              }
            "
          >
            <img src="@/assets/media/images/icons/user_icon.svg" alt="" />
          </button>
        </div>
        <div class="navbar_routes_small_btn">
          <button
            @click.stop="
              () => {
                is_navbar_routes_small = !is_navbar_routes_small;
                is_user_dropdown = false;
                is_notification_dropdown = false;
              }
            "
            class="text-white d-block"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img src="@/assets/media/images/icons/hamburger.svg" alt="" />
          </button>
        </div>
        <nuxt-link
          class="sign_btn"
          :to="localePath('/auth/sign-in')"
          v-if="!is_auth"
        >
          <FormButton class="py-3 px-4" :mainBorder="true">sign in</FormButton>
        </nuxt-link>

        <div
          class="user_dropdown"
          v-if="is_navbar_routes_small"
          @click.stop="is_navbar_routes_small = false"
        >
        <i class="fas fa-xmark close"></i>
          <ul>
            <li>
              <nuxt-link :to="localePath('/')">{{ $t("nav.home") }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/about-us')">{{
                $t("nav.about")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/vehicles')">{{
                $t("nav.vehicles")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/contact-us')">{{
                $t("nav.contact_us")
              }}</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/auth/sign-in')">
                {{ $t("nav.sign_in") }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="user_dropdown" v-if="is_user_dropdown">
          <ul>
            <li>
              <nuxt-link :to="localePath('/vehicles/saved_vehicles')">{{
                $t("buttons.saved_vehicles")
              }}</nuxt-link>
            </li>
            <li>
              <button @click="is_edit_profile_dialog = true">
                {{ $t("buttons.edit_profile") }}
              </button>
            </li>
            <li>
              <nuxt-link :to="localePath('/terms')">{{
                $t("buttons.terms&Conditions")
              }}</nuxt-link>
            </li>
            <li>
              <button class="logout" @click="logout">
                {{ $t("buttons.logout") }}
              </button>
            </li>
          </ul>
        </div>
        <div class="notification_dropdown" v-if="is_notification_dropdown">
          <ul>
            <li class="noificaion_item_container">
              <div class="noificaion_item">
                <h4 class="notification_header">Admistrative message</h4>
                <p class="notification_body">
                  The price of the car you required has been sent to your mail
                </p>
                <div class="notification_footer d-flex gap-3">
                  <span>Mercedes-Benz</span>
                  <span>MAYBACH 5</span>
                </div>
              </div>
            </li>
            <li class="noificaion_item_container">
              <div class="noificaion_item">
                <h4 class="notification_header">Admistrative message</h4>
                <p class="notification_body">
                  The price of the car you required has been sent to your mail
                </p>
                <div class="notification_footer d-flex gap-3">
                  <span>Mercedes-Benz</span>
                  <span>MAYBACH 5</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- <nuxt-link
          class="btn-locale"
          :to="switchLocalePath($i18n.locale == 'ar' ? 'en' : 'ar')"
        >
          <i class="fa-solid fa-globe"></i>
          <span>{{ $t(`locale.${$i18n.locale}`) }}</span>
        </nuxt-link> -->
      </div>
    </nav>
    <teleport to="body" v-if="user_info">
      <div
        v-if="is_edit_profile_dialog"
        class="edit_profile_dialog"
        @click="is_edit_profile_dialog = false"
      >
        <form
          @submit.prevent="updateInfo"
          @click.stop
          class="edit_profile_dialog_card"
        >
          <h4 class="text-center mb-5">{{ $t("labels.edit_profile") }}</h4>

          <input
            type="text"
            :placeholder="$t('labels.name')"
            v-model="user_info.full_name"
          />
          <!-- <input type="number" placeholder="Phone Number" /> -->
          <input
            type="email"
            v-model="user_info.email"
            :placeholder="$t('labels.email')"
          />
          <div
            class="Edit_password_btn_container d-flex justify-content-between my-5"
          >
            <span>{{ $t("labels.password") }}</span>
            <button
              type="button"
              @click="
                () => {
                  is_edit_password_dialog = true;
                  is_edit_profile_dialog = false;
                }
              "
            >
              <img
                src="@/assets/media/images/icons/edit_password_icon.svg"
                alt=""
              />
            </button>
          </div>
          <div class="text-center">
            <button type="submit" class="submit_btn">
              {{ $t("buttons.save") }}
            </button>
          </div>
        </form>
      </div>
      <div
        v-if="is_edit_password_dialog"
        class="edit_profile_dialog"
        @click="is_edit_password_dialog = false"
      >
        <form
          @submit.prevent="updatePassword"
          @click.stop
          class="edit_profile_dialog_card"
        >
          <h4 class="text-center mb-5">{{ $t("labels.edit_password") }}</h4>

          <input
            type="password"
            :placeholder="$t('labels.current_password')"
            v-model="current_password"
          />
          <!-- <input type="number" placeholder="Phone Number" /> -->
          <input
            type="password"
            v-model="new_password"
            :placeholder="$t('labels.new_password')"
          />
          <input
            type="password"
            v-model="confirm_password"
            :placeholder="$t('labels.confirmPassword')"
          />

          <div class="text-center mt-5">
            <button type="submit" class="submit_btn">
              {{ $t("buttons.save") }}
            </button>
          </div>
        </form>
      </div>
    </teleport>
    <teleport to="body">
      <div
        v-if="is_search_dialog"
        class="search_dialog__dialog"
        @click="is_search_dialog = false"
      >
        <form
          @submit.prevent="search"
          @keypress.enter.stop
          @click.stop
          class="search_dialog_card"
        >
          <input type="text" v-model="search_input" placeholder="Search Here" />
          <button
            class="close_search_btn"
            type="button"
            @click.stop="is_search_dialog = false"
          >
            <i class="fas fa-xmark"></i>
          </button>
        </form>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { notification } from "ant-design-vue";
import { useToast } from "vue-toastification";

// import { useGlobalStore } from "@/stores/global";
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const i18n = useI18n();
const router = useRouter();

const toast = useToast();
const token = useCookie("JWT");
const is_auth = ref(token.value ? true : false);
const is_user_dropdown = ref(false);
const is_notification_dropdown = ref(false);
const is_edit_profile_dialog = ref(false);
const is_edit_password_dialog = ref(false);
const is_search_dialog = ref(false);
const is_navbar_routes_small = ref(false);
const scrolled = ref(false);
const user_info = ref(null);
const notifications = ref(null);
const current_password = ref(null);
const new_password = ref(null);
const confirm_password = ref(null);
const search_input = ref("");
const headers = {
  Accept: "application/json",
  lang: i18n.locale.value,
  "Accept-Language": i18n.locale.value,
  Authorization: `Bearer ${token.value}`,
};
const getProfile = async () => {
  const { data } = await $fetch(`${baseURL}profile`, {
    method: "get",
    headers: headers,
  });
  user_info.value = data;
};
const getNotifications = async () => {
  const { data } = await $fetch(`${baseURL}notifications`, {
    method: "get",
    headers: headers,
  });
  notifications.value = data;
};

const updateInfo = async () => {
  if (!user_info.value.full_name) {
    toast.error(i18n.t("validation.name"));
  } else if (!user_info.value.email) {
    toast.error(i18n.t("validation.email"));
  } else {
    try {
      const frmData = new FormData();
      frmData.append("full_name", user_info.value.full_name);
      frmData.append("email", user_info.value.email);

      const data = await $fetch(`${baseURL}profile/update`, {
        method: "post",
        headers: headers,
        body: frmData,
      });
      toast.success(i18n.t("msg.update_successfully"));
      is_edit_profile_dialog.value = false;
    } catch (err) {
      // console.log(err.response._data.message);
      toast.error(err.response._data.message);
    }
  }
};
const updatePassword = async () => {
  if (!current_password.value) {
    toast.error(i18n.t("validation.current_password"));
  } else if (!new_password.value) {
    toast.error(i18n.t("validation.new_password"));
  } else if (new_password.value != confirm_password.value) {
    toast.error(i18n.t("validation.confirm_password"));
  } else {
    try {
      const frmData = new FormData();
      frmData.append("current_password", current_password.value);
      frmData.append("new_password", new_password.value);
      frmData.append("new_password_confirmation", confirm_password.value);

      const data = await $fetch(`${baseURL}profile/update-password`, {
        method: "post",
        headers: headers,
        body: frmData,
      });
      toast.success(i18n.t("msg.update_successfully"));
      is_edit_password_dialog.value = false;
    } catch (err) {
      // console.log(err.response._data.message);
      toast.error(err.response._data.message);
    }
  }
};
const logout = async () => {
  try {
    const frmData = new FormData();
    frmData.append("device_token", "website");
    frmData.append("type", "ios");
    const data = await $fetch(`${baseURL}logout`, {
      method: "post",
      headers: headers,
      body: frmData,
    });
    console.log(data);
    toast.success(data.message);
    is_edit_profile_dialog.value = false;
    token.value = "";
    is_auth.value.value = false;
  } catch (err) {
    // console.log(err.response._data.message);
    toast.error(err.response._data.message);
  }
};

const search = () => {
  if (search_input.value) {
    router.push(`/vehicles/search?keyword=${search_input.value}`);
    search_input.value = "";
    is_search_dialog.value = false;
  }
};
watchEffect(() => {
  if (process.client) {
    if (
      is_edit_profile_dialog.value == true ||
      is_edit_password_dialog.value == true
    ) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }
});
// watch(is_edit_password_dialog, (value) => {
//   if (value == true) {
//     document.body.style.overflowY = "hidden";
//   } else {
//     document.body.style.overflowY = "auto";
//   }
// });
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  });
  document.body.addEventListener("click", () => {
    is_user_dropdown.value = false;
    is_notification_dropdown.value = false;
    is_navbar_routes_small.value = false;
  });
  if (is_auth.value) {
    getProfile();
    getNotifications();
  }
});
</script>

<style lang="scss" scoped>
.navbar_container {
  border-bottom: 2px solid $main_color;
  transition: all 0.4s;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);

  .navbar {
    width: 90% !important;
    max-width: 1920px !important;
    margin: 0 auto;
    display: flex !important;
    align-items: center;
    color: white;
    gap: 2rem;
    padding: 0;
    .navbar_routes_small_btn {
      display: none;
    }
    .navbar_routes_container {
      flex-grow: 1;
      .navbar_routes {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .nav-link {
          padding-block: 2.8rem;
          color: white;
          position: relative;
          div {
            overflow-y: hidden;
            position: relative;
            .nav-link_not_active {
              height: 100%;
              transition: all 0.3s;
            }
            .nav-link_active {
              position: absolute;
              top: 100%;
              color: $main_color;
              transition: all 0.3s;
            }
          }
          &:hover,
          &.router-link-exact-active {
            div {
              .nav-link_not_active {
                transform: translateY(-100%);
              }
              .nav-link_active {
                transform: translateY(-100%);
              }
            }
          }
          &.router-link-exact-active::before {
            content: " ";
            position: absolute;
            width: 100%;
            height: 5px;
            background: $main_color;
            bottom: 0;
            left: 0;
            transform: translateY(75%);
            border-radius: 200px/10px;
          }
        }
      }
    }
  }
}
@keyframes smoothScroll {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.sign_btn {
  // margin-inline-start: 1rem;
}
.user_nav_icon_container {
  gap: 2rem;
  position: relative;
  .user_dropdown,
  .notification_dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: black;
    padding: 1rem;
    border-radius: 10px;
    width: 13rem;
    margin-top: 1rem;
    border: 1px solid #84848483;
    box-shadow: 0px 0px 25px 4px rgba(0, 0, 0, 0.82);
    &.notification_dropdown {
      padding-inline: 0;
      width: 20rem;
      .noificaion_item_container {
        // margin-bottom: 0.5rem !important;
        .noificaion_item {
          padding-block: 0.4rem;
          padding-inline: 1rem;
          transition: all 0.3s;
          .notification_header {
            font-size: 1.2rem;
          }
          .notification_body {
            font-size: 0.8rem;
            font-weight: 100;
            margin-bottom: 0.5rem;
          }
          .notification_footer {
            color: $second_color;
            font-size: 0.8rem;
          }
          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
    &.user_dropdown {
      position: fixed;
      right: 0;
      width: 100%;
      transition: all .3s ease-in;
      opacity: 0.8;
      .close{
        margin-left: 95%;
      }
      ul {
        li {
          padding-block: 0.8rem;
          font-weight: bold;
          text-align: center;
          button {
            font-weight: bold;
          }
          .logout {
            color: red;
          }
        }
      }
    }
  }
}
.edit_profile_dialog {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  // height: 100vh;
  // width: 100vw;
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  .edit_profile_dialog_card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: black;
    width: 80%;
    max-width: 25rem;
    padding: 2rem;
    border: 1px solid #84848483;
    box-shadow: 0px 0px 25px 4px rgba(0, 0, 0, 0.82);
    border-radius: 10px;
    input {
      background: #141414;
      border: none;
      border: 1px solid #84848483;
      padding: 1rem;
      border-radius: 3rem;
      outline: none;
    }
    .submit_btn {
      text-transform: uppercase;
      // font-weight: bold;
      padding: 0.8rem 2rem;
      letter-spacing: 7px;
      border-radius: 30px;
      font-size: 0.9rem;
      background: linear-gradient(to left, #f0c49f, #866e59, #d8b18f);
    }
  }
}
.search_dialog__dialog {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;
  // align-items: center;
  .search_dialog_card {
    width: 40rem;
    max-width: 80%;
    position: relative;
    input {
      width: 100%;
      background: inherit;
      border: none;
      border-bottom: 1px solid gray;
      padding: 1rem;
      outline: none;
      font-size: 1.2rem;
    }
    .close_search_btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      color: gray;
      font-size: 1.2rem;
    }
  }
}
@media screen and (max-width: 992px) {
  .navbar_container {
    position: relative;
    .navbar {
      padding-block: 1.5rem !important;
      .navbar_routes_container {
        display: none;
      }
      .navbar_routes_small_btn {
        display: block !important;
      }
    }
    .logo {
      width: 10rem;
    }
    .sign_btn{
      display: none;
    }
    &.nav_container_abs {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;

      animation: smoothScroll 0.5s ease 1 forwards;
      // backdrop-filter: blur(10px);
    }
  }
}
@media screen and (max-width: 600px) {
  .user_nav_icon_container {
    gap: 1rem;
  }
  .logo {
    width: 10rem;
  }
  .sign_btn{
    display: none;
  }
}
</style>
