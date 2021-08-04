import React from 'react'

// 生命周期

// 所谓的生命周期就是一系列的钩子函数（合成事件），用于表示React组件中一些重要的时刻。

// React生命周期分为三个阶段：装载阶段（3）、更新阶段（2）、卸载阶段（1）
// React生命周期：321
// 装载阶段（3）：constructor / render / componentDidMount
// 更新阶段（2）：[shouldComponentUpdate] / render / componentDidUpdate
// 卸载阶段（1）：componentWillUnmount

export default class extends React.Component {

  // 生命周期的第一阶段：装载阶段（3）=============================================

  // constructor()
  // 这是React类组件的构造器函数，这个构造器接受一个参数是props
  // props表示父组件传递过来的信息数据、路由信息、状态管理信息。
  // props相当是父子关系中的纽带、基因；所以在props的过程中，不能修改它。
  // state声明式变量，必须定义在constructor中，使用this.state = {}来定义。
  // 特点注意：React不推荐把props和state进行交叉赋值，这会导致乱七八糟的bug。
  // 在contstuctor()中，也不能使用this.setState()。
  // 在contstuctor()中，可以做一些初始化数据处理工作，但不要在这里调接口、DOM操作、开定时器。
  constructor(props) {
    // super(props) 调用父类（Component）的构造器函数，用于继承Component类的特性。
    // super(props) 必须是constructor()的第一行代码。
    super(props)
    this.state = {
      count: 0,   // 实现“自增”效果（它要参与视图渲染）
      number: 0   // 用于统计当前组件的更新的次数（它不参与视图渲染）
    }
    // do something
    console.log('----------constructor')
  }

  // componentDidMount()
  // 相当于是vue中的mounted()，表示DOM视图已渲染完成。
  // 在这里，可以调接口、可以dom操作、可以开定时器。
  // 在这里，可以使用this.setState()来更新state。
  componentDidMount() {
    console.log('----------componentDidMount')
  }

  // 生命周期的第二阶段：更新阶段（2）=============================================

  // shouldComponentUpdate()
  // 它是一个控制react更新的“开关”，
  // 这生命周期，它必须要有返回值，并且它的返回值要求是布尔值
  // 如果它返回false，则更新阶段不会运行了。
  // 如果它返回true，则更新阶段正确运行（生成新jsx、diff运算、更新视图）
  // 这个生命周期，在工作中很少用。但是面试官爱问这个生命周期。
  // 这个生命周期，有什么用？用于精细化地控制是否执行更新，以达到性能优化的目的。
  shouldComponentUpdate(newProps, newState) {
    console.log('----------shouldComponentUpdate')
    console.log('newProps', newProps)
    console.log('newState', newState)
    // 拦截掉那些“不用于视图更新”的state变量
    // 如果发现那些与视图更新无关的state变量，我要返回false

    // 当number发生变化时，并且count没有发生变化时
    // 因为number没有参与视图渲染，所以我要拦截它——不让它执行更新过程，这优化了性能。
    if(newState.number!==this.state.number) {
      return false
    }else{
      // 其它情况，比如count变化时
      return true
    }
  }

  // componentDidUpdate()
  // 相当于是vue中的updated()，表示DOM视图更新已完成。
  // 在这里可以使用this.setState(),但最好给一个终止条件，避免死循环。
  // 工作中，最好别在这个生命周期中使用this.setState()
  // 在这里，可以做DOM操作。如果没有特殊需求，尽量别在这里做DOM操作。
  componentDidUpdate() {
    console.log('----------componentDidUpdate')
    if(this.state.count<=9) {
      setTimeout(()=>{
        this.setState(_=>({count: _.count+1}))
      }, 1000)
    }
  }

  // 生命周期的第三阶段：卸载阶段（1）=============================================

  // componentWillUnmount()
  // 相当于是vue中的beforeDestroy()
  // 通常在这里关闭定时器、关闭长连接、销毁占内存的变量
  // 在这里不能使用this.setState()
  // 在这里也不要做与DOM相关的事。
  componentWillUnmount() {
    console.log('----------componentWillUnmount')
  }

  renderList() {
    // 这个方法是用于生成jsx结构的，所以不能使用this.setState()
    // this.setState(_=>({count:_.count+1}))
    return (
      <div>list</div>
    )
  }

  // render()
  // 这是React类组件中唯一的一个必须要有的钩子
  // render()函数一定要有return语句
  // render()它的返回值可以是null，或者是jsx元素。
  // 在render()内部、return之前，可以写任何业务逻辑，但是不建议做与DOM操作有关的事儿。
  // 在render()中不能使用this.setState()，因为this.setState()会触发render()返回新的jsx，这将是一个死的循环。
  // 特别警告：在那些用于生成jsx的渲染函数中，也不能使用this.setState().
  render() {
    console.log('----------render')
    // do something
    let { count } = this.state
    return (
      <div>
        <h1>学习生命周期</h1>
        <hr/>
        { this.renderList() }
        <hr/>

        <h1>{count}</h1>
        <button
          onClick={()=>this.setState(_=>({count:_.count+1}))}>
          自增Count
        </button>
        <button
          onClick={()=>this.setState(_=>({number:_.number+1}))}>
          自增Number
        </button>
      </div>
    )
  }
}
