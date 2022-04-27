// createWebHistory/createWebHashHistory
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
  },

  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue'),
  },

  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        name: 'redirect',
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'home-filled', affix: true },
      },
    ],
  },

  {
    path: '/juejin',
    component: Layout,
    redirect: '/juejin/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/jue-jin/index.vue'),
        name: 'JueJin',
        meta: { title: '掘金', icon: 'Document' },
      },
    ],
  },

  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    name: 'GuideBook',
    meta: { title: 'GuideBook', icon: 'Promotion' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index.vue'),
        name: 'Guide',
        meta: { title: '指南', icon: 'Edit' },
      },
      {
        path: 'documentation',
        component: () => import('@/views/guide/documentation.vue'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'Fries' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
