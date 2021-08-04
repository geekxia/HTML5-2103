var mongoose = require('mongoose')

module.exports = mongoose.model('goods', mongoose.Schema({
  name: String,
  img: String,
  price: Number,
  desc: String,
  cate: String,
  hot: { type: Boolean, default: false },
  rank: { type: Number, default: 0 },  // 用于排名
  create_time: { type: Number, default: Date.now() },
  stutas: { type: Number, default: 1 }
}))
