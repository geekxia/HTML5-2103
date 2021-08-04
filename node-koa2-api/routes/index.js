const KoaRouter = require('@koa/router')
const multer = require('@koa/multer')
const upload = multer()

const router = new KoaRouter({})
const v = '/api/v2'
// 引入User这个控制器
const U = require('../controller/user')
const G = require('../controller/good')

const checkToken = require('../middleware/checkToken')

router
.post(`${v}/user/login`, U.login)
.get(`${v}/user/getUserInfo`, checkToken, U.getUserInfo)
.post(`${v}/user/addUser`, U.addUser)
.get(`${v}/user/updateUserStatus`, checkToken,  U.updateUserStatus)
.get(`${v}/user/getUserList`, checkToken, U.getUserList)
.get(`${v}/good/list`, checkToken, G.getGoodList)
.get(`${v}/good/allCates`, checkToken, G.getAllCates)
.post(`${v}/good/update`, checkToken, G.addOrEditGood)
.post(`${v}/upload/img`, G.uploadImg)
.get(`${v}/good/info`, checkToken, G.getGoodInfo)

module.exports = router
