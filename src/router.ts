import Vue from 'vue';
import Router from 'vue-router';
import login from './user/login.vue';
import forget from './user/forgetPassword.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: forget,
    },
    // {
    //   path: '/login',
    //   name: 'forget-password',
    //   component: forget,
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
