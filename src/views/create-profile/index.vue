<template>
  <div class="w-full h-full">
    <div class="w-full h-full create-profile top-0 left-0 z-20 phone-login">
      <div class="body-infor overflow-hidden">
        <!-- Nút back -->
        <div class="back" v-if="isScream !== 7">
          <BhBack
            :isShowSkip="isShowSkipParam"
            @onBackComponent="onBackComponent"
            @onClickSkip="onClickSkip"
          ></BhBack>
        </div>
        <!-- My name -->
        <div v-if="isScream === 0">
          <MyName
            @onShowSkips="onShowSkips"
            @onShowName="onShowProfiles"
            @onStatusActive="onStatusActive"
          ></MyName>
        </div>
        <!-- Birthday -->
        <div v-if="isScream === 1">
          <MyBirthday
            @onShowSkips="onShowSkips"
            @onShowName="onShowProfiles"
            @onStatusActive="onStatusActive"
          ></MyBirthday>
        </div>
        <!-- Gender -->
        <div v-if="isScream === 2">
          <MyGender
            @onShowSkips="onShowSkips"
            @onShowName="onShowProfiles"
            @onStatusActive="onStatusActive"
            :isScream="isScream"
          ></MyGender>
        </div>
        <!-- Sexual -->
        <div v-if="isScream === 3">
          <MySexual
            @onShowSkips="onShowSkips"
            @onShowName="onShowProfiles"
            @onStatusActive="onStatusActive"
            :isScream="isScream"
          ></MySexual>
        </div>
        <!-- Interest -->
        <div v-if="isScream === 4">
          <MyInterests
            @onShowSkips="onShowSkips"
            @onShowName="onShowProfiles"
            @onStatusActive="onStatusActive"
          ></MyInterests>
        </div>
        <div v-if="isScream === 5">
          <MyShowGender
            @onShowSkips="onShowSkips"
            @onShowName="onShowProfiles"
            @onStatusActive="onStatusActive"
          ></MyShowGender>
        </div>
        <!-- Photos -->
        <div v-if="isScream === 6">
          <MyPhotos
            @onShowSkips="onShowSkips"
            @onShowName="onShowProfiles"
            @onStatusActive="onStatusActive"
          ></MyPhotos>
        </div>
        <!-- Locations -->
        <div class="h-full w-full" v-if="isScream === 7">
          <MyLocation @onStatusActive="onStatusActive"></MyLocation>
        </div>
        <!--  -->
      </div>
      <div class="footer-infor pt-3" v-if="isScream !== 7">
        <BhContinue
          :statusProfile="isShowProfile"
          :isActives="isActives"
          @onChangeContinue="onChangeContinue"
          @onActionShowMe="onActionShowMe"
          :isScreamInterest="isScream"
        ></BhContinue>
      </div>
    </div>
  </div>
</template>

<script>
import MyShowGender from "../../components/create-profiles/my-self/my-show-gender";
import BhContinue from "../../components/bh-element-ui/button/bh-continue";
import MyLocation from "../../components/create-profiles/my-self/my-location";
import MyPhotos from "../../components/create-profiles/my-self/my-photos";
import MyInterests from "../../components/create-profiles/my-self/my-interests";
import MySexual from "../../components/create-profiles/my-self/my-sexual";
import MyGender from "../../components/create-profiles/my-self/my-gender";
import MyBirthday from "../../components/create-profiles/my-self/my-birthday";
import MyName from "../../components/create-profiles/my-self/my-name";
import BhBack from "../../components/bh-element-ui/button/bh-back";

import TokenApps from "../../middleware/application-storage.js";
import { mapMutations } from "vuex";
export default {
  components: {
    MyShowGender,
    BhContinue,
    MyLocation,
    MyPhotos,
    MyInterests,
    MySexual,
    MyGender,
    MyBirthday,
    MyName,
    BhBack,
  },
  name: "create-profile",

  data() {
    return {
      isScream: 0,
      isActives: false,
      isNumber: 0,
      isShowHeader: true,
      isShowAvoid: false,
      isShowProfile: {},
      isShowSkipParam: false,
    };
  },

  methods: {
    ...mapMutations(["setSkipProfiles", "setActionShowMe"]),
    onBackComponent() {
      if (this.isScream === 0) {
        this.$router.replace({ name: "login-page" }).catch(() => {});
      } else {
        this.isScream = this.isScream - 1;
      }
    },
    onShowSkips(val) {
      this.isShowSkipParam = val;
    },

    onShowProfiles(val) {
      this.isShowProfile = val;
    },
    onStatusActive(value) {
      this.isActives = value;
    },

    onChangeContinue(val) {
      console.log(val);
      if (this.isScream === 7) {
        this.isShowAvoid = true;
        const userId = TokenApps.getAccessToken("userId");
        const dataUser = this.$store.state.userModule.user_profile;
        dataUser.userId = userId;
      } else {
        this.isScream = this.isScream + 1;
      }
    },

    onClickSkip() {
      this.setSkipProfiles(this.isScream);
      this.isScream = this.isScream + 1;
    },

    onActionShowMe(val) {
      console.log(val);
      this.setActionShowMe({ scream: this.isScream, status: val });
    },
  },
};
</script>

<style lang="css">
.body-infor {
  height: 85%;
  width: 100%;
}

.footer-infor {
  width: 100%;
  overflow: hidden;
  height: calc(100% - 85%);
}
</style>
