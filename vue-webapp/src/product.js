import Vue from 'vue'
import App2 from './App2.vue'

Vue.config.productionTip = false

import router from './router'

new Vue({
  router,
  render: h => h(App2),
}).$mount('#app2')
