import { defineComponent, ref } from 'vue'

// Composition API理论上，可以替代掉所有其它使用选项的解决方案
export default defineComponent({
	setup() {
		let num = ref<number>(0)
		const handle = ()=> num.value++
		// 优先级更高
		return ()=>(
			<>
				<div>测试JSX语法</div>
				<h1>{num.value}</h1>
				<button onClick={handle}>自增</button>
			</>
		)
	},
	// 优先级更低
	render() {
		return (
			<div>
 				<h1>Hello JSX H1</h1>
			</div>
		)
	}
})
