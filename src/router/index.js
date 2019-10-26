import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const STATIC_ROUTES = {
  home: { path: "/", name: "home", label: "home" },
  newEvent: { path: "/event/new", name: "new-event", label: "new event" }
};

const DYNAMIC_ROUTES = {
  event: { path: "/event/:id", name: "event", label: "event" }
};

const routes = [
  {
    ...STATIC_ROUTES.home,
    component: Home
  },
  {
    ...DYNAMIC_ROUTES.event,
    props: true,
    component: () => import("../views/event.vue")
  },
  {
    ...STATIC_ROUTES.newEvent,
    component: () => import("../views/newEvent.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export { router, STATIC_ROUTES, DYNAMIC_ROUTES };
