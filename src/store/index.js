import { createStore } from "vuex";
import jwtDecode from "jwt-decode";
import { getAccessToken } from "../api/localStorage";

export default createStore({
  state: {
    title: "title state",
    user: {},
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setTitle(state, payload) {
      state.title = payload;
    },
  },
  actions: {
    userState({ commit }) {
      const token = getAccessToken();
      const decodeToken = jwtDecode(token);

      commit("setUser", decodeToken);
    },
  },
  modules: {},
});
