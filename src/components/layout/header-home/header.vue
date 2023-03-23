<template>
  <div
    class="flex header-page justify-center content-center items-center text-red-400 title-logo"
  >
    <img src="@/assets/icon/ic_icon_app.svg" class="size-hight mr-3" alt="" />
    <span class="text-2xl font-semibold">heartlink</span>
  </div>
</template>

<script>
export default {
  name: "header-page",

  setup() {
    return;
  },

  data() {
    return {};
  },
};
</script>

<style lang="css">
.header-page {
  height: 12%;
  border-bottom: 1px solid #343b4b;
}
</style>
