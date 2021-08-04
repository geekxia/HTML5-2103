import fetch from './axios'

// 如果是GET请求，入参使用 params字段
// 如果是POST请求，入参使用 data字段

// 描述：获取商品列表
export function fetchGoodList(params) {
	return fetch({url: '/good/list', method: 'GET', params})
}

// 描述：获取所有spu品类
export function fetchAllCates(params) {
	return fetch({url: '/good/cates', method: 'GET', params})
}

// 描述：根据商品_id来获取完整的商品详情
export function fetchGoodDetail(params) {
	return fetch({url: '/good/detail', method: 'GET', params})
}

// 描述：用户登录
export function fetchLogin(data) {
	return fetch({url: '/user/login', method: 'POST', data})
}

// 描述：用户注册
export function fetchRegist(data) {
	return fetch({url: '/user/regist', method: 'POST', data})
}

// 描述：添加购物车
export function fetchAddToCart(data) {
	return fetch({url: '/cart/add', method: 'POST', data})
}

// 描述：获取购物车列表
export function fetchCartList(params) {
	return fetch({url: '/cart/list', method: 'GET', params})
}

// 描述：删除购物车记录
export function fetchCartDel(params) {
	return fetch({url: '/cart/del', method: 'GET', params})
}

// 描述：修改购物车中商品数量
export function fetchCartUpdate(params) {
	return fetch({url: '/cart/update', method: 'GET', params})
}

// 描述：提交购物车
export function fetchCartPay(data) {
	return fetch({url: '/cart/pay', method: 'POST', data})
}

export default {
	fetchGoodList,
	fetchAllCates,
	fetchGoodDetail,
	fetchLogin,
	fetchRegist,
	fetchAddToCart,
	fetchCartList,
	fetchCartDel,
	fetchCartUpdate,
	fetchCartPay
}
