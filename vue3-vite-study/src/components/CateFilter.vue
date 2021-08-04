<template>
<div class='container'>
	<div class='cates'>
		<span
			v-for='(item,index) in list'
			:key='index'
			v-text='item.cate_zh'
			:class='cate===item.cate?"on":""'
			@click='$emit("update:cate", item.cate)'
		>
		</span>
	</div>

	<div>
		<button @click='$emit("clearCate")'>重置品类</button>
	</div>

	<div>
		<input type="text" v-model='value' />
		<button @click='updateName'>修改表单名称</button>
		<h4>{{newName||"我是表单"}}</h4>
	</div>

</div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs, computed } from 'vue'

interface Cate {
	cate: string
	cate_zh: string
	id: number
}

export default defineComponent({
	props: {
		cate: String,
		onClearCate: Function,
		name: String,
		// 自定义v-model的修饰符，默认只支持.trim/.number/.lazy
		nameModifiers: {default: ()=>({})},
		cateModifiers: {default: ()=>({})}
	},
	// 触发选项
	emits: ['update:cate', 'clearCate', 'update:name'],
	setup(props) {
		const list = reactive<Cate[]>([
			{ id: 1, cate: 'ask', cate_zh: '问答' },
			{ id: 2, cate: 'good', cate_zh: '精华' },
			{ id: 3, cate: 'job', cate_zh: '招聘' },
			{ id: 4, cate: 'share', cate_zh: '分享' }
		])
		const value = ref('')
		const newName = computed(()=>{
			return props.name.replace(/\s/img, '-')
		})
		return {
			list,
			value,
			...toRefs(props),
			newName
		}
	},
	mounted() {
		console.log('name这个变量的自定义修饰符', this.nameModifiers)
		console.log('cate这个变量的自定义修饰符', this.cateModifiers)
	},
	methods: {
		updateName() {
			// 获取修饰符
			let { mytrim } = this.nameModifiers
			if(mytrim) this.$emit('update:name', this.value.trim())
			else this.$emit('update:name', this.value)
			this.value = ''
		}
	}

})
</script>

<style scoped>
.container {
	padding: 30px;
	background: rgba(0,0,0,.3);
}
.cates  {
	width: 500px;
	line-height: 60px;
	display: flex;
	margin: 20px auto;
}
.cates span {
	flex: 1;
	border: 1px solid #eee;
	cursor: pointer;
	text-align: center;
}
.cates span.on {
	color: white;
	background: orange;
}
</style>
