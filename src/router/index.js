import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const ROUTES = {
  home: { path: "/", name: "home", label: "home" },
  event: { path: "/event", name: "event", label: "event" },
  newEvent: { path: "/event/new", name: "new-event", label: "new event" }
};

const routes = [
  {
    ...ROUTES.home,
    component: Home
  },
  {
    ...ROUTES.event,
    component: () => import("../views/event.vue")
  },
  {
    ...ROUTES.newEvent,
    component: () => import("../views/newEvent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export { router, ROUTES };
