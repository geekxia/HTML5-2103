import { defineComponent, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
	props: {
		value: { type: String, required: false },
		onChange: { type: Function, required: false }
	},
	setup(props){
		// 直接解构的变量，响应式会失效
		let { onChange } = props
		// 使用 toRefs 解决“因为解构响应式失效”的问题
		let { value } = toRefs(props)

		const cates = useStore().state.cnode.cates

		// 优先级更高
		return ()=>(
			<div className='cates'>
				{
					cates.map(ele=>(
						<span
							className={ele.tab===value.value?"on":""}
							key={ele.id}
							onClick={()=>onChange&&onChange(ele.tab)}
						>
							{ele.label}
						</span>
					))
				}
			</div>
		)
	}
})
