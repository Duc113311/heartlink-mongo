<template>
  <div class="w-full h-full relative">
    <div class="w-full p-5">Recently Active</div>
    <div class="w-full p-3 h-likes">
      <div class="items-center list-likes grid h-full">
        <div class="item-user m-3 relative overflow-hidden">
          <div class="image absolute bottom-0 w-full p-4 z-10 text-white">
            <div class="name">Kiều Kiều , <span>18</span></div>
            <div class="flex padding-describe">
              <BhActivateLike></BhActivateLike>
              Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
        <div class="item-user m-3 relative overflow-hidden">
          <div class="image absolute bottom-0 w-full p-4 z-10 text-white">
            <div class="name">Thu Anh , <span>22</span></div>
            <div class="flex padding-describe">
              <BhActivateLike></BhActivateLike>
              Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
        <div class="item-user m-3 relative overflow-hidden">
          <div class="image absolute bottom-0 w-full p-4 z-10 text-white">
            <div class="name">Trang Hà , <span>25</span></div>
            <div class="flex padding-describe">
              <BhActivateLike></BhActivateLike>
              Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
        <div class="item-user m-3 relative overflow-hidden">
          <div class="image absolute bottom-0 w-full p-4 z-10 text-white">
            <div class="name">Trang Hà , <span>25</span></div>
            <div class="flex padding-describe">
              <BhActivateLike></BhActivateLike>Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhActivateLike from "@/components/bh-element-ui/button/bh-activateLike.vue";

BhActivateLike;
export default {
  name: "like-for-you",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css">
.item-user {
  width: 90%;
  border-radius: 10px;
  background-image: url("../../../assets/image-dating/uikoria.jpg");
  background-position: center;
  background-size: cover;
}

.bg-shadow {
  background-image: url("../../../assets/image-dating/84x106_5026f25d-07a8-41fa-9ce7-43f80d55a42e.jpg");
  background-position: 50% 100%;
  background-size: auto 100.952%;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(0 0 0 / 85%) 9%,
    rgb(254 254 254 / 0%) 29%,
    rgb(255 255 255 / 0%) 99%
  );
}
</style>
