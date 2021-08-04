import { defineComponent, computed, reactive } from 'vue'
import { useStore } from "vuex"

export default defineComponent({
	setup() {
		const store = useStore()
		console.log('store', store.state.test)

		// 如果用computed转化数据，相当于 ref响应式
		const msg = computed(()=>store.state.test.msg)

		const renderList1 = ()=> {
			const list = reactive(store.state.test.list)
			return list.map(ele=>(
				<div key={ele.id}>
					{`${ele.id}-${ele.name}-${ele.age}`}
				</div>
			))
		}

		const renderList2 = ()=> {
			let { test } = store.state
			return test.list.map(ele=>(
				<div key={ele.id}>
					{`${ele.id}-${ele.name}-${ele.age}`}
				</div>
			))
		}

		const addItem = ()=>{
			// console.log('store', store)
			store.commit('test/updateList', {id: 10, name:'lucy', age: 40})
		}

		return ()=>(
			<>
				<h1 style={{color: 'red'}}>学习Vuex</h1>
				<h1>来自Vuex中的msg：{msg.value}</h1>
				<hr/>
				<div>{renderList1()}</div>
				<hr/>
				<div>{renderList2()}</div>
				<hr/>
				<button onClick={addItem}>添加一条数据</button>
			</>
		)
	}
})
