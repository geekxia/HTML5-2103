Vue.filter('t', function(val){
	var stamp = Date.parse(val)
	// 时间戳：距离1970到现在毫秒值
	var t = (Date.now() - stamp) / (1000*60*60)  // 单位：小时
	// 几秒前、几分钟前、几小时前、几天前、几个月
	return (
		t>=24
		? ((t/24)>=30 ? Math.floor((t/24/30))+'月前':Math.floor((t/24))+'天前')
		: (t>=1)?Math.floor(t)+'小时前': (t*60)>=1?Math.floor(t*60)+'分钟前':Math.floor(t*60*60)+'秒前')
})

Vue.component('cn-list', {
	template: `
	<div class='article-list'>
    <div class='article' v-for='item in newList'>
      <img
				:src='(item.author && item.author.avatar_url)'
				:title='(item.author && item.author.loginname)'
			/>
      <div class='num'>
        <span v-text='item.reply_count'></span>
        <span>/</span>
        <span v-text='item.visit_count'></span>
      </div>

			<span class='label on' v-if='item.top'>置顶</span>
      <span class='label' v-if='(!item.top&&item.label)' v-text='item.label'></span>

      <span class='title' v-text='item.title'></span>
      <span class='time'>{{item.last_reply_at | t}}</span>
    </div>
  </div>
	`,
	props: {
		data: { type: Array, required: false, default: [] },
		cates: { type: Array, required: false, default: [] }
	},
	computed: {
		newList() {
			// 它是由 cates品类集合、list文章列表共同决定的
			this.data.map((ele1,idx)=>{
				var res = this.cates.find(ele2=>ele2.tab===ele1.tab)
				// 手动添加自定义字段
				this.data[idx]['label'] = (res ? res.label : "")
			})
			return this.data
		}
	},
	mounted() {
		console.log('data', this.data)
	}
})
