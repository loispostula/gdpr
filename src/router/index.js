import Vue from 'vue';
import Router from 'vue-router';

import RequestList from '../components/RequestList';
import CompanyList from '../components/CompanyList';

Vue.use(Router);

const routes = [
  {
    path: '/',
  },
  {
    path: '/requests',
    name: 'RequestList',
    component: RequestList,
  },
  {
    path: '/companies',
    name: 'CompanyList',
    component: CompanyList,
  },
];

export default new Router({
  routes,
});
