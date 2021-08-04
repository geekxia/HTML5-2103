<template>
	<h1>Counter计数器</h1>
	<h1>{{num}}</h1>
	<button @click='addNum'>自增</button>
	<button @click='subNum'>自减</button>
</template>

<script lang='ts'>
import {
	defineComponent
} from 'vue'

import useNum from './utils/useNum'

export default defineComponent({
	// setup是v3组件API的关键选项，它在beforeCreate之前运行
	setup(){
		console.log('--- counter setup')
		// 响应式数据
		const {num, addNum, subNum } = useNum(100)

		// 在return抛出的变量，可以使用this访问
		return {
			num,
			addNum,
			subNum
		}
	},
	beforeCreate() {
		console.log('--- counter beforeCreate')
	},
	mounted() {
		console.log('--- counter mounted')
	},
	// methods: {
	// 	change(type) {}
	// }
})

</script>

<style></style>
