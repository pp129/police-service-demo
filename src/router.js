import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/business",
            component: Home,
            children: [
                {
                    path: "product",
                    component: () => import("./views/product.vue")
                },
                {
                    path: "business",
                    component: () => import("./views/business.vue")
                },
                {
                    path: "case",
                    component: () => import("./views/case.vue")
                },
                {
                    path: "honor",
                    component: () => import("./views/honor.vue")
                }
            ]
        }
    ]
});
