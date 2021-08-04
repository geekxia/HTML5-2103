import { Select } from 'antd'
const { Option } = Select

export default props => {
  let { value, onChange } = props
  return (
    <div className='qf-cate-select'>
      <Select
        size='small'
        style={{width:100}}
        value={value}
        onChange={val=>onChange(val)}
      >
        <Option value="office">办公用品</Option>
        <Option value="car">汽车生活</Option>
        <Option value="chothe">男装女装</Option>
      </Select>
    </div>
  )
}
