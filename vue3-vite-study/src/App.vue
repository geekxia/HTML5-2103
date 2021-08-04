<template>
  <div class='navs'>
    <router-link tag='span' to='/study' active-class='on'>学习</router-link>
    <router-link tag='span' to='/list' active-class='on'>路由</router-link>
    <router-link tag='span' to='/todo' active-class='on'>状态</router-link>
    <router-link tag='span' to='/cnode' active-class='on'>Cnode</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
// v3中新增的api都要先引入再使用
import {
  defineComponent,  // 使用它定义组件，可以使用v3新特性
} from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
} */
.navs {
  text-align: center;
  line-height: 120px;
  background: rgba(251,251,251,1);
  margin-bottom: 25px;
}
.navs a {
  padding: 0 20px;
  cursor: pointer;
}
.navs a.on {
  color: red;
}
</style>
