<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <button
      :loading="isShowLoading"
      class="text-base text-white w-full rounded-lg p-5 color-bt"
      @click="onClickSendSuperLike()"
    >
      SEND SUPER LIKE
    </button>
  </div>
</template>

<script>
export default {
  name: "bh-sendSuperLike",

  props: ["isLoading"],
  data() {
    return {};
  },

  computed: {
    isShowLoading() {
      return this.isLoading;
    },
  },

  methods: {
    /**
     * Click show dialog
     */
    onClickSendSuperLike() {
      this.$emit("onSendSuperLike", true);
    },
  },
};
</script>

<style lang="css">
.color-bt:hover {
  background-color: #30e6af !important;
}
.color-bt {
  height: 60px;
  font-size: 22px !important;
  background-color: #01b983 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 12px;
}
</style>
