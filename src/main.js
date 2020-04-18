import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueSwal from "vue-swal";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(VueSwal);

new Vue({
  router,
  vuetify,
  // eslint-disable-next-line prettier/prettier
  render: (h) => h(App),
}).$mount("#app");
