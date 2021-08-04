var express = require('express');
var router = express.Router();
var jwt = require('../utils/jwt')
var userModel = require('../models/userModel')
var cartModel = require('../models/cartModel')
var goodModel = require('../models/goodModel')
var orderModel = require('../models/orderModel')


// 描述：添加购物车
// POST  /add
// 入参：{ id, num }
router.post('/add', (req,res)=>{
  let {id, num} = req.body
  if(!id) return res.json({err:1,msg:'id是必填参数'})
  // 鉴权
  jwt.verifyToken(req, res).then(user=>{
    // 在then如果能够拿到用户信息，就表示当前用户是处于正常的登录状态的
    console.log('user', user)
    const ele = {
      good_id: Object(id),
      num: parseInt(num || 1),
      user_id: Object(user._id)
    }
    // 查询carts集合status=1的当前商品是否存在？
    // 如果存在，num+1; 如果不存在，才执行insertMany
    const params = {
      good_id:ele.good_id,
      status:1,
      user_id:user._id
    }
    cartModel.find(params).then(docs=>{
      console.log('docs', docs)
      if(docs.length===1) {
        cartModel.updateOne(params,{$set:{num:docs[0].num+ele.num}})
          .then(()=>{
            res.json({err:0,msg:'success'})
          })
      }else{
        // 购物车入库
        cartModel.insertMany([ele]).then(()=>{
          res.json({err:0,msg:'success'})
        })
      }
    })

  })
})

// 描述：获取当前用户的购物车列表
// GET  /list
// 入参： {page,size}
router.get('/list', (req,res)=>{
  let { page, size } = req.query
  page = parseInt(page||1)
  size = parseInt(size||100)
  // 鉴权
  jwt.verifyToken(req,res).then(user=>{
    // 根据鉴权信息中的user_id来查询他所有购物车数据
    cartModel.find({user_id: user._id}).then(list=>{
      console.log('list', list)
      if(list.length>0){
        // 查询每一条购物车记录所对应的商品信息
        let count = 0
        const data = []
        // 拿到商品good_id所对应的商品信息
        list.map((ele,idx,arr)=>{
          // 使用购物车记录中的good_id来查询完整的商品信息
          goodModel.findById(ele.good_id).then(doc=>{
            count++
            data.push({
              _id: ele._id,
              num: ele.num,
              user_id: ele.user_id,
              good: doc
            })
            if(count===list.length) res.json({err:0,msg:'success',data: {list:data}})
          })
        })
      } else {
        res.json({err:0,msg:'success',data: {list}})
      }
    })
  })
})

// 描述：删除购物车记录
// GET  /del
// 入参：{ id }
router.get('/del', (req,res)=>{
  let { id } = req.query
  jwt.verifyToken(req,res).then(user=>{
    // 删除操作，用update方法修改数据的状态即可
    cartModel.deleteOne({_id:id})
      .then(()=>{
        res.json({err:0,msg:'删除成功'})
      })
  })
})

// 描述：购物车数量的变化
// GET  /update
// 入参： { id, num }
router.get('/update', (req, res)=>{
  let { id, num } = req.query
  if(!num || num<=0) return res.json({err:1,msg:'num有误'})
  num = parseInt(num)
  jwt.verifyToken(req,res).then(user=>{
    // 数据更新
    cartModel.updateOne({_id:Object(id)},{$set:{num}})
      .then(()=>{
        res.json({err:0,msg:'success'})
      })
  })
})

// 描述：立即购买、生成订单
// POST  /pay
// 入参：{ ids } 由_id连接而成的字符串，示例 werwioew;ioweiweow;iowewp
router.post('/pay', (req, res)=>{
  jwt.verifyToken(req,res).then(user=>{
    let { ids, addr_id } = req.body
    if(!ids) return res.json({err:1,msg:'请选择商品'})
    const idArr = ids.split(';').filter(ele=>ele)
    console.log('idArr', idArr)
    // 把购物车记录的status=-1
    let count = 0
    idArr.map(ele=>{
      cartModel.deleteOne({_id:Object(ele)})
        .then(()=>{
          count++
          // 表示购物车记录全部“删除”了
          if(count===idArr.length) {
            // 生成一个订单
            const order = {
              order_no: 'QF'+Date.now(),
              user_id: user._id,
              package: ids
            }
            orderModel.insertMany([order]).then(()=>{
              res.json({err:0,msg:'订单已生成',data: {order_no: order.order_no}})
            })
          }
        })
    })
  })
})

module.exports = router
