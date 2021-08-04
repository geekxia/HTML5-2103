<template>
	<div
		v-for='(item,idx) in list'
		:key='item.id'
		@click='delTodo(idx)'
		v-text='item.task'>
	</div>
	<button @click='addTodo("复习")'>添加任务</button>
</template>

<script lang='ts'>
import {
	defineComponent
} from 'vue'

import useTodoList from './utils/useTodoList'

export default defineComponent({
	// setup是v3组件API的关键选项，它在beforeCreate之前运行
	setup(){
		console.log('--- counter setup')
		// 响应式数据
		const {list, addTodo, delTodo } = useTodoList([
			{id:1,task:'读书'},
			{id:2,task:'跑步'}
		])
		// 在return抛出的变量，可以使用this访问
		return {
			list,
			addTodo,
			delTodo
		}
	}
})

</script>

<style></style>
