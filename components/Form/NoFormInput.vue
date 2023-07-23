<template>
  <div class="input_wrapper" v-if="type == 'password'">
    <input
      :id="label"
      :type="showPassword ? 'text' : 'password'"
      :value="value"
      @input="updateValue($event)"
      autocomplete="off"
    />
    <label :for="label" class="label" :class="value ? 'label_active' : ''">{{
      label
    }}</label>
    <span
      class="password_icon"
      v-if="showIcon"
      @click.stop="showPassword = !showPassword"
      ><i class="far fa-eye" v-if="showPassword"></i>
      <i class="far fa-eye-slash" v-else></i
    ></span>
  </div>
  <div class="input_wrapper" v-else>
    <input
      :id="label"
      :type="type"
      :value="value"
      @input="updateValue($event)"
      autocomplete="off"
    />
    <label :for="label" class="label" :class="value ? 'label_active' : ''">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    updateValue(e) {
      this.$emit("update", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input_wrapper {
  position: relative;
  border: 2px solid $borderClr;
  border-radius: 5px;
  input {
    background: inherit;
    border: none;
    padding: 1rem;
    outline: none;
    margin-top: 10px;
    width: 100%;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: gray;
    transition: all 0.3s;
  }
  input:focus + .label,
  .label_active {
    top: 20%;
  }
  .password_icon {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: gray;
    font-size: 1.3rem;
    cursor: pointer;
  }
}
</style>
