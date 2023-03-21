<template>
  <div>
    <div class="btns">
      <img src="@/assets/icon/bt_back.svg" @click="decide('rewind')" />
      <img src="@/assets/icon/bt_nope.svg" @click="decide('nope')" />
      <img src="@/assets/icon/bt_super_like.svg" @click="decide('super')" />
      <img src="@/assets/icon/bt_like.svg" @click="decide('like')" />
      <img src="@/assets/icon/bt_boost.svg" @click="decide('help')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "action-dating",

  data() {
    return {};
  },

  methods: {
    /**
     * Xử lý các action màn Home
     * @param {*} choice
     */
    decide(choice) {
      console.log(choice);
      // this.$emit("onClickDecide", choice);
    },
  },
};
</script>

<style lang="css"></style>
