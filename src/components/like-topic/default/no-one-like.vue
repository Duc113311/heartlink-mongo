<template>
  <div class="w-full h-full relative">
    <div
      class="w-full flex items-center h-14 justify-center p-4 mt-3 description-no-padding"
    >
      <span>Upgrade to Gold to see people who are interested in you</span>
    </div>

    <div class="w-full mt-28 flex justify-center items-center">
      <div class="w-full items-center text-center p-5">
        <div class="flex justify-center items-center mb-9">
          <img
            src="@/assets/image-dating/art_top_pick.svg"
            width="250"
            alt=""
          />
        </div>
        <div class="w-full items-center text-describe">
          No one likes you yet. Done't worry, make sure you complete your
          profile to other find you faster
        </div>
      </div>
    </div>
    <div class="absolute w-full bottom-0 z-10 mb-14">
      <BhSeeLike></BhSeeLike>
    </div>
  </div>
</template>

<script>
import BhSeeLike from "../../bh-element-ui/button/bh-seeLike";
export default {
  components: { BhSeeLike },
  name: "no-one-like",

  data() {
    return {};
  },
};
</script>

<style lang="css"></style>
