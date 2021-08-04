<template>
  <div class='2103'>
    <Menu />
    <!-- 这个地方（教室）到底放什么样的组件（学生） -->
    <!-- router-view，被称作是"视图容器"，是 vue-router提供的一个内置组件 -->
    <!-- 它的作用，用于显示url所对应的vue组件 -->
    <!-- 视图命名，给router-view组件改个名字 -->
    <router-view name='hh'></router-view>
    <router-view name='oo'></router-view>
    <!-- 如果不给name，默认叫default -->
    <router-view></router-view>

  </div>
</template>

<script>
import { Menu } from '@/components/'
export default {
  data() {
    return {
      msg: 'Hello World'
    }
  },
  components: {
    Menu
  },
  watch: {
    // 当url发生变化时，这个方法会执行
    // $route(to, from) {
    //   console.log('to', to)
    //   console.log('from', from)
    // }
  },
  mounted() {
    // console.log('app mounted')
    // console.log('$router', this.$router)
    // console.log('$route', this.$route)
    console.log('app instance',this.$img)
  }
}
</script>

<!-- 为了支持sass，需要在项目环境中安装两个依赖 -->
<!-- cnpm i sass-loader@7.3.1 -D -->
<!-- cnpm i sass -D -->
<style lang="scss">

/* 全局样式 */
html, body {
  padding: 0;
  margin: 0;
  background: #cdcdcd;
}



</style>
