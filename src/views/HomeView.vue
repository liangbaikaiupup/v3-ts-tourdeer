<!--
 * @Author: your name
 * @Date: 2022-03-19 10:10:42
 * @LastEditTime: 2022-03-19 11:26:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-pro\src\views\HomeView.vue
-->
<template>
  <div class="home">
    <h2>vue3 ts</h2>
    <el-button type="primary" @click="search">{{ env }}</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
import { getMusicSearch } from '@/api/user';

const state = reactive({
  env: process.env.NODE_ENV,
});
const { env } = toRefs(state);

const search = async () => {
  const res = await getMusicSearch({ keywords: '海阔天空' });
  console.log(7733, res);
};
</script>
