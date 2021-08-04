import fetch from './fetch.js'

// 获取Cnode文章列表
export function fetchCnodeList(params) {
	return fetch({
		url: '/api/v1/topics',
		method: 'GET',
		params
	})
}

// 获取QQ音乐列表
export function fetchQqMusic(params) {
	return fetch({url:'/soso/fcgi-bin/client_search_cp',method:'GET',params})
}

export default {
	fetchCnodeList,
	fetchQqMusic
}


// 在同一个.js模块文件中，有且最多只能有一个export default，但是可以有多个 export。

// export default abc
// import yyy from

// export a
// export b
// import { a, b } from
