const mongoose = require('mongoose')

module.exports = mongoose.model('cates', new mongoose.Schema({
  cate_zh: String,
  cate: String
}))
