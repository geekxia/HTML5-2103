import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	setup() {
		const route = useRoute()
		return ()=>(
			<>
				<h1 style={{color: 'red'}}>列表详情页</h1>
				<h1>当前ID是：{route.params.id}</h1>
			</>
		)
	}
})
