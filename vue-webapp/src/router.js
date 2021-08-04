import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from '@/views/'

const router = new VueRouter({
	mode: 'history',
	routes: [
		...routes,
		{ path: '/*', redirect: '/' }
	]
})

// 导航守卫（路由守卫）
// 作用：从路由技术的层面去解决“权限页面”的可访问性
// 原理：vue-router把路由匹配过程抽象成了一系列的钩子函数beforeEach/beforeResolve/afterEach，在指定的钩子函数做权限信息的逻辑判断。如果当前用户满足权限，路由规则正常匹配；反之，阻断路由匹配。

// 在router中的这些钩子，叫做“全局守卫”。
// 还有“局部守卫”，只能在组件中使用beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。
// 局部守卫，很少使用。
// 全局守卫，通常用于实现应用程序的权限管理。

// 使用钩子实现路由守卫
// to 表示将要去往的页面
// from 表示当前所处的页面
// next 是一个函数，需要特别注意是：在同一条逻辑线，next()这个方法只能调用一次
router.beforeEach((to, from, next)=>{
	// console.log('to', to)
	// console.log('from', from)
	// 实际工作中，通常是一系列的权限验证
	if(to.meta.isAuth) localStorage.getItem('token') ? next() : next('/login')
	next()
})
// watch: {	$route(to, from) }

export default router
