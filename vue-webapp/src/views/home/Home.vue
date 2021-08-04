<template>

<!-- <div v-scroll @scroll=''></div> -->

<!-- 为了实现对scroll事件的监听，要把当前页面设置成absolute绝对定位，同时添加overflow-y:scroll -->
<div class="qf-home" @scroll='top=$event.srcElement.scrollTop' ref='home'>

	<!-- 下拉刷新 S -->
	<!-- refreshing，当“下拉刷新”被触发时，它会变成true -->
	<!-- “下拉刷新”会触发 onRefresh 事件，在这个事件中调接口刷新页面 -->
	<van-pull-refresh v-model="refreshing" @refresh="page=1">
		<!-- 通知栏 S -->
		<van-notice-bar
			color="#ffffff"
			background="#000000"
			mode="closeable"
		>
			京东618优惠京东618优惠京东618优惠京东618优惠京东618优惠。
		</van-notice-bar>
		<!-- 通知栏 E -->

		<!-- 搜索框 S -->
		<van-search
			show-action
			:placeholder="hotText"
			@click="onSkipToSearch"
			disabled
			background='#DE0000'
			shape='round'
		>
			<template #action>
				<div class='login' @click="onSkipToLogin">登录</div>
			</template>
			<template #label>
				<div class='label'>
					<span>JD</span>
					<span> |</span>
				</div>
			</template>
		</van-search>
		<!-- 搜索框 E -->

		<!-- 轮播图 S -->
		<van-swipe
			:autoplay='5000'
		>
			<van-swipe-item
				v-for="item in imgArr"
				:key='item.id'
			>
				<img v-lazy="item.src" />
			</van-swipe-item>
		</van-swipe>
		<!-- 轮播图 E -->

		<HomeCateGrid />

		<!-- 商品列表 S -->
		<div class='list'>
			<!-- van-list这个组件，只是提供了“触底加载”的功能 -->
			<!-- immediate-check，关闭初始化的"触底加载"检测 -->
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="数据没有了"
				@load="page++"
				:offset='100'
				:immediate-check='false'
			>
				<!-- v-for可以遍历一个数字，但是从1开始的，索引号是从0开始的 -->
				<div class='list-row' v-for='row in rowLen' :key='row'>
					<GoodItem :good='list[2*row-2]' />
					<GoodItem :good='list[2*row-1]' />
				</div>
				<!-- 第一行  list[0]   list[1]
				第二行  list[2]   list[3]
				第三行  list[4]   list[5]
				第n行   list[2n-2]   list[2n-1] -->
			</van-list>
		</div>
		<!-- 商品列表 E -->

	</van-pull-refresh>
	<!-- 下拉刷新 E -->

	<QfTabbar />
</div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import {
	Button,
	Swipe,
	SwipeItem,
	NoticeBar,
	Search,
	Lazyload,
	List,
	PullRefresh,
	Cell
} from 'vant'

Vue.use(Lazyload)
import HomeCateGrid from './components/HomeCateGrid.vue'
import GoodItem from './components/GoodItem.vue'
import { QfTabbar } from '@/components'

export default {
	name: 'Home',
	components: {
		[Button.name]: Button,
		[Swipe.name]: Swipe,
		[SwipeItem.name]: SwipeItem,
		[NoticeBar.name]: NoticeBar,
		[Search.name]: Search,
		[List.name]: List,
		[PullRefresh.name]: PullRefresh,
		[Cell.name]: Cell,
		HomeCateGrid,
		GoodItem,
		QfTabbar
	},
	data() {
		return {
			hotArr: [
				{ id: 1, name:'小米手机' },
				{ id: 2, name:'苹果电脑' },
				{ id: 3, name:'机械键盘' },
				{ id: 4, name:'有品水杯' }
			],
			imgArr: [
				{ id: 1, src: '//imgcps.jd.com/ling4/100009077459/5byA5a2m5YyF6KO5/5paw5a2m5pyf5paw5rCU6LGh/p-5d91a49642dd5b7c7d5289a9-618/6c892dde/cr_1053x420_4_0/s1125x690/q70.jpg'},
				{ id: 2, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/189242/14/7304/68602/60c0265eE7cf15f06/248c1bb7fcf94943.jpg!cr_1053x420_4_0!q70.jpg.dpg'},
				{ id: 3, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/189242/14/7304/68602/60c0265eE7cf15f06/248c1bb7fcf94943.jpg!cr_1053x420_4_0!q70.jpg.dpg' }
			],
			// 当onLoad方法被触发时，loading=true，如果loading=true了触底加载功能将失效
			loading: false,
			// finished表示数据没有了
      finished: false,
			// 当onRefresh方法被触发时，refreshing=true，如果refreshing=true顶部的"加载中"会卡住
      refreshing: false,
			list: [],
			page: 1,    // 用于分页加载数据
			top: 0      // 用于记录滚动条的实时位置
		}
	},
	computed: {
		...mapState('good', ['msg']),
		hotText() {
			return this.hotArr[Math.floor(Math.random()*4)].name
		},
		rowLen() {
			return Math.floor(this.list.length / 2)
		}
	},
	watch: {
		page() {
			// 只要page发生变化，我都要调一次接口
			this.init()
		}
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			// 提示：在vue开发中，不是所有接口都需要走Vuex的。
			this.$http.fetchGoodList({size: 6, page: this.page}).then(res=>{
				console.log('商品列表', res)
				// 拿到后端api接口数据，将其放在data上,再通过vue指令，把这些data数据渲染到视图中。

				// 调接口成功后，这一批新数据是追加在list上，还是覆盖list？
				if (this.page===1) {
					// 【第一条逻辑线】下拉刷新（或页面初始化时）的逻辑
					// 覆盖掉旧的list
					this.list = res.list
					// 让refreshing=false，否则"下拉刷新"功能将失效
					this.refreshing = false
					// 每次下拉，finished=false 表示数据库还有数据，允许用户继续触低分页
					this.finished = false
				} else {
					// 【第二条逻辑线】触底加载的逻辑
					// 把新一批数据追加到list中去
					this.list = [...this.list, ...res.list]
					// 让loading=false，否则"触底加载"功能将失效
					this.loading = false
					// 判断数据库还有没有数据：如果没有了，让finished=true，触底功能将被关闭。
					if(this.list.length===res.total) this.finished = true
				}
			})
		},
		onSkipToSearch() {
			console.log('跳转到搜索页面')
		},
		onSkipToLogin() {
			console.log('跳转到登录页')
		},
		// 当List触底时触发该方法
		// 开始请求下一页的数据，当请求完成时一定要loading=false
		// 每次触底让页码自增，然后请求下一页的数据
		// onLoad() {
		// 	console.log('触底了，准备开始调下一页数据')
		// 	this.page++
    // },
		// 当下拉刷新时触发该方法
		// 每次下拉刷新时，让page=1，然后请求第一页数据
		// onRefresh() {
		// 	this.page = 1
		// 	console.log('下拉时，准备开始调接口，刷新页面')
    // }
	},
	// 测试keep-alive的效果
	// destroyed() {
	// 	console.log('----Home destroyed')
	// },
	// 动态组件被激活（进入前台）时触发
	activated() {
		// 手动通过DOM操作，把.qf-home这个滚动容器滚至指定位置(top)
		this.$refs.home.scrollTop = this.top
	},
	// 动态组件被休眠（进入后台）时触发
	// deactivated() {
	// 	console.log('----Home deactivated', this.top)
	// }
}
</script>

<style lang='scss' scoped>
.qf-home {
	padding-bottom: 1.5rem;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 1.33rem;
	overflow-y: scroll;
}
.qf-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
.van-swipe {
	height: 3.73rem;
	width: 9.5rem;
	margin: .2rem auto;
	border-radius: 0.1rem;
	.van-swipe-item {
		width: 100%;
		height: 100%;
		img {
			display: block;
			height: 3.73rem;
			width: 9.333333rem;
		}
	}
}
.van-search {
	.login {
		color: #ffffff;
	}
}
.list-row {
	height: 6.933333rem;
	width: 100%;
	display: flex;
	font-size: .346667rem;
	color: #1a1a1a;
	background: rgba(247, 247, 247, 1);
}
</style>
