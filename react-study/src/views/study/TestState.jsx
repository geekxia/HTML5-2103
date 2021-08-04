import React from 'react'

// state

// state只有在类组件中才有，函数式组件没有state（可以使用Hooks模拟出state）
// state的特点：与vue中的data有点像，只有通过使用this.setState()来修改state时，视图才会自动更新。
// 在类组件中，state的声明发生在constructor这个生命周期中。
// 在React中，state声明式变量，只能通过this.state来访问，不能通过this来访问。
// 在React中，修改state声明式变量，一定要使用 this.setState()这个Api，否则会出现这样的问题————state确实变了但是视图不更新。
// 修改state的标准语法：this.setState({}, callback) / this.setState(fn, callback)。说明：callback表示state修改已完成时的回调。

// 在React默认情况（合成事件中）下，this.setState()这个操作是异步操作。但是在其它情况下（比如常见的在定时器中）使用this.setState()是同步的了。
// 什么是合成事件？主要两类：React生命周期、on* 开头这些React事件。
// 如果一定给一个解释：在React合成事件中，出于性能优化的考虑，要对多个this.setState()进行浅合并，所以必须把这些this.setState()变成异步的。


// 在React中原则上不要直接修改state中的变量，要使用this.setState()这个专属api来修改state。

// 我们已经知道this.setState()有两种语法如下：
// 语法1：this.setState({}, callback)  当你修改state时，新state和旧state没有关系时（也就是说，新state不是由旧state计算而来），建议使用语法1。
// 语法2: this.setState((state,props)=>({}), callback)  当你修改state时，新新state和旧state有关系时（也就是说，新state是由旧state计算而来），建议使用语法2。

// 在同一个{}代码块中，如果连续多次调用this.setState()，只触发一次render()，进一步理解只触发一次diff运算，再进一步理解只触发了一次视图更新。为什么呢？因为React会自动合并多个this.setState()的操作（浅合并）。React为什么要这么做？目的是为了尽可能地减少diff运算，也就节省了性能。（类比班级办留级的事儿）


export default class TestState extends React.Component {
  constructor(props) {
    super(props)
    // 声明式变量在这里进行定义
    this.state = {
      count: 1,
      list: [],
      flag: true,
      user: {
        name: 'huang ming',
        age: 18
      },
      hello: 'Hello 2103',
      price: 100,
      age: 20
    }
  }

  updateCountWithoutSetState() {
    // 这一行代码正在直接修改count，它会触发render方法运行吗？
    // 答案：这种直接修改state的方式，实际上也完成了对state的修改，但是不会触发render运行，所以视图不会更新。
    this.state.count++
    console.log('最新的count', this.state.count)
  }

  updateCountWithSetState() {
    // 这一行代码正在修改count，它会触发render方法运行吗？
    // 答案：使用this.setState()这个专属方法，可以完成对state的并且，并且可以触render生成新jsx对象（新的虚拟DOM）,再进行Diff运算找出所有脏节点，最后将其更新到真实的DOM中去。

    // 一、测试this.setState()默认的异步性
    // this.setState() 默认是异步的。
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log('最新的count', this.state.count)
    // setTimeout(()=>{
    //   console.log('最新的count', this.state.count)
    // }, 1000)

    // 二、测试this.setState()在定时器中是同步的
    // setTimeout(()=>{
    //   // this.setState()写在定时器中时，它是同步的操作
    //   // 先触发render方法运行
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   // 再触发console.log()
    //   console.log('最新的count', this.state.count)
    // }, 0)

    // 三、既然this.setState()是异步的，那么如何判断state修改已完成呢？
    // 答案：this.setState({},callback) 还有第二个参数是callback，它表示state已修改完成。
    // 下面这段代码没有任何问题，只是不够优雅，待优化。
    // this.setState({
    //   // count: (++this.state.count)
    //   // count: (this.state.count++)
    //   count: (this.state.count + 1)
    // }, ()=>{
    //   console.log('state已修改完成，最新的count', this.state.count)
    //   // do other something
    // })

    // 四、优化上述代码（终极写法）
    // this.setState((state, props)=>{
    //   // console.log('old state', state)
    //   // console.log('props', props)
    //   return {
    //     count: state.count + 1
    //   }
    // }, ()=>{
    //   console.log('state update done')
    // })

    // this.setState((state)=>({count: state.count+1}), ()=>console.log('state update done'))

    // _ 是一个变量名，它代表的是旧的state。
    this.setState(_=>({count:_.count+1}))
  }

  toggle() {
    // this.setState({
    //   flag: !this.state.flag
    // })
    // 因为flag它的新值与旧值有关，所以建议使用下面这个写法
    this.setState((state)=>({flag: !state.flag}))
  }

  // 绑定在onClick的身上（它一个合成事件）
  updateHello() {
    // 新值是否由旧值计算而来？
    // 以下代码，触发了几次render()？答案：1次render，1次diff运算，1次视图更新。
    this.setState({
      hello: 'Hello 2104',
      price: 100
    })
    this.setState({
      hello: 'Hello 2105',
      age: 40
    })
    this.setState({
      hello: 'Hello 2106'
    })
    this.setState({
      age: 30,
      price: 500
    })
    this.setState(_=>({price: _.price*1000}))
    this.setState(_=>({age: _.age+10, hello:_.hello+' !'}))

    // React自动进行浅合并的结果
    this.setState({
      hello: 'Hello 2106 !',
      age: 40,
      price: 500000
    })
  }


  render() {
    console.log('------ emit render')
    let { count, flag, hello } = this.state
    return (
      <div>
        <h1>学习State</h1>
        <h2>{count}</h2>

        <button
          onClick={()=>this.updateCountWithoutSetState()}
        >
          不使用this.setState修改count
        </button>
        <br/><br/>

        <button
          onClick={()=>this.updateCountWithSetState()}
        >
          使用React中专属的this.setState来修改count
        </button>
        <hr/>

        {
          flag && <div>我是一行可有可无的文字</div>
        }
        <button onClick={()=>this.setState(_=>({flag:!_.flag}))}>Toggle</button>
        <hr/>

        <h2>{hello}</h2>
        <button onClick={()=>this.updateHello()}>修改问候语</button>

      </div>
    )
  }
}
