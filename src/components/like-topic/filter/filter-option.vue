<template>
  <div class="w-full form-filter-detail h-full p-5 rounded-lg">
    <div class="relative w-full h-full">
      <div class="padding-title w-full">Filter</div>

      <div class="w-full">
        <div class="w-full">
          <div class="flex justify-between items-center padding-describe">
            <div>Maximum distance</div>
            <div
              v-bind:class="[
                isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
              ]"
            >
              {{ valueMaximum }}km+
            </div>
          </div>
          <div class="w-full">
            <el-slider v-model="valueMaximum"></el-slider>
          </div>
        </div>
        <div class="w-full">
          <div class="flex justify-between items-center padding-describe">
            <div>Age range</div>
            <div
              v-bind:class="[
                isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
              ]"
            >
              25 - 45
            </div>
          </div>
          <div class="w-full">
            <el-slider v-model="valueAge" range :marks="marks"></el-slider>
          </div>
        </div>
        <div class="w-full">
          <div class="flex justify-between items-center padding-describe">
            <div>Maximum number of photos</div>
          </div>
          <div class="w-full">
            <el-slider :step="10" v-model="valuePhoto"></el-slider>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="w-full padding-describe">Interests</div>

        <div class="w-full">
          <span v-for="(item, index) in listIntersts" :key="index">
            <button
              :id="index"
              class="option-interest mr-3 mb-3 p-2 text-white"
              :ref="item"
              size="large"
              @click="onActiveInterest(index, item)"
            >
              {{ item }}
            </button>
          </span>
        </div>

        <div class="w-full padding-describe">See all</div>
      </div>

      <div class="w-full">
        <div class="flex items-center w-full p-3">
          <div class="flex justify-center items-center">
            <div
              :class="isShowMy ? 'not-show' : 'showed'"
              @click="onClickChosseVerified(true)"
            >
              <div class="bg-white flex justify-center bg-checked">
                <i class="fa-solid fa-circle-check w-8 h-8"></i>
              </div>
            </div>
            <div
              :class="isNotShowMy ? 'showed' : 'not-show'"
              @click="onClickChosseVerified(false)"
            >
              <div class="flex justify-center">
                <i class="fa-regular fa-circle w-8 h-8"></i>
              </div>
            </div>
          </div>
          <div class="ml-3 text-lg">Profile with verified photo</div>
        </div>
        <div class="flex items-center w-full p-3">
          <div class="flex justify-center items-center">
            <div
              :class="isShowMy ? 'not-show' : 'showed'"
              @click="onClickChosse(true)"
            >
              <div class="bg-white flex justify-center bg-checked">
                <i class="fa-solid fa-circle-check w-8 h-8"></i>
              </div>
            </div>
            <div
              :class="isNotShowMy ? 'showed' : 'not-show'"
              @click="onClickChosse(false)"
            >
              <div class="flex justify-center">
                <i class="fa-regular fa-circle w-8 h-8"></i>
              </div>
            </div>
          </div>
          <div class="ml-3 text-lg">Profile has Bio</div>
        </div>
      </div>

      <div
        class="flex justify-center items-center absolute bottom-0 left-0 w-full"
      >
        <div
          @click="onActionFilter(false)"
          class="w-32 mr-5 cursor-pointer bg-button-clear rounded-xl p-3 text-center justify-center flex"
        >
          Clear
        </div>
        <div
          @click="onActionFilter(true)"
          class="w-32 ml-5 bg-button-active cursor-pointer rounded-xl p-3 text-center justify-center flex"
        >
          Apply
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-option",

  data() {
    return {
      valueMaximum: 50,
      valueAge: [25, 45],
      valuePhoto: 10,

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

      listIntersts: [
        "Try new things",
        "Art Galleries",
        "Reading",
        "Cars",
        "Watchers",
      ],
    };
  },

  methods: {
    onActionFilter(val) {
      this.$emit("onHidePopupFilter", val);
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

  computed: {},

  mounted() {},

  created() {},
};
</script>

<style lang="css">
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

.form-filter-detail {
  background-color: #434a5d;
  border-radius: 12px;
}
</style>
