import Vue from 'vue';
import Router from 'vue-router';
import Counter from '../components/Counter';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Counter',
    component: Counter,
  },
];

export default new Router({
  routes,
});
