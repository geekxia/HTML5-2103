// React技术栈中有两个非常经典、也很常用的状态管理工具
// 它们也是基于 Flux数据架构思想而诞生的开源的状态管理
// 对一个Web应用程序来讲：如果数据流管理不好，这个项目必死。
// React团队一般都较大，也一些小的React项目。

// 对React大项目，一般都使用 Redux。
// 对React小项目，一般使用 Mobx 就够了。

// Mobx 最新版本v6，旧版本是v5（会用到ES6装饰器）。

// cnpm i mobx -S
// mobx 这个库是提供一系列的api，用于把变量变成响应式变量，把函数变成action方法。

// cnpm i mobx-react -S
// mobx-react 这个库提供了一个<Provider>组件，用于向React组件树中注入上下文。
// mobx-react 这个库还提供两个高阶组件 observer、inject。

import StudyStore from './modules/study'
import CnodeStore from './modules/cnode'


class Store {
  constructor() {
    this.study = new StudyStore()
    this.cnode = new CnodeStore()
  }
}
export default new Store()
