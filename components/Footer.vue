<template>
  <footer>
    <div
      class="footer-container d-flex justify-content-center align-items-center"
    >
      <div class="text-center">
        <div class="logo-container mb-3">
          <img src="@/assets/media/images/logo/logo.svg" alt="" />
        </div>
        <p class="copyrights">
          copyrights &copy;

          <a href="/" target="_blank">Auto Boutique</a>

          <!-- <bdi class="px-1"> {{ year }} </bdi> -->
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const btnLoading = ref(false);

const data = reactive({
  name: "",
  email: "",
  phone: "",

  message: "",
});

const year = computed(() => new Date().getFullYear());
// function submit() {
//   btnLoading.value = true;

//   const frmData = new FormData();
//   frmData.append("name", data.name);
//   frmData.append("email", data.email);
//   frmData.append("phone", data.phone);
//   frmData.append("company", data.company);
//   frmData.append("message", data.message);

//   axios
//     .post("add-contact-us", frmData)
//     .then((res) => {
//       btnLoading.value = false;
//       toaster.success(res.data.msg);
//       data.name = "";
//       data.email = "";
//       data.phone = "";
//       data.message = "";
//       data.company = null;
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth",
//       });
//     })
//     .catch((err) => {
//       btnLoading.value = false;
//       toaster.error(err.response.data.message);
//     });

//   return {
//     submit,
//     uploadImage,
//     frmData,
//     preview,
//     btnLoading,
//   };
// }
</script>

<style lang="scss">
footer {
  .footer-container {
    padding-block: 4rem;
  }
}
</style>
