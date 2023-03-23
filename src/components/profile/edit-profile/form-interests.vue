<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full"></div>
    <div
      class="w-full h-full flex justify-center items-center absolute top-0 left-0"
    >
      <div class="rounded-lg items-center w-form-life relative">
        <div
          class="w-full justify-between flex items-center pl-5 pr-5 h-title-close"
        >
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveInterest()">
            <i class="fa-solid fa-check size-icon-default"></i>
          </div>
        </div>

        <div class="w-full flex justify-center items-center h-form-data">
          <div class="w-full items-center h-full pl-4 pr-4 pb-4">
            <div class="flex w-full justify-between items-center h-12 mb-2">
              <div class="padding-title">Interest</div>
              <div class="padding-describe-item">5 out of 5</div>
            </div>
            <!-- Những thứ đã chọn -->

            <div class="w-full h-12 mb-2">
              <div class="w-full">
                <span v-for="(item, index) in listDataChecked" :key="index">
                  <button
                    @click="onSelectInterest(index)"
                    :id="index"
                    class="border-interest-checked pr-3 mr-2 p-2"
                    size="large"
                  >
                    {{ item }}

                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </span>
              </div>
            </div>

            <!-- Tìm kiếm -->
            <div class="w-full h-12 mb-2">
              <div class="w-full">
                <el-autocomplete
                  v-model="state"
                  class="w-full"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="Enter search interest"
                  @select="handleSelect"
                ></el-autocomplete>
              </div>
            </div>

            <!-- Danh sách sở thich -->

            <div
              class="w-full h-full list-interest mt-5 height-scroll overflow-scroll"
            >
              <span v-for="(item, index) in listDataInterests" :key="index">
                <button
                  @click="onSelectInterest(index)"
                  :id="index"
                  class="oftion-interests mr-3 mb-3 p-3 text-white"
                  size="large"
                >
                  {{ item }}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "form-interests",

  data() {
    return {
      links: [],
      state: "",
      timeout: null,
    };
  },

  computed: {
    listDataChecked() {
      return ["Dancing", "Singing", "Ballet", "BBQ"];
    },
    listDataInterests() {
      return this.$store.state.userModule.listInterests;
    },
  },

  methods: {
    ...mapActions(["getListDataInterests"]),
    onChangeCancel() {
      this.$emit("onClickHideInterest", true);
    },

    onChangeSaveInterest() {
      this.$emit("onClickSaveInterest", true);
    },
    loadAll() {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" },
      ];
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createFilter(queryString) {
      return (link) => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },

  async created() {
    await this.getListDataInterests({
      entityName: "interests",
      entityId: "en",
    });
  },

  mounted() {
    this.links = this.loadAll();

    const interestsData = this.$store.state.userModule.user_profile.interests;
    for (let index = 0; index < interestsData.length; index++) {
      const element = interestsData[index];
      document.getElementById(element).classList.add("bg-active");
    }
  },
};
</script>

<style lang="css">
.list-interest {
  height: calc(100% - 13rem);
}
</style>
