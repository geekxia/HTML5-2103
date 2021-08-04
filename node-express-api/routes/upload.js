var express = require('express');
var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var cpUpload = upload.fields([{ name: 'xxx', maxCount: 1 }])

var fs = require('fs')
var path = require('path')

// 图片上传，要使用post请求
// 图片上传，数据传输使用的二进制数据流：multipart/form-data
router.post('/img', cpUpload, (req, res)=>{
    // 第1步：接收图片数据（二进制）
    // 不建议通过node原生代码来接收，比较麻烦。建议使用 multer 这个工具帮助我们接收图片数据    
    const img = req.files.xxx[0]
    console.log('图片', img)
    
    // 第2步：把接收到的图片数据通过fs模块把数据写入到CDN服务器上（硬盘）
    var readSteam = fs.createReadStream(img.path)
    var cdnPath = `/cdn/${Date.now()}-${img.originalname}`
    var filePath = path.resolve(__dirname, `../public${cdnPath}`)
    var writeStream = fs.createWriteStream(filePath)
    // 管道流
    readSteam.pipe(writeStream)

    // 第3步：把图片在CDN服务器上的访问地址（URL）返回给客户端
    // writeStream的close事件，表示图片写入硬盘成功
    writeStream.on('close', ()=>{
        // 返回url，返回相对路径
        res.json({err:0, msg:'success', data: { url: cdnPath}})
    })
})

module.exports = router;
