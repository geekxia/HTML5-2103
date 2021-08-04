import {
	createRouter,
	createWebHashHistory,  // 用于创建hash路由模式
	createWebHistory       // 用于创建history模式
} from 'vue-router'

import Study from './study/Study.vue'
import List from './study/List'
import Detail from './study/Detail'
import Todo from './study/Todo'
import Cnode from './cnode/Cnode'

// 创建路由系统
export default createRouter({
	// Hash模式
	history: createWebHashHistory(),

	// History模式
	// history: createWebHistory(),
	routes: [
		{ path: '/study', component: Study },
		{ path: '/list', component: List },
		{ path: '/detail/:id', component: Detail },
		{ path: '/todo', component: Todo },
		{ path: '/cnode', component: Cnode },
		{ path: '/', redirect: '/study' }
	]
})
