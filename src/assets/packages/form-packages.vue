<template>
  <div class="w-full size-package">
    <!-- slider -->
    <div class="w-full h-2/4">
      <!-- slider 1 -->
      <div class="w-full">
        <div class="padding-describe">Get Platinum package</div>
        <div class="image w-full flex justify-center items-center">
          <img
            src="@/assets/icon/ic_choose_people_dialog.svg"
            width="100"
            alt=""
          />
        </div>
        <div class="text-center w-full">
          <div class="w-full">Prioritized Likes</div>
          <div class="w-full">Everyone you like will see you soon</div>
        </div>
      </div>
    </div>

    <div class="h-2/4 w-full">
      <div>
        <div>
          <div class="w-full p-3">
            <div class="w-full">
              <div>1</div>
              <div>months</div>
            </div>
            <div class="w-full">
              <div>11.99</div>
              <div>USD/Months</div>
            </div>
          </div>
          <div class="">MOST POPUPLAR</div>
        </div>
      </div>
      <div class="w-full">
        <BhComfirm></BhComfirm>
      </div>
      <div class="w-full flex justify-center items-center text-center">
        Recuring billing, cancel anytime
      </div>
    </div>
  </div>
</template>

<script>
import BhComfirm from "../../components/bh-element-ui/button/bh-comfirm";
export default {
  components: { BhComfirm },
  name: "form-packages",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css"></style>
