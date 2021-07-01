import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        baseURL: "http://www.car-test.com/",
    },
    mutations: {
        updateSelectedCompanyOriginalDetail(state, value) {
            state.selectedCompanyOriginalDetail = value;
        },
    },
    getters: {
        baseURL: (state) => state.baseURL,
    },
    modules: {},
});
