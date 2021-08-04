import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import store from './store/'

import http from '@/utils/api'
Vue.prototype.$http = http

import img from '@/utils/img'
Vue.prototype.$img = img

// 全局安装
import { Dialog, Toast } from 'vant'
Vue.use(Dialog)
Vue.use(Toast)

Vue.filter('rmb', val=>'￥'+val)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
