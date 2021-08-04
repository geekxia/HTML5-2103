import React from 'react'

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

// <Switch>
// 作用：加快路由匹配时间。
// 注意：在渲染Route时，一定要保证Route直接父组件是Switch

// <Redirect>
// 作用：用于匹配那些找不到路由

// <Route>
// 作用：用于定义path和component的一一对应的映射关系（路由匹配规则)
// exact=false，/jsx和/jsx/abc都可以匹配到;
// exact=true，/jsx和/jsx/abc不可以同时匹配到。

import routes from '@/views'

export default ()=>{

  const renderRoutes = ()=>{
    let res = []

    // 定义一个递归方法
    function deep(arr) {
      arr.map(ele=>{
        res.push(
          <Route
            key={ele.id}
            path={ele.path}
            component={ele.component}
            exact
          />
        )
        if(ele.children) deep(ele.children)
      })
    }

    // 使用上面那个定义的递归方法
    routes.map(ele=>{
      if(ele.children) deep(ele.children)
    })
    return res
  }
  return (
    <div className='qf-main'>
      <div>
        <Switch>
          { renderRoutes() }
          <Redirect from='/*' to='/jsx' />
        </Switch>
      </div>

    </div>
  )
}
