/*
 * @Author: your name
 * @Date: 2022-03-19 17:00:32
 * @LastEditTime: 2022-04-01 11:25:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\utils\index.ts
 */
import { saveAs } from 'file-saver';

import { useProcessStore } from '@/store';
const useProcess = useProcessStore();

export function downloadFile(url: any, name?: any, opts?: any) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';

  xhr.onprogress = function (e) {
    const { total, loaded } = e;
    const percentage = (loaded / total).toFixed(2);
    useProcess.UPDATE_PROCESS(percentage);
  };

  xhr.onload = function () {
    console.log('xhr', xhr);
    saveAs(xhr.response, name, opts);
  };
  xhr.onerror = function () {
    console.error('could not download file');
  };
  xhr.send();
}
