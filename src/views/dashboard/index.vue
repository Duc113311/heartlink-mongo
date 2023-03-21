<template>
  <div class="home-page w-full h-full">
    <div class="w-full h-full home-page overflow-hidden p-2">
      <!-- Trang chủ -->

      <Header></Header>
      <div class="w-full body-page-home relative">
        <router-view />
      </div>
      <Footer v-if="!isShowDetail"></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/layout/footer-home/footer";
import Header from "../../components/layout/header-home/header";
export default {
  name: "dash-board",
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      isShowDetail: false,
    };
  },

  methods: {
    onHideHeader(val) {
      this.isHideHeader = val;
    },
  },

  mounted() {},
};
</script>

<style lang="css">
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

.body-page-home {
  height: 78%;
}
</style>
