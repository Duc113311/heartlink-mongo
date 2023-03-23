<template>
  <div>
    <div class="grid">
      <button
        class="btn-Sign cursor-pointer text-xl font-semibold bg-white text-black w-80 rounded-lg px-3 py-3 mb-4"
        @click="onLoginGoogle()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/google_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">Log in with Google</span>
        </span>
      </button>

      <button
        type="primary"
        class="btn-Sign cursor-pointer text-xl font-semibold bg-face text-white w-80 rounded-lg px-3 py-3 mb-4"
        @click="onLoginFacebook()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/facebook_icon.svg" class="mr-2" alt="" /><span
            class="font-sans"
            >Log in with Facebook</span
          >
        </span>
      </button>
      <button
        type="danger"
        class="btn-Sign cursor-pointer text-xl font-semibold bg-phone text-white w-80 rounded-lg px-3 py-3 mb-3"
        @click="onClickPhoneNumber()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/phone_number_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">Log in with Phone number</span>
        </span>
      </button>
    </div>

    <MyCommon
      v-show="isShowPhoneNumber"
      @onShowEmailUser="onShowEmailUser"
    ></MyCommon>
    <MyEmail v-if="isShowEmail" @onShowWelcome="onShowWelcome"></MyEmail>
    <NewAccount
      v-show="isShowWellcome"
      @onShowDialogQuit="onShowDialogQuit"
    ></NewAccount>
  </div>
</template>

<script>
import {
  signInWithPopup,
  GoogleAuthProvider,
  auth,
  provider,
} from "../../../configs/firebase";
import NewAccount from "../../welcome/new-account";
import MyEmail from "../../form-login/email/my-email";
import MyCommon from "../../form-login/phone-number/my-common";

import { mapActions } from "vuex";

export default {
  components: {
    NewAccount,
    MyEmail,
    MyCommon,
  },
  name: "login-btn",

  data() {
    return {
      isShowPhoneNumber: false,
      isShowEmail: false,
      isShowWellcome: false,
    };
  },

  methods: {
    ...mapActions(["postTokenByUserID", "checkExistUserId"]),
    onShowDialogQuit(val) {
      this.isShowWellcome = val;
    },
    /**
     * Login by phone number
     * CreateBy: nvDuc
     */

    onClickPhoneNumber() {
      this.isShowPhoneNumber = true;
    },

    async onLoginGoogle() {
      await signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const userID = result.user.uid;
          const providerId = result.providerId;
          console.log(token);

          await this.postTokenByUserID({
            id: userID,
            providerId: providerId,
          });

          await this.checkExistUserId(userID);

          const userIds = this.$store.state.loginModule.isExistUserId;
          if (userIds) {
            this.$router.push({ path: "/home-new" });
          } else {
            this.isShowWellcome = true;
          }
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);

          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          console.log(credential);

          // ...
        });
    },

    onShowEmailUser(value) {
      this.isShowEmail = value;
    },

    onShowWelcome(value) {
      this.isShowWellcome = value;
    },
  },
};
</script>

<style lang="css"></style>
