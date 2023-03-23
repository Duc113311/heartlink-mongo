<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <button
      class="text-white w-full p-5 color-bt-cancel flex justify-center items-center"
      @click="onClickNoThanks()"
    >
      {{ renderName }}
    </button>
  </div>
</template>

<script>
export default {
  name: "bh-nothank",

  props: ["nameTitle"],

  data() {
    return {};
  },

  computed: {
    renderName() {
      return this.nameTitle;
    },
  },

  methods: {
    onClickNoThanks() {},
  },
};
</script>

<style lang="css">
.color-bt-cancel {
  height: 60px;
  border-radius: 12px;
  font-size: 22px !important;
}

.color-bt-cancel:hover {
  background-color: rgb(18, 15, 29);
}
</style>
