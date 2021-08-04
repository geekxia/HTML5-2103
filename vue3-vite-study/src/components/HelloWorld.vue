<template>
  <!-- DOM接口的ref的值，不能其它响应式变量重名 -->
  <h1 ref='box' v-text='msg'></h1>
  <button @click='click'>修改MSG</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'


export default defineComponent({
  name: 'HelloWorld',
  // 新增的选项（组合）
  // 在setup不能访问到this
  // ref是v3中新增的api，用于定义响应式数据（基本数据类型）
  setup(props, ctx) {
    // console.log('props', props)
    // console.log('ctx', ctx)
    let msg = ref('hello vue3')
    console.log('msg', msg.value)
    // 在这里修改msg，不能使用this，要使用 msg.value = 'new value'
    msg.value = 'hello world'
    return {
      msg
    }
  },
  methods: {
    click() {
      this.msg = 'Hello GP5'
      // this.$refs.box.style.background = 'red'
      // this.$refs.box.style.color = 'white'
    }
  }
})
</script>

<style scoped>
</style>
