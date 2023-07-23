<template>
  <div>
    <VField :name="name" v-slot="{ field, meta }">
      <div
        class="input_wrapper"
        v-if="type == 'password'"
        :class="{
          'is-success': meta.valid && meta.touched,
          'is-danger': !meta.valid && meta.touched,
        }"
      >
        <input
          v-bind="field"
          class="input"
          :id="label"
          v-model="value"
          :type="!showPassword ? 'password' : 'text'"
        />
        <label
          :for="label"
          class="label"
          :class="value ? 'label_active' : ''"
          >{{ label || "Password" }}</label
        >
        <span
          class="password_icon"
          v-if="showIcon"
          @click.stop="showPassword = !showPassword"
          ><i class="far fa-eye" v-if="showPassword"></i>
          <i class="far fa-eye-slash" v-else></i
        ></span>
      </div>
      <div
        class="input_wrapper"
        :class="{
          'is-success': meta.valid && meta.touched,
          'is-danger': !meta.valid && meta.touched,
        }"
        v-else
      >
        <input
          :id="label"
          v-bind="field"
          v-model="value"
          class="input"
          :type="type"
        />
        <label
          :for="label"
          class="label"
          :class="value ? 'label_active' : ''"
          >{{ label }}</label
        >
      </div>
      <VErrorMessage
        v-if="!meta.valid && meta.touched"
        :name="name"
        as="div"
        style="color: red"
        class="help is-danger"
      />
    </VField>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "text",
    },
    // placeholder: {
    //   type: String,
    //   default: "text",
    // },
    // value: {
    //   required: true,
    // },
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
      value: null,
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
  &.is-danger {
    border-color: red;
  }
  @media screen and (max-width: 1200px) {
    border-color: rgb(80, 75, 75);
    .label {
      color: rgb(180, 173, 173);
    }
  }
}
</style>
