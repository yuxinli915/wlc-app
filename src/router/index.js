import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/brands",
        name: "Brands",
        component: () => import("../views/Brands.vue"),
    },
    {
        path: "/car/:id",
        name: "Detail",
        component: () => import("../views/Detail.vue"),
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
