<template>
<div class="qf-find">

	<!-- 左侧 -->
	<div class="left">
		<van-sidebar v-model="cateIdx">
			<van-sidebar-item
				v-for='(item,idx) in cateArr'
				:key='idx'
				:class='(cateIdx===idx?"on":"")'
				:title='item.cate_zh'
			/>
		</van-sidebar>
	</div>

	<!-- 右侧 -->
	<div class="right">
		<van-grid :column-num='3'>
			<van-grid-item
				v-for='item in cache[cateIdx]'
				:key='item.id'
			>
				<template>
					<div class="good">
						<img :src='($img.imgBase+item.img)' />
						<span v-text='item.name'></span>
					</div>
				</template>
			</van-grid-item>
		</van-grid>
	</div>

	<QfTabbar />
</div>
</template>

<script>
import {
	Sidebar,
	SidebarItem,
	Grid,
	GridItem
} from 'vant'
import { QfTabbar } from '@/components'
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
	components: {
		[Sidebar.name]: Sidebar,
		[SidebarItem.name]: SidebarItem,
		[Grid.name]: Grid,
		[GridItem.name]: GridItem,
		QfTabbar
	},
	data() {
		return {
			cateIdx: 0,
			cateArr: []
		}
	},
	computed: {
		...mapState('good', ['cache'])
	},
	watch: {
		cateIdx() {
			// 当cateIdx变化时，判断Vuex状态管理中有没有当前cateIdx所对应的数据
			// 如果有缓存数据，不执行this.init()
			if(!this.cache[this.cateIdx]) this.init()
		}
	},
	// 异步解决方案
	async activated() {
		const res = await this.$http.fetchAllCates()
		this.cateArr = res.list
		this.init()
	},
	methods: {
		...mapActions('good', ['getList']),
		...mapMutations('good', ['cleanCache']),
		init() {
			const cate = this.cateArr[this.cateIdx].cate
			// 触发acitons方法，执行Vuex的工作流程
			this.getList({idx: this.cateIdx, cate})
		}
	},
	deactivated() {
		// 当路由切换时，当前组件会销毁
		// 执行vuex中cache缓存清除
		this.cleanCache()
	}
}
</script>

<style lang='scss' scoped>
.qf-find {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	.left {
		position: absolute;
		top: 0;
		width: 2.27rem;
		bottom: 1.33rem;
		left: 0;
		overflow-y: scroll;
		.van-sidebar {
			width: 100%;
		}
		.van-sidebar-item--select::before {
			background-color: transparent;
		}
		.van-sidebar-item.on {
			color: red;
		}
	}
	.right {
		position: absolute;
		top: 0;
		left: 2.27rem;
		bottom: 1.33rem;
		right: 0;
		overflow-y: scroll;
		.good {
			font-size: .32rem;
			text-align: center;
			img {
				width: 1.87rem;
				height: 1.87rem;
				display: inline-block;
			}
			span {
				height: .47rem;
				line-height: .47rem;
				display: block;
				overflow: hidden;
			}
		}
	}
}
</style>
