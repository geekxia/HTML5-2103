import Vue from 'vue'
// 从node_modules包中，导入VueRouter这个类
import VueRouter from 'vue-router'
// 注册路由，注册之后使用路由系统、<router-view>、<router-link>等众多API
Vue.use(VueRouter)

import routes from '@/pages/'


// 创建路由实例对象
export default new VueRouter({
	// 面试题：history路由和hash路由有哪些区别？

	// 1、前者在url上没有#，后者有#。
	// 2、前者在打包上线部署到服务器上时，刷新页面会出现404；后者没有任何问题，不会出现404。
	// 3、前者部署时因为会出404，所以在服务器端需要使用nginx/apache进行重定向处理。后者不需要处理。
	// 4、前者的底层原理使用了history的BOM API来实现的，每次切换URL时，客户端都需要向服务器发送资源请求，因为Vue单页面应用程序，所以语法的资源路径不存在了（即404）。后者的底层原理是监听onHashChange事件，每次发生URL变化，都会触发这个事件，这种情况下客户端不会向服务端发起资源请求（即不会出现404）。
	// 5、无论是history模式，还是hash模式，在本地服务中都不会出现问题。但是上线后就会出上述描述的问题。

	// www.qf.com  ->index.html
	// www.qf.com/home ->会向服务端发起资源请求，服务端要使用重定向让你每次都访问index.html，否则404。

	// www.qf.com/#/ ->index.html
	// www.qf.com/#/home ->不会向服务器发起资源请求，只是Vue系统中寻找对应Vue组件而已，所以不会出现404。

	// mode: 'hash',
	mode: 'history',

	// routes用于定义单页面应用程序中的路由规则，是整个应用程序的交通指挥中心
	routes: [
		...routes,
		// 一般情况下，在路由匹配规则的最后一条，要加上重定向。
		// 重定向这条规则，一般放在最后一条。
		{ path: '/*', redirect: '/home' }
	]
})

// ES6 模块化语法
// 在webpack眼中，一切皆模块，你可以认为src中所有的文件都是一个独立的模块。

// 如果使用 export default 抛出，那么别一个地方使用 import xxx from './path'
// 如果使用 export xxx 抛出，那么在别一个地方使用 import { xxx } from './path'
