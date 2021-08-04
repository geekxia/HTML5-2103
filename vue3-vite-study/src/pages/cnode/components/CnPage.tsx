import { defineComponent, toRefs, computed } from 'vue'

export default defineComponent({
	props: {
		value: { type: Number, required: false, default: 1 },
		onChange: { type: Function, required: false }
	},
	setup(props) {
		let { onChange } = props
		let { value } = toRefs(props)

		const pages = computed(()=>{
			var v = value.value
      return v <= 3 ? [1,2,3,4,5] : [v-2, v-1, v, v+1, v+2]
		})

		const prev = ()=> {
      if(value.value===1) return alert('已经是第一页了')
      onChange&&onChange(value.value-1)
    }

		// 优先级更高
		return ()=>(
			<div className='pages'>
				<span onClick={prev}>{'<<'}</span>
		    { value.value > 3 && <span>...</span>}
				{
					pages.value.map(ele=>(
						<span
							className={value.value===ele?"on":""}
							onClick={()=>onChange&&onChange(ele)}
							key={ele}
						>
						{ele}
						</span>
					))
				}
		    <span>...</span>
		    <span onClick={()=>onChange&&onChange(value.value+1)}>{'>>'}</span>
		  </div>
		)
	}
})
