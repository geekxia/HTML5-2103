import { defineComponent, ref, reactive, watchEffect } from 'vue'
import { getApp } from "@/utils"
import './style.css'

import CnFilter from './components/CnFilter'
import CnList from './components/CnList'
import CnLoading from './components/CnLoading'
import CnPage from './components/CnPage'

// 业务逻辑的剥离
// import useCnodeList1 from './hooks/useCnodeList1'
// import useCnodeList2 from './hooks/useCnodeList2'
import useCnodeList3 from './hooks/useCnodeList3'


export default defineComponent({
	setup() {
		// let { cate, page, list, cates } = useCnodeList1()
		// let { cate, page, list, cates } = useCnodeList2()
		let { cate, page, list, cates } = useCnodeList3()
		// 优先级更高
		return ()=>(
			<div className='app'>
				<CnFilter value={cate.value} onChange={e=>{cate.value=e;page.value=1;}} />
				<CnList data={list} />
				<CnPage value={page.value} onChange={e=>page.value=e} />
			</div>
		)
	}
})
