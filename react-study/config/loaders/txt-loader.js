// 用于处理txt模块中的 # 字符

module.exports = function(source) {
  // do something
  var str = source.replace(/\#/img, '-')
  // 最后要求返回指定格式，一定要写成这样
  return `module.exports=${JSON.stringify(str)}`
}
