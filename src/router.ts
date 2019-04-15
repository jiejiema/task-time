import Vue from 'vue';
import Router from 'vue-router';
import login from './components/user/login.vue';
import register from './components/user/register.vue';
import forget from './components/user/forgetPassword.vue';
import Home from './components/Home.vue';

import Vuex from 'vuex';
import store from './store';

Vue.use(Router);

// export default new Router({
const vueRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   // name: 'home',
    //   component: Home,
    // },
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
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
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
/*vueRouter.beforeEach(function (to, from, next) {
  const nextRoute = ['home'];
  const auth = store.state.auth;
  //跳转至上述3个页面
  if (nextRoute.indexOf(to.name) >= 0) {
    //未登录
    if (!store.state.auth.IsLogin) {
      vueRouter.push({name: 'login'})
    }
  }
  //已登录的情况再去登录页，跳转至首页
  if (to.name === 'login') {
    if (auth.IsLogin) {
      vueRouter.push({name: 'home'});
    }
  }
  next();
})*/


/*vueRouter.beforeEach(function (to, from, next) {

  console.log('to',to)
  console.log('store',store)
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    // if (store.state.token) {  // 通过vuex state获取当前的token是否存在
    //   next();
    //
    // } else {
    //   next({
    //     path: '/login',
    //     query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //   })
    // }
  } else {
    next();
  }
})*/
export default vueRouter;

