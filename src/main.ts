/*
 * @Author: your name
 * @Date: 2022-03-19 10:10:42
 * @LastEditTime: 2022-03-28 10:10:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-pro\src\main.ts
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(router).use(store).use(ElementPlus).mount('#app');
