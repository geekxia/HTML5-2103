import { Layout, Login } from '@/components'

import { Route, useHistory, Redirect } from 'react-router-dom'
import { useAppSelector } from '@/hooks'

export default ()=> {
  const h = useHistory()
  const isLogin = useAppSelector(store=>store.user.token)
  console.log('isLoign', isLogin)
  // if(!isLoign) window.location.href='#/login'
  if(!isLogin) h.replace('/login')
  return (
    <>
      {
        isLogin
        ? <Route path='/' component={Layout} />
        : <Route path='/login' component={Login} />
      }
    </>
  )
  // return (
  //   <div>
  //       <Route path='/' render={()=>isLogin?<Layout /> : <Redirect to='/login' />} />
  //       <Route path='/login' render={()=>isLogin ? <Redirect to='/' /> : <Login />} />
  //   </div>
  // )
}
