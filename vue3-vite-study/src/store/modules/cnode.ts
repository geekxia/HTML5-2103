import api from '@/utils/api'

const state = {
	cates: [
	  { id: 1, tab: '', label: '全部' },
	  { id: 2, tab: 'good', label: '精华' },
	  { id: 3, tab: 'ask', label: '问答' },
	  { id: 4, tab: 'share', label: '分享' },
	  { id: 5, tab: 'job', label: '招聘' }
	],
	list: []
}
const getters = {}
const mutations = {
	updateList(state, payload) {
		state.list = payload
		console.log('3', state.list)
	}
}
const actions = {
	getList({commit}, payload) {
		api.fetchTopics(payload).then(res=>{
			console.log('2', res.data)
			commit('updateList', res.data)
		})
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
