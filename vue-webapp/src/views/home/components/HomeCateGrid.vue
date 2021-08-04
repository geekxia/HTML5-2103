<template>
<div class="qf-home-cate-grid">
	<!-- 品类轮播 -->
	<van-swipe>
		<van-swipe-item>
			<van-grid square :column-num='5'>
				<van-grid-item
					v-for="cate in cateArr1"
					:key="cate.id"
					:icon="cate.icon"
					:text='cate.label'
				/>
			</van-grid>
		</van-swipe-item>
	</van-swipe>
</div>
</template>

<script>
import {
	Swipe,
	SwipeItem,
	Grid,
	GridItem
} from 'vant'
import cateArr from '../data'

export default {
	components: {
		[Swipe.name]: Swipe,
		[SwipeItem.name]: SwipeItem,
		[Grid.name]: Grid,
		[GridItem.name]: GridItem
	},
	computed: {
		cateArr1() {
			return cateArr.splice(0, 10)
		}
	}
}
</script>
<style></style>
