<template>
  <div>
    <div class="mt-10">
      <div class="padding-title">My interests are</div>
      <span
        class="padding-describe"
        v-bind:class="[
          isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
        ]"
        >Let everyone know what you're passionate about, by adding it to your
        profile</span
      >
    </div>
    <div class="w-full mt-4 overflow-y-auto list-interest">
      <div class="w-full h-full">
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
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "my-interests",
  setup() {
    return;
  },
  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    ...mapState(["interests", "listInterests"]),
    listDataInterests() {
      return this.$store.state.userModule.listInterests;
    },

    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
    ...mapActions(["getListDataInterests"]),
    ...mapMutations(["setInterest", "setShowProfileCreate"]),
    onSelectInterest(val) {
      // document.querySelector("oftion-interests")
      this.setInterest(val);
      const interestsData = this.$store.state.userModule.user_profile.interests;

      if (this.$store.state.userModule.isActiveId) {
        document.getElementById(val).classList.add("bg-active");
        if (interestsData.length < 5) {
          this.$emit("onStatusActive", false);
        } else {
          this.$emit("onStatusActive", true);
        }
      } else {
        document.getElementById(val).classList.remove("bg-active");
        if (interestsData.length < 5) {
          this.$emit("onStatusActive", false);
        }
      }
    },
  },

  mounted() {
    const interestsData = this.$store.state.userModule.user_profile.interests;
    this.setShowProfileCreate({
      isShowProfile: true,
      isNotShowProfile: true,
    });
    this.$emit("onShowSkips", true);
    this.$emit("onShowName", { showCheckbox: false });
    for (let index = 0; index < interestsData.length; index++) {
      const element = interestsData[index];
      document.getElementById(element).classList.add("bg-active");
    }
    if (interestsData.length < 5) {
      this.$emit("onStatusActive", false);
    } else {
      this.$emit("onStatusActive", true);
    }
  },
};
</script>

<style lang="css">
.oftion-interests {
  border: 1.5px solid white;
  border-radius: 8px;
  cursor: pointer;
}
.bg-active {
  border: 1.5px solid #f65a62;
  color: #f65a62;
}

.list-interest {
  height: calc(100vh - 386px);
}
.list-interest::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.list-interest {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
