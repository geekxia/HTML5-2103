import React from 'react'
import role from '@/hoc/role'
import admin from '@/hoc/admin'
import connect from '@/hoc/connect'

// 高阶组件（HOC）
// 作用：是React中的一种业务逻辑（功能）复用的高级技巧。

// 高阶组件也叫高阶函数，它本质是一个纯函数（相同的输入，永远得到相同的输出）。
// 高阶不是React API，它只是一种代码复用的解决方案。

// 当使用多个高阶组件进行组件装饰时，会出props丢失的问题。
// 解决方案：在封装高阶组件时，使用"属性继承"来保留props

// 一、在类组件上使用高阶组件
// @admin
// @role
// class TestHoc extends React.Component {
//   render() {
//     console.log('props------', this.props)
//     let { role } = this.props
//     return (
//       <div>
//         <h1>测试高阶组件</h1>
//         {
//           role === 1 && <button>请假</button>
//         }
//       </div>
//     )
//   }
// }
// export default TestHoc

// 二、在函数式组件上使用高阶组件
export default connect(
  ()=>({a:1,b:2}),
  ()=>({
    getList(payload){},
    login(payload){}
  })
)(admin(role(props => {
  console.log('props', props)
  return (
    <div>
      <h1>测试高阶组件</h1>
      {
        props.role === 1 && <button>请假</button>
      }
    </div>
  )
})))

// 管理系统的权限管理
// 1、粗粒度的权限管理：从菜单的级别进行权限设计
// 2、细粒度的权限管理：从组件元素的级别进行权限设计
