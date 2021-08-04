import React from 'react'
import {
  withRouter,
  useHistory
} from 'react-router-dom'

// 在react-router-dom有一个历史遗留下来的缺陷
// 只有那些被<Route>直接定义过的React组件，其内部props上才有“路由相关的API”
// 那些没有被<Route>直接控制过的React组件，其内部props上没有“路由相关的API”

// 如何解决上述这个问题？
// 1、使用props属性继承传递路由API，但是当组件嵌套层级过深时，很难控制，尽量少用。
  // <OrderTableList {...props} />
// 2、使用 withRouter 这个高阶组件来注入路由相关API。
  // const OrderTableList = withRouter(props=>())
// 3、使用 useHistory 这个路由Hooks API，来使用路由相关API。
  // const history = useHistory()
  // 在history这个API上就有了路由相关的API，但是当前组件的props上依旧没有路由API。

const OrderTableList = props => {
  const h = useHistory()
  return (
    <div>
    {
      [
        { id: 1, name: '订单1', order_num: 'QF9020230' },
        { id: 2, name: '订单1', order_num: 'QF9020230' },
        { id: 3, name: '订单1', order_num: 'QF9020230' }
      ].map(ele=>(
        <div
          key={ele.id}
          onClick={()=>h.push('/order/detail/'+ele.id)}
        >
          <span>{ele.id}</span>
          --
          <span>{ele.name}</span>
          --
          <span>{ele.order_num}</span>
        </div>
      ))
    }
    </div>
  )
}

export default props=> {
  return (
    <div>
      <h1>订单列表</h1>
      {/* <OrderTableList {...props} /> */}
      <OrderTableList />
    </div>
  )
}
