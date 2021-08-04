import React from 'react'

import { msg, Good } from './study'

const GoodTableRow = (props: Good) => (
  <div>一行商品信息</div>
)

export default ()=>{
  const g: Good = {
    name: '小米手机',
    desc: '好手机',
    src: 'http://weioewo.png',
    hot: false,
    cate: 'office',
    cate_zh: '办公用品'
    // price: 200,
    // list: ['M', 'S', 'XS']
  }
  return (
    <div>
      <h1>学习TypeScript</h1>
      {
        [
          <GoodTableRow {...g}  key='1' />,
          <GoodTableRow {...g} key='2' />,
          <GoodTableRow {...g} key='3' />
        ]
      }
    </div>
  )
}
