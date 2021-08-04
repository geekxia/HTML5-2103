import React from 'react'

// props

// 特别提醒：在react中，props的运用场景远远超过了state。
// 什么是props？props是父子组件之间通信纽带，你可以理解props相当于人类的基因。
// props可以向子组件传递JS所有数据类型：字符串、数字、数组、对象、布尔值、undefined、null。
// props还可以向子组件传递“自定义事件”，但是这些自定义事件要以'on'开头，示例'onRun'。
// props还可以向子组件传递jsx元素（React元素）。
// props还可以实现类似Vue中的插槽的特性。具体的做法是：在使用自定义组件时，直接在其中嵌套JSX元素，在自定义组件中使用props.children来接收。（这也是React组件化的基础）
// props还是React路由、React状态管理的基础，也就是说以后路由信息、状态管理数据都是通过props进入到组件内部。

// 特别注意：props不能修改，只能参与运算。


// 函数式组件啥都没有，只有一个非常非常重要的。
// props里面拥有一切来自父组件（祖宗组件）的信息。
const Child = props => {
  console.log('child props', props)

  let {
    title,  // JS数据类型
    onRun,  // 自定义事件
    header, // jsx元素（react元素）
    footer, // jsx元素（react元素）
    children  // 它代表的是自定义组件被使用时所嵌套的jsx元素
  } = props

  return (
    <div style={styles.child}>
      { header }
      <h2>{title || '我是孩子'}</h2>
      {
        onRun && <button onClick={()=>onRun()}>开始奔跑</button>
      }
      { children }
      { footer }
    </div>
  )
}

export default class TestProps extends React.Component {
  run() {
    console.log('running')
  }
  render() {
    return (
      <div style={styles.parent}>
        <h1>我是TestProps父组件</h1>

        <Child
          title='我是老大'
          list={[]}
          onRun={()=>this.run()}
          header={<header>HEADER</header>}
        />

        <Child
          title='我是老二'
          footer={<footer>FOOTER</footer>}
        >
          <div>我就是老二的BODY</div>
        </Child>

        {/* 在自定义组件中嵌套的jsx元素，在子组件中使用props.children来接收 */}
        <Child>
          <span>用户名：</span>
          <input type="text" />
          <br/>
          <span>密码：</span>
          <input type="text" />
        </Child>
      </div>
    )
  }
}

const styles = {
  parent: {
    padding: '20px',
    border: '1px solid blue'
  },
  child: {
    padding: '10px',
    border: '1px solid orange'
  }
}
