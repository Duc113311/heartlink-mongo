<template>
  <div
    class="w-full h-full user-profile email-login absolute top-0 left-0 z-30"
  >
    <BhBack></BhBack>
    <div class="padding-title mt-6">What's your email?</div>

    <div
      class="padding-describe"
      v-bind:class="[
        isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
      ]"
    >
      Don't lose access to your account, verify your email
    </div>

    <div class="mt-3">
      <input
        class="your-name padding-input mb-3"
        v-bind:class="[isDarkTheme ? 'dark-theme-input' : 'light-theme-input']"
        v-model="txtEmail"
        placeholder="Enter email"
        @keyup="onChangeInput"
      />
    </div>
    <div class="mt-4">
      <BhContinue
        :isActives="isActives"
        @onChangeContinue="onChangeContinue"
      ></BhContinue>
    </div>
    <div class="flex justify-center padding-title">OR</div>
    <div class="flex mt-4 justify-center">
      <button
        class="btn-Sign cursor-pointer text-xl font-semibold bg-white text-black w-80 rounded-lg px-3 py-3 mb-4"
        @click="onLoginGoogle()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/google_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">Log in with Google</span>
        </span>
      </button>
    </div>

    <div
      class="flex justify-center padding-describe"
      v-bind:class="[
        isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
      ]"
    >
      Verify instantly by connecting your Google account
    </div>

    <div class="text-base flex items-center w-full mt-4">
      <div class="flex justify-center items-center">
        <div class="check-active not-check" @click="onClickChosse(true)">
          <div class="bg-white flex justify-center bg-checked">
            <i class="fa-solid fa-circle-check w-8 h-8"></i>
          </div>
        </div>
        <div class="not-check-active checked" @click="onClickChosse(false)">
          <div class="flex justify-center">
            <i class="fa-regular fa-circle w-8 h-8"></i>
          </div>
        </div>
      </div>
      <span class="ml-4"
        >I want to receive news, updates and offers from Heartlink</span
      >
    </div>
  </div>
</template>

<script>
import BhBack from "../../bh-element-ui/button/bh-back";
import BhContinue from "../../bh-element-ui/button/bh-continue";
import validate from "@/middleware/validate";
import { mapMutations } from "vuex";

export default {
  components: {
    BhBack,
    BhContinue,
  },
  name: "dialog-your-email",

  data() {
    return {
      centerDialogVisible: false,
      txtEmail: "",
      isResultValidate: false,
      btEmail: "btContinueId",
      isActives: false,
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
    ...mapMutations(["setEmailForUser"]),

    onChangeInput() {
      debugger;
      this.isResultValidate = validate.validateEmail(this.txtEmail);
      if (this.isResultValidate) {
        // Xét giá trị email

        this.isActives = true;
      }
    },

    onClickChosse(val) {
      const checkActive = document.getElementsByClassName("check-active");
      const notCheckActive =
        document.getElementsByClassName("not-check-active");

      if (val) {
        checkActive[0].classList.remove("checked");
        notCheckActive[0].classList.remove("not-check");
        checkActive[0].classList.add("not-check");
        notCheckActive[0].classList.add("checked");
      } else {
        checkActive[0].classList.add("checked");
        notCheckActive[0].classList.add("not-check");
        checkActive[0].classList.remove("not-check");
        notCheckActive[0].classList.remove("checked");
      }
    },

    onChangeContinue(value) {
      this.setEmailForUser(this.txtEmail);
      this.$emit("onShowWelcome", value);
    },
  },
  mounted() {},
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}
.user-profile {
  background-color: #232937;
}

.el-input__wrapper {
  background-color: #495063;
  padding: 10px;
  border: 1px solid #495063;
}

.your-email {
  color: white !important;
  background-color: #495063;
}

.your-email:focus {
  border: 1px solid white;
}
</style>
