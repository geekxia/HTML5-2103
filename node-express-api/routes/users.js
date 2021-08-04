var express = require('express');
var router = express.Router();
var userModel = require('../models/userModel')
var { createToken, verifyToken } = require('../utils/jwt')

// 这个文件，就用于所有的users的增删改查

// 描述：用户注册接口
// URL: /api/v1/user/regist
router.post('/regist', (req, res)=>{
  // 第一步，接受入参并进行验证
  let { username, password, type } = req.body
  if(!username) return res.json({err: 1, msg:'username是必须参数'})
  if(!password) return res.json({err: 1, msg:'password是必须参数'})
  // 第二步，业务处理
  // do something
  // 加一个简单的验证：用户名不能重复
  userModel.find({username: username}).then(list=>{
    if(list.length>0) return res.json({err:2,msg:`${username} 已被占用`})
    // 第三步，入库
    var ele = { username, password }
    userModel.insertMany([ele]).then(()=>{
      res.json({err:0, msg:'success',data:{username}})
    })
  })
})

// 描述：用户登录接口
// URL：/api/v1/user/login
router.post('/login', (req, res)=>{
  // 第一步，接收入参并验证
  let { username, password } = req.body
  if(!username) return res.json({err: 1, msg:'username是必须参数'})
  if(!password) return res.json({err: 1, msg:'password是必须参数'})
  // 业务处理，判断用户是否注册了？
  userModel.find({username}).then(list=>{
    if(list.length===0) return res.json({err:1,msg:`${username} 未注册`})
    // 进一步判断，用户名和密码是否对应得上？
    userModel.find({username, password}).then(list=>{
      if(list.length===0) return res.json({err:1,msg:'用户名和密码不匹配'})
      // 表示登录成功，成功之后实现“用户鉴权”
      // 现在市场上流行的做法：使用token鉴权
      var token = createToken({username,password,_id:list[0]._id})
      res.json({err:0,msg:'success',data:{token}})
    })
  })

})

module.exports = router;
