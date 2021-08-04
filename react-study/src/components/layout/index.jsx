import React, { useState } from 'react'

import QfAside from './Aside'
import QfMain from './Main'
import './style.scss'
import { Layout } from 'antd'
const { Header, Sider, Content } = Layout

// Layout -> Sider -> QfAside -> Toggle/Memu
// Layout -> QfAside -> Toggle


export default ()=>{
  const [collapsed, setCollapsed] = useState(false)
  const change = (coll, type) => {
    console.log('coll', coll)
    console.log('type', type)
  }
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
          <Header>
          </Header>

          <Content>
            <QfMain />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
