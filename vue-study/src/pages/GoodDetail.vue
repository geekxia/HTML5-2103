<template>
<div>
	<h1>商品详情</h1>
	<h1 v-text='info.id'></h1>
</div>
</template>

<script>
	export default {
		// Vue-Router的“动态路由”也支持props传递参数
		props: {
			id: { type: String, required: true }
		},
		data() {
			return {
				info: {}
			}
		},
		created() {
			// 接受列表页面传递过来的参数
			console.log('$route', this.$route)

			// 如果路由跳转，使用query传参，接受参数方式如下：
			// const id = this.$route.query.id

			// 如果路由跳转，使用动态路由的方式传参，接受参数的写法如下：
			// const id = this.$route.params.id
			const id = this.id
			this.info['id'] = id
		}
	}
</script>
