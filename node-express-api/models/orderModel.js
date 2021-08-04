const mongoose = require('mongoose')

module.exports = mongoose.model('orders', new mongoose.Schema({
  order_no: String,
  create_time: { type: Number, default: Date.now() },
  user_id: String,
  status: { type: Number, default: 1 },
  package: String,
  addr_id: String
}))
