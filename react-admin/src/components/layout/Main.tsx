import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import routes from '@/views'
import { useAppSelector } from '@/hooks'

export default ()=>{

  const u = useAppSelector(store=>store.user.userinfo)

  const renderRoutes = ()=>{
    let res = []
    function deep(arr) {
      arr.map(ele=>{
        if(ele.permisson.includes(u.role)) {
          res.push(
            <Route
              key={ele.id}
              path={ele.path}
              component={ele.component}
              exact
            />
          )
        }
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
          { u.role && renderRoutes() }
          <Redirect from='/*' to='/' />
        </Switch>
      </div>

    </div>
  )
}
