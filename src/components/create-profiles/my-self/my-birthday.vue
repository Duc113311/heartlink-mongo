<template>
  <div>
    <div class="mt-10">
      <div class="padding-title">My birthday is</div>
    </div>
    <div>
      <input
        class="your-name padding-input mb-3"
        v-model="birthday"
        v-bind:class="[isDarkTheme ? 'dark-theme-input' : 'light-theme-input']"
        type="date"
        placeholder="dd/mm/yyyy"
        min="1977-01-01"
        max="2030-01-01"
        @keydown="onChangeInput"
        @blur="onChangeInput"
      />
      <span
        class="padding-describe"
        v-bind:class="[
          isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
        ]"
        >Your age will be public</span
      >
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "my-birthday",
  setup() {
    return;
  },
  data() {
    return {
      birthday: "",
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
    ...mapMutations(["setBirthday"]),

    onChangeInput() {
      if (this.birthday !== "") {
        this.setBirthday(this.birthday);
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    },
  },

  mounted() {
    this.birthday = this.$store.state.userModule.user_profile.birthday;
    this.$emit("onShowName", { showCheckbox: false });
    this.$emit("onShowSkips", false);
    if (this.birthday !== "") {
      this.$emit("onStatusActive", true);
    } else {
      this.$emit("onStatusActive", false);
    }
  },
};
</script>

<style lang="css">
.birthdate .el-input__inner {
  background-color: #696a7d;
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
  color: white;
}
</style>
