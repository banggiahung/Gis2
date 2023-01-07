import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTreeNavigation from 'vue-tree-navigation';

import 'leaflet/dist/leaflet.css';

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./styles.css"

Vue.config.productionTip = false
Vue.use(VueTreeNavigation);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
