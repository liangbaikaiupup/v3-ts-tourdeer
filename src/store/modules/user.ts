/*
 * @Author: your name
 * @Date: 2022-03-28 10:14:17
 * @LastEditTime: 2022-03-28 16:53:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\user.ts
 */
import { defineStore } from 'pinia';
import { loginByPhone } from '@/api/user';
import { cellphone } from '@/typings/index';
import { useRouter } from 'vue-router';
const router = useRouter();

interface userState {
  name: string;
  age: number;
  job: string;
}
export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: (): userState => {
    return {
      name: 'Tim',
      age: 18,
      job: '假面超人',
    };
  },
  getters: {
    fullname: (state) => {
      return `名字：${state.name}`;
    },
  },
  actions: {
    UPDATE_NAME(name: string) {
      this.name = name;
    },
    async login(params: cellphone) {
      const res: any = await loginByPhone(params);
      const { code } = res || {};
      if (code !== 200) return;
      router.push({ path: '/login' });
    },
  },
});
