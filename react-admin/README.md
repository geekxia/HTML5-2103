# 环境搭建

- 创建支持TypeScript的项目
```
cnpm i create-react-app -g
create-react-app react-admin --typescript
```
- 初始化暴露环境配置文件
```
cd react-admin
git init
git add .
git commit -m '初始化暴露操作'
npm run eject
```
- 在执行暴露操作时，如果安装第三方很慢，还可以如下处理：
```
rm -rf node_modules
cnpm install
```

# 用伪代码走一遍redux流程。

为什么要用状态管理？
用什么？大项目用redux？
怎么用？
cnpm i redux -S
要创建store，怎么创建？
createStore(reducer)，什么是reducer？（本质上就是switch)
```
var iState = {
  count: 0
}
function reducer(state=iState, action={type,payload}) {
  let newState = JSON.parse(JSON.stringify(state))
  switch(type) {
    //
    newState
  }
  return newState
}
```
```
export default createStore(reducer)
```
在App.jsx中使用上下文包裹
cnpm i react-redux -S
```
<Provider xxx={store}>

</Provider>
```
在视图组件中，怎么使用上下文中的状态数据？
1、connect ? 对类组件，对函数式组件？
2、useSelector
```
const count = useSelector(store=>store.space.count)
```
- 如何把reducer进行拆分以便于协同开发？combineReducers()

在视图如何修改store中的数据？
答案：使用dispatch({type:'信号', payload:'内容'})向store发送请求，store把任务分配给reducer。
dispatch()这个api从哪里来的？
1、如果connect(mapStateToProps(store), mapDispatchToProps(dispatch))
2、使用 const dispatch = useDispath()， 业务操作 dispatch({type, payload})

两个问题：
1、type这个字段表示“信号”，在action、reducer都用到了。万一，一个地方修改了，另一个地方也要修改。
2、action={type:'del',payload:1} 它代表的是“一个业务”，那它有没有可能被复用呢？

从工程架构方面做了优化：
1、封装一个字典，用于表示整个应用程序中所有的type（避免"信号"重复）。给action用，给reducer用。
2、为了复用action，我们可以封装action生成器函数，它本质上返回是 {type,payload}，给dispatch()使用。
```
function createAction(payload) {
  return { type, payload }
}
```

# redux不支持异步action

- redux-thunk


# 集成TypeScrtip的系列文档

- [create-react-app](https://www.html.cn/create-react-app/docs/adding-typescript/)
- [redux](https://redux.js.org/usage/usage-with-typescript)
- [react-redux](https://react-redux.js.org/using-react-redux/usage-with-typescript)
- [@redux/toolkit](https://redux-toolkit.js.org/usage/usage-with-typescript)
- webpack
- react
- antd

- [TypeScript-React-Starter项目参考](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
