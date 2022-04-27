/*
 * @Author: your name
 * @Date: 2022-04-18 14:03:55
 * @LastEditTime: 2022-04-26 14:16:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\permission.ts
 */
import { defineStore } from 'pinia';

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => {
    return {
      route: [
        {
          path: '/',
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
      ],
    };
  },
});
