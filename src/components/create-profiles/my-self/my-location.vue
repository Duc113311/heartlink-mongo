<template>
  <div class="w-full h-full">
    <div class="items-center h-full">
      <div
        v-show="isShowUp"
        class="flex justify-center items-center w-full h-full"
      >
        <div class="text-center w-full el-location">
          <div class="flex justify-center items-center">
            <img
              src="@/assets/icon/art_location.svg"
              width="250"
              height="250"
              alt=""
              srcset=""
            />
          </div>
          <div class="">
            <div class="padding-title">Enable Location</div>
          </div>
          <div class="flex justify-center items-center w-full">
            <div
              class="padding-describe w-4/5"
              v-bind:class="[
                isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
              ]"
            >
              You will need to enable your location order to use HeartLinks
            </div>
          </div>
        </div>
      </div>
      <div class="absolute w-full dow-location show-action-location">
        <div
          v-show="isShowDow"
          class="w-full justify-center flex items-center mb-10"
          @click="onTellMoreUp()"
        >
          <i class="fa-solid fa-angle-up text-2xl"></i>
        </div>
        <BhLocation @onShowAvoid="onShowAvoid"></BhLocation>
        <div
          v-show="isShowUp"
          class="w-full text-base text-white mt-5 angle-down pl-10 pr-10 flex justify-center items-center"
          @click="onTellMore()"
        >
          <span class="padding-describe">Tell me more</span>
          <i class="text-2xl ml-3 fas fa-angle-down" @click="onAngleDown()"></i>
        </div>
      </div>

      <div v-show="isShowDow" class="meet-people h-full mt-20">
        <div class="flex items-center h-full">
          <div class="text-center">
            <div class="flex justify-center items-center">
              <img
                src="@/assets/icon/art_meet_people.svg"
                width="250"
                height="250"
                alt=""
                srcset=""
              />
            </div>
            <div class="mt-10">
              <div class="padding-title">MEET PEOPLE NEARBY</div>
            </div>
            <div class="w-full flex justify-center items-center">
              <div
                class="padding-describe w-4/5"
                v-bind:class="[
                  isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
                ]"
              >
                You location will be used to show potential matches near you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AvoidSomeone
      v-show="isShowAvoid"
      @onHideWellcome="onHideWellcome"
    ></AvoidSomeone>
  </div>
</template>

<script>
import BhLocation from "../../bh-element-ui/button/bh-location";
import AvoidSomeone from "../../welcome/avoid-someone";
export default {
  components: {
    BhLocation,
    AvoidSomeone,
  },
  name: "my-location",

  setup() {
    return {};
  },

  data() {
    return {
      txtFirstName: "",
      isShowMeet: false,
      isShowAvoid: false,

      isShowUp: true,
      isShowDow: false,
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
    onShowAvoid(value) {
      this.isShowAvoid = value;
    },
    async onHideWellcome(val) {
      this.$router.push({ path: "/home" });
      this.isShowAvoid = val;
    },

    onTellMore() {
      const actionLocation = document.getElementsByClassName(
        "show-action-location"
      );

      actionLocation[0].classList.add("up-location");
      actionLocation[0].classList.remove("dow-location");

      (this.isShowUp = false), (this.isShowDow = true);
    },

    onTellMoreUp() {
      const actionLocation = document.getElementsByClassName(
        "show-action-location"
      );

      actionLocation[0].classList.add("dow-location");
      actionLocation[0].classList.remove("up-location");

      (this.isShowUp = true), (this.isShowDow = false);
    },

    onAngleUp() {
      debugger;
      this.isShowMeet = false;
      if (document.getElementsByClassName("meet-people")[0]) {
        document.getElementsByClassName("meet-people")[0].style.display =
          "block";
      }
    },
  },

  mounted() {
    debugger;
    if (document.getElementsByClassName("angle-up")[0]) {
      document.getElementsByClassName("angle-up")[0].style.display = "none";
    }
  },
};
</script>

<style lang="css">
.gd-location {
  display: grid;
  grid-template-rows: 8fr 1fr;
  overflow: hidden;
}

.dow-location {
  bottom: 0;
  left: 0;
  padding-bottom: 16px;
}

.up-location {
  top: 0;
  right: 0;
  padding-top: 16px;
}
</style>
