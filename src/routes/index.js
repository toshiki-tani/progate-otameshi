import { createRouter, createWebHistory } from "vue-router";
import index from "../pages/index.vue";

const routes = [
  {
    path: "/",
    name: "Top",
    component: index,
  },
  {
    path: "/example",
    name: "Example",
    component: () =>
      import(/* webpackChunkName: "Example" */ "../pages/example.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
