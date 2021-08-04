import { fetchCnodeList } from '@/utils/api.js'

export default {
	// 手动开启当前子store的命名空间，否则map*系列API无法使用。
	namespaced: true,
	// state
	// 作用：用于定义可共享的数据（只要是在state中声明的变量，在任何组件中都可使用）。
	// 特点：只要state中的变量发生变化，任何组件视图都会自动更新。
	state: {
		count: 1,   // Home.vue   User.vue
		list: [],    // 表示可以共享的文章列表数据
	},
	// getters
	// 作用：类似于Vue组件中的computed计算属性
	// 特点：只有当getters方法所关联的state变量发生变化时，getters方法都会再次执行。这是因为getters也具缓存的特性。
	// 语法：getterFn(state)，需要注意的getters方法一定要有返回值。
	// 说明：getters像computed计算属性一样，可以直接当作变量使用。
	getters: {
		total(state) {
			return state.list.length
		}
	},
	// mutations
	// 作用：用于定义修改state数据的方法
	// 特点：修改state数据是同步的，并且在devtools中有修改的记录（便于调试）。
	// 语法：所有的mutations方法的语法都是一样的 —— mutate(state,payload)，payload是actions或组件触发我时所携带的数据（可以是任何数据类型）。
	// mutations方法给actions或者给vue组件来使用的。
	// 在vue组件中或者在actions中，使用 $store.commit("mutations")
	mutations: {
		updateCount(state, payload) {
			console.log('有人触发了我', state, payload)
			state.count += payload
		},
		updateList(state, payload) {
			state.list = payload
		}
	},
	// actions
	// 作用：用于与后端API接口进行交互。
	// 特点：是异步操作。
	// 语法：所有的actions方法的语法都是一样的 —— action(store,payload)，payload是组件触发我时携带的调接口的入参。
	// actions方法都是给vue组件来使用的。
	// 在vue组件中，使用 $store.dispatch("actions方法")
	// 注意：在actions方法中可以直接修改state，但是Vuex不推荐这么做，这会导致devtools没有记录（难以调试）
	actions: {
		// 这个store，你可理解成组件内部的this.$store
		getList(store, payload) {
			// 调接口
			fetchCnodeList(payload).then(res=>{
				// 拿到后端数据，交给mutations，再由mutations修改state
				console.log('文章列表', res)
				// store.commit('updateList', res)
				store.state.list = res  //
			})
		}
	}
}
