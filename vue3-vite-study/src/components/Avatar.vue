<template>
  <img class='avatar' :src="src" />
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	PropType,
	toRefs
} from 'vue'
export default defineComponent({
	props: {
		src: {
			type: String as PropType<string>,
			required: true
		}
	},
	// 默认情况下，props不能进行解构，否则会导致响应式失效
	// 解决方案：使用toRefs来解决
	setup(props) {
		// let { src } = toRefs(props)
		return {
			// src
			...toRefs(props)
		}
	}
})
</script>

<style scoped>
.avatar {
	display: block;
	width: 150px;
	height: 150px;
	margin: 10px auto;
}
</style>
