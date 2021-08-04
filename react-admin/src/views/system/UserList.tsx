import { Table, Space, Row, Col, Button } from "antd"
import './style.scss'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, row) => (
      <Space size="middle">
        <a>禁用</a>
        <a>启用</a>
      </Space>
    )
  }
]

const data = [
  { id: 1, username:'张三', role: 'admin', status: 1 },
  { id: 2, username:'张三', role: 'admin', status: 1 },
  { id: 3, username:'张三', role: 'admin', status: 1 },
  { id: 4, username:'张三', role: 'admin', status: 1 },
]

export default ()=>{

  return (
    <div className='qf-userlist'>
      <div className='qf-filter'>
        <Row>
          <Col span={12}>
            <Button size='small' type="primary">添加用户</Button>
          </Col>
        </Row>
      </div>
      <div className='qf-table'>
        <Table
          rowKey={'id'}
          columns={columns}
          dataSource={data}
          pagination={{
            total: 60,
            pageSize: 2
          }}
          showSizeChanger
          showTotal={t=>(<div>总共有{t}条数据</div>)}
          pageSizeOptions={['2','5','10','20']}
        />
      </div>
      <div></div>
    </div>
  )
}
