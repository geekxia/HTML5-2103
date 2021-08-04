import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import './style.css'

export default defineComponent({
	setup() {
		// 编程式路由跳转
		const router = useRouter()
		const skipToTest = () => {
			const id = Math.random()
			router.push('/detail/'+id)
		}
		// 优先级更高
		return ()=>(
			<>
				<h1 style={{color: 'red'}}>学习Vue-Router</h1>
				<button onClick={skipToTest}>跳转到详情页面</button>
			</>
		)
	}
})
