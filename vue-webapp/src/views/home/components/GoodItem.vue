<template>
<div class='qf-good-item' >
	<img @touchstart='skipToDetail' :src='($img.imgBase+good.img)' alt="" />
	<div class='name' v-text='good.name'></div>
	<div class='bot'>
		<span>￥</span>
		<span v-text='good.price'></span>
		<span>看相似</span>
	</div>
</div>
</template>

<script>
export default {
	props: {
		good: { type: Object, required: true }
	},
	methods: {
		skipToDetail() {
			// 使用“路由命名”进行编程式导航
			this.$router.push({name:'good', params: {id: this.good._id}})
		}
	}
}
</script>

<style lang='scss' scoped>
.qf-good-item {
	flex: 1;
	margin: .133333rem;
	background: white;
	&>img {
		display: block;
		width: 4.613333rem;
		height: 4.613333rem;
		margin: 0 auto;
		border-radius: .066667rem;
	}
	// 多选文字显示省略号
	.name {
		height: 1.2rem;
		line-height: .6rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.bot {
		height: .6rem;
		line-height: .6rem;
		overflow: hidden;
		color: red;
		&>span:last-child {
			float: right;
			color: black;
		}
	}
}
</style>
