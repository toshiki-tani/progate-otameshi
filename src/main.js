import * as Vue from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";

const routes = [
  // TODO
  { path: "/", component: App },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

Vue.createApp(App).use(router).mount("#app");
