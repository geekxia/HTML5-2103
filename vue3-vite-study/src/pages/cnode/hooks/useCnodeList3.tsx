import { ref, watchEffect } from 'vue'
import { getApp } from "@/utils"
// vuex4中，使用useStore这个hooks api
import { useStore } from 'vuex'

export default function useCnodeList() {
	const store = useStore()
	const cate = ref('')
	const page = ref(1)

	// let list = store.state.cnode.list
	let list = ref([])

	watchEffect(()=>{
		console.log('1')
		store.dispatch('cnode/getList', {tab: cate.value, limit: 5, page: page.value})
	})
	return { cate, page, list }
}
