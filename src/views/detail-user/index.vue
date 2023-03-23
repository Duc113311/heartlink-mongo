<template>
  <div class="home-page w-full h-full">
    <div class="w-full h-full home-page overflow-hidden p-2">
      <Header></Header>

      <div class="w-full body-page-detail relative">
        <!--  -->
        <DetailProfile></DetailProfile>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import DetailProfile from "../../components/home/view/detail-profile";
import Header from "../../components/layout/header-home/header";
export default {
  components: {
    DetailProfile,
    Header,
  },
  name: "detail-user",

  data() {
    return {
      //
      urlImage: require("../../assets/image-dating/0659_photo-1-163186806531842640671.jpg"),
      listUserData: {
        firstName: "Lee min ho",
        interest: [
          {
            id: 1,
            name: "Horror movie",
          },
          {
            id: 2,
            name: "Swimming",
          },
          {
            id: 3,
            name: "Reading",
          },
        ],
      },
    };
  },

  methods: {},
};
</script>

<style lang="css">
.home-page {
  background-color: #382e41;
}

.body-page-detail {
  height: calc(100% - 10%);
}

.body-preview {
  height: 50%;
}
</style>
