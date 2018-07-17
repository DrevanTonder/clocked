import Vue from "vue";
import Router from "vue-router";
import Clock from "./views/Clock.vue";
import Stopwatch from "./views/Stopwatch.vue";
import Timer from "./views/Timer.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Clock
    },
    {
      path: "/stopwatch",
      name: "stopwatch",
      component: Stopwatch
    },
    {
      path: "/timer",
      name: "timer",
      component: Timer
    }
  ]
});
