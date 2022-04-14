<!--
 * @Author: your name
 * @Date: 2022-04-13 13:38:48
 * @LastEditTime: 2022-04-13 15:28:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\jue-jin\index.vue
-->
<template>
  <div class="app-container">123</div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
onMounted(() => {
  console.log(7731, route.params);
  console.log(7732, route.query);
});
</script>
