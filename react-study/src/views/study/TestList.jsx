import React from 'react'

// 列表渲染

// 列表渲染的语法基础：jsx直接支持对数组的渲染。
// 在jsx渲染时，undefined、null、布尔值会被忽略掉。

// 在React中，官方建议使用数组的 map() 进行列表渲染。但需要注意的是，map不是唯一的。
// 列表渲染时，要给数组中的每一个jsx元素添加一个 key值，以保证性能。

const Child = props => (<div>{props.name||'我是狗蛋'}</div>)

// 在定义React类组件时，class关键字的后面可以不给组件取名，那么这个组件就叫做default
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 你可以想象列表数据来自于后端
      list: [
        { id: 1, user: '瑞茹', age: 16 },
        { id: 2, user: '章俊', age: 40 },
        { id: 3, user: '春明', age: 80 }
      ]
    }
  }

  // 如果不需要对list进行处理，建议用这种写法。
  renderList1() {
    let { list } = this.state
    // 这种直接返回数组的写法，不能对列表数据进行处理，有局限性。
    return list.map(ele=>(
      <div key={ele.id}>
        <span>{ele.id}</span>
        --
        <span>{ele.user}</span>
        --
        <span>{ele.age}</span>
      </div>
    ))
  }

  // 能用map()，尽量不要使用for循环和其它循环。
  renderList2() {
    let { list } = this.state
    var arr = []
    for(let i=0; i<list.length; i++) {
      arr.push(
        <div key={list[i].id}>
          <span>{list[i].id}</span>
          --
          <span>{list[i].user}</span>
          --
          <span>{list[i].age}</span>
        </div>
      )
    }
    return arr
  }

  // 如果需要对list进行处理，建议使用下面这种写法。
  renderList3() {
    let { list } = this.state
    var arr = []
    list.map(ele=>{
      // do something
      // 非常灵活，我可以每一条数据进行若干的处理。
      ele['pass'] = Math.random()
      ele.age = ele.age - 5
      arr.push(
        <div key={ele.id}>
          <span>{ele.id}</span>
          --
          <span>{ele.user}</span>
          --
          <span>{ele.age}</span>
          --
          <span>{ele.pass}</span>
        </div>
      )
    })
    return arr
  }



  render() {
    let { list } = this.state
    return (
      <div>
        <h1>测试列表渲染</h1>
        <hr/>

        {/* 测试“JSX直接支持数组渲染”这个语法基础 */}
        {
          [
            <div key='1'>我是数组中的第一个jsx元素</div>,
            <div key='2'>我是数组中的第二个jsx元素</div>,
            '我是字符串',
            10000,
            null,
            undefined,
            true,
            false,
            <Child key='3' />,
            <Child key='4' name='荣军' />,
            <div key='5'>
              <h3>我是嵌套的jsx结构</h3>
            </div>
          ]
        }
        <hr/>
        {[<div key='1'>1</div>,<div key='2'>2</div>,<div key='3'>3</div>]}
        <hr/>

        {/* 下面这个map()最后的返回值是一个由jsx元素组成的数组 */}
        {/*
          工作中是直接像下面这样进行列表渲染，还是封装方法来渲染？
          没有标准答案。如果你觉得代码有点复杂，建议你封装一下。
        */}
        {
          list.map(ele=>(
            <div key={ele.id}>
              <span>{ele.id}</span>
              --
              <span>{ele.user}</span>
              --
              <span>{ele.age}</span>
            </div>
          ))
        }
        <hr/>

        { this.renderList1() }
        <hr/>

        { this.renderList2() }
        <hr/>

        { this.renderList3() }


      </div>
    )
  }
}
