var mongoose = require('mongoose')

module.exports = mongoose.model('users', mongoose.Schema({
  username: String,
  password: String,
  role: { type: Number, default: 0 },   // 用于管理系统
  avatar: { type: String, default: '' },      // 图像
  create_time: { type: Number, default: Date.now() }  // 表示用户注册时间
}))
