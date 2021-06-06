import axios from "axios";
export default {
    install(Vue, options) {
        //BEGIN AXIOS SETTINGS
        const axiosInstance = axios.create({
            baseURL: options.baseURL,
        });
        Vue.axios = axiosInstance;
        Vue.prototype.$axios = axiosInstance;
    },
};
