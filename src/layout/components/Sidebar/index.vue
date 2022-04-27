<!--
 * @Author: your name
 * @Date: 2022-04-14 10:29:56
 * @LastEditTime: 2022-04-26 15:59:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\layout\components\Sidebar\index.vue
-->
<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="false"
        active-text-color="#409EFF"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
      <!-- <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <icon-menu />
          </el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu> -->
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useSettingsStore, useAppStore, usePermissionStore } from '@/store';
import { useRoute } from 'vue-router';
import Logo from './Logo';
import SidebarItem from './SidebarItem';

const route = useRoute();
/**
 * 展示logo
 */
const settingsState = useSettingsStore();
const showLogo = computed(() => {
  return settingsState.sidebarLogo;
});

const activeMenu: any = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

//可折叠的菜单
const appStore = useAppStore();
const isCollapse = computed(() => {
  return !appStore.sidebar.opened;
});

/**
 * 菜单路由
 */
const permissionStore = usePermissionStore();
const permission_routes = computed(() => {
  return permissionStore.route;
});
</script>
