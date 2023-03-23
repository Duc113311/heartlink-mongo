<template>
  <div class="login w-full h-full relative">
    <div
      class="flex justify-center w-full absolute z-10 h-full body-app overflow-hidden"
    >
      <div class="w-full image-background h-full">
        <div class="w-full h-full back-color">
          <div
            class="form-login justify-center flex content-center h-full items-center"
          >
            <div>
              <div>
                <div class="flex justify-center mb-8">
                  <img
                    src="@/assets/icon/app_icon_512x512.png"
                    width="100"
                    height="100"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="block text-center justify-center mt-3 text-white">
                  <div class="padding-title">Warm Welcome</div>
                  <div class="padding-text-option">
                    We hope you have a sweet time here
                  </div>
                </div>
              </div>
              <!-- Body -->
              <div class="h-30 justify-center flex p-10">
                <LoginBtn></LoginBtn>
              </div>

              <div
                class="mt-5 items-center content-center text-white ml-5 mr-3"
              >
                <div>
                  <h2 class="text-base mb-2 text-center">
                    Trouble logging in?
                  </h2>
                  <span class="text-lg text-gray-400"
                    >By clicking "Login", you agree with our Terms. Learn how we
                    process your data our
                    <a class="underline decoration-1" href="http://"
                      >Privacy policy</a
                    >
                    and
                    <a class="underline decoration-1" href="http://"
                      >Cookies Policy</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="recapcha" id="recaptcha-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginBtn from "../../components/layout/btn-sign/login-btn";
// import NavbarPage from "../../components/layout/navbar-login/navbar-page";
export default {
  components: {
    LoginBtn,
    // NavbarPage,
  },
  name: "login-page",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css">
.image-background {
  background-image: url(@/assets/image-dating/bg_LoginApp.png);
  z-index: 99;
  padding-right: 0px !important;
  padding-left: 0px !important;
  background-size: cover;
  position: relative;
}

.recapcha {
  display: none;
  justify-content: end;
  margin-bottom: 15px;
}

*:focus {
  outline: none;
}
.el-button + .el-button {
  margin-left: 0px !important;
}

#phone,
.btn {
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #ccc;
}

.btn {
  color: #ffffff;
  background-color: #428bca;
  border-color: #357ebd;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
}

.btn:focus,
.btn:hover {
  background-color: #3276b1;
  border-color: #285e8e;
}

.btn:active {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.alert {
  padding: 15px;
  margin-top: 10px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-info {
  border-color: #bce8f1;
  color: #31708f;
  background-color: #d9edf7;
}

.alert-error {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}

.dialog-phone {
  background-color: #332b3e !important;
}

.text-color {
  color: #6587a5;
}

.text-2xl {
  font-size: 1.8rem !important;
  font-weight: 600;
}
.el-button > span {
  font-size: 20px;
}

.bg-face {
  background-color: #0085fe;
}
.bg-phone {
  background-color: #fd5d65;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
/* màn hình điện thoại */
</style>
