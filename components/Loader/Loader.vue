<template>
  <div id="loading" class="loading">
    <img
      src="@/assets/media/images/logo/logo.svg"
      width="100"
      height="100"
      alt="loading"
    />
  </div>
</template>

<style lang="scss">
.loading {
  background-color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  position: fixed;
  margin-top: 0;
  top: 0;
  z-index: 999999;
  @include flexCenterAlignment();
  animation: bouncing 5s infinite;
}
@keyframes bouncing {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
