created by 2103 at 2021-06-21

# 上班后拿到大项目了如何才能不慌？

- 拿到代码后，不要急着写代码。
- 先研究README.md文件，再研究package.json文件，搞清楚怎么运行项目、用到了哪些技术。
- 接着研究`/src`源码目录，搞清楚文件目录关系。
- 重点研究路由router的代码，这是整个应用程序的核心，保底得会配路由、添加新页面。
- 进一步翻阅vuex的store代码，看一下全局store中有如此可以共享的数据。
- 研究代码的原则：先研究语法，日积月累再搞清楚架构（思考）。
- 研究语法，如同读书一样，通过查字典来认知语法。
- 慢慢研究架构，如同理解作者的思想一样，这个需要时间。不懂架构，并不影响你写业务。
- 拿到代码反复研究，记录下所有问题，回头慢慢补充，实在不行抽时间问领导。

# 资源推荐

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
- [Node中文教程](http://nodejs.cn/learn)
- [Cnode官网](https://cnodejs.org/)
- [Node指定版本的镜像源下载](https://npm.taobao.org/mirrors/node/)
- [我的node旧笔记](https://github.com/geekxia/node-stack)

```
cd vue-admin-master
cnpm install
npm start
```

# Node基础

1、为什么要学习Node.js？
- Node.js是前端工程化的基础
- Node.js是JavaScript在服务端应用开发的最佳实践

2、Node.js中台开发
- 由Node.js实现api开发（RESTful API）软件开发的业务能力逐步向前端偏移
- 在Node环境实现SSR服务端渲染（Vue应用程序跑在Node服务器上）

3、BSR客户端渲染 vs SSR服务端渲染
- 网页 = 视图 + 数据
- 视图和数据的组装，如果发生在服务端就是SSR（前后端不分离）；反之叫BSR（前后端分离）。
- Vue服务端渲染技术，用的是 Nuxt.js
- React服务端渲染技术，用的是 Next.js
- BSR和SSR分别有什么特点？分别有什么优势和劣势？

4、Node.js特点
- Node.js不是一门编程语言，是一个运行时环境（宿主环境），它提供了一系列操作系统（OS）级别的API。
- Node.js是由C++编写，诞生于2010年左右。
- Node.js的下一代：Deno（Node.js作者亲手开发的，直接支持TS语法、ES语法）
- Node.js是一个运行时环境，支持大多数的ECMAScript语法（也有不少ES6语法不支持），不支持DOM、BOM。
- Node.js的工程架构和谷歌浏览器的工程架构非常相似，都使用的是谷歌开源v8引擎（JS引擎）。
- Node.js的三大特点：非阻塞、基于事件驱动、强大的IO能力。

5、Node.js安装

- 如果window7，建议node v12；如果window10，建议安装 node v14。
- LTS：最新的Node.js稳定版，不建议安装Current版本。
- Node安装，建议安装偶数版本。
- 下载指定版本时，建议下载 *-x64.msi 版本（支持64位电脑）。
- 双击.msi文件安装node.js，默认情况下环境变化会自动添加到电脑中。
- 验证Node是否真的安装成功：`node -v`或者`npm -v`

6、Node.js运行js代码的两种方式
- 使用node交互式环境运行js代码。`node`进入交互式环境，'ctrl+c'退出交互式环境。
- 在命令行中`node abc.js`运行.js文件。

7、Node包管理器
- npm，是Node.js默认的包管理器
- [npm官网](https://www.npmjs.com/)
- [npm CLI所有命令的文档](https://docs.npmjs.com/cli/v7/commands)
```
// 本地安装，并且记录在package.json的dependencies这里（业务代码需要这个包）
npm install vue -S
// 本地安装，并且记录在package.json的devDependencies这里（只是环境需要产这个包）
npm install @babel/core -D
// 全局安装
npm install @vue/cli -g
// 根据package.json中记录来安装所有包
rm -rf node_modules
npm install
// 卸载指定包
npm uninstall vue -S
npm uninstall @babel/core -D
npm uninstall @vue/cli -g
// 发版本（发包）
npm publish
// 使用init命令创建一个标准的package.json文件（用于配置、记录当前项目的信息）
npm init
```

- yarn，也是一个常用的包管理器，可以和npm交叉使用。
- 在默认node环境中是没有yarn的，怎么安装呢？
- [yarn入门学习文档](https://yarn.bootcss.com/docs/usage/)
```
npm install yarn -g
```
```
// 本地安装，记录在dependencies这里。
yarn add vue
// 本地安装，记录在devDependencies这里。
yarn add @babel/cli --dev
// 全局安装
yarn add @vue/cli global
// 如果丢包，怎么办呢？
rm -rf node_modules
yarn
// 卸载指定的包
yarn remove vue
yarn remove @vue/cli global
// 使用init命令创建一个标准的package.json
yarn init
```

# Node服务器搭建

- 使用Node原生api来搭建
- global
- fs
- http
- modules
- os
- path
- process
- querystring
- stream
- util
- 使用Node的服务端框架来搭建（Express、Koa2）
```
npm init
npm install express -S
```

# MongoDB

1、MongoDB简介
- MongoDB vs. MySQL 有什么区别？
- 前者是非关系型的数据库（NoSQL），后者是关系型数据库（SQL）。
- MongoDB使用BSON数据（二进制的JSON数据）存储的，和JS语法更加适合。
- MongoDB是由C++编写的。
- MEAN全栈开发：MongoDB、Express、Angular、Node。
- MongoDB几乎支持与MySQL相同的数据类型，但更加灵活（String、Number、Object）
- MongoDB英文手册：https://docs.mongodb.com/manual/

2、MongoDB中的核心概念
- 数据库 database：在一个MongoDB服务器下，可以创建多个数据库。
- 集合 collection：类似MySQL中的“表”，在一个数据库下可以有多个集合。
- 文档 document：类似MySQL中的“行”，在一个集合中可以有多个文档。
- 域 feild：类似MySQL中的“字段”，在文档中的key名就是“域”。
- 索引 index：这和MySQL中的索引意思差不多。
- 需要注意的，MySQL中“行”的唯一标识是`id`, MongoDB中“文档”的唯一标识是`_id`。

3、学习三种操作MongoDB的方式（后面两种方式一定要会）
- 使用 `mongo` shell 命令行的方式来操作MongoDB数据库。
- 使用 Robo3T 这个可视化工具来操作MongoDB数据库。
- 使用 驱动模块（mongodb、mongoose）在代码中操作MongoDB数据库。

```
# 启动MongoDB数据库服务器
mongod --dbpath "D:\mongodb\data"
```
```
# mongo shell 连接MongoDB数据库
mongo
```

# 实现商品的增删改查

- 这个功能，要给editor这个角色，admin不需要。这背后的意思是这些页面有权限。

# 联调管理系统的登录（权限）流程

- 从假数据变成真实接口：在vue.config.js中添加代理、修改axios封装的baseURL。
- 在api文件夹中封装api方法：fetchLogin、fetchUserInfo、fetchLogout
- 找到Login.vue页面中“登录的点击事件”（走vuex流程），再找到store中的user子模块中的登录相关的actions方法（联fetchLogin接口），拿到token，把token放在state中去。
- fetchLogin成功后，业务逻辑要跳转到管理系统的内部去。注意：在进入管理系统内部之前，要干一件非常重要的事——要根据用户的roles信息来判断用户可以访问哪些权限页面。
- 如何判断判断用户能够访问哪些权限页面呢？在vue项目中，这个判断逻辑一般写在路由守卫中（本项目参见/src/permission.js文件（权限路由判断，需要结合路由元信息meta一起实现）。
- 在路由守卫（/src/permission.js文件）中找到fetchUserInfo的接口方法（走vuex流程），进一步找到store中的user子模块中的获取用户信息的相关actions方法（联调接口）。
- 最终成功进入了管理系统的内部。
- 总结：用户登录管理系统需要两个步骤——fetchLogin拿到token，根据token换取用户角色信息（角色信息的作用是实现权限路由，权限路由判断是由路由守卫和路由元信息一起实现的）。
- 提示：大脑中一定有这种抽象的能力，想一想整个流程是怎么走的。登录流程非常重要，面试经常被问。
