import Vue from "vue";
import VueRouter from "vue-router";
import AppMovies from "../components/AppMovies";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/movies",
  },
  {
    path: "/movies",
    component: AppMovies,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
