Vue.component('cn-page', {
	template: `
	<div class='pages'>
    <span @click='prev'><<</span>
    <span v-if='value>3'>...</span>
    <span
			v-for='p in pages'
			v-text='p'
			:class='(value==p?"on":"")'
			@click='$emit("input", p)'
		>
		</span>
    <span>...</span>
    <span @click='$emit("input", value+1)'>>></span>
  </div>
	`,
	props: {
		value: { type: Number, required: false, default: 1 }
	},
	computed: {
		pages() {
			// 最终pages页码的显示，是由父组件传递的value决定的
			const v = this.value
			return v>3 ? [v-2,v-1,v,v+1,v+2]:[1,2,3,4,5]
		}
	},
	methods: {
		prev() {
			if(this.value===1) return alert('已经是第一页了')
			this.$emit("input", this.value-1)
		}
	}
})

// 1 2 3 4 5 ...
// 1 2 3 4 5 ...
// 1 2 3 4 5 ...
// ... 2 3 4 5 6 ...
// ... 98 99 100 101 102 ...
//
// n-2 n-1 n n+1 n+2
