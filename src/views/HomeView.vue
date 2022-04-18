<!--
 * @Author: your name
 * @Date: 2022-03-19 10:10:42
 * @LastEditTime: 2022-04-18 10:50:29
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
  <process-toast ref="processToastRef" />
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue';
import { getMusicSearch } from '@/api/user';
import { useUserStore } from '@/store';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { ElMessage, ElMessageBox } from 'element-plus';
// import { downloadFile } from '@/utils/index';
import ProcessToast from '@/components/process/index.vue';
import router from '@/router';

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
    {
      name: 'file-saver ^2.0.5',
      imgUrl: 'https://img.cdn.sugarat.top/mdImg/MTU3OTM2ODc3OTM4Nw==579368779387',
      value: `文件下载`,
      methods: 'downlaodFile',
    },
    {
      name: '掘金',
      imgUrl: require('@/assets/images/a082371acdc401a53ac672a94829dab7.jpeg'),
      value: `JavaScript`,
      methods: 'practice',
    },
    {
      name: '重定向',
      imgUrl: require('@/assets/images/dda0386969d5987a84df705e69e1ba2b.jpeg'),
      value: `重定向`,
      methods: 'redirect',
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
    case 'downlaodFile':
      downlaodFile();
      break;
    case 'practice':
      practice();
      break;
    case 'redirect':
      redirect();
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
  userStore.login({ phone: '18858475283', password: '123456' });
};

const processToastRef: any = ref<null | HTMLElement>(null);
function downlaodFile() {
  processToastRef.value.download(
    'https://xlm-ibc.oss-cn-hangzhou.aliyuncs.com/excel/1648608378195-.xlsx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220330T025555Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86399&X-Amz-Credential=LTAI5t6cqnectdT5zbhrN6eb%2F20220330%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b5e940542ff892be5bf345b06cee71c7c7e2d453c1ee40b5e121a58cdcbbb9b2'
  );
}

function practice() {
  router.push({ name: 'juejin', params: { id: '202004121402', title: '稀土掘金' } });
  // router.push({ path: '/juejin', query: { id: '202004121402', title: '稀土掘金' } });
}

function redirect() {
  router.push({ name: 'Dashboard', params: { path: '/' } });
}
</script>
<style lang="scss" scoped>
.s-table-column-img {
  width: 100px;
  // min-height: 98px;
  transition: all ease-in-out 0.3s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
