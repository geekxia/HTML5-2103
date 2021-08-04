var express = require('express')
var router = express.Router()
var goodModel = require('../models/goodModel')
var cateModel = require('../models/cateModel')

// 描述：获取商品列表（不需要token鉴权）
// URL: /api/v1/good/list
router.get('/list', (req, res)=>{
  // 接收入参并验证
  let { page, size, name, hot, min_price, max_price, cate } = req.query
  // 必填参数的验证与响应
  // 非必填参数的验证与处理
  page = Number(page || 1)  // 用于.skip()
  size = Number(size || 10) // 用于.limit()
  min_price = Number(min_price || 0)
  max_price = Number(max_price || Infinity)
  // 用于.find()
  var params = {
    name: new RegExp(name || ''),  // 根据name字段进行模糊查询
    hot: (hot || false),
    // $gte 大于等于， $lte 小于等于
    // 人话：查询数据库中价格大于等于min_price，并且小于等于max_price的所有商品
    price: { $gte: min_price, $lte: max_price },
    cate: (cate || '')
  }
  // 如果用户没有传递hot字符，就默认用户不考虑“是否热销”，给用户所有数据
  if(!hot) delete params.hot
  console.log('查询参数', params)
  // 如果用户没有传递cate字段，就默认用户不考虑品类，给用户所有数据
  if(!cate) delete params.cate
  // 查询数据库
  goodModel.find(params).count().then(total=>{
    goodModel
      .find(params)
      .limit(size)
      .skip((page-1)*size)
      .sort({create_time: -1, rank:-1, price: 1})  // 1表示“升序排列” -1表示“降序排列”
      .then(list=>{
      res.json({err:0,msg:'success',data:{total,list}})
    })
  })
})

// 描述：根据_id查询商品完整详情
router.get('/detail', (req, res)=>{
  let { id } = req.query
  if(!id) return res.json({err: 1, msg:'id是必填'})
  goodModel.findById(id).then(doc=>{
    // console.log()
    res.json({err:0, msg:'success', data: doc})
  })
})


// 描述：获取所有品类
// GET  /cates
// 入参： {}
router.get('/cates', (req,res)=>{
  cateModel.find().then(list=>{
    res.json({err:0,msg:'succuess', data: {list}})
  })
})


// 描述：商品新增
router.post('/add', (req, res)=>{
  let {name,desc,price,hot,img,cate} = req.body
  // 参数验证
  const ele = { name,desc,price,hot,img,cate }
  goodModel.insertMany([ele]).then(()=>{
    res.json({err:0, msg:'success'})
  })
})

module.exports = router
