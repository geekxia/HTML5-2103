import React, { useState, useEffect } from 'react'

import { Layout } from 'antd'
import { useAppDispatch } from '@/hooks'
import { getinfo } from '@/store/actions'
import QfAside from './Aside'
import QfMain from './Main'
import './style.scss'
const { Header, Sider, Content } = Layout

export default ()=>{
  const dispatch = useAppDispatch()

  const [collapsed, setCollapsed] = useState(false)

  useEffect(()=>{
    dispatch(getinfo())
    return undefined
  }, [])


  return (
    <div className='qf-layout'>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <QfAside value={collapsed} onChange={()=>setCollapsed(!collapsed)} />
        </Sider>

        <Layout>
          <Header />
          <Content>
            <QfMain />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
