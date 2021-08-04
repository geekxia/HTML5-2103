import { ref, watch, onMounted } from 'vue'
import { getApp } from "@/utils"

export default function useCnodeList() {
	const { api } = getApp()
	const cate = ref('')
	const page = ref(1)
	let list = ref([])

	const init = ()=> {
		api.fetchTopics({page: page.value,limit:5,tab:cate.value}).then(res=>{
			console.log('res', res)
			list.value = res.data
			// count.value++
		})
	}

	watch([cate,page], ()=>init())
	onMounted(()=>init())
	return { cate, page, list }
}
