<template>

	  <HelloWorld /><hr>

	  <Counter /><hr>

	  <TodoList /><hr>

	  <Avatar :src='avatarSrc' />
	  <button @click='getAvatarSrc'>登录</button><hr>

	  <ComLifeCycle /><hr>

	  <ComputeWatch /><hr>

	  <ModalButton /><hr>

	  <!-- 在2.0中 v-model = v-bind:value + v-on:input -->
	  <!-- 在3.0中 v-model:cate = v-bind:cate + v-on:update-cate -->
	  <!-- 在3.0中 v-model:rank = v-bind:rand + v-on:update-rank -->
	  <!-- 在3.0中 同一个组件上可以同时使用多个v-model -->
	  <!-- 在3.0中 还可以给双向绑定的变量自定义多个修饰符 -->
	  <CateFilter
	    v-model:cate.hehe='cate'
	    @clear-cate='cate=""'
	    v-model:name.hehe.abc.efg.mytrim='rank'
	  /><hr>

	  <AsyncButton /><hr>

	  <FunComponent /><hr>

	  <TestJSX /><hr>

</template>

<script lang='ts'>
import {
	defineComponent,
	ref,
  provide,
  watch
} from 'vue'

import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/components/Counter.vue'
import TodoList from '@/components/TodoList.vue'
import Avatar from '@/components/Avatar.vue'
import ComLifeCycle from '@/components/ComLifeCycle.vue'
import ComputeWatch from '@/components/ComputeWatch.vue'
import ModalButton from '@/components/ModalButton.vue'
import CateFilter from '@/components/CateFilter.vue'
import AsyncButton from '@/components/AsyncButton.vue'
import FunComponent from '@/components/FunComponent' // FC组件
import TestJSX from '@/components/TestJSX'

export default defineComponent({
	components: {
    HelloWorld,
    Counter,
    TodoList,
    Avatar,
    ComLifeCycle,
    ComputeWatch,
    ModalButton,
    CateFilter,
    AsyncButton,
    FunComponent,
    TestJSX
  },
	setup() {
    let avatarSrc = ref<string>('')
    const getAvatarSrc = ()=> {
      console.log('clicked')
      avatarSrc.value = '//m.360buyimg.com/mobilecms/s150x150_jfs/t1/114984/19/18336/299797/5f6954aaE39e8a263/0803c173afe85dff.jpg!q70.jpg.dpg'
    }

    // provide(k, v)  const v = inject(k)
    provide('k1', [1,2,3])
    provide('k2', {
      longitude: 90,
      latitude: 135
    })
    provide('k3')

    const cateChange = e => {
      console.log('cate e', e)
    }

    let cate = ref('ask')
    let rank = ref('')

    return {
      avatarSrc,
      getAvatarSrc,
      cate,
      rank
    }
  }
})
</script>

<style></style>
