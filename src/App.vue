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
          class="absolute z-40 img-app items-center flex w-full h-full justify-center"
        >
          <div class="ic_apps">
            <span style="--i: 0"></span>
            <span style="--i: 1"></span>
            <span style="--i: 2"></span>
            <span style="--i: 3"></span>
          </div>
        </div>
        <router-view />
      </div>
      <!-- <div class="h-full w-full">
        <router-view />
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
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
    ...mapMutations(["setLocation"]),
    async showPosition(position) {
      if (position.coords) {
        debugger;
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
      }
    },
  },

  async created() {
    setTimeout(() => {
      this.isShowIconApp = false;
    }, 1000);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
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

@import "@/assets/css/bh-animations.css";
.img-app {
  background: linear-gradient(
    4deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(167, 96, 20, 1) 100%,
    rgba(255, 255, 255, 0.7050578952173336) 100%
  );
  opacity: 1;
}

#app {
  font-family: "Roboto", sans-serif;
}
</style>
