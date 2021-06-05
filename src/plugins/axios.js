import axios from "axios";
export default {
    install(Vue, options) {
        //BEGIN AXIOS SETTINGS
        const axiosInstance = axios.create({
            useWithCredentials: options.useWithCredentials,
        });
        Vue.axios = axiosInstance;
        Vue.prototype.$axios = axiosInstance;
    },
};
