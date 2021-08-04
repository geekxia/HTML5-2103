import React from 'react'
import loadable from "@loadable/component"

import {
  AppstoreOutlined,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  // MailOutlined,
} from '@ant-design/icons'

const Home1 = loadable(()=>import('@/views/home/Home1'))
const Home2 = loadable(()=>import('@/views/home/Home2'))

const UserList = loadable(()=>import('@/views/system/UserList'))

const GoodList = loadable(()=>import('@/views/good/GoodList'))
const GoodAddOrEdit = loadable(()=>import('@/views/good/GoodAddOrEdit'))


export default [
  {
    id: 110,
    title: '环境搭建',
    icon: <ContainerOutlined />,
    permisson: ['admin', 'visitor', 'editor'],
    children: [
      { id: 1, path: '/', component: Home1, text: '面板1', permisson: ['admin', 'editor'] },
      { id: 2, path: '/home2', component: Home2, text: '面板2', permisson: ['visitor'] }
    ]
  },
  {
    id: 111,
    title: '系统管理',
    icon: <PieChartOutlined />,
    permisson: ['admin'],
    children: [
      { id: 3, path: '/user/list', component: UserList, text: '用户管理', permisson: ['admin'] }
    ]
  },
  {
    id: 112,
    title: '商品管理',
    icon: <PieChartOutlined />,
    permisson: ['editor'],
    children: [
      {
        id: 6,
        path: '/good/list',
        component: GoodList,
        text: '商品管理',
        permisson: ['editor'],
        children: [
          { id: 7, path: '/good/add', component: GoodAddOrEdit, text: '商品新增', permisson: ['editor'] },
          { id: 8, path: '/good/edit/:id', component: GoodAddOrEdit, text: '商品编辑', permisson: ['editor'] }
        ]
      }
    ]
  }
]
