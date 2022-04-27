<template>
  <el-icon>
    <component :is="icon" />
  </el-icon>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
  icon: {
    type: String,
    default: '',
  },
});
</script>
<style lang="scss" scoped>
.el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
  margin-right: 16px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
