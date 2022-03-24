<!--
 * @Author: your name
 * @Date: 2022-03-19 14:10:16
 * @LastEditTime: 2022-03-19 15:46:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\login\index.vue
-->
<template>
  <div class="app-container">
    <el-card>
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  username: '',
  password: '',
});

const rules = reactive({
  username: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur',
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
