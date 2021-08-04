const goodModel = require('../model/good')
const cateModel = require('../model/cate')
const fs = require('fs')
const path = require('path')

class GoodController {
  // 描述：获取商品列表
  static async getGoodList(ctx) {
    let { page, size, cate, name } = ctx.request.query
    page = parseInt(page || 1)
    size = parseInt(size || 10)
    name = name || ''
    let params = {
      cate: cate || '',
      name: new RegExp(name, 'img')
    }
    if(!params.cate) delete params.cate
    const total = await goodModel.find(params).count()
    const list = await goodModel.find(params).limit(size).skip((page-1)*size).sort({create_time: -1})
    ctx.body = {
      err: 0,
      msg: 'success',
      data: { total, list }
    }
  }

  // 描述：获取商品品类列表
  static async getAllCates(ctx) {
    const list = await cateModel.find({})
    ctx.body = {
      err: 0,
      msg: 'success',
      data: { list }
    }
  }

  static async addOrEditGood(ctx) {
    let { id, name, img, desc, price, cate, hot } = ctx.request.body
    // 验证
    const ele = {
      name,
      img: img || '',
      desc,
      price,
      cate,
      hot: hot || false
    }
    let info = null
    if(id) {
      info = await goodModel.findOneAndUpdate({_id: id}, ele)
    }else{
      info = await goodModel.insertMany([ele])
    }
    ctx.body = { err: 0, msg: 'success', data: { info }}
  }

  // 图片上图
  static async uploadImg(ctx) {
    console.log('ctx xxx', ctx.request.files.xxx)
    // 文件fs数据
    const file = ctx.request.files.xxx
    const readStream = fs.createReadStream(file.path)
    const imgName = `${Date.now()}_${file.name}`
    const writeStream = fs.createWriteStream(path.resolve(__dirname, `../public/cdn/${imgName}`))
    await readStream.pipe(writeStream)
    ctx.body = { err: 0, msg: 'success', data: {img: `/cdn/${imgName}`} }
  }

  static async getGoodInfo(ctx) {
    let { id } = ctx.request.query
    let info = await goodModel.findOne({_id: id})
    ctx.body = {err: 0, msg:'success', data: {info}}
  }
}

module.exports = GoodController
