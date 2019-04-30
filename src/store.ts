import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numNotFound: 0
  },
  mutations: {
    increment (state) {
      // mutate state
      state.numNotFound++
    },
    reset (state) {
      // mutate state
      state.numNotFound = 0
    }
  },
  actions: {

  },
});
