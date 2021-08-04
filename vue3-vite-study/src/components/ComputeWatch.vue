<template>
	<span>First Name:</span>
	<input v-model='first' /><br>

	<span>Last Name:</span>
	<input v-model='last' /><br>

	<span>Full Name1：{{full1}}</span><br>
	<span>Full Name2：{{full2}}</span><br>
	<button @click='stop'>关闭掉Watch</button>
	<button @click='stopEffect'>关闭掉WatchEffect</button>

</template>

<script lang="ts">
import {
	ref,
	defineComponent,
	computed,
	watch,
	watchEffect,
	isRef,
	inject
} from 'vue'
export default defineComponent({

  setup() {

		let first = ref<string>('')
		let last = ref<string>('')

		const a = 100

		console.log('first is ref', isRef(first))
		console.log('a is ref', isRef(a))


		const full1 = computed(()=>first.value+' '+last.value)
		const full2 = computed(()=>last.value+' '+first.value)

		// watch(first, (n,o)=>console.log('first changed', n, o))
		// watch(last, (n,o)=>console.log('last changed', n, o))
		const stop = watch([first,last], ([n1,n2],[o1,o2])=>{
			console.log('new [first last]', [n1,n2])
			console.log('old [first last]', [o1,o2])
		})

		const stopEffect = watchEffect(()=>{
			console.log('watch effect', first.value, last.value)
		})

		// 使用父级组件中provide的数据
		const v1 = inject('k1')
    const v2 = inject('k2')
		const v3 = inject('k3', 'default v3')
		console.log('provide/inject v1', v1)
		console.log('provide/inject v2', v2)
		console.log('provide/inject v3', v3)

    return {
			first,
			last,
			full1,
			full2,
			stop,
			stopEffect
    }
  }
})
</script>

<style scoped>
</style>
