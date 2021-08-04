<template>
	<h2>测试组合中的生命周期</h2>
	<h2>{{name}}-{{age}}</h2>
	<button @click='updUser'>更新用户信息</button>
</template>

<script lang="ts">
import {
	defineComponent,
	getCurrentInstance,
	reactive,
	toRefs,
	onMounted,
	onUpdated,
	onUnmounted
} from 'vue'

import { getApp } from '@/utils'

interface User {
	name: string
	age: number
	addr?: string
}

export default defineComponent({
	// setup在beforeCreate之前运行，没有this
	// setup中可以使用组合的生命周期
	setup(props) {
		// 使用全局数据
		const { $url } = getApp()
		console.log('setup url', $url)

		console.log('----opt life setup')

		const u = reactive<User>({name:'lisi', age:30})
		const updUser = ()=> {
			u.age++
		}
		// 使用组合的生命周期
		onMounted(()=>console.log('----opt life onMounted'))
		onUpdated(()=>console.log('----opt life onUpdated'))
		onUnmounted(()=>console.log('----opt life onUnmounted'))

		return {
			...toRefs(u),
			updUser
		}
	},
	// mounted() {
	// 	console.log('----opt life mounted')
	// },
	// updated() {
	// 	console.log('----opt life updated')
	// },
	// unmounted() {
	// 	console.log('----opt life unmounted')
	// }
})
</script>

<style scoped>
</style>
