<template>
  <div
    class="text-xl w-full h-10 flex items-center justify-between cursor-pointer"
  >
    <div @click="onClickBack()">
      <i class="fas fa-chevron-left size-icon"></i>
    </div>
    <div class="font-skip" v-show="isShowSkipParam" @click="onClickSkip()">
      Skip
    </div>
  </div>
</template>

<script>
export default {
  name: "bt-back",

  props: ["isShowSkip"],
  data() {
    return {};
  },

  computed: {
    isShowSkipParam() {
      return this.isShowSkip;
    },
  },

  methods: {
    /**
     * Quay lại trang trước
     */
    onClickBack() {
      this.$emit("onBackComponent", true);
    },

    onClickSkip() {
      this.$emit("onClickSkip", true);
    },
  },
};
</script>

<style lang="css">
.size-icon {
  font-size: 28px;
}

.font-skip {
  color: #f85e68;
  font-size: 26px;
}
</style>
