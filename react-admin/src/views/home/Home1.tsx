// 在Home页面中使用redux中store
// 1、使用 react-redux提供的高阶组件 connect()
// 2、使用 react-redux提供的高阶组件 hooks api

import {
  useSelector,
  useDispatch,
  // connect
} from 'react-redux'

import { useEffect} from 'react'
import { fetchCnode } from '../../api'

import {
  addCount,
  subCount,
  getList
} from '../../store/actions/study'

// 一、hooks的方式，使用store
export default () => {
  const count = useSelector(store=>store.study.count)
  const dispatch = useDispatch() // 是视图和store打交道的唯一方式

  const list = useSelector(store=>store.study.list)

  useEffect(()=>{
    // dispatch(getList({}))
    return undefined
  }, [])

  return (
    <div>
      <h1>我是首页</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(addCount(2))}>自增</button>
      <button onClick={()=>dispatch(subCount(1))}>自减</button>
      <hr/>
      {
        list.map(ele=>(
          <div key={ele.id}>{ele.title}</div>
        ))
      }
    </div>
  )
}

// 二、connect(fn1,fn2)(UI)，使用store
// export default connect(
//   store=>({
//     count: store.study.count
//   }),
//   dispatch=>({
//     add: payload=>{
//       // do something
//       dispatch({ type: 'add', payload })
//     },
//     sub: payload=>{
//       // do something
//       dispatch({ type: 'sub', payload })
//     }
//   })
// )(props => {
//   console.log('Home Props', props)
//   return (
//     <div>
//       <h1>{props.count}</h1>
//       <button onClick={()=>props.add(1)}>自增</button>
//       <button onClick={()=>props.sub(2)}>自减</button>
//     </div>
//   )
// })



// const Home = props => {
//   console.log('Home Props', props)
//   return (
//     <div>
//       <h1>{props.study.count}</h1>
//       <button onClick={props.add}>自增</button>
//       <button onClick={props.sub}>自减</button>
//     </div>
//   )
// }
// function mapStateToProps(store) {
//   return {
//     count: store.study.count
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     add: ()=>{
//       // do something
//       dispatch({ type: 'add', payload: 10 })
//     },
//     sub: ()=>{
//       // do something
//       dispatch({ type: 'sub', payload: 5 })
//     }
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Home)

// ==========================================================

// import store from '../store/index.js'
// function connect(fn1, fn2) {
//
//   var o1 = fn1(store)
//   var o2 = fn2(store)
//   return function test(WrapUI){
//     return props =>(
//       <WrapUI {...props} {...o1} {...o2}></WrapUI>
//     )
//   }
// }
