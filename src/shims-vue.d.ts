/*
 * @Author: your name
 * @Date: 2022-03-19 13:58:13
 * @LastEditTime: 2022-04-26 17:02:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// import { _RouteRecordBase } from 'vue-router';
// declare module 'vue-router' {
//   interface _RouteRecordBase {
//     hidden?: boolean | string | number;
//   }
// }
