// 最新的Babel编译是 v7版本的，我们推荐使用的配置文件是 babel.config.js
// 模块化语法也是CommonJS，和webpack.config.js的语法相似，也可以node相关的api

// Babel基础知识：所有的Babel包都是以‘@babel/’开头的

// preset预设
// 常用的Babel编译器（预设）：
// @babel/core  这是Babel的核心编译器，一定要安装
// @babel/preset-env  它用于转换ES6+代码
// @babel/preset-react  它用于转化JSX代码
// @babel/preset-typescript  它用于转化TypeScript代码

// plugins插件：
// 作用：弥补preset预设编译中的漏洞，用于配合preset预设来编译一些特殊的js语法

module.exports = {
  // presets这个选项，用于指定当前工程环境的babel编译器
  presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
  // plugins这个选项，用于配合预设来编译一些特殊的js语法
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-syntax-dynamic-import"]
  ]
}
