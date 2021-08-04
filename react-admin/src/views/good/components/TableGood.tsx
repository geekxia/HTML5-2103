import { Table, Space } from 'antd'
import { useHistory } from 'react-router-dom'
import './style.scss'
import { GoodCate } from '@/types'



export default (props: {
  total: number,
  data: Array<any>,
  rows: Array<number>,
  rowsChange?: ()=>void,
  onChange?: (p:number, s?:number)=>void
}) => {

  let {
    total,
    data,
    rows,  // 被选中的行，是数组
    rowsChange,  // 当选中行发生变化时，向父组件通信
    onChange
  } = props

  const history = useHistory()

  const rowSelection = {
    selectedRowKeys: rows,
    onChange: rowsChange,
    selections: false
  }

  const columns = [
    {
      title: '商品',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: 120,
      render: (text, row)=>(
        <div className='img'>
          <img src={'http://localhost:8888'+row.img} alt=""/>
          <div>{row.name}</div>
        </div>
      )
    },
    {
      title: '价格',
      dataIndex: 'price',
      align: 'center',
      align: 'center',
      key: 'price',
    },
    {
      title: '描述',
      dataIndex: 'desc',
      align: 'center',
      key: 'desc',
    },
    {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
      key: 'status',
      render: (text)=>(<div>{text?'上架':'已下架'}</div>)
    },
    {
      title: '是否热销',
      dataIndex: 'hot',
      align: 'center',
      key: 'hot',
      render: (text)=>(<div>{text?'是':'否'}</div>)
    },
    {
      title: '品类',
      dataIndex: 'cate',
      align: 'center',
      key: 'cate',
      render: text=>(<div>{GoodCate[text]}</div>)
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, row) => (
        <Space size="middle">
          <a onClick={()=>history.push('/good/edit/'+row._id)}>编辑</a>
        </Space>
      )
    }
  ]

  return (
    <div className='qf-table'>
      <Table
        rowKey={'_id'}
        columns={columns}
        dataSource={data}
        pagination={{
          total,
          pageSize: 2,
          onChange,
        }}
        showSizeChanger
        showTotal={t=>(<div>总共有{t}条数据</div>)}
        pageSizeOptions={['2','5','10','20']}
        rowSelection={rowSelection}
      />
    </div>
  )
}
