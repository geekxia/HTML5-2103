var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/webapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var con = mongoose.connection
con.on('open', ()=>console.log('数据库连接成功'))
con.on('error', ()=>console.log('数据库连接失败'))
