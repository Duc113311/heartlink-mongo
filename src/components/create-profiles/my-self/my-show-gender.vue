<template>
  <div>
    <div class="mt-10">
      <h2 class="padding-title">Show me gender</h2>
    </div>
    <div
      class="grid w-full"
      v-for="(item, index) in showGendersData"
      :key="index"
    >
      <button
        v-bind:class="[isActiveButton ? 'active-border' : isDarkTheme]"
        class="padding-input-option"
        :ref="index"
        :id="index"
        @click="onShowMeGender(index)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "my-show-gender",
  setup() {
    return;
  },
  data() {
    return {
      showMeGender: 3,

      showGendersData: [
        {
          id: 0,
          name: "Woman",
        },
        {
          id: 1,
          name: "Man",
        },
        {
          id: 2,
          name: "Everyone",
        },
      ],
    };
  },
  computed: {
    ...mapState(["user_profile"]),

    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return "light-theme-option";
      } else {
        return "dark-theme-option";
      }
    },
  },
  methods: {
    ...mapMutations(["setShowGender", "setShowProfileCreate"]),
    onShowMeGender(val) {
      this.showMeGender = val;
      this.setShowGender(parseInt(this.showMeGender));

      localStorage.setItem("showMeGender", val);
      const documentParam = document.getElementsByClassName(
        "padding-input-option"
      );

      for (let index = 0; index < documentParam.length; index++) {
        const element = documentParam[index];

        if (val === index) {
          element.classList.add("active-border");
        } else {
          element.classList.remove("active-border");
        }
      }

      this.$emit("onStatusActive", true);
    },
  },

  mounted() {
    this.showMeGender = this.$store.state.userModule.user_profile.showMeGender;
    this.setShowProfileCreate({
      isShowProfile: true,
      isNotShowProfile: true,
    });
    this.$emit("onShowSkips", false);
    this.$emit("onShowName", { showCheckbox: false, showName: "" });
    const documentParam = document.getElementsByClassName(
      "padding-input-option"
    );
    if (this.showMeGender < 3) {
      documentParam[this.showMeGender].classList.add("active-border");
    }
    if (this.showMeGender === 0) {
      this.$emit("onStatusActive", true);
    } else if (this.showMeGender === 1) {
      this.$emit("onStatusActive", true);
    } else if (this.showMeGender === 2) {
      this.$emit("onStatusActive", true);
    } else {
      this.$emit("onStatusActive", false);
    }
  },
};
</script>

<style lang="css">
.el-button + .el-button {
  margin-left: 0px !important;
}
.rounded-lg {
  border: 2px solid white;
}

.active-border {
  border: 1.5px solid #ee646a;
  color: #ee646a;
}
</style>
