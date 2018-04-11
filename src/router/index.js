import Vue from 'vue';
import Router from 'vue-router';

import RequestList from '../components/RequestList';
import CompanyList from '../components/CompanyList';
import Login from '../components/Login';
import Register from '../components/Register';

Vue.use(Router);

const routes = [
  {
    path: '/',
  },
  {
    path: '/requests',
    name: 'RequestList',
    component: RequestList,
    meta: { authenticated: true },
  },
  {
    path: '/companies',
    name: 'CompanyList',
    component: CompanyList,
    meta: { authenticated: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

export default new Router({
  routes,
});
