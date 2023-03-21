<template>
  <div class="w-full h-full relative">
    <div class="w-full option-like flex h-20 items-center p-5">
      <div
        class="oftion-interests p-2 mr-3 w-10 h-10"
        slot="reference"
        @click="onShowFilterLike()"
      >
        <img src="@/assets/image-dating/ic_filter.svg" width="40" alt="" />
      </div>

      <div class="flex items-center w-80">
        <span v-for="(item, index) in listIntersts" :key="index">
          <button :id="index" class="oftion-interests mr-3 p-2" size="large">
            {{ item }}
          </button>
        </span>
      </div>
    </div>

    <div
      class="w-full flex items-center h-12 justify-center pr-4 pl-4 description-no-padding"
    >
      <span>Upgrade to Gold to see people who are interested in you</span>
    </div>
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
              <BhActivateLike></BhActivateLike>
              Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
      </div>
    </div>
    <div class="absolute w-full bottom-0 z-10 mb-14">
      <BhSeeLike></BhSeeLike>
    </div>

    <div
      class="form-filter absolute top-0 left-0 w-full p-5 z-40"
      v-show="isShowFilter"
    >
      <FilterOption @onHidePopupFilter="onHidePopupFilter"></FilterOption>
    </div>
  </div>
</template>

<script>
import FilterOption from "../filter/filter-option";
// import BhActivateLike from "../../bh-element-ui/button/bh-activateLike";
import BhSeeLike from "../../bh-element-ui/button/bh-seeLike";
export default {
  components: {
    FilterOption,
    // BhActivateLike,
    BhSeeLike,
  },
  name: "people-likes",

  data() {
    return {
      listIntersts: ["Reading", "Car", "Dog", "Reading"],
      visible: false,
      valueMaximum: 50,
      valueAge: [25, 45],
      valuePhoto: 10,
      isShowFilter: false,

      isShowMy: true,
      isNotShowMy: true,

      listDataInterests: [],

      listChossed: [
        {
          id: 0,
          name: "Profile with verified photo",
        },

        {
          id: 1,
          name: "Profile has Bio",
        },
      ],
    };
  },

  computed: {},

  methods: {
    onShowFilterLike() {
      this.isShowFilter = true;
    },
    onHidePopupFilter(val) {
      if (val) {
        // filter
        this.isShowFilter = false;
      } else {
        this.isShowFilter = false;
      }
    },

    onClickChosseVerified(val) {
      console.log(val);
    },

    onClickChosse(val) {
      console.log(val);
    },

    onActiveInterest(indexs, val) {
      console.log(val);
      const documentActive = document.getElementsByClassName("option-interest");

      const indexParam = this.listDataInterests.findIndex((x) => x === val);

      if (indexParam !== -1) {
        documentActive[indexs].classList.add("border-no-active");
        documentActive[indexs].classList.remove("border-active");

        const index = this.listDataInterests.indexOf(val);
        if (index > -1) {
          this.listDataInterests.splice(index, 1);
        }
      } else {
        documentActive[indexs].classList.add("border-active");
        documentActive[indexs].classList.remove("border-no-active");

        this.listDataInterests.push(val);
      }
    },
  },

  mounted() {},
};
</script>

<style lang="css">
.option-interest {
  border: 1.5px solid white;
  border-radius: 8px;
}

.option-like {
  align-items: revert;
}

.list-likes {
  grid-template-columns: 1fr 1fr;
}

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

.el-popover {
  width: 52% !important;
  height: 68% !important;
  top: 195px !important;
  left: 215px !important;
  background-color: #434a5d;
  border: none;
  border-radius: 10px;
}

.popper__arrow {
  display: none;
}

.not-show {
  display: none;
}

.showed {
  display: block;
}

.border-active {
  color: #fd5d65;
  border: 1.5px solid #fd5d65;
}
.border-no-active {
  color: white;
  border: 1.5px solid #ffffff;
}

.fa-circle-check {
  color: #fd5d65;
}

.bg-checked {
  background-color: white;
  border-radius: 20px;
}

.fa-circle {
  color: #b8bbca;
}

.border-active {
  border: 1.5px solid #fd5d65;
}

.not-border {
  border: none;
}

.fa-circle::before {
  font-size: 32px;
}

.fa-circle-check::before {
  font-size: 33px;
}

.form-filter {
  background-color: none;
  height: 63vh;
}

.oftion-interests:hover {
  background-color: #5b566b;
  color: white;
  border: 1.5px solid white;
}

.oftion-interests {
  border: 1.5px solid white;
  border-radius: 8px;
}
</style>
