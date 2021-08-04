import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import routes from '@/views'
import logo from '@/assets/logo.png'
import { MenuUnfoldOutlined,MenuFoldOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/hooks'

const { SubMenu } = Menu

export default props=>{
  const [openKeys, setOpenKeys] = useState([])

  const u = useAppSelector(store=>store.user.userinfo)
  // userinfo.role = 'admin / editor / visitor'

  const renderNav = ()=> {
    return routes.map(ele=>(
      ele.permisson.includes(u.role)
      ? <SubMenu
          key={ele.id}
          title={ele.title}
          icon={ele.icon}
        >
          {
            ele.children.map(ele=>(
              ele.permisson.includes(u.role)
              ? <Menu.Item key={ele.id}>
                  <Link to={ele.path}>{ele.text}</Link>
                </Menu.Item>
              : null
            ))
          }
        </SubMenu>
      : null
    ))
  }

  return (
    <div className='qf-aside'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <Menu
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        onOpenChange={arr=>setOpenKeys([arr[arr.length-1]])}
      >
        {
          u.role && renderNav()
        }
      </Menu>

      {/*<Toggle value={props.value} onChange={props.onChange} />*/}
      {/* 当组件嵌套层级较深，父级向后代组件传递props，不需要手动接收和处理，直接使用“属性继承”更简单*/}
      <Toggle {...props} />
    </div>
  )
}

const Toggle = props => (
  <div className='toggle' onClick={props.onChange}>
  {
    props.value
    ? <MenuUnfoldOutlined />
    : <MenuFoldOutlined />
  }
  </div>
)
