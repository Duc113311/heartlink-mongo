<template>
  <div class="w-full h-full">
    <div class="w-full pl-6 pr-6">
      <div class="flex w-full bg-input">
        <img src="@/assets/icon/ic_search.svg" class="mr-7" alt="" />
        <input
          type="search"
          value=""
          placeholder="Search"
          class="search-input"
        />
      </div>
    </div>
    <div class="w-full pl-6 pr-6 h-10 mt-6 flex items-center">
      <div class="text-lg mr-3 description-no-padding">New Connections</div>
      <div class="p-2 txt-number-mes text-white">20</div>
    </div>

    <div class="w-full pl-6 pr-6 list-friend pb-6">
      <div class="flex w-full h-15 text-white">
        <div class="item-avatar items-center text-center mr-5">
          <div class="image-detail-dash"></div>
          <div class="mt-3">Likes</div>
        </div>

        <div class="w-full flex">
          <div class="item-avatar w- items-center text-center mr-6">
            <div class="image-detail-avatar relative">
              <div class="absolute bottom-0 right-0.5">
                <BhActivateLike></BhActivateLike>
              </div>
            </div>
            <div class="mt-3">Ngoc Trinh</div>
          </div>

          <div class="item-avatar items-center text-center mr-6">
            <div class="image-detail-avatar relative">
              <div class="absolute bottom-0 right-0.5">
                <BhActivateLike></BhActivateLike>
              </div>
            </div>
            <div class="mt-3">Ngoc Trinh</div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full pl-6 pr-6 h-10 mt-6 flex items-center">
      <div class="text-lg mr-3 description-no-padding">Messages</div>
      <div class="p-2 txt-number-mes text-white">1</div>
    </div>

    <div class="w-full mt-3 dash-message">
      <div class="w-full flex items-center h-20 mt-4">
        <div class="w-1/5 p-6">
          <div class="image-detail-avatar relative">
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess" @click="onClickShowChat()">
          <div class="w-full text-white">
            Trang <span class="ic_like ml-3">LIKES YOU</span>
          </div>
          <div class="mt-1 description-no-padding">
            Recently Active, Match Now!
          </div>
        </div>
      </div>
      <div class="w-full flex items-center h-20 mt-4">
        <div class="w-1/5 p-6">
          <div class="image-detail-avatar relative">
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess relative">
          <div class="w-full text-white">
            Trang <span class="ic_like ml-3">LIKES YOU</span>
          </div>
          <div class="mt-1 description-no-padding">
            Recently Active, Match Now!
          </div>
          <div class="absolute right-4 top-4 p-2 txt-number-title text-white">
            20
          </div>
        </div>
      </div>
      <div class="w-full flex items-center h-20 mt-4">
        <div class="w-1/5 p-6">
          <div class="image-detail-avatar relative">
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess relative">
          <div class="w-full text-white">
            Trang <span class="ic_like ml-3">LIKES YOU</span>
          </div>
          <div class="mt-1 description-no-padding">
            Recently Active, Match Now!
          </div>
          <div class="absolute right-4 top-4 p-2 txt-number-title text-white">
            20
          </div>
        </div>
      </div>
      <div class="w-full flex items-center h-20 mt-4">
        <div class="w-1/5 p-6">
          <div class="image-detail-avatar relative">
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess relative">
          <div class="w-full text-white">
            Trang <span class="ic_like ml-3">LIKES YOU</span>
          </div>
          <div class="mt-1 description-no-padding">
            Recently Active, Match Now!
          </div>
          <div class="absolute right-4 top-4 p-2 txt-number-title text-white">
            20
          </div>
        </div>
      </div>
      <div class="w-full flex items-center h-20 mt-4">
        <div class="w-1/5 p-6">
          <div class="image-detail-avatar relative">
            <div class="absolute bottom-0 right-0.5">
              <BhActivateLike></BhActivateLike>
            </div>
          </div>
        </div>
        <div class="w-4/5 ml-8 h-full bg-mess relative">
          <div class="w-full text-white">
            Trang <span class="ic_like ml-3">LIKES YOU</span>
          </div>
          <div class="mt-1 description-no-padding">
            Recently Active, Match Now!
          </div>
          <div class="absolute right-4 top-4 p-2 txt-number-title text-white">
            20
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BhActivateLike from "../../../components/bh-element-ui/button/bh-activateLike";
export default {
  components: { BhActivateLike },
  name: "message-new",

  data() {
    return {};
  },

  methods: {
    onClickShowChat() {
      debugger;
      this.$router.push({ path: "/chat" });
    },
  },
};
</script>

<style lang="css">
.dash-message {
  height: 55%;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.dash-message::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.bg-input {
  height: 42px;
  padding: 6px;
  background-color: #495063;
  border-radius: 10px;
}

.search-input {
  background: none;
  font-size: 19px;
}

.txt-number-mes {
  padding: 0px;
  border-radius: 20px;
  background: #e85759;
  font-size: 11px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.txt-number-title {
  padding: 0px;
  border-radius: 20px;
  background: #e85759;
  font-size: 13px;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-detail-avatar {
  background-image: url("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 53px;
}

.image-detail-dash {
  background-image: url("@/assets/icon/ic_99_likes_dialog.svg");
  background-position: center;
  width: 80px;
  height: 80px;
  background-size: cover;
  border-radius: 53px;
}

.activates {
  border: 2px solid #212735;
  padding: 6px;
}

.list-friend {
  border-bottom: 1px solid #5d62799a;
}

.bg-mess {
  border-bottom: 1px solid #5d62799a;
}

.ic_like {
  padding: 5px;
  background: #f5af12;
  border-radius: 4px;
  font-size: 10px;
}
</style>
