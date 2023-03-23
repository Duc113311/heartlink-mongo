const state = {
  isShowMyProfile: true,
  isNotShowProfie: true,
  listScreamShowMes: [],
};

const getters = {};

const mutations = {
  /**
   * Xet giá trị hiển th
   * @param {*} state
   * @param {*} data
   */
  setShowProfileCreate(state, data) {
    state.isNotShowProfie = data.isNotShowProfile;
    state.isShowMyProfile = data.isShowProfile;
  },

  setActionShowMe(state, data) {
    const index = state.listScreamShowMes.findIndex(
      (x) => x.scream === data.scream
    );

    if (index !== -1) {
      state.listScreamShowMes = state.listScreamShowMes.map((x) =>
        x.scream === data.scream ? data : x
      );
    } else {
      state.listScreamShowMes.push(data);
    }
  },

  // setActiveInterestLike(state,data){

  // }
};

const actions = {};
export default {
  state,

  getters,

  actions,

  mutations,
};
