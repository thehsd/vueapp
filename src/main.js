import Vue from "vue";
import App from "./App.vue";
import vueRouter from 'vue-router';
import {routes} from "./Routes";

Vue.use(vueRouter)
 const router = new vueRouter({
   routes,
   mode:'history'
 })


Vue.config.productionTip = false;

new Vue({
 router,
  render: (h) => h(App),
}).$mount("#app");
