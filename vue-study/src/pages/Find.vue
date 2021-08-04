<template>
<div class='find'>
	<h1>测试Vuex状态管理</h1>
	<h1 v-text='count'></h1>
	<button @click='clickHandle("add")'>[Vuex count]自增</button>
	<button @click='clickHandle("sub")'>[Vuex count]自减</button>
	<hr>

	<h1>Cnode文章列表：<span v-text='total'></span>条</h1>
	<div v-for='item in list' :key='item.id'>
		<span v-text='item.title'></span>
	</div>

</div>
</template>
<script>

import {
	mapState,
	mapGetters,
	mapActions,
	mapMutations
} from 'vuex'

// mapState, mapGetters 映射Vuex中的state和getters，必须在computed计算属性中使用。
// mapActions, mapMutations 映射Vuex中mutations和actions，必须在methods中使用。

export default {
	// 计算属性，可以直接当声明式变量来使用。
	// 当data声明式变量名和map*系列函数的名字冲突时，会导致变量的覆盖。建议做法，把data变量改成其它名字。
	computed: {
		...mapState('study', ['list', 'count']),  // this.list  this.count
		...mapGetters('study', ['total'])
	},
	mounted() {
		console.log('store', this.$store)
		// 页面一初始化时，就触发调接口

		// this.$store.dispatch('study/getList', {tab:'ask',page:1,limit:5})
		this.getList({tab:'ask',page:1,limit:5})
	},
	methods: {
		...mapActions('study', ['getList']),
		...mapMutations('study', ['updateCount']),
		clickHandle(flag) {
			// Vuex不建议这种“非常粗暴地修改Vuex中的数据”的方式
			// this.$store.state.count++
			// 正确的做法是，使用mutations方法来修改（好处是在devtools有数据记录，便于调试）
			// this.$store.commit('study/updateCount', flag==='add'?10:-5)  // payload
			this.updateCount(flag==='add'?10:-5)
		}
	}
}
</script>
<style>
.find {
	text-align: center;
}
</style>
