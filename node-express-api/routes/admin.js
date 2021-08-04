// 为了区别webapp和admin管理系统的接口
// 我用这个admin.js来编写管理系统的接口

var express = require('express')
var router = express.Router()
var userModel = require('../models/userModel')
var { createToken, decodeToken } = require('../utils/jwt')

// 描述：用户登录接口
// URL：/api/v1/admin/login
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

// 描述：根据token返回用户信息
router.get('/userinfo', (req, res)=>{
    const { token } = req.query
    // 设计角色：admin, editor, manager, ceo, baoan
    var roleArr = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        ['editor'],  // role=8
        ['admin']    // role=9
    ]
    decodeToken(token, res).then(user=>{
        userModel.find({username: user.username}).then(list=>{
            var u = list[0]
            if(u) {
                res.json({
                    err: 0,
                    msg: 'success',
                    data: {
                        roles: roleArr[u.role],
                        name: u.username,
                        avatar: u.avatar,
                        introduction: "你的一个好学生"
                    }
                })
            }
        })
    })
})


module.exports = router
