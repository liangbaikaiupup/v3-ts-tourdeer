<!--
 * @Author: your name
 * @Date: 2022-04-13 15:09:29
 * @LastEditTime: 2022-04-14 10:51:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\layout\index.vue
-->
<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div>
      <AppMain />
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppMain from './components/AppMain';
import Sidebar from './components/Sidebar/index';
</script>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>
