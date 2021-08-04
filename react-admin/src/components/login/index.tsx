import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd'

import { useAppDispatch } from "@/hooks"
import { login } from "@/store/actions"

import './style.scss'

const layout = {
  wrapperCol : { offset: 4, span: 16 }
}

export default props => {
  const dispatch = useAppDispatch()

  // 点击“登录”按钮
  const onFinish = (values: any) => {
    // 登录
    console.log('登录入参', values)
    // 触发调用接口
    dispatch(login(values, ()=>{
      props.history.replace('/')
    }))
  }

  return (
    <div className='qf-login'>
      <div className='wrap'>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '用户名是必填!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '密码也是必填!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" {...layout}>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item {...layout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  )
}
