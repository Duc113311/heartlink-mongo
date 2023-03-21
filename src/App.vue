<template>
  <div id="app">
    <div
      class="tracking-wide layout-web w-full h-full absolute flex justify-center items-center"
    >
      <div
        class="layout-detail overflow-hidden relative"
        v-bind:class="[isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg']"
      >
        <div
          v-show="isShowIconApp"
          class="absolute z-40 img-app flex w-full h-full justify-center"
        >
          <img width="100" src="./assets/icon/ic_icon_app (1).svg" />
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "app-view",

  data() {
    return {
      isShowIconApp: true,
    };
  },

  computed: {
    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
    ...mapActions(["checkExistUserId"]),
  },

  async created() {
    setTimeout(() => {
      this.isShowIconApp = false;
    }, 500);

    const userId = localStorage.getItem("userId");
    await this.checkExistUserId(userId);

    const isExist = this.$store.state.loginModule.isExistUserId;

    if (isExist) {
      this.$router.push({ path: "/home-new" });
    } else {
      this.$router.push({ name: "login-page" }).catch(() => {});
    }
  },

  mounted() {},
};
</script>
<style lang="css">
@import "@/assets/css/common.css";
@import "@/assets/css/txt-common.css";
@import "@/assets/css/color-text.css";
@import "@/assets/css/color-bg.css";

@import "@/assets/css/dark-them.css";
@import "@/assets/css/light-theme.css";
@import "@/assets/css/reponsive-scream.css";
.img-app {
  background: #884971;
  opacity: 1;
}

#app {
  font-family: "Roboto", sans-serif;
}
</style>
