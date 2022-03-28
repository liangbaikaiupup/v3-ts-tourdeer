<!--
 * @Author: your name
 * @Date: 2022-03-19 10:10:42
 * @LastEditTime: 2022-03-28 11:41:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-pro\src\views\HomeView.vue
-->
<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="24">
        <h2>vue3 ts</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button @click="login">login</el-button>
        <el-button @click="search">搜索</el-button>
        <el-tag>{{ env }}</el-tag
        ><el-tag @click="changeName">{{ name }}</el-tag>
        <el-tag>{{ age }}</el-tag>
        <el-tag>{{ job }}</el-tag>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
import { getMusicSearch } from '@/api/user';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';

const router = useRouter();
// const { name, age } = storeToRefs(useUserStore());
const userStore = useUserStore();
const { name, age } = storeToRefs(userStore);
const job = computed(() => {
  return userStore.job;
});

function changeName() {
  userStore.UPDATE_NAME('lisa');
}

const state = reactive({
  env: process.env.NODE_ENV,
});
const { env } = toRefs(state);

const search = async () => {
  const res: any = await getMusicSearch({ keywords: '海阔天空' });
  const { code } = res || {};
  if (code !== 200) return;
  router.push({ path: '/login' });
};

const login = () => {
  userStore.login({ phone: '18858475283', password: '1qaz2wsx' });
};
</script>
