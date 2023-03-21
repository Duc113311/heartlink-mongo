<template>
  <div class="w-full h-full relative">
    <div
      class="border-page-supper-like w-full h-full flex justify-center items-center"
    >
      <div class="body-send">
        <!-- Image -->
        <div v-show="isShowSee" class="w-full h-full">
          <div class="image-match flex justify-center items-center relative">
            <div class="circle-image absolute p-1 image-user1">
              <div class="image-user"></div>
            </div>
            <div class="circle-image absolute p-1 image-user2">
              <div class="image-user"></div>
            </div>
          </div>
          <div class="title-match flex justify-center items-center mb-4">
            <div class="w-96 text-center txt-title-like text-white">
              You have same passion with Ngoc trinh
            </div>
          </div>

          <div
            class="describe-match mt-3 mb-8 flex justify-center items-center title-description-no-padding"
          >
            Higher chance to match if you send a super like now
          </div>

          <div class="flex justify-center items-center mb-2">
            <BhSendSuperLike></BhSendSuperLike>
          </div>
          <div class="flex justify-center items-center">
            <BhNothank :nameTitle="nameNothank"></BhNothank>
          </div>
        </div>
        <div class="w-full h-full">
          <div
            class="image-who-see image-match flex justify-center items-center"
          >
            <div class="w-full h-full border-image-first">
              <div class="image-user"></div>
              <div class="bg-shadow w-full h-full"></div>
            </div>
          </div>

          <div class="title-match flex justify-center items-center mb-4">
            <div class="w-96 text-center txt-title-like text-white">
              You got your first like
            </div>
          </div>
          <div class="title-match flex justify-center items-center mb-4">
            <img src="@/assets/icon/ic_super_like (1).svg" alt="" />
          </div>

          <div class="w-full">
            <BhSeeLike></BhSeeLike>
          </div>

          <BhNothank :nameTitle="nameLater"></BhNothank>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhSeeLike from "../../bh-element-ui/button/bh-seeLike";
import BhNothank from "../../bh-element-ui/button/bh-nothank";
import BhSendSuperLike from "../../bh-element-ui/button/bh-sendSuperLike";
export default {
  components: {
    BhSeeLike,
    BhNothank,
    BhSendSuperLike,
  },
  name: "form-send-supper-like",

  data() {
    return {
      isShowSee: false,
      nameLater: "MAYBE LATER",
      nameNothank: "Nothank",
    };
  },

  methods: {},
};
</script>

<style lang="css">
.body-send {
  padding: 10px;
  border: 1px solid #1e344f;
  background-color: #434a5d;
  border-radius: 10px;
  width: 100%;
}

.image-match {
  height: 180px;
}

.txt-title-like {
  font-size: 26px;
  line-height: 32px;
}

.circle-image {
  width: 120px;
  height: 120px;
  border: 4px solid #01b884;
  border-radius: 75px;
  overflow: hidden;
}

.image-user {
  background-image: url("@/assets/image-dating/7-15831080159232071706060.webp");
  width: 100%;
  background-position: center;
  background-size: cover;
  height: 100%;
  border-radius: 60px;
}

.image-user1 {
  left: 132px;
}
.image-user2 {
  right: 132px;
  background-color: #434a5d;
}

.border-image-first {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid #f6a800;
  width: 25%;
  height: 64%;
  padding: 6px;
  border-radius: 60px;
}
</style>
