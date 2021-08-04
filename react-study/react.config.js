// 是node代码，模块化语法用的是CommonJS模块化语法
// webpack的配置文件的常见写法：
// module.exports = {}
// module.exports = function() { return {}}
// module.exports = () => { return {} }
// module.exports = () => ({})

// cnpm i webpack-merge -D
const { merge } = require('webpack-merge')

const common = require('./config/common.js')
const build = require('./config/build.js')
const serve = require('./config/serve.js')

// process这个模块是node运行时环境中的一个全局模块（不需要require导入）
// 使用大名鼎鼎的 cross-env 这个工具，可以非常方便地向node进程环境中添加自定义的环境变量
// cnpm i cross-env -D
// 在命令行中使用的语法： cross-env ABC=123 npm run xxx
// 区分“production生产环境”和“development开发环境”
// const isDev = process.env.NODE_ENV === 'development'
// console.log('是否是开发环境', isDev)
// 如果你执行 npm run build，那么 isDev=false
// 如果你执行 npm start，那么 isDev=true

// 除了使用cross-env这个第三方来实现“区分生产和开发环境”
// 还可以使用--env 或者 --node-env 来实现相同的功能（仅webpack v5支持）

// 如果isDev=true，表示开发环境，合并common和serve中的配置选项
// 如果isDev=false，表示生产环境，合并common和build中的配置选项
module.exports = env =>merge(common, env.development ? serve : build)
// module.exports = function(env) {
//   console.log('----', env)
//   return merge(common, env==='development' ? serve : build)
// }
