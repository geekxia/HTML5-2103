import React from 'react'
import { useParams } from 'react-router-dom'

// 这两个组件没有被Route直接定义，所以props上面也没有路由API
const OrderInfo = () => {
  const params = useParams()
  return (
    <div>订单的基本信息： {params.id}</div>
  )
}
const OrderGoodList = () => <div>商品的详细列表</div>

// 这个组件它的props上有路由API吗？有！！！
export default props => {
  console.log('订单详情',props)
  return (
    <div>
      <h1>订单详情</h1>
      <OrderInfo />
      <OrderGoodList />
    </div>
  )
}
