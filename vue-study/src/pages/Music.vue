<template>
<div class="music">
	<h1>音乐列表</h1>
	<div>
		<input type="text" v-model.trim='name' @keyup.enter='search' />
	</div>
	<div v-for='item in list' :key='item.id'>
		<div v-text='item.name'></div>
	</div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
	data() {
		return {
			name: ''
		}
	},
	computed: {
		...mapState('music', ['list'])
	},
	created() {
		this.init()
	},
	methods: {
		...mapActions('music', ['getMusic']),
		init() {
			// 触发调接口
			const str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.top&searchid=69961267798125754&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&_=1623307135184&cv=4747474&ct=24&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&uin=0&g_tk_new_20200303=765605429&g_tk=5381&hostUin=0&loginUin=0'
			var params = {}
			str.split('&').map(ele=>{
				var arr = ele.split('=')
				params[arr[0]] = arr[1]
			})
			params.w = this.name
			// 触发actions
			this.getMusic(params)
		},
		search() {
			this.init()
		}
	}
	// mounted() {
	// 	fetchQqMusic(params).then(res=>{
	// 		console.log('音乐列表', res)
	// 	})
}
</script>

<style scoped>
.music {
	text-align: center;
}
</style>
