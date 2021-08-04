import { h } from 'vue'

// 函数式组件
const FunComponent = () => {
	// 相当于是 React中的 createElement('div', {}, [])
  // return h('h1', {}, '我是一个函数式组件')

  return (
    <>
      <div>Hello FC 01</div>
      <div>Hello FC 02</div>
    </>
  )
}

FunComponent.props = ['level']

export default FunComponent
