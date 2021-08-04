<template>
	<div class='navs'>
		<!-- 声明式路由跳转 -->
		<!-- router-link默认会被渲染成a标签 -->
		<!-- 使用场景：导航、tabbar这种情况下使用 -->
		<!-- 警告：在vue2.0中，v-for和v-if同时作用于同一个节点。v-for的优先级更高。 -->
		<!-- exact，是布尔类型，表示"精准匹配"，当url===path时（url路径与path属性完全相等）。 -->
		<span v-for='n in routes' :key='n.id'>
			<router-link
				:to='n.path'
				exact
				exact-active-class='on'
				v-text='n.text'
				v-if='!n.hidden'
			/>
		</span>

	</div>
</template>

<script>
// 如何判断一个变量是不是响应式数据？打印出来，如果见到了__ob__
// 注意：非响应式，不能使用指令去操作。
import routes from '@/pages/'

export default {
	data() {
		return {
			routes
		}
	}
}
</script>

<style lang='scss' scoped>
.navs {
  text-align: center;
  height: 80px;
  line-height: 80px;
  &>span>a {
    padding: 10px 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    text-decoration: none;
		color: black;
  }
  &>span>a.on {
    color: red;
  }
}
</style>
