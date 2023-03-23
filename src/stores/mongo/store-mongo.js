import { http_mongo } from "../../configs/http-mongo";

const state = {
  profileUserRegister_Mongo: {},
  userProfile: {}, // Thông tin chi tiết user khi login success
  tokenId: "", // token default của user
  detailProfile: {}, // Thông tin user khi gọi API lấy chi tiết
  listDataCard: [], // Danh sách màn quet
};
const getters = {};

const mutations = {
  /**
   * Xét giá trị cho user khi đăng ký
   * @param {*} state
   * @param {*} data
   */
  setProfileUserRegister_Mongo(state, data) {
    state.profileUser_Mongo = data;
  },

  /**
   * Xét giá trị cho user khi login
   * @param {*} state
   * @param {*} data
   */
  setProfileUserLogin_Mongo(state, data) {
    state.tokenId = data.token;
    state.userProfile = data.user;

    localStorage.setItem("tokenId", state.tokenId);
    localStorage.setItem("oAuth2Id", state.userProfile.oAuth2Id);
  },

  /**
   * Xét giá trị cho detail profile
   * @param {*} state
   * @param {*} data
   */
  setDetailProfileAuth_Mongo(state, data) {
    state.detailProfile = data;
  },

  /**
   * Xét giá trị
   * @param {*} state
   * @param {*} data
   */
  setUpdateLocation_Mongo(state, data) {
    state.statusUpdateLocation = data;
  },

  /**
   * Xét giá trị cho list data của user
   * @param {*} state
   * @param {*} data
   */
  setListDataCards_Mongo(state, data) {
    debugger;
    state.listDataCard = data;
  },
};

const actions = {
  /**
   * API Đăng ký thông tin user
   * @param {*} param0
   * @param {*} data
   */
  async registerUserByAuthId({ commit }, data) {
    await http_mongo
      .post(`api/v1/register`, data)
      .then((response) => {
        debugger;
        commit("setProfileUserRegister_Mongo", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * API Login app bằng authId sau khi đăng ký
   * @param {*} param0
   * @param {*} data
   */
  async loginAppByAuthId({ commit }, data) {
    await http_mongo
      .post(`api/v1/login`, data)
      .then((response) => {
        debugger;
        commit("setProfileUserLogin_Mongo", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * API lấy chi tiết thông tin theo Authorization
   * @param {*} param0
   * @param {*} data
   */
  async getDetailProfileByAuthorization({ commit }, data) {
    await http_mongo
      .get(`api/v1/profile`, data)
      .then((response) => {
        debugger;
        commit("setDetailProfileAuth_Mongo", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async updateLocationByAuthorization({ commit }, data) {
    await http_mongo
      .post(`api/v1/updateGPS`, data)
      .then((response) => {
        debugger;
        commit("setUpdateLocation_Mongo", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async getListCardForUser({ commit }, data) {
    await http_mongo
      .get(`api/v1/cards`, data)
      .then((response) => {
        debugger;
        commit("setListDataCards_Mongo", response.data.data);
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
