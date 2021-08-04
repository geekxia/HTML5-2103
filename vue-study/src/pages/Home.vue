<template>
<div class='home'>
	<h1>首页</h1>

	<hr>
	<h1 v-text='count'></h1>
	<hr>

	<div
		v-for='item in list'
		:key='item.id' class='row'
		@click='skipToDetail(item)'
	>
		<span v-text='item.id'></span>
		--
		<span v-text='item.name'></span>
		--
		<span v-text='item.price'></span>
	</div>
	<hr>

	<img :src="$img.i1" alt="" />
	<!-- <img :src="$img.i2" alt="" /> -->

</div>
</template>

<script>
import { mapState } from 'vuex'
// 导出组件
export default {
	name: 'Home',
	data() {
		return {
			list: [
				{ id: 1, name: '手机', price: 2000 },
				{ id: 2, name: '电脑', price: 12000 }
			]
		}
	},
	computed: {
		...mapState('study', ['count'])
	},
	created() {
		console.log('Home created')
	},
	destroyed() {
		console.log('Home destroyed')
	},
	methods: {
		skipToDetail(item) {
			// 编程式路由跳转，使用js代码来改变URL

			// 路由传参的第一方案：query传参
			// this.$router.push('/good/detail?id='+item.id)
			// this.$router.push({name:'gd', query:{id:item.id}})

			// 路由传参的第二方案：动态路由
			// this.$router.push('/good/detail/'+item.id)
			this.$router.push({name:'gd', params:{id:item.id+''}})
		}
	}
}
</script>

<style scoped>
.home {
	text-align: center;
}
.row {
	line-height: 60px;
	border-bottom: 1px solid #ccc;
	cursor: pointer;
}
</style>
