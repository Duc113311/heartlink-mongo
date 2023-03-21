<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <button
      :loading="isShowLoading"
      v-bind:class="[isActiveContinue ? 'active-button' : isDefaultTheme]"
      class="btAgree cursor-pointer w-full padding-button"
      @click="onClickIAgree()"
    >
      I agree
    </button>
  </div>
</template>

<script>
export default {
  name: "bt-agree",

  props: ["isLoading"],
  data() {
    return {};
  },

  computed: {
    isShowLoading() {
      return this.isLoading;
    },

    isDefaultTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return "light-theme-button";
      } else {
        return "dark-theme-button ";
      }
    },
  },

  methods: {
    /**
     * Click show dialog
     */
    onClickIAgree() {
      this.$router.push({
        path: "create-user",
      });
    },
  },
};
</script>

<style lang="css">
.color-bt:hover {
  background-color: #fd5d65 !important;
}
.btAgreet {
  cursor: pointer;
}

.btAgree:hover {
  background-color: #fd5d65 !important;
}
</style>
