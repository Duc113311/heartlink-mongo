<template>
  <div>
    <div class="mt-10">
      <h2 class="padding-title">My Sexual oritenation is</h2>
      <span
        class="padding-describe"
        v-bind:class="[
          isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
        ]"
        >Select up to 3</span
      >
    </div>
    <div class="w-full overflow-scroll height-item pb-8">
      <div class="grid select-sexual mt-6 gap-4">
        <div
          v-for="(el, index) in listDataSexuals"
          :key="el + index"
          class="padding-check-option dark-theme-check not-border"
          :id="index"
        >
          <div class="flex content-center items-center">
            <div class="flex justify-center items-center">
              <div
                class="check-active not-check"
                :id="'check' + index"
                @click="onClickChosse(true, index)"
              >
                <div class="bg-white flex justify-center bg-checked">
                  <i class="fa-solid fa-circle-check w-8 h-8"></i>
                </div>
              </div>
              <div
                class="not-check-active checkeds"
                :id="'not-check' + index"
                @click="onClickChosse(false, index)"
              >
                <div class="flex justify-center">
                  <i class="fa-regular fa-circle w-8 h-8"></i>
                </div>
              </div>
            </div>
            <!-- <input
              class="w-6 h-6 mr-5 sexual"
              type="checkbox"
              :id="index"
              value="Straight"
              @click="checkFluency(index)"
            /> -->
            <label class="text-base ml-3" for="html">{{ el }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "my-sexual",
  setup() {
    return;
  },

  props: ["isScream"],

  data() {
    return {
      sexuals: [],
      isChecked: false,
      isNotChecked: false,
      isBorderActive: false,
      isShowLoading: true,
    };
  },

  computed: {
    ...mapState(["user_profile"]),
    listDataSexuals() {
      return this.$store.state.userModule.listSexuals;
    },

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
    ...mapMutations(["setSexuals", "setShowProfileCreate"]),
    ...mapActions(["getListDataSexuals"]),

    onClickChosse(val, indexValue) {
      const listDarks = document.getElementsByClassName("dark-theme-check");
      const checkActive = document.getElementsByClassName("check-active");
      const notCheckActive =
        document.getElementsByClassName("not-check-active");

      this.setSexuals(indexValue);

      const lengthSexual =
        this.$store.state.userModule.user_profile.sexuals.length;

      console.log(lengthSexual);
      if (!this.$store.state.userModule.isCheckBox) {
        if (val) {
          listDarks[indexValue].classList.remove("border-active");
          checkActive["check" + indexValue].classList.remove("checkeds");
          notCheckActive["not-check" + indexValue].classList.remove(
            "not-check"
          );
          listDarks[indexValue].classList.add("not-border");
          checkActive["check" + indexValue].classList.add("not-check");
          notCheckActive["not-check" + indexValue].classList.add("checkeds");
        } else {
          listDarks[indexValue].classList.add("border-active");
          checkActive["check" + indexValue].classList.add("checkeds");
          notCheckActive["not-check" + indexValue].classList.add("not-check");
          listDarks[indexValue].classList.remove("not-border");
          checkActive["check" + indexValue].classList.remove("not-check");
          notCheckActive["not-check" + indexValue].classList.remove("checkeds");
        }
      }
      if (lengthSexual === 3) {
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    },
    /**
     * Check option
     * @param {*} val
     */
    checkFluency(val) {
      this.setSexuals(val);

      const lengthSexual =
        this.$store.state.userModule.user_profile.sexuals.length;

      if (this.$store.state.userModule.isCheckBox) {
        document.getElementById(val).checked = false;
      }
      if (lengthSexual === 3) {
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
      console.log(lengthSexual);
    },
  },

  // async created() {
  //   await this.getListDataSexuals({
  //     entityName: "sexuals",
  //     entityId: "en",
  //   });

  //   // setTimeout(() => {
  //   //   this.isShowLoading = false;
  //   // }, 1000);
  // },
  mounted() {
    this.$emit("onShowSkips", true);
    this.$emit("onShowName", { showCheckbox: true, showName: "orientation" });

    const listDarks = document.getElementsByClassName("dark-theme-check");
    const checkActive = document.getElementsByClassName("check-active");
    const notCheckActive = document.getElementsByClassName("not-check-active");

    const screamShow = this.$store.state.commonModule.listScreamShowMes;
    console.log(screamShow);
    const dataNew = screamShow.find((x) => x.scream === this.isScream);
    console.log(dataNew);

    if (dataNew) {
      if (dataNew.status) {
        this.setShowProfileCreate({
          isShowProfile: false,
          isNotShowProfile: false,
        });
      } else {
        this.setShowProfileCreate({
          isShowProfile: true,
          isNotShowProfile: true,
        });
      }
    } else {
      this.setShowProfileCreate({
        isShowProfile: true,
        isNotShowProfile: true,
      });
    }

    const lengthSexual =
      this.$store.state.userModule.user_profile.sexuals.length;
    const dataSexuals = this.$store.state.userModule.user_profile.sexuals;
    for (let index = 0; index < dataSexuals.length; index++) {
      const element = dataSexuals[index];
      listDarks[element].classList.add("border-active");
      checkActive["check" + element].classList.add("checkeds");
      notCheckActive["not-check" + element].classList.add("not-check");
      listDarks[element].classList.remove("not-border");
      checkActive["check" + element].classList.remove("not-check");
      notCheckActive["not-check" + element].classList.remove("checkeds");
    }
    if (lengthSexual < 3) {
      this.$emit("onStatusActive", false);
    } else {
      this.$emit("onStatusActive", true);
    }
  },
};
</script>

<style lang="css">
.bg-sexual {
  background-color: #05101b47;
}

.height-item {
  height: 527px;
}

.height-item {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
}

.height-item::-webkit-scrollbar {
  display: none;
}

.not-check {
  display: none;
}

.checkeds {
  display: block;
}

.fa-circle-check {
  color: #fd5d65;
}

.bg-checked {
  background-color: white;
  border-radius: 20px;
}

.fa-circle {
  color: #b8bbca;
}

.border-active {
  border: 1.5px solid #fd5d65;
}

.not-border {
  border: none;
}

.fa-circle::before {
  font-size: 32px;
}

.fa-circle-check::before {
  font-size: 33px;
}
</style>
