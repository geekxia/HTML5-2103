import React, { useState } from 'react'

// 一、父子组件通信
// 父传子，使用props向子组件传递任何数据类型（包括jsx元素）。
// 子传父，使用on* 自定义事件向父组件传递任何数据。（自定义事件要满足onEventName这个格式）
const Child = props => {
  const send = ()=>{
    console.log('child')
    // 调用父组件传递过来的on*的自定义事件
    const event = {
      target: {
        value: Math.random()
      }
    }
    props.onAbc(event)
  }
  return (
    <div style={styles.child}>
      <div>{props.msg}</div>
      <button onClick={send}>向父组件传递消息</button>
    </div>
  )
}

// 二、状态提升（是一种React组件通信的思想）
const PanelA = props => {
  let [money, setMoney] = useState(0)
  const send = ()=> {
    props.onMessage(money)
    setMoney(0)
  }
  return (
    <div style={styles.a}>
      <div>我是panel-a组件：哥哥</div>
      <input
        type="number"
        value={money}
        onChange={_=>setMoney(_.target.value)}
      />
      <button onClick={send}>发送</button>
    </div>
  )
}

const PanelB = props => {
  return (
    <div style={styles.b}>
      <div>我是panel-b组件：弟弟</div>
      <div>接收A的消息：{props.message}</div>
    </div>
  )
}

// 需求描述：PanelA组件中输入信息，要在PanelB组件中进行显示。
// 解决方案：在PanelA点击“发送”时，把输入框中数据传递给一个父组件。这个父组件收到这个消息后，再使用props把这个消息数据传递PanelB组件。PanelB收到这个消息数据将其展示出来。
// 通过以上分析，有一个变量由PanelA来决定，然后给到PanelB来使用。根据“React状态提升”的思想，这个需要穿越的变量，应该定义PanelA和PanelB它们最近的共同的父组件中。

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'helle child',
      message: 0   // 用于接收PanelA发来的消息，同时用于PanelB的显示。
    }
  }
  abcHandle(e) {
    console.log('parent', e.target.value)
  }
  render() {
    let { message } = this.state
    return (
      <div>
        <h1>学习状态提升</h1>
        <hr/>
        <Child
          msg={this.state.msg}
          onAbc={_=>this.abcHandle(_)}
        />
        <hr/>

        {/* 学习状态提升这个React思想 */}
        <PanelA onMessage={_=>this.setState({message:_})} />
        <hr/>
        <PanelB message={message} />
      </div>
    )
  }
}

const styles = {
  child: {
    border: '1px solid #ccc',
    padding: '5px'
  },
  a: {
    border: '1px solid blue',
    padding: '25px'
  },
  b: {
    border: '1px solid green',
    padding: '25px'
  }
}
