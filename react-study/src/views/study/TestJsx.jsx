// 关于React组件的文件后缀说明
// 如果当前组件中没有使用到TS，文件后缀可以是.js/.jsx
// 如果当前组件中用到了TS语法，文件后缀必须是.ts/.tsx

// 引入React的目的是为了支持JSX语法

import React from 'react'

// 如何理解JSX ?

// JSX = JavaScript XML
// jsx是React团队提供一种语法糖，可以方便地编写React组件的代码
// jsx语法在React开发中是可选的，也就是说你可以不使用jsx，但React官方推荐要使用jsx
// 如果不使用jsx语法，就要使用React.createElement()来写代码，但非常麻烦。
// React支持两种编写组件的方式：类组件、函数式组件
// 在类组件中jsx代码写在render()这个生命周期的return语句中
// 在函数式组件中jsx代码直接写return语句中
// jsx看上去非常像HTML结构，所以在不使用碎片语法的情况下，只能是单一根节点。
// 在react没有指令，渲染声明式变量要使用 {} 语法(jsx支持这种{}语法)
// 因为jsx不是HTML代码，它是JS代码，所以在jsx中使用声明式变量要使用this来访问。
// 在react中元素的动态属性绑定，也是使用 {} 这种jsx语法。
// 在jsx语法中，class要写成className，for要写成htmlFor，tab写成tabIndex。
// 在jsx代码中可以添加注释，要使用 {/* */} 写注释。
// 在jsx的 {} 中可以使用JavaScript表达式，但不能使用JS语句。
// react元素（jsx元素）本质上是一个变量、对象、表达式，所以jsx中使用另一个jsx变量时也要使用 {} 包裹起来。
// jsx元素不要定义到state中去了。
// jsx支持无限嵌套，这是父子组件关系的基础（后面再提）。
// jsx渲染元素时，如果被渲染的变量是布尔值、undefined、null将被忽略。
// jsx在浏览器环境里默认不支持，是由webpack和@babel/preset-react进行编译，编译的结果就是一系列的React.createElement()的使用。
// jsx中新增了三个属性：key、ref、dangerouslySetInnerHTML，在jsx中渲染文本字符串或者html字符串时，默认是防注入攻击（XSS）。

// 关于理解“jsx是不可变对象”的问题：
// 在react中，修改声明式，只能通过this.setState()这个api来修改。当声明式变量发生变化时，render()这个生命周期方法会重新执行。那么问题来了，如果render()每次都重新执行，那么它所return出来的这一堆jsx元素是不是都要重新渲染呢？答案是否定的。
// 解释：每当有“风吹草动”时，render()方法都会重新执行，它所对应的return语句也会运行（每次都返回一个新的jsx对象）。但是DOM结构没有被完全替换与更新，只更diff运算的结果。原因是因为jsx是不可变对象（不能直接修改），所以每render()时都返回一个新的jsx对象（对应就一个新的虚拟DOM），接着触发diff运算（找到两个虚拟DOM中变化的脏节点），也就是找到了这两个jsx对象的差异，React只更新找到的差异。


// React元素
// const ele = React.createElement('h1', null, 'Hello 2103')
// const ele = React.createElement('div', {title:'2103'}, [
//   React.createElement('h1', null, 'hello 11'),
//   React.createElement('h1', {class:'box'}, 'hello 22'),
//   React.createElement('h1', {title:'box'}, [
//     React.createElement('span', null, 'hello 33')
//   ])
// ])

// React元素（JSX元素）
const random = <h1>{Math.floor(Math.random()*10000)}</h1>

// jsx嵌套（顺序倒了渲染不出来，再次验证了这是js代码）
const oSpan = <span>Hello Span</span>
const oH1 = <h1>{ oSpan }</h1>
const container = <div className='container'>{ oH1 }</div>

// 类组件
export default class TestJsx extends React.Component {
  constructor(props) {
    super(props)
    // 定义声明式变量，类似vue中data选项
    // 在react中这些声明式变量不能使用this访问，只能使用this.state来访问
    this.state = {
      count: 1,
      title: '来自后端的title'
    }
  }
  // 相当于vue中的mounted()
  componentDidMount() {
    this.timer = setInterval(()=>{
      // 修改声明式变量
      this.setState(state=>{
        return {
          count: state.count+1
        }
      })
    }, 1000)
  }
  // 相当于vue中beforeDestroy()
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  // 是一个生命周期，用于把JSX元素渲染到DOM上
  render() {
    // do something
    let { count, title } = this.state

    console.log('----- render')

    return (
      <div className='test-jsx'>
        <h1>学习JSX</h1>
        <hr/>
        <h1>Helle Class Component</h1>
        {/* className='box'是静态传值 */}
        {/* title={title} 是动态传值 */}
        { random }
        { container }

        <h1>{ Math.floor(Math.random()*10000) }</h1>
        <h1
          title={title}
          className={('box'+1)}
        >{ count }</h1>

        <hr/>
      </div>
    )
  }
}
