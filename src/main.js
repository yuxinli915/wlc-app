import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from "./plugins/axios";
import store from "@/plugins/store";

Vue.config.productionTip = false;
Vue.use(axios, { baseURL: process.env.VUE_APP_BASE_URL });

// Register a global custom directive called `v-blur` that prevents focus on buttons after click
Vue.directive("blur", {
    inserted: function(el) {
        el.onfocus = (ev) => ev.target.blur();
    },
});

new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
