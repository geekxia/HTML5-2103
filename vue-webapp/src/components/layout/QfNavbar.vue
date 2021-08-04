<template>
<div class="qf-navbar">
  <van-nav-bar
		:title='title'
		left-arrow
		fixed
    @click-left='back'
	>
  <template #right>
    <slot></slot>
  </template>
  </van-nav-bar>
</div>
</template>

<script>
import {
  NavBar
} from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: { type: String, required: false, default: '标题' }
  },
  methods: {
    back() {
      // 触发父组件给我的自定义事件
      this.$emit('back')
      this.$router.back()
      // new Promise((resolve,reject)=>{
      //   resolve(()=>{
      //     this.$emit('back')
      //   })
      // }).then(()=>{})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
