var jwt = require('jsonwebtoken')

// 生成token
function createToken(data) {
  return jwt.sign(
    {
      data: data,  // 将被加密的用户信息
      iat: Math.floor(Date.now() / 1000) + 24*60*60   // 单位是秒
    },'qf');
}

// 验证token（koa的写法）
function verifyToken(ctx) {
  return new Promise((resolve,reject)=>{
    // 接收token
    const token = ctx.request.headers.authorization
    try{
      // 验证token
      var decoded = jwt.verify(token, 'qf')
      resolve(decoded.data)
    }catch(err){
      ctx.body = {err:-1, msg:'token invaild'}
      // ctx.throw(401, {err:-1, msg:'token invaild'})
    }
  })
}

module.exports = {
  createToken,
  verifyToken
}
