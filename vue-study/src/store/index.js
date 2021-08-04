import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入所有的子store
import study from './modules/study'
import music from './modules/music'

// 创建store实例
// 如何理解store?
// store，你可以把它理解成是数据的仓库、银行、存储中心。
const store = new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	// modules
	// 作用：把整个Vuex根store拆分成多个带有命名空间的子store，便于协同开发、代码维护。
	// modules对象的key名，就是“命名空间”。
	modules: {
		study,
		music
	}
})

export default store
