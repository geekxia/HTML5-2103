// 这个配置文件用于ESLint的配置
// 这里的语法和webpack.config.js相似，也支持使用node中api

// ESLint是JavaScript的代码检测工具，检测代码的目的是约束程序员的代码风格。
// 你将使用什么样的代码规范来约束我呢？
// 在社区中，有非常多的ESLint检测工具，你可以选择大约符合你公司习惯的检测工具。
// 比如：在vue 2.0的脚手架中使用的是 eslint-plugin-vue 这个检测工具

// 那么在我们这个React环境，使用哪个ESLint检测工具比较好呢？
// eslint-plugin-react、@babel/eslint-parser

// 当代码出现ESLint报错时，该怎么解决？
// 1、使用eslint的配置文件关闭掉报错的那个检测规则（除非你是项目leader，否则不要修改eslint的配置文件）
// 2、使用ESLint注释的方式来临时关闭掉eslint的检测（临时用一下没有问题，如果是上线建议别用）
// 3、一行一行地修正ESLint的报错（工作中建议的做法）

module.exports = {
  // 在React环境使用ESLint来检测js代码
  parser: "@babel/eslint-parser",
  // 指定使用哪个ESlint检测工具
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [ "react" ],
  parserOptions: {
    // 开启对ES6代码的检测
    ecmaVersion: 6,
    sourceType: "module",
    // 开启对jsx代码的检测
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
		browser: true,
    node: false
	},
  // 用于在当前检测规范的基础上，进行小幅度的调整
  // 在处理ESLint规则有三种检测方式：
  // 0 / "off"  表示关闭掉当前的检测规则
  // 1 / "warn"  表示如果用户违反规则，只给一个警告，而不报错
  // 2 / "error"  表示如果用户违反规则，直接报错
  rules: {
    "no-undef": "off",
    "react/display-name": 0   // 0
  }
}
