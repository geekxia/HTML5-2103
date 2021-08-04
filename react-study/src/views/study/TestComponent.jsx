import React, { Component, useState } from 'react'

// 两种常用的组件定义方式

// 一、类组件（用得越来越少，比较旧的React中才能见到class组件）
// 必须要有视图结构，所以render()必须存在并且有返回值
// 类组件中有生命周期、有this、有上下文、有ref、有state 等等特性。
// 正因为类组件啥都有，所以相对于函数式组件，它的性能较差，因此目前市场中越来越少被使用了。
// 无论是类组件，还是函数式组件，都有props。在类组件中，使用this来访问props。

class TestComponent1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  // 自增
  add() {
    // 修改count这个声明式变量，触发render返回一个新的jsx对象，进一步触发diff运算，把找到的脏节点更新到真实的DOM上。
    this.setState(state=>({count:state.count+1}))
  }
  render() {
    // 测试打印类组件的各种特性
    console.log('this', this)
    console.log('refs', this.refs)
    console.log('state', this.state)
    console.log('context', this.context)
    // 测试打印类组件的props
    console.log('props', this.props)
    return (
      <div>
        <h1 ref='junbao'>我是类组件</h1>
        <h2>{this.state.count}</h2>
        {/*<button onClick={this.add.bind(this)}>自增</button>*/}
        <button onClick={()=>this.add()}>自增</button>
      </div>
    )
  }
}

// 二、函数式组件（目前市场中几乎都用的是函数式组件）
// 函数式组件，也叫做“无状态组件”
// 函数式组件本质上是一个js函数，它的入参的props，它的返回值是JSX视图结构（并且一定要有返回值）
// 函数式组件可以使用function关键字来定义，也可以使用箭头函数来定义。
// 函数式组件中啥都没用，没有生命周期、没有this、没有上下文、没有ref、没有state。。。
// 正因为函数式组件啥也没有，所以相对类组件来说，它的性能更好。因此被工作中用得越来越多。
// 函数式组件虽然性能较好，但什么都没有，这导致开发很不方便。怎么办？从React 16.8开始新增了很Hooks Api来解决这个问题。

// 历史，在16.8以前，我们写React项目时可以同时使用类组件和函数式组件，经常写着写着，把函数式组件又改成类组件。

// 在函数式组件中，因为函数的默认参数就是props，所以可以直接访问这个props

function TestComponent2(props) {
  return (
    <div>
      <h1>我是函数式组件</h1>
    </div>
  )
}

const TestComponent3 = props => (
  <div>
    <h1>我是函数式组件</h1>
  </div>
)

// 我个习惯这种方式来定义函数式组件
// 在16.8以前，要实现上述“自增”功能，只能手动把这个组件还原成类组件
// 但是在16.8以后，我们可以使用Hooks API 来实现这样的“自增”功能
const TestComponent4 = props => {
  // count，是useState模拟出来的声明式变量
  // setCount，是专用用于修改count的。
  let [count, setCount] = useState(1)
  // do something
  console.log('this', this)
  console.log('props', props)
  return (
    <div>
      <h1>我是函数式组件</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>自增</button>
    </div>
  )
}


export default TestComponent4
