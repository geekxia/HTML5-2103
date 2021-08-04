// config/build.js这个文件只用于配置webpack本地开发时的选项
// 用于npm run serve
const ESLintPlugin = require('eslint-webpack-plugin')
const { resolve } = require('./util.js')

module.exports = {
  // 当代码报错时，显示源码位置的行号
  devtool: 'inline-source-map',
  mode: 'development',   // 表示webpack正进行本地开发
  // 实现devServer本地服务（只对本地运行起作用，对build操作不起作用）
  // 要安装webpack-dev-server这个包（全局安装、本地也安装一下）
  devServer: {
    port: 8090,
    // 用于指定本地服务器的静态资源目录
    contentBase: resolve('public'),
    // 自动打开浏览器运行public/index.html
    // 如果这个写法无法打开浏览器，还可以使用 --open这个命令选项
    open: true,
    // 开启webpack的代码热更新功能
    // 热更新：HMR = Hot Module Replacement
    // 热更新的过程描述：实际上在npm start启动本地HTTP服务时，同时启动了一个websocket长连接服务。每当入口文件及其依赖文件发生变化时，websocket会把重新编译的结果推送到客户端（浏览器），浏览器收到更新的内容后进行页面的局部更新。
    // 总结：执行npm start启动了两个服务，一个基于node.js的HTTP服务，另一个是基于webpack-hot-middleware实现的WebSocket长连接服务。
    // 热更新只对入口文件及其依赖起作用，对public中的文件不起作用。
    hot: true,
    // 当应用程序报错时，显示一个覆盖层
    // 当应用程序出现警告时，不显示覆盖层
    overlay: {
      errors: true,
      warnings: false
    },
    proxy: {
      '/api': {
        target: ' https://cnodejs.org',
        changeOrigin: true
      }
    }
  },
  plugins: [
    // 最新webpack v5中集成ESLint代码检测（只能js代码）
    // ESLint的检测功能，只发生在开发环境中，在生产环境不需要。
    // ESLint一般只用检测我们自己写的代码，不检测node_modules中的第三方代码
    // 使用ESLint时，一般也要在项目根目录添加一个.eslintrc.js配置文件
    new ESLintPlugin({
      exclude: 'node_modules'
    })
  ]
}
