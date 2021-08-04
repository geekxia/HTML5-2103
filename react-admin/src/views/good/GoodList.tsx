import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { Table, Row, Col, Button, Input } from "antd"
import TableGood from './components/TableGood'
import SelectCateGood from './components/SelectCateGood'
import './style.scss'

// 业务
import { getGoodList, cleanCache } from '@/store/actions'
import { Good } from '@/types'

const data = [
  {
    id: 1,
    name: '小米手机',
    img: '/img/1.png',
    desc: '',
    hot: false,
    price: 23.00,
    cate: 'office'
  }
]

export default props =>{

  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const list: Array<Good> = useAppSelector(store=>store.good.list)
  const total: number = useAppSelector(store=>store.good.total)

  useEffect(()=>{
    dispatch(getGoodList({name,page,size:2}))
    return undefined
  }, [name, page])

  useEffect(()=>{
    dispatch(cleanCache())
  }, [])

  return (
    <div className='qf-userlist'>

      <div className='qf-filter'>
        <Row align='middle'>
          <Col span={2}>
            <span>搜索:</span>
          </Col>
          <Col span={4}>
            <Input
              size='small'
              placeholder="名称搜索"
              value={name}
              onChange={e=>setName(e.target.value)}
            />
          </Col>
          <Col span={2}>
            <span>品类:</span>
          </Col>
          <Col span={4}>
            <SelectCateGood />
          </Col>
          <Col span={12}>
            <Button
              size='small'
              onClick={()=>props.history.push('/good/add')}
              type="primary">
              添加
            </Button>
          </Col>
        </Row>
      </div>

      <TableGood
        total={total}
        data={list}
        rows={[]}
        onChange={p=>setPage(p)}
      />
      <div></div>
    </div>
  )
}
