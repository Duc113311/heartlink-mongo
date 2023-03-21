<template>
  <div ref="myName">
    <div class="mt-10">
      <div class="padding-title">My name is</div>
    </div>
    <div>
      <input
        class="your-name padding-input mb-3"
        v-bind:class="[isDarkTheme ? 'dark-theme-input' : 'light-theme-input']"
        v-model="txtFirstName"
        placeholder="Your name"
        @keydown="onChangeFirstName"
      />
      <span
        class="padding-describe"
        v-bind:class="[
          isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
        ]"
        >This is how it will appear in HeartLink, and you will not able to
        change it</span
      >
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "my-name",

  setup() {
    return {};
  },

  data() {
    return {
      txtFirstName: "",
    };
  },

  computed: {
    ...mapState(["user_profile"]),

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
    ...mapMutations(["setFirstName"]),
    onChangeFirstName() {
      if (this.txtFirstName !== "") {
        this.setFirstName(this.txtFirstName);
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    },
  },

  mounted() {
    this.txtFirstName = this.$store.state.userModule.user_profile.firstName;

    this.$emit("onShowName", { showCheckbox: false });
    this.$emit("onShowSkips", false);
    console.log(this.txtFirstName);
    if (this.txtFirstName !== "") {
      this.$emit("onStatusActive", true);
    } else {
      this.$emit("onStatusActive", false);
    }
  },
};
</script>

<style lang="css">
.el-input__wrapper {
  background-color: #696a7d;
}
.your-name .el-input__inner {
  background-color: #696a7d;
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
  color: white;
}

.your-name:focus {
  outline: 0;
  border: non;
}
</style>
