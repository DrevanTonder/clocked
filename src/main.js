import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import Buefy from "buefy";

import "@/scss/main.scss";

Vue.use(Buefy);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faStopwatch,
  faPlay,
  faStop,
  faHourglass,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faClock, faStopwatch, faPlay, faStop, faHourglass, faCheck);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
