<template>
<div class='zhihu'>
	<!-- 这个tabs要触发url的变化 -->
	<div class='tabs'>
		<router-link tag='span' to='/zhihu/a' active-class='on'>动态</router-link>
		<router-link tag='span' to='/zhihu/b' active-class='on'>文章</router-link>
		<router-link tag='span' to='/zhihu/c' active-class='on'>专栏</router-link>
	</div>

	<router-view></router-view>

</div>
</template>

<script>
	export default {

	}
</script>

<style lang='scss' scoped>
.zhihu {
	text-align: center;
}
.tabs {
	width: 70%;
	margin: 20px auto;
	text-align: center;
	dispaly: flex;
	&>span {
		flex: 1;
		border: 1px solid #ccc;
		cursor:pointer;
		line-height: 40px;
		padding: 0 20px;
	}
	&>span.on {
		color: red;
	}
}
</style>
