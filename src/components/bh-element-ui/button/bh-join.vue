<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <el-button
      type="danger"
      class="text-white w-full p-5 color-bt"
      @click="onClickJoinNow()"
      >Join now</el-button
    >
  </div>
</template>

<script>
export default {
  name: "join-now",
  data() {
    return {};
  },

  methods: {
    onClickJoinNow() {},
  },
};
</script>

<style lang="css">
.color-bt {
  background-color: #fd5d65;
  height: 60px;
  border-radius: 12px !important;
  font-size: 16px !important;
}
</style>
