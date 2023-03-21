<template>
  <div
    class="w-full relative image-say overflow-hidden"
    :style="`background-image: url('${urlImage}');height:100%;`"
  >
    <div class="bg-background-shadow w-full h-full absolute top-0 left-0"></div>
    <div
      class="overflow-hidden absolute h-full w-full p-5 top-0 left-0"
      :class="[isShowConfirm ? 'grid-send' : 'grid-confirm']"
    >
      <div class="w-full mt-4">
        <i class="fa-solid fa-xmark text-white text-3xl"></i>
      </div>
      <div class="w-full relative">
        <div
          class="flex justify-center absolute left-0 w-full top-0 content-center p-0.5 border-solid mt-3"
        >
          <button
            v-for="data in btUrlImage"
            :key="data.id"
            @click="onClickNextImage(data)"
            class="bt-img p-0.5 rounded-lg mr-0.5"
          ></button>
        </div>
      </div>

      <div class="w-full mt-28 text-center flex justify-center content-center">
        <div class="text-infor">
          <h3 class="text-5xl">THEY</h3>
          <h3 class="text-7xl">LIKE YOU</h3>
          <h3 class="text-9xl">TOO!</h3>
        </div>
      </div>

      <div v-show="isShowConfirm" class="w-full absolute bottom-0 left-0 mb-4">
        <div class="w-full flex justify-center">
          <div class="flex justify-center dad-input">
            <input
              type="text"
              v-model="txtValueMes"
              placeholder="Say something nice"
              class="text-send text-red-600"
              id="11"
              ref="id2"
            />
            <button
              class="bt-send cursor-pointer"
              @click="onClickSendMessage()"
            >
              SEND
            </button>
          </div>
        </div>

        <div class="flex justify-center gap-5 content-center mt-3">
          <div class="style-icon">😉</div>
          <div class="style-icon">👋</div>
          <div class="style-icon flex justify-center">
            <img src="@/assets/icon/ic_home_tab.svg" alt="" srcset="" />
          </div>
          <div class="style-icon">😍</div>
        </div>
      </div>

      <div
        v-show="!isHideComfirm"
        class="w-full h-80 absolute bottom-0 left-0 p-3"
      >
        <div class="w-full h-full form-sending p-5">
          <div class="w-full h-24 flex justify-center items-centerD">
            <div class="avatar-send">
              <div class="image-user"></div>
            </div>
          </div>

          <div
            class="w-full text-xl text-white mt-5 mb-5 flex justify-center items-center"
          >
            You are sending Ngoc Trinh
          </div>

          <div class="w-full flex justify-center p-2">
            <BhComfirm @onChangeComfirm="onChangeComfirm"></BhComfirm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhComfirm from "../../bh-element-ui/button/bh-comfirm";
export default {
  components: { BhComfirm },
  name: "form-like-too",

  data() {
    return {
      isShowConfirm: true,
      nameComfirm: "Comfirm",
      isHideComfirm: false,
      txtValueMes: "",
    };
  },

  computed: {
    urlImage() {
      return "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F1%20(1).jpg?alt=media&token=7b4d7d74-8bf4-4d11-98e6-d36bcee3f57f";
    },

    btUrlImage() {
      const imageLength = [
        {
          id: 1,
          urlName: "ssss",
        },
        {
          id: 2,
          urlName: "ssss",
        },
        {
          id: 3,
          urlName: "ssss",
        },
      ];
      return imageLength;
    },
  },

  methods: {
    onClickNextImage() {},

    onClickSendMessage() {},

    onChangeComfirm(val) {
      this.isHideComfirm = val;
    },
  },
};
</script>

<style lang="css">
.image-say {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10px;
}
.grid-send {
  grid-template-rows: 1fr 0fr 18fr 3fr;
}
.grid-confirm {
  grid-template-rows: 1fr 0fr 12fr 9fr;
}

.text-infor {
  margin-top: 90px;
  font-style: italic;
  font-weight: bold;
  text-align: justify;
  color: yellow;
}

.dad-input {
  width: 90%;
  border-radius: 24px;
  overflow: hidden;
}
.text-send {
  width: 80%;
  padding: 9px 22px;
}
.bt-send {
  width: 20%;
  background-color: white;
  color: red;
  font-weight: bold;
}
.style-icon {
  background-color: #464a53;
  width: 90px;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  padding: 7px;
  font-size: 23px;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(14 21 21 / 92%) 9%,
    rgb(210 182 182 / 57%) 29%,
    rgb(248 242 242 / 0%) 99%
  );
}

.image-user {
  background-image: url("@/assets/image-dating/7-15831080159232071706060.webp");
  width: 100%;
  background-position: center;
  background-size: cover;
  height: 100%;
  border-radius: 60px;
}

.form-sending {
  background-color: #434a5d;
  border-radius: 15px;
}

.avatar-send {
  width: 95px;
  padding: 6px;
  border-radius: 50px;
  border: 4px solid #fd5d65;
}
</style>
