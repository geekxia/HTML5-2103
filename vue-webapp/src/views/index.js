
// meta，用于自定义“路由元信息”

export default [
	{
		path: '/',
		// 当访问path='/'时，路由系统去寻找一个名字叫alive的router-view来显示这个异步组件
		components: { alive: ()=>import('./home/Home.vue') },
		meta: { isAuth: false }
	},
	{
		path: '/find',
		components: { alive: ()=>import('./find/Find.vue') },
		meta: { isAuth: false }
	},
	{
		path: '/cart',
		component:()=>import('./cart/Cart.vue'),
		meta: { isAuth: true }
	},
	{
		path: '/user',
		components: { alive: ()=>import('./user/User.vue') },
		meta: { isAuth: true }
	},
	{
		path: '/good/detail/:id',
		name:'good',
		component: ()=>import('./home/GoodDetail.vue'),
		meta: { isAuth: false }
	},
	{
		path: '/login',
		component: ()=>import('./user/Login.vue'),
		meta: { isAuth: false }
	},
	{
		path: '/regist',
		component: ()=>import('./user/Regist.vue'),
		meta: { isAuth: false }
	},
]

// 第一种：query传参
// /good/detail?id=1  匹配  path: '/good/detail'

// 第二种：动态路由传参
// /good/detail/1     匹配  path: '/good/detail/:id'
