import { reactive } from 'vue'

export default function useTodoList(arr) {
	// reactive定义响应式数据（引用数据类型）
	let list = reactive(arr||[])

	const addTodo = task => {
		list.push({
			id: Date.now(),
			task
		})
	}
	const delTodo = idx => {
		list.splice(idx, 1)
	}
	return { list, addTodo, delTodo }
}
