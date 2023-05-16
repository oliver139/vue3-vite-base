import { createApp } from "vue"; // Vue
import { createPinia } from "pinia"; // Pinia
import i18n from "./i18n"; // i18n
import OhVueIcon from "./utils/iconImport"; // icons
// import VueGtag from "vue-gtag"; // Google Analytics

// CSS
import "normalize.css";
import "@/assets/css/variables.css";
import "@/assets/css/transition.css";
import "@/assets/css/main.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app
  .use(router)
  .use(createPinia())
  .use(i18n)
  .component("v-icon", OhVueIcon)
  // .use(VueGtag, {
  //   config: {
  //     id: "G-81YR852LSZ"
  //   },
  // }, router)
  .mount("#app");
