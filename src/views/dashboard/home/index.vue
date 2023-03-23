<template>
  <div class="w-full h-full">
    <ViewSwipe></ViewSwipe>

    <ActionDating></ActionDating>
  </div>
</template>

<script>
import ActionDating from "../../../components/home/btn-function/action-dating";
import ViewSwipe from "../../../components/home/swipe-tinder/view-swipe";

import { mapActions } from "vuex";

export default {
  components: {
    ActionDating,
    ViewSwipe,
  },
  name: "home-news",

  data() {
    return {};
  },

  methods: {
    ...mapActions(["getAllListUserProfile"]),
  },

  async created() {
    const paramUser = {
      userId: "CoSfrEMLItUG2lvJWWfZGqPm3VU2",
      latitude: 21.0058814,
      longitude: 105.7948012,
      page: 6,
      pageNumber: 20,
      startAge: 18,
      endAge: 55,
      showMeGender: 2,
      location: 80,
    };
    await this.getAllListUserProfile(paramUser);
  },

  mounted() {},
};
</script>

<style lang="css"></style>
