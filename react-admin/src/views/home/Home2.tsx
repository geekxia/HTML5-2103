import * as React from 'react'

import { useAppDispatch, useAppSelector } from '@/hooks'

import { addCount, subCount } from '@/store/actions/study'

export default ()=> {
  const count = useAppSelector(store=>store.study.count)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>学习 TS + Hooks 的写法</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(subCount(1))}>自减</button>
      <button onClick={()=>dispatch(addCount(2))}>自增</button>
    </div>
  )
}
