/*
 * @Author: your name
 * @Date: 2022-04-16 10:51:24
 * @LastEditTime: 2022-04-16 16:04:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\store\modules\settings.ts
 */
import { defineStore } from 'pinia';

interface settingsState {
  tagsView: boolean;
  showLogo: boolean;
}

export const useSettingsStore = defineStore({
  id: 'settings', // id必填，且需要唯一
  state: (): settingsState => {
    return {
      tagsView: true,
      showLogo: true,
    };
  },
  getters: {},
  actions: {},
});
