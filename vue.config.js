const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/": {
        target: "https://music-two-gamma.vercel.app",
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
