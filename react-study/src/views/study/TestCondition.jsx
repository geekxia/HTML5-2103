import React from 'react'

// 一、条件渲染
// 类似vue中v-if、v-else-if、v-else，实现条件渲染，当条件为假时，DOM会移除掉。
// 实现单一元素的条件渲染：使用 && 短路运算符或 ! 取反运算符来实现。
// 实现两个元素的条件渲染：使用 ? : 三元表达式来实现。
// 实现多个元素的条件渲染：使用 && 短路运算符，或者自定义封装switch语句的函数来实现（根据运算条件返回相应的JSX元素即可）。

// 二、动态样式
// 使用动态样式技术，可以实现类似vue中的v-show的功能。
// 如果使用的是动态 className，实际上是根据state条件计算得到相应的类名。
// 如果使用的是动态 style，实际是根据state条件计算得到一个类似这样的对象 {color:'red',fontSize:'50px'}。

export default class TestCondition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bol1: true,
      bol2: true,
      level: 1,
      color: 1,  // 1-'c1' 2-'c2' 3-'c3'
      // disClass: ''  // ''  'hidden'
      show: true,
      sty: {color:'red',fontSize:'30px'},
      asyncSty: {
        fontSize: '16px'
      },
      show2: true
    }
  }

  toggle1() {
    this.setState(_=>({bol1: !_.bol1}))
  }
  toggle2() {
    this.setState(_=>({bol2: !_.bol2}))
  }

  // 功能：用于条件渲染学历的视图
  renderLevel() {
    let { level } = this.state
    let ele = null
    // if(level===1) {
    //   ele = <h3>我是高中学历</h3>
    // }else if(level===2) {
    //   ele = <h3>我是大专学历</h3>
    // }else if(level===3) {
    //   ele = <h3>我是本科学历</h3>
    // }else{
    //   ele = <h3>我是硕士学历</h3>
    // }
    switch (level) {
      case 1:
        ele = <h3>我是高中学历</h3>
        break
      case 2:
        ele = <h3>我是大专学历</h3>
        break
      case 3:
        ele = <h3>我是本科学历</h3>
        break
      case 4:
        ele = <h3>我是硕士学历</h3>
        break
      default:
    }
    return ele
  }
  toggle3() {
    this.setState(_=>{
      // 根据旧值，计算得到新值
      const newLevel = _.level+1>4 ? 1 : _.level+1
      return { level: newLevel }
    })
  }

  toggleColor() {
    this.setState(_=>{
      // 让 1 2 3 循环
      const color = _.color+1>3 ? 1 : _.color+1
      return { color }
    })
  }

  toggle4() {
    // this.setState(_=>({disClass: (_.disClass==='' ? 'hidden' : '')}))
    this.setState(_=>({show:!_.show}))
  }

  updateAsyncSty() {
    this.setState(_=>{
      // 业务逻辑
      const newSize = parseInt(_.asyncSty.fontSize.split('px')[0])+1
      return { asyncSty: {fontSize: newSize+'px'} }
    })
  }

  toggle5() {
    this.setState(_=>({show2:!_.show2}))
  }

  render() {
    let {
      bol1,
      bol2,
      level,
      color,
      disClass,
      show,
      sty,
      asyncSty,
      show2
    } = this.state

    return (
      <div>
        <h1>学习条件渲染和动态样式</h1>
        <hr/>

        {/* 单个元素的显示与隐藏, v-if */}
        {
          !bol1
          && <h3>我是一行可有可无的文字</h3>
        }
        <button onClick={()=>this.toggle1()}>显示/隐藏</button>
        <hr/>

        {/* 两个元素的显示与隐藏，v-if/v-else */}
        {
          !bol2
          ? <h3>我是白天</h3>
          : <h3>我是黑夜</h3>
        }
        <button onClick={()=>this.toggle2()}>显示/隐藏</button>
        <hr/>

        {/* 多个元素的显示与隐藏，v-if/v-else-if/v-else */}
        { level===1 && <h3>我是高中学历</h3> }
        { level===2 && <h3>我是大专学历</h3> }
        { level===3 && <h3>我是本科学历</h3> }
        { level===4 && <h3>我是硕士学历</h3> }
        <hr/>
        {/* 多个元素的条件渲染，可以封装自定义方法返回指定的jsx对象来实现渲染 */}
        { this.renderLevel() }
        <button onClick={()=>this.toggle3()}>切换学历</button>

        <hr/>

        {/* 动态class样式 */}
        {/* 同一个JSX元素上只能使用一个className，如果使用多个，后面的className会覆盖前面的 */}
        <h3 className={`box c${color}`}>我是一行可以变色的文字</h3>
        <button onClick={()=>this.toggleColor()}>切换颜色</button>
        <hr/>

        {/* 动态class样式，实现类似vue中v-show的功能 */}
        {/* <h3 className={disClass}>使用display来实现显示与隐藏的效果</h3> */}
        <h3 className={show?'':'hidden'}>使用display来实现显示与隐藏的效果</h3>
        <button onClick={()=>this.toggle4()}>显示/隐藏</button>
        <hr/>

        {/* React中style的写法 */}
        {/* 在React中不能这样写： <div style='color:red;fontSize:30px;'> */}
        {/* 在React中应该这样写： <div style={{color:'red',fontSize:'30px'}}> */}
        {/* 这个 {{}} 不是vue中的文本插值 */}
        <h3 style={{color:'red',fontSize:'30px'}}>测试style的写法 1</h3>
        <h3 style={({color:'red',fontSize:'30px'})}>测试style的写法 2</h3>
        <h3 style={sty}>测试style的写法 3</h3>

        {/* 动态style */}
        <div
          style={asyncSty}
          onClick={()=>this.updateAsyncSty()}
        >
          我的字体是可以变大的，你点我试一下
        </div>

        {/* 动态style，模拟vue中v-show的功能 */}
        <h3
          style={{
            color:'orange',
            border: '1px solid red',
            padding: '15px',
            display: show2?'block':'none'
          }}
        >
          使用display来实现显示与隐藏的效果
        </h3>
        <button onClick={()=>this.toggle5()}>显示/隐藏</button>

        <br/>
        <br/>

      </div>
    )
  }
}
