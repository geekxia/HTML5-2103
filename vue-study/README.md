created by 2103 at 2021-06-07

# 一、环境搭建

- 脚手架：可以认为是软件开发中快速搭建环境的一种工具。（脚手架会提供很多高效开发的功能、文件模板等等）
- vue2.0的脚手架叫 @vue/cli
- 搭建前端工程化环境，一定要用到node.js。
- vue3.0环境创建：@vue/cli、vite


#### 1、安装node.js

- node官网上下载node.js、安装node.js
- 建议安装 node v12 版本。

#### 2、安装git
- 因为里面有很linux风格的命令，为使用Mac打下一点基础。
- 验证node是否安装成功：
```
node -v
npm -v
```
#### 2、使用cnpm淘宝镜像
```
npm install cnpm -g --registry=https://registry.nlark.com
```
- cnpm安装成功后，先关闭git bash，再打开才能使用cnpm。
```
cnpm install @vue/cli -g  # 脚手架安装成功，关闭git bash，再打开
vue -V  # 验证脚手架是否安装成功
```

#### 4、创建vue项目、运行项目

```
vue create 项目名称
# 选择 vue2.0

cd 项目目录
npm run serve
```

#### 5、项目目录分析

- README.md 程序员写笔记的地方（必读）
- 是npm生成的包管理器文件，记录着当前项目所需要的各种依赖包、命令行配置。
- 如果node_modules出现了错误，怎么办？
```
rm -rf node_modules
cnpm install
```
- babel.config.js 这是Babel编译器的配置文件
- node_modules 是根据package.json来安装的所有第三方依赖包，一般不要动它。
- public目录，是当前本地服务的静态资源服务器
- public/index.html 是Vue单页面应用程序的唯一的html文件，项目编译打包的.js文件会被自动插入这个文件中去。
- src目录，是我们写代码的地方。
- src/main.js是整个Vue应用程序的入口文件，第一行运行的js代码就是这里面。
- src/App.vue 这种.vue文件是Vue官方设计的一种单文件组织，便于我们组织Vue代码。

#### 6、初步体验Vue脚手架环境

- eslint，是一个代码检测工具，如果你写的代码不符合eslint的规则，就给你报错。
- TodoList.vue 实现


# 二、Vue路由

#### 1、基本使用

- 单页面应用程序（SPA）的本质：只有一个html页面（Vue系统），当url发生变化时，Vue系统找到当前url所对应的组件，将其替换到App根容器。
- 在单页面应用程序中，视图（页面）切换变化，实际就是一组Vue组件的显示(created)与隐藏(destroyed)。
- 安装vue-router(3.x)
```
cnpm install vue-router -S
```
- 在src/router.js文件，编码如下：
```
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({routes: [{path, component}]})
```
- 在main.js入口文件中挂载router，编码如下：
```
import router from './router.js'
new Vue({router})
```
- 在App.js根容器中，编写如下：
```
<template>
<div> <router-view></router-view> </div>
</template>
```
- 怎么测试？在浏览器的地址栏中手动改变url，看效果。

#### 2、学习路由，搞明白三个问题？

- 如何定义一一对应的路由匹配规则？（使用到很routes字段属性）
- 如何更改URL？（声明式路由跳转、编程式路由跳转）
- 当URL发生变化时，path所对应的组件应该放在哪里进行显示？（<router-view>）

#### 3、vue环境支持sass

- @vue/cli 背后是webpack4.0
- sass-loader是一个webpack的Loaders，作用是加载src源码的sass资源，并交给sass编译器进行编译。
- 注意：sass-loader@12.0.0 用于支持webpack5.0
- 我们的做法是：
```
# 建议使用 node v12
cnpm i sass -D
cnpm i sass-loader@7.3.1 -D
```
- 在.vue文件中使用`<style lang='scss'></style>`

#### 4、可以使用另一个更好用的包管理器
```
npm install yarn -g
yarn add vue-router

# 删除node_modules包
rm -rf node_modules
# 根据package.json重新安装node_modules包
yarn
# 或者
cnpm install
```

#### 5、路由基础知识点

- 1、两个内置组件：`<router-view>、<router-link>`
- 2、两个内置API：`$route、$router`，watch可以监听$route的变化。
- 3、两种路由跳转方式：
	- 声明式跳转(`<router-link to='/path'>`)
	- 编程式跳转(`this.$router.push()/go()/back()/replace()`)
- 4、两种路由通信方式：
	- query传参(this.$router.push(`/detail?id=${id}&age=${age}`))，在另一个页面使用`this.$route.query`接收。
	- 动态路由传参（this.$router.push(`/detail/${id}/${age}`)）,在路由匹配规则`routes:[{path:'/detail/:id/:age'}]`，在另一个页面中使用`this.$route.params`接收。
- 5、重定向 `routes: [{path:'/*', redirect:'/已定义过一个path'}]`，一般放在路由规则的最后一条。
- 6、别名：`routes:[{path:'/abcdefafesef', alias:'/abc'}]`，访问别名和访问path，显示的是同一个组件。
- 7、命名路由：`routes:[{path:'home', name:'h'}]`，使用它：`this.$router.push({name:'h', ...})`。
- 8、命名视图：给`<router-view name='abc'>`加个名字，默认叫`default`。此时路由规则的写法是`routes:[{path:'',components:{abc:Home}}]`。
- 9、嵌套路由：`routes:[{path,component,children:[{path,component}]}]`，一级路由规则的视图容器定义在App.vue中，二级路由规则的视图容器定义在一级路由所对应的Vue组件中。
- 10、路由懒加载：是一种性能优化方案，背后的技术是异步组件和Webpack代码分割，写法`const Home = ()=>import('')`。
- 11、两种路由模式：history模式 vs. hash模式，背后原理是什么？部署服务时谁会404？如何解决问题？
- 12、路由守卫、路由元信息：项目实战中再讲。


# 三、状态管理

#### 1、基本背景

- 通信：组件之间、端与端之间的数据交互。
- 状态：在应用程序中，指的是“数据”。
- Flux数据架构思想：解决的核心问题——如何科学地管理大型应用程序中的数据（状态）？
- Vuex，是在Flux思想下诞生的一款Vue状态管理工具，是一个具体的可落地的数据解决方案。
- React配套的状态管理有：Mobx、Redux。
- Vuex，只是一种数据管理的解决方案，不是必选的，也就是说小型的Vue项目可以不使用Vuex。

#### 2、Vuex的作用

- 作用1：使用Vuex在多个组件之间共享数据（这是Vue技术栈中终极的通信方案）。
- 作用2：使用Vuex实现应用程序的数据缓存。

#### 3、使用Vuex

- 安装vuex
```
cnpm install vuex -S
```
- 在src/store/index.js中编码如下：
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({state:{}, mutations:{}, actions: {}})
```
- 在main.js中挂载store:
```
import store from './store/index.js'
new Vue({ store, el:'#app'})
```

#### 4、五个核心概念

- state：用于定义组件间可共享的数据。
- getters：相当于是Vue组件中的计算属性，它依赖于Vuex的state，当它所关联的state变量变化时，getters方法才会重新执行。
- mutations：用于同步地修改state数据。事实上在mutations方法中也可以做异步操作（比如调接口），但不推荐。
- actions：用于与后端API进行交互。事实上在actions方法也可以直接修改state，但也不推荐这么做。
- modules：只是一种架构思想，为了让多个开发者高效协作，把根store拆分多个独立的子store。

#### 5、四个API（map*系列函数）

- 严格建议在Vue组件中，使用map*系列函数来访问Vuex中的数据和方法，尽量不要使用this.$store来访问数据和方法。
- 当你在Vue组件中使用map*系列方法时，Vuex的子store一定要开启命名空间（`namespaced:true`）。
- mapState和mapGetters 写在Vue组件的 computed中。语法：`...mapState('命名空间', [])`。
- mapMutations和mapActions 写在Vue组件的 methods中。语法：`...mapActions('命名空间', [])`。


#### 6、使用 vue-devtools

- 解压 VueDevtools.zip 到电脑某盘。
- 打开谷歌浏览器 -> 设置 -> 扩展程序 -> 加载已解压的应用程序插件 -> 选择“某盘/VueDevtools/chroome”文件夹 -> 关闭谷歌浏览器 -> 再打开谷歌浏览器 -> 在浏览器右上角点击“扩展程序”icon -> 把vue-devtools固定到浏览器右上角 -> 完成。


#### 7、使用Vuex实现Cnode文章列表功能的思路

- 需求：要在Find.vue页面中渲染Cnode文章列表（文章列表数据放在远程数据库中）
- 在Vuex的 state 中声明一个变量 list:[] （放置文章列表数据）
- 在 Find.vue 中使用 `v-for='item in $store.state.list'` 来访问并渲染（render）文章列表。
- 在 Vuex的actions中，封装一个 getList(store, 调接口的入参)，用于和后端接口交互。
- 在Find.vue的 mounted()生命周期中，触发调接口的actions方法：this.$store.dispatch('getList', 入参)
- getList() 这个actions方法被触发后，开始异步地调接口，当拿到后端数据时，通过 store.commit('updateList', 文章列表) 触发 updateList() 这个mutations方法。
- 在Vuex的mutations中定义一个 updateList(state, 文章列表)，用于更新 state.list。
- 当Vuex中的state.list 发生更新时，使用了它的组件页面会自动更新。

#### 8、axios使用步骤

- axios 它是一个基于Promise的HTTP工具。
- axios 在客户端、Node服务端都可以使用。

- 安装 axios
```
cnpm install axios -S
```
- 在src/utils/fetch.js中创建axios实例、封装拦截器，并抛出。
- 在src/utils/api.js中封装“获取文章列表”的接口方法，并抛出，给到Vuex的actions使用。

#### 9、ajax数据（前端数据流）

- 浏览器的CORS同源策略会阻塞AJAX跨域请求（其它宿主环境没有这个策略）。
	- 不跨域，那么CORS将不再限制我。
	- 不使用AJAX，那么CORS不再限制我。
	- 服务器开放了CORS。
- 以下三种情况都是跨域（跨域是非常常见的）
```
http://qf.com  vs.  https://qf.com
http://qf.com  vs.  http://mi.com
http://12.67.23.204:8001  vs. http://12.67.23.204:8002
```
- 跨域常见的三种解决方法：
	- JSONP：绕过了AJAX，具体的做法`<script src='http://qf.com/api/v1/getList?callback=handler'></script>`，缺点是只能适用于GET请求；实际上后端在响应数据时使用jsonp方式来返回数据。
	- CORS：客户端什么都不用做，只需要在服务端添加相关headers信息，告诉浏览器我是安全的。
	- 代理：在生产环境环境一般使用Nginx来代理，在开发环境下需要在客户端本地服务器上做代理。

- 在Vue脚手架环境实现代码（解决跨域问题），参考项目根目录中的vue.config.js文件的写法。

- 如何一步一步地排查ajax的数据流问题？
	- 打开Netword查看状态码，如果不是200肯定是错误，如果4XX肯定是前端问题，如果5XX一定是服务器的错误。
	- 如果确定了是前端错误，请排查vue.config.js中的devServer.proxy有没有写错，查看baseURL有没有写对。
	- 排查api封装有没有错误（检查method、params、data参数有没有写错，检查返回值不是不Promise）
	- 排查触发调接口的地方（通过mounted/created、或者事件处理器中），检查入参有没有错误（打开network查看入参是否错误，通过必填字段缺少、数据类型错误）。
	- 排查Vuex的actions方法有没有错误，可以使用console.log检查payload、.then()等是否有问题。
	- 排查Vuex的mutaions方法有没有错误，数据处理是否问题。
	- 排查axios封装的拦截器（尤其是响应拦截器）是否有逻辑性的bug、或者判断有误。
	- 配合devtools观察Vuex中state的数据变化，如果state变化是正确，通过在Vue组件使用这个state也是没问题的。
