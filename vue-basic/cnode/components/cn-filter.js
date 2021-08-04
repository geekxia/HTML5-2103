Vue.component('cn-filter', {
	template: `
	<div class='cates'>
    <span
			v-for='item in data'
			v-text='item.label'
			:class='(item.tab===value?"on":"")'
			@click='$emit("input", item.tab)'
    >
    </span>
  </div>
	`,
	props: {
		data: { type: Array, required: false, default: [] },
		value: { type: String, required: false, default: '' }
	}
})
