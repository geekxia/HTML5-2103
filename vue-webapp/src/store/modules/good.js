import { fetchGoodList } from '@/utils/api'

export default {
	namespaced: true,
	state: {
		msg: 'hello good',
		// 缓存时间
		cache: {
			// 0: [],
			// 1: [],
			// 2: []
		}
	},
	mutations: {
		updateCache(state, payload) {
			// payload = { idx, arr }
			state.cache[payload.idx] = payload.arr
			// 深复制（深拷贝）
			// 经验：在vue2开发中，如果devtools中数据变了，但是视图不更新，强行深复制一次
			state.cache = JSON.parse(JSON.stringify(state.cache))
		},
		// 清除缓存
		cleanCache(state) {
			state.cache = {}
		}
	},
	actions: {
		getList(store, payload) {
			// payload = { idx, cate }
			// 调接口：根据品类来调接口
			fetchGoodList({cate: payload.cate}).then(res=>{
				store.commit('updateCache', {idx: payload.idx, arr: res.list})
			})
		}
	}
}
