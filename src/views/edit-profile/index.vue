<template>
  <div class="w-full h-full relative bg-theme p-5">
    <div class="w-full h-full">
      <!-- Back -->
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack @onBackComponent="onBackEditProfile"></BhBack>
          </div>
          <div class="ml-20 w-3/4 text-xl text-white">Edit Profile</div>
        </div>
      </div>

      <div class="form-edit overflow-scroll w-full" v-loading="loading">
        <div class="w-full">
          <MyPhotos :isShowTitle="true"></MyPhotos>
        </div>

        <div
          class="flex justify-center text-center w-full mt-3 mb-3 description-no-padding"
        >
          Add video, pic or logo toget 4% closer to completing your profile and
          you may even get more likes
        </div>
        <div class="w-full mb-4">
          <BhMedia></BhMedia>
        </div>

        <!-- Smart photo -->
        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <div class="w-full style-switch">
              <div class="name text-xl">Smart Photos</div>

              <div>
                <el-switch
                  v-model="value2"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                >
                </el-switch>
              </div>
            </div>
            <div class="w-full p-3 bh-describe">
              Smart photos continiously tests all your profile photos to find
              the best one
            </div>
          </div>
        </div>

        <!-- About -->

        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <div class="w-full flex justify-between p-3 bh-title">
              <div>ABOUT ME</div>
              <div v-show="!completeAbout">+22%</div>
            </div>
            <div>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="About me - maximise 500 words"
                v-model="valueAbout"
                @input="onChangeAbout()"
              >
              </el-input>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>INTEREST</div>
              <div>+3%</div>
            </div>
            <div class="w-full flex style-form">
              <div class="flex justify-between w-full">
                <div class="bh-item-title style-inter-setting relative">
                  <div class="w-full flex justify-center items-center">
                    <div class="w-full text-ellipsis whitespace-nowrap">
                      <span
                        :id="index"
                        class="mr-3 mb-3 text-white border-interest"
                        v-for="(item, index) in listDataInterests"
                        :key="index"
                      >
                        {{ item }}
                      </span>
                    </div>
                  </div>
                  <div class="bg-interest absolute h-full w-full"></div>
                </div>
                <div
                  class="mr-5 flex items-center"
                  @click="onShowPopupInterest()"
                >
                  <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interests -->

        <!-- life style -->
        <div class="w-full flex justify-center items-center">
          <div class="w-full relative">
            <div class="w-full flex justify-between p-3 bh-title">
              <div class="">LIFE STYLE</div>
              <div class="">+22%</div>
            </div>

            <div class="w-full bg-life">
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Zodiac</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  {{ zodiacParam }}
                </div>
                <div class="cursor-pointer" @click="onShowFormLife">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Pets free</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  {{ petsParam }}
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Education</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  {{ educationParam }}
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Smocking smoker</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  {{ smokeParam }}
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Character</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  {{ personalityParam }}
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life-end">
                <div class="w-5/6 bh-item-title">Dietary Preferences</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  Carnivore
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Job title -->
        <!-- <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>JOB TITLE</div>
              <div>+3%</div>
            </div>
            <div class="w-full">
              <el-input placeholder="Job title" v-model="nameJob"></el-input>
            </div>
          </div>
        </div> -->
        <!-- Company -->
        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>JOB TITLE</div>
              <div v-show="!completeJobTitle">+3%</div>
            </div>
            <div class="w-full">
              <el-input
                placeholder="Add job title"
                v-model="valueJobTitle"
                @input="onChangeJobTitle()"
              ></el-input>
            </div>
          </div>
        </div>
        <!-- Job title -->
        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>SCHOOL</div>
              <div v-show="!completeSchool">+3%</div>
            </div>
            <div class="w-full">
              <el-input
                placeholder="Add university"
                v-model="valueSchool"
                @input="onChangeSchool()"
              ></el-input>
            </div>
          </div>
        </div>
        <!-- Job title -->
        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>LIVING IN</div>
              <div v-show="!completeLiving">+3%</div>
            </div>
            <div class="w-full">
              <el-input
                placeholder="Add city"
                v-model="valueLiving"
                @input="onChangeLiving()"
              ></el-input>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>SHOW INSTAGRAM PHOTOS</div>
              <div>+3%</div>
            </div>
            <div class="w-full flex style-form">
              <div class="">
                <img
                  src="@/assets/icon/ic_instagram.svg"
                  width="30"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="flex justify-between w-full p-5">
                <div class="bh-item-title">Connect Instgram</div>
                <div>
                  <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>MY ANTHEM</div>
              <div>+3%</div>
            </div>
            <div class="w-full flex style-form">
              <div class="flex justify-between w-full">
                <div class="bh-item-title">Choose an Anthem</div>
                <div class="mr-5">
                  <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>MY TOP SPOTIFY ARTISTS</div>
              <div>+3%</div>
            </div>
            <div class="w-full flex style-form">
              <div class="">
                <img
                  src="@/assets/icon/ic_spotify.svg"
                  width="30"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="flex justify-between w-full p-5">
                <div class="bh-item-title">Connect Spotify</div>
                <div>
                  <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>GENDER</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div
                  class="flex justify-between w-full bd-input pb-3 pt-3"
                  @click="onChangeGender(1)"
                >
                  <div class="bh-item-title">Men</div>
                  <div v-show="parseInt(showGender) === 1">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full pb-3 pt-3"
                  @click="onChangeGender(0)"
                >
                  <div class="bh-item-title">Women</div>
                  <div v-show="parseInt(showGender) === 0">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title p-3 items-center">
              <div>CONTROL PROFILE</div>
              <div class="ml-3">
                <div class="style-package">Sliver package</div>
              </div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Don't show my age</div>
                  <div>
                    <el-switch
                      v-model="valueAge"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Don't show my distance</div>
                  <div>
                    <el-switch
                      v-model="valueDistance"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <Footer></Footer>
      </div>
    </div>
    <div
      v-show="isShowLifeStyle"
      class="w-full h-full absolute top-0 left-0 z-30"
    >
      <FormLifeStyle
        @onClickCancelLife="onClickCancelLife"
        @onClickSaveLife="onClickSaveLife"
      ></FormLifeStyle>
    </div>

    <div
      v-show="isShowInterest"
      class="w-full h-full absolute top-0 left-0 z-30"
    >
      <FormInterests
        @onClickHideInterest="onClickHideInterest"
        @onClickSaveInterest="onClickSaveInterest"
      ></FormInterests>
    </div>
  </div>
</template>

<script>
import FormLifeStyle from "../../components/profile/edit-profile/form-life-style";
import FormInterests from "../../components/profile/edit-profile/form-interests.vue";

import Footer from "../../components/layout/footer-home/footer";
import MyPhotos from "../../components/create-profiles/my-self/my-photos";
import BhBack from "../../components/bh-element-ui/button/bh-back";
import BhMedia from "../../components/bh-element-ui/button/bh-media.vue";

import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    Footer,
    MyPhotos,
    BhBack,
    BhMedia,
    FormLifeStyle,
    FormInterests,
  },
  name: "edit-profile",

  data() {
    return {
      valueAge: false,
      valueDistance: false,
      value2: true,
      nameJob: "",
      valDefaultAbout: "",
      completeAbout: false,
      completeLifeStyle: false,
      dialogTableVisible: false,

      isShowLifeStyle: false,

      completeJobTitle: false,
      completeSchool: false,
      completeLiving: false,

      nameJobTitle: "",
      nameSchool: "",
      nameLiving: "",
      nameZodiac: "Trống",
      nameSmoke: "Trống",
      namePets: "Trống",
      namePersonality: "Trống",
      nameEducation: "Trống",
      namePreferences: "Trống",
      genderSetting: 0,

      loading: true,

      isShowInterest: false,

      // showGender: 0,
    };
  },

  computed: {
    listDataInterests() {
      const interestData = this.$store.state.userModule.user_profile?.interests;
      return interestData ? interestData : [];
    },

    showGender: {
      get() {
        return this.$store.state.userModule.user_profile?.gender;
      },

      set(newValue) {
        this.setShowGenderSetting(newValue);
      },
    },

    // showGender: {
    //   get() {
    //     const gender = this.$store.state.userModule.user_profile?.gender;

    //     return gender ? gender : this.genderSetting;
    //   },
    //   set(newValue) {
    //     // Note: we are using destructuring assignment syntax here.
    //     this.genderSetting = newValue;
    //   },
    // },

    valueAbout: {
      // getter
      get() {
        const about = this.$store.state.userModule.user_profile?.about;

        return about ? about : this.valDefaultAbout;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.valDefaultAbout = newValue;
      },
    },

    valueJobTitle: {
      get() {
        const about = this.$store.state.userModule.user_profile?.jobTitle;

        return about ? about : this.nameJobTitle;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameJobTitle = newValue;
      },
    },

    valueSchool: {
      get() {
        const about = this.$store.state.userModule.user_profile?.university;

        return about ? about : this.nameSchool;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameSchool = newValue;
      },
    },

    valueLiving: {
      get() {
        const about = this.$store.state.userModule.user_profile?.living;

        return about ? about : this.nameLiving;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameLiving = newValue;
      },
    },

    zodiacParam: {
      get() {
        const zodiacData = this.$store.state.userModule.user_profile?.zodiac;

        return zodiacData ? zodiacData : this.nameZodiac;
      },
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameZodiac = newValue;
      },
    },

    petsParam: {
      get() {
        const petsFreeData =
          this.$store.state.userModule.user_profile?.petsFree;

        return petsFreeData ? petsFreeData : this.namePets;
      },
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.namePets = newValue;
      },
    },

    educationParam: {
      get() {
        const educationData =
          this.$store.state.userModule.user_profile?.education;

        return educationData ? educationData : this.nameEducation;
      },
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameEducation = newValue;
      },
    },

    personalityParam: {
      get() {
        const personalityData =
          this.$store.state.userModule.user_profile?.typePersonality;

        return personalityData ? personalityData : this.namePersonality;
      },
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.namePersonality = newValue;
      },
    },

    smokeParam: {
      get() {
        const smokeData = this.$store.state.userModule.user_profile?.smoke;

        return smokeData ? smokeData : this.nameSmoke;
      },
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.nameSmoke = newValue;
      },
    },

    preferenceParam: {
      get() {
        const personalityData =
          this.$store.state.userModule.user_profile?.dietaryPreferences;

        return personalityData ? personalityData : this.namePersonality;
      },
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.namePersonality = newValue;
      },
    },
  },

  methods: {
    ...mapMutations(["setShowGenderSetting"]),
    ...mapActions([
      "getDetailInforUser",
      "getDataSmokes",
      "getDataPets",
      "getDataZodiacs",
      "getDataEducations",
      "getDataPreferences",
      "getDataPersonalitys",
    ]),

    onChangeGender(val) {
      this.setShowGenderSetting(val);

      this.showGender = val;
    },

    onShowPopupInterest() {
      this.isShowInterest = true;
    },

    onClickSaveInterest() {},

    onClickHideInterest() {},

    onBackEditProfile(val) {
      console.log(val);
      this.loading = true;

      const profile = this.$store.state.userModule.user_profile;
      // profile.about=this.valueAbout

      console.log(profile);
      setTimeout(() => {
        this.loading = false;
        this.$router.push({ path: "/setting" });
      }, 1000);
    },

    onChangeAbout() {
      if (this.valueAbout === "") {
        this.completeAbout = false;
      } else {
        this.completeAbout = true;
      }
    },

    onClickCancelLife(val) {
      this.isShowLifeStyle = val;
    },
    onClickSaveLife(val) {
      const lifeData = this.$store.state.userModule.lifeStyle;
      this.zodiacParam = lifeData.nameZodiac;
      this.petsParam = lifeData.namePets;
      this.educationParam = lifeData.nameEducation;
      this.personalityParam = lifeData.namePersonality;
      this.smokeParam = lifeData.nameSmoke;

      this.isShowLifeStyle = val;
    },

    onShowFormLife() {
      this.isShowLifeStyle = true;
    },

    onChangeJobTitle() {
      if (this.valueJobTitle === "") {
        this.completeJobTitle = false;
      } else {
        this.completeJobTitle = true;
      }
    },

    onChangeSchool() {
      if (this.valueSchool === "") {
        this.completeSchool = false;
      } else {
        this.completeSchool = true;
      }
    },

    onChangeLiving() {
      if (this.valueLiving === "") {
        this.completeLiving = false;
      } else {
        this.completeLiving = true;
      }
    },
  },

  async created() {
    const userId = localStorage.userId;
    const dataValue = {
      userId: userId,
      latitude: localStorage.latitude,
      longitude: localStorage.longitude,
    };
    await this.getDetailInforUser(dataValue);

    await this.getDataZodiacs({
      entityName: "zodiacs",
      entityId: "en",
    });
    await this.getDataSmokes({
      entityName: "smokes",
      entityId: "en",
    });

    await this.getDataPets({
      entityName: "pets",
      entityId: "en",
    });

    await this.getDataPersonalitys({
      entityName: "personalitys",
      entityId: "en",
    });

    await this.getDataEducations({
      entityName: "educations",
      entityId: "en",
    });

    await this.getDataPreferences({
      entityName: "dietary_preferences",
      entityId: "en",
    });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },

  mounted() {},
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}

.header-edit {
  height: 8%;
}

.form-edit {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
  height: 84%;
}

.form-edit::-webkit-scrollbar {
  display: none;
}

.style-switch {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #495063;
  border-radius: 10px;
  color: white;
  background-color: #495063;
}

.el-textarea__inner {
  min-height: 140px !important;
  height: 134px !important;
  background-color: rgb(73, 80, 99) !important;
  border: 1px solid rgb(73, 80, 99) !important;
  border-radius: 10px !important;
  font-size: 17px !important;
  padding: 12px !important;
  color: #ffffff !important;
}

.bg-life {
  background-color: #495063;
  border-radius: 10px;
  padding: 24px;
}

.item-life {
  display: flex;
  /* padding: 12px; */
  border-bottom: 1px solid #616781;
  padding-bottom: 15px;
  padding-top: 15px;
}
.item-life-end {
  display: flex;
  /* padding: 12px; */
  padding-bottom: 15px;
  padding-top: 15px;
}

.el-input__inner {
  background-color: #495063 !important;
  border: 1px solid #495063 !important;
  border-radius: 10px !important;
  padding: 13px !important;
  font-size: 15px !important;
  height: 50px !important;
  color: #ffffff !important;
}

.style-form {
  height: 50px;
  background-color: #495063;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}

.style-bg-common {
  background-color: #495063;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}

.style-package {
  padding: 5px;
  width: 138px;
  display: flex;
  justify-content: center;
  border: 1px solid #8fada5;
  border-radius: 4px;
  background-color: #8fada5;
  color: #ffffff;
}

.h-data-life::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.h-data-life {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.el-loading-spinner {
  display: flex;
  justify-content: center;
}

.style-inter-setting {
  width: 28rem;
  overflow: hidden;
  height: 50px;
  display: flex;
  align-items: center;
}

.bg-interest {
  background: rgb(73, 80, 99);
  background: linear-gradient(
    270deg,
    rgba(73, 80, 99, 1) 7%,
    rgba(240, 233, 233, 0) 22%
  );
}
</style>
