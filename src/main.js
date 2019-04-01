import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import _ from "lodash";

// require styles
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
Vue.prototype.homeUrl = process.env.NODE_ENV === 'production' ? url:'http://www.qq.com';
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

Vue.use(VueAwesomeSwiper);
Vue.use(_);
