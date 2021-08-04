var mongoose = require('mongoose')

module.exports = mongoose.model('goods', new mongoose.Schema({
  name: String, // 商品名称
  desc: String, // 商品描述
  cate: String, // 所属品类
  price: String,// 销售价格
  img: String,  // 商品图片
  rank: { type: Number, default: 0 }, // 竞价排名
  create_time: { type: Number, default: Date.now() }, // 入库时间
  hot: { type: Boolean, default: false }  // 是否热销
}))
