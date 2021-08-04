var jwt = require('jsonwebtoken')

// 封装生成token的方法
function createToken(data) {
  return jwt.sign({
    exp: Math.floor(Date.now()/1000)+(60*60*24*1), // 指定token过期时间，单位是“秒”
    data: data
  }, 'qf')
}

// 封装验证token的方法
// 验证token，验证的是客户端传递过来的token
// verifyToken() 这个方法是给 api 接口
function verifyToken(req, res) {
  return new Promise((resolve, reject)=>{
    // 前端调接口时，使用ajax的headers.Authorization
    var token = req.headers.authorization
    try {
      // 对token进行解密时很容易失败
      // 如果token过期会直接报错
      // 如果是假的token也会直接报错
      // 如果前端没有传递token也会直接报错
      var decoded = jwt.verify(token, 'qf')
      console.log('解析成功', decoded.data)
      // 把token解密成功，给到Promise的.then()方法
      resolve(decoded.data)
    } catch (err) {
      // 如果token解密失败，我们就结束掉HTTP会话
      res.json({err:-1, msg:'token 无效'})
    }
  })
}

// 在 api 接口中使用 verifyToken() 的方式
// router.post('/addToCart', (req, res)=>{
//   verifyToken(req, res).then().catch()
// })

function decodeToken(token, res) {
  return new Promise((resolve, reject)=>{
    try {
      // 对token进行解密时很容易失败
      // 如果token过期会直接报错
      // 如果是假的token也会直接报错
      // 如果前端没有传递token也会直接报错
      var decoded = jwt.verify(token, 'qf')
      console.log('解析成功', decoded.data)
      // 把token解密成功，给到Promise的.then()方法
      resolve(decoded.data)
    } catch (err) {
      // 如果token解密失败，我们就结束掉HTTP会话
      res.json({err:-1, msg:'token 无效'})
    }
  })
}

module.exports = {
  createToken,
  verifyToken,
  decodeToken
}


// token实际上一个被加密过的字符串，一般用于加密用户信息
// token在生成时要给“暗号”，在token解密时也用到这个“暗号”
// token字符串由两个点“.”分割成三段：第1段是算法相关信息，第2段是加密的用户信息，第3段是生成token的暗号信息。

// 测试createToken()
// console.log(createToken({name:'jiaxing',age:18,pass:123,height:150}))

// 测试verifyToken()
// var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjQ1MTY3NjksImRhdGEiOnsibmFtZSI6ImppYXhpbmciLCJhZ2UiOjE4LCJwYXNzIjoxMjMsImhlaWdodCI6MTUwfSwiaWF0IjoxNjI0NDMwMzY5fQ.G_r9FEuxwRbHW0M-ojUhLwq7vsDS4LBpX3PeSZ7O2NQ'
// verifyToken(token)
