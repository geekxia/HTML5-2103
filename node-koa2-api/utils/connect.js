const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.once('open', ()=>{
  console.log('数据库连接成功')
})
db.on('error', ()=>{
  console.log('数据库连接失败')
})
