import * as Vue from "vue";
import router from "./routes";
import App from "./App.vue";
import VueClickAway from "vue3-click-away";

Vue.createApp(App).use(router).use(VueClickAway).mount("#app");
