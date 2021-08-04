import React from 'react'

// 高阶组件：接受一个UI组件，返回一个新的UI组件
// UI组件：入参被称为UI组件
// 容器组件：这个高阶组件就是容器组件

// 容器组件（高阶组件）的作用，用于修饰UI组件。
function role(WrappedComponent) {
  return class New extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        role: ''
      }
    }
    componentDidMount() {
      // axios调接口，还能访问redux状态数据
      this.setState({role: 1})
      // role=1 能请假
      // role=2 不能请假
    }
    render() {
      let { role } = this.state
      return (
        <WrappedComponent {...this.props} role={role} />
      )
    }
  }
}

export default role
