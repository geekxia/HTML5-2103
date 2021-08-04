type Item = {
	id: number,
	name: string,
	age: number
}

interface State {
	msg: string
	list: Array<Item>
}

const state: State = {
	msg: 'hello vuex',
	list: [{id:1,name:'lisi',age:20}, {id:2,name:'wangwu',age:30}]
}
const getters = {}
const mutations = {
	updateList(state, payload) {
		console.log('---vuex', payload)
		state.list.push(payload)
	}
}
const actions = {}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
