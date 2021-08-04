import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext
} from 'react'

import {
  useTitle,
  useTheme
} from '@/hooks'

// 无状态组件（函数式组件）
// 特点：没有this，没有生命周期，没有上下文，没有ref。。。
// 相对类组件，性能更好、速度更快。

// Hooks 从16.8以后才有的。这是React划时代的版本。

// useState 用于定义响应式数据
// useEffect 使用副作用：定时器、调接口、DOM操作、Ref操作。好处是可以实现业务逻辑的分离。
// useMemo 用于缓存那些需要计算的变量，类似vue中计算属性的缓存功能。
// useCallback 用于返回一个函数，这个函数在依赖变量没有变化时不会重新编译。
// useContext 让我们在函数式组件中使用上下文。
// useRef 让我们使用ref的属性。

function TestHooks(props) {

  // 定义一个响应式变量，
  // count是响应式变量，当响应式变量被set*修改时，会触发当前函数式组件重新运行返回新jsx，进一步执行diff运算。
  // setCount专门负责修改count这个响应式变量的。
  // setCount也要像使用类组件中的this.setState()一样，一样考虑新值与旧值是否有关。
  let [count, setCount] = useState(0)
  let [num, setNum] = useState(100)

  // h1Ref是给JSX的ref属性使用的
  // h1Ref.current 指向是DOM实例
  const h1Ref = useRef(null)

  // 使用上下文
  const theme = useTheme()
  useTitle('他好')

  // useEffect 标准语法： useEffect(()=>{return ()=>{}}, [])
  // 特点1：useEffect是专门用于处理副作用的。
  // 特点2：useEffect，原则上一个useEffect只做一件事儿。
  // 特点3：在同一个函数式组件中，可以同时多个useEffect
  useEffect(()=>{
    console.log('-----')
    // 开启定时器
    var timer = setInterval(()=>{
      setCount(count+1)
      console.log('count', count)
      console.log('+++++')
    }, 1000)
    return ()=>{
      // 关闭定时器
      clearInterval(timer)
    }
  }, [count])

  // 语法：var memoizedFn = useCallback(fn, [])
  // 语法：var memoizedVal = useMemo(fn, [])
  // 有且仅有num变化时，这个计算都会执行运行
  const isFlag = useMemo(()=>(num % 2 === 0), [num])
  // 这两个事件处理器，只被当前环境编译一次。
  const add = useCallback(()=>setNum(num+1), [])
  const sub = useCallback(()=>setNum(num-1), [])

  const changeColor = useCallback(()=> {
    // do something
    // 使用ref来修改h1的颜色
    h1Ref.current.style.color = 'red'
  }, [])

  return (
    <div
      style={{
        color: theme.color,
        background: theme.background
      }}
    >
      <h1>使用Hooks API</h1>
      <hr/>
      <h1>{count}</h1>
      <hr/>

      <h1>{num}</h1>
      <button onClick={add}>加</button>
      <button onClick={sub}>减</button>
      <span>当前num是 {isFlag ? "偶数" : "奇数"}</span>
      <hr/>

      <h1 ref={h1Ref}>这是一行文字</h1>
      <button onClick={changeColor}>使用ref修改颜色</button>

    </div>
  )
}

export default TestHooks
