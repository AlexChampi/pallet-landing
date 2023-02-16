import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import PalletPage from "@/components/content/PalletPage.vue";
import IndexPage from "@/components/content/IndexPage.vue";
import GOSTPage from "@/components/content/GOSTPage.vue";
import AboutPage from "@/components/content/AboutPage.vue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTape} from "@fortawesome/free-solid-svg-icons";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import {faClipboardCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import data from "./data.js";

Vue.use(VueRouter);

library.add(faTape, faTrophy, faClipboardCheck, faBars);

const routes = [
    {
        path: "",
        component: IndexPage,
    },
    {
        path: "/pallet",
        component: PalletPage,
        // eslint-disable-next-line no-unused-vars
        props: {pallets: data.pallets}
    },
    {
        path: "/gost",
        component: GOSTPage
    },
    {
        path: "/about",
        component: AboutPage
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
    router,
    data: function () {
        return data;
    },
    render: (h) => h(App),
}).$mount("#app");
