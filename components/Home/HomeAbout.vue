<template>
  <div class="about_section">
    <div
      class="container d-flex justify-content-center align-items-center w-100 h-100"
    >
      <h1>best home page ever</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about_section {
  padding-block: 50px;
  height: 200vh;
  .about_content {
    display: flex;
    flex-direction: column;
    height: 100%;
    a {
      text-transform: uppercase;
      line-height: 27px;
      border-radius: 8px;
    }
  }
  .sub_title {
    text-transform: uppercase;
    font-size: 1rem;
  }
  .title {
    color: $main_color;
    line-height: 1.4;
  }
  .desc {
    line-height: 1.7;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .action {
    margin-top: auto;
  }
}
</style>
