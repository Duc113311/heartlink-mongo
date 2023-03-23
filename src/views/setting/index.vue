<template>
  <div class="w-full h-full relative setting-pages">
    <div class="height-setting p-3">
      <!-- package -->

      <div class="w-full gold-package overflow-scroll">
        <div class="border-package">
          <carousel
            :per-page="1"
            :mouse-drag="true"
            :autoplay="true"
            :paginationActiveColor="isColorActive"
            :paginationColor="isColor"
          >
            <slide
              data-index="0"
              data-name="MySlideName"
              @slideclick="handleSlideClick"
            >
              <div
                class="w-full flex justify-center text-center mb-2 dash-packages"
              >
                <div class="item-package bg-slate-900">
                  <div class="flex justify-center">
                    <img
                      src="@/assets/icon/package/ic_platium_package.svg"
                      alt=""
                    />
                  </div>
                  <div class="mt-2 text-xl">Platinum package</div>
                  <div class="mt-2 text-sm">
                    Level up everyone action you take on HeartLink
                  </div>
                </div>
              </div>
            </slide>
            <slide
              ><div
                class="w-full flex justify-center text-center mb-2 dash-packages"
              >
                <div class="item-package bg-amber-300">
                  <div class="flex justify-center">
                    <img
                      src="@/assets/icon/package/ic_gold_package.svg"
                      alt=""
                    />
                  </div>
                  <div class="mt-2 text-xl">Gold package</div>
                  <div class="mt-2 text-sm">
                    Level up everyone action you take on HeartLink
                  </div>
                </div>
              </div></slide
            >

            <slide>
              <div
                class="w-full flex justify-center text-center mb-2 dash-packages"
              >
                <div class="item-package bg-blue-400">
                  <div class="flex justify-center">
                    <img
                      src="@/assets/icon/package/ic_gold_package.svg"
                      alt=""
                    />
                  </div>
                  <div class="mt-2 text-xl">Gold package</div>
                  <div class="mt-2 text-sm">
                    Level up everyone action you take on HeartLink
                  </div>
                </div>
              </div></slide
            >
            <slide>
              <div
                class="w-full flex justify-center text-center mb-2 dash-packages"
              >
                <div class="item-package bg-zinc-400">
                  <div class="flex justify-center">
                    <img
                      src="@/assets/icon/package/ic_silver_package.svg"
                      alt=""
                    />
                  </div>
                  <div class="mt-2 text-xl">Silver package</div>
                  <div class="mt-2 text-sm">
                    Level up everyone action you take on HeartLink
                  </div>
                </div>
              </div></slide
            >
            <slide>
              <div
                class="w-full flex justify-center text-center mb-2 dash-packages"
              >
                <div class="item-package bg-orange-500">
                  <div class="flex justify-center">
                    <img src="@/assets/icon/package/ic_super_like.svg" alt="" />
                  </div>
                  <div class="mt-2 text-xl">Get Supper Like</div>
                  <div class="mt-2 text-sm">
                    Level up everyone action you take on HeartLink
                  </div>
                </div>
              </div></slide
            >
            <slide
              ><div
                class="w-full flex justify-center text-center mb-2 dash-packages"
              >
                <div class="item-package bg-yellow-500">
                  <div class="flex justify-center">
                    <img src="@/assets/icon/package/ic_boost.svg" alt="" />
                  </div>
                  <div class="mt-2 text-xl">Get Boost Profile</div>
                  <div class="mt-2 text-sm">
                    Level up everyone action you take on HeartLink
                  </div>
                </div>
              </div></slide
            >
            <slide
              ><div
                class="w-full flex justify-center text-center mb-2 dash-packages"
              >
                <div class="item-package bg-teal-400">
                  <div class="flex justify-center">
                    <img
                      src="@/assets/icon/package/ic_read_receipts.svg"
                      alt=""
                    />
                  </div>
                  <div class="mt-2 text-xl">Get Read Receipts</div>
                  <div class="mt-2 text-sm">
                    Level up everyone action you take on HeartLink
                  </div>
                </div>
              </div></slide
            >
          </carousel>
        </div>
      </div>

      <!-- <div class="w-full gold-package overflow-scroll">
        <carousel :per-page="1" :mouse-drag="true" :autoplay="true">
          <slide
            data-index="0"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
          >
            <div
              class="w-full flex justify-center text-center mb-2 dash-packages"
            >
              <div class="item-package bg-slate-900">
                <div class="flex justify-center">
                  <img
                    src="@/assets/icon/package/ic_platium_package.svg"
                    alt=""
                  />
                </div>
                <div class="mt-2">Platinum package</div>
                <div class="mt-2">
                  Level up everyone action you take on HeartLink
                </div>
              </div>
            </div>
          </slide>
          <slide
            ><div
              class="w-full flex justify-center text-center mb-2 dash-packages"
            >
              <div class="item-package bg-amber-300">
                <div class="flex justify-center">
                  <img src="@/assets/icon/package/ic_gold_package.svg" alt="" />
                </div>
                <div class="mt-2">Gold package</div>
                <div class="mt-2">
                  Level up everyone action you take on HeartLink
                </div>
              </div>
            </div></slide
          >

          <slide>
            <div
              class="w-full flex justify-center text-center mb-2 dash-packages"
            >
              <div class="item-package bg-blue-400">
                <div class="flex justify-center">
                  <img src="@/assets/icon/package/ic_gold_package.svg" alt="" />
                </div>
                <div class="mt-2">Gold package</div>
                <div class="mt-2">
                  Level up everyone action you take on HeartLink
                </div>
              </div>
            </div></slide
          >
          <slide>
            <div
              class="w-full flex justify-center text-center mb-2 dash-packages"
            >
              <div class="item-package bg-zinc-400">
                <div class="flex justify-center">
                  <img
                    src="@/assets/icon/package/ic_silver_package.svg"
                    alt=""
                  />
                </div>
                <div class="mt-2">Silver package</div>
                <div class="mt-2">
                  Level up everyone action you take on HeartLink
                </div>
              </div>
            </div></slide
          >
          <slide>
            <div
              class="w-full flex justify-center text-center mb-2 dash-packages"
            >
              <div class="item-package bg-orange-500">
                <div class="flex justify-center">
                  <img src="@/assets/icon/package/ic_super_like.svg" alt="" />
                </div>
                <div class="mt-2">Get Supper Like</div>
                <div class="mt-2">
                  Level up everyone action you take on HeartLink
                </div>
              </div>
            </div></slide
          >
          <slide
            ><div
              class="w-full flex justify-center text-center mb-2 dash-packages"
            >
              <div class="item-package bg-yellow-500">
                <div class="flex justify-center">
                  <img src="@/assets/icon/package/ic_boost.svg" alt="" />
                </div>
                <div class="mt-2">Get Boost Profile</div>
                <div class="mt-2">
                  Level up everyone action you take on HeartLink
                </div>
              </div>
            </div></slide
          >
          <slide
            ><div
              class="w-full flex justify-center text-center mb-2 dash-packages"
            >
              <div class="item-package bg-teal-400">
                <div class="flex justify-center">
                  <img
                    src="@/assets/icon/package/ic_read_receipts.svg"
                    alt=""
                  />
                </div>
                <div class="mt-2">Get Read Receipts</div>
                <div class="mt-2">
                  Level up everyone action you take on HeartLink
                </div>
              </div>
            </div></slide
          >
        </carousel>
      </div> -->

      <!-- avatar -->
      <div class="flex h-96 justify-center items-center">
        <div>
          <div class="w-full image-profiles">
            <div class="relative flex justify-center text-center">
              <div class="border-avatar">
                <div class="image-avatar"></div>
              </div>
              <div class="absolute bottom-0 complete">100% complete</div>
            </div>
          </div>
          <div class="flex justify-center text-2xl text-white mt-3">
            Alex Ng, 25
            <img src="@/assets/icon/ic_verified_enable.svg" width="30" alt="" />
          </div>
        </div>
      </div>
      <!-- Option chose -->
      <div class="w-full option-setting flex items-center text-white">
        <div class="item-setting">
          <div class="flex justify-center" @click="onClickSettingDetail()">
            <img src="@/assets/icon/bt_settings.svg" width="100" alt="" />
          </div>
          <div class="mt-2 text-base">SETTINGS</div>
        </div>
        <div class="item-setting mt-24">
          <div class="flex justify-center" @click="onEditProfile()">
            <img src="@/assets/icon/bt_edit_profile.svg" width="100" alt="" />
          </div>
          <div class="mt-2 text-base">EDIT PROFILE</div>
        </div>
        <div class="item-setting">
          <div class="flex justify-center">
            <img src="@/assets/icon/bt_safety.svg" width="100" />
          </div>
          <div class="mt-2 text-base">SAFETY</div>
        </div>
      </div>
    </div>

    <!-- <div class="absolute top-0 left-0 form-pack">
      <FormPackages></FormPackages>
    </div> -->

    <div class="w-full">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// import FormPackages from "../../assets/packages/form-packages";
import { Carousel, Slide } from "vue-carousel";

import Footer from "../../components/layout/footer-home/footer";
export default {
  components: {
    // FormPackages,
    Footer,
    Carousel,
    Slide,
  },
  name: "setting-page",

  data() {
    return {
      isColor: "#7E7E7E",
      isColorActive: "#ffffff",
    };
  },

  methods: {
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name);
    },

    // Show Setting
    onClickSettingDetail() {
      this.$router.push({ path: "/setting-detail" });
    },

    // Show Edit
    onEditProfile() {
      this.$router.push({ path: "/edit-profile/1213231" });
    },
  },
};
</script>

<style lang="css">
.setting-pages {
  background-color: #382e41;
}

.height-setting {
  height: 90%;
}

.gold-package {
  border-radius: 10px;
  height: 27%;
}
.image-profiles {
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.border-avatar {
  width: 260px;
  height: 260px;
  overflow: hidden;
  padding: 10px;
  border: 5px solid #fa5c60;
  display: flex;
  justify-content: center;
  border-radius: 144px;
}

.option-setting {
  height: calc(100% - 80%);
  justify-content: center;
  align-items: center;
  text-align: center;
}

.image-avatar {
  background-image: url("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg");
  background-position: center;
  background-size: cover;
  width: 240px;
  height: 231px;
  border-radius: 140px;
}

.complete {
  width: 70%;
  text-align: center;
  padding: 10px;
  background-color: #fa5c60;
  border-radius: 10px;
  color: #ffffff;
}

.item-package {
  padding: 20px;
  width: 100%;
  color: white;
  height: 100%;
}

.gold-package {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.gold-package::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.dash-packages {
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 40px;
}

.border-package {
  width: 100%;
  height: 200px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.VueCarousel-dot {
  padding: 5px !important;
  width: 8px !important;
  height: 8px !important;
}
</style>
