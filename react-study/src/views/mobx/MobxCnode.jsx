import React, { useEffect, useState } from 'react'
import { observer, inject } from 'mobx-react'

const cates = [
  { id: 1, tab: '', label: '全部' },
  { id: 2, tab: 'job', label: '招聘' },
  { id: 3, tab: 'good', label: '精华' },
  { id: 4, tab: 'share', label: '分享' },
  { id: 5, tab: 'ask', label: '问答' }
]

// 子组件
const CateFilter = props=>(
  <div>
  {
    cates.map(ele=>(
      <span
        className={props.value===ele.tab ? "on": ""}
        onClick={(e)=>props.onChange(ele.tab)}
        key={ele.id}>
        {ele.label}
      </span>
    ))
  }
  </div>
)

// 页面
export default inject('store')(observer(
  props=>{

    let { cnode } = props.store
    const [filter, setFilter] = useState({
      tab:'',
      page:1,
      limit:5
    })

    useEffect(()=>{
      // 触发mobx中的action调接口
      cnode.getList(filter)
      return undefined
    }, [filter])

    const changeFilter = (k,v) => {
      if(k==='page') v=filter.page+v
      filter[k] = v
      // 触发filter变化，进一步render()返回新的jsx
      setFilter(JSON.parse(JSON.stringify(filter)))
    }

    return (
      <div>
        <h1>CnodeList</h1>
        <hr/>
        <CateFilter
          value={filter.tab}
          onChange={e=>changeFilter('tab', e)}
        />
        {
          cnode.list.map(ele=>(
            <div key={ele.id}>
            <span>{ele.id}</span>
            ---
            <span>{ele.title}</span>
            </div>
          ))
        }
        <button
          onClick={()=>changeFilter('page', -1)}>
          上一页
        </button>
        <button
          onClick={()=>changeFilter('page', 1)}>
          下一页
        </button>
      </div>
    )
  }
))
