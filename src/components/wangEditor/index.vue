<!--
 * @Author: your name
 * @Date: 2022-04-22 11:23:10
 * @LastEditTime: 2022-04-22 16:58:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\components\wangEditor\index.vue
-->
<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange"
      @onDestroyed="handleDestroyed"
      @onFocus="handleFocus"
      @onBlur="handleBlur"
      @customAlert="customAlert"
      @customPaste="customPaste"
    />
  </div>
</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted, defineProps, defineExpose, defineEmits } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';

defineProps({
  // default 默认模式 - 集成了 wangEditor 所有功能
  // simple 简洁模式 - 仅有部分常见功能，但更加简洁易用
  mode: {
    type: String,
    default: 'default',
  },
});

const emit = defineEmits(['getContent']);
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
// 内容 HTML
const valueHtml = ref('');

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>';
  }, 1500);
});
const toolbarConfig = {};
const editorConfig = { placeholder: '请输入内容...' };
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const handleChange = (editor: any) => {
  console.log('change:', editor.children);
};
const handleDestroyed = (editor: any) => {
  console.log('destroyed', editor);
};
const handleFocus = (editor: any) => {
  console.log('focus', editor);
};
const handleBlur = (editor: any) => {
  console.log('blur', editor);
};
const customAlert = (info: any, type: any) => {
  alert(`【自定义提示】${type} - ${info}`);
};
const customPaste = (editor: any, event: any, callback: any) => {
  console.log('ClipboardEvent 粘贴事件对象', event);
  // const html = event.clipboardData.getData('text/html') // 获取粘贴的 html
  // const text = event.clipboardData.getData('text/plain') // 获取粘贴的纯文本
  // const rtf = event.clipboardData.getData('text/rtf') // 获取 rtf 数据（如从 word wsp 复制粘贴）

  // 自定义插入内容
  editor.insertText('xxx');

  // 返回 false ，阻止默认粘贴行为
  event.preventDefault();
  callback(false); // 返回值（注意，vue 事件的返回值，不能用 return）

  // 返回 true ，继续默认的粘贴行为
  // callback(true)
};

const insertText = (content: string) => {
  const editor = editorRef.value; // 获取 editor ，必须等待它渲染完之后
  console.log('editor===>', editor);
  if (editor === null) return;
  emit('getContent', editor.getText());
  editor.insertText(content); // 执行 editor API
};
defineExpose({
  valueHtml,
  insertText,
});
</script>
