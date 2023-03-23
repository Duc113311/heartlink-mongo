<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <button
      type="danger"
      :loading="isShowLoading"
      @click="onClickAddMedia()"
      class="btContinueCode cursor-pointer w-full padding-button active-button"
    >
      Add Media
    </button>
  </div>
</template>

<script>
export default {
  name: "bh-media",
  props: ["isLoading", "isActives"],
  data() {
    return {
      isNumber: 0,
    };
  },

  computed: {
    isShowLoading() {
      return this.isLoading;
    },
  },

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickAddMedia() {
      this.$emit("onChangeMedia", true);
    },
  },
};
</script>

<style lang="css">
.color-button {
  border: 1px solid #2e465c !important;
  border-radius: 10px !important;
  padding: 14px 20px !important;
  cursor: pointer;
}

.defaultButton {
  background-color: rgba(0, 0, 0, 0) !important;
}
.activeButton {
  background-color: #fd5d65 !important;
}

.el-button.is-loading:before {
  background-color: rgba(0, 0, 0, 0) !important;
}

.active-button {
  background-color: #fd5d65;
}
</style>
