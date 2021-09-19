import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import router from "./router";
import store from "./store";
import "../src/assets/font-awesome/css/font-awesome.min.css";

createApp(App).use(store).use(router).use(VueSweetalert2).mount("#app");
