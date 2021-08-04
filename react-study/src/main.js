// Webpack启动或打包，这是src源码运行的第一行

// 安装两个包
// cnpm i react -S     提供了React MVVM所有功能(声明式、组件化)
// cnpm i react-dom -S 提供了一个render方法用于把React组件渲染到真实DOM上

// 引入React支持JSX语法
import React from 'react'
// 只能这样写成ReactDOM，不能写成ReactDom
import ReactDOM from 'react-dom'
// 引入全局样式
import '@/assets/style.css'
import '@/assets/common.scss'
import 'antd/dist/antd.css'

// App是React类（React组件）
import App from './App.jsx'
// <App/>是React元素（JSX元素）
ReactDOM.render(<App />,document.getElementById('app')) // eslint-disable-line



// 一、样式模块
// import './assets/style.css'
// import './assets/common.scss'

// console.log('----'); // eslint-disable-line

// 二、测试HMR功能
/* eslint-disable */
// document.getElementById('btn').addEventListener('click', function(){
//   const color = document.getElementById('ipt').value
//   console.log('color', color)
//   document.getElementById('hello').style.color = color
// })
// console.log('hello 2103')
/* eslint-enable */

// 三、图片模块
// import logo from './assets/logo.png'
// document.getElementById('img').src = logo // eslint-disable-line

// 四、JS模块
// import Dog from './utils/Dog.js'
// const d = new Dog()
// d.run()

// 五、测试自定义Loaders(txt模块)
// import hello from './assets/hello.txt'
// console.log('txt-loader 处理的结果', hello)
