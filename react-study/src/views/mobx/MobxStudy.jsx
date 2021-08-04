import React from 'react'
import { observer, inject } from 'mobx-react'

// observer 把当前组件变成观察者，当store中数据发生变化时，当前组件自动更新。
// inject 使用上下文中的store数据。

// @inject('store')
// @observer
// class StudyMobx extends React.Component {}

export default inject('store')(observer(
  props=>{
    let { study } = props.store

    console.log('props', props)
    return (
      <div>
        <h1>学习Mobx</h1>
        <hr/>
        <h1>{study.msg}</h1>
        <button
          onClick={()=>study.changeMsg(Math.random())}
        >
          修改mobx中的msg
        </button>
      </div>
    )
  }
))
