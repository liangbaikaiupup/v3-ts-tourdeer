<!--
 * @Author: your name
 * @Date: 2022-04-14 10:29:56
 * @LastEditTime: 2022-04-18 11:37:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\layout\components\Sidebar\index.vue
-->
<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon>
            <document />
          </el-icon>
          <template #title>Dashboard</template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>Guide</span>
          </template>
          <el-menu-item index="1-1" @click="goPage()">掘金</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <template #title>Documentation</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Settings</template>
        </el-menu-item>
      </el-menu>
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :unique-opened="false"> </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue';
import Logo from './Logo';

import { useSettingsStore, useAppStore } from '@/store';
import { useRouter } from 'vue-router';

/**
 * 展示logo
 */
const settingsState = useSettingsStore();
const showLogo = computed(() => {
  return settingsState.sidebarLogo;
});

const activeMenu: any = computed(() => {
  return '1';
});

//可折叠的菜单
const appStore = useAppStore();
const isCollapse = computed(() => {
  return !appStore.sidebar.opened;
});
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const router = useRouter();
function goPage() {
  router.push({ path: '/guide', query: {} });
}
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
