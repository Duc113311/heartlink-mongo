<template>
  <div
    class="w-full bottom-0 right-0 footer-body flex justify-center content-center text-center cursor-pointer"
  >
    <div @click="onClickHome()">
      <i class="fa-solid fa-heart icon-color"></i>
    </div>
    <div @click="onClickExplore()">
      <i class="fa-solid fa-magnifying-glass icon-color"></i>
    </div>
    <div @click="onClickLikeTopic()">
      <i class="fa-solid fa-hand-holding-heart icon-color"></i>
    </div>
    <div @click="onClickMessage()">
      <i class="fa-solid fa-message icon-color"></i>
    </div>
    <div @click="onClickProfile()">
      <i class="fa-solid fa-user icon-color"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-page",

  setup() {
    return;
  },

  data() {
    return {};
  },

  computed: {
    isActiveFooter() {
      return true;
    },
  },

  methods: {
    onClickHome() {
      this.$router.push({ path: "/home-new" });
    },

    onClickExplore() {
      this.$router.push({ path: "/explore-new" });
    },

    onClickLikeTopic() {
      this.$router.push({
        path: "/like-topic-news",
      });
    },

    onClickMessage() {
      this.$router.push({ path: "/message-new" });
    },

    onClickProfile() {
      this.$router.push({ path: "/setting" });
    },
  },

  mounted() {
    if (this.$route.name === "home-page") {
      document
        .getElementsByClassName("fa-heart")[0]
        .classList.add("icon-active");
    }
    if (this.$route.name === "explore-news") {
      document
        .getElementsByClassName("fa-magnifying-glass")[0]
        .classList.add("icon-active");
    }
    if (this.$route.name === "like-topic-news") {
      document
        .getElementsByClassName("fa-hand-holding-heart")[0]
        .classList.add("icon-active");
    }
    if (this.$route.name === "message-new") {
      document
        .getElementsByClassName("fa-message")[0]
        .classList.add("icon-active");
    }
    if (
      this.$route.name === "setting-page" ||
      this.$route.name === "setting-detail" ||
      this.$route.name === "edit-profile"
    ) {
      document
        .getElementsByClassName("fa-user")[0]
        .classList.add("icon-active");
    }
  },
};
</script>

<style lang="css">
.footer-body {
  height: calc(100% - 90%);
  justify-content: center;
  align-items: center;
  border-top: 1px solid #373e50;
  margin-top: 10px;
  position: absolute;
  background-color: #382e41;
  bottom: 0;
}
.icon-color {
  color: #5f6a86;
}
.icon-active {
  color: #fd5d65;
}
</style>
