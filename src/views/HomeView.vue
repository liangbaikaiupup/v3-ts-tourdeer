<!--
 * @Author: your name
 * @Date: 2022-03-19 10:10:42
 * @LastEditTime: 2022-03-29 09:50:37
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
    <el-row :gutter="20">
      <el-col :span="24">
        <el-table :data="tableData" stripe border>
          <el-table-column type="index" width="50" sortable />
          <el-table-column prop="name" label="名称" show-overflow-tooltip />
          <el-table-column label="图片" show-overflow-tooltip>
            <template #default="props">
              <img :src="props.row?.imgUrl" class="s-table-column-img" />
            </template>
          </el-table-column>
          <el-table-column prop="value" label="显示" show-overflow-tooltip />
          <el-table-column label="操作" show-overflow-tooltip>
            <template #default="props">
              <el-button type="text" v-if="props.row?.methods" @click="viewDetails(props.row?.methods)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue';
import { getMusicSearch } from '@/api/user';
// import { useRouter } from 'vue-router';
import { useUserStore } from '@/store';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { ElMessage, ElMessageBox } from 'element-plus';

// const router = useRouter();
const userStore = useUserStore();
const { name, age } = storeToRefs(userStore);
const job = computed(() => {
  return userStore.job;
});

function changeName() {
  userStore.UPDATE_NAME('lisa');
  ElMessageBox.alert(`${name.value}-${age.value}-${job.value}`, 'pinia', {
    confirmButtonText: 'OK',
  });
}

const state = reactive({
  tableData: [
    {
      name: '环境',
      imgUrl: '',
      value: process.env.NODE_ENV,
      methods: undefined,
    },
    {
      name: 'vue-router ^4.0.3',
      imgUrl: '',
      value: '@/views/login/index.vue',
      methods: 'login',
    },
    {
      name: 'pinia ^2.0.12',
      imgUrl: '',
      value: `${name.value}-${age.value}-${job.value}`,
      methods: 'actions',
    },
    {
      name: 'axios ^0.26.1',
      imgUrl: '',
      value: `网易云音乐api部署Vercel-接口跨域代理`,
      methods: 'search',
    },
    {
      name: '@vue/cli ^5.0.3',
      imgUrl: require('@/assets/images/helmet.jpeg'),
      value: `webpack vue`,
      methods: undefined,
    },
  ],
});
const { tableData } = toRefs(state);

function viewDetails(event: string | undefined) {
  if (!event) return;
  switch (event) {
    case 'login':
      login();
      break;
    case 'actions':
      changeName();
      break;
    case 'search':
      search();
      break;
    default:
      break;
  }
}

const search = async () => {
  const res: any = await getMusicSearch({ keywords: '海阔天空' });
  const { code } = res || {};
  if (code !== 200) return;
  ElMessage({
    message: '网易云音乐api调取成功',
    type: 'success',
  });
  // router.push({ path: '/login' });
};

const login = () => {
  userStore.login({ phone: '18858475283', password: 'ni123456' });
};
</script>
<style lang="scss" scoped>
.s-table-column-img {
  width: 100px;
}
</style>
