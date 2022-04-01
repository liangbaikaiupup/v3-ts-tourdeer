/*
 * @Author: your name
 * @Date: 2022-03-19 13:58:13
 * @LastEditTime: 2022-03-31 08:47:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/': {
        target: 'https://music-two-gamma.vercel.app/',
        // pathRewrite: {
        //   "^/api": "", // 将开头的 '/api' 替换成空字符串（^ 是开头的意思，'^/api' 表示以 /api 开头）
        // },
        secure: false,
        changeOrigin: true,
        ws: false,
      },
    },
  },
});
