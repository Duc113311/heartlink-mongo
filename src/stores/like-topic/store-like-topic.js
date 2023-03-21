import { http_request } from "../../configs/http-host";

const state = {
  listLikeForYous: [],
};

const getters = {};

const mutations = {
  setListDataLikedForYou(state, data) {
    state.listLikeForYous = data;
  },
};

const actions = {
  async getListDataLikedForYou({ commit }, userId) {
    await http_request
      .get(`like-topic/v1/likes-account?userId=${userId}`)
      .then((response) => {
        commit("setListDataLikedForYou", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default {
  state,

  getters,

  actions,

  mutations,
};
