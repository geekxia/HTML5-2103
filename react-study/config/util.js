
// 这是node环境，从node运行时环境中导入path这个模块
const path = require('path')

// 封装方法拼接绝对路径
// 此时此刻：__dirname = D:\2103\react-study\config\
function resolve(arg) {
  return path.resolve(__dirname, '../', arg)
}

module.exports = {
  resolve
}
