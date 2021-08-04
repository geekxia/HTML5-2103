// react库中使用export default导出React类
// react库中使用export导出这个 Component类
import React, { Component } from 'react'

// 16.8 是React的一个重要版本，因为从此以后就了Hooks写法
// 在v16.8以前，类组件用得非常多
// 在v16.8以后，函数式组件用得非常多

// React事件绑定
// 语法：<div onEventName={ handler }></div>，以'on'小写开头，后面事件名字使用大驼峰命名法，比如 onKeyUp、onMouseEnter、onMouseLeave。
// 事件处理器可以封装在当前组件类的内部，在jsx中可以使用this来访问它们。在事件处理器中this等于undefined。但是我们经常需要在事件处理器中访问当前组件实例（this），该怎么办？——使用.bind()解决this指向问题，或者使用箭头函数的语法来绑定事件。

// 一、使用.bind()的方式绑定事件
// 如果使用.bind()的方式来解决this指向问题。这个.bind()的操作可以直接写jsx中，也可以写在constructor()中，还可以写render()方法体中（return之间）。
// 事件对象永远是事件处理器的最后一个参数，无须手动传递事件对象。

// 二、使用箭头函数的方式绑定事件
// 如果使用前头函数的方式来绑定事件，不用考虑this的指向问题了。语法：<div onClick={()=>this.handler()}></div>。
// 事件对象需要手动传递事件对象，语法：<div onClick={(e)=>this.handler(e)}></div>。


// 函数式组件（没有生命周期、没有this）
// 在函数式组件中绑定事件的语法演示
function QfChild() {
  // 箭头函数
  const handler1 = ()=>console.log('child clicked 1')
  // ES5函数
  function handler2() {
    console.log('child clicked 2')
  }
  return(
    <div
      style={{
        fontSize: '40px',
        color: 'red',
        padding: '10px',
        border: '1px solid #ccc'
      }}
    >
      <h3>我是qf-child子组件</h3>
      <button onClick={handler1}>点击1</button>
      <button onClick={handler2}>点击2</button>
      <button onClick={()=>console.log('child clicked 3')}>点击3</button>
    </div>
  )
}


// 类组件（有生命周期、有this）
export default class TestEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick3 = this.click1.bind(this, '33')
  }

  // 事件处理器（测试.bind()方式绑定事件）
  click1(arg, event) {
    console.log('this', this)
    console.log('clicked', arg)
    console.log('事件对象', event)
  }

  // 事件处理器（测试箭头函数方式绑定事件）
  click2(arg, e) {
    console.log('this', this)
    console.log('clicked', arg)
    console.log('事件对象', e)
  }

  // 测试阻止冒泡
  innerClick(e) {
    e.stopPropagation()
    console.log('inner clicked')
  }

  // 测试阻止默认事件
  prevent1(e) {
    e.preventDefault()
    console.log('点击了a标签')
  }
  prevent2(e) {
    e.preventDefault()
    console.log('点击了checkbox标签')
  }

  // 测试键盘事件（绑定enter事件）
  confirm(e) {
    // 键盘事件，要根据键盘码来区分
    if(e.keyCode === 13) {
      console.log('Enter确定提交', e.target.value)
    }
  }

  // 在类组件中render()不能少，如果组件少了render()，那么组件就没有视图结构
  render() {
    this.handleClick2 = this.click1.bind(this, '22')
    return (
      <div>
        <h1>学习事件绑定</h1>
        <hr/>

        {/*
          使用.bind()的方式来解决事件处理器中的this指向问题
          以下三种方式绑定事件的方式，原理相同。
        */}
        <button onClick={this.click1.bind(this, '11')}>点击1</button>
        <button onClick={this.handleClick2}>点击2</button>
        <button onClick={this.handleClick3}>点击3</button>
        <hr/>

        {/*
          使用箭头函数的方式来绑定事件，没有this指向问题.
          因为ES6的箭头函数中的this，永远指向它所在作用域环境。
          使用箭头函数绑定事件，事件对象需要手动传递。
        */}
        <button onClick={e=>this.click2('44', e)}>点击4</button>

        {/* 阻止事件冒泡，没有vue事件的那些东西 */}
        <div
          className='outer'
          onClick={()=>console.log('outer clicked')}>
          <div
            className='inner'
            onClick={_=>this.innerClick(_)}>
            测试阻止冒泡
          </div>
        </div>

        {/* 阻止默认事件 */}
        <div>
          <a
            onClick={_=>this.prevent1(_)}
            href="https://baidu.com">
            百度
          </a>
          <input
            type="checkbox"
            onClick={_=>this.prevent2(_)}
          />
        </div>

        {/* 绑定键盘事件 */}
        <div>
          名称搜索：
          <input
            type="text"
            onKeyUp={_=>this.confirm(_)}
          />
        </div>

        {/* 测试函数式组件中的事件绑定 */}
        <QfChild />

      </div>
    )
  }
}
