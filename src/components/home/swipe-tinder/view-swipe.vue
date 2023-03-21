<template>
  <div class="w-full h-full">
    <Tinder
      ref="tinder"
      key-name="userId"
      :queue.sync="listDataUser"
      :offset-y="10"
      @submit="onSubmit"
    >
      <template slot-scope="scope">
        <div
          v-show="isActiveImag"
          class="pic z-8"
          :style="{
            'background-image': `url(${scope.data.avatars[0].urlName})`,
          }"
        />
        <div
          v-show="!isActiveImag"
          class="pic z-8 ss"
          :style="{
            'background-image': `url(${idImage}
            )`,
          }"
        />
        <div
          class="flex w-full justify-center absolute top-0 content-center p-0.5 border-solid mt-3"
        >
          <button
            v-for="data in scope.data.avatars"
            :key="data.id"
            :id="data.id"
            :class="data.id === 0 ? 'active-image' : 'no-active'"
            class="bt-img imageAvatar p-0.5 rounded-lg mr-0.5 no-active"
            @click="onClickNextImage(data)"
          ></button>
        </div>
        <div class="bg-background-shadow w-full h-full absolute top-0"></div>
        <div class="w-full flex items-center absolute bottom-0 h-80 p-4">
          <div class="grid w-full title-boy mb-4">
            <div class="w-70">
              <div class="flex items-center font-title">
                <div
                  :title="scope.data.firstName"
                  class="text-ellipsis w-52 whitespace-nowrap overflow-hidden"
                >
                  {{ scope.data.firstName }},
                </div>
                <div class="mr-3">{{ scope.data.age }}</div>
                <div
                  class="flex justify-center items-center cursor-pointer"
                  @click="onDetailInfor(scope.data?.userId)"
                >
                  <i class="fa-solid fa-circle-info text-xl"></i>
                </div>
              </div>
              <span class="font-describe">{{ scope.data?.about }}</span
              ><br />
              <div class="flex">
                <div class="mr-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <span class="font-describe">
                  {{ scope.data?.locations }} km away</span
                >
              </div>
            </div>
            <div class="w-20 absolute bottom-24 right-0">
              <img
                class="cursor-pointer"
                src="@/assets/icon/bt_like_count.svg"
                width="70"
              />
              <span class="h-complete">{{ scope.data.complete }}</span>
            </div>
          </div>
        </div>
        <div class="w-full flex absolute top-0 opacity-0 h-4/6 nextBg">
          <div
            class="w-2/4 bg-slate-500"
            @click="nextImageLeft(scope.data.avatars, scope.data.userId)"
          ></div>
          <div
            class="w-2/4 bg-orange-200"
            @click="nextImageRight(scope.data.avatars, scope.data.userId)"
          ></div>
        </div>
      </template>

      <div class="like-pointer icon-tinder" slot="like">LIKE</div>
      <div class="nope-pointer icon-tinder" slot="nope">NOPE</div>
      <div class="super-pointers icon-tinder" slot="super">SUPER</div>
    </Tinder>

    <div
      v-show="listDataUser.length === 0"
      class="w-full h-full flex justify-center items-center"
    >
      <div class="text-center">
        <img src="@/assets/icon/art_meet_people.svg" width="150" />
        <div class="padding-describe">No one user</div>
      </div>
    </div>

    <div>
      <div class="btns">
        <img src="@/assets/icon/bt_back.svg" @click="decide('rewind')" />
        <img src="@/assets/icon/bt_nope.svg" @click="decide('nope')" />
        <img src="@/assets/icon/bt_super_like.svg" @click="decide('super')" />
        <img src="@/assets/icon/bt_like.svg" @click="decide('like')" />
        <img src="@/assets/icon/bt_boost.svg" @click="decide('help')" />
      </div>
    </div>
  </div>
</template>

<script>
import Tinder from "vue-tinder";
import { mapState, mapMutations } from "vuex";

export default {
  name: "view-swipe",
  components: { Tinder },
  data() {
    return {
      queue: [],
      offset: 0,
      history: [],
      isShowDetail: false,
      isActiveImag: true,
    };
  },

  computed: {
    ...mapState("userProfileList"),

    listDataUser() {
      return this.$store.state.userModule.userProfileList;
    },

    isShowUrl(val) {
      return val;
    },

    idImage() {
      return this.$store.state.userModule.urlAvatarUser.urlName;
    },
  },

  created() {},
  methods: {
    ...mapMutations(["setUrlNameAvatarUser", "setLeftRightAvatar"]),
    onClickNopeDetail(value) {
      this.isShowDetail = value;
    },
    nextImageLeft(value, userId) {
      console.log(value);

      const idImage = this.$store.state.userModule.urlAvatarUser.id;

      if (idImage) {
        document.getElementById(idImage).classList.remove("active-image");
        document
          .getElementById(parseInt(idImage - 1))
          .classList.add("active-image");
        this.isActiveImag = false;

        this.setLeftRightAvatar({
          idImage: idImage,
          statusNext: false,
          userId: userId,
        });
      }
    },

    nextImageRight(value, userId) {
      console.log(value);

      this.isActiveImag = false;

      const idImage = this.$store.state.userModule.urlAvatarUser.id;

      if (!idImage) {
        document.getElementById(0).classList.remove("active-image");
        document.getElementById(1).classList.add("active-image");
        this.setLeftRightAvatar({
          idImage: value[0].id,
          statusNext: true,
          userId: userId,
        });
      } else {
        if (document.getElementById(parseInt(idImage + 1)) !== null) {
          document.getElementById(idImage).classList.remove("active-image");

          document
            .getElementById(parseInt(idImage + 1))
            .classList.add("active-image");
          this.setLeftRightAvatar({
            idImage: idImage,
            statusNext: true,
            userId: userId,
          });
        }
      }
    },

    onDetailInfor(value) {
      console.log(value);
      this.$emit("onShowDetailUser", value);
    },
    onSubmit({ item }) {
      this.setUrlNameAvatarUser("");
      this.isActiveImag = true;

      this.history.push(item);
    },
    async decide(choice) {
      console.log(choice);
      if (choice === "rewind") {
        if (this.history.length) {
          this.$refs.tinder.rewind([this.history.pop()]);
        }
      } else if (choice === "help") {
        console.log("tính năng đang phát triển");
      } else {
        this.$refs.tinder.decide(choice);
      }
    },
  },

  mounted() {
    // const documentImage = document.getElementsByClassName("imageAvatar");
    // documentImage[0].classList.add("active-image");
    // documentImage[0].classList.remove("no-active");
  },
};
</script>

<style lang="css">
.vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  width: calc(100% - 20px);
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.icon-tinder {
  font-size: 30px;
  font-weight: 600;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  padding-left: 16px;
  padding-right: 16px;
}

.like-pointer {
  top: 87px;
  right: 15rem;
  color: #fd5d65;
  border: 4px solid #fd5d65;
  transform: rotate(-45deg);
}

.nope-pointer {
  top: 76px;
  left: 15rem;
  transform: rotate(45deg);
  color: #f92f2b;
  border: 4px solid #f92f2b;
}

.super-pointers {
  bottom: 80px;
  left: 7rem;
  right: 7rem;
  color: #01de9b;
  border: 4px solid #01de9b;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
}

.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
}

.body-page {
  background-repeat: no-repeat;
  background-size: cover;
}
.title-boy {
  grid-template-columns: 5fr 1fr;
}

.bt-img {
  width: 70px;
}

.bt-option {
  grid-template-columns: auto auto auto auto auto;
  gap: 35px;
}

.title-page {
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
  height: 24%;
}

.close-infor {
  position: absolute;
  top: -25px;
  right: 13px;
}
.like-count {
  position: absolute;
  top: 80px;
  right: 9px;
}

.title-body {
  border-bottom: 1px solid #373e50;
}

.bt-about {
  border: 1px solid white;
}

.grid-temlp {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-anthem {
  grid-template-columns: 3fr 1fr;
}

.tinder-card {
  width: 100% !important;
  background-color: #382e41 !important ;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 9%,
    rgba(255, 255, 255, 0) 41%
  );
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 355px;
  z-index: 9;
}

.btns img {
  margin-right: 0px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}

.active-image {
  background-color: white !important;
}

.no-active {
  background-color: #ffffff8f;
}

.h-complete {
  position: absolute;
  bottom: 0px;
  padding: 21px;
  font-size: 26px;
}
</style>
