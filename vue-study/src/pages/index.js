// index.js 进出口

// 路由懒加载：用到的技术有两个——Vue异步组件、Webpack的代码分割技术(根据路由URL来切分js文件)。
// 解决什么问题呢？当路由页面非常多时，我们不能同步地把所有Vue组件都加载进来。正确的做法是，根据路由URL的变化按需加载url对应的组件。这本质上是Vue项目的一种性能优化方案。
const TodoList = ()=>import('./TodoList.vue') // async-import语法
const Home = ()=>import('./Home.vue')
const GoodDetail = ()=>import('./GoodDetail.vue')

const ZhiHu = ()=>import('./ZhiHu.vue')
const PanalA = ()=>import('./components/PanalA.vue')
const PanalB = ()=>import('./components/PanalB.vue')
const PanalC = ()=>import('./components/PanalC.vue')

const Find = ()=>import('./Find.vue')

const Music = ()=>import('./Music.vue')

export default [
	// 别名：alias属性 等价于 path属性，都要以 '/'开头。
	// 在什么情况下会使用别名呢？一般不用，很少用。
	// 命名视图：给<router-view>加一个名字。下面这行路由规则的意思是：当url=/home或url=/abc时，路由系统会寻找name=hh的视图容器来显示Home组件，再寻找name=oo的视图容器来显示TodoList组件。如果找不到对应名字的视图容器，那么组件将无家可归，即不显示，也不报错。
	{ id: 1, path: '/home', text:'首页', alias:'/abc', components: { hh:  Home, oo: TodoList }},
	// 规则解释：当url=/todo时，要求Vue路由系统寻找到TodoList组件将加载进来。
	{ id: 2, path: '/todo', text:'TodoList', component: TodoList },
	// :id 表示“动态路由”，name 表示是路由命名，props 开启props参数接受方式
	// 这个hidden，是自定义字段，表示“不要把我放在一级菜单”的。
	{ id: 3, path: '/good/detail/:id', hidden:true, text:'商品详情', component: GoodDetail,  name:'gd', props: true},

	// 嵌套路由
	// 当url=/zhihu时，路由系统找到ZhiHu这个组件，在App.vue中寻找一个叫defalut的视图容器来显示.
	{
		id: 4,
		path: '/zhihu',
		text: '知乎',
		component:ZhiHu,
		children: [
			// 当url=/zhihu/a时，路由系统找到PanalA组件，在ZhiHu.vue中寻找一个叫defalut的视图容器来显示。
			// 这三个子组件的视图容器<router-view>写在父组件ZhiHu.vue中
			// 二组嵌套路由 path值不要加 '/'
			{ path: 'a', component: PanalA },
			{ path: 'b', component: PanalB },
			{ path: 'c', component: PanalC },
			// 二级路由的重定向
			{ path: '', redirect: '/zhihu/a'}
		]
	},
	{ id: 5, path: '/find', text:'Vuex', component: Find },
	{ id: 6, path: '/music', text:'音乐', component: Music }
]
