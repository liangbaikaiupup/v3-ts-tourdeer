<!--
 * @Author: your name
 * @Date: 2022-04-13 15:10:44
 * @LastEditTime: 2022-04-13 16:10:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\layout\components\appMain.vue
-->
<template>
  <section class="app-main">
    <router-view v-model:key="key" />
  </section>
</template>
<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
const route = useRoute();
const key = computed(() => {
  return route.path;
});
console.log(7732, route.path);
</script>
