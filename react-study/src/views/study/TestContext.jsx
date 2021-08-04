import React from 'react'

import ThemeContext from '@/utils/theme'
let { Consumer } = ThemeContext

// 上下文
// 所有的外层组件，都是内层的上下文。
// 作用：顺着组件树层级传递数据的一种方式（单向传输）
// 在无状态组件（函数式组件）中，是没有上下文，要使用useContext使用上下文

// 上下文对象上有两个组件：
// <Provider value={}></Provider>向组件树注入数据
// <Consumer>{()=>()}</Consumer>使用上下文数据

// export default class extends React.Component {
//   render() {
//     return (
//       <Consumer>
//       {
//         (ctx)=>(
//           <div
//             style={{
//               color: ctx.color,
//               background: ctx.background
//             }}
//           >
//             <h1>测试上下文</h1>
//           </div>
//         )
//       }
//       </Consumer>
//     )
//   }
// }

class TestContext extends React.Component {
  render() {
    console.log('this', this)
    let { context } = this
    return (
      <div
        style={{
          color: context.color,
          background: context.background
        }}
      >
        <h1>测试上下文</h1>
      </div>
    )
  }
}
TestContext.contextType = ThemeContext
export default TestContext
