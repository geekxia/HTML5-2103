const mongoose = require('mongoose')

module.exports = mongoose.model('users', new mongoose.Schema({
  username: String,
  role: String,
  password: { type: String, default:'123456' },
	status: { type: Number, default: 1 },
	create_time: { type: Number, default: Date.now() }
}))
