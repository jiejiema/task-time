import Vue from 'vue';
import Router from 'vue-router';
import login from './components/user/login.vue';
import register from './components/user/register.vue';
import forget from './components/user/forgetPassword.vue';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
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
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/views/About.vue'),
    },
  ],
});
