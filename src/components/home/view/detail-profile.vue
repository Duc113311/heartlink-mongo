<template>
  <div class="w-full h-full relative">
    <div class="detail-page w-full h-full relative">
      <div class="bg-image-detail h-2/4">
        <div class="avatar w-full h-full relative">
          <div
            class="avatar-url z-8"
            :style="{
              'background-image': `url(${idImage})`,
            }"
          />
          <div
            class="flex w-full justify-center absolute top-0 content-center p-0.5 border-solid mt-3"
          >
            <button
              v-for="data in this.userParam.avatars"
              :key="data.id"
              :id="`detail${data.id}`"
              :class="data.id === 0 ? 'active-image' : 'no-active'"
              class="bt-img imageAvatar p-0.5 rounded-lg mr-0.5 no-active"
              @click="onClickNextImage(data)"
            ></button>
          </div>
          <div class="w-full flex bg-opacity absolute top-0 opacity-0 h-full">
            <div class="w-2/4 bg-slate-500" @click="nextImageLeft()"></div>
            <div class="w-2/4 bg-orange-200" @click="nextImageRight()"></div>
          </div>
        </div>
        <div
          class="icon-close-infor cursor-pointer absolute right-4"
          @click="onClickHideProfile()"
        >
          <img src="@/assets/icon/bt_close_infor.svg" class="w-16" />
        </div>
      </div>
      <div class="h-2/4 w-full">
        <div class="w-full p-2">
          <div class="flex bh-margin-title">
            <div class="title-user">
              {{ this.userParam.firstName
              }}<span>, {{ this.userParam.age }}</span>
            </div>
            <img src="@/assets/icon/ic_infor.svg" width="30" alt="" />
          </div>
          <div class="describe-user bh-margin-description">
            {{ this.userParam.about }}
          </div>
          <div class="flex bh-margin-description">
            <img src="@/assets/icon/ic_location.svg" alt="" />
            <span>{{ this.userParam.location }} km away</span>
          </div>
        </div>
        <BhHorizontalLine></BhHorizontalLine>
        <!-- About me -->
        <div class="p-2">
          <div class="title title-description">About me</div>
          <div class="text-description">
            {{ this.userParam.about }}
          </div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option cursor-pointer"
              v-for="item in this.userParam.sexuals"
              :key="item"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <!-- Interests -->
        <BhHorizontalLine></BhHorizontalLine>

        <div class="p-2">
          <div class="title title-description">Interests</div>

          <div class="w-full bh-margin-description">
            <div
              class="item-option"
              v-for="item in this.userParam.interests"
              :key="item"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <BhHorizontalLine></BhHorizontalLine>

        <!-- <div class="w-full p-2">
          <div class="title title-description">My Anthem</div>
          <div class="flex w-full">
            <div class="w-2/3 bh-margin-description">
              All too well (Taylor's Version)
            </div>
            <div class="w-1/3"></div>
          </div>
        </div> -->
        <div class="items-center h-14 bh-margin-title">
          <div class="flex justify-center items-center">
            <i class="fa-regular fa-share-from-square"></i>
            <div class="text-description-no-padding ml-2">
              SHARE NGOC TRINH'S PROFILE
            </div>
          </div>
          <div class="flex justify-center mt-2 title-description-no-padding">
            SEE WHAT A FRIEND THINKS
          </div>
        </div>
        <BhHorizontalLine></BhHorizontalLine>
        <!-- Report -->
        <div class="flex h-12 w-full justify-center items-center">
          <div class="text-description-no-padding">REPORT NGOC TRINH</div>
        </div>
        <BhHorizontalLine></BhHorizontalLine>
        <div class="h-2/4"></div>
      </div>
    </div>
    <div class="absolute bt-like-count right-4">
      <div class="number-like absolute">{{ this.userParam.complete }}</div>
      <img
        src="@/assets/icon/bt_like_count.svg"
        class="w-20"
        alt=""
        srcset=""
      />
    </div>
    <div
      class="w-full h-24 flex justify-center items-center absolute bottom-16 cursor-pointer"
    >
      <div @click="onClickNope()">
        <img src="@/assets/icon/bt_nope.svg" class="w-20" alt="" srcset="" />
      </div>
      <div @click="onClickSupperLike()">
        <img
          src="@/assets/icon/bt_super_like.svg"
          class="w-20"
          alt=""
          srcset=""
        />
      </div>
      <div @click="onClickLike()">
        <img src="@/assets/icon/bt_like.svg" alt="" class="w-20" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import BhHorizontalLine from "../../bh-element-ui/input/bh-horizontal-line";
export default {
  components: { BhHorizontalLine },
  name: "detail-profile",

  data() {
    return {
      btUrlImage: [
        {
          id: 1,
          urlName: "ssd",
        },
        {
          id: 2,
          urlName: "ssd",
        },
        {
          id: 3,
          urlName: "ssd",
        },
        {
          id: 4,
          urlName: "ssd",
        },
        {
          id: 5,
          urlName: "ssd",
        },
        {
          id: 6,
          urlName: "ssd",
        },
        {
          id: 7,
          urlName: "ssd",
        },
        {
          id: 8,
          urlName: "ssd",
        },
        {
          id: 9,
          urlName: "ssd",
        },
      ],

      // idImage: require("../../../assets/image-dating/0659_photo-1-163186806531842640671.jpg"),
    };
  },

  computed: {
    ...mapState(["userProfileDetail"]),

    idImage() {
      debugger;
      return this.$store.state.userModule.urlAvatarUser.urlName;
    },
    userParam() {
      return this.$store.state.userModule.userProfileDetail;
    },
  },

  methods: {
    ...mapMutations(["setUrlNameAvatarUser", "setLeftRighAvatar"]),
    onClickNope() {
      this.$emit("onClickNopeDetail", false);
    },

    nextImageLeft() {
      const idImage = this.$store.state.userModule.urlAvatarUser.id;
      debugger;
      console.log(idImage);
      if (
        document.getElementById("detail" + `${parseInt(idImage) - 1}`) !== null
      ) {
        document
          .getElementById("detail" + `${parseInt(idImage)}`)
          .classList.remove("active-image");
        document
          .getElementById("detail" + `${parseInt(idImage) - 1}`)
          .classList.add("active-image");
        this.setLeftRighAvatar(false);
      }
    },

    nextImageRight() {
      debugger;
      const idImage = this.$store.state.userModule.urlAvatarUser.id;
      debugger;
      console.log(idImage);
      if (
        document.getElementById("detail" + `${parseInt(idImage) + 1}`) !== null
      ) {
        document
          .getElementById("detail" + `${parseInt(idImage)}`)
          .classList.remove("active-image");
        document
          .getElementById("detail" + `${parseInt(idImage) + 1}`)
          .classList.add("active-image");
        this.setLeftRighAvatar(true);
      }
    },

    onClickSupperLike() {},

    onClickLike() {},

    onClickNextImage(val) {
      console.log(val);
      this.setUrlNameAvatarUser(val);
    },

    onClickHideProfile() {
      this.$emit("onHideProfile", false);
    },
  },
};
</script>

<style lang="css">
.detail-page {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
}

.avatar-url {
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-position: 0px -39px;
  background-size: cover;
  border-radius: 10px;
}

.detail-page::-webkit-scrollbar {
  display: none;
}

.mb-descript {
  border-top: 2px solid #353b4b;
}

.bt-like-count {
  top: 60%;
}

.number-like {
  padding: 10px 19px;
  font-size: 32px;
}

.active-image {
  background-color: white !important;
}

.no-active {
  background-color: #ffffff8f;
}
</style>
