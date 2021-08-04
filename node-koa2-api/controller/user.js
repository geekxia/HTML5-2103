const jwt = require('../utils/jwt')
// 引入model
const userModel = require('../model/user')

class UserController {
	// 登录接口
	static async login(ctx) {
		let { username, password } = ctx.request.body
		const list = await userModel.find({username, password})
		if(list.length === 1) {
			const token = jwt.createToken(list[0])
			ctx.body = {
				err: 0,
				msg: 'success',
				data: { token }
			}
		}else{
			ctx.body = {
				err: 1,
				msg: '用户名和密码不匹配',
				data: {}
			}
		}
	}
	// 进入管理系统的第一个接口（发生登录成功之后）
	static async getUserInfo(ctx) {
		const u = ctx.user
		console.log('u', u)
		const userInfo = await userModel.findOne({username: u.username})
		ctx.body = {
			err: 0,
			msg: 'success',
			data: {
				userInfo
			}
		}
	}
	// 管理员添加用户
	static async addUser(ctx) {
		let { username, role } = ctx.request.body
		const u = await userModel.findOne({username})
		console.log('u', u)
		if(u) {
			ctx.body = { err: 1, msg: '用户名已存在' }
		}else{
			await userModel.insertMany([{username, role}])
			ctx.body = { err: 0, msg: 'success' }
		}
	}
	// 管理员禁用或启用用户
	static async updateUserStatus(ctx) {
		let { status, id } = ctx.request.query
		await userModel.findOneAndUpdate({_id:id}, {status})
		ctx.body = { err: 0, msg: 'success' }
	}
	// 获取用户列表
	static async getUserList(ctx) {
		const list = await userModel.find({})
		ctx.body = {
			err: 0,
			msg: 'success',
			data: {list}
		}
	}
}

module.exports = UserController
