<template>
  <div class='app'>

    <!-- 实际开发中，keep-alive慎用，容易导致各种bug -->
    <!-- keep-alive通常"命名视图"一起使用 -->
    <!-- name=alive的这个容器，用于显示那些需要缓存的页面组件 -->
    <!-- 使用keep-alive之后，被包裹的组件中，使用生命周期要灵活，有可能调接口要写在activated中 -->
    <!-- keep-alive只能保留组件不被路由销毁，以及保留那些所谓的响应式数据，但有些DOM交互是没法保留的（比如滚动条位置） -->
    <keep-alive>
      <router-view name='alive'></router-view>
    </keep-alive>

    <!-- name=default的这个容器，用于显示那些不需要缓存的页面组件 -->
    <router-view></router-view>

    <!-- <keep-alive>
      <component :is='("Home")'></component>
    </keep-alive> -->

  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style lang='css'>
html,body{
  padding:0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
}

/* 解决购物车中checkbox左右居中问题 */
.van-checkbox {
	text-align: center;
}
.van-checkbox__icon {
  margin: 0 auto;
}

[v-cloak] {
  display: none;
}
</style>
