import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from "./plugins/axios";

Vue.config.productionTip = false;
Vue.use(axios, { baseURL: process.env.VUE_APP_BASE_URL });

new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount("#app");
