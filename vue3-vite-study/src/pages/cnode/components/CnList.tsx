import { defineComponent, computed, toRefs } from 'vue'
import { useStore } from 'vuex'


export default defineComponent({
	props: {
		data: { type: Object||Array, required: false, default: [] }
	},
	setup(props) {

    const store = useStore()

    // 使用store的数据
    const cates = store.state.cnode.cates
    const list = computed(()=>store.state.cnode.list)

    console.log('4', list)

		const newData = computed(()=>{
			const arr = list.map(ele=>{
        // 给每个元素添加一个自定义属性label
        ele.label = ele.top ? '置顶' : cates.find(e=>e.tab===ele.tab).label
        return ele
      })
			return arr
		})
		// 优先级更高
		return ()=>(
			<div className='article-list'>
			{
				list.value.map(ele=>(
					<div className='article' key={ele.id}>
			      <img src={ele.author.avatar_url} />
			      <div className='num'>
			        <span>{ele.reply_count}</span>
			        <span>/</span>
			        <span>{ele.visit_count}</span>
			      </div>
			      <span className='label' className={ele.top?"on":""}>{ele.label}</span>
			      <span className='title'>{ele.title}</span>
			      <span className='time'>{ele.last_reply_at}</span>
			    </div>
				))
			}
		  </div>
		)
	}
})
