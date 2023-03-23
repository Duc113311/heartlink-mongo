<template>
  <div class="w-full h-full user-profile absolute top-0 p-8 left-0">
    <div class="p-2">
      <div class="text-2xl w-full h-10 flex items-center">
        <i class="fas fa-times" @click="onCloseDialog()"></i>
      </div>
      <div class="pt-5 pb-5">
        <div class="flex justify-center">
          <img src="@/assets/icon/art_avoid.svg" width="250" height="250" />
        </div>
      </div>

      <div
        class="flex w-full justify-center items-center text-center padding-title"
      >
        Want to avoid someone you know on HeartLink?
      </div>

      <div
        class="padding-describe w-full text-center"
        v-bind:class="[
          isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
        ]"
      >
        <div class="mt-2">
          It is easy - share your device's contact with HeartLink when using
          this feature to pick who you want to avoid
        </div>
        <br />

        <div class="mt-2">
          We'll store your vlocked contact to stop you from seeing each other if
          your contact has an account with the same infor tou provide. You can
          stop sharing with us in your settings
        </div>
        <br />
        <div class="mt-4 underline">
          <a class="" href="#">
            Learn more here, including how HeartLink process your contacts
          </a>
        </div>
      </div>

      <div class="w-full absolute bottom-0 left-0 pb-16">
        <el-tooltip
          class="item"
          effect="dark"
          content="The skill are improving"
          placement="top"
        >
          <BhComfirm
            :nameTitle="nameTitle"
            @onChangeComfirm="onChangeComfirm"
          ></BhComfirm>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import BhComfirm from "../bh-element-ui/button/bh-comfirm";
export default {
  components: {
    BhComfirm,
  },
  name: "avoid-someone",

  data() {
    return {
      nameTitle: "Continue",
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

  async created() {
    const paramUser = {
      userId: localStorage.userId,
      latitude: localStorage.latitude,
      longitude: localStorage.longitude,
      page: 1,
      pageNumber: 20,
      startAge: 18,
      endAge: 55,
      showMeGender: localStorage.showMeGender,
      location: 80,
    };

    await this.getAllListUserProfile(paramUser);
  },

  mounted() {},

  methods: {
    ...mapActions(["getAllListUserProfile"]),
    onCloseDialog() {
      this.$router.push({ path: "/home-new" });

      this.$emit("onHideWellcome", false);
    },

    onShowDialogQuit(value) {
      this.isShowQuitSing = value;
    },

    onCancelQuit() {
      this.isShowQuitSing = false;
    },

    onChangeComfirm(val) {
      console.log(val);
      this.$router.push({ path: "/home-new" });
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
</style>
