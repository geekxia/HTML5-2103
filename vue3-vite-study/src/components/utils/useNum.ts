import { ref } from 'vue'
// 业务剥离（计数器功能）
export default function useNum(opt: number) {
	let num = ref(opt || 0)
	const addNum = () => {
		num.value++
	}
	const subNum = () => {
		num.value--
	}
	return { num, addNum, subNum }
}
