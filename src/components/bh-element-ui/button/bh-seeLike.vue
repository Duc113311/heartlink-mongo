<template>
  <div class="pl-10 pr-10 flex justify-center items-center">
    <el-button
      type="success"
      @click="onClickSeeLikes"
      class="btContinueCode cursor-pointer text-white w-80 color-button"
      >SEE WHO LIKES YOU</el-button
    >
  </div>
</template>

<script>
export default {
  name: "bt-continue",
  data() {
    return {
      isNumber: 0,
    };
  },

  computed: {},

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickSeeLikes() {
      this.$emit("onChangeSeeLikes", true);
    },
  },
};
</script>

<style lang="css">
.color-button {
  border: 1px solid #f6a800 !important;
  border-radius: 10px !important;
  padding: 14px 20px !important;
  background-color: #f6a800;
  cursor: pointer;
}

.el-button.is-loading:before {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
