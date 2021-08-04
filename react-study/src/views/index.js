// react-router-dom
// 1、使用 react-router-dom 这个Web库。
// 2、基于路由的代码分割（相当于是vue中的路由懒加载）
// 3、HashRouter vs. BrowserRouter、Route、Link、Switch、Redirect。。。
// 4、编程式路由导航、路由传参、动态路由（从列表到详情）
// 5、withRouter 这高阶组件，作用帮助那些没有路由API的组件使用路由API。
// 6、路由 hooks：
  // useHistory拿到路由跳转的API
  // useParams拿到动态路由的传参
  // useLocation拿到路由结构的相关信息

import React from 'react'

// cnpm i @babel/plugin-syntax-dynamic-import -D
// 在babel.config.js添加插件配置
// cnpm i @loadable/component -S
import loadable from "@loadable/component"

// React组件（React类） vs. React元素（jsx元素）
// import TestJsx from '@/views/study/TestJsx'
const TestJsx = loadable(()=>import('@/views/study/TestJsx'))
const TestEvent = loadable(()=>import('@/views/study/TestEvent'))

const TestComponent = loadable(()=>import('@/views/study/TestComponent'))
const TestProps = loadable(()=>import('@/views/study/TestProps'))
const TestState = loadable(()=>import('@/views/study/TestState'))
const TestCondition = loadable(()=>import('@/views/study/TestCondition'))
const TestList = loadable(()=>import('@/views/study/TestList'))
const TestForm = loadable(()=>import('@/views/study/TestForm'))
const TestStateLift = loadable(()=>import('@/views/study/TestStateLift'))
const TestLife = loadable(()=>import('@/views/study/TestLife'))
const TestCombine = loadable(()=>import('@/views/study/TestCombine'))
const TestContext = loadable(()=>import('@/views/study/TestContext'))
const TestHoc = loadable(()=>import('@/views/study/TestHoc'))
const TestHooks = loadable(()=>import('@/views/study/TestHooks'))


// 学习路由
const OrderList = loadable(()=>import('@/views/order/OrderList'))
const OrderDetail = loadable(()=>import('@/views/order/OrderDetail'))

// 学习Mobx
const MobxStudy = loadable(()=>import('@/views/mobx/MobxStudy'))
const MobxCnode = loadable(()=>import('@/views/mobx/MobxCnode'))

// 学习TypeScript
const GoodList = loadable(()=>import('@/views/good/GoodList'))

// 可视化
const TestMap = loadable(()=>import('@/views/canvas/TestMap'))





import {
  AppstoreOutlined,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  // MailOutlined,
} from '@ant-design/icons'

export default [
  {
    id: 110,
    title: '非常重要',
    icon: <ContainerOutlined />,
    children: [
      { id: 1, path: '/jsx', component: TestJsx, text: '学习JSX' },
      { id: 10, path: '/state', component: TestState, text: '学习State' },
      { id: 9, path: '/props', component: TestProps, text: '学习Props' },
      { id: 7, path: '/comp', component: TestComponent, text: '两种组件' },
      { id: 19, path: '/hooks', component: TestHooks, text: '学习Hooks' }
    ]
  },
  {
    id: 111,
    title: '14k 走起',
    icon: <AppstoreOutlined />,
    children: [
      { id: 2, path: '/event', component: TestEvent, text: '事件绑定' },
      { id: 11, path: '/cond', component: TestCondition, text: '条件渲染' },
      { id: 12, path: '/list', component: TestList, text: '列表渲染' },
      { id: 13, path: '/form', component: TestForm, text: '表单绑定' },
      { id: 15, path: '/life', component: TestLife, text: '生命周期' },
      { id: 14, path: '/lift', component: TestStateLift, text: '状态提升' }
    ]
  },
  {
    id: 112,
    title: '18K 走起',
    icon: <PieChartOutlined />,
    children: [
      { id: 16, path: '/comb', component: TestCombine, text: '组合模式' },
      { id: 17, path: '/ctx', component: TestContext, text: '上下文' },
      { id: 18, path: '/hoc', component: TestHoc, text: '高阶组件' }
    ]
  },
  {
    id: 113,
    title: '订单管理',
    icon: <DesktopOutlined />,
    children: [
      {
        id: 1307,
        path: '/order/list',
        component: OrderList,
        text: '订单列表',
        children: [
          // 这种带 : 的path语法，表示“动态路由”，一般用于列表到详情页
          // 在详情页，使用 props.match.params来取出动态参数，或者使用 useParams来取出动态参数
          { id: 1309, path: '/order/detail/:id', component: OrderDetail, text: '订单详情' }
        ]
      },
      { id: 1989, path: '/mobx', component: MobxStudy, text: '状态管理' },
      { id: 1990, path: '/cnode', component: MobxCnode, text: '文章列表' },
      { id: 1991, path: '/good/list', component: GoodList, text: '商品列表' },
      { id: 1992, path: '/map', component: TestMap, text: '使用地图' }
    ]
  }
]
