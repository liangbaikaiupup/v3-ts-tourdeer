/*
 * @Author: your name
 * @Date: 2022-03-19 11:02:04
 * @LastEditTime: 2022-03-19 16:56:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \soybean-admin-main\.prettierrc.js
 */
module.exports = {
  // https://prettier.io/docs/en/options.html
  arrowParens: 'always', //箭头函数单一参数省略括号
  bracketSameLine: false,
  bracketSpacing: true, //对象&数组是否追加空格
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 120, //屏幕显示宽度（一行做多容纳字节数，超过自动换行）
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true, // 句尾添加分号
  singleQuote: true, // 启用双引号
  tabWidth: 2, //缩进字节（2空格代替tab）
  trailingComma: 'es5', //对象或数组末尾加逗号
  useTabs: false,
  vueIndentScriptAndStyle: false,
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
  ],
};
