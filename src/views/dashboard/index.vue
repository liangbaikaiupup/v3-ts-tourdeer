<!--
 * @Author: your name
 * @Date: 2022-04-18 10:48:14
 * @LastEditTime: 2022-04-24 16:18:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\dashboard\index.vue
-->
<template>
  <div class="app-container">
    <el-card>
      <el-row :gutter="20">
        <el-col :span="20">
          <WangEditor ref="editorRef" @getContent="getContent" />
          <div class="rich-btn">
            <el-button type="primary" @click="sumbit">提交</el-button>
            <el-button type="danger">取消</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <el-row>
            <el-col :span="24">
              <el-tag v-for="(tag, index) in tags" class="tags-box" :key="index" closable>
                {{ tag }}
              </el-tag>
            </el-col>
            <el-col :span="24">
              <div class="sort-box mt-5">
                <el-button @click="reset">reset</el-button>
                <el-button @click="bubbleSort(tags)">bubbleSort</el-button>
                <el-button @click="quickSort(tags)">quickSort</el-button>
                <el-button @click="threeWayQuickSort(tags)">threeWayQuickSort</el-button>
                <el-button @click="mergeSort">mergeSort</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="img-box">
            <div class="frosted-glass"></div>
            <el-image
              src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
              class="magnifier"
              style="width: 80%"
            />
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Sort } from './utils';
import { threeWayQuickWay } from '@/utils/index';
import WangEditor from '@/components/wangEditor/index';

// 标签数组
const tags = ref([5, 9, 2, 4, 7, 3, 8, 1, 6]);
/**
 * 重置
 */
function reset() {
  tags.value = [5, 9, 2, 4, 7, 3, 8, 1, 6];
}
/**
 * 冒泡排序
 * 时间复杂度O(n*n)
 */
function bubbleSort(arr: Array<number>) {
  if (arr.length <= 1) return;
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // tags.value = arr;
}

/**
 * 快排按钮
 */
function quickSort(event: Array<number>) {
  const quick = new Sort(event);
  tags.value = quick.quick();
}

/**
 * 三路快速排序按钮
 * @param arr
 */
function threeWayQuickSort(arr: Array<number>) {
  quick3Sort(arr, 0, arr.length - 1);
}
/**
 * 三路快排
 * @param arr 需要进行三路快排的数组
 * @param L 数组的起始位置
 * @param R 数组的末尾位置
 * @returns {{lt: *, gt: *}}
 */
function quick3Sort(arr: Array<number>, L: number, R: number) {
  // 对于小规模数组, 使用插入排序
  // if (R - L < 15) {
  //   //
  //   return;
  // }
  if (L > R) return;
  let p = arr[L];
  let lt = L;
  let gt = R + 1;
  for (let i = L + 1; i < gt; ) {
    if (arr[i] === p) {
      i++;
    } else if (arr[i] > p) {
      [arr[gt - 1], arr[i]] = [arr[i], arr[gt - 1]];
      gt--;
    } else {
      [arr[lt + 1], arr[i]] = [arr[i], arr[lt + 1]];
      lt++;
      i++;
    }
  }
  [arr[L], arr[lt]] = [arr[lt], arr[L]];
  quick3Sort(arr, L, lt - 1);
  quick3Sort(arr, gt, R);
}
/**
 * 归并排序
 */
function mergeSort() {
  //
  const arr = [2, 8, 3, 6, 1, 5, 4, 9, 7];
  threeWayQuickWay(arr, 0, arr.length - 1);
  console.log(7731, arr);
}

const editorRef: any = ref(null);
/**
 * 富文本
 */
function sumbit() {
  const content = `
    function quick3Sort(arr: Array<number>, L: number, R: number) {
  // 对于小规模数组, 使用插入排序
  // if (R - L < 15) {
  //   return;
  // }
  if (L > R) return;
  let p = arr[L];
  let lt = L;
  let gt = R + 1;
  for (let i = L + 1; i < gt; ) {
    if (arr[i] === p) {
      i++;
    } else if (arr[i] > p) {
      [arr[gt - 1], arr[i]] = [arr[i], arr[gt - 1]];
      gt--;
    } else {
      [arr[lt + 1], arr[i]] = [arr[i], arr[lt + 1]];
      lt++;
      i++;
    }
  }
  [arr[L], arr[lt]] = [arr[lt], arr[L]];
  quick3Sort(arr, L, lt - 1);
  quick3Sort(arr, gt, R);
}`;
  editorRef.value.insertText(content);
}

function getContent(data: any) {
  console.log(7731, data);
}
</script>
<style lang="scss" scoped>
.rich-btn {
  margin-top: 20px;
}

.el-tag {
  width: 30%;
  margin: 3px 1%;
}

.sort-box {
  .el-button {
    margin-bottom: 5px;
  }
}
.img-box {
  position: relative;
  .frosted-glass {
    position: absolute;
    // z-index: -1;
    width: 100%;
    height: 100%;

    background-image: url('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(2px);
  }
}
</style>
