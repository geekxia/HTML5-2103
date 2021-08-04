var app = new Vue({
	el: '#app',
	data: {
		list: [],
		cates: [
			{ id: 1, label: '全部', tab: '' },
			{ id: 2, label: '问答', tab: 'ask' },
			{ id: 3, label: '分享', tab: 'share' },
			{ id: 4, label: '招聘', tab: 'job' },
			{ id: 5, label: '精华', tab: 'good'}
		],
		tab: '',
		page: 1,
		loaded: false
	},
	mounted() {
		this.init()

	},
	watch: {
		// 当品类发生变化时，重置page=1
		tab() {
			this.page = 1
			this.init()
		},
		page() {
			this.init()
		}
	},
	methods: {
		init() {
			// 开始调接口，未加载完成
			this.loaded = false
			var data = {
				page: this.page,
				tab: this.tab,
				limit: 5
			}
			fetchCnodeList(data).then(list=>{
				console.log('文章列表', list)
				this.list = list
				// 调接口结束，加载完成
				this.loaded = true
			})
		}
	}
})
