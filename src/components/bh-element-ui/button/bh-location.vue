<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <button
      @click="onClickLocations"
      class="btContinueCode active-button cursor-pointer w-full padding-button"
    >
      Allow Location
    </button>
  </div>
</template>

<script>
import TokenApps from "@/middleware/application-storage";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "bt-location",
  data() {
    return {
      isLoading: false,
      isNumber: 0,
      latitude: "",
      longitude: "",
      isShowAvoid: false,
    };
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
    ...mapMutations(["setLocation"]),
    ...mapActions(["registerUserByAuthId"]),

    async onHideWellcome(val) {
      this.isShowAvoid = val;
      this.$router.push({ path: "/home" });
    },

    async showPosition(position) {
      if (position.coords) {
        this.setLocation(position.coords);
      }

      debugger;
      const images = [];
      const userId = TokenApps.getAccessToken("userId");
      const providerId = TokenApps.getProviderId("providerId");
      const dataUser = this.$store.state.userModule.user_profile;
      // dataUser.birthday = new Date(dataUser.birthday.toString()).getTime();
      for (let index = 0; index < dataUser.avatars.length; index++) {
        const element = dataUser.avatars[index];

        images.push(element.url);
      }
      if (parseInt(dataUser.gender) === 1) {
        dataUser.gender = "men";
      } else {
        dataUser.gender = "women";
      }
      debugger;
      dataUser.providerId = providerId;
      dataUser.userId = userId;

      const objectUser = {
        oAuth2Id: userId,
        fullname: dataUser.firstName,
        dob: dataUser.birthday,
        gender: dataUser.gender,
        address: "Thai Thinh, Hà Noi",
        location: {
          lat: dataUser.latitude,
          long: dataUser.longitude,
        },
        genderShowMe: dataUser.showMeGender,
        university: "Dai Hoc",
        avatars: images,
        orientationSexuals: dataUser.sexuals,
        interests: dataUser.interests,
        showGender: true,
        showSexual: true,
      };

      await this.registerUserByAuthId(objectUser);
      localStorage.setItem("oAuth2Id", userId);
      // await this.postInforUserProfile(dataUser);
      this.$emit("onShowAvoid", true);
    },
    /**
     * Sự kiện click để tiếp tục
     */
    onClickLocations() {
      if (navigator.geolocation) {
        debugger;
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },
  },
};
</script>

<style lang="css">
.color-button {
  background-color: #fd5d65;
  border: 1px solid #fd5d65 !important;
}

.color-button:hover,
.color-button:active,
.color-button:focus {
  background-color: #fd5d65;
}

.active-button {
  background-color: #fd5d65;
}
</style>
