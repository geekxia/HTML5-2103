// 导入vue这个包
import Vue from 'vue'
// 引入根组件
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import store from './store/'

// Vue原型链
import img from '@/utils/img'
Vue.prototype.$img = img

import api from '@/utils/api'
Vue.prototype.$api = api

new Vue({
  el: '#app',
  // 挂载路由系统
  router,
  store,
  // render函数是一个Vue选项，用于把App组件渲染（replace替换掉）#app节点。
  render: h => h(App)
})
// .$mount('#app')
