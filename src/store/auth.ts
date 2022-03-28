/*
 * @Author: your name
 * @Date: 2022-03-28 10:14:17
 * @LastEditTime: 2022-03-28 11:05:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\user.ts
 */
import { defineStore } from 'pinia';

interface authState {
  sex: string;
}
export const useAuthStore = defineStore({
  id: 'auth', // id必填，且需要唯一
  // state: (): userState => ({
  //   name: 'Tim',
  // }),
  state: (): authState => {
    return {
      sex: 'man',
    };
  },
});
