<template>
  <div class="flex justify-center w-full items-center">
    <div class="w-button">
      <button
        class="btAgree cursor-pointer w-full padding-button active-button"
        @click="onClickIAgree()"
      >
        I agree
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bt-agree",

  data() {
    return {};
  },

  computed: {
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
