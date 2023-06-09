import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/plugins/fontawsome";

import '../src/scss/main.scss';
import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(router);
app.component();
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store).mount("#app");


