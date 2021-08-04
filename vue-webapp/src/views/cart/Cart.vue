<template>
<div class="qf-cart">
	<QfNavbar title='购物车'>
		<template>
			<span @touchstart='$router.replace("/")'>首页</span>
		</template>
	</QfNavbar>

	<QfNotData :show='isNotData' />

	<!-- 栅格系统 -->
	<van-swipe-cell v-for='(item, idx) in cartList' :key='item._id'>
		<van-row
			class="row"
			align='center'
			type='flex'
		>
			<van-col span='4'>
				<!-- 使用v-model给“列表中的行添加自定义的勾选状态” -->
				<van-checkbox v-model='item.checked' @click='rowClick'/>
			</van-col>
			<van-col span='20'>
				<van-card
					:num="item.num"
					:price="item.good&&(item.good.price.toFixed(2))"
					:desc="item.good&&item.good.desc"
					:title="item.good&&item.good.name"
					:thumb="$img.imgBase+(item.good&&item.good.img)"
					>
					<template #footer>
						<!-- 放大热区 -->
						<div class='btn' @touchstart='update(item,idx,-1)'>
							<van-button size="mini">-</van-button>
						</div>
						<div class='btn' @touchstart='update(item,idx,1)'>
							<van-button size="mini">+</van-button>
						</div>
					</template>
				</van-card>
			</van-col>
		</van-row>

		<template #right>
			<van-button
				square
				text="删除"
				type="danger"
				class="delete-button"
				@click='romove(item,idx)'
			/>
		</template>
	</van-swipe-cell>

	<!-- 提交购物车 -->
	<van-submit-bar
		:price="total"
		button-text="提交订单"
		@submit="onSubmit"
	>
		<van-checkbox v-model='full' @click='fullClick'>全选</van-checkbox>
		<template #tip>
			你的收货地址不支持同城送, <span @click="onSkipToAddr">修改地址</span>
		</template>
	</van-submit-bar>
</div>
</template>

<script>
import {
	Card,
	Button,
	SubmitBar, // 业务组件
	Checkbox,
	Col,
	Row,
	SwipeCell, // UI组件
} from 'vant'
import { QfNavbar, QfNotData } from '@/components/'
export default {
	name: 'Cart',
	components: {
		[Card.name]: Card,
		[Button.name]: Button,
		[SubmitBar.name]: SubmitBar,
		[Checkbox.name]: Checkbox,
		[Col.name]: Col,
		[Row.name]: Row,
		[SwipeCell.name]: SwipeCell,
		QfNavbar,
		QfNotData
	},
	data() {
		return {
			full: false,
			cartList: [],
			// 在何时修改它的状态？（在调完列表接口来修改它的状态）
			isNotData: false
		}
	},
	computed: {
		total() {
			let t = 0
			this.cartList.map(ele=>{
				if(ele.checked) t += ele.num*ele.good.price
			})
			return t*100  // 单位：分
		}
	},
	created() {
		this.init()
	},
	methods: {
		// 购物车列表初始化
		init() {
			this.$http.fetchCartList().then(res=>{
				console.log('我的购物车数据', res)
				// 当没有token时，res=null
				// this.cartList = (res ? res.list : [])
				this.cartList = res?.list || []
				// 判断是否是空的购物车
				this.isNotData = (this.cartList.length===0)
			})
		},
		isFull() {
			let count = 0
			this.cartList.map(ele=>{
				if(ele.checked) count++
			})
			this.full = (count===this.cartList.length)
			// 当购物没有数据时，full全选按钮是“非勾选状态”
			if(count===0) this.full = false
			// 判断“是否全选”时，顺便判断“暂无数据”是否该显示
			if(this.cartList.length===0) this.isNotData = true
			// 强制更新视图（这个api非常有用）
			this.$forceUpdate()
			// this.cartList = JSON.parse(JSON.stringify(this.cartList))
		},
		onSkipToAddr() {
			console.log('去选择收件地址')
		},
		// 【功能】行的勾选
		rowClick() {
			this.isFull()
		},
		// 【功能】全选操作
		fullClick() {
			this.cartList.map((ele,idx)=>{
				this.cartList[idx].checked = this.full
			})
			// this.$forceUpdate()
			this.cartList = JSON.parse(JSON.stringify(this.cartList))
		},
		// 【功能】删除购物的行
		romove(item, idx) {
			// JS组件的两种用法
			console.log('item, idx', item, idx)
			// Dialog.confirm({
			// 	title: '警告',
			// 	message: `你确定要删除 ${item.good.name} 吗？`,
			// }).then(() => {
			// 	console.log('用户同意删除')
			// 	// 调接口删除
			// }).catch(()=>{
			// 	console.log('用户取消了删除')
			// })
			this.$dialog.confirm({
				title: '警告',
				message: `你确定要删除 ${item.good.name} 吗？`,
			}).then(()=>{
				this.$http.fetchCartDel({id:item._id}).then(()=>{
					console.log('删除成功')
					// this.init()
					this.cartList.splice(idx, 1)
					// 进一步判断是否都勾选了
					this.isFull()
				})
			}).catch(()=>{console.log('用户取消了删除')})
		},
		// 【功能】更新商品数量
		update(item,idx,num) {
			if(num===-1 && item.num===1) return this.$toast('商品数量不能小于1')
			const params = {
				id: item._id,
				num: item.num+num
			}
			this.$http.fetchCartUpdate(params).then(()=>{
				console.log('数量更新成功')
				// this.init()
				this.cartList[idx].num = this.cartList[idx].num+num
			})
		},
		// 【功能】提交购物（没有真实的支付）
		onSubmit() {
			if(this.total<=0) return this.$toast('请勾选商品')
			let ids = ''
			this.cartList.map(ele=>{
				if(ele.checked) ids += `;${ele._id}`
			})
			// POST请求的入参不能使用数组，所以要把多个id拼接成字符串
			this.$http.fetchCartPay({ids}).then(()=>{
				// this.init()
				// 购买成功后，跳转到活动页面
				this.$toast('订单已生成')
				this.timer = setTimeout(()=>{
					this.$router.push('/user')
				}, 2000)
			})
		},
	},
	beforeDestory() {
		clearTimeout(this.timer)
	}
}
</script>

<style lang='scss' scoped>
.qf-cart {
	padding-bottom: 2.67rem;
	padding-top: 1.23rem;
}
.row {
	border-bottom: 1px solid #eee;
}
// 修改Card背景，解决“checkbox在视觉上不居中”的问题
.van-card {
	background-color: white;
	padding-left: 0;
}
.btn {
	display: inline-block;
	padding: 0 .13rem;
	margin: 0 .07rem;
}
.van-button__text {
	padding: 0 .07rem;
}
.delete-button {
  height: 100%;
}
</style>
