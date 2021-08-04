// 自定义Hooks的基础思想
// 使用useState、useEffect、useContext、第三方的Hooks，把具体业务逻辑整合进来，实现企业的定制化需求。
// 约定：自定义Hooks都要以 use* 开头。
import { useEffect, useContext } from 'react'
import ThemeContext from '@/utils/theme'

function useTitle(title) {
  useEffect(function(){
    // 开启副作用
    // 相当于componentDidMount()
    document.title = title
    return function(){
      // 关闭副作用
      // 相当于componentWillUnmount()
    }
  }, [])
  // 这个数组参数，依赖关联（当前这个副作用与哪些响应式变量有关）
  // 相当于componentDidUpdate()
}

function useTheme() {
  return useContext(ThemeContext)
}


export {
  useTitle,
  useTheme
}
