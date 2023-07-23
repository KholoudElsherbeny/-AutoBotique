<template>
  <section class="h-100 verified_page">
    <div
      class="h-100 auth_form_container d-flex justify-content-start align-items-center"
    >
      <div class="container-fluid w-100">
        <div class="row">
          <form @submit.prevent class="col-12 col-xl-6 col-xxl-5">
            <div class="d-flex flex-column gap-3">
              <h5 class="sub_title">{{ $t("auth_sub_title") }}</h5>
              <h1 class="title">
                Welcomoe To The Official <br />Auto Boutique Website.
              </h1>
              <div class="light_text">
                Your account has been created successfully
              </div>
              <div class="d-flex justify-content-end mt-3">
                <router-link to="/auth/sign-in">
                  <FormButton type="submit">continue</FormButton>
                </router-link>
              </div>
            </div>
          </form>
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
useHead({
  title: `Verified`,
});
const code = ref("");
const timerCount = ref(60);
const countDown = () => {
  if (this.timerCount > 0) {
    setTimeout(() => {
      this.timerCount -= 1;
      this.countDown();
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.verified_page {
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
</style>
