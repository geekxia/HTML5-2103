import { fetchQqMusic } from '@/utils/api'

export default {
	namespaced: true,
	state: {
		list: []   // 音乐列表
	},
	mutations: {
		updateList(state, payload) {
			// do something
			state.list = payload
		}
	},
	actions: {
		getMusic(store, payload) {
			console.log('--')
			fetchQqMusic(payload).then(res=>{
				console.log('Vuex 音乐列表', res)

				store.commit('updateList', res.song.list)
			})
		}
	}
}
