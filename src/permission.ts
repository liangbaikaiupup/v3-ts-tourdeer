/*
 * @Author: xianglutao 294301492@qq.com
 * @Date: 2022-03-29 10:02:12
 * @LastEditors: xianglutao 294301492@qq.com
 * @LastEditTime: 2022-05-09 16:43:35
 * @FilePath: \v3-ts-tourdeer\src\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from './router';

// const whiteList = ['/login', '/auth-redirect']; // no redirect whitelist
router.beforeEach(async (to, from) => {
  console.log(7731, to, from);
});
