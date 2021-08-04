// 异步组件，也算是一种代码的优化
const QfTabbar = ()=>import('./layout/QfTabbar.vue')
const QfNavbar = ()=>import('./layout/QfNavbar.vue')
const QfNotData = ()=>import('./layout/QfNotData.vue')

export {
	QfTabbar,
	QfNavbar,
	QfNotData
}
