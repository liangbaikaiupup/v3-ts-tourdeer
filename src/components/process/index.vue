<!--
 * @Author: your name
 * @Date: 2022-04-01 11:41:57
 * @LastEditTime: 2022-04-01 13:31:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\components\process\index.vue
-->
<template>
  <div class="el-overlay" style="z-index: 2110">
    <el-progress type="dashboard" :percentage="process" :color="customColors">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">下载进度</span>
      </template>
    </el-progress>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useProcessStore } from '@/store';
const useProcess = useProcessStore();
const process = computed(() => {
  return Number(useProcess.process) * 100;
});

const customColors: any = ref([
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]);
</script>
<style lang="scss" scoped>
// margin: var(--el-dialog-margin-top, 15vh) auto 50px;
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;

  color: var(--el-color-primary);
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;

  color: var(--el-color-primary);
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
