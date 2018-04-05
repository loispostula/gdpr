// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLidate from 'vuelidate';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'vue-material/dist/theme/default.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);
Vue.use(VueLidate);
Vue.use(VueMaterial);

router.beforeEach((to, from, next) => {
  if (to.meta.authenticated && !store.getters['ui/isAuthenticated']) {
    next('/');
    return;
  }
  next();
});

router.afterEach(() => {
  store.dispatch('ui/setMenuVisibility', false);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render(h) {
    return h(App);
  },
});
