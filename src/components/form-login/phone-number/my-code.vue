<template>
  <div class="number-code mt-5">
    <h2 class="padding-title">My code is</h2>
    <div class="flex items-center">
      <div
        class="padding-describe"
        v-bind:class="[
          isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
        ]"
      >
        Please enter Code sent to
      </div>
      <span class="ml-3">{{ this.renderPhoneNumber }}</span>
    </div>
    <div class="text-code flex justify-center mt-8 mb-8">
      <input
        type="text"
        class="digit-box one-code text-center"
        v-for="(el, ind) in digits"
        :id="el"
        :key="el + ind"
        v-model="renderCodeOTP[ind]"
        @keyup="onNextOn(el, ind)"
        :autofocus="ind === 0"
        maxlength="1"
      />
    </div>
    <BhInvalid v-if="renderErrorCode"></BhInvalid>
    <div class="mt-10 padding-describe dark-theme-describe justify-center flex">
      <a class="cursor-pointer bt-render" href="#" @click="onPhoneNumber()"
        >Resend code</a
      >
    </div>
  </div>
</template>

<script>
import BhInvalid from "../../bh-element-ui/error/bh-invalid";
export default {
  components: {
    BhInvalid,
  },
  name: "my-code",
  setup() {},

  data() {
    return {
      digitCount: 4,
      digits: [1, 2, 3, 4, 5, 6],
    };
  },

  props: ["txtPhoneNumber", "valueText", "txtErrorCode", "sentCodeId"],

  computed: {
    renderPhoneNumber() {
      return this.txtPhoneNumber;
    },

    renderErrorCode() {
      return this.txtErrorCode;
    },

    renderCodeOTP() {
      return this.valueText;
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
    /**
     * Render gửi lại mã OTP
     */
    onPhoneNumber() {
      this.$emit("onRenderCodeOTP", this.txtPhoneNumber);
    },

    onCheckOTP() {
      this.$emit("validateRequireCode", true);
    },

    onNextOn(key, on) {
      console.log(key, on);
      const indexData = document.getElementById(key);
      const valueData = indexData.value;
      if (valueData !== "") {
        const nextBling = this.digits.length;
        if (nextBling !== key) {
          indexData.nextSibling.focus();
        } else {
          this.valueCode = this.valueText.toString().split(",").join("");

          if (this.valueCode !== "") {
            this.$emit("validateRequireCode", {
              statusActive: true,
              codeOTP: this.valueCode,
            });
          }
        }
      }
    },
  },

  created() {},

  mounted() {},
};
</script>

<style lang="css">
.one-code {
  width: 48px;
  border-radius: 4px;
  background-color: #363d4d;
  font-size: 1.5rem;
  font-weight: 700;
  height: 48px;
  touch-action: manipulation;
  padding-left: 8px;
  padding-right: 8px;
  vertical-align: middle;
  margin-right: 5px;
}

.one-code:focus {
  background-color: #495063;
}

.bt-render:hover {
  color: #ffffff;
}

.text-color {
  color: #737b91;
}
</style>
