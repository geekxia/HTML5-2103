
import Layout from '@/layout'

const goodRouter = {
  path: '/good',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Good',
  meta: {
    title: 'Good',
    // 用element-ui中的icon，或者使用这个作者编写的svg icon
    icon: 'money',
    // 希望当前“商品管理模块”只被editor用户方法，不允许其它角色访问
    roles: ['editor']
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/good/good-list'),
      name: 'GoodList',
      meta: { title: 'Good List', roles: ['editor'] }
    },
    {
      path: 'add',
      component: () => import('@/views/good/good-add'),
      name: 'GoodAdd',
      meta: { title: 'Good Add', roles: ['editor'] }
    }
  ]
}
export default goodRouter
