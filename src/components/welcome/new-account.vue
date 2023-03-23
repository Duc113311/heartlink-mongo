<template>
  <div class="w-full h-full user-profile absolute top-0 left-0 z-40 welcome">
    <div class="w-full h-full">
      <div
        class="text-2xl w-full h-10 flex items-center"
        @click="onShowDialogQuit()"
      >
        <i class="fas fa-times"></i>
      </div>
      <div class="p-2 mt-10 overflow-scroll h-scroll-welcome height-scroll">
        <div class="mb-16">
          <div class="flex justify-center">
            <img
              src="@/assets/image-dating/app_icon_512x512.png"
              width="100"
              height="100"
              alt=""
              srcset=""
            />
          </div>
          <div class="flex text-center justify-center mt-3 w-full">
            <div class="w-5/6">
              <h2 class="padding-title">Welcome to HeartLink</h2>
              <span class="padding-describe">
                Please follow our rules to have more fun and build a great
                community together
              </span>
            </div>
          </div>
          <div class="mt-8 mb-6">
            <div class="flex mt-3">
              <div class="mr-4 text-2xl pt-2">
                <i class="far fa-hand-point-right text-slate-500"></i>
              </div>
              <div>
                <h2 class="padding-text-option">Be Yourself</h2>
                <span
                  class="overflow-hidden break-words padding-describe-option"
                  v-bind:class="[
                    isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
                  ]"
                  >Make sure your photos, age and bio true to who you are</span
                >
              </div>
            </div>
            <div class="flex mt-3">
              <div class="mr-4 text-2xl pt-2">
                <i class="far fa-hand-point-right text-slate-500"></i>
              </div>
              <div>
                <h2 class="padding-text-option">Stay Safe</h2>
                <span
                  class="overflow-hidden break-words padding-describe-option"
                  v-bind:class="[
                    isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
                  ]"
                  >Don't be too quick to give out personal information.
                  <span class="decoration-solid"
                    >Date Safety guidelines</span
                  ></span
                >
              </div>
            </div>
            <div class="flex mt-3">
              <div class="mr-4 text-2xl pt-2">
                <i class="far fa-hand-point-right text-slate-500"></i>
              </div>
              <div>
                <h2 class="padding-text-option">Play It Cool</h2>
                <span
                  class="overflow-hidden break-words padding-describe-option"
                  v-bind:class="[
                    isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
                  ]"
                  >Respect others and treat them as you would like to be
                  treated</span
                >
              </div>
            </div>
            <div class="flex mt-3">
              <div class="mr-4 text-2xl pt-2">
                <i class="far fa-hand-point-right text-slate-500"></i>
              </div>
              <div>
                <h2 class="padding-text-option">Be Proactive</h2>
                <span
                  class="overflow-hidden break-words padding-describe-option"
                  v-bind:class="[
                    isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
                  ]"
                  >Alwways repory bad behaviour</span
                >
              </div>
            </div>
          </div>
        </div>
        <BhArge></BhArge>
      </div>
    </div>
  </div>
</template>

<script>
import BhArge from "../bh-element-ui/button/bh-arge";
export default {
  components: {
    BhArge,
  },
  name: "new-account",

  data() {
    return {
      centerDialogVisible: false,
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
    onShowDialogQuit() {
      debugger;
      this.$emit("onCloseWelcome", true);
      this.$router.push({
        path: "create-user",
      });
    },
  },
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}
.user-profile {
  background-color: #232937;
}

.h-scroll-welcome {
  height: calc(100% - 10%);
  overflow: scroll;
}
</style>
