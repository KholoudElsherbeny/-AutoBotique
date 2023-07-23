<template>
  <button class="main_button">
    <slot />
    <svg>
      <rect
        :class="mainBorder ? 'main_border_color' : ''"
        x="0"
        y="0"
        fill="none"
        width="100%"
        ry="30px"
        height="100%"
      ></rect>
    </svg>
  </button>
</template>
<script setup>
const props = defineProps({
  mainBorder: { type: Boolean, default: false },
});
</script>

<style lang="scss">
.main_button {
  padding-block: 1rem;
  background: none;
  outline: none;
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 4rem;
  letter-spacing: 13px;
  text-transform: uppercase;
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.3s;

  svg {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    width: 100%;
  }
  rect {
    fill: none;
    stroke: $borderClr;
    stroke-width: 3;
    stroke-dasharray: 200, 90;
    stroke-dashoffset: 100;
    transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
    &.main_border_color {
      stroke-dashoffset: 25%;
      stroke-dasharray: 100%, 50%;
      stroke: $main_color;
    }
  }
  &:hover {
    color: $main_color;
    rect {
      stroke-dasharray: 422, 0;
      stroke: $main_color;
      stroke-dashoffset: 0;
      stroke-width: 4;
    }
  }
}
</style>
