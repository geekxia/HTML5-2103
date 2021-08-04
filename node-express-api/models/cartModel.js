var mongoose = require('mongoose')

module.exports = mongoose.model('carts', mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,   // 用户ID
  good_id: mongoose.Schema.Types.ObjectId,   // 商品ID
  num: Number,       // 数量
  create_time: { type: Number, default: Date.now() }
}))
