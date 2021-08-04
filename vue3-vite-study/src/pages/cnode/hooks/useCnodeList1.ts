import { ref, watchEffect } from 'vue'
import { getApp } from "@/utils"

export default function useCnodeList() {
	const { api } = getApp()
	const cate = ref('')
	const page = ref(1)
	let list = ref([])

	// watchEffect(fn)
	// onMounted + watch([cate,page], ()=>{})
	watchEffect(()=>{
		console.log('---watch')
		api.fetchTopics({page: page.value,limit:5,tab:cate.value}).then(res=>{
			console.log('res', res)
			list.value = res.data
			// count.value++
		})
	})
	return { cate, page, list }
}
