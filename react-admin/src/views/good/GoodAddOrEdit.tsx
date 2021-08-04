import {
  Form,
  Input,
  InputNumber,
  Switch,
  Upload,
  Button
} from 'antd'

import { useEffect } from 'react'

import SelectCateGood from './components/SelectCateGood'
import ImgUpload from './components/ImgUpload'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getGoodUpdate, getGoodInfo } from '@/store/actions'
import './style.scss'
import { useParams } from 'react-router-dom'

const { TextArea } = Input

const formItemLayout = {
  labelCol: {
    sm: { span: 3 },
  },
  wrapperCol: {
    sm: { span: 12 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 3,
      offset: 3,
    },
  },
};

export default props =>{

  const [form] = Form.useForm()

  const dispatch = useAppDispatch()
  const count = useAppSelector(store=>store.good.count)
  const info = useAppSelector(store=>store.good.info)
  const id = useParams().id

  // 提交
  const onFinish = values => {
    console.log('values', values)
    // dispatch({type:'add', payload: values})
    if(id) values.id = id
    dispatch(getGoodUpdate(values))
  }
  useEffect(()=>{
    if(count!==0) props.history.goBack()
  }, [count])

  useEffect(()=>{
    if(id) {
      // 根据id调商品详情
      dispatch(getGoodInfo({id}))
      // 走redux流程，当数据回来时，填充默认表单
    }
  }, [])

  useEffect(()=>{
    console.log('-----', info)
    if(id && info._id) {
      form.setFieldsValue(info)
    }
  }, [info])


  return (
    <div className='qf-good-info'>
      <h1>{id ? '商品编辑' : '商品新增'}</h1>

      <Form
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="商品名称"
          rules={[
            { required: true, message: '请输入商品名称' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="desc"
          label="描述"
          rules={[]}
        >
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="price"
          label="商品价格"
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          name="cate"
          label="商品品类"
        >
          <SelectCateGood />
        </Form.Item>

        <Form.Item
          name="hot"
          label="是否热销"
          valuePropName='checked'
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="img"
          label="商品图片"
        >
          <ImgUpload />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            { id ? '立即修改' : '立即添加' }
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
