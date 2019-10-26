import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../views/event.vue")
  },
  {
    path: "/event/new",
    name: "New Event",
    component: () => import("../views/newEvent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
