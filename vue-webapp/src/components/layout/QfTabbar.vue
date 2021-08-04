<template>
<div class="qf-tabbar">
	<!-- tabbar -->
	<van-tabbar active-color='#FF3437' route>
		<van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
		<van-tabbar-item icon="search" to='/find'>品类</van-tabbar-item>
		<van-tabbar-item icon="friends-o" to='/cart'>购物车</van-tabbar-item>
		<van-tabbar-item icon="setting-o" to='/user'>我的</van-tabbar-item>
	</van-tabbar>
</div>
</template>

<script>

import { Tabbar, TabbarItem } from 'vant'
export default {
	components: {
		[Tabbar.name]: Tabbar,
		[TabbarItem.name]: TabbarItem
	}
}
</script>

<style>
</style>
